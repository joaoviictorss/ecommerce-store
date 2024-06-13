import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL, { cache: "no-store" });
  // Não permite o cache das categorias, sempre atualizando e buscando as categorias presentes

  return res.json();
};

export default getColors;
