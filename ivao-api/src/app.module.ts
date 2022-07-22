import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { addBookingModule } from './ATC Bookings/AtcBookings.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    addBookingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}