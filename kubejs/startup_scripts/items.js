// priority: 0

onEvent("item.registry", event => {
  event.create("raw_zinc").displayName("Raw Zinc");
  event.create("raw_tin").displayName("Raw Tin");
  event.create("raw_silver").displayName("Raw Silver");
  event.create("steel_blend").displayName("Steel Blend");
  event.create("steel_ingot").displayName("Steel Ingot");
  event.create("primitive_coke_oven").displayName("Primitive Coke Oven");
  event.create("coke_dust").displayName("Coke Dust").burnTime(3200);
  event.create("coal_coke").displayName("Coke").burnTime(3200);
  event.create("coal_coke_block").displayName("Coke Block").burnTime(32000);
  event.create("tin_ore").displayName("Tin Ore");
  event.create("tin_ingot").displayName("Tin Ingot");
  event.create("tin_nugget").displayName("Tin Nugget");
  event.create("tin_block").displayName("Tin Block");
  event.create("bronze_ingot").displayName("Bronze Ingot");
  event.create("bronze_nugget").displayName("Bronze Nugget");
  event.create("bronze_block").displayName("Bronze Block");
  event.create("silver_ore").displayName("Silver Ore");
  event.create("silver_ingot").displayName("Silver Ingot");
  event.create("silver_nugget").displayName("Silver Nugget");
  event.create("silver_block").displayName("Silver Block");
  event.create("electrum_ingot").displayName("Electrum Ingot");
  event.create("electrum_nugget").displayName("Electrum Nugget");
  event.create("electrum_block").displayName("Electrum Block");
  event.create("bronze_blend").displayName("Bronze Blend");
  event.create("electrum_blend").displayName("Electrum Blend")

});