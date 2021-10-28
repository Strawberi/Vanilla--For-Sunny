// priority: 0

onEvent("recipes", event => {
    // For each slab crafting recipe that outputs 6x slabs, ...
    event.forEachRecipe({ id: /_slab/, type: "minecraft:crafting_shaped" }, recipe => {
      if (recipe.outputItems[0].getCount() != 6) return;
      let input  = recipe.inputItems[0];
      let output = recipe.outputItems[0].getId();
      // ... add a back-crafting recipe to turn 2x slab => 1x block.
      event.shapeless(input, [ output, output ]);
    });
  });