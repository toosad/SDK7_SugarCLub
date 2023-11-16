import { engine, Transform, Material, Entity, MeshRenderer } from '@dcl/sdk/ecs';
import { Quaternion, Vector3 } from '@dcl/sdk/math';

import * as utils from '@dcl-sdk/utils'

// Define an array of texture URLs
const textureURLs = [
    'images/scethbanner.jpg',
    'images/wearablead.jpg',
    'images/sc.jpg',
    'images/mighty_pepe.jpg',
];

export function createADS(position: Vector3, scale: Vector3, rotation: Quaternion){
    // Create an entity and assign a shape
const meshEntity = engine.addEntity()
Transform.create(meshEntity, {position: position, scale: scale, rotation: rotation})
MeshRenderer.setPlane(meshEntity);


// Function to change the texture
function changeTexture() {
    // Get the texture URL at the current index
    const textureURL = textureURLs[currentTextureIndex];

    //Create material and configure its fields
    Material.setPbrMaterial(meshEntity, {
        texture: Material.Texture.Common({
            src: textureURL
        })
    })

    // Increment the current index
    currentTextureIndex++;

    // Wrap around to the beginning if we've reached the end of the array
    if (currentTextureIndex >= textureURLs.length) {
        currentTextureIndex = 0;
    }
}
// const box = utils.addTestCube()

utils.timers.setInterval(function () {
    changeTexture()

}, 5000)

// Initialize a variable to keep track of the current texture index
let currentTextureIndex = 0;


}



