import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { AdminPanelPageComponent } from './pages/admin-panel-page/admin-panel-page.component';
import { AdminJudgePageComponent } from './pages/admin-judge-page/admin-judge-page.component';
import { AdminProjectPageComponent } from './pages/admin-project-page/admin-project-page.component';
import { AdminTeamPageComponent } from './pages/admin-team-page/admin-team-page.component';

export const routes: Routes = [

    {path: '', component: HeaderComponentComponent, children: [
        {path: '', component: StartPageComponent},
        {path: 'login', component: LoginPageComponent},
        {path: 'request', component: RequestPageComponent},
        {path: 'admin-panel', component: AdminPanelPageComponent},
        {path: 'admin-panel/judge', component: AdminJudgePageComponent},
        {path: 'admin-panel/project', component: AdminProjectPageComponent},
        {path: 'admin-panel/team', component: AdminTeamPageComponent},

    ]},

    
];
