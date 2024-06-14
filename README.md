# E-commerce Store

Bem-vindo à Loja Virtual de E-commerce! Este projeto utiliza os dados criados pelo E-commerce Admin para criar uma loja virtual completa, permitindo aos clientes navegar, selecionar e comprar produtos de forma fácil e segura.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Stripe**: Plataforma para processamento de pagamentos.
- **Tailwind CSS**: Framework CSS para estilização.

## Funcionalidades

- **Visualização de Produtos**: Navegue por produtos organizados por seções.
- **Filtros de Busca**: Filtre produtos por categorias, tamanhos e cores.
- **Detalhes do Produto**: Visualize informações detalhadas de cada produto.
- **Carrinho de Compras**: Adicione produtos ao carrinho e gerencie as quantidades.
- **Checkout Seguro**: Realize pagamentos de forma segura utilizando Stripe.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js
- NPM ou Yarn

## Como Rodar o Projeto


1.  **Rode o ecommerce-admin:**

    Utilizaremos o id da loja como variavel de ambiente para este projeto, então é necessario a criação de uma loja no ecommerce admin

2.  **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio-loja.git
   cd nome-do-repositorio-loja
   ```

3.  **Adicione a id da loja nas variaveis de ambiente:**

    ```bash
    NEXT_PUBLIC_API_URL = https://ecommerce-admin-commercecontrol.vercel.app/api/<id da loja>

4.  **Instale as dependencias:**

    ```bash
    npm install

5. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev

