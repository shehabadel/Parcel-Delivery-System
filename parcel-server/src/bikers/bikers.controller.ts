import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BikersService } from './bikers.service';
import { CreateBikerDto } from './dto/create-biker.dto';
import { UpdateBikerDto } from './dto/update-biker.dto';

@Controller('bikers')
export class BikersController {
  constructor(private readonly bikersService: BikersService) {}

  @Post()
  create(@Body() createBikerDto: CreateBikerDto) {
    return this.bikersService.create(createBikerDto);
  }

  @Get()
  findAll() {
    return this.bikersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBikerDto: UpdateBikerDto) {
    return this.bikersService.update(+id, updateBikerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikersService.remove(+id);
  }
}
