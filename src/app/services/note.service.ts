import { Injectable } from '@angular/core';
import { Note } from '../types';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {}

  getAllNotes = (): Note[] => {
    const notesString = localStorage.getItem('notes');
    if (!notesString) return [];

    const notesJson = JSON.parse(notesString);
    if (!notesJson) return [];
    const data = notesJson.data;
    return data;
  };

  addNote = (note: Note) => {};

  deleteNote = (noteId: string) => {};

  updateNote = (noteId: string) => {};
}
