let board = document.querySelector('body');

board.innerHTML = `
    <div class = 'container'>
      <h1>Virtual Keyboard</h1> 
    <textarea class="display"></textarea>
    <div class="keyboard">
        <div class="row">
            <span class ="backquote key" data-key="\`">\`</span>
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
            <span class ="backspace key" data-key="Backspace">backspace</span>
        </div>
        <div class="row">
            <span class="tab key" data-key="Tab">tab</span>
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
            <span class ="del key" data-key="Delete">del</span>
        </div>
        <div class="row">
            <span class ="capslock key" data-key="CapsLock">capslock</span>
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
            <span class="enter key" data-key="Enter">enter</span>
        </div>
        <div class="row">
            <span class="shift_left key" data-key="Shift">shift</span>
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
            <span class="arrow_up key" data-key="ArrowUp">arrow</span>
            <span class="shift_right key" data-key="Shift">shift</span>
        </div>
        <div class="row">
            <span class="ctrl_left key" data-key="Control">ctrl</span>
            <span class="meta_tag key">win</span>
            <span class="alt_left key" data-key="Alt">alt</span>
            <span class="space key" data-key=" ">
                Space
            </span>
            <span class="alt_right key" data-key="Alt">alt</span>
            <span class="arrow_left key" data-key="ArrowLeft">arrow</span>
            <span class="arrow_down key" data-key="ArrowDown">arrow</span>
            <span class="arrow_right key" data-key="ArrowRight">arrow</span>
            <span class="ctrl_right key" data-key="Control">ctrl</span>
        </div>
    </div>
</div>
    </div
`;

const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
const display = document.querySelector('.display');

document.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('data-key' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        
    }
});

document.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('data-key' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
    }
});

