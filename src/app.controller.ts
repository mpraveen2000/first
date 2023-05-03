import { Controller,Put , Get, Param ,Post,Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

//   @Post()
//   create (@Body('name')name:string,@Body('age')age:number):string{
//     return"hii"+name +"my age is"+age;
//   }
//   }

// // @Put()
// //   putHello(): string {
// //     return " update the student value";
// // }

// function param(arg0: string) {
//   throw new Error('Function not implemented.');
// }

