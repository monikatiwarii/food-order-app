import MaxWidthWrapper from "../common/MaxWidthWrapper";
import CoverImage from "./CoverImage";
import DiningOut from "./DiningOut";
import Cuisines from "./Cuisines";
import PopularRecipes from "./PopularRecipes";
import FoodDeliveryImage from "./FoodDeliveryImage";
import FoodOffers from "./FoodOffers";
import FoodCollection from "./FoodCollection";
import DownloadApp from "./DownloadApp";
import AuthComponent from "../common/AuthComponent";
import AuthGuard from "../common/AuthGuard";

const Home = () => {
  return (
    <AuthComponent>
      <AuthGuard>
        <CoverImage />
        <MaxWidthWrapper>
          <DiningOut />
          <Cuisines />
        </MaxWidthWrapper>
        <PopularRecipes />
        <FoodDeliveryImage />
        <MaxWidthWrapper>
          <FoodOffers />
          <FoodCollection />
          <DownloadApp />
        </MaxWidthWrapper>
      </AuthGuard>
    </AuthComponent>
  );
};

export default Home;
