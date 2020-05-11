import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-file-dialog',
  templateUrl: './new-file-dialog.component.html',
  styleUrls: ['./new-file-dialog.component.css']
})
export class NewFileDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewFileDialogComponent>) {}

  fileName: string;

  ngOnInit() {
  }

}
