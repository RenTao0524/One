import { Body, Controller, Get, Post } from '@nestjs/common';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
  constructor(private topicService: TopicService) {}

  @Post('create')
  async createTopic(@Body() body: any) {
    return this.topicService.create(body);
  }

  @Get('list')
  getList() {
    return {
      list: [],
    };
  }
}
