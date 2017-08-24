'use strict';
import React from 'react';
// import Screen from './Screen';

import Header from '../includes/Header';
import Sidebar from '../includes/Sidebar';
import Footer from '../includes/Footer';
// const logo = require('../img/rayasem-logo-color.png');

export default function () {
  return (
    <div>
      <Header />
      <Sidebar />
      <div style={styles.content}>
          <span>Home Page Desktop/Web</span>
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
