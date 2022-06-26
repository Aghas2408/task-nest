import { IsEmail, IsNotEmpty } from "class-validator";
import { UserRole } from "../users.entity";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    role: UserRole;
}