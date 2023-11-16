
import { Material, MeshCollider, MeshRenderer, Transform, engine } from '@dcl/sdk/ecs'
import { adsMat } from './materials'
import { Quaternion, Vector3 } from '@dcl/sdk/math'






export const Adsscreen = engine.addEntity()
MeshRenderer.setPlane(Adsscreen)
MeshCollider.setPlane(Adsscreen)
Transform.create(Adsscreen, {position: Vector3.create(9.1,9.9,18.9), scale: Vector3.create(1.6,1,1), rotation: Quaternion.fromEulerDegrees(0,0,180)})
Material.setPbrMaterial(Adsscreen,  {
    roughness: 0
  })


export const Adsscreen3 = engine.addEntity()
MeshRenderer.setPlane(Adsscreen3)
MeshCollider.setPlane(Adsscreen3)
Transform.create(Adsscreen3, {position: Vector3.create(36.9,4,15.3), scale: Vector3.create(7,3.5,1), rotation: Quaternion.fromEulerDegrees(0,-90,180)})
Material.setPbrMaterial(Adsscreen3,  {
    roughness: 0
  })

  export const Adsscreen4 = engine.addEntity()
  MeshRenderer.setPlane(Adsscreen4)
  MeshCollider.setPlane(Adsscreen4)
  Transform.create(Adsscreen4, {position: Vector3.create(11,5,8), scale: Vector3.create(4,2,1), rotation: Quaternion.fromEulerDegrees(0,180,180)})
  Material.setPbrMaterial(Adsscreen4,  {
      roughness: 0
    })
  

    engine.removeEntity(Adsscreen)
    engine.removeEntity(Adsscreen3)
    engine.removeEntity(Adsscreen4)





