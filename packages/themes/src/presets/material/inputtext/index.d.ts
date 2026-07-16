import type { StyleOptions } from '@mizuuix/styled';
import type { InputTextTokenSections } from '@mizuuix/themes/types/inputtext';

export * from '@mizuuix/themes/types/inputtext';

declare const root: InputTextTokenSections.Root;
declare const css: InputTextTokenSections.CSS;
declare const _default: {
    root: InputTextTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
