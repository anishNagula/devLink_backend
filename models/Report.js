const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who reported the content
  target: { type: mongoose.Schema.Types.ObjectId, required: true }, // ID of the reported content (post, comment, thread)
  targetType: { type: String, enum: ['Post', 'Comment', 'Thread'], required: true }, // Type of the reported content
  reason: { type: String, required: true }, // Reason for the report
  status: { type: String, enum: ['Pending', 'Resolved', 'Dismissed'], default: 'Pending' },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }, // Admin who reviewed the report
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
