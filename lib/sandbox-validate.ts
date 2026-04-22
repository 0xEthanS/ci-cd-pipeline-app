import { Sandbox } from "@vercel/sandbox";
import type { FileEntry } from "@/lib/types";






interface ValidationResult {
    success: boolean;
    error?: string;
    buildOutput?: string;
};






export async function validateInSandbox(
    files: FileEntry[]
): Promise<ValidationResult> {


    const sandbox = await Sandbox.create({
        runtime: "node22",
        ports: [3000],
        timeout: 120000,
    });




    try {


        // Wrtite all files
        await sandbox.writeFiles(
            files.map((f) => ({
                path: f.path,
                content: Buffer.from(f.content, "utf8")
            }))
        );


        // Install deps
        const install = await sandbox.runCommand("pnpm", ["install"]);
        if (install.exitCode !== 0) {
            const stderr = await install.stderr();
            return { success: false, error: `pnpm install failed:\n${stderr}` };
        };


        // Build - this catches Typescript errors, missing imports, bad configs
        const build = await sandbox.runCommand("pnpm", ["run", "build"]);
        const stdout = await build.stdout();
        const stderr = await build.stderr();


        if (build.exitCode !== 0) {
            return {
                success: false,
                error: `Build failed:\n${stderr || stdout}`,
            };
        };


        return { success: true, buildOutput: stdout };


    } finally {


        await sandbox.stop();


    }




}