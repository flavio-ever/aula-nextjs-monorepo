import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CmsModule } from './cms/cms.module';
import { DelayInterceptor } from './common/interceptors/delay.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [CmsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: DelayInterceptor,
    },
  ],
})
export class AppModule {}
