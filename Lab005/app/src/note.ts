export class Note {
    title: string;
    content: string;
    isPinned: boolean;

    constructor(title: string, content: string, isPinned = false) {
        this.title = title;
        this.content = content;
        this.isPinned = isPinned;
    }
}

