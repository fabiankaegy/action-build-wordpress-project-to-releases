const core = require("@actions/core");
const github = require("@actions/github");
const io = require("@actions/io");

async function run() {
	try {
		const giithubToken = core.getInput("GITHUB_PERSONAL_ACCESS_TOKEN");
		if (!giithubToken || giithubToken === "") {
			throw `You need to pass a GitHub Personal Access token as one of the secrets.`;
		}

		const octokit = new github.GitHub(myToken);
	} catch (error) {
		core.setFailed(error.message);
	}
}

run();
