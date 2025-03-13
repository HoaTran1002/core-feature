import { Injectable } from '@nestjs/common';
import { Repositories } from 'src/repositories/repository';

@Injectable()
export class AuthService {
  constructor(private readonly repositories: Repositories) {}
}

export class loginWithGoogle {
  authCode: string;
  constructor() {}
  oauthSignIng() {}
}
