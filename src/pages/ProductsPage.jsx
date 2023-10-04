import { Fragment, useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductsForm from "../components/form/ProductsForm";
import ProductsCard from "../components/card/ProductsCard";
import ProductsHeader from "../components/header/ProductsHeader";

const ProductsPage = () => {
  const [validated, setValidated] = useState(false);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || [
      {
        name: "Smart soat ",
        price: "300",
        quantity: "10",
        description:
          "Smart soat Lk8 Pro Smart Watch, Retina ekrani 45 mm + 2 tasmalar bilan birga",
        image: "https://images.uzum.uz/cjo6jekvutv9ej0faiqg/original.jpg",
        categorys: "Elektronika",
        id: "1",
      },
      {
        name: "Tolstovka",
        price: "100",
        quantity: "4",
        description:
          "Bo'shashgan siluetli, keng yengli va yelkalari tushirilgan tolstovka. Yumshoq paxtadan tikilgan oddiy va universal qalpoqli tolstovka, kiyish yoqimli va sizning sevimliingizga aylanadi. Yamoq cho'ntak va elastik kamar va manjetlar bilan jihozlangan.",
        image: "https://images.uzum.uz/ckbcsacjvf2kdov68n60/original.jpg",
        categorys: "Kiyim",
        id: "1",
      },
    ]
  );

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { name, category } = event.target.elements;
    console.log(name.value);
    console.log(category);

    const form = event.currentTarget;
    if (form.checkValidity()) {
      console.log("work");
    } else {
      setValidated(true);
    }
  }, []);
  const handleProducts = useCallback((e) => {
    console.log(e);
  }, []);

  return (
    <Fragment>
      <Container>
        <Row>
          <Col md="4">
            <ProductsForm
              products={products}
              handleProducts={handleProducts}
              validated={validated}
              handleSubmit={handleSubmit}
            />
          </Col>
          <Col md="8" className="mt-4">
            <ProductsHeader />
            <div className="d-flex flex-wrap justify-content-between">
              {products.map((product, i) => (
                <ProductsCard key={i} products={product} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductsPage;
