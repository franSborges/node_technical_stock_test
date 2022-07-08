import { Module } from '@nestjs/common';
import { StockQuoteController } from './controller/stock-quote.controller';

@Module({
  controllers: [StockQuoteController],
  providers: [],
})
export class StockQuoteModule {}
