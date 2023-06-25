import { BaseEntity } from 'src/utils/base.entity';
import { Entity, Column } from 'typeorm';


@Entity({ name: 'users' })
export class User extends BaseEntity {

  @Column({ type: 'varchar', length: 100 })
  displayName: string;

  @Column({})
  email: string;
}