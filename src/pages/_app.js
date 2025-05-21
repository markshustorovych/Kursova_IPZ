import StoreHeader from "../components/Header";
import { HomeWrapper } from "../components/HomeWrapper/styled";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/productList";

export default function Home() {
  return (
    <HomeWrapper>
      <StoreHeader/>
      <ProductList>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </ProductList>
    </HomeWrapper>
  );
}
