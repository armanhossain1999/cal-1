document.getElementById("b").addEventListener("click",()=>
		{
			let n1 = Number(document.getElementById("n1").value);
			let n2 = Number(document.getElementById("n2").value);
			let op = document.getElementById("op").value;
			if(op=='+')
				document.getElementById("r").innerHTML=n1+n2;
			else if(op=='-')
				document.getElementById("r").innerHTML=n1-n2;
			else if(op=='*')
				document.getElementById("r").innerHTML=n1*n2;
			else if(op=='/')
				document.getElementById("r").innerHTML=n1/n2;
			else 
				document.getElementById("r").innerHTML="";

		}, false);
     