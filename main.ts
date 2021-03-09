scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles4, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tilemap`level1`)
let myCorg = corgio.create(SpriteKind.Player)
myCorg.follow()
myCorg.updateSprite()
myCorg.horizontalMovement()
myCorg.verticalMovement()
