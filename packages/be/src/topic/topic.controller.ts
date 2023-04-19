import { Controller, Get } from '@nestjs/common';
// import { UserService } from 'src/user/user.service';

@Controller('topic')
export class TopicController {
  //   constructor(private userService: UserService) {}
  @Get('list')
  getList() {
    // console.log('topic:', this.userService.findAll());
    return {
      list: [],
    };
  }
}
