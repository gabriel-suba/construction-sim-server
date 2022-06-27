const express = require('express')
const router = express.Router()
const Data = require('../model/Data')

router.get('/', async (req, res) => {
	try {
		const data = await Data.find({}, '-_id input output')
		res.status(200).json(data)
	} catch (err) {
		res.status(400).json({ error: err.message })
		console.log(err.message)
	}
})

router.post('/', async (req, res) => {
	try {
		const data = new Data({ input: req.body.input, output: req.body.output })
		await data.save()
		res.status(200).json({ success: 'data have been saved to database' })
	} catch (err) {
		res.status(400).json({ error: err.message })
	}
})

module.exports = router