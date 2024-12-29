import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { OrderService } from './orders.service';


@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Body('userId') userId: string,
    @Body('productIds') productIds: number[], // Ürün ID'leri
    @Body('totalAmount') totalAmount: number,
  ) {
    return this.orderService.createOrder(userId, productIds, totalAmount);
  }

  @Get(':userId')
  async getOrders(@Param('userId') userId: string) {
    return this.orderService.getOrdersByUser(userId);
  }
}
