import { Host } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ForumComponent } from './forum/forum.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './Components/servicios/login/login.component';
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
import { AlertamovilComponent } from './Components/servicios/alertamovil/alertamovil.component';
import { ListaralertaComponent } from './Components/servicios/alertamovil/listaralerta/listaralerta.component';
import { CrearalertaComponent } from './Components/servicios/alertamovil/crearalerta/crearalerta.component';
import { CasoComponent } from './Components/servicios/caso/caso.component';
import { ListarcasoComponent } from './Components/servicios/caso/listarcaso/listarcaso.component';
import { CrearcasoComponent } from './Components/servicios/caso/crearcaso/crearcaso.component';
import { ComisariaComponent } from './Components/servicios/comisaria/comisaria.component';
import { ListarcomisariaComponent } from './Components/servicios/comisaria/listarcomisaria/listarcomisaria.component';
import { CrearcomisariaComponent } from './Components/servicios/comisaria/crearcomisaria/crearcomisaria.component';
import { ForoComponent } from './Components/servicios/foro/foro.component';
import { PublicacionComponent } from './Components/servicios/foro/publicacion/publicacion.component';
import { ListarpubliComponent } from './Components/servicios/foro/publicacion/listarpubli/listarpubli.component';
import { CrearpubliComponent } from './Components/servicios/foro/publicacion/crearpubli/crearpubli.component';
import { RespuestaComponent } from './Components/servicios/respuesta/respuesta.component';
import { ListarrespComponent } from './Components/servicios/foro/publicacion/respuesta/listarresp/listarresp.component';
import { CrearrespComponent } from './Components/servicios/foro/publicacion/respuesta/crearresp/crearresp.component';
import { segGuard } from './guard/seguridad.guard';

export const routes: Routes = [
    {'path': '', component:InicioComponent},
    {'path': 'foro', component:ForoComponent,children:[
        {
            path:'publicacion',component:PublicacionComponent,children:[
                {
                    path:'listar',component:ListarpubliComponent
                },
                {
                    path:'crear',component:CrearpubliComponent
                },
                {
                    path:'respuesta',component:RespuestaComponent,children:[
                        {
                            path:'listar',component:ListarrespComponent
                        },
                        {
                            path:'crear',component:CrearrespComponent
                        },
                    ]
                },
            ],canActivate:[segGuard]
        },
    ]},
    {'path': 'servicios', component:ServiciosComponent, children:[
        {'path': 'distrito',component:DistritoComponent, children:[
            {
                path:'listar',component:ListardistritoComponent
            },
            {
                path:'crear',component:CreardistritoComponent
            }
        ],canActivate:[segGuard]},
        {'path': 'policia',component:PoliciaComponent, children:[
            {
                path:'listar',component:ListarpoliciaComponent
            },
            {
                path:'crear',component:CrearpoliciaComponent
            }
        ],},
        {'path': 'ciudadano',component:CiudadanoComponent, children:[
            {
                path:'listar',component:ListarciudadanoComponent
            },
            {
                path:'crear',component:CrearciudadanoComponent
            }
        ],canActivate:[segGuard]},
        {'path': 'alertamovil',component:AlertamovilComponent, children:[
            {
                path:'listar',component:ListaralertaComponent
            },
            {
                path:'crear',component:CrearalertaComponent
            }
        ],canActivate:[segGuard]},
        {'path': 'caso',component:CasoComponent, children:[
            {
                path:'listar',component:ListarcasoComponent
            },
            {
                path:'crear',component:CrearcasoComponent
            }
        ],canActivate:[segGuard]
    },
        {'path': 'comisaria',component:ComisariaComponent, children:[
            {
                path:'listar',component:ListarcomisariaComponent
            },
            {
                path:'crear',component:CrearcomisariaComponent
            }
            
        ],canActivate:[segGuard]
    }
    ],
    //canActivate:[segGuard]
},
    {'path': 'about', component: AboutComponent},
    {'path': 'login', component: LoginComponent}
];
