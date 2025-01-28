function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Solving the equations</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
       
        <h5>Solve all four equations simultaneously</h5>

        <br>

        <div id='bs-inp-div' style='text-align: center; font-size: 30px;'>
            <span style='font-size: 30px;'>T1</span> = 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a21-inp' > <span id='a21-val-sp'></span>, T2 = 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a22-inp' > <span id='a22-val-sp'></span>, T3 =
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a23-inp' > <span id='a23-val-sp'></span>, T4 =  
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a24-inp' > <span id='a24-val-sp'></span>
        </div>

        <br>
    

        <div style='text-align: center;'><button class='btn btn-info std-btn' id='temp-btn-equation2' onclick='verify_t_vals();' >Verify</button></div>
        

    </div>

    `;
    maindiv.innerHTML += text;
    show_step('tb2-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations2();
}
function internal_calculations2() {
    for (let i = 0; i < 100; i++) {
        t1 = 0.25 * (left1 + t2 + t3 + bottom1);
        t2 = 0.25 * (t1 + t1 + t4 + bottom1);
        t3 = 0.25 * (left1 + t4 + top1 + t1);
        t4 = 0.25 * (t3 + t3 + top1 + t2);
    }
    console.log(`t1, t2, t3, t4 => `, t1, t2, t3, t4);
}
function verify_t_vals() {
    let btn = document.getElementById('temp-btn-equation2');
    console.log(`t1, t2, t3, t4 => `, t1, t2, t3, t4);
    let inp1 = document.getElementById('a21-inp');
    let sp1 = document.getElementById('a21-val-sp');
    let inp2 = document.getElementById('a22-inp');
    let sp2 = document.getElementById('a22-val-sp');
    let inp3 = document.getElementById('a23-inp');
    let sp3 = document.getElementById('a23-val-sp');
    let inp4 = document.getElementById('a24-inp');
    let sp4 = document.getElementById('a24-val-sp');
    if (!verify_values(parseFloat(inp1.value), t1)) {
        alert('T1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), t2)) {
        alert('T2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), t3)) {
        alert('T3 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp4.value), t4)) {
        alert('T4 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${t1.toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${t2.toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${t3.toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${t4.toFixed(4)}`;
    alert('Experiment Completed !!');
}
activity1();
//# sourceMappingURL=activity2.js.map