import * as commandLineArgs from "command-line-args";

/** Custom modules */
import { renderHelp } from "./entrypoints/help";
import { generateFiles } from "./entrypoints/generate";

/** Define all options/params this CLI can handle */
const optionDefinitions: commandLineArgs.OptionDefinition[] = [
	{ name: 'help', alias: 'h' }
];

(async () => {
	/** Parse CLI arguments */
	const options = commandLineArgs(optionDefinitions);

	/** Render help */
	if (options.help !== undefined) {
		renderHelp();
	}

	/** Main execution to generate files */
	generateFiles();
})();