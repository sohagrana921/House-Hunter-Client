import SubtitleSectionTitle from "../../../components/SubtitleSectionTitle/SubtitleSectionTitle";
import Bachelor from "./Bachelor/Bachelor";
import Family from "./Family/Family";
import Office from "./Office/Office";
import Sublet from "./Sublet/Sublet";

const RecentPublished = () => {
  return (
    <div>
      <SubtitleSectionTitle
        title={"Recent published property"}
        subTitle={"THIS PROPERTIES POST RECENTLY"}
      />
      <Family />
      <Bachelor />
      <Office />
      <Sublet />
    </div>
  );
};

export default RecentPublished;
