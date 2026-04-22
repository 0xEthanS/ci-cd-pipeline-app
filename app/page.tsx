'use client'

import { useState } from "react";




export default function Home() {


	const [result, setResult] = useState<{
		sandboxId: string;
		previewUrl: string;
		filesWritten: string[];
	} | null>(null);

	const [loading, setLoading] = useState(false);

	const [error, setError] = useState<string | null>(null);




	async function handleLaunch() {
		setLoading(true);
		setError(null);

		try {
			const res = await fetch("/api/sandbox", { method: "POST" });
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Failed");
			setResult(data);
		} catch (err) {
			setError(String(err))
		} finally {
			setLoading(false);
		}
	}




	async function handleStop() {
		if (!result) return;
		await fetch("/api/sandbox", {
			method: "DELETE",
			body: JSON.stringify({ sandboxId: result.sandboxId })
		});
		setResult(null);
	}



	// ─── New state ────────────────────────────────────────────────
	const [repoName, setRepoName] = useState("");

	const [deploying, setDeploying] = useState(false);

	const [deployResult, setDeployResult] = useState<{
		repo: string;
		vercelProject: string;
		paths: string[];
	} | null>(null);




	const [cloning, setCloning] = useState(false);

	const [cloneResult, setCloneResult] = useState<{
		repo: string;
		filesCount: number;
		paths: string[];
	} | null>(null);

	const [pipelineError, setPipelineError] = useState<string | null>(null);




	// ─── Workflow 1: Validate → Create Repo → Deploy ─────────────
	async function handleDeploy() {
		if (!repoName.trim()) return;
		setDeploying(true);
		setPipelineError(null);
		setDeployResult(null);
		try {
			const res = await fetch("/api/deploy", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ repoName: repoName.trim() }),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Deploy failed");
			setDeployResult(data);
		} catch (err) {
			setPipelineError(String(err));
		} finally {
			setDeploying(false);
		}
	}




	// ─── Workflow 2: Clone Repo ───────────────────────────────────
	async function handleClone() {
		if (!repoName.trim()) return;
		setCloning(true);
		setPipelineError(null);
		setCloneResult(null);
		try {
			const res = await fetch("/api/clone", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ repoName: repoName.trim() }),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Clone failed");
			setCloneResult(data);
		} catch (err) {
			setPipelineError(String(err));
		} finally {
			setCloning(false);
		}
	}






	return (
		<div className="min-h-screen bg-neutral-950 text-neutral-100">
			<div className="mx-auto max-w-2xl px-6 py-16">




				<h1 className="text-3xl font-semibold tracking-tight">
					Sandbox Demo
				</h1>

				<p className="mt-2 text-sm text-neutral-400">
					Write files to a Vercel Sandbox, install deps, and get a live preview.
				</p>

				<div className="mt-8 flex items-center gap-3">
					<button
						onClick={handleLaunch}
						disabled={loading}
						className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 
							transition-all duration-150 ease-out
							hover:bg-neutral-200 
							active:scale-[0.97] 
							disabled:cursor-wait disabled:opacity-50
						"
					>
						{loading ? "Creating sandbox…" : "Launch Sandbox"}
					</button>

					{result && (
						<button
							onClick={handleStop}
							className="rounded-lg border border-red-500/20 bg-red-500/10 px-5 py-2.5 text-sm font-medium text-red-400 
								transition-all duration-150 ease-out
								hover:bg-red-500/20 
								active:scale-[0.97]
							"
						>
						Stop Sandbox
						</button>
					)}
				</div>

				{error && (
					<pre className="mt-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
						{error}
					</pre>
				)}

				{result && (
					<div className="mt-8 space-y-4">
						<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-sm">
							<div className="flex items-baseline justify-between">
								<span className="text-neutral-500">
									Sandbox
								</span>
								<code className="text-xs text-neutral-300">
									{result.sandboxId}
								</code>
							</div>
							<div className="mt-3 flex items-baseline justify-between">
								<span className="text-neutral-500">
									Files
								</span>
								<span className="text-xs text-neutral-300">
									{result.filesWritten.length} written
								</span>
							</div>
							<div className="mt-3 flex flex-wrap gap-1.5">
								{result.filesWritten.map((f) => (
								<span
									key={f}
									className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400"
								>
									{f}
								</span>
								))}
							</div>
						</div>

						<a
							href={result.previewUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 text-sm text-blue-400 transition-colors hover:text-blue-300"
						>
							Open in new tab
							<svg
								className="h-3.5 w-3.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-4.5h6m0 0v6m0-6L9.75 14.25"
								/>
							</svg>
						</a>

						<iframe
							src={result.previewUrl}
							className="h-[420px] w-full rounded-lg border border-neutral-800"
						/>
					</div>
				)}




				{/* ─── CI/CD Pipeline ─────────────────────────────────── */}
				<div className="mt-12 border-t border-neutral-800 pt-10">


					<h2 className="text-xl font-semibold tracking-tight">
						CI/CD Pipeline
					</h2>


					<p className="mt-1 text-sm text-neutral-400">
						Validate code in sandbox, push to GitHub, deploy via Vercel.
					</p>


					<input
						type="text"
						placeholder="repo-name (lowercase, hyphens)"
						value={repoName}
						onChange={(e) => setRepoName(e.target.value)}
						className="mt-6 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2.5
							text-sm text-neutral-100 placeholder-neutral-600
							focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600
						"
					/>


					<div className="mt-4 flex items-center gap-3">

						<button
							onClick={handleDeploy}
							disabled={deploying || !repoName.trim()}
							className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white
								transition-all duration-150 ease-out
								hover:bg-emerald-500
								active:scale-[0.97]
								disabled:cursor-not-allowed disabled:opacity-40
							"
						>
							{deploying ? "Validating & deploying…" : "Create & Deploy"}
						</button>

						<button
							onClick={handleClone}
							disabled={cloning || !repoName.trim()}
							className="rounded-lg border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-neutral-300
								transition-all duration-150 ease-out
								hover:border-neutral-600 hover:bg-neutral-800
								active:scale-[0.97]
								disabled:cursor-not-allowed disabled:opacity-40
							"
						>
							{cloning ? "Cloning…" : "Clone Existing"}
						</button>

					</div>


					{pipelineError && (
						<pre className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400 whitespace-pre-wrap">
							{pipelineError}
						</pre>
					)}


					{deployResult && (
						<div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm">

							<p className="font-medium text-emerald-400">
								Deployed successfully
							</p>

							<div className="mt-3 space-y-1 text-neutral-300">
								<p>
									GitHub:{" "}
									<a href={deployResult.repo} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">
										{deployResult.repo}
									</a>
								</p>
								<p>
									Vercel:{" "}
									<a href={deployResult.vercelProject} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">
										{deployResult.vercelProject}
									</a>
								</p>
							</div>

							<div className="mt-3 flex flex-wrap gap-1.5">
								{deployResult.paths.map((f) => (
									<span key={f} className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400">
										{f}
									</span>
								))}
							</div>

						</div>
					)}


					{cloneResult && (
						<div className="mt-4 rounded-lg border border-neutral-700 bg-neutral-900 p-4 text-sm">

							<p className="font-medium text-neutral-200">
								Cloned {cloneResult.repo} — {cloneResult.filesCount} files read into memory
							</p>

							<div className="mt-3 flex flex-wrap gap-1.5">
								{cloneResult.paths.map((f) => (
									<span key={f} className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400">
										{f}
									</span>
								))}
							</div>

						</div>
					)}


				</div>




			</div>
		</div>
	);
}







