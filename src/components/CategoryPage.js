import SelectCategory from "../categories/SelectCategory";
import CategoryList from "./CategoryList";

const CategoryPage = () => {
    return (
      <div>
        <div>
          <div>
            <div>
                <CategoryList />
            </div>
            <div>
                <SelectCategory />
            </div>
            <div>trending</div>
          </div>
        </div>
      </div>
    );
}

export default CategoryPage
