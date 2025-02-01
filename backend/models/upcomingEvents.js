const mongoose = require('mongoose');

const upcomingEventsSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    clubName: {
        type: String,
        required: true,
    },
    postTime: {
        type: Date,
        default: Date.now,
    },
   
});
module.exports = mongoose.model("upcomingEvents", upcomingEventsSchema);