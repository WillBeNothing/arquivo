function Acessar() {
    const SenhaInput =  document.getElementById("Senha").value.toLowerCase();
    console.log(SenhaInput)
   
    if (SenhaInput.length == 0) {
       alert("You must to input something");
        console.log(SenhaInput);
    }

    const RealSenha = "seita";

    if (SenhaInput != RealSenha) {
        alert("The password is wrong!");
        const El  = document.getElementById("Text")
        El.parentNode.removeChild(El);
    } else if (SenhaInput == RealSenha) {
        const invisible = document.getElementById("invisible")
        const html = `
            <div id="Text">
                <h1>The Death of Elisa Pacheco Bittercourt<br />
                <span style="font-size:14px">A few&nbsp;months ago, the death of a girl called Elisa Pacheco, terrifying all the people around the city, but, what was more strage inthis case, was the fact that, there wasn&#39;t any evidence that could incriminate anyone. No clues how she died and who murdered a 16 yo girl.&nbsp;</span><br />
                &nbsp;</h1>

                <p>But I&#39;m here to turn this story. I know who murdered Elisa and how she died, but I&#39;m risking my life contacting you, so, I have to be discret. Find me, we have to talk better.&nbsp;</p>

                <p>&nbsp;</p>

                <p>&nbsp;</p>

                <p>by @?????</p>
            </div>`
        invisible.innerHTML = html
        
    }
   
    
    
}