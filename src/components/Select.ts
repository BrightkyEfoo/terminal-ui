import * as readline from 'readline';

export class Select {
    private readonly options: string[];
    private currentIndex: number;

    constructor(options: string[]) {
        this.options = options;
        this.currentIndex = 0;
    }

    public display(): Promise<string> {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                terminal: true,
            });

            const render = () => {
                console.clear();
                console.log('Select an option (use arrows to navigate, enter to select):');
                this.options.forEach((option, index) => {
                    const cursor = index === this.currentIndex ? '>' : ' ';
                    console.log(`${cursor} ${option}`);
                });
            };

            render();

            process.stdin.on('keypress', (char, key) => {
                if (key.name === 'up') {
                    this.currentIndex = (this.currentIndex - 1 + this.options.length) % this.options.length;
                    render();
                } else if (key.name === 'down') {
                    this.currentIndex = (this.currentIndex + 1) % this.options.length;
                    render();
                } else if (key.name === 'return') {
                    rl.close();
                    resolve(this.options[this.currentIndex]); // Return the selected option
                }
            });

            rl.on('close', () => {
                console.log('Select closed.');
            });
        });
    }
}
