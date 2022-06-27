import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user/users.entity';
const bcrypt = require('bcrypt');

@Injectable({})
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateJWT(user: User): Promise<string> {
    return this.jwtService.signAsync({
      user: user,
    });
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  comparePassword(password: string, storedPasswordHash: string): boolean {
    return bcrypt.compare(password, storedPasswordHash);
  }

  verifyJwt(jwt: string): Promise<any> {
    return this.jwtService.verifyAsync(jwt);
  }
}
