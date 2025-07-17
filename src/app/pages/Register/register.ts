
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Router, RouterLink } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
 
// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterLink],
//   templateUrl: './register.html',
//   styleUrls: ['./register.scss']
// })
// export class Register {
//   username: string = '';
//   password: string = '';
//   role: string = 'User';

//   constructor(private http: HttpClient, private router: Router) {}

//   onRegister() {
//     // קביעת התפקיד לפי תו בסיסמה
//     if (this.password.includes('!')) {
//       this.role = 'Manager';
//     } else if (this.password.includes('#')) {
//       this.role = 'Receptionist';
//     } else {
//       this.role = 'User';
//     }

//     const user = {
//       UserName: this.username,
//       Password: this.password,
//       Role: this.role
//     };

//     this.http.post('https://localhost:7019/api/auth/register', user).subscribe({
//       next: res => {
//         console.log('נרשם בהצלחה', res);

//         // ניווט לפי תפקיד
//         if (this.role === 'Manager') {
//           this.router.navigate(['/manager']);
//         } else if (this.role === 'Receptionist') {
//           this.router.navigate(['/reception']);
//         } else {
//           this.router.navigate(['/user']);
//         }
//       },
//       error: err => {
//         console.error('שגיאה בהרשמה:', err);
//         alert('הרשמה נכשלה!');
//       }
//     });
//   }
// }
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Router, RouterLink } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterLink],
//   templateUrl: './register.html',
//   styleUrls: ['./register.scss']
// })
// export class Register {
//   username: string = '';
//   password: string = '';
//   role: string = 'User';

//   constructor(private http: HttpClient, private router: Router) {}

//   onRegister() {
//     // קביעת תפקיד לפי סיסמה
//     if (this.password.includes('!')) {
//       this.role = 'Manager';
//     } else if (this.password.includes('#')) {
//       this.role = 'Receptionist';
//     } else {
//       this.role = 'User';
//     }

//  const user = {
//   UserName: this.username,
//   Password: this.password,
//   Role: this.role
// };

//     this.http.post('https://localhost:7019/api/auth/register', user).subscribe({
//       next: res => {
//         console.log('נרשם בהצלחה', res);
//         if (this.role === 'Manager') {
//           this.router.navigate(['/manager']);
//         } else if (this.role === 'Receptionist') {
//           this.router.navigate(['/reception']);
//         } else {
//           this.router.navigate(['/user']);
//         }
//       },
//       // error: err => {
//       //   console.error('שגיאה בהרשמה:', err);
//       //   alert('הרשמה נכשלה!');
//       // }
//       error: err => {
//   console.error('שגיאה בהרשמה:', err);
//   console.log('שגיאת ולידציה:', err.error?.errors); // ⬅ זה יראה בדיוק איזה שדה לא טוב
//   alert('הרשמה נכשלה!');
// }

//     });

//   }
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
  role: string = 'User'; // ברירת מחדל

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    const user = {
      UserName: this.username,
      Password: this.password,
      Role: this.role
    };

    console.log('הנתונים שנשלחים:', user); // לבדיקה

    this.http.post('https://localhost:7019/api/auth/register', user).subscribe({
      next: res => {
        console.log('נרשם בהצלחה', res);
        if (this.role === 'Manager') {
          this.router.navigate(['/manager']);
        } else if (this.role === 'Receptionist') {
          this.router.navigate(['/reception']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      error: err => {
        console.error('שגיאה בהרשמה:', err);
        console.log('שגיאת ולידציה:', err.error?.errors);
        alert('הרשמה נכשלה!');
      }
    });
  }
}
