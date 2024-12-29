import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from 'src/products/entities/product.entity';
import { OrderController } from './orders.controller';
import { Order } from './entities/order.entity';
import { OrderService } from './orders.service';


@Module({
  imports: [TypeOrmModule.forFeature([Order, Product])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
