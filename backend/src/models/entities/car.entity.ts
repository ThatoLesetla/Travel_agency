import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    regNo: number;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    colour: string;
}