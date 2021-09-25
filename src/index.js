import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tab';
import Snackbar from './ninja-ui/snackbar';
import ProgressBar from './ninja-ui/progress';
//create a Tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

// create dropdowns

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})


const tabs = new Tabs(document.querySelector('.tabs'));

tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');

button.addEventListener('click', () => {
    snackbar.show('you clicked me :)')
})

const progress = document.querySelector('.progress')
const progressBar = new ProgressBar(progress);

const progressButton = document.querySelector('#progress-button');

progressButton.addEventListener('click', () => {
    progressBar.init();
})
