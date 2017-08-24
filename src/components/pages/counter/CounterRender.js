'use strict';
import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../includes/Header';
import Sidebar from '../../includes/Sidebar';
import Footer from '../../includes/Footer';

export default function () {
  return (
    <div>
      <Header />
      <Sidebar />
      <div style={styles.content}>
          <span>Counter Page Desktop/Web</span>
          <button onClick={() => { this._onPressButton(); }}>
            Load Data
          </button>
      </div>
      <div>
        {
          this.props.appData.isFetching && <span>Loading</span>
        }
        {
          this.props.appData.data.length ?
          (
            this.props.appData.data.map(
              (person, i) => (
                  <div key={i} >
                    <span>Name: {person.name}</span>
                    <span>Age: {person.age}</span>
                  </div>
              )
            )
          ) : null
        }
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  content: {
    backgroundColor: '#61BD8C'
  }
};
