import { Vercel } from "@vercel/sdk";

function getVercelClient() {
  return new Vercel({ bearerToken: process.env.VERCEL_TOKEN! });
}

export async function createVercelProject(
  projectName: string,
  githubRepo: string
): Promise<{ projectId: string; url: string }> {
  const vercel = getVercelClient();

  const result = await vercel.projects.createProject({
    teamId: process.env.VERCEL_TEAM_ID!,
    requestBody: {
      name: projectName,
      framework: "nextjs",
      gitRepository: {
        repo: githubRepo,
        type: "github",
      },
    },
  });

  const deployment = await vercel.deployments.createDeployment({
    teamId: process.env.VERCEL_TEAM_ID!,
    requestBody: {
      name: projectName,
      target: "production",
      gitSource: {
        type: "github",
        repo: githubRepo.split("/")[1],
        ref: "main",
        org: githubRepo.split("/")[0],
      },
    },
  });

  return {
    projectId: result.id,
    url: `https://${deployment.url}`,
  };
}





