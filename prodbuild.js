import fs from "fs";
import posthtml from "posthtml";
import { hash } from "posthtml-hash";
import htmlnano from "htmlnano";
import rimraf from "rimraf";

export default function(OUT_DIR) {
    return {
        name: "hash-static",
        buildStart() {
            rimraf.sync(OUT_DIR);
        },
        writeBundle() {
            posthtml([
                // hashes `bundle.[hash].css` and `bundle.[hash].js`
                hash({ path: OUT_DIR }),

                // minifies `build/index.html`
                // https://github.com/posthtml/htmlnano
                htmlnano(),
            ])
            .process(fs.readFileSync(`${OUT_DIR}/index.html`))
            .then((result) =>
                fs.writeFileSync(`${OUT_DIR}/index.html`, result.html)
            );
        },
    };
};