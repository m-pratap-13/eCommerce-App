import CategoriesMenu from "../componenets/CategoriesMenu";
import useCategoriesList from "../hooks/useCategoriesList";

function CategoriesListPage() {
  const categoriesList = useCategoriesList();

  return (
    <div className="w-full h-162 flex justify-center items-center">
      <div className="bg-amber-50 h-130 w-110 p-4 flex flex-col gap-1 flex-wrap lg:h-140 lg:w-150 rounded">
        {categoriesList?.map((list) => (
          <CategoriesMenu key={list.slug} list={list} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesListPage;
