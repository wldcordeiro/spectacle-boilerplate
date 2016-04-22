/* eslint no-unused-vars:0 */
import ReactDOM from 'react-dom';

import {Presentation, React} from './presentation';
import {h} from './presentation/utils';
import {ClickCount$} from './presentation/interactive';

let clickCount;
ClickCount$.subscribe(count => {
    ReactDOM.render(h(Presentation, {count}), document.getElementById('root'));
});
