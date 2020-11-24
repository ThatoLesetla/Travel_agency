import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Packages {

    @PrimaryGeneratedColumn()
    id: Number;
    
    @Column()
    title: string;
    
    @Column()
    description: string;
    
    @Column()
    hotelID: Number;
    
    @Column()
    duration: Number;
    
    @Column()
    price: Number;

    @Column()
    flightCode: string;
    
    @Column()
    transportationID: string;
    
    @Column()
    discountAmnt: Number;
}