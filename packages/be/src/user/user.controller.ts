import {
  Body,
  Controller,
  Get,
  HttpCode,
  Ip,
  Param,
  Post,
  Query,
  Req,
  Res,
  Put,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // @Get()
  // findAll(): string {
  //   return 'This action returns all cats';
  // }
  @Get('userInfo')
  // @HttpCode(204)
  getUserInfo(
    @Req() request: Request,
    @Param('name') name: string,
    @Ip() ip: string,
  ): any {
    console.log('request:', name, ip);
    // console.log(response);
    // response.send({
    //   name: 'tome',
    //   age: 12,
    // });
    const list = this.userService.findAll();
    return list;
    // {
    //   name: 'tome',
    //   age: 12,
    // };
  }
  @Post('userInfo')
  createUserInfo(
    @Query() query: any,
    @Body() body: any,
    @Param() param: any,
  ): any {
    // return @Res
    console.log(query);
    console.log(body);
    console.log('Param:', param);
    this.userService.create(query);
    return {
      ok: true,
    };
  }
  @Put('userInfo/:id')
  updateUserInfo(
    @Param() param: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    console.log('param:', param);
    res.status(HttpStatus.OK);
    return {
      success: true,
    };
  }
}
