import StoreHeader from '@components/storeHeader';
import { HomeWrapper, ProductList } from './styled';
import ProductCard from '@components/productCard/index';
import ProductNavigator from '@components/productNavigator';

export default function HomePage({ products }) {
  return (
    <HomeWrapper>
      <StoreHeader />
      <ProductNavigator products={products} />
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </ProductList>
    </HomeWrapper>
  );
}
