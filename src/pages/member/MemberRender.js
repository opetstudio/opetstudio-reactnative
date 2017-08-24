'use strict';
import React from 'react';
import Header from '../includes/Header';
import Sidebar from '../includes/Sidebar';
import Footer from '../includes/Footer';

// import UsersList from '../../components/UsersList/UsersList';
import UsersContainer from '../../containers/UsersContainer/UsersContainer';

export default function () {
  return (
    <div>
      <Header />
      <Sidebar />
      {/* <div style={styles.content}>
          <span>Counter Page Desktop/Web</span>
          <button onClick={() => { this._onPressButton(); }}>
            Load Data
          </button>
      </div> */}
      <div>
        {/* {
          // this.props.users.isFetching && <span>Loading</span>
        } */}
        <UsersContainer />
      </div>
      <Footer />
    </div>
  );
}

// const styles = {
//   content: {
//     backgroundColor: '#61BD8C'
//   }
// };
