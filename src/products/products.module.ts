import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule,
    MulterModule.register({
      dest: './upload'
    })
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
