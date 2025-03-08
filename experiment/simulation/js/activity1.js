let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Elliptical Equation - Laplace Equation with one end insulated</h5>
        <p>Learning Objective: Define T1, T2, T3 and T4 </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
    initialize_boundary();
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <h3>Laplace Equation with one side insulated: </h3>
        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-size: 24px;'>$$ \\frac{\\partial^2 T}{\\partial x^2} \\ + \\ \\frac{\\partial^2 T}{\\partial y^2} \\ = \\ 0 $$</span></p>
        </div>

    
        <br>
        <h5>Find the T1, T2, T3 and T4. Boundary conditions are shown in the figure: </h5>
        
        <div id='diagram' style='text-align: center; display: flex; direction: column; justify-content: center; align-items: center;'>

            <div style='text-align: right; height: inherit;'>
                <div>${left1}</div>
                <br>
                <br>
                <br>
                <br>
                <br>
                <div>${left1}</div>
            </div>


            <div style='width: 320px; position: relative;'>
                <div class='row' style='padding-left: 95px; padding-right: 40px;'>
                    <div class='col-6' style='text-align: center;'>${top1}</div>
                    <div class='col-6' style='text-align: center;'>${top1}</div>
                </div>

                <span style="position: relative; top: 130px; right: 12px;">T3</span>
                <span style="position: relative; top: 260px; right: 33px;">T1</span>


                <span style="position: relative; top: 130px; left: 70px;">T4</span>
                <span style="position: relative; top: 260px; left: 45px;">T2</span>

                <img src="./images/grid.png" alt="could not load" style='width: 100%;'>
                <div class='row' style='padding-left: 95px; padding-right: 40px;'>
                    <div class='col-6' style='text-align: center;'>${bottom1}</div>
                    <div class='col-6' style='text-align: center;'>${bottom1}</div>
                </div>
            </div> 

        </div>
        <br>


        <p style='font-size: 24px;'>Given that l = 3 and w = 3. Take h = 1 and k = 1 where h = &Delta;x and k = &Delta;y.<p>

        <div style='text-align: center; font-size: 24px;'>
        <p style='text-align: center;'>At insulated end: </p>
            <p style='text-align: center;'><span style='font-size: 24px;'>$$ \\frac{\\partial T}{ \\partial x} \\ = \\ 0 $$</span></p>
        </div>

        <div style='text-align: center; font-size: 24px;'>
        <p style='text-align: center;'>By central difference scheme: </p>
            <p style='text-align: center;'><span style='font-size: 24px;'>$$ \\frac{T_{i, j+1} - T_{i, j-1}}{h} \\ = \\ 0 $$</span></p>
            <p style='text-align: center;'><span style='font-size: 24px;'>$$ T_{i, j+1} \\ = \\ T_{i, j-1} $$</span></p>
        </div>

        <div style='text-align: center;'> <img src="./images/d2.png" alt="could not load" style='margin: auto;'></div>

        <br><br>

        <h5>Using finite difference formulation enter values/variables for following equations: </h5>
        <p style='color: blue;' >Note: Enter the values as "T1" or "T2" or "T3" or "T4" accordingly wherever you need to enter varible names. Enter numbers upto two decimal places only.</p>
        <p style='text-align: center;'>
            <span style='font-size: 30px;'>
                $$ T_{i,j} = \\frac{1}{4} * (T_{i-1,j} + T_{i+1,j} + T_{i,j+1} + T_{i,j-1}) $$
            </span>
        </p>

        <p style='text-align: center;'>
            <span style='font-size: 30px;'>
                $$ T_{i,j} = 0.25 * (T_{i-1,j} + T_{i+1,j} + T_{i,j+1} + T_{i,j-1}) $$
            </span>
        </p>

        <br>


        <div id='bs-inp-div' style='text-align: center; font-size: 30px;'>
            <span style='font-size: 30px;'>T1</span> = 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq11-inp' > <span id='eq11-val-sp'></span>(
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq12-inp' > <span id='eq12-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq13-inp' > <span id='eq13-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq14-inp' > <span id='eq14-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq15-inp' ><span id='eq15-val-sp'></span>) 
        </div>

        <div id='bs-inp-div' style='text-align: center; font-size: 30px;'>
            <span style='font-size: 30px;'>T2</span> = 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq21-inp' > <span id='eq21-val-sp'></span>(
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq22-inp' > <span id='eq22-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq23-inp' > <span id='eq23-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq24-inp' > <span id='eq24-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq25-inp' ><span id='eq25-val-sp'></span>) 
        </div>


        <div id='bs-inp-div' style='text-align: center; font-size: 30px;'>
            <span style='font-size: 30px;'>T3</span> = 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq31-inp' > <span id='eq31-val-sp'></span>(
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq32-inp' > <span id='eq32-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq33-inp' > <span id='eq33-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq34-inp' > <span id='eq34-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq35-inp' ><span id='eq35-val-sp'></span>) 
        </div>

        <div id='bs-inp-div' style='text-align: center; font-size: 30px;'>
            <span style='font-size: 30px;'>T4</span> = 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq41-inp' > <span id='eq41-val-sp'></span>(
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq42-inp' > <span id='eq42-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq43-inp' > <span id='eq43-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq44-inp' > <span id='eq44-val-sp'></span> + 
                <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq45-inp' ><span id='eq45-val-sp'></span>) 
        </div>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' id='temp-btn-equation' onclick='verify_equations();' >Verify</button></div>
        

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_equations() {
    let btn = document.getElementById('temp-btn-equation');
    console.log(`first equation => `, 0.25, left1, "T2", "T3", bottom1);
    console.log(`second equation => `, 0.25, "T1", "T1", "T4", bottom1);
    console.log(`second equation => `, 0.25, left1, "T4", top1, "T1");
    console.log(`second equation => `, 0.25, "T3", "T3", top1, "T2");
    let answers = [
        [0.25, left1, "T2", "T3", bottom1],
        [0.25, "T1", "T1", "T4", bottom1],
        [0.25, left1, "T4", top1, "T1"],
        [0.25, "T3", "T3", top1, "T2"]
    ];
    console.log(answers);
    let inp_array = [];
    let sp_array = [];
    let inp;
    let sp;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            inp = document.getElementById(`eq${i + 1}${j + 1}-inp`);
            sp = document.getElementById(`eq${i + 1}${j + 1}-val-sp`);
            // if((typeof answers[i][j] == 'number') &&  !isNaN(parseFloat(inp.value))) {
            //     if(answers[i][j] != eval(inp.value)) {
            //         alert(`input value number ${j+1} for equation ${i+1} is incorrect, calculate again.`);
            //     return;
            //     }
            // } else 
            if (answers[i][j] != inp.value) {
                alert(`input value number ${j + 1} for equation ${i + 1} is incorrect, calculate again.`);
                return;
            }
            inp_array.push(document.getElementById(`eq${i + 1}${j + 1}-inp`));
            sp_array.push(document.getElementById(`eq${i + 1}${j + 1}-val-sp`));
        }
    }
    console.log(inp_array);
    console.log(sp_array);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            inp_array[i * 5 + j].remove();
            sp_array[i * 5 + j].innerText = `${answers[i][j]}`;
        }
    }
    btn.remove();
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map