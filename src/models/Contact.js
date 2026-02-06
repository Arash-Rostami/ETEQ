import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    lang: {
        type: String,
        default: 'en',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);