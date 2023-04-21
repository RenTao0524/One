import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  // @Column({ default: 'male' })
  // sex: 'male' | 'female';

  // @Column({ default: true })
  // isActive: boolean;
}
