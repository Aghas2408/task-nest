import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { LoginUserDto } from './dto/loginUsesrDto';
import { User } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private authService: AuthService,
  ) {}

  async create(userDto: CreateUserDto): Promise<User> {
    const isUserExists = await this.mailExists(userDto.email);
    console.log(isUserExists);

    if (isUserExists) {
      throw new HttpException('Email already in use', HttpStatus.CONFLICT);
    }

    const hashedPassword = await this.authService.hashPassword(
      userDto.password,
    );

    userDto.password = hashedPassword;

    const user = await this.userRepository.save(userDto);

    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.find();
  }

  async login(userDto: LoginUserDto) {
    const userInDb = await this.findUserByEmail(userDto.email);
    if (!userInDb) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isPasswordCorrect = await this.validatePassword(
      userDto.password,
      userInDb.password,
    );

    if (isPasswordCorrect) {
      return this.authService.generateJWT(userInDb);
    } else {
      throw new HttpException(
        'Login was not successful',
        HttpStatus.UNAUTHORIZED,
      );
    }

   
  }

  private async findUserByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async findOneById(id: number) {
   return await this.userRepository.findOneBy({ id });
  }

  private validatePassword(
    password: string,
    storedPasswordHash: string,
  ): boolean {
    return this.authService.comparePassword(password, storedPasswordHash);
  }

  private async mailExists(email: string): Promise<boolean> {
    const user = await this.userRepository.findOneBy({ email });
    console.log(user);

    return user ? true : false;
  }
}
