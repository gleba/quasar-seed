import {MakeThing} from "lasens";

class themeModel {
}

export const themeThing = MakeThing(themeModel)
    .controller((model) => {
        return {};
    })
    .domain("theme")
    .register();

declare module "lasens" {
    export interface NS {
        theme: typeof themeThing;
    }
}

console.log("+")

export const x = {
    x:1
}
