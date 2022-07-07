import {  Injectable, NotFoundException } from "@nestjs/common";
import { AtcBookings } from "./AtcBooking.module";

@Injectable()
export class AtcBookingsService{
    private ATCBooking: AtcBookings[] = [];

    addBooking(title: string, ratings: string, EvTREx: string, time: number, VID:number){
        const id = Math.random().toString();
        const newBooking = new AtcBookings(id , title, ratings, EvTREx, time, VID)
        this.ATCBooking.push(newBooking);
        return id
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