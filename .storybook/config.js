import {configure} from '@kadira/storybook';
// Link to the app CSS
import '../public/css/style.css';
import '../public/css/simple-line-icons.css';
import '../public/css/font-awesome.min.css';

function loadStories() {
    require('../src/stories/PassTable');
}

configure(loadStories, module);
