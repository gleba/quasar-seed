import {readdirSync} from "fs";
import {resolve} from "path";
const dir = resolve(__dirname, "../src/components")
const idir = "~/components/"
const fc = readdirSync(dir)
const cmap = {}
fc.forEach(f => {
    const p = f.split(".")
    cmap[p[0]] = f
})
export default name => {
    const importName = cmap[name]
    if (!importName) {
        return
    }
    return {
        path: idir + importName
    }
}
