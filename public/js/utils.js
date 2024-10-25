const default_speed = 30;

const recordChoice = (options, q) => {
    options.forEach(option => {
        option.addEventListener("click", (e)=> {
            console.log(e.target.style.color);
            arr = JSON.parse(sessionStorage.getItem('logs'));
            console.log(arr)
            arr.push([q, e.target.text]);
            sessionStorage.setItem('logs', JSON.stringify(arr));
        })
    })
}

const writePrompt = (phrase, speed) => {
    let item = phrase.pop();
    const output = document.querySelector(`#${item.id}`);
    let i = 0;
    let done = item.str.length;
    const writing = setInterval(()=>{
        output.innerHTML+=item.str[i];
        i++;
        if(i === done){
            clearInterval(writing);
            if(phrase.length != 0) {
                item.func(phrase, speed)
            } else {
                showOptions();
            }
        }
    }, 1000/speed);
}

const slowWrite = (phrase, speed) => {
    let item = phrase.pop();
    const output = document.querySelector(`#${item.id}`);
    let i = 0;
    let done = item.str.length;
    const writing = setInterval(()=>{
        output.innerHTML+=item.str[i];
        i++;
        if(i === done){
            clearInterval(writing);
            if(phrase.length != 0) {
                item.func(phrase, speed)
            } else {
                showOptions();
            }
        }
    }, 1000/5);
}

const analyzing = (phrase, speed) => {
    let item = phrase.pop();
    const output = document.querySelector(`#${item.id}`);
    let i = 0;

    const writing = setInterval(()=>{
        output.innerHTML = `Analyzing: ${i}%`

        if(output.innerHTML === 'Analyzing: 100%'){
            clearInterval(writing);
            item.func(phrase, speed)
        }
        i++;
    }, 50/speed);
}

const showOptions = () => {
    const optionContainer = document.querySelector("#options");
    const options = optionContainer.children;
    
    let done = options.length;
    let i = 0;

    const writing = setInterval(()=> {
        options[i].style.opacity = 1;
        // options[i].style.cursor = "pointer";
        i++

        if(i === done) {
            clearInterval(writing);
        }
    }, 1000/2)
}

const saveResponse = () => {
    
}