import { UpdatePorductDto } from './dto/update-product.dto';
import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  HttpCode,
  HttpStatus,
  Header,
} from '@nestjs/common';
import { CreatePorductDto } from './dto/create-product.dto';

import { ProductService } from './porduct.servise';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductService: ProductService) {}

  @Get()
  getAll() {
    return this.ProductService.getAll();
  }

  @Get(':id')
  getOneById(@Param('id') id: string) {
    return this.ProductService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('content-access', 'none')
  createProduct(@Body() product: CreatePorductDto) {
    return this.ProductService.createProduct(product);
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return this.ProductService.remove(id);
  }
  @Put(':id')
  updateProduct(@Body() body: UpdatePorductDto, @Param('id') id: string) {
    return this.ProductService.update(id, body);
  }
}
