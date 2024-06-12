import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`, { cache: "no-store" });
  // Não permite o cache do produto, sempre atualizando e buscando o produto presentes

  return res.json();
};

export default getProduct;
