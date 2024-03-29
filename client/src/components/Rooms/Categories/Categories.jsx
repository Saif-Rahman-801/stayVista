import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import Categorybox from "./Categorybox";
const Categories = () => {
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <Container>
      <div className="flex items-center justify-between pt-4 overflow-x-auto">
        {categories.map((item) => (
          <Categorybox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
