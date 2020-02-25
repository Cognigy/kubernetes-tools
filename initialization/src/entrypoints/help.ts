/** Node modules */
import * as commandLineUsage from "command-line-usage";

/** Define usage information */
const sections: commandLineUsage.Section[] = [
	{
		header: "Initialization script for Cognigy.AI and kubernetes (k8s)",
		content: "Helps with the initial installation process of a Cognigy.AI installation on top of Kubernetes."
	},
	{
		header: "Options",
		optionList: [
			{
				name: "help",
				alias: "h",
				description: "Prints this usage guide."
			},
			{
				name: "version",
				description: "Shows the version of the initialization tool you are currently using."
			},
			{
				name: "generate",
				alias: "g",
				description: `Generates a copy of the 'secrets.dist' folder in
				the same working directory - named 'secrets'. Fills all secrets
				in this new folder with secure random-data. You might want to adjust
				certain secrets before you apply them to your cluster.`
			}
		]
	}
];

export function renderHelp() {
	const usage = commandLineUsage(sections);
	console.log(usage);

	process.exit(0);
}