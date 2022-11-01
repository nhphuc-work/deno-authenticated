import { Injectable, StreamableFile } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    private readonly configServices: ConfigService,
    
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  getFile(filename: string): StreamableFile {
    const file = createReadStream(
      join(process.cwd(),
      `${this.configServices.get<string>('UPLOAD_URL')}${filename}`)
    )
    return new StreamableFile(file)
  }

  uploadFile(file: Express.Multer.File) {
    return {
      path: file?.path,
      originName: file?.originalname,
      name: file?.filename
    }
  }

  async getProducts() {
    return await this.productRepository.find()
  }
}
