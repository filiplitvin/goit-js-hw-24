import {
  createPizza,
  updatePizza,
  getPizzas,
  deletePizza,
  getOnePizza,
} from "./api/pizzas";
import { createPizzasListMurkup } from "./api/createPizzasList";
import { modalSetting } from "./api/modalSettings";
import "basiclightbox/dist/basiclightbox.min.css";

const pizzasContainer = document.querySelector("[data-pizzas-container]");
const refreshBtn = document.querySelector('[data-action="refresh"]');

const renderPizzas = async () => {
  try {
    const pizzas = await getPizzas();
    const pizzaMurkup = createPizzasListMurkup(pizzas);
    pizzasContainer.innerHTML = pizzaMurkup;
  } catch (error) {
    console.log(error);
  }
};
renderPizzas();

const handleShowSettings = async (event) => {
  const action = event.target.dataset.pizzaAction;

  const pizzaId = event.target.closest("[data-pizza-id]").dataset.pizzaId;

  if (action === "delete") {
    try {
      await deletePizza(pizzaId);
      renderPizzas();
    } catch (error) {
      console.log(error);
    }
    return;
  }
  if (action === "edit") {
    modalSetting.show();
    try {
      const pizza = await getOnePizza(pizzaId);
      const modal = modalSetting.element();
      const form = modal.querySelector("[data-form]");
      form.name.value = pizza.name;
      form.price.value = pizza.price;
      form.ingredients.value = pizza.ingredients.join(", ");
    } catch (error) {
      console.log(error);
    }
  }
};
pizzasContainer.addEventListener("click", handleShowSettings);
refreshBtn.addEventListener("click", renderPizzas);
