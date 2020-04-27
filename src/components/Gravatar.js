import React from 'react';
import md5 from 'md5';

// Aprende más del Gravatar en: http://gravatar.com
function Gravatar(props) {
  //console.log("GRAVATAR PROPS",props);
  const email = props.email;
  //const hash = md5(email);        
  return (    
    <img
      className={props.className}
      src={props.email}
      // src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"      
    />
  );
}

export default Gravatar;