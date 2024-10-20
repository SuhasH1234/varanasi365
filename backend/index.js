const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error, log } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors());

// Database connection with mongodb
mongoose.connect("mongodb+srv://suhash123:suhasvaranasi@cluster0.hveuh.mongodb.net/varanasi365")

// API creation
app.get("/", (req, res) => {
    res.send("Express App is running")
})

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// Creating Upload endpoint for images
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for creating products
const Product = mongoose.model("Product", {
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length>0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else {
        id=1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Creating API for deleting products
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
})

// Creating API for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

//Schema creating for user model
const Users = mongoose.model('Users', {
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String
    },
    cartData:{
        type: Object
    },
    date:{
        type: Date,
        default: Date.now,
    }
})

// Creating API for registering User
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({email:req.body.email});
    if(check) {
        return res.status(400).json({success:false, errors: "existing user found with same email address"})
    }
    let cart = {};
    for(let i = 0; i < 300; i++ ) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })
    await user.save();

    const data = {
        user:{
            id: user.id
        }
    }
    const token = jwt.sign(data, 'secret_key');
    res.json({success:true, token})
})

// Creating API for User login
app.post('/login', async (req, res) => {
    let user = await Users.findOne({email:req.body.email});
    if(user) {
        const passCompare = req.body.password === user.password;
        if(passCompare) {
            const data = {
                user:{
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_key');
            res.json({success: true, token});
        }
        else {
            res.json({success: false, errors: "Wrong Password"});
        }
    }
    else {
        res.json({success: false, errors: "Wrong Email Address"});
    }
})

// Creating API for new collection data
app.get('/newcollections', async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("New Collection Fetched");
    res.send(newcollection);
})

// Creating API for popular in the site
app.get('/popular', async (req, res) => {
    let products = await Product.find({category: "Saree"});
    let popular_in_site = products.slice(0, 4);
    console.log("Popular in the site Fetched");
    res.send(popular_in_site);
})

// Schema for artisan model
const Artisan = mongoose.model('Artisan', {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// Creating API for artisan registration (Signup)
app.post('/artisan/signup', async (req, res) => {
    let check = await Artisan.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "Existing artisan found with the same email address" });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const artisan = new Artisan({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        cartData: cart,
    });

    await artisan.save();

    const data = { artisan: { id: artisan.id } };
    const token = jwt.sign(data, 'secret_key');
    res.json({ success: true, token });
});

// Creating API for artisan login
app.post('/artisan/login', async (req, res) => {
    let artisan = await Artisan.findOne({ email: req.body.email });
    if (artisan) {
        const passCompare = req.body.password === artisan.password;
        if (passCompare) {
            const data = { artisan: { id: artisan.id } };
            const token = jwt.sign(data, 'secret_key');
            res.json({ success: true, token });
        } else {
            res.json({ success: false, errors: "Wrong Password" });
        }
    } else {
        res.json({ success: false, errors: "Wrong Email Address" });
    }
});

// Creatind Middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({errors: "Please authenticate using valid tokens"})
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_key');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors: "Please authenticate using valid tokens"})
        }
    }
}

// API for getting artisan details
app.get('/artisan/profile', async (req, res) => {
    try {
        const token = req.headers['authorization'].split(' ')[1]; // Get token from the headers
        const decoded = jwt.verify(token, 'secret_key'); // Verify the token
        const artisan = await Artisan.findById(decoded.artisan.id); // Fetch artisan by ID
        if (!artisan) {
            return res.status(404).json({ success: false, message: 'Artisan not found' });
        }
        res.json({ success: true, artisan });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Creating API for getting all artisans
// Add this to your existing index.js file after your artisan schema
app.get('/getallartisans', async (req, res) => {
    try {
        const artisans = await Artisan.find({});
        res.json(artisans);
    } catch (error) {
        console.error('Error fetching artisans:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// Creating API for adding products in cartdata
app.post('/addtocart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added");
})

// Creating API to remove product from cartdata
app.post('/removefromcart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
        res.send("Removed");
    }
})

// Creating endpoint to get cartdata
app.post('/getcart', fetchUser, async (req, res) => {
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData)
})

app.listen(port, (error) => {
    if(!error) {
        console.log("Server running on port "+port)
    }
    else {
        console.log("Error: "+error);
    }
});