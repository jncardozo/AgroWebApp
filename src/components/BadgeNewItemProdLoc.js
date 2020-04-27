import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import avatarLogo from '../images/preview.jpg';
import Gravatar from './Gravatar';

class BadgeNewItemProdLoc extends React.Component {
 
  render() {
    //console.log("BadgeNewItemProdLoc PROPS",this.props);
    // console.log("Badge STATE",this.state);

    return (
      <div className="Badge">        
        <div className="Badge__header">
          <img src={avatarLogo} alt="Logo de la conferencia" className="img2"/>
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.imageURL} edit={this.props.edit} />          
          <h1>
            {this.props.Titulo} <br />
          </h1>          
        </div>
               
        <div className="Badge__section-info">
          <h3>{this.props.LocalidadId}</h3>
          <div>@{this.props.VideoCod}</div>
        </div>

        <div className="Badge__footer">#Tarjeta De Presentación</div>
      </div>
    );
  }
}

export default BadgeNewItemProdLoc;