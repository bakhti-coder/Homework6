import { Form, InputGroup } from "react-bootstrap";
import { category } from "../../constants/category";

const ProductsHeader = () => {
  return (
    <InputGroup className="mb-3">
      <Form.Control placeholder="Searching products" />
      <InputGroup.Text>
        <Form.Select>
          <option value="all">ALL PRODUCTS</option>
          {category.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </Form.Select>
      </InputGroup.Text>
      {/* <div className="alert alert-warning">{sum}</div> */}
    </InputGroup>
  );
};

export default ProductsHeader;
