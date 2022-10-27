import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    profile_img: String,
});

export default mongoose.model('cards', cardSchema);
