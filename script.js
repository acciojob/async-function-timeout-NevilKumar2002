//your JS code here. If required.
let text=document.getElementById("text");
let number=document.getElementById("number");
let delay=document.getElementById("delay");
let output=document.getElementById("output");
let form=document.getElementsByTagName("form");
let button=document.getElementById("btn");

async function delayfunction()
	{
	let x= await new Promise (()=>{
		setTimeout((resolve)=>{
			output.innerText=text.value;
		},delay)
	})
		return x;




		
	}
delayfunction();
button.addEventListener("click", delayfunction);

// async function delay()
// 	{
// 		let x= await new Promise (()=>{
// 			setTimeout((resolve)=>{
				
// 				output.innerText=text.value;

				
// 			},delay1)
// 		})
// 		return x;
			
// 		})
// 	}
// delay();
// btn.addEventListener('click', delay);

// output.style.display=text.value;
// output.style.display=number.value;

