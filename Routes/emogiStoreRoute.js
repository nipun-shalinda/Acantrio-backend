const express = require("express");
const router = express.Router()
const { getAllStrories, createStory, getTranslation, createTranslation } = require("../Controller/emojiStoreController")


router.get('/', getAllStrories)
router.post('/', createStory)

//tanslations
router.get('/tanslation',getTranslation)
router.post('/tanslation',createTranslation)

module.exports = router

