import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,Profile } from "passport-google-oauth20";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy,"google") {
    
    constructor(configService: ConfigService){
        
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
    }
}