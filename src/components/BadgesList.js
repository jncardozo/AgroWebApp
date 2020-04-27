import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          // email={this.props.badge.name}
          // image={this.props.badge.image}
          email={this.props.badge.imagen}          
        />

        <div>
          <strong>
            {/* {this.props.badge.name} {this.props.badge.species} */}
            {this.props.badge.nombre} {this.props.badge.apellido}
          </strong>
          <br />@{this.props.badge.correo}
          <br />
          {this.props.badge.telefono}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  //hook use state
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  //hook useMemo  , recibe funcion y una lista
  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.nombre} ${badge.apellido}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]); // si badges o query cambia se ejecuta la funcion de nuevo

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  // console.log("funcion BadgesList props", props);  
  const badges = props.badges;

  //hook use state  
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filtrar por Nombre/Apellido</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filtrar por Nombre/Apellido</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;