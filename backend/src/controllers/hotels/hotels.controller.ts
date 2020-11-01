import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { HotelService } from '../../services/hotel/hotel.service';
import { Hotel} from '../../models/interface/hotel-interface';
import { HotelDTO } from '../../models/DTOs/hotelDTO';

@Controller('hotels')
export class HotelsController {
    constructor(private hotelService: HotelService) {}
    
    @Get()
    async findAll(): Promise<Hotel[]> {
        return await this.hotelService.findAll();
    }

    // To retrieve One Hotel
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.hotelService.findOne(id);
    }

    // To add Clients
    @Post()
    create(@Body() hotelDto: HotelDTO) {
        return this.hotelService.create(hotelDto);
    }
    // To Delete Clients
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.hotelService.delete(id);
    }

    // To Update Client
    @Put(':id')
    update(@Param('id') id: string, @Body() hotelDto: HotelDTO) {
       return this.hotelService.update(id, hotelDto);
    }
}
