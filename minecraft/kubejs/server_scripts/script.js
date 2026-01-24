// priority: 0

console.info("Remove recipes");

ServerEvents.recipes((event) => {
  const LIGHT_SOURCES = [
    "minecraft:glowstone",
    "minecraft:ochre_froglight",
    "minecraft:verdant_froglight",
    "minecraft:pearlescent_froglight",
    "minecraft:sea_lantern",
    "minecraft:shroomlight",
  ];

  LIGHT_SOURCES.forEach((id) =>
    event.shaped("16x minecraft:light", ["L", "B"], {
      L: id,
      B: "minecraft:blaze_rod",
    })
  );
});