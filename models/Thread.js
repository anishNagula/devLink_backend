const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  forum: { type: mongoose.Schema.Types.ObjectId, ref: 'Forum', required: true }, // Forum to which this thread belongs
  title: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the thread
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }], // Posts in this thread
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Thread', threadSchema);
