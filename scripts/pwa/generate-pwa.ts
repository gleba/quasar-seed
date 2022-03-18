import * as fs from "fs"
const path = require("path")
var crypto = require('crypto');

const clientDir = path.resolve('./dist/client')
export function generatePwa(){
    const pages = scanPages(clientDir)
    replace(pages)
}

function scanPages(dir){
    const files = fs.readdirSync(dir)
    const pages = []
    files.forEach(f=>{
        const fullPatch = path.join(dir, f)
        const stat = fs.statSync(fullPatch) as fs.Stats
        if (stat.isDirectory()) {
            pages.push(...scanPages(fullPatch))
        } else {
            if (f.endsWith("html") || f.endsWith("pageContext.json")){
                const page = fullPatch.replace(clientDir+"/", "")
                const pageRaw = fs.readFileSync(fullPatch)
                const hash = generateChecksum(pageRaw)
                pages.push({name:page, hash})
            }
        }
    })
    return pages
}

const  makeRevision = (page) => `{url:"${page.name}",revision:"${page.hash}"}`
function replace(pages){
    const targetFile = path.join(clientDir, "sw.js")
    const rawjs = fs.readFileSync(targetFile).toString()
    const key = `{url:"secret.js"`

    const newString = pages.map(makeRevision).join(",")
    // https://github.com/GoogleChrome/workbox/issues/2302
    const newRaw = rawjs
        .replace("self.skipWaiting(),", "")
        .replace(key, newString+ ","+ key)
    fs.writeFileSync(targetFile, newRaw)
}

generatePwa()


function generateChecksum(str, algorithm?, encoding?) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex')
}