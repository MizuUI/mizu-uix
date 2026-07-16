import type { ToolbarTokenSections } from '@mizuuix/themes/types/toolbar';

export * from '@mizuuix/themes/types/toolbar';

declare const root: ToolbarTokenSections.Root;
declare const colorScheme: ToolbarTokenSections.ColorScheme;
declare const css: ToolbarTokenSections.CSS;
declare const _default: {
    root: ToolbarTokenSections.Root;
    colorScheme: ToolbarTokenSections.ColorScheme;
    css: string;
};

export { colorScheme, css, _default as default, root };
