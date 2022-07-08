import { Module } from '@nestjs/common';
import { StockQuoteModule } from './app/stock-quote/stock-quote.module';

@Module({
  imports: [StockQuoteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
