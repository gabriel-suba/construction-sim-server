const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
	input: String,
	output: String
}, { collection: 'data' })

module.exports = mongoose.model('Data', dataSchema)