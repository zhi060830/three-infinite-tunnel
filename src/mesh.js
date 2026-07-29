import * as THREE from 'three';

//32是分段数，第六个参数是是否为空心
const geometry = new THREE.CylinderGeometry(30,50,1000,32,32,true)

const loader = new THREE.TextureLoader()
const texture = loader.load('./storm.webp')
texture.colorSpace = THREE.SRGBColorSpace
texture.wrapT = THREE.RepeatWrapping
texture.repeat.set(1,2)

const material = new THREE.MeshBasicMaterial({
    transparent:true,
    alphaMap:texture,
    side:THREE.BackSide
})

const tunnel = new THREE.Mesh(geometry,material)

export default tunnel