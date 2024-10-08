async function async_writePrompt(str, id) {
    await writePrompt(str, id);
    await writePrompt(str, id);
}

async function writePrompt(phrase) {
    let item = phrase.pop();
    console.log(item);
    const output = document.querySelector(`#${item.id}`);
    let i = 0;
    let done = item.str.length;
    const writing = setInterval(()=>{
        output.innerHTML+=item.str[i];
        i++;
        if(i === done){
            clearInterval(writing);
            if(phrase.length != 0) {
                console.log(phrase, phrase.length);
                item.func(phrase)
            } else {
                showOptions();
            }
        }
    }, 1000/15);
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