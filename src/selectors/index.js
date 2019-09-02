export const getMaterials = (state) => state.materials

export const findMaterial = (state, id) => state.materials.find(
    material => material.id === id
)