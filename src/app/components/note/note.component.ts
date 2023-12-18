import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Note } from '../../types';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
})
export class NoteComponent {
  @Input() note!: Note;

  NOTE_SIZE = {
    High: 'text-6xl',
    Medium: 'text-3xl',
    Low: 'text-lg',
  };

  constructor(private noteService: NoteService) {}

  deleteNote = (noteId: string) => {
    this.noteService.deleteNote(noteId);
  };
}
