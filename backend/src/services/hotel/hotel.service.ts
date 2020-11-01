import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Hotel } from '../../models/entities/hotel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HotelService {
    constructor(
        @InjectRepository(Hotel)
        private hotelRepository: Repository<Hotel>,
    ) {}

    async findAll(): Promise<Hotel[]> {
        return await this.hotelRepository.find();
    }

    findOne(id: string): Promise<Hotel> {
        return this.hotelRepository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.hotelRepository.delete(id);
    }

    async create(hotel: Hotel): Promise<Hotel> {
        return await this.hotelRepository.save(hotel);
    } 

    async update(id: string, hotel: Hotel): Promise<Hotel> {
        return await this.hotelRepository.save(hotel);
    }
}
