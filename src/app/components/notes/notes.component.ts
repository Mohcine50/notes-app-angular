import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { NoteService } from '../../services/note.service';
import { Note } from '../../types';
import { Observable, map, pipe } from 'rxjs';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, NoteComponent],
  templateUrl: './notes.component.html',
  styles: ``,
})
export class NotesComponent implements OnInit {
  notes$!: Observable<Note[]>;

  constructor(private noteService: NoteService) {}

  NOTE_SIZE = {
    High: 1,
    Medium: 2,
    Low: 3,
  };
  ngOnInit(): void {
    this.notes$ = this.noteService.getAllNotes().pipe(
      map((notes) =>
        notes.map((note) => {
          return { ...note, noteSize: this.NOTE_SIZE[note.priority] };
        })
      ),
      map((notes) => notes.sort((a, b) => a.noteSize - b.noteSize))
    );
    this.noteService.getAllNotes().subscribe();
  }
}
