import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { LoginInitiate } from '../Redux/Action';
import '../style/Login.css';


const Login = () => {
  const [state, setState] = useState({
      email:"",
      password:""
  });
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser, history]);
  const {email,password}=state;


  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(!email||!password){
        return;
    }
    dispatch(LoginInitiate(email,password));
    setState({email:"",password:""})
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="new_login">
      <form onSubmit={onSubmitHandler}>
        <div className="login_page">
          <input
            className="input input1"
            id="inputEmail"
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="email"
            required
          />
          <input
            className="input input2"
            id="inputPassword"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
            required
          />
          <button type="submit" className="btn">
            login
          </button>
          <NavLink to="/register">
          <button className="btn button" type="button">Create an account</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
