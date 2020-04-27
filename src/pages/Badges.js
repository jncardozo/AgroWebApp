import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    //data: undefined,
    data: {
      info: {},
      results: []
    },
    nextPage: 1
  };

  componentDidMount() {
    this.fetchData();
    //this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    //clearInterval(this.intervalId);
  }

  // fetchData = async () => {
  //   this.setState({ loading: true, error: null });

  //   try {
  //     const data = await api.badges.list();
  //     this.setState({ loading: false, data: data });
  //   } catch (error) {
  //     this.setState({ loading: false, error: error });
  //   }
  // };
  
  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      
      var myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      const response = await fetch(        
        'https://webapiagro2020.azurewebsites.net/api/Productor/'
      );
      const data = await response.json();            
      this.setState({
        loading: false,
        data: {
          info: data.data,
          results: [].concat(this.state.data.results,data.data)
          // results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  
  render() {        
    // console.log("badges state", this.state);
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

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
          <br/>
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Nuevo Productor
            </Link>
          </div>

          <BadgesList badges={this.state.data.results} />

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;