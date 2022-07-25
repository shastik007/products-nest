/* eslint-disable prettier/prettier */
import { CreatePorductDto } from './dto/create-product.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((product) => product.id === id);
  }

  createProduct(product: CreatePorductDto) {
    const newProduct = {
      ...product,
      id: Math.random().toString(),
    };
    this.products.push(newProduct);
    return JSON.stringify(newProduct);
  }
}
