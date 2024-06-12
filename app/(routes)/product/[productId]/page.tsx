import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Galery from "@/components/gallery";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Info from "@/components/info";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Galeria */}
            <Galery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Infos */}
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Itens relacionados" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
