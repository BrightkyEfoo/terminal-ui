import * as readline from 'readline';

export class InputField {
    private readonly label: string;

    constructor(label: string) {
        this.label = label;
    }

    public prompt(): Promise<string> {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            rl.question(`${this.label}: `, (answer) => {
                rl.close();
                resolve(answer);
            });
        });
    }
}
