export {};
// import * as THREE from 'three';
// import { OrbitControls } from 'three';
// import gsap from 'gsap';

// export const cubeLine = () => {
//   const W_WIDTH = window.innerWidth; // ブラウザの横サイズ
//   const W_HEIGHT = window.innerHeight; // ブラウザの縦サイズ
//   const W_ASPECT = window.innerWidth / window.innerHeight; // アスペクト比
//   /**
//    * @NOTE 現在のディスプレイ機器におけるCSS解像度と物理解像度の比を返す。
//    * これは 1デバイス・ピクセルの大きさに対する 1CSSピクセルの大きさの比率と考えることができる。
//    */
//   const W_RATIO = window.devicePixelRatio;

//   let camera, scene, renderer, cube; // カメラ、シーン、レンダラー、立方体
//   let meshs = [];
//   let allPlanes = new THREE.Group();

//   window.onload = () => {
//     // 4, レンダラーを作る
//     renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setPixelRatio(W_RATIO); // ピクセル比
//     renderer.setSize(W_WIDTH, W_HEIGHT);
//     renderer.setClearColor(0x5d6faf, 1);

//     // 5, HTMLに配置する
//     let div = document.getElementById('three');
//     div.appendChild(renderer.domElement);

//     // カメラを作る
//     // new THREE.PerspectiveCamera(視野角, アスペクト比, near, far)
//     camera = new THREE.PerspectiveCamera(45, W_ASPECT, 100, 2000);
//     camera.lookAt(new THREE.Vector3(0, 0, 0));
//     camera.position.set(0, 0, 1000);

//     // 2, シーンを作る
//     scene = new THREE.Scene();

//     // 3-1, ライトを作る1
//     let dirLight = new THREE.DirectionalLight(0xffffff, 1);
//     dirLight.position.set(5, 100, 5); // 光の向き
//     scene.add(dirLight);
//     let ambLight = new THREE.AmbientLight(0xffffff);
//     scene.add(ambLight);

//     // カメラコントローラーを作成
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.update();

//     // mesh 物体
//     sphere = new THREE.Mesh(
//       new THREE.SphereGeometry(0.5, 32, 16), // geometry 形状
//       new THREE.MeshLambertMaterial({ color: 0x8dc3ff }), // material 材質、色
//     );
//     sphere.position.set(0, 0, 0);
//     scene.add(sphere);
//     scene.add(allPlanes);
//     allPlanes.rotation.y = 2;

//     // makePlane(x,y,z,x,y,z)
//     makePlane(-100, 0, 0, 0, 0, 0);
//     makePlane(-100, 0, -100, 0, 0, 0);
//     makePlane(-100, 0, -200, 0, 0, 0);
//     makePlane(200, 0, -300, 0, Math.PI, 0);
//     makePlane(-100, 0, -200, Math.PI / 2, 0, 0);
//     makePlane(-100, -100, -200, Math.PI / 2, 0, 0);
//     makePlane(-100, 100, -200, Math.PI / 2, 0, 0);
//     makePlane(-100, 200, -200, Math.PI / 2, 0, 0);

//     // 7, アニメーションの開始
//     gsap.to(allPlanes.rotation, {
//       z: 10,
//       duration: 60,
//       repeat: -1,
//       delay: 0,
//     });
//     animate();
//     renderer.render(scene, camera); // レンダリング
//   };
//   /**
//    * @des 1マスの四角を作る
//    * @param {Number} pattern
//    * @returns mesh object
//    */
//   function makeMesh(pattern) {
//     let points = [];
//     const material = new THREE.LineBasicMaterial({ color: 0xffffff });
//     // 面の頂点セット
//     console.log(pattern);
//     switch (pattern) {
//       case 1:
//         for (let i = 0; i <= 100; i++) {
//           points.push(new THREE.Vector3(i, 0, 0));
//         }
//         for (let j = 0; j <= 100; j++) {
//           points.push(new THREE.Vector3(100, 0, 0 - j));
//         }
//         for (let k = 0; k <= 100; k++) {
//           points.push(new THREE.Vector3(100 - k, 0, -100));
//         }
//         for (let l = 0; l <= 100; l++) {
//           points.push(new THREE.Vector3(0, 0, -100 + l));
//         }
//         break;

//       case 2:
//         for (let j = 0; j <= 100; j++) {
//           points.push(new THREE.Vector3(100, 0, 0 - j));
//         }
//         for (let k = 0; k <= 100; k++) {
//           points.push(new THREE.Vector3(100 - k, 0, -100));
//         }
//         for (let l = 0; l <= 100; l++) {
//           points.push(new THREE.Vector3(0, 0, -100 + l));
//         }
//         for (let i = 0; i <= 100; i++) {
//           points.push(new THREE.Vector3(i, 0, 0));
//         }
//         break;

//       case 3:
//         for (let k = 0; k <= 100; k++) {
//           points.push(new THREE.Vector3(100 - k, 0, -100));
//         }
//         for (let l = 0; l <= 100; l++) {
//           points.push(new THREE.Vector3(0, 0, -100 + l));
//         }
//         for (let i = 0; i <= 100; i++) {
//           points.push(new THREE.Vector3(i, 0, 0));
//         }
//         for (let j = 0; j <= 100; j++) {
//           points.push(new THREE.Vector3(100, 0, 0 - j));
//         }
//         break;

//       case 4:
//         for (let l = 0; l <= 100; l++) {
//           points.push(new THREE.Vector3(0, 0, -100 + l));
//         }
//         for (let i = 0; i <= 100; i++) {
//           points.push(new THREE.Vector3(i, 0, 0));
//         }
//         for (let j = 0; j <= 100; j++) {
//           points.push(new THREE.Vector3(100, 0, 0 - j));
//         }
//         for (let k = 0; k <= 100; k++) {
//           points.push(new THREE.Vector3(100 - k, 0, -100));
//         }
//         break;
//     }

//     /**
//      * @des 3*3 の一面を作る
//      * @param {*} posx
//      * @param {*} posy
//      * @param {*} posz
//      * @param {*} rotx
//      * @param {*} roty
//      * @param {*} rotz
//      */
//     function makePlane(posx, posy, posz, rotx, roty, rotz) {
//       const wrap = new THREE.Group();

//       const mesh1 = makeMesh(1);
//       mesh1.position.x = 0;
//       mesh1.position.y = 0;
//       mesh1.rotation.x = Math.PI / 2;
//       wrap.add(mesh1);

//       const mesh2 = makeMesh(2);
//       mesh2.position.x = 0;
//       mesh2.position.y = 100;
//       mesh2.rotation.x = Math.PI / 2;
//       wrap.add(mesh2);

//       const mesh3 = makeMesh(3);
//       mesh3.position.x = 0;
//       mesh3.position.y = -100;
//       mesh3.rotation.x = Math.PI / 2;
//       wrap.add(mesh3);

//       const mesh4 = makeMesh(4);
//       mesh4.position.x = 100;
//       mesh4.position.y = 0;
//       mesh4.rotation.x = Math.PI / 2;
//       wrap.add(mesh4);

//       const mesh5 = makeMesh(3);
//       mesh5.position.x = 100;
//       mesh5.position.y = 100;
//       mesh5.rotation.x = Math.PI / 2;
//       wrap.add(mesh5);

//       const mesh6 = makeMesh(4);
//       mesh6.position.x = 100;
//       mesh6.position.y = -100;
//       mesh6.rotation.x = Math.PI / 2;
//       wrap.add(mesh6);

//       const mesh7 = makeMesh(2);
//       mesh7.position.x = 200;
//       mesh7.position.y = 0;
//       mesh7.rotation.x = Math.PI / 2;
//       wrap.add(mesh7);

//       const mesh8 = makeMesh(3);
//       mesh8.position.x = 200;
//       mesh8.position.y = 100;
//       mesh8.rotation.x = Math.PI / 2;
//       wrap.add(mesh8);

//       const mesh9 = makeMesh(1);
//       mesh9.position.x = 200;
//       mesh9.position.y = -100;
//       mesh9.rotation.x = Math.PI / 2;
//       wrap.add(mesh9);

//       wrap.position.x = posx;
//       wrap.position.y = posy;
//       wrap.position.z = posz;
//       wrap.rotation.x = rotx;
//       wrap.rotation.y = roty;
//       wrap.rotation.z = rotz;

//       allPlanes.add(wrap);
//       allPlanes.position.x = 150;
//       lineAni(wrap);
//     }

//     function lineAni(wrap) {
//       const ran = [];
//       for (let i = 0; i < 3; i++) {
//         ran.push(randomRange(0, 8));
//       }
//       const targets = wrap.children.filter((_, index) => {
//         if (ran.indexOf(index) > -1) {
//           return wrap.children[index];
//         }
//       });
//     }

//     // ジオメトリ生成
//     const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     const line = new THREE.Line(geometry, material);
//     line.geometry.setDrawRange(0, 0);
//     meshs.push(line);
//     scene.add(line);

//     const tween = {
//       a: 0,
//     };
//     gsap.to(tween, {
//       a: points.length,
//       duration: 4,
//       yoyo: true,
//       repeat: -1,
//       delay: randomRange(1, 20),
//       onUpdate: () => {
//         line.geometry.setDrawRange(clamp(tween.a / 2, 0, 200), tween.a);
//       },
//     });
//     return line;
//   }

//   let count = 0;
//   const myNumber = 400; //推移させたい数値の最大値(絶対値)
//   const division = 1000; //Date.nowをそのまま使うと周期が早すぎるので、希望の数値で割る
//   const digit = 1; //表示したい小数点以降の桁数
//   const startTime = Date.now() / division; //アニメーション開始時間
//   let elapsedTime = 0; //アニメーション開始時間からの経過時間を格納
//   let flag = true;
//   function animate() {
//     elapsedTime = Date.now() / division - startTime; //開始時間-関数内で現在時間を引けば経過時間が得られる
//     const period = Math.sin(elapsedTime).toFixed(digit) * myNumber;

//     if (flag) {
//       count++;
//       if (count > 500) {
//         flag = false;
//       }
//     } else {
//       count--;
//       if (count < 0) {
//         flag = true;
//       }
//     }

//     renderer.render(scene, camera); // レンダリング
//     requestAnimationFrame(animate); // 更新
//   }

//   function randomRange(min, max) {
//     return Math.floor(Math.random() * (max + 1 - min)) + min;
//   }

//   function clamp(x, min, max) {
//     return x < min ? min : x > max ? max : x;
//   }
// };
