import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/database/base.repository";
import { Parcel } from "src/parcels/entities/parcel.entity";

@Injectable()
export class ParcelRepository extends BaseRepository<Parcel>{
    
    findBySenderId(id:number):Parcel[]{
        return this.entities.filter((entity:Parcel)=>entity.senderId===id)
    }
    
    findByBikerId(id:number):Parcel[]{
        return this.entities.filter((entity:Parcel)=>entity.bikerId===id)
    }
}