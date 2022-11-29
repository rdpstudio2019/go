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
    'home': 'https://rdpstudio.top',
    '2': 'https://docs.apipost.cn/preview/a228b939ea361eb1/1c099d4a37410fa4?target_id=2f13fcbe-b1ba-4e20-aea8-42387995af77#001',
    'botdocs': 'https://docs.apipost.cn/preview/a228b939ea361eb1/1c099d4a37410fa4?target_id=2f13fcbe-b1ba-4e20-aea8-42387995af77#001',
    '3': 'https://qm.qq.com/cgi-bin/qm/qr?k=aMZN2ESEUIm_yVAFL94S-HlnH5PELq-q&jump_from=webapi&authKey=846xGkE9je2o1Oi6Zp8Qut4NvN5RB+7rCPTFBHDQXDyxMbiAt+DM4eY+USh153j9'
  };
  link = getQueryVariable('p');
  if (link || url[link]){
    window.location = url[link];
  }else{
    document.getElementById('center').innerHTML = "抱歉，链接已失效。";
  }
}
