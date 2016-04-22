import Rx from 'rx';
import 'rx-dom-ajax';
import {Heading} from 'spectacle';
import {h} from './utils';

function byMsg(...args) {
    return this.filter(function(stream) {
        if (!stream.msg) { return false; }
        for (let msg of args) {
            if (msg === stream.msg) { return true; }
        }
        return false;
    });
}

Rx.Observable.prototype.byMsg = byMsg;

const Dispatcher = new Rx.Subject();

function sendMsg(msg, data) {
    return Dispatcher.onNext({msg, data});
}

export const ClickCount$ = Dispatcher
    .byMsg('btn-click')
    .pluck('data', 'count')
    .scan((acc) => acc + 1, 0)
    .startWith(0);

export function Interactive(props) {
    const styles = {
        padding: 20,
        background: 'black',
        minWidth: 300,
        marginTop: 20,
        textTransform: 'uppercase',
        border: 'none',
        color: 'white',
        outline: 'none',
        fontWeight: 'bold',
        fontSize: '2em',
    };

    if (props.count > 5) {
        return h('div', h('div', h(Heading, {
            size: 5,
            fit: true,
            caps: true,
            textColor: 'black',
        }, 'Easy there pal')));
    }

    return h('div', h('div', [
        h(Heading, {
            size: 5,
            textColor: 'black',
        }, `The button has been clicked ${props.count} times`),
        h('button', {
            style: styles,
            type: 'button',
            onClick() {
                sendMsg('btn-click', {count: props.count + 1});
            },
        }, 'Click Me'),
    ]));
}
