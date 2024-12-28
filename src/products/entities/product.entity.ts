import { Review } from 'src/reviews/entities/review.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('decimal')
  price: number;

  @Column()
  image: string;

  @Column({ length: 500 })
  description: string;

  @Column()
  materials: string;

  @Column()
  warrantyAndReturnPolicy: string;

  @Column()
  href: string;

  @OneToMany(() => Review, (review) => review.product, { cascade: true })
  reviews: Review[];
}
