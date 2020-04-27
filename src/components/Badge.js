import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import avatarLogo from '../images/preview.jpg';
import Gravatar from './Gravatar';

class Badge extends React.Component {
  // state = {
  //   image : []
  // };  

  // fileSelectedHandler = e => {
  //   console.log(this.fileInput.current.files[0]);
  //   this.setState( 
  //     {
  //       // image: e.target.files[0],
  //       image: URL.createObjectURL(this.fileInput.current.files[0]),
  //     }
  //   )
  // }

  render() {
    // console.log("Badge PROPS",this.props);
    // console.log("Badge STATE",this.state);
    
    this.fileInput = React.createRef();

    return (
      <div className="Badge">        
        <div className="Badge__header">
          <img src={avatarLogo} alt="Logo de la conferencia" className="img2"/>
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={!this.props.image ? this.props.email : this.props.image } edit={this.props.edit} />          
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>          
        </div>

        {/* {this.props.edit ?                  
          <div className="Badge__section-name">
            <input type="file" onChange={this.fileSelectedHandler} ref={this.fileInput}/>                
          </div>
          : ''
        } */}
        
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#Tarjeta De Presentación</div>
      </div>
    );
  }
}

export default Badge;