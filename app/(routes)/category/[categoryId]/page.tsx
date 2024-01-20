import getColor from "@/actions/get-colors";
import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import getPrice from "@/actions/get-prices";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
  searchParams: {
    colorId: string;
    sizeId: string;
    priceId: string;
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {
  const products = await getProducts({
    category_id: params.categoryId,
    max_price: searchParams.priceId ? +searchParams.priceId : undefined
  });
  const sizes = await getSizes();
  const colors = await getColor();
  const price = await getPrice();
  const category = await getCategory(params.categoryId);

  return ( 
    <div className="bg-white">
      <Container>
        {/* <Billboard 
          data={category.billboard}
        /> */}
        <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-14">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} price={price}/>
            <div className="hidden lg:block">
              <Filter 
                valueKey="priceId"
                name="Price"
                data={price}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((item) => (
                <ProductCard 
                  key={item.id}
                  data={item}
                />
              ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
   );
}
 
export default CategoryPage;