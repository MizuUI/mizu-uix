import type { StyleOptions } from '@mizuuix/styled';
import type { CarouselTokenSections } from '@mizuuix/themes/types/carousel';

export * from '@mizuuix/themes/types/carousel';

declare const root: CarouselTokenSections.Root;
declare const content: CarouselTokenSections.Content;
declare const indicatorList: CarouselTokenSections.IndicatorList;
declare const indicator: CarouselTokenSections.Indicator;
declare const colorScheme: CarouselTokenSections.ColorScheme;
declare const css: CarouselTokenSections.CSS;
declare const _default: {
    root: CarouselTokenSections.Root;
    content: CarouselTokenSections.Content;
    indicatorList: CarouselTokenSections.IndicatorList;
    indicator: CarouselTokenSections.Indicator;
    colorScheme: CarouselTokenSections.ColorScheme;
    css: (options: StyleOptions) => string;
};

export { colorScheme, content, css, _default as default, indicator, indicatorList, root };
