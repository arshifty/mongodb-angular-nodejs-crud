import { Component, OnInit } from '@angular/core';
import {  FormControl,  FormGroup,  Validators,  FormBuilder,} from "@angular/forms";
import { User } from '../../model/User';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  userValue: any;

  constructor(private myservice: UserServiceService) { }

  ngOnInit(): void { 
    this.viewData();
   }

    viewData() {
      this.myservice.getAll().subscribe(
        data => {
          this.userValue = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
}
