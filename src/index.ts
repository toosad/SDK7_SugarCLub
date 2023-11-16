import { engine, InputAction, inputSystem, Material, MeshCollider, pointerEventsSystem } from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'




import { createClubModels } from './clubModels'
import { createAvatars } from './avatars'
import { createFireworks } from './fireworks'
import { createTokenGate } from './tokenGate'
import { placeWearables } from './wearableSale'
import { createBasicDanceArea } from './autodance'
import { createAudioStreamArea, streamEntity, streamEntity2, streamEntity3, streamEntity4, streamEntity5 } from './audiostreams'
import { createLinks } from './billboards'
import { addScreens } from './media'
import { createADS } from './adSystem'
import { createNFTLinks } from './nftLinks'
import { createTexts } from './text'
import { addDrinkingGame } from './drinkingGame'



export function main() {


  createClubModels()
  addScreens()
  createAvatars()
  createFireworks()
  createTokenGate()
  placeWearables()
  createLinks()
  createBasicDanceArea(Vector3.create(14, 0, 16), Vector3.create(10, 7, 10))
  createBasicDanceArea(Vector3.create(32, 30, 16), Vector3.create(20, 25, 25))
  createBasicDanceArea(Vector3.create(46, 9, 16), Vector3.create(5, 5, 5))
  createAudioStreamArea(Vector3.create(46,1,16), Vector3.create(29,7,32), streamEntity)
  createAudioStreamArea(Vector3.create(15,1,16), Vector3.create(30,10,32), streamEntity2)
  createAudioStreamArea(Vector3.create(32,40,16), Vector3.create(64,40,32), streamEntity3)
  createAudioStreamArea(Vector3.create(15,13,16), Vector3.create(30,13,30), streamEntity4)
  createAudioStreamArea(Vector3.create(48, 11, 16), Vector3.create(32,8,32), streamEntity5)
  createADS(Vector3.create(9.1,9.9,18.9), Vector3.create(1.6,1,1), Quaternion.fromEulerDegrees(0,0,180))
  createADS(Vector3.create(36.9,4,15.3), Vector3.create(7,3.5,1), Quaternion.fromEulerDegrees(0,-90,0))
  createADS(Vector3.create(11,5,8), Vector3.create(4,2,1), Quaternion.fromEulerDegrees(0,180,180))
  createNFTLinks()
  createTexts()
  addDrinkingGame()
  
  
  


}
