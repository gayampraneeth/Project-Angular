import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListTodsComponent } from './components/list-tods/list-tods.component';
import { AuthGuardGuard } from './service/auth-guard.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TodComponent } from './components/tod/tod.component';

const routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'Home/:name',
        component: WelcomeComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'ToDos',
        component: ListTodsComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'ToDos/:task',
        component: TodComponent
    },
    /* {
        path: 'ToDo/:name',
        component: ToDoComponent,
        canActivate: [AuthGuardGuard],
        children: [

        ]
    }, */
    {
        path: 'AngularConcepts',
        loadChildren: () => import('./angular-concepts/angular-concepts.module').then(m => m.AngularConceptsModule),
        canActivate: [AuthGuardGuard]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
