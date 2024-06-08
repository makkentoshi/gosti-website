// Объект сопоставления для перевода категорий
const categoryTranslations = {
  all: "ВСЕ",
  breakfast: "ЗАВТРАКИ",
  bar: "БАРНОЕ МЕНЮ",
  salads: "САЛАТЫ",
  appetizers: "ЗАКУСКИ",
  pasta: "ПАСТЫ",
  pizza: "ПИЦЦЫ",
  soups: "СУПЫ",
  burgers: "БУРГЕРЫ",
  meat_poultry: "МЯСО/ПТИЦА",
  fish: "РЫБА",
};

const Categories = ({ categories, filterItems, activeCategory }) => {
  // Функция для создания разметки с красной первой буквой
  const renderCategory = (category) => {
    const translatedCategory =
      categoryTranslations[category.toLowerCase()] || category;
    return (
      <>
        <span className="text-red-500">{translatedCategory[0]}</span>
        <span style={{ textTransform: "none" }}>
          {translatedCategory.slice(1)}
        </span>
      </>
    );
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          type="button"
          className={`${
            activeCategory === category ? "filter-btn active" : "filter-btn"
          }`}
          key={category} 
          onClick={() => filterItems(category)}
        >
          {renderCategory(category)}
        </button>
      ))}
    </div>
  );
};

export default Categories;
