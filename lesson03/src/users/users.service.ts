/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'

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
    // if(role){
    //     return this.users.filter(user => user.role === role)
    // }
    // return {a:role}
    return this.users;
  }

  findOne(id: number) {
      const user = this.users.find(user => user.id === id)
      if(!user){
          throw new Error('User not found')
      }
      return user
  }

  create(user:{name:string,email:string,role:"INTERN"|"ENGINEER"|"ADMIN"}){
    const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)

    const newUser = {
        id: usersByHighestId[0].id + 1,
        ...user
    }

    this.users.push(newUser)
    return newUser
  }


  update(id:number,updatedUser:{name?:string,email?:string,role?:"INTERN"|"ENGINEER"|"ADMIN"}){
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
