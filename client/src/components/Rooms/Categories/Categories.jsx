import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import Categorybox from "./Categorybox";
const Categories = () => {
  return (
    <Container>
      <div className="flex items-center justify-between pt-4 overflow-x-auto">
        {
            categories.map((categorie) => <Categorybox key={categorie.label} label={categorie.label} icon={categorie.icon} />)
        }
      </div>
    </Container>
  );
};

export default Categories;
