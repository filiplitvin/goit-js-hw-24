import Handlebars from "handlebars";
import pizzaTemplate from "bundle-text:../../templates/pizzas.hbs";

export const createPizzasListMurkup = (data) => {
  const getPizzasMurkup = Handlebars.compile(pizzaTemplate);
  const pizzasMurkup = getPizzasMurkup(data);
  return pizzasMurkup;
};
