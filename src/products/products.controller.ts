import { UpdatePorductDto } from './dto/update-product.dto';
import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  Redirect,
  HttpCode,
  HttpStatus,
  Header,
  Req,
  Res,
} from '@nestjs/common';
import { CreatePorductDto } from './dto/create-product.dto';

import { Request, Response } from 'express';
import { ProductService } from './porduct.servise';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductService: ProductService) {}
  // @Get()
  // // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(301).end('poka');
  //   return 'get all';
  // }
  @Get()
  getAll() {
    return this.ProductService.getAll();
  }

  @Get(':id')
  getOneById(@Param('id') id: string) {
    return this.getOneById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('content-access', 'none')
  createProduct(@Body() product: CreatePorductDto) {
    return this.ProductService.createProduct(product);
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return `remove ${id}`;
  }
  @Put(':id')
  updateProduct(@Body() body: UpdatePorductDto, @Param('id') id: string) {
    return `product with id:${id} updated width:${body.price + body.title}`;
  }
}
