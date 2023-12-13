import { Injectable } from '@angular/core';
import { Note, Priority } from '../types';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {}

  getAllNotes = (): Note[] => {
    const notes = this.getNotesFromStorage();
    return notes;
  };

  addNote = (content: string, priority: Priority) => {
    const notes = this.getNotesFromStorage();
    const note: Note = {
      id: notes.length.toString(),
      content,
      priority,
    };

    notes.push(note);

    this.updateNotesOnStorage(notes);
  };

  deleteNote = (noteId: string) => {};

  updateNote = (noteId: string) => {};

  getNotesFromStorage = (): Note[] => {
    const notesString = localStorage.getItem('notes');
    if (!notesString) return [];

    const notesJson = JSON.parse(notesString);
    if (!notesJson) return [];
    const data = notesJson.data;
    return data;
  };

  updateNotesOnStorage = (notes: Note[]) => {
    const notesJson = {
      data: notes,
    };

    localStorage.setItem('notes', JSON.stringify(notesJson));
  };
}
