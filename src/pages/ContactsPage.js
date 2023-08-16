import { ContactForm } from "components/Contacts/ContactForm/ContactForm";
import { ContactList } from "components/Contacts/ContactList/ContactList";
import { FilterContact } from "components/Contacts/FilterContact/FilterContact";

const ContactsPage = () => {

  return (
    <div style={{ width: 300 }}>
      <FilterContact/>
      
      <ContactList />
      

      <ContactForm />
    </div>
  );
};

export default ContactsPage