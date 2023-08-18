import { ContactForm } from "components/Contacts/ContactForm/ContactForm";
import { ContactList } from "components/Contacts/ContactList/ContactList";
import { FilterContact } from "components/Contacts/FilterContact/FilterContact";
import css from './ContactsPage.module.css'

const ContactsPage = () => {

  return <div className={css.ContactContainer}>

            <FilterContact/>
            
            <ContactList />
            
            <ContactForm />
        </div>
      
  
};

export default ContactsPage