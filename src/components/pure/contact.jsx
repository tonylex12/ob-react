import { Contact } from "../../models/contact.class";

import React from "react";
import PropTypes from "prop-types";

const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h2>
        Name: {contact.name}
      </h2>
      <h3>
        Last Name: {contact.lastName}
      </h3>
      <h4>
        Email: {contact.email}
      </h4>
      <h5>
        This contact is: {contact.connected ? "CONNECTED" : "DISCONNECTED"}
      </h5>
    </div>
  );
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;