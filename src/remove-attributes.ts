import {
    removeAttributes,
    hasIgnorePath,
    getOptions,
    hasExtension,
    getIgnoredPaths,
} from "./utilities";
import type {
    Options
} from "./types";
import type { Plugin } from "vite"
import type { SourceDescription } from 'rollup'

export default function removeAttributesPlugin(options: Options): Plugin {
    const optionList: Options = getOptions(options);
    const ignoredPaths: string[] = getIgnoredPaths(optionList)

    return {
        name: 'remove-attributes',
        enforce: 'pre',
        transform(code: string, id: string): Partial<SourceDescription> {
            const map = null
            if (hasIgnorePath(id)) {
                return {code, map };
            }
            if (hasIgnorePath(id, ignoredPaths)) {
                return {code, map};
            }
            if (!hasExtension(id, optionList)) {
                return {code, map};
            }

            return {code: removeAttributes(code, optionList.attributes), map}
        },
    };
}

