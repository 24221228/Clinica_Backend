import { Module } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesController } from './specialties.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService],
  imports:[UsersModule]
})
export class SpecialtiesModule {}
