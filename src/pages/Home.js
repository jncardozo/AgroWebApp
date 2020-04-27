import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import platziconfLogoImage from '../images/platziconf-logo.svg';
import astronautsImage from '../images/astronauts.svg';
import video from '../images/videos/atardecer.mp4';
import classes from './styles/BackgroundVideo.module.css';
import avatarLogo from '../images/preview.jpg';

export default class Home extends Component {
  render() {
    return (            

      <div className={classes.Container} >
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={classes.Content}>          
                <div className={classes.SubContent} >
                    <img
                        // src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        // src="https://pbs.twimg.com/profile_images/587623788625313792/4PhruaKa_400x400.png"
                        src={avatarLogo}
                        alt="profile" 
                    />
                    <h1>Módulo de Produtores Agropecuarios</h1>
                    <p>Hora de hacer grandes cosas!!!</p>                    
                    <Link className="btn btn-info" to="/badges">
                       Acceder
                    </Link>
                </div>
        </div>        
      </div>      


      // <div className="Home">        
      //   <div className="container">
      //     <div className="row">
      //       <div className="Home__col col-12 col-md-4">                            
      //         <img
      //           src={platziconfLogoImage}
      //           alt="Platzi Conf Logo"
      //           className="img-fluid mb-2"
      //         />

      //         <h1>Badge Management System</h1>
      //         <Link className="btn btn-primary" to="/badges">
      //           Start
      //         </Link>
      //       </div>

      //       <div className="Home__col d-none d-md-block col-md-8">
      //         <img
      //           src={astronautsImage}
      //           alt="Astronauts"
      //           className="img-fluid p-4"
      //         />
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}