function process(name,level) {

   lastActions = document.main.lastAction.value;

   j = 0;
   k = lastActions.length;
   i = 0;
   actions = Array();
   actions = lastActions.split("|");
   actions[level] = name;
   
   newLastActions = "";

   for(i=0;i<(level+1);i++) {
       newLastActions = newLastActions + (actions[i]+"|");
   }

   document.main.lastAction.value = newLastActions;

   clearcookies();
 
   try { 
     syncTextarea();  
   } catch(Exception) {

   }
   document.main.submit();
}
function clearAll() {
   //document.main.lastAction.value='';
}

function setcookie(name,value){
   cookiestring=name+"="+escape(value);
   document.cookie=cookiestring;
}

function selection(type,id) {
   document.main.option.value = id;
   process(type,0);
}


