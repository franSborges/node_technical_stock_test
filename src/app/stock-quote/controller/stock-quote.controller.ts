/* eslint-disable prettier/prettier */
import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { readFileSync } from 'fs';
import { diskStorage } from 'multer';
import { parse } from 'papaparse'


@Controller('stock')
export class StockQuoteController {

  @Post()
  @UseInterceptors(
    FileInterceptor('file_asset', {
      storage: diskStorage({
      destination: './temp',
      }),
    }),
  )

  async uploadFile() {
    const csvFile = readFileSync('temp/MGLU3.SA.csv')
    const csvData = csvFile.toString();

    const parsedCsv = await parse(csvData, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace('#', '').trim(),
      complete: (results) => results.data,
    })
    return parsedCsv;
  }
  
}
