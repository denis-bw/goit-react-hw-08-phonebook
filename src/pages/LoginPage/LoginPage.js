import { useDispatch } from "react-redux";
import { fetchLogUser } from "redux/operations";
import css from './LoginPage.module.css'
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
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
    const { email, password } = e.target;
    dispatch(fetchLogUser({ email: email.value, password: password.value })) 
    
    
    email.value = '';
    password.value = '';
  };
    
  if(err) {notify()}
  //bwden1234
  //densi105@gmail.com
  //xxxas12s

  // ------
  //asdfxxxx
  //d11aensi1205@gmail.com
  //d1aensi1205
  return (
    <div className={css.ContainerForm}>
       <form onSubmit={onSubmit} className={css.FormLogin}>
        <label>
          <p className={css.textInput}>Email</p>
          <input className={css.LoginInput} type="email" name="email" required title="" />
        </label>
        <label>
          <p className={css.textInput}>Password</p>
          <input className={css.LoginInput} type="password" name="password" required autoComplete="on" title="" />
        </label>
        <button className={css.btnLogin} type="submit">Submit</button>
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

export default LoginPage