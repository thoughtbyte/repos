import { FC } from "react";
import RepoListItem from "../RepoListItem";
import styles from "./RepoList.module.css";

type RepoListProps = {
  // @FIXME(.5)
  repos: any;
  setRepoList: any;
};

const RepoList: FC<RepoListProps> = ({ repos, setRepoList }) => {
  return (
    <ul className={styles.list}>
      {Object.values(repos).map((repo: any, index) => {
        return (
          <RepoListItem key={index} repo={repo} setRepoList={setRepoList} />
        );
      })}{" "}
    </ul>
  );
};

export default RepoList;
