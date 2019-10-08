import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
  id: string;
  name: string;
  age: number;
}

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18, max: 100 },
});

export const UserModel = (connection: mongoose.Connection) => connection.model('User', UserSchema);
