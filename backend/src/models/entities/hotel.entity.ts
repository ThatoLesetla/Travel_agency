import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hotel {

    @PrimaryGeneratedColumn()
    hotelID: number;

    @Column()
    hotelName: string;

    @Column()
    address: string;

    @Column()
    pricePerNight: number;

    @Column()
    currency: string;

    @Column()
    phone: number;

    @Column()
    email: string
}