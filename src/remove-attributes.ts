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

export default function removeAttributesPlugin(options: Options): Plugin {
    const optionList: Options = getOptions(options);
    const ignoredPaths: string[] = getIgnoredPaths(optionList)

    return {
        name: 'remove-attributes',
        enforce: 'pre',
        transform(code: string, id: string): string {
            if (hasIgnorePath(id)) {
                return code;
            }
            if (hasIgnorePath(id, ignoredPaths)) {
                return code;
            }
            if (!hasExtension(id, optionList)) {
                return code;
            }

            return removeAttributes(code, optionList.attributes)
        },
    };
}

