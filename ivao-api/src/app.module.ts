import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { addBookingModule } from './ATC Bookings/AtcBookings.module';

@Module({
  imports: [addBookingModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'admin',
    password: 'admin123',
    database: 'bookings',
    entities: [],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
