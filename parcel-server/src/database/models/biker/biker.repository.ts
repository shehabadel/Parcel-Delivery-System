import { Injectable } from "@nestjs/common";
import { Biker } from "src/bikers/entities/biker.entity";
import { BaseRepository } from "src/database/base.repository";

@Injectable()
export class BikerRepository extends BaseRepository<Biker>{

}