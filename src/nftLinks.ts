
import { Entity, NftFrameType, NftShape, Transform, engine } from '@dcl/sdk/ecs'
import { Vector3, Color4, Quaternion } from '@dcl/sdk/math'

//////NFT links


export function createNFTLinks(){
const painting = engine.addEntity()
Transform.create(painting, {
  position: Vector3.create(22.1,8.9,20.13),
  scale: Vector3.create(11.5,9,1),
  rotation: Quaternion.fromEulerDegrees(0,0,0)
})

NftShape.create(painting, {
  urn: 'urn:decentraland:ethereum:erc721:0x6a5ff3ceecae9ceb96e6ac6c76b82af8b39f0eb3:6939'
})


const painting2 = engine.addEntity()
Transform.create(painting2, {
  position: Vector3.create(23.5,1.1,16.2),
  scale: Vector3.create(4,4,1),
  rotation: Quaternion.fromEulerDegrees(0,-90,0)
})

NftShape.create(painting2, {
  urn: 'urn:decentraland:ethereum:erc721:0xa5fe4205c2aaed761eb89faa5b87e13954e3cb73:166'
})

const painting3 = engine.addEntity()
Transform.create(painting3, {
  position: Vector3.create(23.5,1.1,16.2),
  scale: Vector3.create(4,4,1),
  rotation: Quaternion.fromEulerDegrees(0,-90,0)
})

NftShape.create(painting3, {
  urn: 'urn:decentraland:ethereum:erc721:0x2548bab7fa3546c8e3074d581a1322899ec01a08:2'
})
const painting4 = engine.addEntity()
Transform.create(painting4, {
  position: Vector3.create(27,9.3,16),
  scale: Vector3.create(3,3,1),
  rotation: Quaternion.fromEulerDegrees(0,90,0)
})

NftShape.create(painting4, {
  urn: 'urn:decentraland:ethereum:erc721:0x03f41eaa68968a4443ecee18139637c59c8f7b6b:61'
})

const painting5 = engine.addEntity()
Transform.create(painting5, {
  position: Vector3.create(39.5,3,26),
  scale: Vector3.create(4,4,1),
  rotation: Quaternion.fromEulerDegrees(0,-45,0)
})

NftShape.create(painting5, {
  urn: 'urn:decentraland:ethereum:erc721:0x2548bab7fa3546c8e3074d581a1322899ec01a08:4'
})


const painting6 = engine.addEntity()
Transform.create(painting6, {
  position: Vector3.create(48.5,3,2.5),
  scale: Vector3.create(10,10,1),
  rotation: Quaternion.fromEulerDegrees(0,180,0)
})

NftShape.create(painting6, {
  urn: 'urn:decentraland:ethereum:erc721:0x3bf447963c8d8bdf06751528de40efb0849f3037:181'
})


 const painting7 = engine.addEntity()
Transform.create(painting7, {
  position: Vector3.create(48.5,3,2.5),
  scale: Vector3.create(10,10,1),
  rotation: Quaternion.fromEulerDegrees(0,180,0)
})

NftShape.create(painting7, {
  urn: 'urn:decentraland:ethereum:erc721:0x44a203cc50049960cd181cbee41cc010e18ae8be:2'
})


const painting8 = engine.addEntity()
Transform.create(painting8, {
  position: Vector3.create(15.75,8.1,27.3),
  scale: Vector3.create(5,5,1),
  rotation: Quaternion.fromEulerDegrees(0,0,0)
})

NftShape.create(painting8, {
  urn: 'urn:decentraland:ethereum:erc721:0x7271949ca2bdc931b9097120b0e701615840f5f3:62'
})

const painting9 = engine.addEntity()
Transform.create(painting9, {
  position: Vector3.create(5.4,8,14.35),
  scale: Vector3.create(5,5,1),
  rotation: Quaternion.fromEulerDegrees(0,-90,0)
})

NftShape.create(painting9, {
  urn: 'urn:decentraland:ethereum:erc721:0x14495f2c9a4bf145605edf6089d4783a3e51e850:19'
})

 const painting10 = engine.addEntity()
Transform.create(painting10, {
  position: Vector3.create(5.4,8,18),
  scale: Vector3.create(5,5,1),
  rotation: Quaternion.fromEulerDegrees(0,-90,0)
})

NftShape.create(painting10, {
  urn: 'urn:decentraland:ethereum:erc721:0x3b3ee1931dc30c1957379fac9aba94d1c48a5405:41362'
})

 const painting11 = engine.addEntity()
Transform.create(painting11, {
  position: Vector3.create(5.4,8,10.6),
  scale: Vector3.create(5,5,1),
  rotation: Quaternion.fromEulerDegrees(0,-90,0)
})

NftShape.create(painting11, {
  urn: 'urn:decentraland:ethereum:erc721:0x00bd8f77a6222a17cda498807fa938031e158298:31'
})



const painting12 = engine.addEntity()
Transform.create(painting12, {
  position: Vector3.create(48,9,26.5),
  scale: Vector3.create(5,5,1),
  rotation: Quaternion.fromEulerDegrees(0,0,10)
})

NftShape.create(painting12, {
  urn: 'urn:decentraland:ethereum:erc721:0xfc3d514ac7ec6371a5c389c5a9d4a69a6736c0ae:20'
})


const painting13 = engine.addEntity()
Transform.create(painting13, {
  position: Vector3.create(48.3,13.3,22),
  scale: Vector3.create(5,5,1),
  rotation: Quaternion.fromEulerDegrees(0,0,0)
})

NftShape.create(painting13, {
  urn: 'urn:decentraland:ethereum:erc721:0x4243a8413a77eb559c6f8eaffa63f46019056d08:5947'
})

const painting14 = engine.addEntity()
Transform.create(painting14, {
  position: Vector3.create(48.3,13.3,9.5),
  scale: Vector3.create(5,5,1),
  rotation: Quaternion.fromEulerDegrees(0,180,0)
})

NftShape.create(painting14, {
  urn: 'urn:decentraland:ethereum:erc721:0x4243a8413a77eb559c6f8eaffa63f46019056d08:5329'
})


const painting15 = engine.addEntity()
Transform.create(painting15, {
  position: Vector3.create(45,35,28),
  scale: Vector3.create(9,9,1),
  rotation: Quaternion.fromEulerDegrees(0,0,0)
})

NftShape.create(painting15, {
  urn: 'urn:decentraland:ethereum:erc721:0x8aff6a8320ba596c59df10a56b2420229294366e:10019'
})

const painting16 = engine.addEntity()
Transform.create(painting16, {
  position: Vector3.create(45,35,5),
  scale: Vector3.create(9,9,1),
  rotation: Quaternion.fromEulerDegrees(0,180,0)
})

NftShape.create(painting16, {
  urn: 'urn:decentraland:ethereum:erc721:0x8aff6a8320ba596c59df10a56b2420229294366e:10014'
})

}