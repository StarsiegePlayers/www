// shim for https://github.com/hustcc/timeago.js
import {cancel, render} from 'timeago.js';

export let locale;
export let opts = {};

export function timeago(node) {
    render(node, locale, opts)
    return {
        destroy() {
            cancel(node);
        }
    };
}