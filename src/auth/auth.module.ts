import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from 'src/utils/googleStrategy';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
    imports:[ConfigModule,TypeOrmModule.forFeature([User])],
    controllers:[AuthController],
    providers:[GoogleStrategy,{provide:"AUTH_SERVICE",useClass:AuthService}],
})
export class AuthModule {}
