import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { addBookingModule } from './ATC Bookings/AtcBookings.module';

@Module({
  imports: [addBookingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
