import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeItems.css';
import Gravatar from './Gravatar';
import confLogo from '../images/badge-header.svg';

class BadgesListItem extends React.Component {  
    render() {    
      return (        
        <div className="BadgesListItem">
          <Gravatar
            className="BadgesListItem__avatar"            
            email={this.props.badge.item.imagen}
          />  
          <div>
            <strong>              
                {this.props.badge.item.titulo}
            </strong>                
            <br />{this.props.badge.item.descripcion}              
            <br />@{this.props.badge.item.videoCod}
            <br />{this.props.badge.item.fechaAlta}
          </div>
        </div>
      );
    }
}

class BadgeItems extends React.Component {
  
  state = {
    loading: true,
    error: null,
    data: {
        info: {},
        results: [],        
    },
    modalIsOpen: false,
    badgeFilter: '',
    filterBadges: []
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
        `https://webapiagro2020.azurewebsites.net/api/Productor/GetProdItemsById/${this.props.match.params.badgeId}`,
        myHeaders
      );
      const data = await response.json();   
      
      this.setState({ loading: false, data: {
        info: data.data, results: [].concat(this.state.data.results,data.data)        
        } });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = (e) => {
    this.setState({
      badgeFilter: e.target.value.substr(0,20)
    });
  }
  
  render()
  {
    // if (search.filteredBadges.length === 0) 
    // {
    //     return (
    //       <div>
    //         <div className="form-group">
    //           <label>Filter Items</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             value={search.query}
    //             onChange={e => {
    //                 search.setQuery(e.target.value);
    //             }}
    //           />
    //         </div>
    
    //         <h3>No items were found</h3>
    //         <Link className="btn btn-primary" to="/badges/new">
    //           Create new item
    //         </Link>
    //       </div>
    //     );
    // }
    
        
    let filterBadges = this.state.data.results.filter(
        (badge) => {
            return badge.item.titulo.toLowerCase().indexOf(
                this.state.badgeFilter.toLowerCase() 
            ) !== -1;
        }
    );
        
    var id = this.props.match.params.badgeId;
    //console.log("id",id);

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
        
        <div className="Badges__container">            
            {/* <div className="form-group"> */}
            <div className="form-group">                
                <br/>
                <div className="Badges__buttons">
                  <Link to={`/badges/${this.props.match.params.badgeId} /newItem`} className="btn btn-primary">                    
                    Crear nuevo Producto / Servicio
                  </Link>
                </div>
                <label>Filtrar por Nombre de Producto / Servicio</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.badgeFilter}
                  onChange={this.handleChange}
                />
            </div>
            <ul className="list-unstyled">
                <div >
                    {filterBadges.map(badge => {
                        return(                            
                            <li key={badge.item.id}>                                                                
                                <BadgesListItem badge={badge} />
                                <br/>
                            </li>
                        )             
                    })}                    
                </div>
            </ul>
        </div>
      </React.Fragment>
      );
    }
}

export default BadgeItems;