import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18, max: 100 },
});

export const UserModel = (connection: mongoose.Connection) => connection.model('User', UserSchema);
