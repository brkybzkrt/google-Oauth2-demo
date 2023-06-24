import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from 'src/utils/guards';


@Controller('auth')
export class AuthController {
  constructor() {}

@Get('/login')
@UseGuards(GoogleAuthGuard)
  login(){
    return ""
  }


  @Get('/redirect')
  @UseGuards(GoogleAuthGuard)
  redirect(){
    return "Redirect Page after logged in"
  }
}
