import {configure} from '@kadira/storybook';
// Link to the app CSS
import '../public/css/style.css';

// TODO move stories to root folder
// TODO automatically load all files in stories folder
function loadStories() {
    require('../stories/PassTable');
    require('../stories/PassStatus');
    require('../stories/CommandItem');
    require('../stories/TerminalCard');
    require('../stories/SuggestionItem');
    require('../stories/CommandDescription');
    require('../stories/Responses');
}

configure(loadStories, module);
