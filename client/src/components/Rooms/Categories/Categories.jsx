import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import Categorybox from "./Categorybox";
const Categories = () => {
  return (
    <Container>
      <div>
        {
            categories.map((categorie) => <Categorybox key={categorie.label} categorie={categorie} />)
        }
      </div>
    </Container>
  );
};

export default Categories;
