// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent("item.tags", event => {
	event.add("forge:ingots", "kubejs:steel_ingot"),
	event.add("forge:ingots/steel", "kubejs:steel_ingot"),
	event.add("forge:dusts/coal_coke", "kubejs:coke_dust"),
	event.add("forge:dusts/steel", "kubejs:steel_blend"),
	event.add("forge:ores/tin", "kubejs:tin_ore"),
	event.add("forge:ores", "kubejs:tin_ore"),
	event.add("forge:plates", "kubejs:steel_plate"),
	event.add("forge:plates/steel", "kubejs:steel_plate")
  });