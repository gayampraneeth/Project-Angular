import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AngularConceptsComponent } from './angular-concepts.component';
import { NewCmpComponent } from './components/new-cmp/new-cmp.component';
import { NewCmp1Component } from './components/new-cmp1/new-cmp1.component';
import { ChangeTextDirective } from './new-directive/change-text.directive';
import { SqrtPipe } from './new-pipe/sqrt.pipe';
import { FormsModule } from '@angular/forms';
import { AngularConceptsRoutingModule } from './angular-concepts-routing.module';
import { MyserviceService } from './new-service/myservice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularConceptsRoutingModule
  ],
  declarations: [
    AngularConceptsComponent,
    NewCmpComponent, NewCmp1Component,
    ChangeTextDirective,
    SqrtPipe
  ],
  providers: [
    MyserviceService
  ]
})
export class AngularConceptsModule { }
