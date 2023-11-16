import { engine, Transform, Material, VisibilityComponent, GltfContainer } from "@dcl/sdk/ecs"
import { Color3, Color4 } from '@dcl/sdk/math'



export const neonMat = engine.addEntity()
export const invisMat = engine.addEntity()
export const adsMat = engine.addEntity()








Material.setPbrMaterial(neonMat, {
    albedoColor: Color4.create(0,0,0,0.2),
    emissiveColor: Color3.create(1,0,1)
  })

/// alpha 

Material.setPbrMaterial(invisMat, {
    albedoColor: Color4.create(0,0,0,0)
  })

  Material.setPbrMaterial(adsMat, {
    roughness: 0
  })


