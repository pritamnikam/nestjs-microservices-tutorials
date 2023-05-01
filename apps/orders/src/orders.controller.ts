import { Controller, Post, Body, Get, Param, UseGuards, Req } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/create-order-request';
import { JwtAuthGuard } from '@app/common/auth/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOrder(
    @Body() request: CreateOrderRequest,
    @Req() req: any
  ) {
    return this.ordersService.createOrder(request, req.cookies?.Authentication);
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }

  @Get(':id')
  async getOrder(@Param('id') id: string) {
    return this.ordersService.getOrderByID(id);
  }
}
