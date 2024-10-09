export class Table {
    private headers: string[];
    private rows: string[][];

    constructor(headers: string[], rows: string[][]) {
        this.headers = headers;
        this.rows = rows;
    }

    public display(): void {
        const headerRow = this.headers.join(' | ');
        console.log(headerRow);
        console.log('-'.repeat(headerRow.length));
        this.rows.forEach(row => {
            console.log(row.join(' | '));
        });
    }
}
