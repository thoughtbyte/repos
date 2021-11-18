import omit from "lodash.omit";

// @FIXME(estimate: .5): properly type localStorage functions
export const getAllRepos = () => {
  let repos: any = window.localStorage.getItem("repos");

  if (repos === null) {
    repos = {};
  } else {
    repos = JSON.parse(repos);
  }

  return repos;
};

const updateAllRepos = (repos: any) => {
  window.localStorage.setItem("repos", JSON.stringify(repos));
};

export const saveRepo = (
  owner: string,
  repo: string,
  releaseData: any,
  props?: any
) => {
  const repos = getAllRepos();

  const repoKey = `${owner}/${repo}`;
  const repoData = {
    owner,
    repo,
    releaseName: releaseData.tag_name,
    releaseDate: releaseData.published_at,
    releaseBody: releaseData.body,
    ...props,
  };

  const updatedRepos = {
    ...repos,
    [repoKey]: repoData,
  };

  updateAllRepos(updatedRepos);

  return updatedRepos;
};

export const removeRepo = (repoKey: string) => {
  const repos = getAllRepos();
  const updatedRepos = omit(repos, repoKey);

  updateAllRepos(updatedRepos);

  return updatedRepos;
};
