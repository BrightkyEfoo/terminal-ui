import * as readline from 'readline';

export class ToggleSwitch {
    private state: boolean;

    constructor(initialState: boolean = false) {
        this.state = initialState;
    }

    public display(): Promise<boolean> {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                terminal: true,
            });

            const render = () => {
                console.clear();
                console.log(`Toggle Switch (press space to toggle, enter to finish): [${this.state ? 'ON' : 'OFF'}]`);
            };

            render();

            // Écoute des événements de touche
            process.stdin.on('keypress', (char, key) => {
                if (key.name === 'space') {
                    this.state = !this.state; // Toggle the state
                    render();
                } else if (key.name === 'return') {
                    rl.close();
                    resolve(this.state); // Return the final state
                }
            });

            // Écouter quand l'interface est fermée
            rl.on('close', () => {
                console.log('Toggle Switch closed.');
            });
        });
    }
}
