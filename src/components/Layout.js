import React from 'react';
import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;
  // <React.Fragment> herramienta que sirve para evitar los div de mas
  return (
    <React.Fragment> 
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;