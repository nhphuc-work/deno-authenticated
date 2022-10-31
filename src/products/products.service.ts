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
      join(process.cwd(), `upload/${filename}`),
    )
    return new StreamableFile(file)
  }
}
