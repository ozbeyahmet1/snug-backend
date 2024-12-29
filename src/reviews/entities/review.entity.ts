import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Review {
  @ApiProperty({ example: 1, description: 'The unique ID of the review' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 5, description: 'The rating given in the review (1-5)' })
  @Column('int')
  rating: number;

  @ApiProperty({ example: 'Great product!', description: 'The detailed review text' })
  @Column()
  review: string;

  @ApiProperty({ example: 'John Doe', description: 'Name of the reviewer' })
  @Column()
  reviewer: string;

  @ApiProperty({ example: 'Fantastic!', description: 'A short summary of the review' })
  @Column()
  summary: string;

  @ApiProperty({ example: '2024-12-29T12:00:00Z', description: 'The timestamp of the review' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @ApiProperty({ type: () => Product, description: 'The product associated with the review' })
  @ManyToOne(() => Product, (product) => product.reviews, { onDelete: 'CASCADE' })

  product: Product;
}
