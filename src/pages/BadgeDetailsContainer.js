import React from 'react';

import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    dataItem: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  // fetchData = async () => {
  //   this.setState({ loading: true, error: null });

  //   try {
  //     const data = await api.badges.read(this.props.match.params.badgeId);
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
        `https://webapiagro2020.azurewebsites.net/api/Productor/GetById/${this.props.match.params.badgeId}`,
        myHeaders
      );
      const data = await response.json();

      const responseItem = await fetch(
        // `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
        `https://webapiagro2020.azurewebsites.net/api/Productor/GetProdItemsById/${this.props.match.params.badgeId}`,
        myHeaders
      );
      const dataItem = await responseItem.json();  

      this.setState({ loading: false, data: data, dataItem: dataItem });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    //console.log("BadgeDetailsContainer",this.state);
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
        badgeItems={this.state.dataItem}
      />
    );
  }
}

export default BadgeDetailsContainer;