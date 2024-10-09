// src/components/Checkbox.ts
import * as readline from 'readline';

export class Checkbox {
    private options: string[];
    private readonly checked: boolean[];
    private currentIndex: number;

    constructor(options: string[]) {
        this.options = options;
        this.checked = new Array(options.length).fill(false);
        this.currentIndex = 0;
    }

    public display(): Promise<string[]> {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                terminal: true,
            });

            // Rendre les options
            const render = () => {
                console.clear();
                console.log('Select options (space to toggle, enter to finish):');
                this.options.forEach((option, index) => {
                    const state = this.checked[index] ? '[x]' : '[ ]';
                    const cursor = index === this.currentIndex ? '>' : ' ';
                    console.log(`${cursor} ${state} ${option}`);
                });
            };

            render();

            // Écoute des événements de touche
            process.stdin.on('keypress', (char, key) => {
                if (key.name === 'space') {
                    // Toggle l'option actuelle
                    this.checked[this.currentIndex] = !this.checked[this.currentIndex];
                    render();
                } else if (key.name === 'up') {
                    // Déplacer le curseur vers le haut
                    this.currentIndex = (this.currentIndex - 1 + this.options.length) % this.options.length;
                    render();
                } else if (key.name === 'down') {
                    // Déplacer le curseur vers le bas
                    this.currentIndex = (this.currentIndex + 1) % this.options.length;
                    render();
                } else if (key.name === 'return') {
                    // Finir la sélection
                    rl.close();
                    resolve(this.options.filter((_, i) => this.checked[i]));
                }
            });

            // Écouter quand l'interface est fermée
            rl.on('close', () => {
                console.log('Checkbox selection closed.');
            });
        });
    }
}
