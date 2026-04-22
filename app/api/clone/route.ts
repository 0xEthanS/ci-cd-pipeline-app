import { NextResponse } from "next/server";
import { repoExists, readRepoFiles } from "@/lib/github";



const ORG = process.env.GITHUB_ORGANIZATION!




export async function POST(req: Request) {
    const { repoName } = (await req.json()) as { repoName: string };

    try {
        const exists = await repoExists(repoName);
        if (!exists) {
            return NextResponse.json(
                { error: `Repo ${ORG}/${repoName} does not exist.` },
                { status: 404 }
            );
        }

        const files = await readRepoFiles(repoName);

        return NextResponse.json({
            repo: `${ORG}/${repoName}`,
            filesCount: files.length,
            paths: files.map((f) => f.path),
            files, // the full FileEntry[] array, same shape as your FILES const
        });
    } catch (err) {
        console.error("Clone error:", err);
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}