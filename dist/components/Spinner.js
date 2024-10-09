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
exports.Spinner = void 0;
const readline = __importStar(require("readline"));
class Spinner {
    constructor() {
        this.interval = null;
        this.frames = ['-', '\\', '|', '/'];
        this.currentFrame = 0;
    }
    start(message) {
        this.interval = setInterval(() => {
            readline.cursorTo(process.stdout, 0);
            process.stdout.write(`\r${message} ${this.frames[this.currentFrame]}`);
            this.currentFrame = (this.currentFrame + 1) % this.frames.length;
        }, 100);
    }
    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            readline.cursorTo(process.stdout, 0);
            process.stdout.write('\r'); // Clear the spinner
        }
    }
}
exports.Spinner = Spinner;
