import { Injectable } from '@nestjs/common';
/*
  Cette ligne importe le décorateur Injectable depuis le module @nestjs/common. 
  Ce décorateur est utilisé pour indiquer à NestJS qu'une classe peut être injectée dans d'autres classes du projet.
*/
@Injectable()
/*
  Ce décorateur est appliqué à la classe AppService. 
  Cela signifie que cette classe peut être injectée dans d'autres classes qui en ont besoin.
*/
export class AppService {
/*
  Cette ligne déclare une classe nommée AppService et la marque comme exportable pour que d'autres parties du projet 
  puissent l'utiliser.
*/
  getHello(): string {
    return 'Hello World!';
  }
}
