import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { User as UserInf } from './interface/user.interface';
import { User } from './user.entity';
@Injectable()
export class UserService {
  private readonly users: UserInf[] = [];

  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(user: UserInf) {
    this.users.push(user);
  }

  async findAll(): Promise<UserInf[]> {
    console.log('we:', await this.usersRepository.find());
    return this.users;
  }
}
