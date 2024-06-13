import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`, { cache: "no-store" });
  // Não permite o cache do produto, sempre atualizando e buscando o produto presentes

  return res.json();
};

export default getCategory;
