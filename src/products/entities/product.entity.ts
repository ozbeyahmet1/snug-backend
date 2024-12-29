import { Review } from 'src/reviews/entities/review.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'Unique identifier for the product' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Title of the product', example: 'Elegant Wooden Chair' })
  title: string;

  @Column('decimal')
  @ApiProperty({ description: 'Price of the product', example: 199.99 })
  price: number;

  @Column()
  @ApiProperty({ description: 'URL of the product image', example: 'https://example.com/image.jpg' })
  image: string;

  @Column({ length: 500 })
  @ApiProperty({ description: 'Short description of the product', example: 'A beautifully crafted wooden chair.' })
  description: string;

  @Column()
  @ApiProperty({ description: 'Materials used in the product', example: 'Wood, Metal' })
  materials: string;

  @Column()
  @ApiProperty({ description: 'Warranty and return policy details', example: '2 years warranty. Return within 30 days.' })
  warrantyAndReturnPolicy: string;

  @Column()
  @ApiProperty({ description: 'Unique href for the product', example: '/products/elegant-wooden-chair' })
  href: string;

  @OneToMany(() => Review, (review) => review.product, { cascade: true, onDelete: 'CASCADE' })
  @ApiProperty({ description: 'List of reviews associated with the product', type: [Review] })
  reviews: Review[];
}
