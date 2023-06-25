import Contact from "../DB/Model.js";


export const getContacts = async (req,res) => {
    try {
        const contacts = await Contact.find({});
        console.log(contacts);
        res.status(200).json({ contacts });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({message:"Server Error"});   
    }
}
export const addContact = async (req,res) => {
    try {
        
        console.log(req.body);
        //recieve request data
        const { name, photo, mobile, email, company, group } = req.body;
        //create a contact object
        const contact = new Contact({ name: name, email: email, photo: photo, mobile: mobile, company: company, group: group });
        //save in db
        await contact.save();
        res.status(200).json({message:"Contact add successfully"});
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({message:"Server Error"});
    }
}

export const getContact = async(req, res) => {
    try {
        const contacts = await Contact.findOne({ _id: req.params.id });
        console.log("contacts",contacts);
        res.send(contacts)
    } catch (err) {
        console.log("Error",err);
    }
}

export const deleteContact = async (req, res) => {
    try {
        console.log(req.params.id);
        await Contact.deleteOne({_id:req.params.id})
        res.send("Delete Successfully")
    } catch (err) {
        
    }
}
export const updateContact = async (req, res) => {
    try {
        console.log("req", req.body);
        await Contact.updateOne({_id:req.params.id},{$set:req.body})
        // console.log("contact", contact);
        res.send("hello")
    } catch (err) {
        console.log("Error",err);
    }
}