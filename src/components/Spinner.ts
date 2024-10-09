import * as readline from 'readline';

export class Spinner {
    private interval: NodeJS.Timeout | null = null;
    private frames: string[] = ['-', '\\', '|', '/'];
    private currentFrame: number = 0;

    public start(message: string): void {
        this.interval = setInterval(() => {
            readline.cursorTo(process.stdout, 0);
            process.stdout.write(`\r${message} ${this.frames[this.currentFrame]}`);
            this.currentFrame = (this.currentFrame + 1) % this.frames.length;
        }, 100);
    }

    public stop(): void {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            readline.cursorTo(process.stdout, 0);
            process.stdout.write('\r'); // Clear the spinner
        }
    }
}
