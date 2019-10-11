import * as mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  resourceURI: { type: String, required: true },
});

export const CharacterModel = (connection: mongoose.Connection) => connection.model('Character', CharacterSchema);
