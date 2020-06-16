import * as Stories from './stories-list';

Object.keys(Stories)
    .map(k => Stories[k])
    .sort((a, b) => a.order - b.order)
    .forEach(s => s.add());