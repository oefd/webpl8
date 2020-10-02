import {css_minify} from "./filters/css";
import {html_minify} from "./filters/html";

interface Args {
    template_path: string,
    filters: Set<(s: string) => string>,
}

export const parse_args = function (): Args | Error {
    const filters: Set<(s: string) => string> = new Set();
    let args = {
        template_path: process.argv[2],
        filters: filters,
    };

    for (const arg of process.argv.slice(3)) {
        switch (arg) {
            case "--css":
                args.filters.add(css_minify);
                break;
            case "--html":
                args.filters.add(html_minify);
                break;
            default:
                return new Error(`unexpected argument '${arg}'`);
        }
    }

    if (args.template_path === undefined) {
        return new Error("missing path to template file");
    } else {
        return args;
    }
};
