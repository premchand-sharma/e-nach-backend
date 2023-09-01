import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly password: string;
  readonly name: string;
  readonly age: string;
  readonly created_date: string;
}
