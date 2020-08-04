import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PassportGuard } from '../../shared/passport.guard';
import { PostItemDto } from 'src/modules/core-module/offer/offer.dto';
import { OfferService } from 'src/modules/core-module/offer/offer.service';

@Controller('api/offer')
export class OfferController {

  constructor(private offerService: OfferService) {
  }

  @Get('kinds')
  async getKinds() {
    return this.offerService.getAllKinds();
  }

  @Get()
  getOffer() {
    return this.offerService.getOffer();
  }

  @Post()
  @UseGuards(new PassportGuard())
  createItem(@Body() payload: PostItemDto) {
    return this.offerService.postItem(payload);
  }

  @Delete(':id')
  @UseGuards(new PassportGuard())
  deleteItem(@Param('id') id) {
    return this.offerService.deleteItem(id);
  }
}
