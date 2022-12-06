import Products from "./Products";
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Signin';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Products/>}></Route>
          <Route path="/products" element = {<Products/>}></Route>
          <Route path="/signin" element = {<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;