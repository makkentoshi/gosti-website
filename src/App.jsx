import React, { useState } from "react";
import Menu from "./components/Menu.jsx";
import Categories from "./components/Categories.jsx";
import items from "./MenuData.jsx";
import logo from "./assets/gosti2.png";
import CategoryLabel from "./components/CategoryLabel";
import Footer from "./components/Footer.jsx";


const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const categoryTranslations = {
  all: "Все",
  breakfasts: "Завтраки",
  bar: "Барное меню",
  salads: "Салаты",
  appetizers: "Закуски",
  pasta: "Пасты",
  pizza: "Пиццы",
  soups: "Супы",
  burgers: "Бургеры",
  meat_poultry: "Мясо/Птица",
  fish: "Рыба",
};

const translateCategories = (categories) => {
  return categories.map(
    (category) => categoryTranslations[category.toLowerCase()] || category
  );
};

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");

  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);

      setMenuItems(newItems);
    }
  };
  return (
    <main className="bg-gray-50 flex justify-center flex-col ">
      <section className="menu section">
        <div className="title text-center mb-8">
          <img src={logo} alt="logo" className="w-80 h-auto mx-auto" />
          <h2 className="text-3xl font-bold mt-7 ">МЕНЮ</h2>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
      <Footer></Footer>
     
    </main>
    
  );
};

export default App;