let board = document.querySelector('body');

board.innerHTML = `
    <div class = 'container'>
      <h1>Virtual Keyboard</h1> 
    <pre class="display"></pre>
    <div class="keyboard">
        <div class="row">
            <span class ="backquote key">\`</span>
            <span class = "key" data-key="1">1</span>
            <span class = "key" data-key="2">2</span>
            <span class = "key" data-key="3">3</span>
            <span class = "key" data-key="4">4</span>
            <span class = "key" data-key="5">5</span>
            <span class = "key" data-key="6">6</span>
            <span class = "key" data-key="7">7</span>
            <span class = "key" data-key="8">8</span>
            <span class = "key" data-key="9">9</span>
            <span class = "key" data-key="0">0</span>
            <span class = "key" data-key="-">-</span>
            <span class = "key" data-key="=">=</span>
            <span class ="backspace key">backspace</span>
        </div>
        <div class="row">
            <span class="tab key">tab</span>
            <span  class = "key" data-key="q">q</span>
            <span  class = "key" data-key="w">w</span>
            <span  class = "key" data-key="e">e</span>
            <span  class = "key" data-key="r">r</span>
            <span  class = "key" data-key="t">t</span>
            <span  class = "key" data-key="y">y</span>
            <span  class = "key" data-key="u">u</span>
            <span  class = "key" data-key="i">i</span>
            <span  class = "key" data-key="o">o</span>
            <span  class = "key" data-key="p">p</span>
            <span  class = "key" data-key="[">[</span>
            <span  class = "key" data-key="]">]</span>
            <span class ="del key">del</span>
        </div>
        <div class="row">
            <span class ="capslock key">capslock</span>
            <span class = "key" data-key="a">a</span>
            <span class = "key" data-key="s">s</span>
            <span class = "key" data-key="d">d</span>
            <span class = "key" data-key="f">f</span>
            <span class = "key" data-key="g">g</span>
            <span class = "key" data-key="h">h</span>
            <span class = "key" data-key="j">j</span>
            <span class = "key" data-key="k">k</span>
            <span class = "key" data-key="l">l</span>
            <span class = "key" data-key=";">;</span>
            <span class = "key" data-key="'">'</span>
            <span class = "key" data-key="\\">\\</span>
            <span class="enter key">enter</span>
        </div>
        <div class="row">
            <span class="shift_left key">shift</span>
            <span class = "key" data-key="z">z</span>
            <span class = "key" data-key="x">x</span>
            <span class = "key" data-key="c">c</span>
            <span class = "key" data-key="v">v</span>
            <span class = "key" data-key="b">b</span>
            <span class = "key" data-key="n">n</span>
            <span class = "key" data-key="m">m</span>
            <span class = "key" data-key=",">,</span>
            <span class = "key" data-key=".">.</span>
            <span class = "key" data-key="/">/</span>
            <span class="arrow_up key">arrow</span>
            <span class="shift_right key">shift</span>
        </div>
        <div class="row">
            <span class="ctrl_left key">ctrl</span>
            <span class="meta_tag key">win</span>
            <span class="alt_left key">alt</span>
            <span class="space key" data-key=" ">
                Space
            </span>
            <span class="alt_right key">alt</span>
            <span class="arrow_left key">arrow</span>
            <span class="arrow_down key">arrow</span>
            <span class="arrow_right key">arrow</span>
            <span class="ctrl_right key">ctrl</span>
        </div>
    </div>
</div>
    </div
`;

const keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 13, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 18, 32, 18, 17, 37, 38, 40, 39];

// document.onkeydown = function(event) {
//     // console.log(event);
//     keyboard.push(event.keyCode);
//     console.log(keyboard);
// }

function init() {
    let out = '';

    for (let i = 0; i < keyboard.length; i++) {
        out += '<div class = "key">' + String.fromCharCode(keyboard[i]) + '</div>';
    }

    document.querySelector('#keyboard').innerHTML = out;
}

init();