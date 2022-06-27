import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/entities/user/user.module';
import { SocketGateway } from './gateway/web-socket.gateway';

@Module({
  imports: [AuthModule, UserModule],
  providers: [SocketGateway]
})
export class WebSocketModule {}
