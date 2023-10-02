import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/database/base.repository";
import { Parcel } from "src/parcels/entities/parcel.entity";

@Injectable()
export class ParcelRepository extends BaseRepository<Parcel>{
    
}