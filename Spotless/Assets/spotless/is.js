#pragma strict

var IsToFill:TextMesh;

function Start () {

}

function Update () {

}

function OnTriggerEnter() {
    IsToFill.text="1";
}

function OnTriggerExit() {
    IsToFill.text="0";
}