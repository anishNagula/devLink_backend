const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who has admin privileges
  role: { type: String, enum: ['Moderator', 'SuperAdmin'], default: 'Moderator' }, // Admin role
  assignedReports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }], // Reports assigned to the admin
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Admin', adminSchema);
