import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './new-service/myservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angular-concepts',
  templateUrl: './angular-concepts.component.html',
  styleUrls: ['./angular-concepts.component.css']
})
export class AngularConceptsComponent implements OnInit {
  title = 'My Angular App';
  todaydate = new Date();
  jsonval = {name: 'Rox', age: '25', address: {a1: 'Mumbai', a2: 'Karnataka'}};
  months = ['January', 'Feburary', 'March', 'April', 'May',
            'June', 'July', 'August', 'September',
            'October', 'November', 'December'];
  isavailable = true;   // variable is set to true
  isavailable1 = false;
  isavailable2 = true;
  username = 'praneeth@gmail.com';
  username1 = 'peter@yahoo.com';
  person = 'Mike';
  httpdata: any[];

  inputPropParent = 'Passing values from parent to child';
  inputPropParentWithAlias = 'Passing values from parent to child with a alias';

  propertyFromService: string;

  constructor(private myservice: MyserviceService, private http: HttpClient) {

  }

  ngOnInit() {
    this.propertyFromService = this.myservice.serviceproperty;
    this.todaydate = this.myservice.showTodayDate();
    // this.myservice.serviceproperty = "Service changed in App Component Init method";
  }

  myClickFunction(event) {
    alert('This is click function');
  }

  changemonths(event) {
    console.log('Changed month from the Dropdown');
    console.log(event);
    alert('Changed month from the Dropdown');
  }

  callFromChild(event1) {
    console.log(event1);
    alert(event1);
  }

  displaydata(data) {
    this.httpdata = data;
  }

  clearData() {
    this.httpdata = [];
  }

  loadDataUsingHttpService(event) {
    // this.myservice.serviceproperty = "Service changed in App Component on click";
    console.log(event);
    this.http.get('http://jsonplaceholder.typicode.com/users')
      .subscribe(
        (data) => {this.displaydata(data); }
      );
  }

  loadDataFromService(event) {
    this.myservice.loadDataUsingHttpService().subscribe(
        (response: string) => {this.displaydata(response); }
      );
  }

}
