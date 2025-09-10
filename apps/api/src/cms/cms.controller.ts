import { Controller, Get, Query } from '@nestjs/common';
import { CmsService } from './cms.service';

@Controller('cms')
export class CmsController {
  constructor(private readonly cmsService: CmsService) {}

  @Get('navigation')
  async getNavigation(@Query('delay') delay?: string) {
    const delayMs = delay ? parseInt(delay, 10) : 0;
    return this.cmsService.getNavigationData(delayMs);
  }

  @Get('banner')
  async getBanner(@Query('delay') delay?: string) {
    const delayMs = delay ? parseInt(delay, 10) : 0;
    return this.cmsService.getBannerData(delayMs);
  }

  @Get('services')
  async getServices(@Query('delay') delay?: string) {
    const delayMs = delay ? parseInt(delay, 10) : 0;
    return this.cmsService.getServicesData(delayMs);
  }
}
