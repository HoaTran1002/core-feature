import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class Repositories {
  constructor(public readonly userRepository: UserRepository) {}
}
