function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function goto() {
  var url = {
    '1': 'https://rdpstudio.top',
    'home': 'https://rdpstudio.top'
  };
  link = getQueryVariable('p');
  if (link || url[link]){
    window.location = url[link];
  }else{
    document.getElementById('center').innerHTML = "抱歉，链接已失效。";
  }
}
