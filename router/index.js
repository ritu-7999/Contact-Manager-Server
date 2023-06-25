//import express
import express from "express";
import { addContact, deleteContact, getContact, getContacts, updateContact } from "../controller/index.js";
//create an instance of router
const router = express.Router();
router.route("/contacts").get(getContacts).post(addContact);
router.route(`/contacts/:id`).get(getContact).delete(deleteContact).put(updateContact);
export default router;
