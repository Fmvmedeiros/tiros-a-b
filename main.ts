controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.after(8, function () {
        if (!(controller.A.isPressed())) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . b b b b b b . . . . . 
                . . . b b 9 9 9 9 9 9 b b . . . 
                . . b b 9 9 9 9 9 9 9 9 b b . . 
                . b b 9 d 9 9 9 9 9 9 9 9 b b . 
                . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
                b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
                b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
                b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
                b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
                b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
                b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
                . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
                . b d 5 3 3 3 3 3 3 3 d 5 b b . 
                . . b d 5 d 3 3 3 3 5 5 b b . . 
                . . . b b 5 5 5 5 5 5 b b . . . 
                . . . . . b b b b b b . . . . . 
                `, mySprite, 50, 0)
        }
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.after(8, function () {
        if (!(controller.B.isPressed())) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . b b b b b b . . . . . 
                . . . b b 9 9 9 9 9 9 b b . . . 
                . . b b 9 9 9 9 9 9 9 9 b b . . 
                . b b 9 d 9 9 9 9 9 9 9 9 b b . 
                . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
                b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
                b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
                b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
                b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
                b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
                b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
                . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
                . b d 5 3 3 3 3 3 3 3 d 5 b b . 
                . . b d 5 d 3 3 3 3 5 5 b b . . 
                . . . b b 5 5 5 5 5 5 b b . . . 
                . . . . . b b b b b b . . . . . 
                `, mySprite, -50, 0)
        }
    })
})
controller.combos.attachCombo("a+b", function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, mySprite, 0, 50)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(11)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f 2 2 2 2 2 2 f . . . . 
    . . . f 2 2 2 2 2 1 1 2 f . . . 
    . . f 2 2 2 2 2 2 1 1 1 2 f . . 
    . f f 1 1 1 2 2 2 2 1 1 2 f f . 
    f f d 1 1 1 2 2 2 2 2 2 2 2 f f 
    f 2 d d 1 2 2 2 2 2 1 1 1 2 2 f 
    f 2 2 2 2 2 1 1 2 2 1 1 d d 2 f 
    f 2 2 2 2 d d 1 1 2 2 d d d 2 f 
    . f 2 2 2 2 d d 2 2 2 2 2 2 f . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . f 1 1 f . . . . . . 
    . . . . . . f 1 1 f f . . . . . 
    . . . . . f f d 1 1 f . . . . . 
    . . . . . f d d 1 1 f . . . . . 
    `, SpriteKind.Player)
