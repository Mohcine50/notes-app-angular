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
    HIGH: 'text-5xl',
    MEDIUM: 'text-2xl',
    LOW: 'text-lg',
  };

  constructor(private noteService: NoteService) {}

  deleteNote = (noteId: string) => {
    this.noteService.deleteNote(noteId);
  };

  updateNote = (noteId: string) => {
    this.noteService.updateNote(noteId);
  };
}
