var xmlhttp = new XMLHttpRequest();
var url = "./sachin.csv";


xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = xmlhttp.responseText;
        window.DATA = csvJSON(data) ;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  
  return result; //JavaScript object
  //return JSON.stringify(result); //JSON
}