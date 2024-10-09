export declare class Menu {
    private readonly options;
    private readonly title;
    constructor(title: string, options: string[]);
    display(): Promise<string>;
}
