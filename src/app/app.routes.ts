import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Main2Component } from './main2/main2.component';

export const routes: Routes = [
    {
        path:"",
        component:MainComponent
    },
    {
        path:"main2/:id",
        component:Main2Component
    }
];
