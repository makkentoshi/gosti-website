const Menu = ({ items }) => {
  return (
    <div className="section-center mx-auto grid gap-12 justify-center px-8">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item grid gap-4 w-[372px] mx-auto">
            <img
              src={img}
              alt={title}
              className="photo w-full h-48 object-cover border-b-4"
            />
            <div className="item-info">
              <header className="flex justify-between border-b border-red-600 border-dashed pb-2">
                <h3 className="text-lg font-semibold w-[300px]">{title}</h3>
                <h4 className="price text-sm flex-shrink-0">₸{price}</h4>
              </header>
              <p className="item-text pt-4">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;