import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../types';
import { NoteService } from '../../services/note.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Init } from 'v8';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './note.component.html',
})
export class NoteComponent implements OnInit {
  @Input() note!: Note;
  updateNoteState = false;

  NOTE_SIZE = {
    HIGH: 'text-5xl',
    MEDIUM: 'text-3xl',
    LOW: 'text-lg',
  };

  updateNoteForm = new FormGroup({
    noteContent: new FormControl<string>(''),
  });

  constructor(private noteService: NoteService) {}
  ngOnInit(): void {
    this.updateNoteForm.controls.noteContent.setValue(this.note.content);
  }

  deleteNote = (noteId: string) => {
    this.noteService.deleteNote(noteId);
  };

  changeUpdateState = () => {
    this.updateNoteState = !this.updateNoteState;
  };

  updateNote = (noteId: string, e: Event) => {
    e.preventDefault();
    const noteContent = this.updateNoteForm.controls.noteContent
      .value as string;
    this.noteService.updateNote(noteId, noteContent);
  };
}
