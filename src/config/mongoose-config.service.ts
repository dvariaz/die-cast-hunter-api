import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    private readonly host: string;
    private readonly port: string;
    private readonly dbName: string;

    public constructor (configService: ConfigService) {
        this.host = configService.get<string>('DB_HOST');
        this.port = configService.get<string>('DB_PORT');
        this.dbName = configService.get<string>('DB_NAME');
    }

    createMongooseOptions(): MongooseModuleOptions {
        return {
            uri: `mongodb://${this.host}:${this.port}/${this.dbName}`
        }
    }
}
