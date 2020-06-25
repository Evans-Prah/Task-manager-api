const mongoose = require('mongoose')
const validator = require('validator')


const taskSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  due_date: {
    type: Date,
    required: true,
    trim: true
  },
  priority: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Task = mongoose.model('Task', taskSchema)


module.exports = Task