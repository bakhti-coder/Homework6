import PropTypes from "prop-types";
import { Card, CardText } from "react-bootstrap";

const ProductsCard = ({ products }) => {
  return (
    <Card style={{ width: "16rem", height: "330px" }}>
      <Card.Img
        variant="top"
        className="h-50 object-fit-lg-cover"
        src={products.image}
      />
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        <Card.Text className="text-truncate">{products.description}</Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Text>{products.price}$</Card.Text>
          <CardText>soni:{products.quantity}</CardText>
        </div>
        <Card.Text className="text-center text-black">
          {products.categorys}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

ProductsCard.propTypes = {
  products: PropTypes.object,
};

export default ProductsCard;
