import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PassportGuard } from '../../shared/passport.guard';
import { GetOrderDto, PlaceOrderDto, UpdateOrderDto } from './order.dto';
import { OrderService } from './order.service';

@Controller('api/order')
export class OrderController {

    constructor(private orderService: OrderService) {
    }

    @Get(':id')
    getOrder(@Param('id') id: string) {
        return this.orderService.getOrder(id)
    }

    @Get()
    getOrders() {
        return this.orderService.listOrders();
    }

    @Put()
    @UseGuards(new PassportGuard())
    updateItem(@Body() payload: UpdateOrderDto) {
        return this.orderService.updateOrder(payload);
    }

    @Post()
    createItem(@Body() payload: PlaceOrderDto) {
        return this.orderService.placeOrder(payload);
    }

}
