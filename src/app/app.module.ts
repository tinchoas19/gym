import { CategoriasPage } from './../pages/categorias/categorias';
import { MapaPage } from './../pages/mapa/mapa';
import { IntGymPage } from './../pages/int-gym/int-gym';
import { FirstPage } from './../pages/first/first';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HorariosPage } from '../pages/horarios/horarios';
import { LoginPage } from '../pages/login/login';
import { MembresiasPage } from '../pages/membresias/membresias';
import { MisClasesPage } from '../pages/mis-clases/mis-clases';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    MyApp,
    FirstPage,
    IntGymPage,
    MapaPage,
    HomePage,
    ListPage,
    HorariosPage,
    LoginPage,
    MembresiasPage,
    MisClasesPage,
    CategoriasPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StarRatingModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FirstPage,
    IntGymPage,
    MapaPage,
    HomePage,
    ListPage,
    HorariosPage,
    LoginPage,
    MembresiasPage,
    MisClasesPage,
    CategoriasPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
