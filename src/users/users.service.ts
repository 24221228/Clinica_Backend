import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { 
  CreateUserDto,
  LoginUserDto,
  UpdateUserDto
} from './dto/index'
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class UsersService {
  private readonly logger = new Logger('UsersService');
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ){}

  async create(createUserDto: CreateUserDto) {
    try{
      const { contraseña, ...userData } = createUserDto;

      const user = this.userRepository.create({
        ...userData,
        contraseña: bcrypt.hashSync(contraseña, 10)
      });
      await this.userRepository.save(user);
      return {
        user,
        token: this.getJwtToken({id: user.id})
      };
    }catch(error){
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.userRepository.find(
      {
        where:{
          estatus: true
        }
      }
    );
  }

  async login(loginUserDto: LoginUserDto){
    const { contraseña, correo_electronico } = loginUserDto;
    const user = await this.userRepository.findOne({
      where: {correo_electronico},
      select: {correo_electronico: true, contraseña: true, id: true}
    });
    if(!user){
      console.log('Las credenciales no son válidas (correo electrónico)');
      throw new UnauthorizedException('Las credenciales no son válidas');
    }
    if(!bcrypt.compareSync(contraseña, user.contraseña)){
      console.log('Las credenciales no son válidas (contraseña)');
      throw new UnauthorizedException('Las credenciales no son válidas');
    }
    return {
      ...user,
      token: this.getJwtToken({id: user.id})
    };
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({id});
    if(!user){
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id: id,
      ...updateUserDto
    });
    if(!user){
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    try {
      await this.userRepository.save(user);
      return user;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private handleDBExceptions(error: any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs')
  }

  private getJwtToken(payload: JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }
}
