import {
    ColliderLayer,
    engine,
    GltfContainer,
    InputAction,
    Material,
    MeshCollider,
    MeshRenderer,
    pointerEventsSystem,
    Transform,
    VisibilityComponent
} from '@dcl/sdk/ecs'
import { Color3, Color4, Vector3 } from '@dcl/sdk/math'
import * as utils from '@dcl-sdk/utils'
import { movePlayerTo } from '~system/RestrictedActions'


import { getUserData } from '~system/UserIdentity'
import { acceptannouncement, denyannouncement } from './ui'



var SCANNING: boolean = false

const wearablesToCheck = [
    'urn:decentraland:off-chain:base-avatars:thug_life',
    'urn:decentraland:off-chain:base-avatars:sunglasses',
    'urn:decentraland:off-chain:base-avatars:hat_cap',
    // ...more wearables
];


export function createTokenGate() {


    const blockbox = engine.addEntity()

    Transform.create(blockbox, {
        position: Vector3.create(21.75, 1, 16.25),
        scale: Vector3.create(4, 5, 3)
    })
    MeshCollider.setBox(blockbox)
    MeshRenderer.setBox(blockbox)

    Material.setPbrMaterial(blockbox, {
        albedoColor: Color4.create(0, 0, 0, 0.5),
        emissiveColor: Color3.create(1, 0, 1)
    })







    const myCube = engine.addEntity()

    Transform.create(myCube, {
        position: Vector3.create(20.75, 1, 14),
        scale: Vector3.create(.75, 2, .75)
    })
    MeshCollider.setBox(myCube)
    // MeshRenderer.setBox(myCube)



    //   MeshRenderer.setSphere(myCube)
    //   MeshCollider.setSphere(myCube)
    // GltfContainer.create(myCube, {
    //     src: 'models/wearables/cheetah.glb',
    //     visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
    //     invisibleMeshesCollisionMask: undefined
    // })



    ///FOR CAMERA ENTER TRIGGER
    const box = engine.addEntity()

    Transform.create(box, {
        position: Vector3.create(49, 2, 16),
        scale: Vector3.create(1.2, 4, 4)
    })
    MeshRenderer.setBox(box)
    VisibilityComponent.create(box, { visible: false })



    utils.triggers.addTrigger(
        box,
        2,
        1,
        [{ type: 'box', scale: Vector3.create(1.2, 4, 4), position: Vector3.create(0, 0, 0) }],
        () => {
            if (SCANNING) return
            SCANNING = true
            console.log("IN TRIGGER")

            // check wearables


            utils.timers.setTimeout(async () => {
                const accepted = await checkWearables(wearablesToCheck)

                if (accepted) {
                    acceptannouncement.show()
                    utils.timers.setTimeout(async () => { acceptannouncement.hide() }, 3000)

                    movePlayerTo({
                        newRelativePosition: Vector3.create(63, 1, 6)
                        // cameraTarget: Vector3.create(8, 1, 8),
                    })
                } if (!accepted) {
                    denyannouncement.show()
                    utils.timers.setTimeout(async () => { denyannouncement.hide() }, 3000)

                }

                SCANNING = false
            }, 4000)
        }
    )



    ///FOR ONCLICK




    pointerEventsSystem.onPointerDown(
        {
            entity: myCube,
            opts: {
                button: InputAction.IA_POINTER,
                hoverText: 'Check for VIP'
            }
        },
        () => {
            if (SCANNING) return
            SCANNING = true

            // check wearables


            utils.timers.setTimeout(async () => {
                const accepted = await checkWearables(wearablesToCheck)

                if (accepted) {
                    let transform = Transform.getMutable(blockbox)
                    transform.scale = Vector3.create(0,0,0)
                   
                    acceptannouncement.show()
                    utils.timers.setTimeout(async () => { acceptannouncement.hide() }, 3000)

                    //   DoorState.getMutable(door).open = true
                    //   DoorState.getMutable(door).dirty = true
                } else {
                    denyannouncement.show()
                    utils.timers.setTimeout(async () => { denyannouncement.hide() }, 3000)

                }

                SCANNING = false
            }, 2000)






        }
    )

    //utils.triggers.enableDebugDraw(true)
}



export async function checkWearables(filters: string[]) {
    const userData = await getUserData({})

    if (!userData || !userData.data || !userData.data.avatar || !userData.data.avatar.wearables) return false

    console.log('Currently wearing: ', userData.data.avatar)
    let result = false
    for (const filter of filters) {
        if (userData.data.avatar.wearables.includes(filter)) {
            console.log(`User has wearable: ${filter}`);
            return true; // Return true if any of the wearables is found
        }
    }

    console.log('HAS WEARABLE? ', result)
    return result
} 