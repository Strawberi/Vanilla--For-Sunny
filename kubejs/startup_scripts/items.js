// priority: 0

onEvent("item.registry", event => {
  event.create("raw_zinc").displayName("Raw Zinc")
  event.create("primitive_coke_oven").displayName("Primitive Coke Oven");
  event.create("coke_dust").displayName("Coke Dust").burnTime(3200);
  event.create("coal_coke").displayName("Coke").burnTime(3200);
});

onEvent("block.registry", event => {
  event.create("coal_coke_block").displayName("Coke Block").burnTime(32000);
})