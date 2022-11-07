import { Component, OnInit } from '@angular/core';
import MemberRegistration from '../entity/MemberRegistration';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  member: MemberRegistration = new MemberRegistration();
  save() {}
  constructor() {}

  ngOnInit(): void {}
}
