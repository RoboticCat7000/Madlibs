
var storyNum = 1;

function Story(){
    if(storyNum == 1){
    const noun1 = document.getElementById('noun1').value;
    const noun2 = document.getElementById('noun2').value;
    const noun3 = document.getElementById('noun3').value;
    const another = document.getElementById('another');
    const adj = document.getElementById('adj1').value;
    const output = document.getElementById('output');
        var story = `Once upon a time there was ${noun1}, ${noun2} and ${noun3}. They were homeless but one day, they found a house. They went in the house, it seemed abandoned. 
        ${noun2} had an idea, his idea was to live in the house. They agreed with his idea. They tried all the things the house, they were all perfect but the beds were not. 
        ${noun1}'s bed was so less ${adj}, ${noun2}'s bed was too ${adj} but ${noun3}'s bed was the right ${adj}. 
        Then ${noun3} agreed to make their beds perfect with things around the house,they accepted. After a while their beds were perfect. They lived happily ever after.`;
        output.innerHTML = story;
        another.classList.remove("hide");
    }
    if(storyNum == 2){
        const noun1 = document.getElementById('noun1').value;
        const noun2 = document.getElementById('noun2').value;
        const noun3 = document.getElementById('noun3').value;
        const another = document.getElementById('another');
        const adj = document.getElementById('adj1').value;
        const submit_btn = document.getElementById('submit_btn')
        const done_btn = document.getElementById('done_btn');
        const output = document.getElementById('output');
            var story =  `Once upon a time there were three friends, their names were ${noun1}, ${noun2} and ${noun3}. ${noun1} suggested to go on a vacation. Everyone was happy and agreed to go to the beach next Sunday. 
            The dress code for the vacation was you must wear somthing ${adj}. ${noun2} didn't have somthing ${adj} to wear then ${noun2} went for shopping with ${noun3} they got something so ${adj}.
            It was Sunday! They all went to beach wearing something ${adj}. They enjoyed playing with the ball in the beach. The police came chasing a thief who was wearing something ${adj}.
            The thief escaped from the beach while the police was suprised to see three people wearing something ${adj} and started questioning them. Then ${noun1} explained to them how they planned their vacation with theme ${adj}. The police was convinced with ${noun1}'s story and let them go and the police went ahead finding the thief. 
            The three friends ${noun1}, ${noun2} and ${noun3} laughed at how they got caught with the police with their dresscode ${adj}.`
            output.innerHTML = story;
            
        submit_btn.classList.add("hide");
        done_btn.classList.remove("hide");
        }



}
function nextStory(){
    document.getElementById("output").innerHTML = "";
    another.classList.add("hide");
    storyNum += 1;
    Story();
}
function Done(){
    window.location.assign("./done.html")
}