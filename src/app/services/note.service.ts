import { Injectable } from '@angular/core';
import { Note, Priority } from '../types';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [];
  private noteSubject: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>(
    []
  );

  constructor() {
    this.loadNotesFromStorage();
  }

  private loadNotesFromStorage(): void {
    try {
      this.notes = this.getNotesFromStorage();
      this.noteSubject.next(this.notes);
    } catch (error) {
      console.error('Error loading notes from localStorage:', error);
    }
  }

  getAllNotes = (): Observable<Note[]> => {
    return this.noteSubject.asObservable();
  };

  addNote = (content: string, priority: Priority) => {
    const notes = this.getNotesFromStorage();
    const note: Note = {
      id: notes.length.toString(),
      content,
      priority,
    };

    notes.push(note);
    this.notes.push(note);
    this.updateNotesOnStorage(notes);
  };

  deleteNote = (noteId: string) => {};

  updateNote = (noteId: string) => {};

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
    this.noteSubject.next(this.notes);
  };
}
