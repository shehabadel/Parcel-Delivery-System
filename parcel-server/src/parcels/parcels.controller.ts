import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { PickUpParcelDto } from './dto/pickup-parcel.dto';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('parcels')
export class ParcelsController {
  constructor(private readonly parcelsService: ParcelsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createParcelDto: CreateParcelDto) {
    try {
      return this.parcelsService.create(createParcelDto);
    } catch (error) {
      throw new HttpException('Sender not found', HttpStatus.NOT_FOUND)
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.parcelsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parcelsService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParcelDto: UpdateParcelDto) {
    return this.parcelsService.update(+id, updateParcelDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parcelsService.remove(+id);
  }

  @UseGuards(AuthGuard)
  @Get(':id/status')
  getParcelStatus(@Param('id') id:string){
    try {
      const status= this.parcelsService.getParcelStatus(+id)
      return {status:status}
    } catch (error) {
      throw new HttpException('Parcel not found', HttpStatus.NOT_FOUND)
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id/status')
  updateParcelStatus(@Param('id') parcelId: string,
  @Body() updateParcelStatusDto: UpdateParcelDto){
    return this.parcelsService.updateParcelStatus(+parcelId, updateParcelStatusDto.status);
  }

  @UseGuards(AuthGuard)
  @Get('/bikers/:id')
  getParcelsForBiker(@Param('id') bikerId){
    try {
      return this.parcelsService.findParcelsByBikerId(+bikerId)
    } catch (error) {
      throw new HttpException('Biker not found', HttpStatus.NOT_FOUND)
    }
  }

  @UseGuards(AuthGuard)
  @Get('/senders/:id')
  getParcelsForSender(@Param('id') senderId){
    try {
      return this.parcelsService.findParcelsBySenderId(+senderId)
    } catch (error) {
      throw new HttpException('Sender not found', HttpStatus.NOT_FOUND)
    }
  }

  @UseGuards(AuthGuard)
  @Put('pickup/:id')
  pickUpParcel(@Param('id') parcelId: number, @Body() params: PickUpParcelDto) {
    const { bikerId } = params;
    return this.parcelsService.pickUpParcel(bikerId, parcelId);
  }
}
