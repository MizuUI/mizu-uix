import type { BreadcrumbTokenSections } from '@mizuuix/themes/types/breadcrumb';

export * from '@mizuuix/themes/types/breadcrumb';

declare const root: BreadcrumbTokenSections.Root;
declare const item: BreadcrumbTokenSections.Item;
declare const separator: BreadcrumbTokenSections.Separator;
declare const _default: {
    root: BreadcrumbTokenSections.Root;
    item: BreadcrumbTokenSections.Item;
    separator: BreadcrumbTokenSections.Separator;
};

export { _default as default, item, root, separator };
