const express = require('express');

module.exports = app => {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('clinet/build'));
  }
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};
