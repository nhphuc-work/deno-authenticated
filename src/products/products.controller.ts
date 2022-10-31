import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, StreamableFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      path: file?.path,
      originName: file?.originalname,
      name: file?.filename
    }
  }

  @Get('file/:filename')
  getFile(@Param('filename') filename: string): StreamableFile {
    const file = createReadStream(join(process.cwd(), `upload/${filename}`));
    
    return new StreamableFile(file)
  }
}
