import { engine, AudioStream, MeshRenderer, Transform, VisibilityComponent, Entity } from "@dcl/sdk/ecs"
import { Vector3 } from "@dcl/sdk/math"
import * as utils from '@dcl-sdk/utils'
let isPlaying = false // Flag to track audio


export const streamEntity = engine.addEntity()

AudioStream.create(streamEntity, {
    url: "https://stream.nightride.fm/nightride.mp3",
    playing: false,
    volume: 0.8
})

export const streamEntity2 = engine.addEntity()

AudioStream.create(streamEntity2, {
    url: "https://stream.nightride.fm/nightride.mp3",
    playing: false,
    volume: 0.8
})
export const streamEntity3 = engine.addEntity()

AudioStream.create(streamEntity3, {
    url: "https://stream.nightride.fm/nightride.mp3",
    playing: false,
    volume: 0.8
})
export const streamEntity4 = engine.addEntity()

AudioStream.create(streamEntity4, {
    url: "https://radio.plaza.one/mp3",
    playing: false,
    volume: 0.8
})
export const streamEntity5 = engine.addEntity()

AudioStream.create(streamEntity5, {
    url: "https://radio.plaza.one/mp3",
    playing: false,
    volume: 0.8
})


export function createAudioStreamArea(position: Vector3, scale: Vector3, stream: any) {
    const myEntity = engine.addEntity()
    Transform.create(myEntity, {
        position: position,
        scale: scale
    })
    MeshRenderer.setBox(myEntity)

    ///MAKE TRUE FOR DEBUG
    VisibilityComponent.create(myEntity, { visible: false })

    ///REMEMBER TO MAKE THE TRIGGER POSITION AND SCALE = THE TRANSFORM POSITION AND SCALE!!
    utils.triggers.addTrigger(
        myEntity,
        1,
        1,
        [{ type: 'box', scale: scale, position: Vector3.create(0, 0, 0) }],
        function (otherEntity) {
            if (!isPlaying) {
                isPlaying = true
                console.log('audio Playing')
                const audio = AudioStream.getMutable(stream)
                audio.playing = true
                console.log(AudioStream.get(stream).playing)
            }
        },
        function (otherEntity) {
            if (isPlaying) {
                isPlaying = false
                console.log('noAudio')
                const audio = AudioStream.getMutable(stream)
                audio.playing = false
                console.log(AudioStream.get(stream).playing)
            }
        }
    )
}