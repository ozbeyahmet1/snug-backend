import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll() {
    return this.productRepository.find({ relations: ['reviews'] });
  }

  async findOne(href: string) {
    return this.productRepository.findOne({
      where: { href },
      relations: ['reviews'],
    });
  }

  async create(data: Partial<Product>) {
    const product = this.productRepository.create(data);
    const savedProduct = await this.productRepository.save(product);
    return savedProduct;
  }

  async update(id: number, data: Partial<Product>) {
    await this.productRepository.update(id, data);
    return this.productRepository.findOne({ where: { id }, relations: ['reviews'] });
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }


}
