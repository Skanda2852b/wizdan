import mongoose from 'mongoose';

const CloudExpertiseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyFeatures: [String],
  useCases: [String],
  implementationApproach: {
    type: String,
    required: true,
  },
  successMetrics: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.CloudExpertise || mongoose.model('CloudExpertise', CloudExpertiseSchema);