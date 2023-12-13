import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Note } from '../../types';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
})
export class NoteComponent {
  @Input() note!: Note;
}
