const StoreModel = require('../Model/emojiStoreModel')
const TranslationModel = require('../Model/TranslationModel')


const getAllStrories = async (req, res) => {
    try {
        const stories = await StoreModel.find()
        res.status(200).json(stories)
    } catch (error) {
        res.status(500).json(error)
    }
}

const PatchStory = async (req, res) => {
    try {
        const findStory = await StoreModel.findById(req.params.id);

        if(!findStory){
            res.status(404).json('Story not found')
        }
        findStory.likes ++
        await findStory.save()
        res.status(200).json(postStoriy)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createTranslation = async (req, res) => {
    try {
        const postStoriy = await TranslationModel.create({...req.body})
        res.status(200).json(postStoriy)
    } catch (error) {
        res.status(500).json(error)
    }
}
const getTranslation = async (req, res) => {
    try {
        const postStoriy = await TranslationModel.find({storyId: req.params.story_id})
        res.status(200).json(postStoriy)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createStory = async (req, res) => {
    try {
        const postStoriy = await StoreModel.create({...req.body})
        res.status(200).json(postStoriy)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getAllStrories, createStory, PatchStory, getTranslation, createTranslation}