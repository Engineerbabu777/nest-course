import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule,ThrottlerModule.forRoot([{
    name:'short',
    ttl:1000,
    limit:3
  },{
    name:'long',
    ttl:60000,
    limit:100
  }])],
  controllers: [AppController],
  providers: [AppService,UsersService,{
    provide:APP_GUARD,
    useClass:ThrottlerGuard
  }],
})
export class AppModule {}
