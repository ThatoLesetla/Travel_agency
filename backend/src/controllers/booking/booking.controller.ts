import { Booking } from './../../models/entities/client.entity';
import { BookingService } from './../../services/booking/booking.service';
import { Controller, Put, Delete, Post, Get, Param, Body } from '@nestjs/common';
import { BookingDTO} from '../../models/DTOs/bookingDTO';

@Controller('booking')
export class BookingController {
    constructor(private bookingService: BookingService) {}
    
    @Get()
    async findAll(): Promise<Booking[]> {
        return await this.bookingService.findAll();
    }

    // To retrieve One Hotel
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.bookingService.findOne(id);
    }

    // To add Clients
    @Post()
    create(@Body() bookingDTO: BookingDTO) {
        return this.bookingService.create(bookingDTO);
    }
    // To Delete Clients
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.bookingService.delete(id);
    }

    // To Update Client
    @Put(':id')
    update(@Param('id') id: string, @Body() bookingDTO: BookingDTO) {
       return this.bookingService.update(id, bookingDTO);
    }
}
