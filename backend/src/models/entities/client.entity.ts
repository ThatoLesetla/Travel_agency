import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    clientID: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    address: string

    @Column()
    postalCode: number;

    @Column()
    password: string;

    @Column()
    userType: string;

    @Column()
    updateDate: Date;
}
@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    regNo: string;

    @Column()
    plateNumber: string;
    
    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    colour: string;
}


@Entity()
export class Booking 
{
    @PrimaryGeneratedColumn()
    bookingID: number;

    @Column()
    startDate: Date;
    
    @Column()
    endDate: Date;

    @Column()
    packageID: number;

    @Column()
    clientID: number;
    
    @Column()
    numChildren: number;
    
    @Column()
    numAdults: number;
    
    @Column()
    numRooms: number;
}