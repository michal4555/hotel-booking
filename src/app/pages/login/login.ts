
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';       
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginData = {
      UserName: this.username,         
      Password: this.password
    };

    console.log("נשלח לשרת:", loginData);

    this.http.post('https://localhost:7019/api/User/login', loginData).subscribe({
      next: (res: any) => {
        alert('התחברת בהצלחה!');

        if (res.role === 'Manager' || res.role === 'Receptionist') {
          this.router.navigate(['/reception']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      error: (err) => {
        alert('שם משתמש או סיסמה שגויים');
        console.error(err);
      }
    });
  }
}
