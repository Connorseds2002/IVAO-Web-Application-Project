import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataBaseConnection } from "src/DataBase Connection";
import { AtcBookingsControler } from "./AtcBookings.controller";
import { AtcBookingsService } from "./AtcBookings.service";

@Module({
    imports:[TypeOrmModule.forFeature([DataBaseConnection])],
    controllers: [AtcBookingsControler],
    providers: [AtcBookingsService]
})
export class addBookingModule{

}