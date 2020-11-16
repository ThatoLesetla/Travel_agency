import { HotelsController } from './controllers/hotels/hotels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { HotelService } from './services/hotel/hotel.service';
import { Hotel } from './models/entities/hotel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel])],
  controllers: [HotelsController],
  providers: [HotelService],
  exports: [HotelService]
})
export class HotelsModule {}
