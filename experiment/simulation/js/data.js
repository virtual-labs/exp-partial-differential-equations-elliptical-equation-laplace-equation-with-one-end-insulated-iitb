// trapazium ----------------------------------------------------------------
let mat_c = [
    [
        7.2038
    ],
    [
        -14.165
    ],
    [
        71.985
    ]
];
let mat_a = [
    [
        96.8874,
        -4.023,
        9.4841
    ],
    [
        -35.4831,
        -92.0509,
        4.4445
    ],
    [
        4.0625,
        55.0972,
        -51.2556
    ]
];
//3 x 1 random numbers in [-100, 100]
function initialize_mat_c() {
    mat_c = [];
    let num1 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num2 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num3 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    mat_c.push([num1]);
    mat_c.push([num2]);
    mat_c.push([num3]);
}
//3 x 3 random numbers in [-100, 100]
function initialize_mat_a() {
    mat_a = [];
    for (let i = 0; i < 3; i++) {
        let num1 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num2 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num3 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        mat_a.push([num1, num2, num3]);
    }
    if (Math.abs(mat_a[0][0]) < 25) {
        mat_a[0][0] = 25;
    }
    mat_a[0][0] = mat_a[0][0] * 4;
}
initialize_mat_c();
initialize_mat_a();
let x_vals = [];
let y_vals = [];
let x = Math.round(Math.random() * 4 + 1);
console.log(`x => ${x}`);
let tb_data = [];
let I_val = 0;
// exp data
let top1 = 0;
let right1 = 0;
let bottom1 = 0;
let left1 = 0;
let t1 = 50;
let t2 = 50;
let t3 = 50;
let t4 = 50;
function initialize_boundary() {
    let vals = [];
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    top1 = vals[0];
    right1 = vals[1];
    bottom1 = vals[2];
    left1 = vals[3];
}
//# sourceMappingURL=data.js.map