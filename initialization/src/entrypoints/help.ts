/** Node modules */
import * as commandLineUsage from "command-line-usage";

/** Define usage information */
const sections: commandLineUsage.Section[] = [
	{
		header: 'Initialization script for Cognigy.AI and kubernetes (k8s)',
		content: 'Helps with the initial installation process of a Cognigy.AI installation on top of Kubernetes.'
	},
	{
		header: 'Options',
		optionList: [
			{
				name: 'help',
				description: 'Prints this usage guide.'
			}
		]
	}
];

export function renderHelp() {
	const usage = commandLineUsage(sections);
	console.log(usage);
	process.exit(0);
}