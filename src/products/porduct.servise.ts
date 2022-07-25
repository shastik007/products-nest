/* eslint-disable prettier/prettier */
import { UpdatePorductDto } from './dto/update-product.dto';
import { ProductDocument } from './schemas/product.schema';
import { CreatePorductDto } from './dto/create-product.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDocument>,
  ) {}
  private products = [];

  async getAll(): Promise<Product[]> {
    return this.ProductModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.ProductModel.findById(id);
  }

  async createProduct(product: CreatePorductDto): Promise<Product> {
    const newProduct = new this.ProductModel(product);
    return newProduct.save();
  }

  async remove(id: string): Promise<Product> {
    return this.ProductModel.findByIdAndRemove(id);
  }

  async update(id: string, product: UpdatePorductDto): Promise<Product> {
    return this.ProductModel.findByIdAndUpdate(id, product, { new: true });
  }
}
