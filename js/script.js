// Input
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const divSpeech = document.getElementById(".speech");

// Itme
const chineseText = document.querySelector(".chinese-text");
const pinyinText = document.querySelector(".pinyin-text");
const khmerText = document.querySelector(".khmer-text");
const items = document.querySelector(".items");

// Example Demo
const demoWord = document.querySelector(".word");
const demoExample = document.querySelector(".example");
const chineseTextEx = document.querySelector(".chinese-text-ex");
const pinyinTextEx = document.querySelector(".pinyin-text-ex");
const khmerTextEx = document.querySelector(".khmer-text-ex");




// Sort dictionaryData By Length
dictionaryData.sort(function(a, b) {
    if(a.pw.toLowerCase().length < b.pw.toLowerCase().length) {
        return -1;
    }
    if(a.pw.toLowerCase().length > b.pw.toLowerCase().length) {
        return 1;
    }
    return 0;
});

// Sort dictionaryData By A-Z
dictionaryData.sort(function(a, b) {
    if(a.pw.toLowerCase() < b.pw.toLowerCase()) {
        return -1;
    }
    if(a.pw.toLowerCase() > b.pw.toLowerCase()) {
        return 1;
    }
    return 0;
});



// Loop Chinese Item from Dictionary Lists to Lists Item **Defualt**
const loopChineseItem = function() {
    dictionaryData.forEach(function(data) {
        let emtyArr = "";
        let cw = data.cw;
        emtyArr = `<div class="item">${cw}</div>`
        // console.log(emtyArr);
        items.innerHTML += emtyArr;
    });
};
loopChineseItem();



// Loop Chinese Item from Dictionary Lists to Lists Item **went User Search**
searchInput.addEventListener('keyup', () => {
    let arr = []; // creat emty array
    let searchedValue = searchInput.value.toLowerCase();
    // returning all item from array
    arr = dictionaryData.filter(data => {
        return data.cw.toLowerCase().startsWith(searchedValue);
        // return data.ch.toLowerCase().includes(searchedValue);
    }).map(data => `<div class="item">${data.cw}</div>`).join('');
    items.innerHTML = arr;
    
    // Add Click Event To Iten
    const item = document.querySelectorAll(".item");
    item.forEach(function(e) {
        e.addEventListener('click', function(o) {
            let itemClickedText = e.textContent;
            chineseText.innerHTML = itemClickedText;
            // went item add event click push py$kh to demo
            for(let i = 0; i<dictionaryData.length; i++) {
                if (dictionaryData[i].cw == itemClickedText) {
                    // In Demo Word
                    pinyinText.innerHTML = `[${dictionaryData[i].pw}]`;
                    khmerText.innerHTML = dictionaryData[i].kw;

                    // In Demo Example
                    chineseTextEx.innerHTML = dictionaryData[i].ec;
                    // pinyinTextEx.innerHTML = "";
                    pinyinTextEx.innerHTML = dictionaryData[i].ep.toLowerCase();
                    khmerTextEx.innerHTML = dictionaryData[i].ek;
                };
            };
            demoWord.classList.add("demo-active");
            demoExample.classList.add("demo-active");
        });
    });
});



// Add Click Event To Iten
const item = document.querySelectorAll(".item");
item.forEach(function(e) {
    e.addEventListener('click', function(o) {
        let itemClickedText = e.textContent;
        chineseText.innerHTML = itemClickedText;


        // went item add event click push py$kh to demo
        for(let i = 0; i<dictionaryData.length; i++) {
            if (dictionaryData[i].cw == itemClickedText) {
                
                // In Demo Word
                pinyinText.innerHTML = `[${dictionaryData[i].pw}]`;
                khmerText.innerHTML = dictionaryData[i].kw;

                // In Demo Example
                chineseTextEx.innerHTML = dictionaryData[i].ec;
                // pinyinTextEx.innerHTML = "";
                pinyinTextEx.innerHTML = dictionaryData[i].ep.toLowerCase();
                khmerTextEx.innerHTML = dictionaryData[i].ek;
            };
        };
        demoWord.classList.add("demo-active");
        demoExample.classList.add("demo-active");
    });
});

