type NotificationType = 'info' | 'warning' | 'error';
export declare class Notification {
    private readonly message;
    private readonly type;
    constructor(message: string, type: NotificationType);
    private getColor;
    display(): Promise<void>;
}
export {};
