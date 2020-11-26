import { Injectable } from '@nestjs/common';
import {InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../../models/entities/client.entity'; 
@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
    ) {}

    async findAll(): Promise<Booking[]> {
        return await this.bookingRepository.find();
    }

    findOne(id: string): Promise<Booking> {
        return this.bookingRepository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.bookingRepository.delete(id);
    }

    async create(booking: Booking): Promise<Booking> {
        return await this.bookingRepository.save(booking);
    } 

    async update(id: string, booking: Booking): Promise<Booking> {
        return await this.bookingRepository.save(booking);
    }
}
