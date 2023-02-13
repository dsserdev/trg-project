import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {

  addLocationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    latitude: new FormControl('', [Validators.required, Validators.pattern(/^[-+]?[0-9]{1,7}(\.[0-9]+)?$/)]),
    longitude: new FormControl('', [Validators.required, Validators.pattern(/^[-+]?[0-9]{1,7}(\.[0-9]+)?$/)])
  });

  constructor(
    public dialogRef: MatDialogRef<AddLocationComponent>) {
  }

  get form() { return this.addLocationForm.controls; }

  onSubmit(): void {
    if (this.addLocationForm.invalid) return;

    this.dialogRef.close(this.addLocationForm.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
