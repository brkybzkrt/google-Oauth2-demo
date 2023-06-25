import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({
    //secret:app.get('ConfigService').get('SECRET_KEY'),
    secret:'AKSJDAHSGDHAHSYGDYJGASYDUTG1625376153ASHDJAHD65E6WH',
    saveUninitialized:false,
    resave:false,
    cookie:{
      maxAge:60000,
    }
  }))

  app.use(passport.initialize());
  app.use(passport.session());

  app.setGlobalPrefix('api')
  await app.listen(3009);
}
bootstrap();
