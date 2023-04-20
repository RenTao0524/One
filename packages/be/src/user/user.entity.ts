import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ default: 'male' })
  sex: 'male' | 'female';

  // @Column({ default: true })
  // isActive: boolean;
}
