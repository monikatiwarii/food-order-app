import Header from "../header/Header";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import FoodItemSection from "./FoodItemSection";
import BrandsSection from "./BrandsSection";
import TrandingItems from "./TrandingItems";
import AuthComponent from "../common/AuthComponent";

const Categories = () => {
  return (
    <AuthComponent>
      <Header />
      <MaxWidthWrapper>
        <BrandsSection />
        <FoodItemSection />
        <TrandingItems />
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export default Categories;
