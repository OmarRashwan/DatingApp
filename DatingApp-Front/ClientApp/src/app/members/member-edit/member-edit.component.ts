import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm', { static: true }) editForm: NgForm
  user: User;

  constructor(private routes: ActivatedRoute, private alertfiy: AlertifyService) { }

  ngOnInit() {
    debugger;
    this.routes.data.subscribe(data => {
      this.user = data['user'];
    });
  }
  updateUser() {
    console.log(this.user);
    this.alertfiy.success('Profile Updated');
    this.editForm.reset(this.user);

  }

}


