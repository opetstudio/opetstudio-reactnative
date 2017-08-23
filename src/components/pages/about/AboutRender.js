'use strict';
import React from 'react';

import { Link } from 'react-router-dom';

export default function () {
  return (
    <div style={styles.content}>
      <div>
        <span>Page About Web/Desktop</span>
      </div>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
    </div>
  );
}

const styles = {
  content: {
    backgroundColor: '#61BD8C'
  }
};
