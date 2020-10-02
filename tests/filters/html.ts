import {html_minify} from "../../lib/filters/html";

test("basic", () => {
    expect(html_minify(
        `
        <html>
          <body>
            text
          </body>
        </html>
        `
    )).toStrictEqual(`<html><body>text</body></html>`);
});
