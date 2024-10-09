"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
class Table {
    constructor(headers, rows) {
        this.headers = headers;
        this.rows = rows;
    }
    display() {
        const headerRow = this.headers.join(' | ');
        console.log(headerRow);
        console.log('-'.repeat(headerRow.length));
        this.rows.forEach(row => {
            console.log(row.join(' | '));
        });
    }
}
exports.Table = Table;
