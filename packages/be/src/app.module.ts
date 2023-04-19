import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicController } from './topic/topic.controller';
import { User } from './user/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rentao@1638',
      database: 'userinfo',
      // autoLoadEntities: true,
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [TopicController],
})
export class AppModule {}
