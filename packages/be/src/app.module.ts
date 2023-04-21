import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { TopicModule } from './topic/topic.module';
import { Topic } from './topic/topic.entity';

@Module({
  imports: [
    TopicModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rentao@1638',
      database: 'ugc',
      // autoLoadEntities: true,
      entities: [User, Topic],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
