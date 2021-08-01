import {MakeThing} from "lasens";

class buildModel {
    version = 1
    someVar = "someVar"
}

export const buildThing = MakeThing(buildModel)
    .controller((model) => {
        setInterval(() => {
            model.version(model.version.value + 1)
        }, 300)
        return {};
    })
    .domain("build")
    .register();

declare module "lasens" {
    export interface NS {
        build: typeof buildThing;
    }
}
