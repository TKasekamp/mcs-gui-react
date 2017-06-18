import {configure} from '@kadira/storybook';
// Link to the app CSS
import '../public/css/style.css';
import '../public/css/simple-line-icons.css';
import '../public/css/font-awesome.min.css';

// TODO move stories to root folder
// TODO automatically load all files in stories folder
function loadStories() {
    require('../src/stories/PassTable');
    require('../src/stories/PassStatus');
    require('../src/stories/CommandItem');
    require('../src/stories/TerminalCard');
    require('../src/stories/SuggestionItem');
    require('../src/stories/CommandDescription');
    require('../src/stories/Responses');
}

configure(loadStories, module);
