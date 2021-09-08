import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testForInterview';

  constructor(private dialog: MatDialog) {
  }

  showUserInfoModal(): void {
    const testUserId = 'id';
    this.dialog.open(
      UserInfoComponent,
      {
        width: '50vw',
        height: '50vh',
        data: testUserId
      }
    );
  }
}
