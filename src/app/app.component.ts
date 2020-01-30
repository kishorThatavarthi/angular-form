import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   userModel=new User('rob','rob@test.com',555566,'','morning',true) 
}
