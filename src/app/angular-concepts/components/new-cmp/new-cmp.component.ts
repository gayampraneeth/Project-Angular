import { Component, OnInit, Input, Output } from '@angular/core';
import { MyserviceService } from '../../new-service/myservice.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  newcomponent = 'Entered in new component created';
  
  @Input()
  inputPropWithoutAlias:string;

  @Input('inputFromParentWithAlias')
  inputPropWithAlias: string;

  @Output()
  valueChangeEvent = new EventEmitter();

  newcomponentproperty:string;

  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
    this.newcomponentproperty = this.myservice.serviceproperty;
  }
  
  childToParent () {
    this.valueChangeEvent.emit('Sending value to parent compement from child');
    //this.myservice.serviceproperty = "New Button clicked to change Service Property";
    //this.newcomponentproperty = this.myservice.serviceproperty;
  }

}
