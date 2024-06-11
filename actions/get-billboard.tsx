import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`, { cache: "no-store" });
  // Não permite o cache das seções, sempre atualizando e buscando as seções presentes

  return res.json();
};

export default getBillboard;
