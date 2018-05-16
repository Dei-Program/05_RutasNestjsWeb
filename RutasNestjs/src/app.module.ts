import { Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";
import {InicioController} from "./inicio.controller";
import {PreguntasFrecuentesController} from "./preguntasfrecuentes.controller";
import {LogMiddleware} from "./log.middleware";




@Module({
    imports: [ // OtrosModulos
    ],
    controllers: [ // Controladores
        AppController,
        UsuarioController,
        ParametrosController,
        InicioController,
        PreguntasFrecuentesController

    ],
    components: [],
})
export class AppModule {


}