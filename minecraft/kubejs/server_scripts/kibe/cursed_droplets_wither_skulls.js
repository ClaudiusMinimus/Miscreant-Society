ServerEvents.recipes(event => { 

    event.shaped('minecraft:wither_skeleton_skull', [
        'XXX',
        'XXX',
        'XXX'
  ], {
    X: 'kibe:cursed_droplets'
  }
);
      
    console.log('Hello! The recipe event has fired!')
  });