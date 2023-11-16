import { engine, Transform, MeshRenderer, Material, MeshCollider, VisibilityComponent, GltfContainer } from "@dcl/sdk/ecs"
import { Vector3, Quaternion } from "@dcl/sdk/math"


export function createClubModels()
{
    const sbox = engine.addEntity()
	Transform.create(sbox, {
	  position: Vector3.create(18, -0.25, 18.15),
	  scale: Vector3.create(1.01, 0.96,1.01),
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
	})
	GltfContainer.create(sbox, {
	  src: 'models/building.glb'
	})
  
}
