import { BookingsModule } from './booking.module';
import { HotelsModule } from './hotel.module';
import { PackageModule } from './models/package.module';
import { ClientsModule } from './client.module';
import { CarsModule } from './car.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { Client } from './models/entities/client.entity';
import { Packages } from './models/entities/package.entity';
import { Hotel } from './models/entities/hotel.entity';
import { Car, Booking } from './models/entities/client.entity';

import { BookingController } from './controllers/booking/booking.controller';
import { BookingService } from './services/booking/booking.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'travefy',
      entities: [Car, Client, Packages, Hotel, Booking],
      synchronize: true,
    }),
    BookingsModule,
    CarsModule,
    ClientsModule,
    PackageModule,
    HotelsModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection) {}
}
