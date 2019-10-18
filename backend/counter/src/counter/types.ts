import { Document } from 'mongoose';

export interface CharacterDB extends Document {
  id: string;
  name: string;
  description: string;
  resourceURI: string;
}
