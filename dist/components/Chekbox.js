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
const readline = __importStar(require("readline"));
class Checkbox {
    constructor(options) {
        this.options = options;
        this.checked = new Array(options.length).fill(false);
    }
    display() {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            const render = () => {
                console.clear();
                console.log('Select options (space to toggle, enter to finish):');
                this.options.forEach((option, index) => {
                    const state = this.checked[index] ? '[x]' : '[ ]';
                    console.log(`${state} ${option}`);
                });
            };
            render();
            rl.on('line', (input) => {
                const index = parseInt(input.trim()) - 1;
                if (!isNaN(index) && index >= 0 && index < this.options.length) {
                    this.checked[index] = !this.checked[index];
                    render();
                }
                else if (input.trim() === '') {
                    rl.close();
                    resolve(this.options.filter((_, i) => this.checked[i]));
                }
            });
        });
    }
}
exports.Checkbox = Checkbox;
