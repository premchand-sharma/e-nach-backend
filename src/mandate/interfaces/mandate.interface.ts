import { Document } from 'mongoose';

interface MandateData {
  maximum_amount: string;
  instrument_type: string;
  first_collection_date: string;
  is_recurring: boolean;
  frequency: string;
  customer_name: string;
  customer_account_number: string;
  destination_bank_id: string;
  destination_bank_name: string;
  customer_account_type: string;
  customer_ref_number: string;
  scheme_ref_number: string;
  collection_amount: string;
}

export interface Mandate extends Document {
  readonly created_date: string;
  readonly customer_identifier: string;
  readonly auth_mode: string;
  readonly mandate_type: string;
  readonly corporate_config_id: string;
  readonly mandate_data: MandateData;
}
