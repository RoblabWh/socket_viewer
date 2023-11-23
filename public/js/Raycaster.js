// Set up the raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Function to handle mouse click
function onMouseClick(event) {

    if (property.OpenPannellum) {
        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);

        // Check for intersections
        const intersects = raycaster.intersectObjects(scene.children);

        // Check if intersections are found
        if (intersects.length > 0) {
            // Keyframe object index for nearest object to picking ray
            const keyframeObjectIndex = cameraFrames.keyframeObjects.findIndex(obj => obj.uuid === intersects[0].object.uuid);
            if (keyframeObjectIndex !== -1) {
                // Get keyframe index with keyframe object index 
                const keyframeIndex = cameraFrames.keyframeIndices.findIndex(obj => obj === keyframeObjectIndex);
                window.open("/pannellum?keyframeId=" + keyframeIndex);
            }  
        }
    }
}

// Add event listener for mouse click
window.addEventListener('click', onMouseClick);