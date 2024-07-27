import { Routes } from '@angular/router';
import { CambiosComponent } from './cambios/cambios.component';

export const routes: Routes = [
    {
        path:'home',
        component: CambiosComponent
    },{
        path:'',
        component: CambiosComponent
    }
];
