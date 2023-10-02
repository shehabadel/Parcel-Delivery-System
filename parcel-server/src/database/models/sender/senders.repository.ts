import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/database/base.repository";
import { Sender } from "src/senders/entities/sender.entity";
import { DUMP_SENDERS_DATA } from "src/utils/constants";
@Injectable()
export class SendersRepository extends BaseRepository<Sender> {
}