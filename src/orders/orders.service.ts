import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from 'src/products/entities/product.entity';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createOrder(userId: string, productIds: number[], totalAmount: number): Promise<Order> {
    // Ürünleri ürün tablosundan alın
    const products = await this.productRepository.findByIds(productIds);

    if (products.length !== productIds.length) {
      throw new Error('Some products are not found');
    }

    const order = this.orderRepository.create({
      user_id: userId,
      products,
      total_amount: totalAmount,
    });

    return this.orderRepository.save(order);
  }

  async getOrdersByUser(userId: string): Promise<Order[]> {
    return this.orderRepository.find({
      where: { user_id: userId },
      relations: ['products'], // Ürün ilişkisini de yükle
    });
  }
}
