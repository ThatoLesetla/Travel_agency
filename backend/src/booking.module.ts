import { Booking } from './models/entities/client.entity';
import { BookingController } from './controllers/booking/booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BookingService } from './services/booking/booking.service';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService]
})
export class BookingsModule {}
