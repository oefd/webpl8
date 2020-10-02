import pathlib from "path";
import * as nunjucks from "nunjucks";

export const get_template = function (template_path: string): nunjucks.Template | null {
    const path = pathlib.parse(template_path);
    const loader = new nunjucks.FileSystemLoader(path.dir);
    const env = new nunjucks.Environment(loader, {autoescape: false});
    return env.getTemplate(path.base);
};
