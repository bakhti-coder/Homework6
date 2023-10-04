import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import { category } from "../../constants/category";

const ProductsForm = ({
  validated,
  handleSubmit,
  products: { name, price, quantity, description, image, categorys },
  handleProducts,
}) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={name}
          onChange={handleProducts}
          required
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Price</Form.Label>
        <Form.Control
          value={price}
          onChange={handleProducts}
          required
          type="number"
        />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          value={quantity}
          onChange={handleProducts}
          required
          type="number"
        />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>Image</Form.Label>
        <Form.Control
          value={image}
          onChange={handleProducts}
          required
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="group">
        <Form.Label>Category</Form.Label>
        <Form.Select value={categorys} onChange={handleProducts}>
          {category.map((category, i) => (
            <option name={category} key={i} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={handleProducts}
          as="textarea"
          rows={3}
          required
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Button className="mb-3 btn-danger">Reset</Button>
        <Button className="mb-3" type="submit">
          Add products
        </Button>
      </div>
    </Form>
  );
};

ProductsForm.propTypes = {
  validated: PropTypes.bool,
  handleSubmit: PropTypes.func,
  products: PropTypes.array,
  handleProducts: PropTypes.func,
};

export default ProductsForm;
