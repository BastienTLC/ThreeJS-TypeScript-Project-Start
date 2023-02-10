import {Experience} from "../Experience";
import {Scene} from "three";
import * as THREE from 'three';
import {Resources} from "../Utils/Resources";

export class House {
    private experience: Experience;
    private scene: Scene;
    private resources: Resources;
    private house: any;
    private focusHouse: any;
    public blocCourbe = new THREE.Group();
    public HouseGroup = new THREE.Group();
    public catmulltab: THREE.CatmullRomCurve3[] = [];

    constructor() {
        this.experience = Experience.instance;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.house = this.resources.items["house"];
        this.focusHouse = this.house.scene;
        //this.flattenGroup();

        this.setDestroyModel();
        this.setDestroyModel();
        this.setDestroyModel();
        this.setDestroyModel();
        this.setDestroyModel();
        this.setDestroyModel();
        this.setModel();

        console.log(this.focusHouse);
        

    }

    setModel(){
        this.focusHouse.castShadow = true;
        this.scene.add(this.focusHouse);
    }

    setDestroyModel(){
        let cubeDispertion = 2;
        console.log(this.focusHouse.children.length);
        
        this.focusHouse.children.forEach((value:any) => {
            const initCubePosition = new THREE.Vector3(
                this.getRandomNumber(-50,50),
                this.getRandomNumber(-50,50),
                this.getRandomNumber(-50,50));
            const curve = new THREE.CatmullRomCurve3(
                [
                    initCubePosition,
                    new THREE.Vector3(value.position.x,value.position.y,value.position.z),
                ]
            )
            //console.log(value);
            this.catmulltab.push(curve)
            this.HouseGroup.add(value);
            
        });
        this.scene.add(this.HouseGroup);
        console.log(this.catmulltab.length);
        //this.scene.add(this.blocCourbe);

    }

    getRandomNumber(min:number, max:number) {
        return Math.random() * (max - min) + min;
    }


    flattenGroup() {
        const newChildren : any= [];
        this.focusHouse.children.forEach((child: any) => {
          if (child instanceof THREE.Group) {
            child.children.forEach(grandChild => {
              grandChild.rotation.x = Math.PI/2;
              newChildren.push(grandChild);
            });
            child.children = [];
            this.focusHouse.remove(child);
          } else {
            newChildren.push(child);
          }
        });
        this.focusHouse.children = newChildren;
      }


    resize(){
    }

    update(){
    }
}