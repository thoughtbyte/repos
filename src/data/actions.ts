import { getAllReposLatestRelease, getRepoLatestRelease } from "./network";
import { getAllRepos, saveRepo } from "./db";

export const getAndSaveRelease = async (owner: string, repo: string) => {
  try {
    const repoReleaseData = await getRepoLatestRelease(owner, repo);

    saveRepo(owner, repo, repoReleaseData, { newUpdate: true });

    return getAllRepos();
  } catch (error) {
    throw error;
  }
};

export const reloadAllRepos = async () => {
  try {
    const staleRepos = getAllRepos();
    const freshRepos = await getAllReposLatestRelease(staleRepos);

    freshRepos.forEach((repo: any) => {
      const staleRepo = staleRepos[repo.repoKey];

      if (repo.published_at > staleRepo.published_at) {
        // @TODO(.5): collapse these arguments into 1 argument map
        saveRepo(staleRepo.owner, staleRepo.repo, repo, { newUpdate: true });
      }
    });

    return getAllRepos();
  } catch (error) {
    throw error;
  }
};
