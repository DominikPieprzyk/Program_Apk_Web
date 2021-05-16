import { Note } from './note';

export class App {
    notes: Note[] = [];
    constructor() {
        this.start();
    }
    start(): void {
        document.querySelector('#addNewNote')
            .addEventListener('click', () => {
                this.addNewNote;
            });
            this.loadNotes();
    }
    loadNotes(): void {
        const noteList = localStorage.getItem('noteList');
        if(noteList===null){
            return;
        }
        const notes: Note[] = JSON.parse(noteList);
        this.notes = notes;

    }

    addNewNote(): void {
        const newNoteTitle: string = document.querySelector<HTMLInputElement>('#title').value;
        const newNoteContent: string = document.querySelector<HTMLInputElement>('#content').value;
        const newNoteIsPinned: boolean = document.querySelector<HTMLInputElement>('#isPinned').checked;
    }
    
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}