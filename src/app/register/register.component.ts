import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http'; // Import HttpErrorResponse
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }
  message: string | undefined;
  registerForm: any = this.fb.group({
    username: [''],
    password: [''],
    fullname: [''],
    phonenumber: [''],
    role: ['']
  });
  ngOnInit(): void {
  }
  register() {
    this.authService.register(this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.fullname, this.registerForm.value.phonenumber, this.registerForm.value.role).subscribe(response => {
      var code = response.status;
      if (code === 201) {
        this.message = "Đăng ký thành công";
      } else {
        this.message = "Đăng ký thất bại";
      }
    },
    (error: HttpErrorResponse) => { // Handle errors
      if (error.status === 400) {
        this.message = "Dữ liệu không hợp lệ";
      } else if (error.status === 404) {
        this.message = "Tài khoản đã tồn tại";
      } else {
        this.message = "Đã xảy ra lỗi. Vui lòng thử lại sau.";
      }
    }
    );
  }
}
