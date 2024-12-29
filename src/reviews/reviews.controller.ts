import { Controller, Post, Body } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Review } from './entities/review.entity';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new review' }) // Endpoint summary for Swagger
  @ApiResponse({ status: 201, description: 'The review has been created.', type: Review })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiBody({ type: Review, description: 'Review data' })
  async create(@Body() reviewData: Partial<Review>): Promise<Review> {
    return this.reviewsService.create(reviewData);
  }
  
}
