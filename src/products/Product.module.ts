/* eslint-disable prettier/prettier */
import { Product, ProductSchema } from './schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './porduct.servise';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';

@Module({
  providers: [ProductService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
})
export class ProductsModule {}
