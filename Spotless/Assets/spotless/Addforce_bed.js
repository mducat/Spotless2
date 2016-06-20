#pragma strict

function Start () {
    GetComponent.<Rigidbody>().AddForce(transform.right * 10);
}

function Update () {

}