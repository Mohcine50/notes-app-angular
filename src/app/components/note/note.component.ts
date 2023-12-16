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
    High: { textSize: 'text-6xl', margin: '' },
    Medium: { textSize: 'text-3xl', margin: 'mx-7' },
    Low: { textSize: 'text-lg', margin: 'mx-14' },
  };

  constructor(private noteService: NoteService) {}

  deleteNote = (noteId: string) => {
    this.noteService.deleteNote(noteId);
  };
}
