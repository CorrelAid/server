'use strict'

const Router = require('express').Router

const { urlencodedParser } = require('./utils')
const allNotes = require('../allnotes')
const allNotesRouter = module.exports = Router()

// get all notes
allNotesRouter.get('/allnotes', allNotes.allNotesGet)