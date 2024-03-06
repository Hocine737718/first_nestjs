import { Controller, Get } from '@nestjs/common';
/*
Cette ligne importe deux éléments du module @nestjs/common :
Controller: 
  Un décorateur utilisé pour définir une classe en tant que contrôleur NestJS. 
  Un contrôleur gère les requêtes HTTP et renvoie des réponses.
Get: 
  Un décorateur utilisé pour définir une méthode de contrôleur qui gère les requêtes HTTP GET.
*/
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
