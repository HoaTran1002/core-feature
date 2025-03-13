import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseTimestampEntity {
  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    nullable: false,
    default: 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;
}

export class BaseEntity extends BaseTimestampEntity {
  @Column({
    name: 'create_by',
    type: 'varchar',
    nullable: true,
  })
  createdBy?: string;

  @Column({
    name: 'updateBy',
    type: 'varchar',
    nullable: true,
  })
  updatedBy?: string;
}

export class SoftDeletion {
  @DeleteDateColumn({
    nullable: true,
    name: 'delete_at',
  })
  deletedAt?: Date;

  @Column({ nullable: true })
  deletedBy?: string;
}
