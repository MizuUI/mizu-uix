import type { OrderListTokenSections } from '@mizuuix/themes/types/orderlist';

export * from '@mizuuix/themes/types/orderlist';

declare const root: OrderListTokenSections.Root;
declare const controls: OrderListTokenSections.Controls;
declare const css: OrderListTokenSections.CSS;
declare const _default: {
    root: OrderListTokenSections.Root;
    controls: OrderListTokenSections.Controls;
    css: string;
};

export { controls, css, _default as default, root };
