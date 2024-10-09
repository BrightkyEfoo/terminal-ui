import * as readline from 'readline';

export class ProgressBar {
    private readonly total: number;
    private current: number;

    constructor(total: number) {
        this.total = total;
        this.current = 0;
    }

    public update(progress: number): void {
        this.current = progress;
        this.render();
    }

    private render(): void {
        const percentage = (this.current / this.total) * 100;
        const barLength = 40;
        const filledLength = Math.round((barLength * percentage) / 100);
        const bar = '█'.repeat(filledLength) + '-'.repeat(barLength - filledLength);
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`Progress: [${bar}] ${percentage.toFixed(2)}%`);
    }

    public complete(): void {
        this.current = this.total;
        this.render();
        console.log('\nTask Complete!');
    }
}
