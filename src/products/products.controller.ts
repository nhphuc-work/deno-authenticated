import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: Express.Multer.File) {
    return {
      path: file?.path,
      originName: file?.originalname,
      name: file?.filename
    }
  }
}
