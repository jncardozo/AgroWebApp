import React from 'react';

import Modal from './Modal';

//hooks permite que componentes funcionales manejen conceptos de clases como por ej estados
//hooks solo funcionan en componentes funcionales
function DeleteBadgeModal(props) { // funcion no tiene ciclo de vidas ni estados propios para manejar
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are You Sure?</h1>
        <p>You are about to delete this badge.</p>

        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
            Delete
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;