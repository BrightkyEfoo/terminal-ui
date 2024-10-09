import {Menu} from './components/Menu';
import {Checkbox} from './components/Checkbox';
import {ToggleSwitch} from './components/ToggleSwitch';
import {Select} from './components/Select';
import {Notification} from './components/Notification';
import {ProgressBar} from './components/ProgressBar';
import {Spinner} from './components/Spinner';
import {Form} from './components/Form';

async function main() {
    const menu = new Menu('Main Menu', [
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
        const checkbox = new Checkbox(['Option A', 'Option B', 'Option C']);
        const selectedCheckboxes = await checkbox.display();
        console.log(`You selected: ${selectedCheckboxes.join(', ')}`);
    } else if (selectedOption === 'Toggle Switch') {
        const toggle = new ToggleSwitch();
        const finalState = await toggle.display();
        console.log(`Toggle Switch is now: ${finalState ? 'ON' : 'OFF'}`);
    } else if (selectedOption === 'Select Option') {
        const select = new Select(['Option 1', 'Option 2', 'Option 3']);
        const selectedOption = await select.display();
        console.log(`You selected: ${selectedOption}`);
    } else if (selectedOption === 'Show Info Notification') {
        const notification = new Notification('This is an information message!', 'info');
        await notification.display();
    } else if (selectedOption === 'Show Warning Notification') {
        const notification = new Notification('This is a warning message!', 'warning');
        await notification.display();
    } else if (selectedOption === 'Show Error Notification') {
        const notification = new Notification('This is an error message!', 'error');
        await notification.display();
    } else if (selectedOption === 'Show Progress Bar') {
        const progressBar = new ProgressBar(100);
        for (let i = 0; i <= 100; i += 10) {
            await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate work
            progressBar.update(i);
        }
        progressBar.complete();
    } else if (selectedOption === 'Show Spinner') {
        const spinner = new Spinner();
        spinner.start('Loading...');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate work
        spinner.stop();
        console.log('Loading complete!');
    }  else if (selectedOption === 'Fill Form') {
        const form = new Form(['Name', 'Email', 'Phone']);
        const responses = await form.display();
        console.log('Form responses:', responses);
    } else if (selectedOption === 'Exit') {
        console.log('Exiting...');
    }
}

main();
