import { FC, ChangeEventHandler } from "react";
import { useAsyncFn } from "react-use";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import useInput from "../../../hooks/useInput";
import { getAndSaveRelease } from "../../../data/actions";
import styles from "./AddRepoForm.module.css";

type AddRepoFormProps = {
  setRepoList: any;
};

const AddRepoForm: FC<AddRepoFormProps> = ({ setRepoList }) => {
  const owner = useInput("");
  const repo = useInput("");

  const [getRepoLatestReleaseState, doGetRepo] = useAsyncFn(async () => {
    const updatedRepoList = await getAndSaveRelease(owner.value, repo.value);

    setRepoList(updatedRepoList);

    return true;
  }, [owner.value, repo.value]);

  const handleSubmit: ChangeEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    doGetRepo();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input placeholder="Owner" {...owner} />
        <Input placeholder="Repo" {...repo} />
        <Button disabled={getRepoLatestReleaseState.loading}>Add Repo</Button>
      </form>
      <p className={styles.error}>
        {getRepoLatestReleaseState?.error?.message}
      </p>
    </>
  );
};

export default AddRepoForm;
