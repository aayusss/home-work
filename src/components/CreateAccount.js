import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { registerInitiate } from '../Redux/Action';
import '../style/Login.css';

const CreateAccount = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser, history]);
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { email, password, displayName, confirmPassword } = state;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    dispatch(registerInitiate(email,password,displayName));
    setState({email:"",password:"",displayName:"",confirmPassword:""})
  };
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
            id="inputDisplay"
            type="text"
            value={displayName}
            name="displayName"
            onChange={handleChange}
            placeholder="enter name"
            required
          />
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
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="password"
            required
          />
          <input
            className="input input1"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            placeholder="confirm password"
            required
          />
          <button type="submit" className="btn">
            signUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
