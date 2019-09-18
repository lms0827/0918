
dan = prompt("원하는 단",2);



for(var i=2; i<10; i++)
{
	document.writeln("<br><br>" + i + "단		<br><br>");
	for(var j =1; j<10; j++)
	{
		
		document.writeln(i + "x" + j + "="+ i*j +"<br>")
	}
	document.writeln("")
}