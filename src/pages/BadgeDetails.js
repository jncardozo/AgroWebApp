import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetails(props) {  
  const badge = props.badge;
  //console.log("BadgeDetails",badge);
  return (
    <div>
      <div className="Badges__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {/* {badge.firstName} {badge.lastName} */}
                Tarjeta de Presentación <br/>
                {badge.data[0].nombre} {badge.data[0].apellido}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col py-5">
            <div className="Badge_Details">
              <Badge
                // firstName={badge.firstName}
                // lastName={badge.lastName}
                // email={badge.email}
                // twitter={badge.twitter}
                // jobTitle={badge.jobTitle}
                firstName={badge.data[0].nombre}
                lastName={badge.data[0].apellido}
                email={badge.data[0].imagen}
                jobTitle={badge.data[0].localidad.descripcion}
                twitter={badge.data[0].correo}              
              />
            </div>          
          </div>          
          <div className="col py-5">
            <h2>Acciones</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.data[0].id}/edit`}                  
                >
                  Editar datos de contacto
                </Link>
              </div>

              <div>
                <Link 
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.data[0].id}/items`}
                >
                  Visualizar Productos / Servicios Asociados
                </Link>
              </div>

              {/* <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;