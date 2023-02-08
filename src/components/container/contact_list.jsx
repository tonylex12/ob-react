import React from "react";
import ContactComponent from "../pure/contact";
import { Contact } from "../../models/contact.class";

const ContactListComponent = () => {

  const defaultContact = new Contact('Antony', 'Huerto', 'tonylex12@gmail.com', false)

  return (
    <div>
      <div>
        <h1>Your Contacts:</h1>
      </div>
      <ContactComponent 
        contact={ defaultContact }
      />
    </div>
  )
}


export default ContactListComponent