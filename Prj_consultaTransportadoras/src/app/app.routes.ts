import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { View } from './components/view/view';


export const routes: Routes = [
    {path: 'about', title: 'sobre o Projeto', component: About},
    {path: 'view', title: 'Visualização do cadastro', component: View}
];
