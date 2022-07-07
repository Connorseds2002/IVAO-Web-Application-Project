import { Module } from "@nestjs/common";
import { AtcBookingsControler } from "./AtcBookings.controller";
import { AtcBookingsService } from "./AtcBookings.service";

@Module({
    controllers: [AtcBookingsControler],
    providers: [AtcBookingsService]
})
export class addBookingModule{

}