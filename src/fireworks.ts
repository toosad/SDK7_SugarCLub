import { neonMat } from './materials'
import { engine, Transform, Animator, pointerEventsSystem, InputAction, GltfContainer, ColliderLayer} from "@dcl/sdk/ecs"
import { Vector3, Quaternion } from "@dcl/sdk/math"
import * as utils from '@dcl-sdk/utils'




export function createFireworks(){
const firework = engine.addEntity()
Transform.create(firework, {
  position: Vector3.create(35, 12.5, 11),
  scale: Vector3.create(1,1, 1),
  rotation: Quaternion.fromEulerDegrees(0,-20,-55)
})
GltfContainer.create(firework, {
  src: 'models/fireworks.glb',
  visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
  invisibleMeshesCollisionMask: undefined
})

Animator.create(firework, {
    states: [
      {
        clip: 'rocket',
        playing: false,
        loop: true,
        shouldReset: false
      },
      {
        clip: 'fire1',
        playing: false,
        loop: false,
        shouldReset: true
      },
      {
        clip: 'fire2',
        playing: false,
        loop: false,
        shouldReset: true
      },
      {
        clip: 'fire3',
        playing: false,
        loop: false,
        shouldReset: true
      },
      {
        clip: 'fire4',
        playing: false,
        loop: false,
        shouldReset: true
      },
      {
        clip: 'fire5',
        playing: false,
        loop: false,
        shouldReset: true
      }
    ]
  })

  pointerEventsSystem.onPointerDown(
    {
      entity: firework,
      opts: {
        button: InputAction.IA_POINTER,
        hoverText: 'Start/Off'
      }
    },
    () => {
      // TODO use Animator.getClip()
      const mutableAnimator = Animator.getMutable(firework)
      mutableAnimator.states[0].playing = true
      mutableAnimator.states[1].playing = true
      mutableAnimator.states[2].playing = true
      mutableAnimator.states[3].playing = true
      mutableAnimator.states[4].playing = true
      mutableAnimator.states[5].playing = true


      utils.timers.setTimeout(
        function() { 
            const mutableAnimator = Animator.getMutable(firework)
            mutableAnimator.states[0].playing = false
            mutableAnimator.states[1].playing = false
            mutableAnimator.states[2].playing = false
            mutableAnimator.states[3].playing = false
            mutableAnimator.states[4].playing = false
            mutableAnimator.states[5].playing = false},
        10000
      )

    }
  )
}


