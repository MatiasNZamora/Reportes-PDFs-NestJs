import { Module } from '@nestjs/common';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { PrinterModule } from './printer/printer.module';
import { StoreReportsModule } from './store-reports/store-reports.module';
import { ExtraReportsModule } from './extra-reports/extra-reports.module';

@Module({
  imports: [BasicReportsModule, PrinterModule, StoreReportsModule, ExtraReportsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


//TODO: modulo 3 clase: 