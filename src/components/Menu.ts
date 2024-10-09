import * as readline from 'node:readline';

export class Menu {
    private readonly options: string[];
    private readonly title: string;

    constructor(title: string, options: string[]) {
        this.title = title;
        this.options = options;
    }

    public display(): Promise<string> {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            console.log(this.title);
            this.options.forEach((option, index) => {
                console.log(`${index + 1}. ${option}`);
            });

            rl.question('Select an option: ', (answer) => {
                rl.close();
                const index = parseInt(answer) - 1;
                if (index >= 0 && index < this.options.length) {
                    resolve(this.options[index]);
                } else {
                    console.log('Invalid selection, please try again.');
                    resolve(this.display());
                }
            });
        });
    }
}
