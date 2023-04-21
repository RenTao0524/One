import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from './topic.entity';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic) private topicRepository: Repository<Topic>,
  ) {}

  create(body: any) {
    const topic = new Topic();
    topic.title = body.title;
    topic.content = body.content;
    return this.topicRepository.save(topic);
  }
}
