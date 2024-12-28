import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { ProductsModule } from '../products/products.module'; // Import ProductsModule

@Module({
  imports: [TypeOrmModule.forFeature([Review]), ProductsModule], // Include ProductsModule here
  providers: [ReviewsService],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
