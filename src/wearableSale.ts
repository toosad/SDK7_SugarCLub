import { ColliderLayer, GltfContainer, InputAction, Transform, TransformType, engine, pointerEventsSystem } from "@dcl/sdk/ecs";
import { Vector3, Quaternion } from "@dcl/sdk/math";
import { openExternalUrl } from "~system/RestrictedActions";

export function createWearableDispaly(model: string, position: Vector3, scale: Vector3, rotation: Quaternion,  url: string){

    const sbox = engine.addEntity()
	Transform.create(sbox, {
        position: position,
        scale: scale,
        rotation: rotation
    })
	GltfContainer.create(sbox, {
	  src: model,
      visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
      invisibleMeshesCollisionMask: undefined
	})

  pointerEventsSystem.onPointerDown(
    {
      entity: sbox,
      opts: {
        button: InputAction.IA_POINTER,
        hoverText: 'See in Market'
      }
    },
    () => {
        openExternalUrl({url})
    }
  )


}

export function placeWearables(){
    createWearableDispaly('models/wearables/cheetah.glb', Vector3.create(42.6,1.2,3.5), Vector3.create(1,1,1), Quaternion.fromEulerDegrees(0,0,0),  'https://market.decentraland.org/accounts/0x474543b99438a978b39d39d8983723eb5ff9196b?assetType=item&section=wearables&vendor=decentraland&page=1&sortBy=newest')
    createWearableDispaly('models/wearables/donut.glb', Vector3.create(40.2,1.2,4.9),Vector3.create(1,1,1), Quaternion.fromEulerDegrees(0,180,0),  'https://market.decentraland.org/accounts/0x474543b99438a978b39d39d8983723eb5ff9196b?assetType=item&section=wearables&vendor=decentraland&page=1&sortBy=newest')
    createWearableDispaly('models/wearables/hoodie.glb', Vector3.create(38.5,1.2,6.9), Vector3.create(.5,.5,.5), Quaternion.fromEulerDegrees(0,45,0),  'https://market.decentraland.org/accounts/0x474543b99438a978b39d39d8983723eb5ff9196b?assetType=item&section=wearables&vendor=decentraland&page=1&sortBy=newest')
    createWearableDispaly('models/wearables/kicks.glb', Vector3.create(37,1.2,9),Vector3.create(.5,.5,.5), Quaternion.fromEulerDegrees(0,0,0),  'https://market.decentraland.org/accounts/0x474543b99438a978b39d39d8983723eb5ff9196b?assetType=item&section=wearables&vendor=decentraland&page=1&sortBy=newest')
    createWearableDispaly('models/wearables/michibomber.glb', Vector3.create(50.2,1.2,29.1), Vector3.create(1,1,1), Quaternion.fromEulerDegrees(0,0,0),  'https://market.decentraland.org/accounts/0x474543b99438a978b39d39d8983723eb5ff9196b?assetType=item&section=wearables&vendor=decentraland&page=1&sortBy=newest')
    createWearableDispaly('models/wearables/mooxx.glb', Vector3.create(52.8,.8,28.8), Vector3.create(1,1,1), Quaternion.fromEulerDegrees(0,180,0),  'https://market.decentraland.org/accounts/0x474543b99438a978b39d39d8983723eb5ff9196b?assetType=item&section=wearables&vendor=decentraland&page=1&sortBy=newest')
    createWearableDispaly('models/wearables/neonpunk.glb', Vector3.create(55,1.2,27.5), Vector3.create(1,1,1), Quaternion.fromEulerDegrees(0, 180,0),  'https://market.decentraland.org/accounts/0x474543b99438a978b39d39d8983723eb5ff9196b?assetType=item&section=wearables&vendor=decentraland&page=1&sortBy=newest')
}