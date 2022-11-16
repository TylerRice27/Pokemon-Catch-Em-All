import { PokemonsController } from "./Controllers/PokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  pokemonsController = new PokemonsController()
}

window["app"] = new App();
