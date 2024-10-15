import p10 from './p10.jpg';
import p6 from './p6.jpg';
import p8 from './p8.jpg';
import p9 from './p9.jpg';
import p1 from './v1.jpg';
import p5 from './p5.jpg';
import p13 from './p13.jpg';
import p15 from './p15.jpg';
import p18 from './p18.jpg';
import p20 from './p20.jpg';
import p24 from './p24.jpg';
import p23 from './p23.jpg';
import p31 from './p31.jpeg';
import p34 from './p34.jpeg';
import p30 from './p30.jpeg';
import p36 from './p36.jpeg';

let new_collections = [
    {
      id: '1',
      name: "Navy Blue Woven Jamewar Banarasi Saree",
      description: "Pure Banarasi Silk, Color: Navy Blue, 0.8 meter Blouse. Dreaming about a banarasi saree for a dreamy appearance. We bring a pure banarasi saree in wine shade with intricate hand zero gottapatti, hand aari, and master pearl work.",
      price: 6899,
      image: p10,
      category: "Saree",
      new_price: 6899.0,
      old_price: 9000.0,
    },
    {
      id: '2',
      name: "Tango Red Woven Banarasi Brocade Festive Saree",
      description: "Pure Banarasi Silk, Color: Red, 0.8 meter Blouse, Size: 5.5 meter, Care: Dry clean only.",
      price: 7899,
      image: p6,
      category: "Saree",
      new_price: 7899.0,
      old_price: 8700.0,
    },
    {
      id: '3',
      name: "Kanjivaram Kadhwa Weave Saree In The Shades Of Golden Purple And Red",
      description: "Pure Kanjivaram Silk, Color: Golden Purple And Red, 0.8 meter Blouse, Size: 5.5 meter, Care: Dry clean only.",
      price: 16999,
      image: p8,
      category: "Saree",
      new_price: 16999.0,
      old_price: 19999.0,
    },
    {
      id: '4',
      name: "Jade Lime Green Lehenga With Heavy Embroidery",
      description: "Pure Banarasi Silk, Color: Lime Green, Blouse: 0.8 meter, Lehenga: Circular (Gherao) 3 meter, Dupatta: Blended Banarasi Silk Fabric with Heavy Embroidery (2.5 meter), Care: Dry clean only.",
      price: 21599,
      image: p9,
      category: "Saree",
      new_price: 21599.0,
      old_price: 23950.0,
    },
    {
        id: '5',
        name: "Varanasi Soft Stone Nataraja (4 Inches)",
        description: "Material: Soft Stone, Usability: Showpiece/Gift Item, Weight: 120-150 grams, Dimensions: LxWxH : 3*5*4 Inches, Process: Handcrafted, Pieces: 1.",
        price: 543,
        image: p1,
        category: "Stone Carvings",
        new_price: 543.0,
        old_price: 649.0,
      },
      {
        id: '6',
        name: "Varanasi Soft Stone Jali Under Cut Double Parrot (8 Inches)",
        description: "Material: Soft Stone, Usability: Showpiece/Gift Item, Weight: 1600-1700 gms, Dimensions: LxWxH : 5.5x4.5x8.5 Inches, Process: Handcrafted, Pieces: 1.",
        price: 4460,
        image: p5,
        category: "Stone Carvings",
        new_price: 4460.0,
        old_price: 4900.0,
      },
      {
        id: '7',
        name: "Home Gauri Shankar Rudraksha",
        description: "Two naturally joined Rudrakshas are known as Gauri Shankar Rudraksha. It represents a combined form of Lord Shiva and Goddess Parvati",
        price: 3000,
        image: p13,
        category: "Rudraksha Mala",
        new_price: 3000.0,
        old_price: 3500.0,
      },
      {
        id: '8',
        name: "Om Shiva Divine Rudraksha Combo",
        description: "The Om Shiva Divine Rudraksha Combo offers a powerful spiritual tool for inner peace, protection, and well-being. This sacred set enhances meditation and connects the wearer to divine energy, promoting harmony and balance.",
        price: 2900,
        image: p15,
        category: "Rudraksha Mala",
        new_price: 2900.0,
        old_price: 3200.0,
      },
      {
        id: '9',
        name: "Red & Gold-Toned & Plated Kundan Meenakari Necklace Set",
        description: "Red & Gold-Toned & Plated Kundan Meenakari Necklace Set secured with a S Hook Closure. A pair of red & gold-plated earrings, has post and back closure.",
        price: 630,
        image: p18,
        category: "Gulabi Minakari",
        new_price: 630.0,
        old_price: 700.0,
      },
      {
        id: '10',
        name: "24K Gold Plated Red Meenakari Handcrafted Mangalsutra",
        description: "24K Gold-plated black and Red meenakari kundan studded Handcrafted mangalsutra, secured with an S-hook closure.",
        price: 780,
        image: p20,
        category: "Gulabi Minakari",
        new_price: 780.0,
        old_price: 850.0,
      },
      {
        id: '11',
        name: "Wooden 3D Model of Ram Mandir with LED Lights",
        description: "Handcrafted by skilled artisans from Varanasi, this MDF model features intricate carvings and LED lighting for an enchanting display.",
        price: 4999,
        image: p24,
        category: "Wooden Toys",
        new_price: 4999.0,
        old_price: 5500.0,
      },
      {
        id: '12',
        name: "Wooden Hand-Painted Napkin Holder",
        description: "A beautifully handcrafted napkin holder made from high-quality wood, featuring intricate hand-painted designs in vibrant colors.",
        price: 549,
        image: p23,
        category: "Wooden Toys",
        new_price: 549.0,
        old_price: 600.0,
      },
      {
        id: '13',
        name: "Lot of 240 Indian Ethnic Bangles 13 Set Metal Bracelets",
        description: "A complete set of 240 metal bangles, perfect for adding a touch of Indian ethnic style to your collection.",
        price: 1999,
        image: p31,
        category: "Bangles and Bracelets",
        new_price: 1999.0,
        old_price: 2200.0,
      },
      {
        id: '14',
        name: "Costume Matching 24 Pc Indian Metal Bangles Bracelet Set",
        description: "This set includes 24 individual green metal bangles, crafted from alloy, perfect for adding an ethnic touch to your outfit.",
        price: 399,
        image: p30,
        category: "Bangles and Bracelets",
        new_price: 399.0,
        old_price: 450.0,
      },
      {
        id: '15',
        name: "Serapi-B Hand Tufted Woollen Rug",
        description: "A tribute to Persian craftsmanship, this hand-tufted woollen rug features floral and regal motifs in shades of red, maroon, and black.",
        price: 19250,
        image: p34,
        category: "Hand Knotted Carpets",
        new_price: 19250.0,
        old_price: 21000.0,
      },
      
      {
        id: '16',
        name: "Horus Hand Woven Woollen Kilim",
        description: "Handcrafted with 100% woolen yarn, the Horus rug features traditional Moroccan motifs, combining durability and comfort for your living spaces.",
        price: 15200,
        image: p36,
        category: "Hand Knotted Carpets",
        new_price: 15200.0,
        old_price: 16000.0,
      },
  ];
  

export default new_collections;