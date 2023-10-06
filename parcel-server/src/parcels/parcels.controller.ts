import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { PickUpParcelDto } from './dto/pickup-parcel.dto';
@Controller('parcels')
export class ParcelsController {
  constructor(private readonly parcelsService: ParcelsService) {}

  @Post()
  create(@Body() createParcelDto: CreateParcelDto) {
    return this.parcelsService.create(createParcelDto);
  }

  @Get()
  findAll() {
    return this.parcelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parcelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParcelDto: UpdateParcelDto) {
    return this.parcelsService.update(+id, updateParcelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parcelsService.remove(+id);
  }

  @Get(':id/status')
  getParcelStatus(@Param('id') id:string){
    return this.parcelsService.getParcelStatus(+id)
  }

  @Patch(':id/status')
  updateParcelStatus(@Param('id') parcelId: number,
  @Body() updateParcelStatusDto: UpdateParcelDto){
    return this.parcelsService.updateParcelStatus(parcelId, updateParcelStatusDto.status);
  }

  @Get('/bikers/:id')
  getParcelsForBiker(@Param('id') bikerId){
    return this.parcelsService.findParcelsByBikerId(+bikerId)
  }

  @Get('/senders/:id')
  getParcelsForSender(@Param('id') senderId){
    return this.parcelsService.findParcelsBySenderId(+senderId)
  }

  @Put('pickup/:id')
  pickUpParcel(@Param('id') parcelId: number, @Body() params: PickUpParcelDto) {
    const { bikerId } = params;
    return this.parcelsService.pickUpParcel(bikerId, parcelId);
  }
}
