/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    // / users
    constructor(private userService:UsersService){}

    @Get() // get request handler!
    findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN'){
        return {role}
    }


    // @Get('interns')
    // findAllInterns(){
    //     return [] 
    // }

    // / users/:id
    @Get(':id') // get request handler!
    findOne(@Param('id') id:string){ 
        return { id }
    }

    // /post method!
    @Post()
    create(@Body() user:{}){
       return user
    }

     // / users/:id
     @Patch(':id') // patch request handler :id!
     update(@Param('id') id:string,@Body() user:{}){ 
         return { id ,user }
     }
       
     // / users/:id
     @Delete(':id') // patch request handler :id!
     delete(@Param('id') id:string){ 
         return { id }
     }

   
}
