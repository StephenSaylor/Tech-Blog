const express = require('express')
const routes = require('./controllers/api')
const sequelize = require('./config/connection')
const path = require('path')


const PORT = process.env.PORT || 3001


