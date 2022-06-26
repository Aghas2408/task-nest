import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user/users.entity';
const bcrypt = require('bcrypt');

@Injectable({})
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateJWT(user: User) {
    return await this.jwtService.signAsync({
      user: user,
    });
  }

  hashPassword(password: string): string {
    return bcrypt.hash(password, 12);
  }

  comparePassword(password: string, storedPasswordHash: string) {
    return bcrypt.compare(password, storedPasswordHash);
  }

  signup() {
    return 'I am signed up';
  }

  signin() {
    return 'I am sign in';
  }
}
