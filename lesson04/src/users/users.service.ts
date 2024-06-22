/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Lean',
      email: 'lean@gmail.com',
      role: 'INTERN'
    },
    {
      id: 2,
      name: 'Lean2',
      email: 'lean2@gmail.com',
      role: 'INTERN'
    },
    {
      id: 3,
      name: 'Lean3',
      email: 'lean3@gmail.com',
      role: 'INTERN'
    }
  ];


  findAll(role?:'INTERN'|"ENGINEER"|"ADMIN"){
    if(role){
        const roles =  this.users.filter(user => user.role === role)
        if(roles.length === 0){
            throw new NotFoundException("No users found!")
        }else{
            return roles
        }
    }
    return this.users;
  }

  findOne(id: number) {
      const user = this.users.find(user => user.id === id)
      if(!user){
          throw new NotFoundException("User not found!")
      }
      return user
  }

  create(user:CreateUserDto){
    const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)

    const newUser = {
        id: usersByHighestId[0].id + 1,
        ...user
    }

    this.users.push(newUser)
    return newUser
  }


  update(id:number,updatedUser:UpdateUserDto){
    this.users = this.users.map(user => {
        if(user.id === id){
            return {...user, ...updatedUser}
        }
        return user
    })

    return this.findOne(id)
  }


  delete(id:number){
    const removedUser = this.findOne(id);

    this.users = this.users.filter(user => user.id !== id);


    return removedUser
  }

  test(){
    console.log("Hello")
    return "abc"
  }



}
