export declare class ProgressBar {
    private readonly total;
    private current;
    constructor(total: number);
    update(progress: number): void;
    private render;
    complete(): void;
}
