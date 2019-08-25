import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
  @Input() note: Note;
  @Input() editable: boolean;

  @Output() tempContent = new EventEmitter<string>();

  tempContentTxt = new FormControl('');

  ngOnInit() {
    this.tempContentTxt.setValue(this.note.content);
    this.tempContent.emit(this.note.content);
    this.tempContentTxt.valueChanges.subscribe((value) => {
      this.tempContent.emit(value);
    });
  }

}
