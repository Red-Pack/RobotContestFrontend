import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { AdminPanelPageComponent } from './pages/admin-panel-page/admin-panel-page.component';
import { AdminJudgePageComponent } from './pages/admin-judge-page/admin-judge-page.component';
import { AdminTeamPageComponent } from './pages/admin-team-page/admin-team-page.component';
import { PageTestingComponent } from './pages/testing-page/page-testing.component';

export const routes: Routes = [

    {path: '', component: HeaderComponentComponent, children: [
        {path: '', component: StartPageComponent},
        {path: 'login', component: LoginPageComponent},
        {path: 'request', component: RequestPageComponent},
        {path: 'testing', component: PageTestingComponent},,
        {path: 'admin-panel', component: AdminPanelPageComponent},
        {path: 'admin-panel/judge', component: AdminJudgePageComponent},
        {path: 'admin-panel/test', component: PageTestingComponent},
        {path: 'admin-panel/team', component: AdminTeamPageComponent},

    ]},

    
];
