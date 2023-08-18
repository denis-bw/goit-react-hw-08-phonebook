import { useDispatch } from "react-redux";
import { fetchAuthorizationUser } from "redux/operations";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './RegisterPage.module.css'

const RegisterPage = () => {

  const dispatch = useDispatch()
  const err = useSelector(state => state.userDetails.error)
  const notify = () => toast.error('Failed operation', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });

  const onSubmit = (e) => { 
    e.preventDefault();
    const { username, email, password } = e.target;
    
    dispatch(fetchAuthorizationUser({name: username.value, email:email.value, password: password.value})) 
    username.value = '';
    email.value = '';
    password.value = '';
  };
  
  if(err) {notify()}
  return (
    <div className={css.ContainerRegister}>
        <form className={css.FormRegister} onSubmit={onSubmit}>
        <label>
          <p className={css.textRegisterForm}>Username</p>
          <input className={css.inputRegisterForm} type="text" name="username" required title="" />
        </label>
        <label>
         <p className={css.textRegisterForm}>Email</p>
          <input className={css.inputRegisterForm} type="email" name="email" required />
        </label>
        <label>
          <p className={css.textRegisterForm}>Password</p>
          <input className={css.inputRegisterForm} type="password" name="password" required autoComplete="on" title="a" />
        </label>
        <button className={css.btnRegister} type="submit">Submit</button>
      </form>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  );
};

export default RegisterPage