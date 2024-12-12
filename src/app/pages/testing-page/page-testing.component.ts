  import { Component } from '@angular/core';

@Component({
  selector: 'app-page-testing',
  imports: [],
  templateUrl: './page-testing.component.html',
  styleUrl: './page-testing.component.css'
})
export class PageTestingComponent {
  // Array to store the list of tests
  tests: string[] = ['Испытание 1', 'Испытание 2', 'Испытание 3'];

  // Method to add a new test to the list
  addTest(): void {
    const newTestNumber = this.tests.length + 1;
    this.tests.push(`Испытание ${newTestNumber}`);
  }
}
