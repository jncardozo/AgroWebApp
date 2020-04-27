import React from 'react';

class BadgeForm extends React.Component {
  handleClick = e => {
    //console.log('Button was clicked');
  };  
  render() {
    //console.log("badgeform",this.props);
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            {/* <label>First Name</label> */}
            <label>Nombres</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              // value={this.props.formValues.firstName}
              value={this.props.formValues.nombre}
            />
          </div>

          <div className="form-group">
            {/* <label>Last Name</label> */}
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              // value={this.props.formValues.lastName}
              value={this.props.formValues.apellido}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              // value={this.props.formValues.email}
              value={this.props.formValues.correo}
            />
          </div>

          <div className="form-group">
            {/* <label>Job Title</label> */}
            <label>Localidad</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              //value={this.props.formValues.jobTitle}
              //value={this.props.formValues.localidad.descripcion}
            />
          </div>

          <div className="form-group">
            {/* <label>Twitter</label> */}
            <label>Domicilio</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              // value={this.props.formValues.twitter}
              //value={this.props.formValues.domicilio[0].direccion}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;