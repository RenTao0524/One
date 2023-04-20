import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { User as UserInf } from './interface/user.interface';
import { User } from './user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: UserInf) {
    const u = new User();
    u.name = user.name;
    u.age = user.age;
    return this.usersRepository.save(u);
  }

  delete(id: number) {
    return this.usersRepository.delete(id);
  }

  getInfo(id: number) {
    return this.usersRepository.findOneBy({
      id,
    });
  }

  async updateInfo(id: number, info: UserInf) {
    const target = await this.usersRepository.findOneBy({
      id,
    });
    target.age = info.age;
    target.name = info.name;

    return await this.usersRepository.save(target);
  }

  getUserList(query: any) {
    console.log(query);
    return this.usersRepository.findBy(query);
  }
}
