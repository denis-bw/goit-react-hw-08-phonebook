import { useDispatch } from "react-redux";
import { fetchLogUser } from "redux/operations";






const LoginPage = () => {

  const dispatch = useDispatch()

  const onSubmit = (e) => { 
    e.preventDefault();
    const { email, password } = e.target;
    dispatch(fetchLogUser({email: email.value, password: password.value})) 
    email.value = '';
    password.value = '';
  };

  //bwden1234
  //densi105@gmail.com
  //xxxas12s
  return (
    <div>
       <form onSubmit={onSubmit}>
        <label>
          Email
          <input type="email" name="email" required title="" />
        </label>
        <label>
          Password
          <input type="password" name="password" required autoComplete="on" title="" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage