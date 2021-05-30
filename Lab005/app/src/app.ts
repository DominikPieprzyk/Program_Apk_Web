import { Note } from "./note";

export class App {
  notes: Note[] = [];
  constructor() {
    this.start();
  }
  start(): void {
    document.querySelector("#addNewNote").addEventListener("click", () => {
      this.addNewNote();
    });
  }
  loadNotes(): void {
    if (this.notes.length == 0) return;
    console.log(this.notes);
  }

  addNewNote(): void {
    const newNoteTitle: string =
      document.querySelector<HTMLInputElement>("#title").value;
    const newNoteText: string =
      document.querySelector("[contenteditable]").textContent;
    const isPinned: boolean =
      document.querySelector<HTMLInputElement>("#pinned").checked;
    this.notes.push(new Note(newNoteTitle, newNoteText, isPinned));

    this.loadNotes();
  }

  saveData(data: any) {
    localStorage.setItem("notes", JSON.stringify(data));
  }
}
