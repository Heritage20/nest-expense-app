import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SummaryModule } from './summary/summary.module';
import { ServiceController } from './service/service.controller';
import { ReportModule } from './report/report.module';

@Module({
   imports: [SummaryModule, ReportModule],
   controllers: [AppController, ServiceController],
   providers: [
      AppService,
      {
         provide: APP_INTERCEPTOR,
         useClass: ClassSerializerInterceptor,
      },
   ],
})
export class AppModule {}
