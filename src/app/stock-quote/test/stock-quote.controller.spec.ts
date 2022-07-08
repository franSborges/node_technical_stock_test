import { Test, TestingModule } from '@nestjs/testing';
import { StockQuoteController } from '../controller/stock-quote.controller';

describe('StockQuoteController', () => {
  let controller: StockQuoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockQuoteController],
    }).compile();

    controller = module.get<StockQuoteController>(StockQuoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
