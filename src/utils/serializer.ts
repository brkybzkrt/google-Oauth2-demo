import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport"
import { AuthService } from "src/auth/auth.service";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class SessionSeriliazer extends PassportSerializer{

    constructor(@Inject('AUTH_SERVICE') private readonly authService:AuthService){
        super();
    }

    serializeUser(user: User, done: Function) {
        done(null, user);
    }

   async deserializeUser(payload: any, done: Function) {
      const user=  await this.authService.findUser(payload.id);
        return user ? done(null, user) : done(null, null);
    }

}