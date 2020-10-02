import {parse_args} from "../lib/args";
import {css_minify} from "../lib/filters/css";
import {html_minify} from "../lib/filters/html";

const mock_args = (args: Array<string>, fn: CallableFunction) => {
    const previous = process.argv;
    process.argv = args;
    fn();
    process.argv = previous;
};

test("minify-none", () => {
    mock_args(["node", "script.js", "template/path"], () => {
        expect(parse_args()).toStrictEqual(
            {
                template_path: "template/path",
                filters: new Set(),
            }
        );
    });
});

test("minify-css", () => {
    mock_args(["node", "script.js", "template/path", "--css"], () => {
        expect(parse_args()).toStrictEqual(
            {
                template_path: "template/path",
                filters: new Set([css_minify]),
            }
        );
    });
});

test("minify-html", () => {
    mock_args(["node", "script.js", "template/path", "--html"], () => {
        expect(parse_args()).toStrictEqual(
            {
                template_path: "template/path",
                filters: new Set([html_minify]),
            }
        );
    });
});

test("minify-css-and-html", () => {
    mock_args(["node", "script.js", "template/path", "--html", "--css"], () => {
        expect(parse_args()).toStrictEqual(
            {
                template_path: "template/path",
                filters: new Set([css_minify, html_minify]),
            }
        );
    });
});

test("invalid-flag", () => {
    mock_args(["node", "script.js", "template/path", "-html", "--css"], () => {
        expect(parse_args()).toBeInstanceOf(Error);
    });
});

test("missing-path", () => {
    mock_args(["node", "script.js"], () => {
        expect(parse_args()).toBeInstanceOf(Error);
    });
});
