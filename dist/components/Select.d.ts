export declare class Select {
    private readonly options;
    private currentIndex;
    constructor(options: string[]);
    display(): Promise<string>;
}
