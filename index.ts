import {get_template} from "./lib/template";
import {parse_args} from "./lib/args";
import {usage} from "./lib/usage";

const args = parse_args();
if (args instanceof Error) {
    console.error(usage);
    process.exit(1);
}

const template = get_template(args.template_path);
if (template === null) {
    console.error(`could not load template ${args.template_path}`);
    process.exit(1);
}

let rendered = template.render({});
for (const filter of Array.from(args.filters.values())) {
    rendered = filter(rendered);
}
console.log(rendered);
