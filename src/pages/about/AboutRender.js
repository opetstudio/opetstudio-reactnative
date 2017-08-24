'use strict';
import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../includes/Header';
import Sidebar from '../includes/Sidebar';
import Footer from '../includes/Footer';

export default function () {
  return (
    <div>
      <Header />
      <Sidebar />
      <div style={styles.content}>
          <span>About Page Desktop/Web</span>
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
