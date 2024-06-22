/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    // / users
    constructor(private userService:UsersService){
        console.log("Injected")
        userService?.test()
    }

    @Get() // get request handler!
    findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN'){
        return this.userService?.findAll(role);
    }


    // @Get('interns')
    // findAllInterns(){
    //     return [] 
    // }

    // / users/:id
    @Get(':id') // get request handler!
    findOne(@Param('id') id:string){ 
        return this.userService.findOne(+id)
    }

    // /post method!
    @Post()
    create(@Body() user:{name:string,email:string,role:"INTERN"|"ENGINEER"|"ADMIN"}){
       return this.userService.create(user)
    }

     // / users/:id
     @Patch(':id') // patch request handler :id!
     update(@Param('id') id:string,@Body() user:{name:string,email:string,role:"INTERN"|"ENGINEER"|"ADMIN"}){ 
         return this.userService.update(+id,user)
     }
       
     // / users/:id
     @Delete(':id') // patch request handler :id!
     delete(@Param('id') id:string){ 
         return this.userService.delete(+id)
     }

   
}

