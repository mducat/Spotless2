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

var bullet : GameObject;
var spawnPoint1:Transform;
var spawnPoint2:Transform;
var spawnPoint3:Transform;
var spawnPoint4:Transform;
var spawnPoint5:Transform;
var spawnPoint6:Transform;
var spawnPoint7:Transform;
var spawnPoint8:Transform;

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
    var pel = Instantiate(bullet, spawnPoint1.position, spawnPoint1.rotation);
    pel.GetComponent.<Rigidbody>().AddForce(transform.right * 50);
    pel = Instantiate(bullet, spawnPoint2.position, spawnPoint2.rotation);
    pel.GetComponent.<Rigidbody>().AddForce(transform.right * 50);
    pel = Instantiate(bullet, spawnPoint3.position, spawnPoint3.rotation);
    pel.GetComponent.<Rigidbody>().AddForce(transform.right * 50);
    pel = Instantiate(bullet, spawnPoint4.position, spawnPoint4.rotation);
    pel.GetComponent.<Rigidbody>().AddForce(transform.right * 50);
    pel = Instantiate(bullet, spawnPoint5.position, spawnPoint5.rotation);
    pel.GetComponent.<Rigidbody>().AddForce(transform.right * 50);
    pel = Instantiate(bullet, spawnPoint6.position, spawnPoint6.rotation);
    pel.GetComponent.<Rigidbody>().AddForce(transform.right * 50);
    pel = Instantiate(bullet, spawnPoint7.position, spawnPoint7.rotation);
    pel.GetComponent.<Rigidbody>().AddForce(transform.right * 50);
    pel = Instantiate(bullet, spawnPoint8.position, spawnPoint8.rotation);
    pel.GetComponent.<Rigidbody>().AddForce(transform.right * 50);
}