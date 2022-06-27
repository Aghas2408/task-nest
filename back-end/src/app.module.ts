import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { RoleController } from './entities/role/role.controller';
import { UserModule } from './entities/user/user.module';
import { User } from './entities/user/users.entity';
import { SocketGateway } from './web-socket/gateway/web-socket.gateway';
import { WebSocketModule } from './web-socket/web-socket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_USER_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [User, RoleController],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    JwtModule,
    WebSocketModule
  ],
  controllers: [AuthController],
  providers: [AuthService, SocketGateway],
})
export class AppModule {}
