import type { StyleOptions } from '@mizuuix/styled';
import type { FieldsetTokenSections } from '@mizuuix/themes/types/fieldset';

export * from '@mizuuix/themes/types/fieldset';

declare const root: FieldsetTokenSections.Root;
declare const legend: FieldsetTokenSections.Legend;
declare const toggleIcon: FieldsetTokenSections.ToggleIcon;
declare const content: FieldsetTokenSections.Content;
declare const css: FieldsetTokenSections.CSS;
declare const _default: {
    root: FieldsetTokenSections.Root;
    legend: FieldsetTokenSections.Legend;
    toggleIcon: FieldsetTokenSections.ToggleIcon;
    content: FieldsetTokenSections.Content;
    css: (options: StyleOptions) => string;
};

export { content, css, _default as default, legend, root, toggleIcon };
