import { Controller, Get } from '@nestjs/common';
import { CmsService } from './cms.service';

@Controller('cms')
export class CmsController {
  constructor(private readonly cmsService: CmsService) {}

  @Get('navigation')
  getNavigation() {
    return this.cmsService.getNavigationData();
  }

  @Get('banner')
  getBanner() {
    return this.cmsService.getBannerData();
  }

  @Get('services')
  getServices() {
    return this.cmsService.getServicesData();
  }
}
