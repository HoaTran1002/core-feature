import { Column, Entity } from 'typeorm';
import { CommonEntity } from './base/common.entity';

@Entity({ name: 'user' })
export class User extends CommonEntity {
  @Column({
    type: 'varchar',
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  userName: string;

  @Column({
    type: 'varchar',
  })
  password: string;
}
