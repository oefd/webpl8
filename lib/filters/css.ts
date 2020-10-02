import CleanCss from "clean-css";

export const css_minify = function (str: string): string {
    const minifier = new CleanCss({
        level: 2,
    });
    const output = minifier.minify(str);
    if (output.errors.length > 0) {
        output.errors.map(err => console.error(err));
        throw "css errors";
    }
    if (output.warnings.length > 0) {
        output.errors.map(err => console.error(err));
        throw "css warnings";
    }
    return output.styles;
}
