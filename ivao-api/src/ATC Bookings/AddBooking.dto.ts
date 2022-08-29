import { IsNotEmpty, MinLength } from "class-validator";

export class addBookingDto{
    @IsNotEmpty()
    @MinLength(8)
    title: string;
    @IsNotEmpty()
    Rating: number;
    @IsNotEmpty()
    EvTREx: number;
    @IsNotEmpty()
    Date: string;
    @IsNotEmpty()
    startTime: string;
    @IsNotEmpty()
    endTime: string;
    @IsNotEmpty()
    VID: number;
}