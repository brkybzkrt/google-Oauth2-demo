import { BaseEntity } from 'src/utils/base.entity';
import { Entity, Column } from 'typeorm';


@Entity({ name: 'users' })
export class User extends BaseEntity {

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @Column({})
  email: string;
}