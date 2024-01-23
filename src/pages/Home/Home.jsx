import DownloadOurApp from "./DownloadOurApp/DownloadOurApp";
import Featured from "./Featured/Featured";
import OurPurpose from "./OurPurpose/OurPurpose";
import RecentPublished from "./RecentPublished/RecentPublished";
import Reviews from "./Reviews/Reviews";
import Trending from "./Trending/Trending";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Trending />
      <Featured />
      <RecentPublished />
      <DownloadOurApp />
      <Reviews />
      <OurPurpose />
    </div>
  );
};

export default Home;
