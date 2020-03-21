'use strict'

const Router = require('express').Router

const response = require('../response')

const baseRouter = (module.exports = Router())
const noteController = require('./note/controller')
const errors = require('../errors')

// get index
baseRouter.get('/', response.showIndex)
// get 403 forbidden
baseRouter.get('/403', function (req, res) {
  errors.errorForbidden(res)
})
// get 404 not found
baseRouter.get('/404', function (req, res) {
  errors.errorNotFound(res)
})
// get 500 internal error
baseRouter.get('/500', function (req, res) {
  errors.errorInternalError(res)
})

// get all notes -> this should be in note/router
baseRouter.get('/all', function (req, res) {
  if (!req.isAuthenticated()) {
    return errors.errorForbidden(res)
  }

  return noteController.showAllNotesOverview(req, res)
})
