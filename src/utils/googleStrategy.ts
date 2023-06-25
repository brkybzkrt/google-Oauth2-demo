import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,Profile } from "passport-google-oauth20";
import { AuthService } from "src/auth/auth.service";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy,"google") {
    
    constructor(@Inject('AUTH_SERVICE') private readonly authService:AuthService,configService: ConfigService){
        
        super({
            clientID: configService.get("CLIEND_ID"),
            clientSecret:configService.get("CLIEND_SECRET"),
            callbackURL:configService.get("CALLBACK_URL"),
            scope:["profile","email"]
        });
    }


    async validate(accessToken:string,refreshToken:string,profile:Profile){
            console.log(accessToken,refreshToken)
            console.log(profile)
            const {emails,displayName,...rest}= profile;
           const user= this.authService.validateUser({email:emails[0].value,displayName})
    
            return user || null;
        }
}