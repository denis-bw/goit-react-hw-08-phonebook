import { useDispatch } from "react-redux";
import { fetchAuthorizationUser } from "redux/operations";


const RegisterPage = () => {

  const dispatch = useDispatch()
  const onSubmit = (e) => { 
    e.preventDefault();
    const { username, email, password } = e.target;
    
    dispatch(fetchAuthorizationUser({name: username.value, email:email.value, password: password.value})) 
    username.value = '';
    email.value = '';
    password.value = '';
  };
  return (
    <div>
        <form onSubmit={onSubmit}>
        <label>
          Username
          <input type="text" name="username" required title="" />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required autoComplete="on" title="a" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage