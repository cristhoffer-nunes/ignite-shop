import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../product";

export default function Products() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta 1</h1>
        <span>R$ 79,00</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
          molestiae illum voluptas explicabo est suscipit ut quibusdam vero
          molestias provident officia enim, blanditiis modi? Amet aperiam
          quaerat odio eius perspiciatis.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
