import {css_minify} from "../../lib/filters/css";

test("basic", () => {
    expect(css_minify(
        `
        body {
            margin: auto;
        }
        `
    )).toStrictEqual(`body{margin:auto}`);
});
