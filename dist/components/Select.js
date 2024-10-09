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
exports.Select = void 0;
const readline = __importStar(require("readline"));
class Select {
    constructor(options) {
        this.options = options;
        this.currentIndex = 0;
    }
    display() {
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
                }
                else if (key.name === 'down') {
                    this.currentIndex = (this.currentIndex + 1) % this.options.length;
                    render();
                }
                else if (key.name === 'return') {
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
exports.Select = Select;
