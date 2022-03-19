import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  LeftSide,
  Form,
  Field,
  RightSide,
  Input,
  Button,
} from "../styles/Login.style";
import { useDispatch } from 'react-redux';
import { authStart, logoutStart } from '../redux/actions/Auth.actions';
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const authenticate = () => {
    const data = { email, password };
    dispatch(authStart(data))
  };

  useEffect(() => {
    if(isLoggedIn){
      console.log(isLoggedIn)
      window.location.href("localhost:3000/");  
    }
  }, [isLoggedIn]);
  
  

  return (
    <Container>
      <Card>
        <LeftSide>
          <Form>
            <h1 className="title">Login ✌️</h1>
            <Field>
              <Input type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)}/>
            </Field>
            <Field>
              <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Field>
            <Button type="submit" onClick={(e) => {
              e.preventDefault();
              authenticate()}
              }>Login</Button>
            <p className="cadastro">
              Não possui cadastro?
              <Link to="/register"> Registre-se!</Link>
            </p>
          </Form>
        </LeftSide>
        <RightSide></RightSide>
      </Card>
    </Container>
  );
};

export default Login;
