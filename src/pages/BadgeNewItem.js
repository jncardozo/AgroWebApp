import React from 'react';

import './styles/BadgeNewItem.css';
import confLogo from '../images/badge-header.svg';
import header from '../images/platziconf-logo.svg';
import BadgeNewItemProdLoc from '../components/BadgeNewItemProdLoc';
import BadgeNewItemForm from '../components/BadgeNewItemForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeNewItem extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      ProductorId: this.props.match.params.badgeId,
      Titulo: '',
      Descripcion: '',
      FechaAlta: '',
      location: [],
      VideoCod: '',
      imageURL: '',
      file:[],
      LocalidadId: '',
    },
    data: {
      info: {},
      results: [],        
    },
  };

  componentDidMount() {    
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null});

    try {      
      var myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      const response = await fetch(        
        `https://webapiagro2020.azurewebsites.net/api/Localidad`,
        myHeaders
      );
      const data = await response.json();   
      
      this.setState({ loading: false, data: {
        info: data.data, results: [].concat(this.state.data.results,data.data)        
        } });
        
      this.setState({
        form: {
          ...this.state.form,
          location: this.state.data.results
        },          
      });  
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });        
        
    try {      
      var data = new FormData();    
      data.append("ProductorId", this.state.form.ProductorId);
      data.append("LocalidadId", this.state.form.LocalidadId);
      data.append("Descripcion", this.state.form.Descripcion);
      data.append("VideoCod", this.state.form.VideoCod);
      data.append("FechaAlta", this.state.form.FechaAlta);
      data.append("Titulo", this.state.form.Titulo);            
      data.append("file", this.state.form.file);
      var xhr = new XMLHttpRequest();      
      xhr.open('post', 'https://webapiagro2020.azurewebsites.net/api/Productor/PostProdLocItem', true);      
      xhr.onreadystatechange = function() {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
          console.log("CONECTION OK LOCALHOST");
          this.setState({ loading: false }); 
        }
      }
      xhr.send(data);           
    } catch (error) {
      console.log(
        'Error...', error
      )
      this.setState({ loading: false, error: error });
    }

    // try {
    //   await api.badges.create(this.state.form);
    //   this.setState({ loading: false });

    //   this.props.history.push('/badges');
    // } catch (error) {
    //   this.setState({ loading: false, error: error });
    // }
  };

  fileSelectedHandler = e => {    
    this.setState( 
      {
        form: {
          ...this.state.form,
          imageURL: URL.createObjectURL(this.fileInput.current.files[0]),
          file: this.fileInput.current.files[0],            
        },    
      }
    )
  }
  
  render() {
  
    this.fileInput = React.createRef();  
    if (this.state.loading) {
      return <PageLoading />;
    }
    // console.log("badgeNewItem STATE",this.state);
    // console.log("badgeNewItem PROPS",this.props);
    // console.log("badgeNewItem RESULTS",this.state.data.results);

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        
        <div className="container py-5">
          <div className="row">
            <div className="col-6">
              <BadgeNewItemProdLoc
                Titulo={this.state.form.Titulo || 'TÍTULO'}
                Descripcion={this.state.form.Descripcion || 'DESCRIPCIÓN'}
                FechaAlta={this.state.form.FechaAlta || 'FECHA DE ALTA'}
                //location={this.state.form.location || 'LOCALIDAD'}
                VideoCod={this.state.form.VideoCod || 'CODIGO DE VIDEO YOUTUBE'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                edit={true}
                imageURL = {this.state.form.imageURL || 'IMAGEN'}
                file = {this.state.form.file || 'IMAGEN FILE'}
              />                   
                <div className="Badge__section-name">
                  <input type="file" onChange={this.fileSelectedHandler} ref={this.fileInput}/>                
                </div>                            
            </div>

            <div className="col-6">
              <h1>Nuevo Producto/Servicio</h1>
              <BadgeNewItemForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNewItem;