import { engine, Transform, TextShape, Font } from "@dcl/sdk/ecs"
import { Quaternion, Vector3 } from "@dcl/sdk/math"
export function createTexts(){
const sign = engine.addEntity()

Transform.create(sign,{
    position: Vector3.create(49,1,15.9),
    rotation: Quaternion.fromEulerDegrees(0, -90, 0)
  })

  TextShape.create(sign,{
    text: 'SKYLOUNGE\nPORTAL',
	textColor: { r: 255, g: 0, b: 255, a:1 },
	fontSize: 2
  })

  const sign2 = engine.addEntity()

Transform.create(sign2,{
    position: Vector3.create(49,1.2,13),
    rotation: Quaternion.fromEulerDegrees(0, -90, 0)
  })

  TextShape.create(sign2,{
    text: 'Emotes',
	textColor: { r: 255, g: 0, b: 255, a:1 },
	fontSize: 2
  })
  const sign3 = engine.addEntity()

  Transform.create(sign3,{
      position: Vector3.create(8,1,25.8),
      rotation: Quaternion.fromEulerDegrees(0, -45, 0)
    })
  
    TextShape.create(sign3,{
      text: 'Twitter',
      textColor: { r: 255, g: 0, b: 255, a:1 },
      fontSize: 2
    })
}