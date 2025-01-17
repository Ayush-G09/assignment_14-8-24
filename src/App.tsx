import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
