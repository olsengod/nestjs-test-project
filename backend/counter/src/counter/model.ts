import { Schema, Connection } from 'mongoose';

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  resourceURI: { type: String, required: false },
});

export const CharacterModel = (connection: Connection) => connection.model('Character', CharacterSchema);
