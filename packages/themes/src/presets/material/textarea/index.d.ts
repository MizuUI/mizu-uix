import type { StyleOptions } from '@mizuuix/styled';
import type { TextareaTokenSections } from '@mizuuix/themes/types/textarea';

export * from '@mizuuix/themes/types/textarea';

declare const root: TextareaTokenSections.Root;
declare const css: TextareaTokenSections.CSS;
declare const _default: {
    root: TextareaTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
