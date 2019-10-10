import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { User } from './types';
import userCfg from '../../config/user';

@Injectable()
export class UserService {
  constructor(
    @Inject(userCfg.model_provider)
    private readonly userModel: Model<User>,
  ) {}

  async getAllUsers() {
    const users = await this.userModel.find().exec();
    return users.map(user => ({
      id: user.id,
      name: user.name,
      age: user.age,
    }));
  }

  async getUser(id: string) {
    const user = await this.findUser(id);
    return {
      id: user.id,
      name: user.name,
      age: user.age,
    };
  }

  async findUser(id: string) {
    try {
      const user = await this.userModel.findById(id).exec();
      if (!user) {
        throw new NotFoundException('Could not find product.');
      }
      return user;
    } catch (err) {
      throw new NotFoundException('Could not find user.');
    }
  }

  async createUser(name: string, age: number) {
    const newUser = new this.userModel({
      name,
      age,
    });
    const result = await newUser.save();
    return result.id as string;
  }

  async updateUser(id: string, name: string, age: number) {
    const updatingUser = await this.findUser(id);
    if (name) {
      updatingUser.name = name;
    }
    if (age) {
      updatingUser.age = age;
    }
    updatingUser.save();
    return {
      id: updatingUser.id,
      name: updatingUser.name,
      age: updatingUser.age,
    };
  }

  async deleteUser(id: string) {
    const result = await this.userModel.deleteOne({_id: id}).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find user.');
    }
  }
}
