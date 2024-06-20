/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    // / users
    constructor(private readonly userService:UsersService){}

    @Get() // get request handler!
    findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN'){
        return this.userService.findAll(role);
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


/*

khgh 
jhvguhasgd
navshdg
vajhsdv 
kjiaghsdih 
bawhgdihqwvd
kbaidgawbjd
kavhwdhigawkasuhdg
kqwhidgiqwgid
kvauduiawghd
kaushduhvasd
knvasuduhavd
ajgsduhguahd
jkavsdufuagvd
kavduvaudv
knavdhvudv
kavsuduadv
knvsgdfvgdv
jabsduhfadhv
javsdgfvad
kavsduvasudv
kavsduhvauhsdv
absduhvashid
mlabsdjvagusdv
bvasdhvasduh
*/