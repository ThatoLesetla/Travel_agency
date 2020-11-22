import { Car } from './../../models/interface/car-interface';
import { CarsService } from './../../services/cars/cars.service';
import { Controller, Get, Put, Delete, Post, Param, Body } from '@nestjs/common';
import { CarDTO } from '../../models/DTOs/carDTO';

@Controller('cars')
export class CarsController {
    constructor(private carService: CarsService) {}
    
    @Get()
    async findAll(): Promise<Car[]> {
        return await this.carService.findAll();
    }

    // To retrieve One Hotel
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.carService.findOne(id);
    }

    // To add Clients
    @Post()
    create(@Body() carDTO: CarDTO) {
        return this.carService.create(carDTO);
    }
    // To Delete Clients
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.carService.delete(id);
    }

    // To Update Client
    @Put(':id')
    update(@Param('id') id: string, @Body() carDTO: CarDTO) {
       return this.carService.update(id, carDTO);
    }
}
