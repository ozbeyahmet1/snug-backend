import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { ProductsService } from './products.service';


@ApiTags('products') 
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all products' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':href')
  @ApiOperation({ summary: 'Retrieve a single product by href' })
  @ApiParam({ name: 'href', description: 'The href of the product', required: true })
  findOne(@Param('href') href: string) {
    return this.productsService.findOne(href);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiBody({ description: 'Data for the new product', type: Object , examples: {
    example1: {
      summary: 'Basic Product Example',
      description: 'An example of a basic product with all required fields.',
      value: {
        title: 'Elegant Wooden Chair',
        price: 199.99,
        image: 'https://example.com/image.jpg',
        description: 'A beautifully crafted wooden chair.',
        materials: 'Wood, Metal',
        warrantyAndReturnPolicy: '2 years warranty. Return within 30 days.',
        href: 'elegant-wooden-chair',
        "reviews": [
    {
      "rating": 5,
      "review": "The herbal scent helps me fall asleep faster every night.",
      "reviewer": "Chloe Harper",
      "summary": "Perfect for relaxation",
      "timestamp": "2023-04-01"
    },
    {
      "rating": 3,
      "review": "Good scent but a little too strong for me.",
      "reviewer": "Ethan Ross",
      "summary": "Strong scent",
      "timestamp": "2023-04-04"
    }
  ]
      },
    },
  },}) // Replace `Object` with a DTO class if available
  create(@Body() createProductDto: any) {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing product' })
  @ApiParam({ name: 'id', description: 'The ID of the product to update', required: true })
  @ApiBody({ description: 'Updated product data', type: Object }) // Replace `Object` with a DTO class if available
  update(@Param('id') id: number, @Body() updateProductDto: any) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product' })
  @ApiParam({ name: 'id', description: 'The ID of the product to delete', required: true })
  remove(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
