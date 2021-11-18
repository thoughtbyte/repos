import { Octokit } from "octokit";

const octokit = new Octokit({
  userAgent: "repos/v1.0.0",
});

export const getRepoLatestRelease = async (owner: string, repo: string) => {
  try {
    const latestReleaseResponse = await octokit.rest.repos.getLatestRelease({
      owner,
      repo,
    });

    if (!latestReleaseResponse || latestReleaseResponse.status !== 200) {
      return new Error("Something went wrong.");
    }

    return latestReleaseResponse.data;
  } catch (error) {
    if (error === "HttpError: Not Found") {
      throw new Error("Not Found.");
    }
    throw new Error("Something went wrong.");
  }
};

export const getAllReposLatestRelease = async (repos: any) => {
  try {
    const getRepoLatestReleasePromises = Object.values(repos).map(
      (repoData: any) => getRepoLatestRelease(repoData.owner, repoData.repo)
    );

    const allRepoData = await Promise.all(getRepoLatestReleasePromises);

    const updatedRepos = Object.keys(repos).map((repoKey, index) => {
      return {
        ...allRepoData[index],
        repoKey,
      };
    });

    return updatedRepos;
  } catch (error) {
    throw error;
  }
};
