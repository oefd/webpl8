import {minify as html_minifier_terser} from "html-minifier-terser";

export const html_minify = function (str: string): string {
    return html_minifier_terser(str, {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        removeEmptyElements: true,
        removeRedundantAttributes: true,
    });
}
