let p;
let n;
let sum;


function setup() {
    p = [];
    n = 3;
    sum = createVector(0, 0);
    for (i = 0; i < n; i++) {
        p[i] = createVector(((i + 1) * 2) - 1, (i + 1) * 2)
        console.log(`p[${i}]`, p[i].x, p[i].y);
        sum.add(p[i]);
    }
    sum.sub(p[0]);
    console.log(`sum of p[1] to p[${n-1}]`, sum.x, sum.y);

    let avg = sum.div(n - 1);
    console.log(`avg of p[1] to p[${n-1}]`, avg.x, avg.y);

}