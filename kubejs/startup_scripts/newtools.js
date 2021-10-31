let metals = [
//  Name           Level    Speed       Echantability   Durability  Damage
    ["tin",        1,        6,          9,              32,        1],
    ["silver",     1,        6,          22,             32,        0],
    ["electrum",   2,        11,         27,             44,        1],
    ["bronze",     2,        6,          16,             275,       2],
    ["steel",      3,        9,          10,             1666,      3],
    ["copper",     1,        4,          9,              131,       0]
];

onEvent('item.registry.tool_tiers', event => {
    for (let [metal, lvl, spd, ech, dura, dmg] of metals) {
        event.add(metal, tier => {
            tier.uses = dura
            tier.speed = spd
            tier.attackDamageBonus = dmg
            tier.level = lvl
            tier.enchantmentValue = ech
            tier.repairIngredient = '#forge:ingots/' + metal
          })
    }
  });

onEvent("item.registry", event => {
    for (let [metal, lvl, spd, ech, dura, dmg] of metals) {
        let name = metal[0].toUpperCase() + metal.substr(1);
        event.create(metal + "_pickaxe")
            .type("pickaxe")
            .displayName(name + " Pickaxe")
            .tier(metal);
        event.create(metal + "_axe")
            .type("axe")
            .displayName(name + " Axe")
            .tier(metal);
        event.create(metal + "_shovel")
            .type("shovel")
            .displayName(name + " Shovel")
            .tier(metal);
        event.create(metal + "_hoe")
            .type("hoe")
            .displayName(name + " Hoe")
            .tier(metal);
        event.create(metal + "_sword")
            .type("sword")
            .displayName(name + " Sword")
            .tier(metal);
    }
});