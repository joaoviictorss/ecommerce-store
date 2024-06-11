import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, { cache: "no-store" });
  // Não permite o cache das categorias, sempre atualizando e buscando as categorias presentes

  return res.json();
};

export default getCategories;
