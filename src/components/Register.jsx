import React, { useState } from "react";
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
import { authStart } from '../redux/actions/Auth.actions';
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const authenticate = () => {
    if(password === confirmPassword){
    const isRegister = true
    const data = { name, email, password, confirmPassword, isRegister };
    dispatch(authStart(data));
    }else{
        alert("Senhas não conferem")
    }
  };

  return (
    <Container>
      <Card>
        <LeftSide>
          <Form>
            <h1 className="title">Registrar ✌️</h1>
            <Field>
              <Input type="text" placeholder="Nome de Usuário" onChange={(e) => setName(e.target.value)}/>
            </Field>
            <Field>
              <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            </Field>
            <Field>
              <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
            </Field>
            <Field>
              <Input type="password" placeholder="Confirme o Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            </Field>
            <Button type="submit" onClick={(e) => {
              e.preventDefault();
              authenticate()}
              }>Registrar</Button>
            <p className="cadastro">
              Já possui cadastro?
              <Link to="/login"> Entre com sua conta!</Link>
            </p>
          </Form>
        </LeftSide>
        <RightSide></RightSide>
      </Card>
    </Container>
  );
};

export default Login;
