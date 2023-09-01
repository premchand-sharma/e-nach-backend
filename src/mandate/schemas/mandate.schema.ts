import * as mongoose from 'mongoose';

export const MandateSchema = new mongoose.Schema({
  created_date: {
    type: Date,
    default: Date.now,
  },
  customer_identifier: String,
  auth_mode: String,
  mandate_type: String,
  corporate_config_id: String,
  mandate_data: {},
});
