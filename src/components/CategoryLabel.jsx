const CategoryLabel = ({ children }) => {
    if (!children) return null;
  
    // Разделите название на первую букву и остальное
    const firstLetter = children[0];
    const rest = children.slice(1);
  
    return (
      <span>
        <span className="text-red-500">{firstLetter}</span>{rest}
      </span>
    );
  };
  
  export default CategoryLabel;