import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    private productsService: ProductsService, 
  ) {}

  async create(reviewData: Partial<Review>) {
    const review = await this.reviewRepository.save(reviewData);
    return review;
  }

  async findAll() {
    return this.reviewRepository.find({ relations: ['product'] });
  }
}
