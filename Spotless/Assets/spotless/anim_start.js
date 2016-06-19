#pragma strict

var porte:GameObject;
var time:float; 

function Start () {

}

function Update () {

}

function OnTriggerEnter() {
    porte.GetComponent(Animator).enabled=true;
    yield WaitForSeconds(time);
    porte.GetComponent(Animator).enabled=false;
    porte.GetComponent(Animator).Rebind();
}