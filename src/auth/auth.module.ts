import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from 'src/utils/googleStrategy';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports:[ConfigModule],
    controllers:[AuthController],
    providers:[GoogleStrategy],
})
export class AuthModule {}
