#pragma strict

var room1:Transform;
var room2:Transform;
var room3:Transform;
var room4:Transform;
var room5:Transform;
var room6:Transform;
var room7:Transform;

var is1:TextMesh;
var is2:TextMesh;
var is3:TextMesh;
var is4:TextMesh;
var is5:TextMesh;
var is6:TextMesh;
var is7:TextMesh;

var litPos:Vector3;
var lit:Transform;

function Start () {

}

function Update () {
    if(is1.text=="0"&&is2.text=="1"&&is3.text=="0"){
        room1.position.x=100;
        room3.position.x=0;
    }
    if(is2.text=="0"&&is3.text=="1"&&is4.text=="0"){
        room2.position.x=-100;
        room4.position.x=0;
    }
    if(is3.text=="0"&&is4.text=="1"&&is5.text=="0"){
        room3.position.x=200;
        room5.position.x=0;
    }
    if(is4.text=="0"&&is5.text=="1"&&is6.text=="0"){
        room4.position.x=-200;
        room6.position.x=0;
    }
    if(is5.text=="0"&&is6.text=="1"&&is7.text=="0"){
        room5.position.x=300;
        room7.position.x=0;
    }
    if(is6.text=="0"&&is7.text=="1"){
        room6.position.x=-300;
        lit.position=litPos;
    }
}