import dotenv from "dotenv";



export function loadDotEnv() {
    const isProd = process.env.NODE_ENV === 'production'
    const envName = isProd ? "master" : 'dev'
    const dotEnv = dotenv.config({ path: '.env.' + envName })
    return Object.assign({isProd},dotEnv.parsed)
}
