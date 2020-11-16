import { HotelsModule } from './hotel.module';
import { PackageModule } from './models/package.module';
import { ClientsModule } from './client.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { Client } from './models/entities/client.entity';
import { Packages } from './models/entities/package.entity';
import { Hotel } from './models/entities/hotel.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'travefy',
      entities: [Client, Packages, Hotel],
      synchronize: true,
    }),
    ClientsModule,
    PackageModule,
    HotelsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection) {}
}
