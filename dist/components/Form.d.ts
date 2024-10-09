export declare class Form {
    private questions;
    private fields;
    constructor(questions: string[]);
    display(): Promise<{
        [key: string]: string;
    }>;
}
