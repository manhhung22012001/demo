import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string | undefined;
  registerForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    fullname: [null, Validators.required],
    phonenumber: [null, Validators.required],
    role: [null, Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const fullname = this.registerForm.value.fullname;
    const phonenumber = this.registerForm.value.phonenumber;
    const role = this.registerForm.value.role;

    if (fullname && phonenumber && username && password && role) {
      this.authService.register(fullname, phonenumber, username ,password, role).subscribe(response => {
        var code = response.status;
        if (code === 201) {
          this.message = "Đăng ký thành công";
        }
      },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.message = "Tên đăng nhập đã tồn tại";
          }  else {
            this.message = "Đã xảy ra lỗi. Vui lòng thử lại sau.";
          }
        }
      );
    } else {
      this.message = "Vui lòng nhập đầy đủ thông tin.";
    }
  }
}
