import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @HttpCode(HttpStatus.OK)
    @Post('login/sender')
    signInSender(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto.email, signInDto.password,'SENDER');
    }

    @HttpCode(HttpStatus.OK)
    @Post('login/biker')
    signInBiker(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto.email, signInDto.password,'BIKER');
    }
}
