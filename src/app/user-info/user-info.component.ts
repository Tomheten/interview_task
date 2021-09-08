import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  values!: [string, string | number][];

  constructor(
    public dialogRef: MatDialogRef<UserInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private http: HttpClient,
  ) {
    http.get('/users/' + this.data).subscribe((data) => {
      const licenses = (data as any).licenses;
      delete (data as any).licenses;
      this.values = [];
      for (let key in data) {
        this.values.push([key, (<any>data)[key]]);
      }
      const params = new HttpParams({ fromString: 'id=' + licenses.join('&id=') });
      this.http.get('/licenses', { params: params }).subscribe((data) => {
        for (let key in data) {
          this.values.push([key, (<any>data)[key]]);
        }
      });
    });
  }

  ngOnInit(): void {
  }
}
