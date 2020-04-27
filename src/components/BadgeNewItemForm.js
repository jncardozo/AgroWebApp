import React from 'react';

class BadgeNewItemForm extends React.Component {

  state = {
    loading: true,
    error: null,     
    selectedValue : '',
  };
  
  returnValue(id){
    this.setState(
      {
        ...this.state,
        selectedValue: id,
      }
    );
  }

  handleDropdownChange = (e) => {    
    this.props.formValues.LocalidadId = e.target.value
    //console.log("selectedValue",e.target.value)
  }

  render() {
    //console.log("badgeNEWITEMform PROPS",this.props);
        
    let optionItems = this.props.formValues.location.map((item) =>    
       <option value={item.id} key={item.id}>{item.descripcion}</option>
    );

    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">            
            <label>Titulo</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="Titulo"              
              value={this.props.formValues.Titulo}
            />            
          </div>

          <div className="form-group">            
            <label>Descripcion</label>
            <textarea
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="Descripcion"
              value={this.props.formValues.Descripcion} 
            />
          </div>

          <div className="form-group">
            <label>Fecha de Alta</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="date"
              name="FechaAlta"              
              value={this.props.formValues.FechaAlta}
            />
          </div>
          
          <div className="form-group">
            <div className="drop-down">            
              <p>Localidad</p>
              <select onChange={this.handleDropdownChange}>
                  {/* {
                    this.props.formValues.location.map((obj, i) =>
                    {
                      return <option value={obj.id} key={i} onChange={this.handleDropdownChange}>{obj.descripcion}</option>
                    })
                  } */}
                  {optionItems}
              </select>
            </div>
          </div>

          <div className="form-group">            
            <label>Codigo de Video</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="VideoCod"
              value={this.props.formValues.VideoCod}              
            />
          </div>

            <input
              onChange={this.props.onChange}
              hidden={true}
              type="text"
              name="imageURL"
              value={this.props.formValues.imageURL}              
            />

            <input
              onChange={this.props.onChange}
              hidden={true}
              type="text"
              name="file"
              value={this.props.formValues.file}            
            />

          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeNewItemForm;