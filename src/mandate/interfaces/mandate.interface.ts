import { Document } from 'mongoose';

export interface Mandate extends Document {
  readonly created_date: string;
  readonly customer_identifier: string;
  readonly auth_mode: string;
  readonly mandate_type: string;
  readonly corporate_config_id: string;
  readonly mandate_data: string;
}
