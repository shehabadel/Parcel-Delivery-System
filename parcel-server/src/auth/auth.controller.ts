import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @HttpCode(HttpStatus.OK)
    @Post('sender/login')
    signInSender(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.email, signInDto.password,'SENDER');
    }

    @HttpCode(HttpStatus.OK)
    @Post('biker/login')
    signInBiker(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.email, signInDto.password,'BIKER');
    }
}
