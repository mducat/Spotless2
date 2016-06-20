#pragma strict

var porteSound:AudioClip;
var pos2:Transform;
var t:boolean = false;
var murSet:GameObject;
var porte:GameObject;
var time:float; 
var is7:boolean;
var block:Transform;
var posLit:Vector3;
var pos:Vector3;
var lit:Rigidbody;

function Start () {

}

function Update () {

}

function OnTriggerEnter() {
    AudioSource.PlayClipAtPoint(porteSound, pos2.position);
    porte.GetComponent(Animator).enabled=true;
    yield WaitForSeconds(time);
    porte.GetComponent(Animator).enabled=false;
    porte.GetComponent(Animator).Rebind();
    if(is7&&!t){
        commetuveut();
        t = true;
    }
}

function commetuveut() {
    block.position=pos;
    lit.position=posLit;
    lit.AddForce(Vector3.forward*5);
    Destroy(murSet);
}