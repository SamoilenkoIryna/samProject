const mockItemData = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  title: `Pizza ${index + 1}`,
  textNewPrice: "300.00",
  textOldPrice: "350.00",
  buyText: "Buy",
  isNew: true,
  descriptionTitle:
    "Pizza has three main elements: crust, sauce, and toppings. All of them have a variety of preparation methods. Crust: Traditional pizza crust is similar to bread dough. It's a combination of flour, water, yeast, sugar, salt, and oil.",
  image:
    "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
}));

export default mockItemData;
