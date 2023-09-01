import * as mongoose from 'mongoose';
export declare const MandateSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    created_date: Date;
    customer_identifier?: string;
    auth_mode?: string;
    mandate_type?: string;
    corporate_config_id?: string;
    mandate_data?: any;
}, mongoose.Document<unknown, {}, {
    created_date: Date;
    customer_identifier?: string;
    auth_mode?: string;
    mandate_type?: string;
    corporate_config_id?: string;
    mandate_data?: any;
}> & {
    created_date: Date;
    customer_identifier?: string;
    auth_mode?: string;
    mandate_type?: string;
    corporate_config_id?: string;
    mandate_data?: any;
} & {
    _id: mongoose.Types.ObjectId;
}>;
