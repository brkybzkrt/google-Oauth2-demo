import { HttpException, Injectable } from "@nestjs/common";
import { UserDetails } from "./dtos/detailts.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class AuthService {

constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){

}

    async validateUser(details:UserDetails){

        try {
        const user=await this.userRepository.findOneBy({email:details.email});
       
        if(user) return user;
        else {
            const user = this.userRepository.create(details);
            
            const createdUser = await this.userRepository.save(user);

            return createdUser;
        }
            
        } catch (error) {
            throw new HttpException(error,500);
        }
   
    }


}