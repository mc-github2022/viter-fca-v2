import React from "react";
import ContactForm from "./ContactForm.jsx";
import ContactTable from "./ContactTable.jsx";

const ContactWrapper = () => {
  const [showContact, setShowContact] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    setShowContact(true);
    setItemEdit(null);
  };

  return (
    <>
      <button
        className={`${false ? "pointer-events-none" : ""} text-xs`}
        onClick={() => handleAdd()}
      >
        Add Emergency Contact
      </button>

      {!showContact && (
        <ContactTable
          setShowContact={setShowContact}
          setItemEdit={setItemEdit}
        />
      )}
      {showContact && (
        <ContactForm setShowContact={setShowContact} itemEdit={itemEdit} />
      )}
    </>
  );
};

export default ContactWrapper;
