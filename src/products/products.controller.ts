import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, StreamableFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.productsService.uploadFile(file)
  }

  @Get('file/:fileName')
  getFile(@Param('fileName') fileName: string): StreamableFile {
    return this.productsService.getFile(fileName)
  }

  @Get('/')
  getProducts() {
    return this.productsService.getProducts()
  }
}
