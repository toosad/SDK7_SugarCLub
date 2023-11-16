import { engine, Transform, MeshRenderer, Material, VideoPlayer } from "@dcl/sdk/ecs"
import { Quaternion } from "@dcl/sdk/math"

// #1
export function addScreens(){
const screen = engine.addEntity()
MeshRenderer.setPlane(screen)
Transform.create(screen, { position: { x: 45, y:11, z:16}, scale: {x: 6, y:8, z: 6}, rotation: Quaternion.fromEulerDegrees(90,0,0) })

// #2
VideoPlayer.create(screen, {
  src: 'videos/80S.mp4',
  playing: false,
})

// #3
const videoTexture = Material.Texture.Video({ videoPlayerEntity: screen })

// #4
Material.setPbrMaterial(screen, {
  texture: videoTexture,
  roughness: 1.0,
  specularIntensity: 0,
  metallic: 0,
})

// #1
const screen2 = engine.addEntity()
MeshRenderer.setPlane(screen2)
Transform.create(screen2,  { position: { x: 49, y: 3.2, z: 15.7}, scale: {x: 3.5, y:2, z: 1}, rotation: Quaternion.fromEulerDegrees(0,90,0) })

// #2
VideoPlayer.create(screen2, {
  src: 'videos/vipe.mp4',
  playing: false,
})

// #3
const videoTexture2 = Material.Texture.Video({ videoPlayerEntity: screen2 })

// #4
Material.setPbrMaterial(screen2, {
  texture: videoTexture2,
  roughness: 1.0,
  specularIntensity: 0,
  metallic: 0,
})
}