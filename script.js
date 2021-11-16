const app = document.getElementById('app');

//Model
let item1, item2, item3, item4, item5, item6, item7, def = '_____';
item1 = item2 = item3 = item4 = item5 = item6 = item7 = def;

//View
function render(){
    app.innerHTML = `
    <div class="right-grid">
        <h1>Alt om oss!</h1>
        <button class="d-red" onclick="remove();">&#8630;</button>
    </div>
    <p>Hei! Vi er ${item1}! Denne gruppa består av tre ${item2} personer med forskjellige historier og liv. Vi har Anders, som er en ${item3} utvikler fra Larvik.
    Vi har Eric, som er en ${item4} gamer fra Bø, men han er egentlig ikke fra Bø.  Også  har vi Linn, hun er ${item5} formel 1 interessert fra Jessheim.
    Dette var en ${item6} historie om dette ${item7} teamet. THE END! </p>
   
    <button onclick="placement(this);">Team Treverk</button>
    <button onclick="placement(this);">gærne</button>
    <button onclick="placement(this);">selvlært</button>
    <button onclick="placement(this);">kul</button>
    <button onclick="placement(this);">litt</button>
    <button onclick="placement(this);">kort</button>
    <button onclick="placement(this);">fantastiske</button>
    <button onclick="placement(this);">Red Bull</button>
    <button onclick="placement(this);">Burn</button>
    <button onclick="placement(this);">Pokémon</button>
    <button onclick="placement(this);">søte</button>
    <button onclick="placement(this);">raske</button>
    <button onclick="placement(this);">rastløse</button>
    <button onclick="placement(this);">hjelpsomme</button>
    <button onclick="placement(this);">fæle</button>
    <button onclick="placement(this);">ubrukelig</button>
    <button onclick="placement(this);">teit</button>
    <button onclick="placement(this);">lang</button>
    <button onclick="placement(this);">smarte</button>
    <button onclick="placement(this);">morsom</button>
    <button onclick="placement(this);">stygg</button>
    <button onclick="placement(this);">store</button>
    <button onclick="placement(this);">kule</button>
    <button onclick="placement(this);">ødelagt</button>
    <button onclick="placement(this);">omtenksomme</button>
    <button onclick="placement(this);">ødelagte</button>
    `;
}
render();

//Controller
function placement(element) {
    if (item1 === def) {
        item1 = element.innerHTML;
    } else if (item2 === def) {
        item2 = element.innerHTML;
    } else if (item3 === def) {
        item3 = element.innerHTML;
    } else if (item4 === def) {
        item4 = element.innerHTML;
    } else if (item5 === def) {
        item5 = element.innerHTML;
    } else if (item6 === def) {
        item6 = element.innerHTML;
    } else if (item7 === def) {
        item7 = element.innerHTML;
    } else {
        console.warn('Story is already complete.');
    }
    render();
}

function remove() {
    if (item7 !== def) {
        item7 = def;
    } else if (item6 !== def) {
        item6 = def;
    } else if (item5 !== def) {
        item5 = def;
    } else if (item4 !== def) {
        item4 = def;
    } else if (item3 !== def) {
        item3 = def;
    } else if (item2 !== def) {
        item2 = def;
    } else if (item1 !== def) {
        item1 = def;
    } else {
        console.warn('Story is already cleared.');
    }
    render();
}