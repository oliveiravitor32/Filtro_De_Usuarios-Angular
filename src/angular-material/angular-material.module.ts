import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [provideNativeDateAdapter()],
})
export class AngularMaterialModule {}
