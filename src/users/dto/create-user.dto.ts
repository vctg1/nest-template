import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
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
