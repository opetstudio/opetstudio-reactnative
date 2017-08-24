import React from 'react';
// import PropTypes from 'prop-types';
// import { fetchData } from '../../../actions/fetchData';
import UsersList from '../../components/UsersList/UsersList';

export default function () {
    return (
      <div>
        <span>Members Page Desktop/Web</span>
        <button onClick={() => { this._onPressButton(); }}>
          Load Data
        </button>
        <UsersList title="Users">
          {
            this.props.users.data.length ?
            (
              this.props.users.data.map(
                (person, i) => (
                    <div key={i} >
                      <span>Name: {person.name}</span>
                      <span>Age: {person.age}</span>
                    </div>
                )
              )
            ) : null
          }
        </UsersList>
      </div>
  );
}


// UsersContainerRender.propTypes = {
//   users: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired
//   })).isRequired
// };

// export default UsersContainerRender;
