import { Module } from '@nestjs/common';//Cette classe est utilisée pour définir des modules dans une application NestJS.
import { AppController } from './app.controller';//Les contrôleurs sont responsables de la gestion des requêtes HTTP entrantes et du renvoi de réponses.
import { AppService } from './app.service';//Les services contiennent la logique métier de l'application.

//@Module pour déclarer un module
@Module({
  imports: [],//liste les autres modules que ce module importe et utilise.
  controllers: [AppController],//liste les contrôleurs que ce module expose.
  providers: [AppService],//liste les services que ce module fournit à l'ensemble de l'application.
})
export class AppModule {}//elle peut être utilisée pour configurer le module.
