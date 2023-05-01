let board = document.querySelector('body');

board.innerHTML = `
    <div class = 'container'>
      <h1>Virtual Keyboard</h1>
      <div class="keyboard_wrapper">
    <pre class="display"></pre>
    <div class="key">
        <div class="row">
            <span class ="backquote">\`</span>
            <span data-key="1">1</span>
            <span data-key="2">2</span>
            <span data-key="3">3</span>
            <span data-key="4">4</span>
            <span data-key="5">5</span>
            <span data-key="6">6</span>
            <span data-key="7">7</span>
            <span data-key="8">8</span>
            <span data-key="9">9</span>
            <span data-key="0">0</span>
            <span data-key="-">-</span>
            <span data-key="=">=</span>
            <span class ="backspace">backspace</span>
        </div>
        <div class="row">
            <span class="tab">tab</span>
            <span data-key="q">q</span>
            <span data-key="w">w</span>
            <span data-key="e">e</span>
            <span data-key="r">r</span>
            <span data-key="t">t</span>
            <span data-key="y">y</span>
            <span data-key="u">u</span>
            <span data-key="i">i</span>
            <span data-key="o">o</span>
            <span data-key="p">p</span>
            <span data-key="[">[</span>
            <span data-key="]">]</span>
            <span class ="del">del</span>
        </div>
        <div class="row">
            <span class ="capslock">capslock</span>
            <span data-key="a">a</span>
            <span data-key="s">s</span>
            <span data-key="d">d</span>
            <span data-key="f">f</span>
            <span data-key="g">g</span>
            <span data-key="h">h</span>
            <span data-key="j">j</span>
            <span data-key="k">k</span>
            <span data-key="l">l</span>
            <span data-key=";">;</span>
            <span data-key="'">'</span>
            <span data-key="\\">\\</span>
            <span class="enter">enter</span>
        </div>
        <div class="row">
            <span class="shift_left">shift</span>
            <span data-key="z">z</span>
            <span data-key="x">x</span>
            <span data-key="c">c</span>
            <span data-key="v">v</span>
            <span data-key="b">b</span>
            <span data-key="n">n</span>
            <span data-key="m">m</span>
            <span data-key=",">,</span>
            <span data-key=".">.</span>
            <span data-key="/">/</span>
            <span class="arrow_up">arrow_up</span>
            <span class="shift_right">shift</span>
        </div>
        <div class="row">
            <span class="ctrl_left">ctrl</span>
            <span class="meta_tag">win</span>
            <span class="alt_left">alt</span>
            <span class="space" data-key=" ">
                Space
            </span>
            <span class="alt_right">alt</span>
            <span class="arrow_left">left</span>
            <span class="arrow_down">arrow_down</span>
            <span class="arrow_right">arrow_right</span>
            <span class="shift_right">shift</span>
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