import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'uxg-toolbar',
  templateUrl: 'toolbar.html',
  styleUrls: ['toolbar.css'],
})
export class UxgToolbar {
  @Output() menuClick = new EventEmitter<boolean>();

  toggleNav() {
    this.menuClick.emit(true);
  }
} 
