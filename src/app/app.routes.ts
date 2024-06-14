import { Host } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ForumComponent } from './forum/forum.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login/login.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { DistritoComponent } from './Components/servicios/distrito/distrito.component';
import { ListardistritoComponent } from './Components/servicios/distrito/listardistrito/listardistrito.component';
import { CreardistritoComponent } from './Components/servicios/distrito/creardistrito/creardistrito.component';
import { PoliciaComponent } from './Components/servicios/policia/policia.component';
import { ListarpoliciaComponent } from './Components/servicios/policia/listarpolicia/listarpolicia.component';
import { CrearpoliciaComponent } from './Components/servicios/policia/crearpolicia/crearpolicia.component';
import { CiudadanoComponent } from './Components/servicios/ciudadano/ciudadano.component';
import { ListarciudadanoComponent } from './Components/servicios/ciudadano/listarciudadano/listarciudadano.component';
import { CrearciudadanoComponent } from './Components/servicios/ciudadano/crearciudadano/creaciudadano.component';

export const routes: Routes = [
    {'path': '', component:InicioComponent},
    {'path': 'forum', component:ForumComponent},
    {'path': 'servicios', component:ServiciosComponent, children:[
        {'path': 'distrito',component:DistritoComponent, children:[
            {
                path:'listar',component:ListardistritoComponent
            },
            {
                path:'crear',component:CreardistritoComponent
            }
        ]},
        {'path': 'policia',component:PoliciaComponent, children:[
            {
                path:'listar',component:ListarpoliciaComponent
            },
            {
                path:'crear',component:CrearpoliciaComponent
            }
        ]},
        {'path': 'ciudadano',component:CiudadanoComponent, children:[
            {
                path:'listar',component:ListarciudadanoComponent
            },
            {
                path:'crear',component:CrearciudadanoComponent
            }
        ]}
    ]},
    {'path': 'about', component: AboutComponent},
    {'path': 'login', component: LoginComponent}
];
