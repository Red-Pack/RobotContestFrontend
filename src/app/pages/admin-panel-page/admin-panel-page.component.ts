import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.css']
})
export class AdminPanelPageComponent {
  // Методы для обработки нажатий на кнопки
  onButtonClick(buttonId: string): void {
    console.log(`Кнопка ${buttonId} нажата`);
    // Добавьте логику для каждой кнопки
    if (buttonId === 'btn1') {
      // Логика для кнопки 1
    } else if (buttonId === 'btn2') {
      // Логика для кнопки 2
    } else if (buttonId === 'btn3') {
      // Логика для кнопки 3
    } else if (buttonId === 'btn4') {
      // Логика для кнопки 4
    }
  }
}
