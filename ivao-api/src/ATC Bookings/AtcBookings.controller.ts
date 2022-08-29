import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { addBookingDto } from "./AddBooking.dto";
import { UsersService } from "./AtcBookings.service";
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
    constructor(private readonly AtcBookingService: UsersService){}
    @Post()
    @UsePipes(ValidationPipe)
    addBooking(@Body() AddBookings:addBookingDto): any {
      return this.AtcBookingService.addBooking(AddBookings);
    }
    @Get()
    allbookings(){
      return this.AtcBookingService.findAll();
    }
    @Get(':ID')
    Bookings(@Param('ID') ID: number){
      return this.AtcBookingService.findOne(ID);
    }
    @Delete(':id')
    removeBooking(@Param('id') id: any){
      this.AtcBookingService.remove(id);
      return "This booking has now been removed and no longer active"
    }
}