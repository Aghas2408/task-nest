import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/entities/user/user.service';
import { User } from 'src/entities/user/users.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,

    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user: User = request.user;

    this.userService.findOneById(user.id).then((storedUser) => {
      roles.indexOf(storedUser.role) > -1;
      return true;
    });
  }
}
