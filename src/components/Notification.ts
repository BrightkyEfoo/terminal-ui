import * as readline from 'readline';

type NotificationType = 'info' | 'warning' | 'error';

export class Notification {
    private readonly message: string;
    private readonly type: NotificationType;

    constructor(message: string, type: NotificationType) {
        this.message = message;
        this.type = type;
    }

    private getColor(): string {
        switch (this.type) {
            case 'info':
                return '\x1b[34m'; // Bleu
            case 'warning':
                return '\x1b[33m'; // Jaune
            case 'error':
                return '\x1b[31m'; // Rouge
            default:
                return '\x1b[0m'; // Défaut (reset)
        }
    }

    public display(): Promise<void> {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                terminal: true,
            });

            console.clear();
            console.log(`${this.getColor()}Notification:`);
            console.log(this.message);
            console.log('Press enter to continue...');
            console.log('\x1b[0m'); // Réinitialiser la couleur

            process.stdin.on('keypress', (char, key) => {
                if (key.name === 'return') {
                    rl.close();
                    resolve(); // Résoudre quand l'utilisateur appuie sur enter
                }
            });

            rl.on('close', () => {
                console.log('Notification closed.');
            });
        });
    }
}
