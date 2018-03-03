var getinfo = document.getElementById('char-info');
var bttn = document.getElementById('btn');
document.getElementById('myInput').style.display='none';
bttn.addEventListener('click',function(){

												var responseHTTP = new XMLHttpRequest();
												responseHTTP.open('GET','objects.json');
												responseHTTP.onload = function(){
																					var data = JSON.parse(responseHTTP.responseText);
																					console.log(data);
																					renderHTML(data);
																				};
												responseHTTP.send();
										});
var i=0;

function renderHTML(data)
{
	var htmlString = "";

	for(i=0;i<data.length;i++)
	{
		htmlString += "<tr><td>" + data[i].Name + "</td><td>" + data[i].House + "</td><td>"+ data[i].Status  + "</td></tr>";
	}
	if(i==data.length)
	{
		document.getElementById("num").innerHTML="Total Entries : " + i;		
		i++;
		document.getElementById('btn').style.display='none';
		document.getElementById('myInput').style.display='block';

	}
	getinfo.insertAdjacentHTML('beforeend' , htmlString);
}

function myFunction() 
{
  // Declare variables
  var input, filter, table, tr, td, i, count=10;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("char-info");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) 
  {
		td = tr[i].getElementsByTagName("td")[0];
    	if (td) 
    	{
      		if (td.innerHTML.toUpperCase().indexOf(filter) > -1) 
      		{
        		tr[i].style.display = "";
      		} 
      		else 
      		{
				td = tr[i].getElementsByTagName("td")[1];
    			if (td) 
    			{
      				if (td.innerHTML.toUpperCase().indexOf(filter) > -1) 
      				{
        				tr[i].style.display = "";
      				} 
      				else 
      				{
						td = tr[i].getElementsByTagName("td")[2];
    					if (td) 
    					{
      						if (td.innerHTML.toUpperCase().indexOf(filter) > -1) 
      						{
        						tr[i].style.display = "";
      						} 
      						else 
      						{
        						tr[i].style.display = "none";
								count--;
							}
    					}
					}
				}
			}
		}
	}
	document.getElementById("num").innerHTML="Entries Found : " + count;
}