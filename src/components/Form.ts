import * as readline from 'readline';

export class Form {
    private fields: { [key: string]: string } = {};

    constructor(private questions: string[]) {}

    public async display(): Promise<{ [key: string]: string }> {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                terminal: true,
            });

            const askQuestion = (index: number) => {
                if (index < this.questions.length) {
                    rl.question(`${this.questions[index]}: `, (answer) => {
                        this.fields[this.questions[index]] = answer;
                        askQuestion(index + 1); // Ask the next question
                    });
                } else {
                    rl.close();
                    resolve(this.fields); // Return collected fields
                }
            };

            askQuestion(0); // Start asking questions

            rl.on('close', () => {
                console.log('Form closed.');
            });
        });
    }
}
