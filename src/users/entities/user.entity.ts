import { user } from '../../generated/prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements user {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    password: string;
    @ApiProperty()
    role: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}
