import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { NoteService } from '../../services/note.service';
import { Note } from '../../types';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, NoteComponent],
  templateUrl: './notes.component.html',
  styles: ``,
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.notes = this.noteService.getAllNotes();
  }
}
