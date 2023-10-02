import { Injectable } from "@nestjs/common";
import { Biker } from "src/bikers/entities/biker.entity";
import { BaseRepository } from "src/database/base.repository";
import { DUMP_BIKERS_DATA } from "src/utils/constants";
@Injectable()
export class BikerRepository extends BaseRepository<Biker>{
    constructor(){
        super()
        DUMP_BIKERS_DATA.map((biker:Biker)=>{
            this.create(biker)
        })
    }
}