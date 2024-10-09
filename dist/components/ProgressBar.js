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
exports.ProgressBar = void 0;
const readline = __importStar(require("readline"));
class ProgressBar {
    constructor(total) {
        this.total = total;
        this.current = 0;
    }
    update(progress) {
        this.current = progress;
        this.render();
    }
    render() {
        const percentage = (this.current / this.total) * 100;
        const barLength = 40;
        const filledLength = Math.round((barLength * percentage) / 100);
        const bar = '█'.repeat(filledLength) + '-'.repeat(barLength - filledLength);
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`Progress: [${bar}] ${percentage.toFixed(2)}%`);
    }
    complete() {
        this.current = this.total;
        this.render();
        console.log('\nTask Complete!');
    }
}
exports.ProgressBar = ProgressBar;
