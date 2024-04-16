import { data } from "../../data/folderData";
import Explorer from "./Explorer";

const FileExplorer = () => {
  const explorerData = data;
  return (
    <section>
      <h2 className="text-3xl font-bold">File Explorer</h2>
      <>
        <Explorer explorerData={explorerData} />
      </>
    </section>
  );
};

export default FileExplorer;
