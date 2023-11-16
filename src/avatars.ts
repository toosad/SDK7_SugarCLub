import { engine, Transform, MeshRenderer, Material, MeshCollider, VisibilityComponent, GltfContainer } from "@dcl/sdk/ecs"
import { Vector3, Quaternion } from "@dcl/sdk/math"

export function createAvatars(){

 const avatar0 = engine.addEntity()
	Transform.create(avatar0, {
	  position: Vector3.create(9,0,15),
	  scale: Vector3.create(0.015, 0.015, 0.015),
      rotation: Quaternion.fromEulerDegrees(0,-20,0)
	})
	GltfContainer.create(avatar0, {
	  src: 'models/avatars/vipegirl2.glb'
	})


const avatar1 = engine.addEntity()
	Transform.create(avatar1, {
	  position: Vector3.create(13,0,5.5),
	  scale: Vector3.create(0.015, 0.015, 0.015),
      rotation: Quaternion.fromEulerDegrees(0,0,0)
	})
	GltfContainer.create(avatar1, {
	  src: 'models/avatars/vipegirl1.glb'
	})


const avatar2 = engine.addEntity()
	Transform.create(avatar2, {
	  position: Vector3.create(48, 6.2, 16),
	  scale: Vector3.create(0.03, 0.03, 0.03),
      rotation: Quaternion.fromEulerDegrees(0,180,0)
	})
	GltfContainer.create(avatar2, {
	  src: 'models/avatars/dancer.glb'
	})

}