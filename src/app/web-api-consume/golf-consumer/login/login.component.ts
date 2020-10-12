import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msg: string;
  form: FormGroup;

  constructor(public authService: AuthService,
              private router: Router,
              public builder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.builder.group(
      {
        username: [''],
        password: ['']
      }
    );
  }

  login(): void {
    this.msg = 'Tentative de login';
    if (this.form.valid) {
      this.authService.login(this.form.value as { username: string, password: string }).subscribe(result => {
        this.msg = 'Connection réussie!';
        this.router.navigate([this.authService.redirectUrl]).then();
      });
    }
  }

  logout(): void {
    this.msg = 'Déconnection';
    this.authService.logout();
    this.router.navigate(['home']).then();
  }

}
