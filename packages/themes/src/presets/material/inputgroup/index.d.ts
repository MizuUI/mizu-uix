import type { StyleOptions } from '@mizuuix/styled';
import type { InputGroupTokenSections } from '@mizuuix/themes/types/inputgroup';

export * from '@mizuuix/themes/types/inputgroup';

declare const addon: InputGroupTokenSections.Addon;
declare const css: InputGroupTokenSections.CSS;
declare const _default: {
    addon: InputGroupTokenSections.Addon;
    css: (options: StyleOptions) => string;
};

export { addon, css, _default as default };
