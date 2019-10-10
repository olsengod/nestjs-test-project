import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { UserService } from './service';
import { CreateUserDto, UpdateUserDto } from './types';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() { name, age }: CreateUserDto,
  ) {
    const userId: string = await this.userService.createUser(name, age);
    return { newUserId: userId };
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') userId: string) {
    return this.userService.getUser(userId);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body() { name, age }: UpdateUserDto,
  ) {
    return this.userService.updateUser(userId, name, age);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string) {
    await this.userService.deleteUser(userId);
    return null;
  }
}
