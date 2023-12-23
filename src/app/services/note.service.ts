import { Injectable } from '@angular/core';
import { Note, Priority } from '../types';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private noteSubject: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>(
    []
  );

  constructor() {
    this.loadNotesFromStorage();
  }

  private loadNotesFromStorage(): void {
    try {
      const notes = this.getNotesFromStorage();
      this.noteSubject.next(notes);
    } catch (error) {
      console.error('Error loading notes from localStorage:', error);
    }
  }

  getAllNotes = (): Observable<Note[]> => {
    return this.noteSubject.asObservable();
  };

  addNote = (content: string, priority: Priority) => {
    const notes = this.getNotesFromStorage();
    const noteId = Date.now();
    const note: Note = {
      id: noteId.toString(),
      content,
      priority,
    };

    notes.push(note);
    this.updateNotesOnStorage(notes);
  };

  deleteNote = (noteId: string) => {
    const notes = this.getNotesFromStorage();
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    this.updateNotesOnStorage(updatedNotes);
  };

  updateNote = (noteId: string, content: string) => {
    const notes = this.getNotesFromStorage();
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) return { ...note, content };
      else return note;
    });
    this.updateNotesOnStorage(updatedNotes);
  };

  private getNotesFromStorage = (): Note[] => {
    const notesString = localStorage.getItem('notes');
    if (!notesString) return [];

    const notesJson = JSON.parse(notesString);
    if (!notesJson) return [];
    const data = notesJson.data;
    return data;
  };

  private updateNotesOnStorage = (notes: Note[]) => {
    const notesJson = {
      data: notes,
    };

    localStorage.setItem('notes', JSON.stringify(notesJson));
    this.noteSubject.next(notes);
  };
}
