import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { throws } from "assert";
import { AtcBookingsService } from "./AtcBookings.service";
function ratingsnum(rating){
  if(rating == 1){
    return "AS1"
  }
  else if(rating == 2){
    return "AS2"
  }
  else if(rating == 3){
    return "AS3"
  }
  else if(rating == 4){
    return "ADC"
  }
  else if(rating == 5){
    return "APC"
  }
  else if(rating == 6){
    return "ACC"
  }
  else if(rating == 7){
    return "SEC"
  }
  else if(rating == 8){
    return "SAI"
  }
 else if(rating == 9){
  return "CAI"
  }
  else if(rating == 0){
    return "Suspanded"
  }
  else{
    return "Unknow"
  }
}
function eventTraningExam(et){
  if(et == 1){
    return "Event"
  }
  else if(et == 2){
    return "Traning"
  }
  else if(et == 3){
    return "Exam"
  }
}
@Controller('Bookings')
export  class AtcBookingsControler {
    constructor(private readonly AtcBookingService: AtcBookingsService){}
    @Post()
    addBooking(@Body('title') title:string, @Body('rating') rating:number, @Body('ET') et:number, @Body('time') time:number, @Body('VID') VID:number ): any {
      const ratings = ratingsnum(rating)
      const EvTREx = eventTraningExam(et)
      const genID =   this.AtcBookingService.addBooking(title, ratings, EvTREx, time,VID)
      return {id: genID}
    }
    @Get()
    allbookings(){
      return this.AtcBookingService.getBookings();
    }
    @Get(':ID')
    Bookings(@Param('ID') ID: string){
      return this.AtcBookingService.getOneBooking(ID);
    }
    @Delete(':id')
    removeBooking(@Param('id') id: string){
      this.AtcBookingService.removeBooking(id);
      return "This booking has now been removed and no longer active"
    }
}