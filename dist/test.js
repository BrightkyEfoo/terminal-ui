"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = require("./components/Menu");
const Checkbox_1 = require("./components/Checkbox");
const ToggleSwitch_1 = require("./components/ToggleSwitch");
const Select_1 = require("./components/Select");
const Notification_1 = require("./components/Notification");
const ProgressBar_1 = require("./components/ProgressBar");
const Spinner_1 = require("./components/Spinner");
const Form_1 = require("./components/Form");
async function main() {
    const menu = new Menu_1.Menu('Main Menu', [
        'Checkbox',
        'Toggle Switch',
        'Select Option',
        'Show Info Notification',
        'Show Warning Notification',
        'Show Error Notification',
        'Show Progress Bar',
        'Show Spinner',
        'Fill Form',
        'Exit',
    ]);
    const selectedOption = await menu.display();
    if (selectedOption === 'Checkbox') {
        const checkbox = new Checkbox_1.Checkbox(['Option A', 'Option B', 'Option C']);
        const selectedCheckboxes = await checkbox.display();
        console.log(`You selected: ${selectedCheckboxes.join(', ')}`);
    }
    else if (selectedOption === 'Toggle Switch') {
        const toggle = new ToggleSwitch_1.ToggleSwitch();
        const finalState = await toggle.display();
        console.log(`Toggle Switch is now: ${finalState ? 'ON' : 'OFF'}`);
    }
    else if (selectedOption === 'Select Option') {
        const select = new Select_1.Select(['Option 1', 'Option 2', 'Option 3']);
        const selectedOption = await select.display();
        console.log(`You selected: ${selectedOption}`);
    }
    else if (selectedOption === 'Show Info Notification') {
        const notification = new Notification_1.Notification('This is an information message!', 'info');
        await notification.display();
    }
    else if (selectedOption === 'Show Warning Notification') {
        const notification = new Notification_1.Notification('This is a warning message!', 'warning');
        await notification.display();
    }
    else if (selectedOption === 'Show Error Notification') {
        const notification = new Notification_1.Notification('This is an error message!', 'error');
        await notification.display();
    }
    else if (selectedOption === 'Show Progress Bar') {
        const progressBar = new ProgressBar_1.ProgressBar(100);
        for (let i = 0; i <= 100; i += 10) {
            await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate work
            progressBar.update(i);
        }
        progressBar.complete();
    }
    else if (selectedOption === 'Show Spinner') {
        const spinner = new Spinner_1.Spinner();
        spinner.start('Loading...');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate work
        spinner.stop();
        console.log('Loading complete!');
    }
    else if (selectedOption === 'Fill Form') {
        const form = new Form_1.Form(['Name', 'Email', 'Phone']);
        const responses = await form.display();
        console.log('Form responses:', responses);
    }
    else if (selectedOption === 'Exit') {
        console.log('Exiting...');
    }
}
main();
