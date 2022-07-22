import {  Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataBaseConnection } from "src/DataBase Connection";
import { Repository } from "typeorm";
import { addBookingDto } from "./AddBooking.dto";
import { AtcBookings } from "./AtcBooking.module";

@Injectable()
export class AtcBookingsService{
    private ATCBooking: AtcBookings[] = [];
    constructor(
        @InjectRepository(DataBaseConnection)
        private readonly Connection: Repository<DataBaseConnection>,
    ){}

    addBooking(addBookingDOT: addBookingDto){
        console.log(addBookingDOT)
        const newBooking = this.Connection.create(addBookingDOT)
        console.log(newBooking)
        return this.Connection.save(newBooking);
    }
    getBookings(){
        return [...this.ATCBooking];
    }
    getOneBooking(bid :string){
        const booking = this.findBooking(bid)[0];
        return {...booking}
    }
    removeBooking(ID: string){
        const index = this.findBooking(ID)[1];
        this.ATCBooking.splice(index, 1);
    }

    private findBooking(bid: string): [AtcBookings, number]{
        const index = this.ATCBooking.findIndex((id) => id.id === bid)
        const Booking = this.ATCBooking[index];
        if(!Booking){
            throw new NotFoundException('Cound not find Booking in system');
        }
        console.log(Booking, index)
        return [Booking, index]
    }
}