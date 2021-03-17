import React,{Component} from 'react';
import { Scene,PerspectiveCamera ,WebGLRenderer,BoxGeometry,MeshBasicMaterial,Mesh} from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Test extends Component {
    private scene:any;
    private camera:any;
    private renderer:any;
    private geometry:any;
    private material:any;
    private cube:any;
    private width:number = window.innerWidth;
    private height:number = window.innerHeight;

    componentWillMount(){
        this.createInit();
    }
    componentDidMount(){
        this.renderDom();
        setInterval(()=>{
            this.animate();
        },30)
    }
    // 创建场景
    private createInit =():void=>{
        this.scene = new Scene();
        this.camera= new PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 );
        this.renderer = new WebGLRenderer();
        this.geometry = new BoxGeometry( 1, 1, 1 );
	    this.material = new MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new Mesh( this.geometry, this.material );

        this.renderer.setSize( this.width, this.height );
		this.scene.add( this.cube );
		this.camera.position.z = 5;
    }

    // 动画
    private  animate =  ():void=> {
        // requestAnimationFrame( this.animate );
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render( this.scene, this.camera );
    };
    // 渲染
    private renderDom = ()=>{
        document.querySelector('#module-test')?.appendChild(this.renderer.domElement );
    }
    render(){
    return <div id="module-test"></div>
    }
}