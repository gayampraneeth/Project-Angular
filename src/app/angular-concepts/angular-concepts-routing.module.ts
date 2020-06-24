import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularConceptsComponent } from './angular-concepts.component';
import { NewCmpComponent } from './components/new-cmp/new-cmp.component';
import { NewCmp1Component } from './components/new-cmp1/new-cmp1.component';

const routes = [{
    path: '',
    component: AngularConceptsComponent,
    children: [
      {
        path: 'new-cmp',
        component: NewCmpComponent
      }, {
        path: 'new-cmp1', component: NewCmp1Component
      }
    ]
  }];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AngularConceptsRoutingModule {}
