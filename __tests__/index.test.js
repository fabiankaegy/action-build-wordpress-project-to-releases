const exec = require("@actions/exec");
import "@babel/polyfill";

describe("TODO - Add a test suite", () => {
	let myOutput = "";
	let myError = "";
	beforeEach(async () => {
		const options = {};
		options.listeners = {
			stdout: data => {
				myOutput += data.toString();
			},
			stderr: data => {
				myError += data.toString();
			}
		};
		await exec.exec("node", ["index.js"], options);
	});

	it.todo("TODO - Add a test");
	it("Success", async () => {
		expect(myOutput).toBe("Hello");
	});

	it("No error occured", async () => {
		expect(myError).toBe("");
	});
});
