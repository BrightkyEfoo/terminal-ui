export declare class Checkbox {
    private options;
    private readonly checked;
    private currentIndex;
    constructor(options: string[]);
    display(): Promise<string[]>;
}
