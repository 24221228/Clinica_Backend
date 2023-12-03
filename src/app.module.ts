import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { QuotesModule } from './quotes/quotes.module';
import { RolesModule } from './roles/roles.module';
import { SpecialistsModule } from './specialists/specialists.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { CampusModule } from './campus/campus.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    PatientsModule,
    QuotesModule,
    RolesModule,
    SpecialistsModule,
    SpecialtiesModule,
    CampusModule,
    UsersModule
  ],
})
export class AppModule {}
