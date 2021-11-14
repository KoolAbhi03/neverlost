import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import { AuthProvider } from "../src/auth/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <Routes/>
  </AuthProvider>,
  document.getElementById('root')
);
