import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TopicController } from './topic/topic.controller';

@Module({
  imports: [UserModule],
  controllers: [TopicController],
})
export class AppModule {}
