import omeletteImage from "../assets/images/image-omelette.jpeg";
const Container = () => {
  return (
    <div className="bg-white w-11/12 md:w-[650px] p-5 rounded-lg flex flex-col gap-5 font-outfit text-stone-600">
      <img src={omeletteImage} alt="omelette-img" />

      <h1 className="text-4xl font-youngSerif text-stone-900 text-center md:text-left">
        Simple Omelette Recipe
      </h1>

      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <div className="bg-rose-50 p-5 rounded-lg space-y-2">
        <h2 className="text-rose-800 text-2xl font-bold">Prepartion Time</h2>

        <ul className="space-y-2 list-disc ml-5">
          <li>
            <strong>Total:</strong> Approximately 10 minutes
          </li>
          <li>
            <strong>Preparation:</strong> 5 minutes
          </li>
          <li>
            <strong>Cooking:</strong> 5 minutes
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h1 className="text-rose-800 font-youngSerif text-2xl">Ingredients</h1>

        <ul className="space-y-2 list-disc ml-5">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegerables, cooked meats, herbs
          </li>
        </ul>
      </div>

      <hr />

      <h1 className="text-rose-800 font-youngSerif text-2xl">Instructions</h1>

      <ul className="space-y-2 list-decimal ml-5 marker:text-rose-800 marker:font-bold">
        <li>
          <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a pinch
          of salt and pepper until they are well mixed. You can add a tablespoon
          of water or milk for a fluffier texture.
        </li>

        <li>
          <strong>Heat the pan</strong>: Place a non-stick frying pan over
          medium heat and add butter or oil.
        </li>

        <li>
          <strong>Cook the omelette</strong>: Once the butter is melted and
          bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
          coat the surface.
        </li>

        <li>
          <strong>Add fillings (optional)</strong>: When the eggs begin to set
          at the edges but are still slightly runny in the middle, sprinkle your
          chosen fillings over one half of the omelette.
        </li>

        <li>
          <strong>Fold and serve</strong>: As the omelette continues to cook,
          carefully lift one edge and fold it over the fillings. Let it cook for
          another minute, then slide it onto a plate.
        </li>

        <li>
          <strong>Enjoy</strong>: Serve hot, with additional salt and pepper if
          needed.
        </li>
      </ul>

      <hr />

      <div className="space-y-2">
        <h1 className="text-rose-800 font-youngSerif text-2xl">Nutrition</h1>

        <p>
          The table belows show nutritional values per serving without the
          additional fillings.
        </p>

        <table className="w-full">
          <tr className="border-b-[1px] text-left">
            <th className="font-normal pl-5">Calories</th>
            <td className="text-rose-800 font-bold">
              <div className="w-14 p-2">277kcal</div>
            </td>
          </tr>

          <tr className="border-b-[1px] text-left">
            <th className="font-normal pl-5">Carbs</th>
            <td className="text-rose-800 font-bold">
              <div className="w-14 p-2">0g</div>
            </td>
          </tr>

          <tr className="border-b-[1px] text-left">
            <th className="font-normal pl-5">Protein</th>
            <td className="text-rose-800 font-bold">
              <div className="w-14 p-2">20g</div>
            </td>
          </tr>

          <tr className="text-left">
            <th className="font-normal pl-5">Fat</th>
            <td className="text-rose-800 font-bold">
              <div className="w-14 p-2">22g</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Container;
