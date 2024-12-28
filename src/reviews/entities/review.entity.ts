import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  rating: number;

  @Column()
  review: string;

  @Column()
  reviewer: string;

  @Column()
  summary: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @ManyToOne(() => Product, (product) => product.reviews)
  product: Product;
}