import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
/*
1. Importations:

import { NestFactory } from '@nestjs/core';: 
  Cette ligne importe la fonction NestFactory depuis le module @nestjs/core. Cette fonction permet de créer une 
  instance d'application NestJS.

import { AppModule } from './app.module';:
  Cette ligne importe la classe AppModule depuis le fichier ./app.module.ts. La classe AppModule est 
  le module principal de l'application et définit la configuration globale de NestJS.

2. Fonction bootstrap:

async function bootstrap() {: 
  Cette ligne définit une fonction asynchrone nommée bootstrap. La fonction async permet d'utiliser 
  le mot-clé await pour attendre la fin des opérations asynchrones.

3. Création de l'application:

  const app = await NestFactory.create(AppModule);: 
    Cette ligne utilise la fonction NestFactory.create pour créer une instance de l'application NestJS en lui 
    passant la classe AppModule en argument. La fonction renvoie une promesse (une opération asynchrone) qui 
    se résout en une instance de l'application. Le mot-clé await permet d'attendre la fin de la création de 
    l'application avant de passer à la ligne suivante.

4. Démarrage de l'application:

  await app.listen(3000);: 
    Cette ligne utilise la méthode listen de l'application pour démarrer l'écoute sur le port 3000. La méthode listen renvoie également une promesse qui se résout lorsque l'application est prête à recevoir des requêtes. Le mot-clé await permet d'attendre le démarrage de l'application avant de passer à la ligne suivante.

5. Appel de la fonction bootstrap:

  bootstrap();: 
    Cette ligne appelle la fonction bootstrap pour lancer l'application NestJS.

En résumé, ce code crée une instance de l'application NestJS à partir du module principal AppModule, la démarre sur 
le port 3000 et attend qu'elle soit prête à recevoir des requêtes.
*/
