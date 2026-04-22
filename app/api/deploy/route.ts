import { NextResponse } from "next/server";
import { validateInSandbox } from "@/lib/sandbox-validate";
import { repoExists, createRepoAndPush } from "@/lib/github";
import { createVercelProject } from "@/lib/vercel-project";
import { FILES } from "../sandbox/files";



const ORG = process.env.GITHUB_ORGANIZATION!






interface DeployRequest {
    repoName: string;
};











export async function POST(req: Request) {


    const body: DeployRequest = await req.json();

    const { repoName } = body;




    try {


        // 1.) Check if the repo already exists
        const exists = await repoExists(repoName);
        if (exists) {
            return NextResponse.json(
                { error: `Repo ${ORG}/${repoName} already exists.` },
                { status: 409 }
            );
        };


        // 2.) Validate in sandbox
        const validation = await validateInSandbox(FILES);
        if (!validation.success) {
            return NextResponse.json(
                { error: "Sandbox Validation Failed", details: validation.error },
                { status: 422 },
            );
        };


        // 3.) Create Repo and Push Files
        const fullRepo = await createRepoAndPush(repoName, FILES);


        // 4.) Create Vercel project
        const vercelProject = await createVercelProject(repoName, fullRepo);


        return NextResponse.json({
            repo: `https://github.com/${fullRepo}`,
            vercelProject: vercelProject.url,
            vercelProjectId: vercelProject.projectId,
            filesCount: FILES.length,
            paths: FILES.map((f) => f.path),
        });


    } catch (err) {


        console.error("Deploy Error: ", err);


        return NextResponse.json(
            { error: String(err) },
            { status: 500 },
        );


    };




};







