let metals = [
//  Name            Has ore     Mining Level
    ["tin",         true,       0]
    ["silver",      true,       1]
    ["electrum",    false,      2]
    ["bronze",      false,      2]
    ["steel",       false,      3]
];

onEvent("item.registry", event => {
    for (let [metal, ore, level] of metals) {
        let name = metal[0].toUppercase() + metal.substr(1);
        event.create(metal + "_ingot").displayName(name + " Ingot");
        event.create(metal + "_nugget").displayName(name + " Nugget");
        if (ore) {
            event.create("raw_" + metal).displayName("Raw " + name)
        } else {
            event.create(metal + "_blend").displayName(name + " Blend")
        }
    }
});

onEvent("block.registry", event => {
    for (let [metal, ore, level] of metals) {
        let name = metal[0].toUppercase() + metal.substr(1);
        event.create(metal + "_block").displayName(name + " Block").material("iron").harvestTool("pickaxe", level).requiresTool(true);
        if (ore) {
            event.create(metal + "_ore").displayName(name + " Ore").material("rock").harvestTool("pickaxe", level).requiresTool(true);
        }
    }
});

onEvent("item.tags", event => {
    for (let [metal, ore, level] of metals) {
        let item = "kubejs:" + metal;
        event.add("forge:ingots/" + metal , item + "_ingot");
        event.add("forge:nuggets/" + metal, item + "_nugget");
        event.add("forge:storage_blocks/" + metal, item + "_block");
        if (ore) {
            event.add("forge:dusts/" + metal, "kubejs:raw_" + metal);
            event.add("forge:ores/" + metal, item + "_ore");
        } else {
            event.add("forge:dusts/" + metal, item + "_blend");
        }
    }
});

onEvent("recipes", event => {
    for (let [metal, ore, level] of metals) {
        let item = "kubejs:" + metal;
        let ingot = "kubejs:" + metal + "_ingot";
        let nugget = "kubejs:" + metal + "_nugget";
        let block = "kubejs:" + metal + "_block";

        event.shapeless("9x " + nugget, ["#forge:ingots/" + metal]);
        event.shapeless("9x " + ingot, ["#forge:storage_blocks/" + metal]);

        event.shaped("1x " + ingot, ["SSS", "SSS", "SSS"], {S: "#forge:nuggets/" + metal});
        event.shaped("1x " + block, ["SSS", "SSS", "SSS"], {S: "#forge:ingots/" + metal});

        event.smelting("1x " + ingot, "#forge:dusts/" + metal);
        event.smelting("1x " + ingot, "#forge:ores/" + metal);

        event.blasting("1x " + ingot, "#forge:dusts/" + metal);
        event.blasting("1x " + ingot, "#forge:ores/" + metal);
    }

    event.shapeless("4x kubejs:bronze_blend", ["#forge:dusts/tin", "#forge:dusts/tin", "#forge:dusts/tin", "#forge:dusts/copper"]);
    event.shapeless("1x kubejs:electrum_blend", ["#forge:dusts/silver", "#forge:dusts/gold"]);
    event.shapeless("1x kubejs:steel_blend", ["#forge:dusts/coal_coke", "#forge:dusts/iron"]);

});

onEvent("block.loot_tables", event => {
    for (let [metal, ore, level] of metals) {
        let item = "kubejs:" + metal;
        let ingot = "kubejs:" + metal + "_ingot";
        let nugget = "kubejs:" + metal + "_nugget";
        let block = "kubejs:" + metal + "_block";
        let oreb = "kubejs:" + metal + "_ore";
        let raw = "kubejs:raw_" + metal;

        if (ore) {
            event.build(oreb, table => {
                table.pool(pool => {
                    pool.rolls = 1;
                    pool.addEntry({
                        type: "minecraft:item",
                        name: oreb,
                        conditions: [{
                            condition: "minecraft:match_tool",
                            predicate: {enchantments: [{enchantment: "minecraft:silk_touch", levels: {min:1} }] }
                        }]
                    });
                    pool.addEntry({
                        type: "minecraft:item",
                        functions: [
                            {
                              function: "minecraft:apply_bonus",
                              enchantment: "minecraft:fortune",
                              formula: "minecraft:ore_drops"
                            },
                            {
                                function: "minecraft:explosion_decay"
                            }
                        ],
                        name: raw
                    });
                });
            });
        }
    }
});