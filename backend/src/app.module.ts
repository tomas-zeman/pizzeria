import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core-module/core.module';

// tslint:disable-next-line:no-var-requires
require('dotenv').config();

@Module({
    imports: [
        CoreModule,
    ],
    controllers: [ AppController ],
    providers: [ AppService ],
})
export class AppModule {
    constructor() {
    }
}
