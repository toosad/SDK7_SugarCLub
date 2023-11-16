import * as ui from 'dcl-ui-toolkit'
import * as utils from '@dcl-sdk/utils'
import { Animator, AudioSource, AvatarAnchorPointType, AvatarAttach, ColliderLayer, GltfContainer, InputAction, MeshRenderer, PointerEventType, Transform, VisibilityComponent, engine, inputSystem, pointerEventsSystem } from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
import { DrinkSTARTannouncement, Drinkannouncement, refillannouncement } from './ui'
import { createTimer, gameStarted } from './timer'


//variables
export const health = ui.createComponent(ui.UIBar, {
    startHidden: true,
    value: 0,
    xOffset: -30,
    yOffset: 60,
    color: Color4.Magenta(),
    style: ui.BarStyles.ROUNDSILVER,
    scale: 1,
})
export let hasDrink: boolean = false
export let hasEmptyDrink: boolean = false
export let drinkCount: number = 0
export const drinkCounter = ui.createComponent(ui.UICounter, {
    value: drinkCount,
    startHidden: true,
    xOffset: -50,
    yOffset: 100,
    color: Color4.Black(),
    size: 35,
    fixedDigits: 2,
})
let refill = engine.addEntity()


export function addDrinkingGame() {

    const drunksound1 = engine.addEntity()
    AudioSource.create(drunksound1, {
        audioClipUrl: 'sounds/tipsy.mp3',
        loop: false,
        playing: false
    })

    Transform.create(drunksound1, {
        position: Transform.get(engine.CameraEntity).position
    })

    const drunksound2 = engine.addEntity()
    AudioSource.create(drunksound2, {
        audioClipUrl: 'sounds/navigationForward.mp3',
        loop: false,
        playing: false
    })

    Transform.create(drunksound2, {
        position: Transform.get(engine.CameraEntity).position
    })
    const drunksound3 = engine.addEntity()
    AudioSource.create(drunksound3, {
        audioClipUrl: 'sounds/star-collect.mp3',
        loop: false,
        playing: false
    })

    Transform.create(drunksound3, {
        position: Transform.get(engine.CameraEntity).position
    })

    // let drink1 = engine.addEntity()
    // const Z_OFFSET = 1.5
    // const GROUND_HEIGHT = 0.55


    // GltfContainer.create(drink1, {
    //     src: 'models/attach/pride_soda.glb',
    //     visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
    //     invisibleMeshesCollisionMask: undefined
    // })
    // Transform.create(drink1, {
    //     position: Vector3.create(0, .3, 1),

    // })

    // Animator.create(drink1, {
    //     states: [{
    //         name: "sodaAction",
    //         clip: "sodaAction",
    //         playing: false,
    //         loop: true
    //     }
    //     ]
    // })
    // engine.removeEntity(drink1)


    // const donut = engine.addEntity()
    // GltfContainer.create(donut, {
    //     src: 'models/attach/donut.glb'
    // })
    // Transform.create(donut, {
    //     position: Vector3.create(0, .3, 1),
    //     scale: Vector3.create(.2, .2, .2)

    // })

    // Animator.create(donut, {
    //     states: [{
    //         name: "donutAction",
    //         clip: "donutAction",
    //         playing: false,
    //         loop: true
    //     }
    //     ]
    // })


    // const drink2 = engine.addEntity()
    // GltfContainer.create(drink2, {
    //     src: 'models/attach/soju.glb'
    // })
    // Transform.create(drink2, {
    //     position: Vector3.create(0, .3, 1),
    //     scale: Vector3.create(.8, .8, .8)

    // })

    // Animator.create(drink2, {
    //     states: [{
    //         name: "sojuAction",
    //         clip: "sojuAction",
    //         playing: false,
    //         loop: true
    //     }
    //     ]
    // })

    // const drinkVIP = engine.addEntity()
    // GltfContainer.create(drinkVIP, {
    //     src: 'models/attach/sodacan.glb',
    //     visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
    //     invisibleMeshesCollisionMask: undefined
    // })
    // Transform.create(drinkVIP, {
    //     position: Vector3.create(0, .3, 1),
    //     scale: Vector3.create(.6, .6, .6)

    // })

    // Animator.create(drinkVIP, {
    //     states: [{
    //         name: "canAction",
    //         clip: "canAction",
    //         playing: false,
    //         loop: true
    //     }
    //     ]
    // })

    ///TRIGGER
    // const myEntity = engine.addEntity()
    // Transform.create(myEntity, {
    //     position: Vector3.create(27, 0, 16),
    //     scale: Vector3.create(5, 4, 6)
    // })
    // MeshRenderer.setBox(myEntity)


    // ///MAKE TRUE FOR DEBUG
    // VisibilityComponent.create(myEntity, { visible: true })


    // utils.triggers.addTrigger(
    //     myEntity,
    //     1,
    //     1,
    //     [{ type: 'box', scale: Vector3.create(5, 4, 6), position: Vector3.create(0, 0, 0) }],
    //     function (otherEntity) {

    //         console.log('drinkingGame')
    //         engine.removeEntity(myEntity)
    //         Drinkannouncement.show()
    //         utils.timers.setTimeout(async () => { Drinkannouncement.hide() }, 3000)
    //         // initDrinkingGame()

    //     },
    //     function (otherEntity) {

    //         console.log('noDrink')
    //     }
    // )



    GltfContainer.create(refill, {
        src: 'models/attach/pride_soda.glb',
        visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
        invisibleMeshesCollisionMask: undefined
    })
    Transform.create(refill, {
        position: Vector3.create(14, 1.2, 7),
        scale: Vector3.create(.8, .8, .8)

    })

    // engine.removeEntity(refill)

    pointerEventsSystem.onPointerDown(
        {
            entity: refill,
            opts: {
                button: InputAction.IA_POINTER,
                hoverText: 'Grab Drink'
            }
        },
        () => {
            let transform = Transform.getMutable(refill)
            console.log("drink" + hasDrink)
            console.log("EDRINK" + hasEmptyDrink)
            if (!hasDrink) {
                hasDrink = true

                // engine.removeEntity(refill)
                // drink1 = engine.addEntity()
                const parentEntity = engine.addEntity()

                // Attach parent entity to player
                AvatarAttach.create(parentEntity, {
                    anchorPointId: AvatarAnchorPointType.AAPT_RIGHT_HAND,
                })
                // initDrinkingGame()





                transform.position.x = 0.5
                transform.position.y = 0
                transform.rotation = Quaternion.fromEulerDegrees(0, 0, 180)
                transform.position.z = 0.6
                transform.parent = parentEntity
                health.show()
                drinkCounter.show()
                if (!gameStarted) {
                    DrinkSTARTannouncement.show()
                    utils.timers.setTimeout(async () => { DrinkSTARTannouncement.hide() }, 3000)

                    createTimer(60)
                }


            }


        }
    )






    engine.addSystem(() => {
        const cmd = inputSystem.getInputCommand(
            InputAction.IA_PRIMARY,
            PointerEventType.PET_DOWN,
        )
        // console.log(health)
        if (cmd) {
            console.log("drink" + hasDrink)
            console.log("EDRINK" + hasEmptyDrink)


            if (hasDrink && health.read() >= 1) {

                hasDrink = false
                drinkCount++
                drinkCounter.set(drinkCount)
                health.set(0)
                refillannouncement.show()
                utils.timers.setTimeout(async () => { refillannouncement.hide() }, 3000)

                hasEmptyDrink = true
                let transform = Transform.getMutable(refill)
                transform.position.x = 14
                transform.position.y = 1.2
                transform.rotation = Quaternion.fromEulerDegrees(0, 0, 0)
                transform.position.z = 7
                const parentEntity = engine.addEntity()
                Transform.create(parentEntity, { position: Vector3.create(0, 0, 0) })
                transform.parent = parentEntity
               
            }
            if (hasEmptyDrink) {
                hasEmptyDrink = false
                // const transform = Transform.getMutable(refill)
                // const transform2 = Transform.getMutable(drink1)
                // transform2.parent = nul
                // donut.setParent(null)
                // drink2.setParent(null)
                // VIPdrink.setParent(null)

                // engine.removeEntity(drink1)
                // refill = engine.addEntity()
                // engine.removeEntity(donut)
                // donutrefill = engine.addEntity()
                // engine.removeEntity(drink2)
                // engine.addEntity(sojurefill)
                // engine.removeEntity(VIPdrink)
                // engine.addEntity(VIPdrinkRefill)


                // transform.position = Vector3.create(8, .3, 5)

                // donutrefill.addComponent(new Transform({ position: new Vector3(13, 1.4, 7), scale: new Vector3(.3, .3, .3) }))
                // sojurefill.addComponent(new Transform({ position: new Vector3(15, 1.2, 6), scale: new Vector3(.8, .8, .8) }))
                // VIPdrinkRefill.addComponent(new Transform({ position: new Vector3(9, 7.75, 19.2), scale: new Vector3(.6, .6, .6), rotation: Quaternion.Euler(0, 20, 0) }))




            }

            else if (hasDrink && health.read() < 1) {

                health.increase(.1)

                // const mutableAnimator = Animator.getMutable(drink1)
                // mutableAnimator.states[0].playing = true
                AudioSource.getMutable(drunksound3).playing = true







            }
            if (drinkCount >= 2){
                drunkImage()

            }
            // if (drinkCount >= 6){
            //     VdrunkImage()
                
            // }
          
         
        }
    })


    async function drankDrink() {

        // const mutableAnimator = Animator.getMutable(drinkVIP)
        // mutableAnimator.states[0].playing = true



        if (drinkCount >= 5) {
            VdrunkImage()
            AudioSource.getMutable(drunksound1).playing = true
            //   tipsysource.playOnce()
        }
        drinkCounter.set(drinkCount)
        health.set(0)
        drunkImage()

        //sound effect
        AudioSource.getMutable(drunksound2).playing = true


    }



    function drunkImage() {
        const largeImage = ui.createComponent(ui.CenterImage, {width: 4000, height: 4000, duration: 5, image: "images/drunkScreen.png"})
       largeImage.show()
        utils.timers.setTimeout(async () => {  largeImage.hide() }, 3000)

    }
    function VdrunkImage() {
        const largeImage = ui.createComponent(ui.CenterImage, {width: 4000, height: 4000, duration: 5, image: "images/veryDrunkScreen.png"})
        largeImage.show()
         utils.timers.setTimeout(async () => {  largeImage.hide() }, 3000)
    }



    // function newTimer(intervals : number){
    // gameStarted = true
    // let timerValue = createTimer()


    // const timerId = utils.timers.setInterval(function () {
    //     let size = Math.random()
    //     // timerText.set(timerValue.updateTimeString(intervals))
    //     intervals -= 1
    //     console.log('intervalEntity', intervals)
    //     if (intervals < 0 ){
    //         utils.timers.clearInterval(timerId)
    //         timerText.set(0)
    //         gameStarted = false 
    //         // ui.displayAnnouncement("Game Over! You Drank:       " + drinkCount + "     Drinks")
    //         drinkCounter.set(0)
    //         drinkCount = 0
    //         // Drunk.hide()
    //         // VeryDrunk.hide()
    //     }
    //   }, 1000)



    // }











}

export function resetDrinkCount() {
    drinkCount = 0
    drinkCounter.set(drinkCount)
    let transform = Transform.getMutable(refill)
    transform.position.x = 14
    transform.position.y = 1.2
    transform.rotation = Quaternion.fromEulerDegrees(0, 0, 0)
    transform.position.z = 7
    const parentEntity = engine.addEntity()
    Transform.create(parentEntity, { position: Vector3.create(0, 0, 0) })
    transform.parent = parentEntity

    utils.timers.setTimeout(async () => {
        drinkCount = 0
        drinkCounter.set(drinkCount)


    }, 1500)
}