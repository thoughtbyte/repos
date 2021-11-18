import { FC, useState, useEffect } from "react";
import { useAsyncFn } from "react-use";
import AddRepoForm from "../../modules/AddRepoForm";
import RepoList from "../../modules/RepoList";
import { reloadAllRepos } from "../../../data/actions";

import styles from "./Landing.module.css";

const Landing: FC = () => {
  const [repoList, setRepoList] = useState({});

  const [loadReposState, doLoadRepos] = useAsyncFn(async () => {
    const repos = await reloadAllRepos();

    setRepoList(repos);

    return true;
  }, []);

  useEffect(() => {
    doLoadRepos();
  }, [doLoadRepos]);

  return (
    <div className={styles.wrapper}>
      {loadReposState.loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : loadReposState.error || !loadReposState.value ? (
        <p className={styles.error}>
          Uh oh, something went wrong. Try refreshing.
        </p>
      ) : (
        <>
          <AddRepoForm setRepoList={setRepoList} />
          <RepoList repos={repoList} setRepoList={setRepoList} />
        </>
      )}
    </div>
  );
};

export default Landing;
