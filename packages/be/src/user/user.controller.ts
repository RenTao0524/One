import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from './interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  /**
   * 创建新用户
   * @param body
   * @returns
   */
  @Post('create')
  async create(@Body() body: User) {
    return await this.userService.create(body);
  }
  /**
   * 删除用户
   * @param id
   * @returns
   */
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }

  /**
   * 获取用户信息
   * @param id
   * @returns
   */
  @Get('info/:id')
  async getInfo(@Param('id') id: number) {
    return await this.userService.getInfo(id);
  }

  /**
   * 更新用户信息
   * @param id
   * @param body
   * @returns
   */
  @Put(':id')
  async updateInfo(@Param('id') id: number, @Body() body: User) {
    return await this.userService.updateInfo(id, body);
  }

  /**
   * 获取用户列表
   * @param query
   * @returns
   */
  @Get('list')
  async getUserList(@Query() query: User) {
    const list = await this.userService.getUserList(query);
    return {
      code: 200,
      message: 'success',
      data: {
        limit: 10,
        list,
      },
    };
  }
}
