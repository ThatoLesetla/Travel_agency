import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../../models/entities/client.entity';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(Car)
        private carRepository: Repository<Car>,
    ) {}

    async findAll(): Promise<Car[]> {
        return await this.carRepository.find();
    }

    findOne(id: string): Promise<Car> {
        return this.carRepository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.carRepository.delete(id);
    }

    async create(car: Car): Promise<Car> {
        return await this.carRepository.save(car);
    } 

    async update(id: string, car: Car): Promise<Car> {
        return await this.carRepository.save(car);
    }
}
