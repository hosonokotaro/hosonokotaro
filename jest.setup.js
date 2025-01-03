/* eslint-disable @typescript-eslint/no-empty-function, no-undef */
const noop = () => {};
Object.defineProperty(window, 'scroll', { value: noop, writable: true });
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
