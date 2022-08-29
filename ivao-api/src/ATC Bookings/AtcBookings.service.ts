import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataBaseConnection } from 'src/DataBase Connection';
import { Repository } from 'typeorm';
import { addBookingDto } from './AddBooking.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(DataBaseConnection)
    private usersRepository: Repository<DataBaseConnection>,
  ) {}

  findAll(): Promise<DataBaseConnection[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<DataBaseConnection> {
    return this.usersRepository.findOneBy({ id });
  }
  findbydate(date: any): Promise<DataBaseConnection[]>{
    return this.usersRepository.findBy(date);
  }
  addBooking(addBookingDOT: addBookingDto){
    console.log(addBookingDOT)
    const newBooking = this.usersRepository.create(addBookingDOT)
    console.log(newBooking)
    return this.usersRepository.save(newBooking);
}

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}