import { useEffect } from 'react';
import css from './ContactList.module.css'
import { toast } from 'react-toastify';
import { fetchContactsDataThunk, fetchContactsDeleteThunk } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contactDetails.contacts)
  const filterContacts = useSelector(state => state.contactDetails.filter)
  const error = useSelector(state => state.contactDetails.contacts.error)

  useEffect(() => {
    dispatch(fetchContactsDataThunk());
  }, [dispatch]);
  
  const loding = useSelector(state => state.contactDetails.contacts.isLoading)



  const visibleContact = contacts.items.filter(constact => constact.name.toUpperCase().includes(filterContacts))
  if (error) {
    toast.error("Error operation failed", {
    position: toast.POSITION.TOP_CENTER
  })}
  
       
  return (loding && <Loader />) ||
    <>
            <p className={css.TextContactList}>Contact List</p>
                  <ul className={css.container__contact}>
                       { visibleContact?.map(el => {
                          return <li className={css.item__contact} key={el.id}>
                                    <p className={css.text__contact}>{el.name}: {el.number}</p>
                                    <button className={css.btn__delete__contact}  onClick={(e) => dispatch(fetchContactsDeleteThunk(el.id))} type="button">
                                      Delete
                                    </button>
                                  </li>
                              })}
                      </ul>  
     </>
}