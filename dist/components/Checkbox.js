"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
// src/components/Checkbox.ts
const readline = __importStar(require("readline"));
class Checkbox {
    constructor(options) {
        this.options = options;
        this.checked = new Array(options.length).fill(false);
        this.currentIndex = 0;
    }
    display() {
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
                }
                else if (key.name === 'up') {
                    // Déplacer le curseur vers le haut
                    this.currentIndex = (this.currentIndex - 1 + this.options.length) % this.options.length;
                    render();
                }
                else if (key.name === 'down') {
                    // Déplacer le curseur vers le bas
                    this.currentIndex = (this.currentIndex + 1) % this.options.length;
                    render();
                }
                else if (key.name === 'return') {
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
exports.Checkbox = Checkbox;
