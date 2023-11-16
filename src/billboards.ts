
import { Billboard, Entity, GltfContainer, InputAction, MeshCollider, MeshRenderer, Transform, engine, pointerEventsSystem } from '@dcl/sdk/ecs'

import { Vector3, Quaternion } from '@dcl/sdk/math'
import { openExternalUrl } from '~system/RestrictedActions'




export function createLinks(){
let multimodel2 = engine.addEntity()
GltfContainer.create(multimodel2, { src: "models/soda_.glb" })
Transform.create(multimodel2, {
    position: Vector3.create(14, 4.3, 15),
    scale: Vector3.create(3.8, 3.8, 3.8),
    rotation: Quaternion.fromEulerDegrees(0, 0, 0)

})
Billboard.create(multimodel2)

const Hyperfylink = engine.addEntity()
MeshCollider.setBox(Hyperfylink)
Transform.create(Hyperfylink, {
    position: Vector3.create(13.85, 0, 28.3), scale: Vector3.create(2, 3, 2), rotation: Quaternion.fromEulerDegrees(0, 0, 0)

})

pointerEventsSystem.onPointerDown(
    {
        entity: Hyperfylink,
        opts: {
            button: InputAction.IA_POINTER,
            hoverText: 'Hyperfy!'
        }
    },
    () => {
        openExternalUrl({ url: "https://hyperfy.io/sugarclub" })




    }
)



const Twitterlink = engine.addEntity()
MeshCollider.setBox(Twitterlink)
Transform.create(Twitterlink, {
    position: Vector3.create(8, 1, 25.8), scale: Vector3.create(0.1, 1, 1), rotation: Quaternion.fromEulerDegrees(0, 45, 0)

})

pointerEventsSystem.onPointerDown(
    {
        entity: Twitterlink,
        opts: {
            button: InputAction.IA_POINTER,
            hoverText: 'Twitter!'
        }
    },
    () => {
        openExternalUrl({ url: "https://twitter.com/SugarClub_" })




    }
)


const emotelink = engine.addEntity()
MeshCollider.setBox(emotelink)
Transform.create(emotelink, {
    position: Vector3.create(49,1.2,13), scale: Vector3.create(0.1,0.8,0.8), rotation: Quaternion.fromEulerDegrees(0, 0, 0)

})

pointerEventsSystem.onPointerDown(
    {
        entity: emotelink,
        opts: {
            button: InputAction.IA_POINTER,
            hoverText: 'Sugar Club Emotes!'
        }
    },
    () => {
        openExternalUrl({ url: "https://market.decentraland.org/browse?assetType=item&section=emotes&vendor=decentraland&page=1&sortBy=newest&onlyOnSale=false&status=on_sale&creators=0x474543b99438a978b39d39d8983723eb5ff9196b" })




    }
)
}










