import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { DatabaseService } from 'src/database/database.service'

@Injectable()
export class EmployeesService {
  constructor (private readonly databaseService: DatabaseService) {}

  async create (createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({ data: createEmployeeDto })
    // return `This action adds a new employee`;
  }

  async findAll (role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.databaseService.employee.findMany({ where: { role: role } })
    } else {
      return this.databaseService.employee.findMany()
    }
    // return `This action returns all employees`;
  }

  async findOne (id: number) {
    return this.databaseService.employee.findUnique({ where: { id: id } })
    // return `This action returns a #${id} employee`;
  }

  async update (id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({ where: { id: id }, data: updateEmployeeDto })
    // return `This action updates a #${id} employee`;
  }

  async remove (id: number) {
    return this.databaseService.employee.delete({ where: { id: id } })
    // return `This action removes a #${id} employee`;
  }
}
