'use strict';
import React from 'react';
// import Screen from './Screen';
import { Link } from 'react-router-dom';
// const logo = require('../img/rayasem-logo-color.png');

export default function () {
  return (
    <div style={styles.content}>
      <div>
        <span>Home Page Desktop/Web</span>
      </div>
      <div>
        <Link to={'/about'}>About</Link>
      </div>
    </div>
  );
}

const styles = {
  content: {
    backgroundColor: '#61BD8C'
  }
};
