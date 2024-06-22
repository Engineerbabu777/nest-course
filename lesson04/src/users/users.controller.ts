/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Patch, Post, Query,ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
    findOne(@Param('id', ParseIntPipe) id:number){ 
        return this.userService.findOne(id)
    }

    // /post method!
    @Post()
    create(@Body(ValidationPipe) user:CreateUserDto){
       return this.userService.create(user)
    }

     // / users/:id
     @Patch(':id') // patch request handler :id!
     update(@Param('id',ParseIntPipe) id:number,@Body(ValidationPipe) user:UpdateUserDto){ 
         return this.userService.update(id,user)
     }
       
     // / users/:id
     @Delete(':id') // patch request handler :id!
     delete(@Param('id',ParseIntPipe) id:number){ 
         return this.userService.delete(id)
     }

   
}

