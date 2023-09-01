import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    created_date: Date;
    username?: string;
    password?: string;
    name?: string;
    age?: number;
}, mongoose.Document<unknown, {}, {
    created_date: Date;
    username?: string;
    password?: string;
    name?: string;
    age?: number;
}> & {
    created_date: Date;
    username?: string;
    password?: string;
    name?: string;
    age?: number;
} & {
    _id: mongoose.Types.ObjectId;
}>;
