// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';       
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router'; 
//  import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';




// @Component({
//   selector: 'app-register',
//   standalone: true, 
//   imports: [CommonModule, FormsModule,RouterLink],
//   templateUrl: './register.html',
//   styleUrl: './register.scss'
// })


// export class Register {
// username: string = '';
// password: string = '';
// role: string = 'User';

// onRegister() {
//     const user = {
//       username: this.username,
//       password: this.password,
//       role: this.role
//     };

//  this.http.post('https://localhost:7019/api/auth/register', user)
//   .subscribe({
//     next: res => {
//       console.log('נרשם בהצלחה', res);
//       this.router.navigate(['/login']);
//     },
//     error: err => {
//       console.error('שגיאה בהרשמה:', err);
//       alert('הרשמה נכשלה!');
//     }
//   });
// }
// }
 
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';       
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']     
})
export class Register {
  username: string = '';
  password: string = '';
  role: string = 'User';

  constructor(private http: HttpClient, private router: Router) {} // ✅ חובה

  onRegister() {
    const user = {
      Username: this.username,
      Password: this.password,
      Role: this.role
    };

    this.http.post('https://localhost:7019/api/auth/register', user)
      .subscribe({
        next: res => {
          console.log('נרשם בהצלחה', res);
          this.router.navigate(['/user']); // ✅ ניתוב אחרי הצלחה
        },
        error: err => {
          console.error('שגיאה בהרשמה:', err);
          alert('הרשמה נכשלה!');
        }
      });
  }
}
