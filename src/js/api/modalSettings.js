import * as basicLightbox from "basiclightbox";
export const modalSetting = basicLightbox.create(`
    <h3>setting</h3>
    <form data-form>
      <label for="name">Name</label>
      <input name="name" placeholder="Name" type="text" />
      <label for="price">Price</label>
      <input name="price" placeholder="Price" type="number" />
      <label for="ingredients">Ingredients</label>
      <input name="ingredients" placeholder="Ingredients" type="text" />
      <button>done</button>
    </form>`);
