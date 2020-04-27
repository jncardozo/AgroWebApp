import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      //const data = await api.badges.read(this.props.match.params.badgeId); //match.params te sirve para acceder lo que viene por URL, id del batch en este caso

      var myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      const response = await fetch(
        // `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
        `https://webapiagro2020.azurewebsites.net/api/Productor/GetById/${this.props.match.params.badgeId}`,
        myHeaders
      );
      const data = await response.json();   

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        //...this.state.form, //esto es para que los datos que ya tenia el form no se pierdan
        ...this.state.form.data[0],
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    //console.log("badgeedit",this.state.form);
    return (      
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                // firstName={this.state.form.firstName || 'FIRST_NAME'}
                // lastName={this.state.form.lastName || 'LAST_NAME'}
                // twitter={this.state.form.twitter || 'twitter'}
                // jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                // email={this.state.form.email || 'EMAIL'}
                // avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                firstName={this.state.form.data[0].nombre || 'FIRST_NAME'}
                lastName={this.state.form.data[0].apellido || 'LAST_NAME'}
                twitter={this.state.form.data[0].correo || 'twitter'}
                jobTitle={this.state.form.data[0].localidad.descripcion || 'JOB_TITLE'}
                email={this.state.form.data[0].imagen || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                edit={true}
              />
            </div>

            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                // formValues={this.state.form}
                formValues={this.state.form.data[0]}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;