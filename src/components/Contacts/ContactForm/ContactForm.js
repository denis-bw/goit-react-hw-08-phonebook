import { useDispatch,useSelector } from "react-redux";
import { fetchContactsAddThunk } from '../../../redux/operations'
import css from './ContactForm.module.css'

export function ContactForm() {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contactDetails.contacts.items)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = e.currentTarget;
    
    const equalName = contacts.find(contact => name.value.toUpperCase() === contact.name.toUpperCase()) 
    if (equalName) return alert(`${equalName.name} is already in contacts`);

    const equalNumber = contacts.find(contact => phone.value === contact.phone) 
    if (equalNumber) return alert(`${equalNumber.phone} is already in contacts`);

    dispatch(fetchContactsAddThunk({
      name: name.value,
      number: phone.value
    }))

    name.value = "";
    phone.value = "";
  };
 
        return (
            <form onSubmit={handleSubmit} className={css.form__contacts}>
                <label>
                  <p className={css.form__text}>Name</p>
                  <input
                      className={css.input__form}
                      type="text"
                      name="name"
                      pattern="^[a-zA-Z]{1,10}"
                      title="The name can contain only letters, from 1 to 10 Latin letters"
                      required/>
                </label>
                <label>
                  <p className={css.form__text}>Number</p>
                  <input
                      className={css.input__form}
                      type="tel"
                      name="phone"
                      pattern="[0-9]{9}"
                      maxLength="15"
                      title="please enter 9 digit number only (xxxxxxxxx)"
                      required
                  />
                </label>
                
            <button className={css.btn__form} type="submit">Add contact</button>
            </form>
            
    )
};