const mongoose = require('mongoose');

const ArtisanSchema = new mongoose.Schema({
    artisanOfTheMonth: {
        type: String,
        required: true,
    },
    sales: {
        type: Number,
        required: true,
    },
    rank: {
        type: Number,
        required: true,
    },
    earnings: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Artisan', ArtisanSchema);
