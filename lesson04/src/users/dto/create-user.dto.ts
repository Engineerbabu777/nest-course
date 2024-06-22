import { isEmail, isEnum, isNotEmpty, isString } from 'class-validator'

export class CreateUserDto {
  @isNotEmpty()
  @isString()
  name: string

  @isEmail()
  email: string

  @isEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'Invalid role' })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN'
}
