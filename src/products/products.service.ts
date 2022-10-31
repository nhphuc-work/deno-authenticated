import { Injectable, StreamableFile } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class ProductsService {
  constructor(
    private readonly configServices: ConfigService
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
}
