import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';

export const routes: Routes = [

    {path: '', component: HeaderComponentComponent, children: [
        {path: '', component: StartPageComponent},
        {path: 'login', component: LoginPageComponent},
        {path: 'request', component: RequestPageComponent}
    ]},

    
];
