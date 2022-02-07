
function onInit() {
    console.log('Init!');
    $elImg = $('.info img')
    $elImg.on('click', ()=>{
        $elImg.addClass('highlite')
    })
}

// function $(elOrSelector) {
//     const el = (typeof elOrSelector === 'string') ?
//         document.querySelector(elOrSelector) : elOrSelector

//     const $el = {
//         // Getter / Setter
//         text(txt) {
//             if (txt) el.innerText = txt;
//             return el.innerText
//         },
//         addClass(className) {
//             if (!el) return
//             el.classList.add(className)
//             return $el
//         },
//         removeClass(className) {
//             el.classList.remove(className)
//             return $el
//         },
//         // Getter / Setter:
//         attr(name, val=null) {
//             if (val) el.setAttribute(name, val)
//             return el.getAttribute(name)
//         },
//         data(name, val=null) {
//             if (val) el.dataset[name] = val
//             return el.dataset[name]
//         },
//         hide() {
//             el.classList.add('hide')
//         },
//         show() {
//             el.classList.remove('hide')
//         },
//         // Getter / Setter
//         val(newVal=null) {
//             console.dir(el)
//             if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(el.nodeName)) return;
//             if (newVal) el.value = newVal
//             return el.value
//         },
//         find(selector) {
//             const childEl = el.querySelector(selector)
//             return childEl
//         },
//         on(eventName, func) {
//             if (!el) return
//             el.addEventListener(eventName, func)
//         }
//     }

//     return $el;
// }


function onDrink(ev, elBtn) {
    console.log('Drinking!', ev, elBtn)
    var $elTitle = $('h2')

    
    $elTitle.text('Hello There!')
    // elTitle.innerText += '!'

    const $elBtn = $(elBtn)

    // Chaining:
    $elBtn.addClass('drank').addClass('highlite')
    
    var $elInfo = $('.info')
    const elImg = $elInfo.find('img')
    const $elImg = $(elImg)
    console.log('elImg', elImg, $elImg);



    // elInfo.hidden = true
    $elInfo.addClass('hide')
    setTimeout(() => {
        // elInfo.hidden = false
        $elInfo.removeClass('hide')
        $elBtn.removeClass('drank')
    }, 1500)
    
    // console.log('el.dataset.puk', elBtn.dataset.puk)
    console.log('el.dataset.puk', $elBtn.data('puk'))
    

    // const elLink = document.querySelector('a')
    // elLink.href = 'http://bing.com'
    // elLink.title = 'Use Bing'
    const $elLink = $('a')
    alert($elLink.attr('title'))


    $elLink.attr('href', 'http://bing.com')
    $elLink.attr('title', 'Use Bing')
}









// Side story about addEventListener
// var elBtn = document.querySelector('.btn-drink')
// elBtn.onclick = onDrink;
// elBtn.addEventListener('click', function(ev){
//     console.log('Had a drink', ev, this);
//     elBtn.removeEventListener('click', onDrink)
// })
