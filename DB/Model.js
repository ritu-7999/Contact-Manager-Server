import mongoose from "mongoose";
//define the schema of collection
const contactSchema = mongoose.Schema({
    name: String,
    photo: String,
    mobile: Number,
    email: String,
    company: String,
    group: Number,
});
//create collection
const Contact = mongoose.model("Contact", contactSchema);
export default Contact;