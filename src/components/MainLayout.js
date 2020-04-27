import React from 'react';
import Navbar from './Navbar';

function MainLayout(props) {
  // const children = props.children;
  // <React.Fragment> herramienta que sirve para evitar los div de mas
  return (
    <React.Fragment>       
      {props.children}
    </React.Fragment>
  );
}

export default MainLayout;