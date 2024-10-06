const writePrompt = (str) => {
    const output = document.querySelector("[id^=question_]");
    let i = 0;
    let done = str.length;
    const writing = setInterval(()=>{
        output.innerHTML+=str[i];
        i++;
        if(i === done){
            clearInterval(writing);
            showOptions();
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
        options[i].style.cursor = "pointer";
        i++

        if(i === done) {
            clearInterval(writing);
        }
    }, 1000/2)
}

const saveResponse = () => {
    
}