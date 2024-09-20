import { Event } from "../components/marketing/pageSection/Event";
import { HreoTop } from "../components/marketing/pageSection/HreoTop";
import { LastProduct } from "../components/marketing/pageSection/LastProduct";
import { Products } from "../components/marketing/pageSection/Products";

export const HomePAge = () => {
  return (
    <>
      <HreoTop />
      <LastProduct />
      <Products />
      <Event />
    </>
  );
};
