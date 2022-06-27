import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { AuthService } from 'src/auth/auth.service';
import { Socket } from 'socket.io';
import { UserService } from 'src/entities/user/user.service';
import { UnauthorizedException } from '@nestjs/common';
import { User, UserRole } from 'src/entities/user/users.entity';

const options = {
  cors: {
    origin: ['https://hoppscotch.io', 'http://localhost:4200'],
  },
};

@WebSocketGateway(options)
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {


  @WebSocketServer()
  server;

  constructor(private authService: AuthService, private userService: UserService) {}

  handleDisconnect() {
    console.log('On Connect');
  }

  handleConnection() {
    console.log('On Disconnect');
  }

  @SubscribeMessage('message')
  async handleMessage(socket: Socket) {
    try {
      const decodedToken = await this.authService.verifyJwt(socket.handshake.auth.token);
      const user = await this.userService.getOne(decodedToken.user.id);

      if (!user) {
        return this.disconnect(socket);
      } else {
        if(user.role === UserRole.ADMIN) {
          await this.server.to(socket.id).emit('messages', {
            accessTo: UserRole.ADMIN,
            message: 'this is a admin tab'
          });
        } else if(user.role === UserRole.GUEST) {
          await this.server.to(socket.id).emit('messages', {
            accessTo: UserRole.GUEST,
            message: 'this is a guest tab'
          });
        } else if(user.role === UserRole.SUPERVISOR) {
          await this.server.to(socket.id).emit('messages', {
            accessTo: UserRole.SUPERVISOR,
            message: 'this is a supervisor tab'
          });
        } else {
          await this.server.to(socket.id).emit('messages', {
            accessTo: UserRole.USER,
            message: 'this is a user tab'
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  private disconnect(socket: Socket) {
    socket.emit('Error', new UnauthorizedException());
    socket.disconnect();
  }
}
