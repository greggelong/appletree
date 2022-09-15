
let x,y
let ln = 160;
let shrink =0.70
let level =0
let maxlev = 15
let xs =[]
let ys = []
let a = 90

let da = 60
let dx,dy, nx,ny



function setup(){
    createCanvas(600,600)
    background(0)
    stroke(0,255,0)
    angleMode(DEGREES)
    y = height;
    x = width/2;
    tree()

    

}

function draw(){
    background(0)
    da = map(mouseX,0,600,10,280)
    tree()
}

function tree(){
    // start branching 
    singleBranch()

}

function singleBranch(){
    // calculate next point
     
    dx = ln * cos(a)
    dy = ln*  sin(a)
    
    nx = x+dx
    ny = y-dy
     
    // draw branch

    line(x,y,nx,ny)

    // save position
    xs[level] = x 
    ys[level] = y 
    

    // next branch
    x=nx
    y=ny
    level = level +1
    a=a+da
    ln=ln*shrink
    if (level < maxlev){
        singleBranch()
    }
    // and another branch
    a=a - da*2
    if(level < maxlev){
        singleBranch()
    }
    // pop back
    a=a+da
    ln=ln/shrink
    level =level -1
    x = xs[level]
    y = ys[level]


    
}


