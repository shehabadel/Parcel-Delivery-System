import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseRepository<T> {
    entities: T[] = [];
    private nextId = 1;

    findAll(): T[] {
        return this.entities;
    }

    findById(id: string | number): T | undefined {
        return this.entities.find((entity: any) => entity.id === id);
    }

    create(entity: T|any): T {
        (entity as any).id = this.nextId++;
        this.entities.push(entity);
        return entity;
    }

    update(id: string | number, updatedEntity: any): T | undefined {
        const entityIndx = this.entities.findIndex(
            (entity: any) => entity.id === id,
        );
        if (entityIndx > -1) {
            this.entities[entityIndx] = {
                ...this.entities[entityIndx],
                ...updatedEntity,
            };
            return this.entities[entityIndx];
        }
        return undefined;
    }

    delete(id: string | number): boolean {
        const entityIndx = this.entities.findIndex(
            (entity: any) => entity.id === id,
        );
        if (entityIndx !== -1) {
            this.entities.splice(entityIndx, 1);
            return true;
        }
        return false;
    }
}
