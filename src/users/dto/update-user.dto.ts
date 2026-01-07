import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    name: string;
    @ApiProperty({
        type: 'string',
        format: 'email',
    }
    )
    email: string;
    @ApiProperty({
        type: 'string',
        format: 'password'
    })
    password: string;
    @ApiProperty({default: 'USER'})
    role?: string;
}
