import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  statusValues = [
    {
      value: 'inativo',
      viewValue: 'inativo',
    },
    {
      value: 'ativo',
      viewValue: 'ativo',
    },
  ];
}
