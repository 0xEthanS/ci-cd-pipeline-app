import { Sandbox } from "@vercel/sandbox";
import { NextResponse } from "next/server";
import { FILES } from "./files";





export async function POST() {
	try {


		// Create Sandbox
		const sandbox = await Sandbox.create({
			runtime: "node22",
			ports: [3000],
			timeout: 600000
		});

		console.log("---------- Sandbox Created: ", sandbox.sandboxId);




		// Write files to sandbox
		await sandbox.writeFiles(
			FILES.map((file ) => ({
				path: file.path,
				content: Buffer.from(file.content, "utf8")
			}))
		);

		console.log(`---------- Wrote ${FILES.length} files`);




		// Install Dependencies in sandbox
		const install = await sandbox.runCommand("pnpm", ["install"]);

		if (install.exitCode !==0) {
			const stderr = await install.stderr();
			console.error("Install Failed: ", stderr);
			return NextResponse.json(
				{ error: "pnpm install failed", details: stderr },
				{ status: 500 }
			);
		};

		console.log("---------- Dependencies Installed");




		// Sandbox Server Run Command
		await sandbox.runCommand({
			cmd: "pnpm",
			args: ["run", "dev"],
			detached: true
		});

		console.log("---------- Dev Server Starting...");




		// Give the dev server a moment to boot
		await new Promise((resolve) => setTimeout(resolve, 3000));




		// Fetch Preview URL
		const previewUrl = sandbox.domain(3000);

		console.log("---------- Preview URL: ", previewUrl);




		return NextResponse.json({
			sandboxId: sandbox.sandboxId,
			previewUrl,
			filesWritten: FILES.map((f) => f.path)
		});




	} catch (error) {
		console.error("Sandbox Error: ", error);
		return NextResponse.json(
			{ error: String(error) },
			{ status: 500 }
		)
	}
}






export async function DELETE(req: Request) {
  	const { sandboxId } = await req.json();
  	const sandbox = await Sandbox.get({ sandboxId });
  	await sandbox.stop();
  	return NextResponse.json({ stopped: true });
}







