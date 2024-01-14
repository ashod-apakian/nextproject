/** AAJS.js
 aaJS, ope(c)n Ashod Apakian
 Third party credits:
 jesusgollonet easing functions
 https://www.w3.org/TR/css-color-3/ web color names
 webrtchacks for sdp specs
 iNoBounce /lazd/iNoBounce/
 developer.mozilla.org
 Ahmed Moussa
**/

//"use strict";

//https://www.jsdelivr.com/package/npm/@mediapipe/face_mesh
//https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4.1657299874/


//-----------------------------------------------------------------------

 const aa_version=2.9971;

 const PROMISE_completed=1;
 const PROMISE_pending=2;
 const PROMISE_rejected=-1;

 var _global=typeof window==='object'&&
             window.window===window?window:typeof self==='object'&&
             self.self===self?self:typeof global==='object'&&
             global.global===global?global:this;

 var garbage=[];
 var garbage_size=1048576*32;
 var garbage_used=0;

 var aa_ms_running=0;
 var aa_guc=1;
 var aa_profiler={};
 aa_profiler.is_started=false;

//-----------------------------------------------------------------------

//https://stackoverflow.com/questions/2863351/checking-if-browser-is-in-fullscreen


 function callerName ()
 {
 var cName,re,m;
 try { throw new Error(); }
 catch(e)
  {
  //console.log(e.stack);
  re=/(\w+)@|at (\w+) \(/g, st = e.stack;
  //, m;
  re.exec(st),m=re.exec(st);
  cName=m[1]||m[2];
  }
 return cName;
 }



 function functionName ()
 {
 var stackLine,fncName;
 stackLine = (new Error()).stack.split('\n')[2].trim()
 fncName = stackLine.match(/at Object.([^ ]+)/)?.[1]
 return fncName;
 }


//-----------------------------------------------------------------------


//-----------------------------------------------------------------------

/* is xyz supported ?
return !!document.createElement('canvas').getContext;
*/

//-----------------------------------------------------------------------


var aa=(function()
 {
 var   handle_obj={};
 var    debug_obj={};
 var  promise_obj={};
 var    timer_obj={};
 var      num_obj={};
 var     data_obj={};
 var   string_obj={};
 var      env_obj={};
 var    queue_obj={};
 var  pointer_obj={};
 var keyboard_obj={};
 var  storage_obj={};
 var      gui_obj={};
 var   sprite_obj={};
 var    iface_obj={};
 var    media_obj={};
 var recorder_obj={};
 var    video_obj={};
 var   socket_obj={};
 var      dsp_obj={};
 var    bitio_obj={};
 var      rtc_obj={};
 var   stater_obj={};
 var   widget_obj={};
 var     main_obj={};
 var          ret={};
 var          geo={};
 var      hancock={};


//-----------------------------------------------------------------------

 navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||
 navigator.mozGetUserMedia||navigator.msGetUserMedia||window.RTCPeerConnection;

//-----------------------------------------------------------------------


 function initEverything ()
 {
 retcodeInit();
 geoAndNamesInit();
 handleObjInit();
 debugObjInit();
 promiseObjInit();
 timerObjInit();
 numObjInit();
 dataObjInit();
 stringObjInit();
 envObjInit();
 queueObjInit();
  pointerObjInit();
  keyboardObjInit();
  storageObjInit();
  guiObjInit();
  spriteObjInit();
  ifaceObjInit();
  mediaObjInit();
  recorderObjInit();
  videoObjInit();
 socketObjInit();
  dspObjInit();
  bitioObjInit();
  rtcObjInit();
 widgetObjInit();
 mainObjInit();
 }


 initEverything();

//-----------------------------------------------------------------------


 function retcodeInit ()
 {
 var obj={};
 obj.NO=0;
 obj.OK=1;
 obj.YES=1;
 obj.BADPARM=2;
 obj.FAILED=3;
 obj.BOUNDS=4;
 obj.FORBIDDEN=5;
 obj.NOMEMORY=6;
 obj.BADHANDLE=7;
 obj.NOTFOUND=8;
 obj.NOTREADY=9;
 obj.EXISTS=10;
 obj.ALREADYOPEN=11;
 obj.NOTOPEN=12;
 obj.INUSE=13;
 obj.NOTSTARTED=14;
 obj.CORRUPTED=15;
 obj.NOTSUPPORTED=16;
 obj.DENIED=17;
 obj.TIMEOUT=18;
 obj.FATAL=19;
 obj.BADSTATE=20;
 obj.FINISHED=21;
 obj.NOTINITIALIZED=22;
 obj.PARTIAL=23;
 obj.ALREADYSTARTED=24;
 obj.ATTENTION=25;
 obj.BADFORMAT=26;
 obj.CANCELLED=27;
 obj.WORKING=28;
 obj.COLLISION=29;
 obj.POSSIBLE=30;
 obj.IGNORE=31;
 obj.INCOMPLETE=32;
 obj.OTHER=33;
 obj.MISSINGPARM=34;
 obj.OVERFLOW=35;
 obj.STILLWORKING=36;
 obj.SAME=37;
 obj.UNDERFLOW=38;
 obj.UNKNOWN=39;
 ret=Object.freeze(obj);
 }


//-----------------------------------------------------------------------

 function geoAndNamesInit ()
 {
 var obj={};
 obj.country_code=["--","AP","EU","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AZ","BA","BB",
                   "BD","BE","BF","BG","BH","BI","BJ","BM","BN","BO","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD",
                   "CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CX","CY","CZ","DE","DJ","DK","DM","DO",
                   "DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF",
                   "GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID",
                   "IE","IL","IN","IO","IQ","IR","IS","IT","JM","JO",
                   "JP","KE","KG","KH","KI","KM","KN","KP","KR","KW",
                   "KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT",
                   "LU","LV","LY","MA","MC","MD","MG","MH","MK","ML",
                   "MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV",
                   "MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI",
                   "NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF",
                   "PG","PH","PK","PL","PM","PN","PR","PS","PT","PW",
                   "PY","QA","RE","RO","RU","RW","SA","SB","SC","SD",
                   "SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO",
                   "SR","ST","SV","SY","SZ","TC","TD","TF","TG","TH",
                   "TJ","TK","TM","TN","TO","TL","TR","TT","TV","TW",
                   "TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE",
                   "VG","VI","VN","VU","WF","WS","YE","YT","RS","ZA",
                   "ZM","ME","ZW","A1","A2","O1","AX","GG","IM","JE"];

 obj.country_name=[
                  "N/A","Asia/Pacific Region","Europe","Andorra","United Arab Emirates","Afghanistan","Antigua and Barbuda","Anguilla","Albania","Armenia","Netherlands Antilles",
                  "Angola","Antarctica","Argentina","American Samoa","Austria","Australia","Aruba","Azerbaijan","Bosnia and Herzegovina","Barbados",
                  "Bangladesh","Belgium","Burkina Faso","Bulgaria","Bahrain","Burundi","Benin","Bermuda","Brunei Darussalam","Bolivia",
                  "Brazil","Bahamas","Bhutan","Bouvet Island","Botswana","Belarus","Belize","Canada","Cocos (Keeling) Islands","Congo, The Democratic Republic of the",
                  "Central African Republic","Congo","Switzerland","Cote D'Ivoire","Cook Islands","Chile","Cameroon","China","Colombia","Costa Rica",
                  "Cuba","Cape Verde","Christmas Island","Cyprus","Czech Republic","Germany","Djibouti","Denmark","Dominica","Dominican Republic",
                  "Algeria","Ecuador","Estonia","Egypt","Western Sahara","Eritrea","Spain","Ethiopia","Finland","Fiji",
                  "Falkland Islands (Malvinas)","Micronesia, Federated States of","Faroe Islands","France","France, Metropolitan","Gabon","United Kingdom","Grenada","Georgia","French Guiana",
                  "Ghana","Gibraltar","Greenland","Gambia","Guinea","Guadeloupe","Equatorial Guinea","Greece","South Georgia and the South Sandwich Islands","Guatemala",
                  "Guam","Guinea-Bissau","Guyana","Hong Kong","Heard Island and McDonald Islands","Honduras","Croatia","Haiti","Hungary","Indonesia",
                  "Ireland","Israel","India","British Indian Ocean Territory","Iraq","Iran, Islamic Republic of","Iceland","Italy","Jamaica","Jordan",
                  "Japan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Comoros","Saint Kitts and Nevis","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait",
                  "Cayman Islands","Kazakhstan","Lao People's Democratic Republic","Lebanon","Saint Lucia","Liechtenstein","Sri Lanka","Liberia","Lesotho","Lithuania",
                  "Luxembourg","Latvia","Libyan Arab Jamahiriya","Morocco","Monaco","Moldova, Republic of","Madagascar","Marshall Islands","Macedonia","Mali",
                  "Myanmar","Mongolia","Macau","Northern Mariana Islands","Martinique","Mauritania","Montserrat","Malta","Mauritius","Maldives",
                  "Malawi","Mexico","Malaysia","Mozambique","Namibia","New Caledonia","Niger","Norfolk Island","Nigeria","Nicaragua",
                  "Netherlands","Norway","Nepal","Nauru","Niue","New Zealand","Oman","Panama","Peru","French Polynesia",
                  "Papua New Guinea","Philippines","Pakistan","Poland","Saint Pierre and Miquelon","Pitcairn Islands","Puerto Rico","Palestinian Territory","Portugal","Palau",
                  "Paraguay","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saudi Arabia","Solomon Islands","Seychelles","Sudan",
                  "Sweden","Singapore","Saint Helena","Slovenia","Svalbard and Jan Mayen","Slovakia","Sierra Leone","San Marino","Senegal","Somalia","Suriname",
                  "Sao Tome and Principe","El Salvador","Syrian Arab Republic","Swaziland","Turks and Caicos Islands","Chad","French Southern Territories","Togo","Thailand",
                  "Tajikistan","Tokelau","Turkmenistan","Tunisia","Tonga","Timor-Leste","Turkey","Trinidad and Tobago","Tuvalu","Taiwan",
                  "Tanzania, United Republic of","Ukraine","Uganda","United States Minor Outlying Islands","United States","Uruguay","Uzbekistan","Holy See (Vatican City State)","Saint Vincent and the Grenadines","Venezuela",
                  "Virgin Islands, British","Virgin Islands, U.S.","Vietnam","Vanuatu","Wallis and Futuna","Samoa","Yemen","Mayotte","Serbia","South Africa",
                  "Zambia","Montenegro","Zimbabwe","Anonymous Proxy","Satellite Provider","Other","Aland Islands","Guernsey","Isle of Man","Jersey"];

 obj.continent=[
                  "--","AS","EU","EU","AS","AS","SA","SA","EU","AS","SA",
                  "AF","AN","SA","OC","EU","OC","SA","AS","EU","SA",
                  "AS","EU","AF","EU","AS","AF","AF","SA","AS","SA",
                  "SA","SA","AS","AF","AF","EU","SA","NA","AS","AF",
                  "AF","AF","EU","AF","OC","SA","AF","AS","SA","SA",
                  "SA","AF","AS","AS","EU","EU","AF","EU","SA","SA",
                  "AF","SA","EU","AF","AF","AF","EU","AF","EU","OC",
                  "SA","OC","EU","EU","EU","AF","EU","SA","AS","SA",
                  "AF","EU","SA","AF","AF","SA","AF","EU","SA","SA",
                  "OC","AF","SA","AS","AF","SA","EU","SA","EU","AS",
                  "EU","AS","AS","AS","AS","AS","EU","EU","SA","AS",
                  "AS","AF","AS","AS","OC","AF","SA","AS","AS","AS",
                  "SA","AS","AS","AS","SA","EU","AS","AF","AF","EU",
                  "EU","EU","AF","AF","EU","EU","AF","OC","EU","AF",
                  "AS","AS","AS","OC","SA","AF","SA","EU","AF","AS",
                  "AF","NA","AS","AF","AF","OC","AF","OC","AF","SA",
                  "EU","EU","AS","OC","OC","OC","AS","SA","SA","OC",
                  "OC","AS","AS","EU","SA","OC","SA","AS","EU","OC",
                  "SA","AS","AF","EU","AS","AF","AS","OC","AF","AF",
                  "EU","AS","AF","EU","EU","EU","AF","EU","AF","AF",
                  "SA","AF","SA","AS","AF","SA","AF","AF","AF","AS",
                  "AS","OC","AS","AF","OC","AS","AS","SA","OC","AS",
                  "AF","EU","AF","OC","NA","SA","AS","EU","SA","SA",
                  "SA","SA","AS","OC","OC","OC","AS","AF","EU","AF",
                  "AF","EU","AF","--","--","--","EU","EU","EU","EU"];
 geo=Object.freeze(obj);

 obj={};
 obj.male_name=[
               "Alistar","Bob","Craig","David","Eddy","Fred","Greg","Harry",
               "Ian","John","Ken","Larry","Mike","Norman","Oscar","Pete",
               "Quincy","Ron","Steve","Tom","Urving","Victor","William","Xeo","Yuri","Zach"];

 obj.female_name=[
                 "Angel","Betty","Carol","Dianne","Eliza","Fiona","Grace","Helen",
                 "Irene","Janene","Kathy","Lisa","Mindy","Nancy","Olivia","Penny","Qeisha",
                 "Rachael","Sarah","Tanya","Ursela","Vera","Wendy","Xeisha","Yvonne","Zoey"];

 hancock=Object.freeze(obj);
 }


//-----------------------------------------------------------------------

 function virtualLogNew (numlines)
 {
 var obj;
 if(numlines<1) { return null; }
 obj={};
 obj.type="virtuallog";
 obj.num_lines=numlines;
 obj.needs_paint=false;
 obj.line=aa.dataArrayCreate(obj.num_lines,"");
 return obj;
 }




 function virtualLogDelete (obj)
 {
 if(obj.type!="virtuallog") { return false; }
 obj={};
 obj=null;
 return true;
 }




 function virtualLogGet (obj,line)
 {
 if(obj.type!="virtuallog") { return false; }
 if(line<0||line>=obj.num_lines) { return false; }
 return obj.line[line];
 }


 function virtualLogSet (obj,line,lines,txt)
 {
 var till,j;
 if(obj.type!="virtuallog") { return false; }
 if(line<0||line>=obj.num_lines) { return false; }
 if(lines==0) { return true; }
 till=line+lines;
 if(till>obj.num_lines) { return false; }
 if(lines>1)
  {
  for(j=(line+1);j<till;j++)
   {
   obj.line[j-1]=obj.line[j];
   }
  }
 obj.line[till-1]=txt;
 obj.needs_paint=true;
 return true;
 }

//-----------------------------------------------------------------------




 function handleObjInit ()
 {
 var state;
 if(Object.keys(handle_obj).length!=0) { return; }
 state={};
 state.handle_base=1000000;
 state.handle_array=[];
 handle_obj.state=state;
 handle_obj.is_init=true;
 }





 function handleDefine (type,slots)
 {
 var i,obj,ths;
 ths={};
 ths.base=handle_obj.state.handle_base;
 ths.type=type;
 ths.slots=slots;
 ths.count=0;
 ths.usage=0;
 ths.pf=0;
 ths.array=[];
 for(i=0;i<ths.slots;i++)
  {
  obj={};
  obj.in_use=false;
  obj.self_index=i;
  obj.self_handle=obj.self_index+ths.base;
  obj.self_type=type;//type;
  obj.han=obj.self_handle;
  obj.comment="";
  ths.array[i]=obj;
  }
 handle_obj.state.handle_array.push(ths);
 handle_obj.state.handle_base+=1000000;
 return ths;
 }




 function handleCheck (handef,handle)
 {
 var obj;
 if(handle===undefined) { return null; }
 //if(isNaN(handle)) { console.log("nan",handle); return null; }
 if(handle<=0)          { return null; }
 if(handle<handef.base) { return null; }
 handle=handle-handef.base;
 if(handle>=handef.slots) { return null; }
 obj=handef.array[handle];
 if(obj.in_use!=true) { return null; }
 return obj;
 }





 function handleReset (handef,handle)
 {
 var obj,idx,iu;
 if((obj=handleCheck(handef,handle))==null) { return false; }
 idx=handle-handef.base;
 iu=obj.in_use;
 obj={};
 obj.in_use=false;
 obj.self_index=idx;
 obj.self_handle=obj.self_index+handef.base;
 obj.han=obj.self_handle;
 obj.comment="";
 handef.array[idx]=obj;
 if(iu==true) {  handef.count--; }
 return true;
 }




 function handleGet (handef,index)
 {
 var obj,han;
 if(index<0||index>=handef.slots) { return 0; }
 obj=handef.array[index];
 if(obj.in_use!=true) { return 0; }
 han=index+handef.base;
 return han;
 }




 function handleUse (handef,index)
 {
 var obj,han;
 if(index<0||index>=handef.slots) { return 0; }
 obj=handef.array[index];
 if(obj.in_use!=false) { return 0; }
 obj.in_use=true;
 handef.array[index]=obj;
 handef.usage++;
 handef.count++;
 han=index+handef.base;
 return han;
 }




 function handleRemove (handef,handle)
 {
 var obj,idx;
 if((obj=handleCheck(handef,handle))==null) { return false; }
 idx=obj.self_index;
 return(handleReset(handef,handle));
 }






 function handleNext (handef,brute)
 {
 var idx,oto,han,todo,pf;
 if(handef.count==0)  {  return 0;  }
 if(brute) { todo=handef.slots; }
 else      { todo=1; }
 for(oto=0;oto<todo;oto++)
  {
  handef.pf++;
  if(handef.pf>=handef.slots) { handef.pf=0; }
  pf=handef.pf;
  han=handleGet(handef,pf);
  if(han>0) { return han; }
  }
 return 0;
 }







 function handleText (handle)
 {
 var i,hd,str,ix,obj;
 for(i=0;i<handle_obj.state.handle_array.length;i++)
  {
  hd=handle_obj.state.handle_array[i];
  if(handle>=hd.base&&handle<(hd.base+hd.slots))
   {
   ix=handle-hd.base;
   obj=hd.array[ix];
   str=hd.type+" index="+ix+" in_use="+obj.in_use;
   return str;
   }
  }
 return null;
 }






 function handleGlobalDump ()
 {
 var i,ths,j;
 //console.log("handleGlobalDump "+aa.main_state.stage);
 for(i=0;i<handle_obj.state.handle_array.length;i++)
  {
  ths=handle_obj.state.handle_array[i];
  if(ths.count==0) { continue; }
  console.log("base="+ths.base+" usage="+ths.count+" of "+ths.slots+"  type="+ths.type+" usage="+ths.usage);
  for(j=0;j<ths.slots;j++)
   {
   obj=ths.array[j];
   if(obj.in_use!=true) { continue; }
   if(obj.self_index!=j) { aa.debugAlert(); }
   if(obj.self_handle!=(ths.base+j)) {  aa.debugAlert(); }
   if(obj.comment=="") { continue; }
   console.log(" handle="+obj.self_handle+"   "+obj.comment);
   //console.log("  "+j+") handle="+(ths.base+j)+"  "+obj.self_index+"  "+obj.self_handle+"   "+obj.comment);
   }
  //aa.debugLogger(5," base="+ths.base+" usage="+ths.count+" of "+ths.slots+"  "+ths.type);
  }
 }




 function handleGlobalKill ()
 {
 var i,ths,h,obj,han;
 for(h=0;h<handle_obj.state.handle_array.length;h++)
  {
  ths=handle_obj.state.handle_array[h];
  //aa.debugLogger(5,">> base="+ths.base+" usage="+ths.count+" of "+ths.slots+"  "+ths.type);
  for(i=0;i<ths.slots;i++)
   {
   if(ths.count==0) { continue; }
   obj=ths.array[i];
   if(obj.in_use!=true) { continue; }
   han=obj.self_handle;
   switch(ths.type)
    {
    case "gui":
    aa.guiDestroy(han);
    break;
    }
   }
  //aa.debugLogger(5," base="+ths.base+" usage="+ths.count+" of "+ths.slots+"  "+ths.type);
  }
 }








 function handleCommentSet (handle,comment)
 {
 var obj,han,index,h,handef;
 for(h=0;h<handle_obj.state.handle_array.length;h++)
  {
  handef=handle_obj.state.handle_array[h];
  if(handle<handef.base) { continue; }
  if(handle>=(handef.base+handef.slots)) { continue; }
  index=handle-handef.base;
  obj=handef.array[index];
  if(obj.in_use!=true) { return false; }
  obj.comment=comment;
  return true;
  }
 return false;
 }




 function handleCommentGet (handle)
 {
 var obj,han,index,h,handef;
 for(h=0;h<handle_obj.state.handle_array.length;h++)
  {
  handef=handle_obj.state.handle_array[h];
  if(handle<handef.base) { continue; }
  if(handle>=(handef.base+handef.slots)) { continue; }
  index=handle-handef.base;
  obj=handef.array[index];
  if(obj.in_use==true) {  return obj.comment;  }
  }
 return null;
 }




//-----------------------------------------------------------------------




 function debugObjInit ()
 {
 if(Object.keys(debug_obj).length!=0) { return; }
 debug_obj.debug_level=10;
 debug_obj.logger_level=0;
 debug_obj.is_init=true;
 }



 /*
 function debugSpeedTest ()
 {
 var i,j,ms,data,fib,k;//=[0,1];
 j=0;
 i=2;
 data=[];
 ms=Date.now();
 fib=[];
 fib[0]=0;
 fib[1]=1;
 k=0;
 while(1)
  {
  fib[i]=fib[i-1]+fib[i-2];
  fib[i]=Math.abs(fib[i])**2;
  data.push(fib[i]);
  j=(j+1);
  if(j>=500) { j=0; if((Date.now()-ms)>=(66)) { break; }  }
  i=(i+1);
  k=k+i;
  k+=Math.sqrt(i);
  if((j%13)==10) { data.pop(); }
  }
 data=[];
 data=null;
 fib=[];
 fib=null;
 //i=(i/1000)>>0;
 return i;
 }
*/



 function debugLineNumber ()
 {
 var ln,e,stack,frame,frameRE;
 e=new Error();
 if(!e.stack)
 try       { throw e;  }
 catch(e)  { if(!e.stack) {  return 0;  } }
 stack=e.stack.toString().split(/\r\n|\n/);
 frameRE=/:(\d+):(?:\d+)[^\d]*$/;
 do { frame=stack.shift();  } while(!frameRE.exec(frame)&&stack.length);
//console.log(stack.shift()[1]);
 //console.log( (frameRE.exec(stack.shift())[1]) );
 ln=parseInt(frameRE.exec(stack.shift())[1]);
 return ln;
 }



 function debugFunctionName ()
 {
 var caller,stack,fn,fnRE;
 fnRE=/function\s*([\w\-$]+)?\s*\(/i;
 caller=arguments.callee.caller;
 stack="";
 while(caller)
  {
  fn=fnRE.test(caller.toString())?RegExp.$1||"{?}":"{?}";
  stack=fn;
  break;
  };
 return stack;
 }




 function debugLogFunctionLine ()
 {
 var ln,fn,s,t,bias,e,stack,frame,frameRE;
 e=new Error();
 if(!e.stack)
 try       { throw e;  }
 catch(e)  { if(!e.stack) {  return false;  } }
 //su=aa.debugStackUsage();
 stack=e.stack.toString().split(/\r\n|\n/);
 frameRE=/:(\d+):(?:\d+)[^\d]*$/;
 do { frame=stack.shift();  } while(!frameRE.exec(frame)&&stack.length);
 ln=parseInt(frameRE.exec(stack.shift())[1]);
 fn=aa.debugStackGet(1);
 //console.log(fn+":"+ln);
 aa.debugLog(fn+":"+ln);
 return true;
 }



 function debugStackUsage ()
 {
 var caller,stack,fn,fnRE;
 fnRE=/function\s*([\w\-$]+)?\s*\(/i;
 caller=arguments.callee.caller;
 stack=0;
 while(caller)
  {
  fn=fnRE.test(caller.toString())?RegExp.$1||"{?}":"{?}";
  stack++;
  caller=caller.arguments.callee.caller;
  };
 return stack;
 }




 function debugStackGet (index)
 {
 var caller,stack,fn,fnRE,i;
 fnRE=/function\s*([\w\-$]+)?\s*\(/i;
 caller=arguments.callee.caller;
 stack="";
 i=0;
 while(caller)
  {
  fn=fnRE.test(caller.toString())?RegExp.$1||"{?}":"{?}";
  stack=fn;
  caller=caller.arguments.callee.caller;
  //console.log(caller);
  if(i>=index) { break; }
  i++;
  };
 return stack;
 }






 function debugAlert (txt)
 {
 var ln,fn,str,s,t,su,bias,e,stack,frame,frameRE;
 e=new Error();
 if(!e.stack)
 try       { throw e;  }
 catch(e)  { if(!e.stack) {  return false;  } }
 su=aa.debugStackUsage();
 stack=e.stack.toString().split(/\r\n|\n/);
 frameRE=/:(\d+):(?:\d+)[^\d]*$/;
 do { frame=stack.shift();  } while(!frameRE.exec(frame)&&stack.length);
 ln=parseInt(frameRE.exec(stack.shift())[1]);
 fn=aa.debugStackGet(1);
 str="";
 if(txt) { str+=txt+"\n----------\n"; }
 str+="#"+ln+":  "+fn+"()"+" "+aa.timerMsRunning()+"ms \n";
 for(s=2;(s+1)<su;s++)  {  str+="-> "+aa.debugStackGet(s)+"()\n";  }
 alert(str);
 return true;
 }


 function debugPrompt (text,def)
 {
 return(prompt(text,def));
 }


 function debugConfirm (text)
 {
 return(window.confirm(text));
 }


 function debugLevelSet (level)
 {
 debug_obj.debug_level=level;
 }





 function debugClear (lines)
 {
 var i,str;
 str="";
 for(i=0;i<lines;i++) { str+="\n"; }
// console.log(str);
 debugLog(str);
 }



 function debugGroup (...params)
 {
 //if(debug_obj.debug_level==0) { return; }
 setTimeout(console.group.bind(console,...params),0);
 }

 function debugGroupCollapsed (...params)
 {
 //if(debug_obj.debug_level==0) { return; }
 setTimeout(console.groupCollapsed.bind(console,...params),0);
 }

 function debugGroupEnd (...params)
 {
 //if(debug_obj.debug_level==0) { return; }
 setTimeout(console.groupEnd.bind(console,...params),0);
 }



 function debugLog (...params)
 {
 if(debug_obj.debug_level==0) { return; }
 setTimeout(console.log.bind(console,...params),0);
 }




 function debugLoggerLevelSet (lev)
 {
 debug_obj.logger_level=lev;
 return true;
 }




 function debugLogger (lev,...params)
 {
 var pre,fn,ln,e,stack,frame,frameRE;
 if(debug_obj.logger_level>lev) { return false; }
 if(1)
  {
  pre=aa.timerMsRunning()+": ";
  if(1)
   {
   e=new Error();
   if(!e.stack)
   try       { throw e;  }
   catch(e)  { if(!e.stack) {  return 0;  } }

   stack=e.stack.toString().split(/\r\n|\n/);
   frameRE=/:(\d+):(?:\d+)[^\d]*$/;
   do { frame=stack.shift();  } while(!frameRE.exec(frame)&&stack.length);
   ln=parseInt(frameRE.exec(stack.shift())[1]);
   pre+="#"+ln+": ";
   //fn=aa.debugStackGet(1);
   //pre+="#"+ln+": "+fn+" ";
   }
  pre+=params;
  setTimeout(console.log.bind(console,pre),0);
  }
 else
  {
  setTimeout(console.log.bind(console,...params),0);
  }
 //console.log(...params);
 return true;
 }






 function debugExpandedLog (item,maxdepth=100,depth=0)
 {
 var txt;
 if(depth>maxdepth)
  {
  //console.log(item);
  //aa.debugLog(item);
  aa.debugLog("%c"+(item),"background:#ffd;color:#20c;");
  return;
  }
 if(typeof item==='object'&&item!==null)
  {
  Object.entries(item).forEach(([key,value])=>
   {
   //console.group((typeof value)+':'+key);
   if(depth<40)
    {
    aa.debugGroup("%c"+((typeof value)+' '+"%c"+key),"background:#eee;color:#00a;","background:#eee;color:#f2c");
    //console.log(key);
    ///aa.debugLog(key);
    }
   else
    {
    aa.debugGroupCollapsed("%c"+((typeof value)+' '+"%c"+key),"background:#eee;color:#00a;","background:#eee;color:#f2c");
    }
   aa.debugExpandedLog(value,maxdepth,depth+1);
   //console.groupEnd();
   aa.debugGroupEnd();
   });
  }
 else
  {
  aa.debugLog("%c"+(item),"background:#fef;color:#22a;");
  //aa.debugLog(item);
  //console.log(item);
  }
 }



 function debugFx (fx,txt)
 {
 aa.debugLog("%c"+txt,fx);
 }




 function debugMemoryUsage ()
 {
 var supported,obj;
 supported=false;
 obj={};
 try   { if(performance.memory) { supported=true; }  }
 catch { }
 if(supported==true)
  {
  obj.heap_limit=performance.memory.jsHeapSizeLimit;
  obj.heap_size=performance.memory.totalJSHeapSize;
  obj.heap_used=performance.memory.usedJSHeapSize;
  //obj.heap_limit_kb=parseInt(obj.heap_limit/1024.0);
  //obj.heap_size_kb=parseInt(obj.heap_size/1024.0);
  //obj.heap_used_kb=parseInt(obj.heap_used/1024.0);
  }
 else
  {
  ///console.log("NOT SUPPORTED");
  obj.heap_limit=0;
  obj.heap_size=0;
  obj.heap_used=0;
  //obj.heap_limit_kb=0
  //obj.heap_size_kb=0
  //obj.heap_used_kb=0
  }
 return obj;
 }





 function debugGarbageGenerate (amount)
 {
 var i;
 for(i=0;i<amount;i++)
  {
  garbage[garbage_used]={};
  garbage_used=(garbage_used+1)%garbage_size;
  }
 }


 function debugGarbageClean ()
 {
 garbage=[];
 garbage_used=0;
 }



//-----------------------------------------------------------------------



 function promiseObjInit ()
 {
 if(Object.keys(promise_obj).length!=0) { return; }
 promise_obj.handef=handleDefine("promise",128);
 promise_obj.is_init=true;
 }



 function promiseObjectNew ()
 {
 var obj;
 obj={};
 obj.type="promiseobj";
 obj.object=null;
 obj.handle=0;
 obj.val=null;
 return obj;
 }





 function promiseCreate (nativepromise,etc)
 {
 var i,h,obj,ispending,isrejected,isfullfilled,result;
 for(i=0;i<promise_obj.handef.slots;i++)
  {
  obj=promise_obj.handef.array[i];
  if(obj.in_use!=false) { continue; }
  h=handleUse(promise_obj.handef,i);
  if(h==0) { alert("promisecreate handle use returned 0"); }
  if(0)    { console.log("promise create "+h+"   "+promise_obj.handef.slots+"  "+promise_obj.handef.count+"  "+etc); }
  obj.vars={};
  obj.vars.native_promise=nativepromise;
  obj.vars.is_pending=true;
  obj.vars.is_rejected=false;
  obj.vars.is_fullfilled=false;
  obj.vars.ms=aa.timerMsRunning();
  obj.vars.val=null;
  obj.vars.err=null;
  obj.vars.etc=etc;
  obj.vars.result=obj.vars.native_promise
  .then(
   function(v)
    {
    ///console.log("fullfilled");
    obj.vars.is_fullfilled=true;
    obj.vars.is_pending=false;
    obj.vars.val=v;
    return v;
    },
   function(e)
    {
    aa.debugLog("rejected");
    obj.vars.is_rejected=true;
    obj.vars.is_pending=false;
    obj.vars.err=e;
    throw e;
    })
  .catch(err=>
   {
   ///alert("catch prom ",+obj.vars.err,err);
   aa.debugLog("err catch "+obj.vars.err);
   aa.debugLog("state="+obj.vars.is_pending+"  "+obj.vars.is_rejected+"  "+obj.vars.is_fullfilled+"  ");
   });
  //alert("ck "+obj.vars.is_fullfilled+"  "+obj.vars.is_pending+"  "+obj.vars.is_rejected+"  "+obj.vars.val+"  "+obj.vars.err)
  obj.vars.result.val=function()           {  return obj.vars.val;         }
  obj.vars.result.err=function()           {  return obj.vars.err;         }
  obj.vars.result.is_fullfilled=function() {  return obj.vars.is_fullfilled; };
  obj.vars.result.is_pending=function()    {  return obj.vars.is_pending;    };
  obj.vars.result.is_rejected=function()   {  return obj.vars.is_rejected;   };
  return h;
  }
 alert("promisecreate couldnt find an empty handle, handef.slots="+promise_obj.handef.slots+"  "+promise_obj.handef.count);
 ///aa.debugAlert(promise_obj.handef.count);
 return 0;
 }




 function promiseDestroy (handle)
 {
 var obj,etc,rt;
 if((obj=handleCheck(promise_obj.handef,handle))==null)
  {
  alert("promisedelay handlecheck failed");
  return false;
  }
 etc=obj.vars.etc;
 obj.vars={};
 rt=handleRemove(promise_obj.handef,handle);
 if(rt!=true)
  {
  alert("promisedestroy, handleremove returned "+rt);
  }
 else
  {
  if(0) {  console.log("promise destroy "+handle+"   "+promise_obj.handef.slots+"  "+promise_obj.handef.count+" "+etc); }
  }
 return true;
 }




 function promiseGet (handle)
 {
 return(handleCheck(promise_obj.handef,handle));
 }




 function promiseStatus (handle)
 {
 var obj,status;
 if((obj=promiseGet(handle))==null) { return null; }
 status={};
 status.state=0;
 status.native_promise=obj.vars.native_promise;
 status.result=obj.vars.result;
 status.val=obj.vars.result.val();
 status.err=obj.vars.result.err();
 status.etc=obj.vars.etc;
 if(obj.vars.result.is_fullfilled()) { status.state=PROMISE_completed; }
 if(obj.vars.result.is_pending())    { status.state=PROMISE_pending;   }
 if(obj.vars.result.is_rejected())   { status.state=PROMISE_rejected;  }
 status.elapsed=aa.timerMsRunning()-obj.vars.ms;
 return status;
 }





//-----------------------------------------------------------------------




 function timerObjInit ()
 {
 if(Object.keys(timer_obj).length!=0) { return; }
 timer_obj.msec_base=new Date().valueOf();
 if("performance" in window)  {  timer_obj.perf_base=performance.now();  }
 else                         {  timer_obj.perf_base=new Date().valueOf();  }
 timer_obj.is_init=true;
 }



 function timerSleep (ms)
 {
 var t,e;
 t=timerMsRunning();
 while(1)
  {
  a=timerMsElapsed(t);
  if(a>=ms) { break; }
  }
 return true;
 }




 function timerTikNow (useperf)
 {
 var t;
 if(useperf)
  {
  if("performance" in window)   {   t=performance.now()-timer_obj.perf_base;   }
  else                          {   t=new Date().valueOf()-timer_obj.msec_base;   }
  }
 else  {  t=Date.now()-timer_obj.msec_base;  }
 return t;
 }



 function timerTikElapsed (useperf,tik)
 {
 return(timerTikNow(useperf)-tik);
 }



 function timerMsRunning ()
 {
 var ms;
 ms=timerTikNow(false);
 aa_ms_running=ms;
 return ms;
 }


 function timerMsElapsed (ms)
 {
 return(aa.timerMsRunning()-ms);
 }






 function timerMicroRunning ()
 {
 return(timerTikNow(true));
 }




 function timerMicroElapsed (ms)
 {
 return(timerTikNow(true)-ms);
 }





 function timerTimeoutSet (to)
 {
 var tmo={};
 tmo.type='timeout';
 tmo.ms=aa.timerMsRunning();
 tmo.el=0;
 tmo.to=to;
 return tmo;
 }




 function timerTimeoutReset (tmo,newto)
 {
 tmo.ms=aa.timerMsRunning();
 tmo.el=0;
 if(arguments.length==2) { tmo.to=newto;  }
 return tmo;
 }



 function timerTimeoutTest (tmo,doreset)
 {
 tmo.el=aa.timerMsRunning()-tmo.ms;
 if(tmo.el>=tmo.to)
  {
  if(doreset) { timerTimeoutReset(tmo,tmo.to); }
  return true;
  }
 return false;
 }



 function timerRaterInit ()
 {
 var obj;
 obj={};
 obj.type="rater";
 obj.started=false;
 obj.tik=timerTikNow(true);
 obj.elapsed=0;
 obj.hits=0;
 obj.hz=0;
 return obj;
 }





 function timerRaterUpdate (obj,hits)
 {
 if(obj.type!="rater") { return null; }
 if(obj.started==false)
  {
  obj.started=true;
  obj.tik=timerTikNow(true);
  }
 obj.hits+=hits;
 obj.elapsed=timerTikElapsed(true,obj.tik);
 obj.hz=obj.hits/(obj.elapsed/1000);
 return obj;
 }




 function timerUnixGet (how)
 {
 var d=Date.now();///1000)>>0);
 switch(how)
  {
  case 0: return d;
  case 1: return (d/1000)>>0;
  case 2: return new Date(d);
  case 3: return new Date(d).toGMTString();
  case 4: return new Date(d).toISOString();
  //case 5:
  }
 return 0;
 }


 function timerMsToDuration (ms)
 {
 var obj,we,da,ho,mi,se;
 //console.log(ms);
 obj={};
 obj.type="duration";
 obj.ms=ms;
  we=(ms/604800000)>>0;
 ms-=(we*604800000);
  da=(ms/86400000)>>0;
 ms-=(da*86400000);
  ho=(ms/3600000)>>0;
 ms-=(ho*3600000);
  mi=(ms/60000)>>0;
 ms-=(mi*60000);
  se=(ms/1000)>>0;
 ms-=(se*1000);
 obj.weeks=we>>0;
 obj.days=da>>0;
 obj.hours=ho>>0;
 obj.mins=mi>>0;
 obj.secs=se>>0;
 obj.milli=ms>>0;
 return obj;
 }


//-----------------------------------------------------------------------



 function numObjInit ()
 {
 if(Object.keys(num_obj).length!=0) { return; }
 num_obj.is_init=true;
 }




 function numRandFloat (min,max,decimals)
 {
 var str=(Math.random()*(max-min)+min).toFixed(decimals);
 return parseFloat(str);
 }


 function numRandValue (min,max)
 {
 var str=(Math.random()*(max-min)+min).toFixed(0);
 return parseFloat(str);
 }

 function numRandValueEquals (min,max,equ)
 {
 var p,str;
 str=(Math.random()*(max-min)+min).toFixed(0);
 p=parseFloat(str);
 if(p==equ) { return true; }
 return false;
 }


 function numRand (max)
 {
 var val=Math.floor(Math.random()*Math.floor(max));
 return parseInt(val%max);
 }



 function numFixed (numb,places)
 {
 return numb.toFixed(places);
 }



 function numPercentOf (numb,tot)
 {
 return(tot/100)*numb;
 }



 function numPercentIs (numb,tot)
 {
 return(100.0/tot)*numb;
 }


 function numPercentIsOf (numb,tota,totb)
 {
 var pca,pcb;
 pca=aa.numPercentIs(numb,tota);
 pcb=aa.numPercentOf(pca,totb);
 return pcb;
 }





 function numPad(numb,width,z)
 {
 z=z||'0';
 numb=numb+'';
 return numb.length>=width?numb:new Array(width-numb.length+1).join(z)+numb;
 }




 function numIntToHex(intg)
 {
 var code;
 code=Math.round(intg).toString(16);
 (code.length>1)||(code='0'+code);
 return code;
 }


 function numIntToBinary (intg)
 {
 return (intg>>>0).toString(2);
 }


 function numPrecision(numb,precision)
 {
 return Number.parseFloat(numb).toPrecision(precision+1);
 }


 function numRound(numb)
 {
 return Math.round(numb);
 }


 function numRoundPlaces (numb,places)
 {
 var n,p=Math.pow(10,places);
 n=(Math.round((numb+Number.EPSILON)*p)/p);
 //n=parseFloat(numb);
 return n.toFixed(places);
 //return n;
 }



 function numFloatFormat (numb,wholewid,pad,isps,fracwid)
 {
 var n,arr,txt;
 n=numFixed(parseFloat(numb),fracwid);
 arr=n.toString().split(".");
 if(isps)  {  arr[0]=arr[0].padStart(wholewid,pad);  }
 else      {  arr[0]=arr[0].padEnd(wholewid,pad);  }
 if(fracwid>0) { txt=arr[0]+"."+arr[1] }
 else          { txt=arr[0]; }
 return txt;
 }



 function numIsWhole (numb)
 {
 var res;
 res=((numb-Math.floor(numb))!==0);
 if(res) { return false; }
 return true;
 }




 function numBitGet(numb,bit)
 {
 return((numb>>bit)%2!=0)
 }


 function numBitSet(numb,bit)
 {
 return numb|1<<bit;
 }


 function numBitClear(numb,bit)
 {
 return numb&~(1<<bit);
 }


 function numBitToggle(numb,bit)
 {
 return numBitGet(numb,bit)?numBitClear(numb,bit):numBitSet(numb,bit);
 }



 function numDegreesToRadian (deg)
 {
 ///var d;
 //d=deg*(Math.PI/180);
 //return d;
 return deg*(Math.PI/180);
 }


 function numRadianToDegrees (rad)
 {
 //var d;
 //d=rad*(180/Math.PI);
 //return d;
 return rad*(180/Math.PI);
 }





 function numDistanceGet (x1,y1,x2,y2)
 {
 var x,y;
 x=x1-x2;
 y=y1-y2;
 return Math.sqrt((x*x)+(y*y));
 }



 function numAngleGet (x1,y1,x2,y2)
 {
 var x,y,t;
 x=x1-x2;
 y=y1-y2;
 t=Math.atan2(-y,-x);
 t=t*180/Math.PI;
 ///t-=90;
 //if(t<0) { t+=360; }
 //if(t<0) { t+=-90; }
// if(t<0) { t+=360; }
 return t;
 }


 function numTriangleAreaGet (x1,y1,x2,y2,x3,y3)
 {
 var p,area;
var l1 = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2)
var l2 = Math.sqrt((x2 - x3)**2 + (y2 - y3)**2)
var l3 = Math.sqrt((x3 - x1)**2 + (y3 - y1)**2)
p = (l1 + l2 + l3)/2
area = Math.sqrt(p * (p - l1) * (p - l2) * (p - l3))

 //var area=0.5 * (x1 * (y1 - y2) + x1 * (y2 - y0) + x2* (y0- y1))
 //area=area|1;

 //area=Math.abs(area);

 //var res=Math.abs((x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))/2.0);
 //res=res>>0;
 //res=Math.round(res*10)/10;
 return area;
 }



 function numIsPointInTriangle (x,y,x1,y1,x2,y2,x3,y3)
 {
 var v0 = [x3-x1,y3-y1];
 var v1 = [x2-x1,y2-y1];
 var v2 = [x-x1,y-y1];
 var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
 var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
 var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
 var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
 var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);
 var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);
 var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
 var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
 return ((u >= 0) && (v >= 0) && (u + v < 1));
 }





 function numVelocityGet (x,y,delta)
 {
 return {x:x/delta||0,y:y/delta||0};
 }





 function numRotate (x,y,cx,cy,deg)
 {
 var rad,px,py,np;
 rad=deg*(Math.PI/180);
 px=x;
 py=y;
 px-=cx;
 py-=cy;
 np=[];
 np[0]=px*Math.cos(rad)-py*Math.sin(rad);
 np[1]=px*Math.sin(rad)+py*Math.cos(rad);
 np[0]+=cx;
 np[1]+=cy;
 return np;
 }



 function numClamp (numb,min,max)
 {
 //return Math.min(Math.max(numb,min),max);
 return min<max?numb<min?min:numb>max?max:numb:numb<max?max:numb>min?min:numb;
 // return numb<=min?min:numb>=max?max:numb; // faster ??
 }





//-----------------------------------------------------------------------




 function dataObjInit ()
 {
 if(Object.keys(data_obj).length!=0) { return; }
 data_obj.is_init=true;
 }


 function dataArrayCreate (count,val)
 {
 var i,arr=[];
 for(i=0;i<count;i++) { arr[i]=val; }
 return arr;
 }



 function dataArray2DCreate (rows)
 {
 var i,arr;
 if(data_obj.is_init!=true) { aa.debugAlert(); return null; }
 arr=[];
 for(i=0;i<rows;i++) { arr[i]=[];}
 return arr;
 }




 function dataObjectApxSize (object)
 {
 var objectList,stack,bytes,value,i;
 if(data_obj.is_init!=true) { return 0; }
 objectList=[];
 stack=[object];
 bytes=0;
 while(stack.length)
  {
  value=stack.pop();
  if(typeof value==='boolean') { bytes+=4;              }        else
  if(typeof value==='string')  { bytes+=value.length*2; }        else
  if(typeof value==='number')  { bytes+=8;              }        else
  if(typeof value==='object'&&objectList.indexOf(value)===-1)
   {
   objectList.push(value);
   for(i in value) {  stack.push(value[i]);    }
   }
  }
 return bytes;
 }



 function dataGlobalExists (varname)
 {
 const globalEval=eval;
 try  {  globalEval(varname);  return true;  }
 catch (e)  {  return false;  }
 return null;
 }



 function dataGlobalPropertiesGet (prefix)
 {
 var keyValues,global;
 keyValues=[];
 global=window;
 for(var prop in global)
  {
  if(prop.indexOf(prefix)==0)
   {
   keyValues.push(prop+"="+global[prop]);
   }
  }
 return keyValues.join('&');
 }



//let possiblePromise = f1();
//let isPromise = possiblePromise instanceof Promise;

 function dataObjectIsPromise (obj)
 {
 if(obj instanceof Promise) { return true; }
 return false;
 }



 function dataObjectIsEmpty (obj)
 {
 for(var prop in obj) { if(obj.hasOwnProperty(prop)) return false;  }
 return true;
 }



 function dataObjectIsUndefined (obj)
 {
 return(typeof obj!=='undefined');
 }


 function dataObjectLength (obj)
 {
 if(obj===undefined||obj===null) { return 0; }
 return(Object.keys(obj).length);
 }



 function dataValueExists (val)
 {
 if(val===undefined) { return false; }
 if(val===null)      { return false; }
 if(val===false)     { return false; }
 if(val==="")        { return false; }
 return true;
 }



 function dataValueIsEmpty (val)
 {
 return (val==null||val.length===0||val==="");
 }


 function dataValueIsNotEmpty (val)
 {
 return !(val==null||val.length===0||val==="");
 }



 function dataArrayVargs ()
 {
 var a,ray=[];
 for(a=0;a<arguments.length;a++)
  {
  ray.push(arguments[a]);
  }
 return ray;
 }





 function dataArrayUniqueCount (arr)
 {
 return new Set(arr).size;
 }


 function dataArrayRotate (arr,left)
 {
 if(left) { arr.unshift(arr.pop()); }
 else     { arr.push(arr.shift());  }
 return arr;
 }


 function dataArrayInsert (arr,index,val)
 {
 var len;
 len=arr.length;
 if(index<0)   { return null; }
 if(index>len) { return null; }
 arr.splice(index,0,val);
 return arr;
 }




 function dataArrayRemove (arr,index)
 {
 var len;//,io;
 len=arr.length;
 if(index<0)    { return null; }
 if(index>=len) { return null; }
 arr.splice(index,1);
 //io=arr.indexOf(index);
 //if(io>=0) { arr.splice(io,1); }
 return arr;
 }



 function dataFloat32ArrayToUint8Array (array)
 {
 var output=array.buffer;
 return new Uint8Array(output);
 }


 function dataUint8ArrayToFloat32Array (array)
 {
 var output=array.buffer;
 return new Float32Array(output);
 }




 function dataFloat32ArrayToInt16Array (array)
 {
 var i,s,output=new Int16Array(array.length);
 for(i=0;i<array.length;i++)
  {
  s=Math.max(-1,Math.min(1,array[i]));
  output[i]=s<0?s*0x8000:s*0x7FFF;
  }
 return output;
 }




 function dataInt16ArrayToFloat32Array (array)
 {
 var i,s,n,f,output=new Float32Array(array.length);
 for(i=0;i<array.length;i++)
  {
  n=array[i];
  f=(n>=0x8000)?-(0x10000-n)/0x8000:n/0x7FFF;
  output[i]=f;
  }
 return output;
 }





 function dataInt16ArrayToUint8Array (array)
 {
 var i,s,output=new Uint8Array(array.length*2);
 for(i=0;i<array.length;i++)
  {
  s=array[i];
  output[(i*2)+0]=(s/256)%256;
  output[(i*2)+1]=(s&256)%256;
  }
 return output;
 }



 function dataUint8ArrayToInt16Array (array)
 {
 var o,i,s1,s2,output=new Int16Array(array.length/2);
 o=0;
 for(i=0;i<array.length;i+=2)
  {
  s1=array[(i+0)]|0;
  s2=array[(i+1)]|0;
  output[o]=(s1*256)+s2;
  o++;
  }
 return output;
 }





 function dataToJson (data)
 {
 var parts,islist,key,value,str,json;
 parts=[];
 islist=(Object.prototype.toString.apply(data)==='[object Array]');
 for(key in data)
  {
  value=data[key];
  if(typeof value=="object")
   {
   if(islist) { parts.push(aa.dataToJson(value));  }
   else       { parts.push('"'+key+'":'+aa.dataToJson(value)); }
   //else parts[key] = aa.dataToJson(value); // :RECURSION:
   }
  else
   {
   str="";
   if(!islist)                { str='"'+key+'":'; }
   if(typeof value=="number") { str+=value; }
   else
   if(value===false)          { str+='false'; }
   else
   if(value===true)           { str+='true';  }
   else                       { str+='"'+value+'"'; }
   parts.push(str);
   }
  }
 json=parts.join(",");
 if(islist) { return '['+json+']'; }
 return '{'+json+'}';
 }





 function dataToString (data)
 {
 var formdata,key,value;
 formdata=[];
 for(key in data)
  {
  value=data[key];
  switch(typeof value)
   {
   case "string":
   formdata.push(key+"="+encodeURIComponent(value));
   break;

   case "object":
   if(Array.isArray(value))
    {
    value.forEach((element)=>
     {
     formdata.push(key+"="+encodeURIComponent(JSON.stringify(element)));
     });
    continue;
    }
   formdata.push(key+"="+encodeURIComponent(JSON.stringify(value)));
   break;

   case "boolean":
   formdata.push(key+"="+encodeURIComponent(Number(value).toString()));
   break;

   default:
   aa.debugAlert("OTHER "+(typeof value));
   break;
   }
  }
 return formdata.join("&");
 }



 function dataJsonParse (data)
 {
 var res,json;
 res=1;
 try      { json=JSON.parse(data); }
 catch(e)
  {
  if(e instanceof SyntaxError)
   {
   ///console.error(e.name);
   }
  else
   {
   ///console.error(e.message);
   }
  res=2;
  }
 if(res==1) { return json; }
 return false;
 }


//-----------------------------------------------------------------------

/*
 function decodeUTF16LE (binaryStr)
 {
 var i,cp=[];
 for(i=0;i<binaryStr.length;i+=2)
  {
  cp.push(binaryStr.charCodeAt(i)|(binaryStr.charCodeAt(i+1)<<8));
  }
 return String.fromCharCode.apply(String,cp);
 }
*/

 function stringObjInit ()
 {
 if(Object.keys(string_obj).length!=0) { return; }
 string_obj.is_init=true;
 }



 function stringHancock (id,first,last,suf)
 {
 var fn,ln,px,oi,ia,ib,ic,str;
 id=id%2646;
 ia=id%2;
 ib=(id+ia)%26;
 if(ia==0) { fn=""+aa.hancock.male_name[ib];   }
 else      { fn=""+aa.hancock.female_name[ib]; }
 ib=(id+ib+fn.length)%21;
 if(ia==0) { ln=""+aa.hancock.male_name[ib];   }
 else      { ln=""+aa.hancock.female_name[ib]; }
 ic=id+(fn.length+ln.length);
 ic=ic%5;
 if(ic==0) { px="son";   } else
 if(ic==1) { px="smith"; } else
 if(ic==2) { px="ly";    } else
 if(ic==3) { px="child"; } else
 if(ic==4) { px="ton";   }
 str="";
 if(first) { str+=fn; }
 if(last)
  {
  if(str!="") { str+=" "; }
  str+=ln;
  if(suf) { str+=px; }
  }
 return str;
 }


 //function


 function stringIndexOf (cs,str,mat,from,rev)
 {
 var stxt,mtxt,tof,isa,m,ml,mex,rv;
 if(str==undefined)      { return -1; }
 if(arguments.length<3)  { return -1; }
 //if(arguments.length>4)  { return -1; }
 if(arguments.length>5)  { return -1; }
 tof=(typeof mat);
 isa=Array.isArray(mat);
 if(tof=="object"&&isa==true)
  {
  ml=mat.length;
  for(m=0;m<ml;m++)
   {
   mex=mat[m];
   if(cs)  {  stxt=str;  mtxt=mex;  }
   else    {  stxt=str.toLowerCase();  mtxt=mex.toLowerCase();  }
   if(arguments.length==3)
    {
    rv=stxt.indexOf(mtxt);
    if(rv==-1) { continue; }
    return rv;
    }
   if(arguments.length==4||(arguments.length==5&&!rev))
    {
    if(str==undefined||str.length<=0) { continue; }
    if(stxt==undefined||stxt.length==undefined||stxt.length<=0)  { continue; }
    rv=stxt.indexOf(mtxt,from);
    if(rv==-1) { continue; }
    return rv;
    }
   if(str==undefined||str.length<=0) { continue; }
   if(stxt==undefined||stxt.length==undefined||stxt.length<=0)  { continue; }
   rv=stxt.lastIndexOf(mtxt,from);
   if(rv==-1) { continue; }
   return rv;
   }
  //aa.debugAlert();
  return -1;
  }

 if(cs)  {  stxt=str;  mtxt=mat;  }
 else
  {
  //debugLog("str="+str);
  stxt=str.toLowerCase();
  mtxt=mat.toLowerCase();
  }
 if(arguments.length==3)  { return stxt.indexOf(mtxt);  }
 if(arguments.length==4||(arguments.length==5&&!rev))
  {
  if(str==undefined||str.length<=0) { return -1; }
  if(stxt==undefined||stxt.length==undefined||stxt.length<=0)  { return -1; }
  return stxt.indexOf(mtxt,from);
  }
 if(str==undefined||str.length<=0) { return -1; }
 if(stxt==undefined||stxt.length==undefined||stxt.length<=0)  { return -1; }
 return stxt.lastIndexOf(mtxt,from);
 }




 function stringLastCharGet (str)
 {
 var ch;
 ch=str[str.length-1];
 return ch;
 }




 function stringLastCharTrim (str)
 {
 str=str.substring(0,str.length-1);
 return str;
 }


 function stringFirstCharGet (str)
 {
 var ch;
 ch=str[0];
 return ch;
 }




 function stringFirstCharTrim (str)
 {
 str=str.substring(1,str.length);
 return str;
 }



 function stringInsert (str,offset,val)
 {
 str=str.substr(0,offset)+val+str.substr(offset);
 return str;
 }



 function stringCharSet (str,offset,ch)
 {
 if(offset>str.length-1) { return str; }
 return str.substring(0,offset)+ch+str.substring(offset+1);
 }



 function stringDelete (str,offset,len)
 {
 if(len)
  {
  while(len)
   {
   str=str.slice(0,offset)+str.slice(offset+1);
   len--;
   }
  }
 else
  {
  str=str.slice(0,offset)+str.slice(offset+1);
  }
 return str;
 }



 function stringFill (len,ch)
 {
 var str=new Array(len+1).join(ch);
 return str;
 }



 function stringReverse (str)
 {
 return str.split("").reverse().join("");
 }


 function stringContainsDigits (str)
 {
 var has=/\d/;
 return has.test(str);
 }



 function stringSha256 (str)
 {
 var mathPow,maxWord,lengthProperty,i,j,result,words,strBitLength;
 var hash,k,primeCounter,isComposite,candidate,w,oldHash;
 var i2,w15,a,b,e,temp1,temp2,w2;
 function _rightRotate(value,amount) { return (value>>>amount)|(value<<(32-amount)); };
 //console.log("SHA");
 lengthProperty='length'
 result='';
 words=[];
 strBitLength=str[lengthProperty]*8;
 mathPow=Math.pow;
 maxWord=mathPow(2,32);
 hash=stringSha256.h=stringSha256.h||[];
 k=stringSha256.k=stringSha256.k||[];
 primeCounter=k[lengthProperty];
 isComposite={};
 for(candidate=2;primeCounter<64;candidate++)
  {
  if(isComposite[candidate]) { continue; }
  for(i=0;i<313;i+=candidate) { isComposite[i]=candidate; }
  hash[primeCounter]=(mathPow(candidate,.5)*maxWord)|0;
  k[primeCounter++]=(mathPow(candidate,1/3)*maxWord)|0;
  }
 str+='\x80';
 while(str[lengthProperty]%64-56) { str+='\x00'; }
 for(i=0;i<str[lengthProperty];i++)
  {
  j=str.charCodeAt(i);
  if(j>>8) { return; }
  words[i>>2]|=j<<((3-i)%4)*8;
  }
 words[words[lengthProperty]]=((strBitLength/maxWord)|0);
 words[words[lengthProperty]]=(strBitLength)
 for(j=0;j<words[lengthProperty];)
  {
  w=words.slice(j,j+=16);
  oldHash=hash;
  hash=hash.slice(0,8);
  for(i=0;i<64;i++)
   {
   i2=i+j;
   w15=w[i-15],w2=w[i-2];
   a=hash[0],e=hash[4];
   temp1=hash[7]+(_rightRotate(e,6)^_rightRotate(e,11)^_rightRotate(e,25))+((e&hash[5])^((~e)&hash[6]))+k[i]+(w[i]=(i<16)?w[i]:
    (
    w[i-16]+(_rightRotate(w15,7)^_rightRotate(w15,18)^(w15>>>3))+w[i-7]+(_rightRotate(w2,17)^_rightRotate(w2,19)^(w2>>>10)))|0);
    temp2=(_rightRotate(a,2)^_rightRotate(a,13)^_rightRotate(a,22))+((a&hash[1])^(a&hash[2])^(hash[1]&hash[2]));
    hash=[(temp1+temp2)|0].concat(hash);
    hash[4]=(hash[4]+temp1)|0;
    }
  for(i=0;i<8;i++) { hash[i]=(hash[i]+oldHash[i])|0; }
  }
 for(i=0;i<8;i++)
  {
  for(j=3;j+1;j--) { b=(hash[i]>>(j*8))&255;  result+=((b<16)?0:'')+b.toString(16);   }
  }
 return result;
 }



 function stringUuid (usedash)
 {
 if(usedash)
  {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16));
  }
 return ([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16));
 }



 function stringBase64FromUint8 (buffer)
 {
 var bin,len,i;
 bin="";
 len=buffer.byteLength;
 for(i=0;i<len;i++) {  bin+=String.fromCharCode(buffer[i]); }
 return window.btoa(bin);
 }



 function stringBase64ToUint8 (str)
 {
 var bs,len,bytes,i;
 bs=window.atob(str);
 len=bs.length;
 bytes=new Uint8Array(len);
 for(i=0;i<len;i++) { bytes[i]=bs.charCodeAt(i); }
 return bytes;//bytes.buffer;
 }




 function stringSplitter (str,by)
 {
 return str.split(by).reduce((accum,curr)=>
  {
  if(accum.isConcatting)           { accum.soFar[accum.soFar.length-1]+=','+curr;  }
  else                             { accum.soFar.push(curr);                       }
  if(curr.split('"').length%2==0)  { accum.isConcatting=!accum.isConcatting;       }
  return accum;
  },
 {soFar:[],isConcatting:false}).soFar;
 }



 function stringToLines (str)
 {
 var res;
 res=str.split(/\r?\n/);
 return res;
 }


 function stringTime (unixtimestamp)
 {
 var ux,a,months,year,month,date,hour,min,sec,time,ap;
 ux=parseInt(unixtimestamp/1000);
 a=new Date(ux);
 months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 year=a.getFullYear();
 month=months[a.getMonth()];
 date=a.getDate();
 hour=a.getHours();
 min=a.getMinutes();
 sec=a.getSeconds();
 if(min<10)   { min="0"+min; }
 if(sec<10)   { sec="0"+sec; }
 if(hour<12)  { ap="am";           } else
 if(hour>12)  { ap="pm"; hour-=12; } else
 if(hour==12) { ap="pm"; }
 year=year%1000;
 time=date+' '+month+' '+year+'  '+hour+':'+min+':'+sec+" "+ap;
 return time;
 }






 function stringParms (name)
 {
 var txt,a;
 txt=name+"(";
 for(a=1;a<arguments.length;a++)
  {
  if(a>1) { txt+=","; }
  txt+=arguments[a];
  }
 txt+=")";
 return txt;
 }





 function stringBytesToSize (bytes,frac)
 {
 var i,prec,sizes=['Bytes','KB','MB','GB','TB'];
 if(bytes===0) return 'n/a';
 frac=frac!==undefined?frac:0;
 prec=Math.pow(10,frac);
 i=Math.floor(Math.log(bytes)/Math.log(1024));
 return Math.round(bytes*prec/Math.pow(1024,i))/prec+' '+sizes[i];
 }



 function stringCompare (str1,str2,cs)
 {
 if(cs) { return(str1===str2); }
 return(str1.toLowerCase()===str2.toLowerCase());
 }



 function stringRandom (len,lcs,ucs,num)
 {
 var i,txt,chs;
 chs="";
 if(lcs==true||lcs==1) { chs+="abcdefghijklmnopqrstuvwxyz"; }
 if(ucs==true||ucs==1) { chs+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
 if(num==true||num==1) { chs+="0123456789"; }
 //if(ucs==true||ucs==1) { chs+="ABCDEFGHJKLMNPQRSTUVWXYZ"; }
 //if(num==true||num==1) { chs+="01345678"; }

 txt="";
 for(i=0;i<len;i++)
  {
  txt+=chs.charAt(Math.floor(Math.random()*chs.length));
  }
 return txt;
 }



 function stringHtmlDecode (str)
 {
 var res;
 res=new DOMParser().parseFromString(str,"text/html");
 return res.documentElement.textContent;
 }




//-----------------------------------------------------------------------

/*
 screen.orientation.addEventListener("change", function(e)
 {
 //var ee;
 //ee=JSON.parse(e);
 ///alert(e.target.type+" "+e.target.angle);
 //alert(JSON.stringify(JSON.parse(e),0,2));
 //alert(e);//   // Do something on change
 });


 document.addEventListener('paste',e=>
  {
  alert("pase event");
  let data=(e.ZboardData||window.clipboardData).getData('text/plain');
  aa.env_obj.state.paste_event_count++;
  aa.env_obj.state.paste_value=data;
  });

 window.addEventListener('copy',e=>
  {
  alert();
  let data=(e.clipboardData||window.clipboardData).getData('text/plain');
  aa.env_obj.state.paste_event_count++;
  aa.env_obj.state.paste_value=data;
  });

*/


 function envObjInit ()
 {
 var state;
 if(Object.keys(env_obj).length!=0) { return; }
 env_obj.info=envInfoGet();
 env_obj.info.ud={};
 env_obj.event_proc=null;
 env_obj.event_listening=false;
 env_obj.is_init=true;
  //env_obj.cpu_speed=0;
  //env_obj.cpu_stage=0;
 state={};
 state.wheel=0;
 state.is_focus=true;//true;
 state.wheel_event_count=0;
 state.focus_event_count=0;
 state.wheel_value=0;
 state.event_count=0;
 state.prev_event_count=0;

 state.paste_event_count=0;
 state.paste_value="";
 //state.copy_value="";


 state.is_reloading=false;
 env_obj.state=state;
 env_obj.event_listening=true;
 env_obj.event_proc=envEventProc;
 /*
 window.addEventListener("copy",function(e)
  {
  alert();
  e.preventDefault();
  //e.stopPropagation();
  },false);
*/
 window.addEventListener("contextmenu",function(e)
  {
  //alert();
  e.preventDefault();
  //e.stopPropagation();
  },false);
 window.addEventListener("wheel",env_obj.event_proc,{passive: !1});
 //window.addEventListener("DOMMouseScroll",env_obj.event_proc,{passive: !1});
 window.addEventListener("blur",env_obj.event_proc);
 window.addEventListener("focus",env_obj.event_proc);
 if(navigator.userAgentData)
  {
  navigator.userAgentData.getHighEntropyValues(["architecture","model","platformVersion","uaFullVersion"])
  .then(ua=>         {   env_obj.info.ud=ua;   })
  .catch(function()  {   env_obj.info.ud={};   });
  }
//aa.env_obj.state.copy_value="ee "+txt
 }



 function envScriptInfoGet ()
 {
 var res,obj,yer;
 const array=[];
 switch (true)
  {
  case !Array.isArray:             res=3;  break;
  case !window.Promise:            res=5;  break;
  case !array.includes:            res=6;  break;
  case !''.padStart:               res=7;  break;
  case !Promise.prototype.finally: res=8;  break;
  case !window.BigInt:             res=9;  break;
  case !Promise.allSettled:        res=10; break;
  case !''.replaceAll:             res=11; break;
  case !array.at:                  res=12; break;
  default:                         res=13; break;
  }
 yer={3:1999,5:2009}[res]||(2009+res);
 obj={};
 obj.version=res;
 obj.year=yer;
 return obj;
 }


 function envInfoGet ()
 {
 var obj,brp,check,ti,so,parts,kv,who,mat,off,ver,fs,ser;
 var name,pre,p0,p1,px;
 var isOpera,isFirefox,isSafari,isIE,isEdge,isChrome,isEdgeChromium,isSamsung;
 var fp0,hasLocalStorage,hasSessionStorage,hasIndexDb,isCanvasSupported,isOldIos;
 var elem,keys,canvas,ctx,txt,url;
 if(env_obj.info)  {  return env_obj.info;  }
 obj={};
 obj.aajs_version=aa_version;
 isOpera=(!!window.opr&&!!opr.addons)||!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0;
 isFirefox=typeof InstallTrigger!=='undefined';
 isSafari=/constructor/i.test(window.HTMLElement)||
 (function (p) { return p.toString()==="[object SafariRemoteNotification]"; })
 (!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification));
 isIE=false||!!document.documentMode;
 isEdge=!isIE&&!!window.StyleMedia;
 isChrome=(!!window.chrome&&navigator.userAgent.indexOf("Chrome")!=-1);
 isEdgeChromium=isChrome&&(navigator.userAgent.indexOf("Edg")!=-1);
 isSamsung=navigator.userAgent.match(/SamsungBrowser/i);
 isOldIos=(typeof navigator!=="undefined"&&
 parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec
 (navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10
 &&!window.MSStream);
 who=-1;
 name="";
 ver="";
 pre="";
 if(isSamsung)      { who=7; name="Samsng"; }  else
 ///if(isEdgeChromium) { who=6; name="EdgeChromium"; }  else
 if(isEdgeChromium) { who=6; name="ChEdge"; }  else
 if(isChrome)       { who=5; name="Chrome"; }  else
 if(isEdge)         { who=4; name="MsEdge"; }  else
 if(isIE)           { who=3; name="Ixplor"; }  else
 if(isSafari)       { who=2; name="Safari"; }  else
 if(isFirefox)      { who=1; name="Firefx"; }  else
 if(isOpera)        { who=0; name="Operaa"; }
 if(who==1) { pre=" Firefox/";  } else
 if(who==5) { pre=" Chrome/";   } else
 if(who==6) { pre=" Edg/";      }

 if(who==-1)
  {
  while(1)
   {
   if(navigator.userAgent.indexOf("Firefox")!=-1) { who=1; name="Firefox"; pre=" Firefox/"; break; }
   if(navigator.userAgent.indexOf("Mozilla")!=-1) { who=1; name="Firefox"; pre=" Firefox/"; break; }
   break;
   }
  }

 if(pre!="")
  {
  mat=pre;
  off=stringIndexOf(false,navigator.userAgent,mat);
  if(off>=0) { off+=mat.length; }
  ver=navigator.userAgent.substring(off);
  off=stringIndexOf(false,ver," ");
  if(off>=0) { ver=ver.substring(0,off); }
  pre=ver;
  }
 obj.platform=navigator.platform;
 obj.ver=ver;
 obj.who=who;
 obj.name=name;
 //obj.ud=env_obj.user_agent_data;
 obj.ua=navigator.userAgent;
 obj.url=window.location;
 obj.browser_args=[];
 so=obj.url.search.substring(1).split("&").reduce(function(result,value)
  {
  parts=value.split('=');
  kv={};
  if(parts[0])
   {
   kv.key=decodeURIComponent(parts[0]);
   kv.val=decodeURIComponent(parts[1]);
   obj.browser_args.push(kv);
   }
  },{})
 obj.browser_pathpart=obj.url.pathname.split('/');
 url=new URL(obj.url);
 obj.url_protocol=url.protocol;
 obj.url_host=url.hostname;
 obj.url_port=url.port;
 obj.url_path=url.pathname;
 obj.url_search=url.search;
 obj.url_hash=url.hash;
 brp=navigator.platform;
 ti=stringIndexOf(0,brp,"win");
 if(ti>=0) { obj.is_win=true;  }
 else      { obj.is_win=false; }
 obj.is_standalone=(window.matchMedia('(display-mode: standalone)').matches);
 check=false;
 if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  {
  check=true;
  }
 obj.is_mobile=check;
 if(obj.is_mobile==true&&obj.is_win==false) { obj.is_real_mobile=true;  }
 else                                       { obj.is_real_mobile=false; }
 try{ hasLocalStorage=!!window.localStorage;      }   catch(e) { hasLocalStorage=true;  };
 try{ hasSessionStorage=!!window.sessionStorage;  }   catch(e) { hasSessionStorage=true;  };
 try{ hasIndexDb=!!window.indexedDB;              }   catch(e) { hasIndexDb=true;  };
 obj.is_touch=pointerIsDeviceTouch();
 elem=document.createElement('canvas');
 isCanvasSupported=!!(elem.getContext&&elem.getContext('2d'));
 //isCanvasSupported=!!(elem.getContext&&elem.getContext('2d',{colorSpace:"srgb"}));
 //isCanvasSupported=!!(elem.getContext&&elem.getContext('2d',{colorSpace:"display-p3"}));
 //var language = window.navigator.userLanguage || window.navigator.language;
 obj.language=navigator.language;
 obj.languages=navigator.languages;
 keys=[];
 keys.push(screen.colorDepth);
 keys.push(new Date().getTimezoneOffset());
 keys.push(hasSessionStorage);
 keys.push(hasLocalStorage);
 keys.push(hasIndexDb);
 keys.push(obj.languages);
 if(isCanvasSupported)
  {
  canvas=document.createElement('canvas');
  ctx=canvas.getContext('2d');
  ////ctx=canvas.getContext('2d',{colorSpace:"srgb"});
  //ctx=canvas.getContext('2d',{colorSpace:"display-p3"});
  txt='aaLib.DNA.RNA.NOJAB.unq';
  ctx.textBaseline="top";
  ctx.font="14.5px Arial";
  ctx.textAlign="alphabetic";
  ctx.fillStyle="#f60212";
  ctx.fillRect(125,1,62.123,20);
  ctx.fillStyle="#069392";
  ctx.fillText(txt,2,15);
  ctx.fillStyle="rgba(102,204,0,100)";
  ctx.fillText(txt,4,17);
  keys.push(canvas.toDataURL("image/jpeg",0.7));
  }
 fp0=""+keys.join('###');
 //console.log(fp0);
 obj.finger_print=stringSha256(fp0);
 if(obj.who==-1||obj.name=="")
  {
  if(stringIndexOf(false,obj.ua,"iphone")>=0)
   {
   if(stringIndexOf(false,obj.ua,"safari")>=0)
    {
    if(stringIndexOf(false,obj.ua,"apple")>=0)
     {
     if(obj.who==-1)  { obj.who=2; }
     if(obj.name=="") { obj.name="Safari"; }
     p0=stringIndexOf(false,obj.ua,"version/");
     if(p0>=0)
      {
      p1=stringIndexOf(false,obj.ua," ",p0);
      if(p1>0&&p1>p0)
       {
       p0+=8;
       px=obj.ua.substring(p0,p1);
       obj.ver=px;
       }
      }
     }
    }
   }
  }
 obj.script_info=envScriptInfoGet();
 obj.has_screenlock=('wakeLock' in navigator);
 if(obj.has_screenlock===undefined) { obj.has_screenlock=false; }
 obj.has_fullscreen=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;
 if(obj.has_fullscreen===undefined) { obj.has_fullscreen=false; }
 obj.has_speech_recog=('SpeechRecognition' in window||'webkitSpeechRecognition' in window);

 obj.has_screen_share=(navigator.mediaDevices&&"getDisplayMedia" in navigator.mediaDevices);
 return obj;
 }





 function envBrowserArg (key)
 {
 var b;
 for(b=0;b<aa.env_obj.info.browser_args.length;b++)
  {
  if(aa.env_obj.info.browser_args[b].key!=key) { continue; }
  return(aa.env_obj.info.browser_args[b]);
  }
 return "";
 }




 function envBrowserArgByKey (key)
 {
 var b;
 try
  {
  for(b=0;b<aa.env_obj.info.browser_args.length;b++)
   {
   if(aa.env_obj.info.browser_args[b].key!=key) { continue; }
   return(aa.env_obj.info.browser_args[b]);
   }
  return "";
  }
 catch(e)
  {
  alert(e);
  return null;
  }
 }



 function envBrowserArgByIndex (index)
 {
 try
  {
  if(index>=aa.env_obj.info.browser_args.length) { return ""; }
  return(aa.env_obj.info.browser_args[index]);
  }
 catch(e)
  {
  alert(e);
  return null;
  }
 }




 function envEventProc (event)
 {
 var w,f,msg;
 if(event==null) { alert("epnull"); return; }
 switch(event.type)
  {
  case "blur":
  //guixHudLog(0,"blur");
  if(env_obj.state.is_focus==true)
   {
   env_obj.state.is_focus=false;
   env_obj.state.focus_event_count++;
   env_obj.state.event_count++;
   }
  if(aa.pointer_obj.state.is_started)   {   }
  break;

  case "focus":
  //guixHudLog(0,"foc");
  if(env_obj.state.is_focus==false)
   {
   env_obj.state.is_focus=true;
   env_obj.state.focus_event_count++;
   env_obj.state.event_count++;
   }
  break;

  case "wheel":
  //case "DOMMouseScroll":
  //if(event.ctrlKey) alert();
  w=event.deltaY;
  if(w<0) { w=+1; } else
  if(w>0) { w=-1; } else { w=0; }
  if(1||env_obj.state.wheel!=w)
   {
   env_obj.state.wheel=w;
   env_obj.state.wheel_event_count++;
   env_obj.state.event_count++;
   env_obj.state.wheel_value+=w;
   }
  if(event.ctrlKey)
   {
   event.preventDefault();
   event.stopPropagation();
   }
  //console.log(event.ctrlKey);
  //event.preventDefault();
  ///event.stopPropagation();
  break;
  }
 //event.preventDefault();
 //event.stopPropagation();
 }




 function envIsOnline ()
 {
 if(navigator.onLine) { return true; }
 return false;
 }


 function envDisplayGet ()
 {
 var sat,sar,sab,sal,toff,go;
 var swp,ori,ora,disp={};
 ori=(screen.orientation||{}).type||screen.mozOrientation||screen.msOrientation||window.orientation;
 ora=(screen.orientation||{}).angle;
 disp.win_wid=document.documentElement.clientWidth||window.innerWidth||document.body.clientWidth;
 disp.win_hit=document.documentElement.clientHeight||window.innerHeight||document.body.clientHeight;
 disp.scr_wid=screen.width;
 disp.scr_hit=screen.height;

 if(ora==undefined||ora==null)
  {
  if(Number.isInteger(ori))  {   ora=ori;   ori=null;   }
  if(ori==undefined||ori==null)
   {
   if(Number.isInteger(ora))
    {
    switch(ora)
     {
     case   0: ori="Portrait-primary"; break;
     case  90: ori="Landscape-primary"; break;
     case 180: ori="Portrait-secondary"; break;
     case -90:
     case 270: ori="Landscape-secondary"; break;
     default: aa.debugAlert("ora="+ora); break;
     }
    }
   }
  }

 disp.orient=ori;
 disp.angle=ora;


 disp.density=1.0;
 if(window.devicePixelRatio!=0.0) { disp.density=window.devicePixelRatio; }

 disp.is_fse=false;
 if(document.fullscreenElement) { disp.is_fse=true;  }

 disp.is_landscape=false;
 if(disp.win_wid>(disp.win_hit+0)) { disp.is_landscape=true;  } // drama added +80

 if(disp.is_landscape==true)
  {
  if(disp.scr_hit>disp.scr_wid)
   {
   swp=disp.scr_hit;
   }
  }
 else
  {
  if(disp.scr_wid>disp.scr_hit)
   {
   swp=disp.scr_hit;
   }
  }
 disp.wh_ratio=disp.win_wid/disp.win_hit;
 disp.hw_ratio=disp.win_hit/disp.win_wid;

 disp.zoom_ratio=(window.outerWidth-0)/(window.innerWidth+0);//(window.innerWidth / window.outerWidth)
 disp.zoom_level=aa.numPercentIs(disp.zoom_ratio,1);
 disp.zoom_multi=(1.0/disp.zoom_ratio);

  sat=getComputedStyle(document.documentElement).getPropertyValue("--sat");
  sar=getComputedStyle(document.documentElement).getPropertyValue("--sar");
  sab=getComputedStyle(document.documentElement).getPropertyValue("--sab");
  sal=getComputedStyle(document.documentElement).getPropertyValue("--sal");
 toff=stringIndexOf(false,sat,"px",0,false); sat=Number(sat.substring(0,toff));
 toff=stringIndexOf(false,sar,"px",0,false); sar=Number(sar.substring(0,toff));
 toff=stringIndexOf(false,sab,"px",0,false); sab=Number(sab.substring(0,toff));
 toff=stringIndexOf(false,sal,"px",0,false); sal=Number(sal.substring(0,toff));
 disp.safety_sat=sat;
 disp.safety_sar=sar;
 disp.safety_sab=sab;
 disp.safety_sal=sal;
 disp.safety=guiRectSet(sal,sat,sar-sal,sab-sat);

 return disp;
 }




 function envDisplayCompareText (disp,lastdisp)
 {
 var txt="";
 while(1)
  {
  if(lastdisp.win_wid==undefined||disp.win_wid!=lastdisp.win_wid) { txt+="1Winwid "; }
  if(lastdisp.win_hit==undefined||disp.win_hit!=lastdisp.win_hit) { txt+="2Winhit "; }
  if(lastdisp.scr_wid==undefined||disp.scr_wid!=lastdisp.scr_wid) { txt+="4Scrwid "; }
  if(lastdisp.scr_hit==undefined||disp.scr_hit!=lastdisp.scr_hit) { txt+="8Scrhit "; }
  if(lastdisp.density==undefined||disp.density!=lastdisp.density) { txt+="16Dens "; }
  if(lastdisp.is_fse==undefined||disp.is_fse!=lastdisp.is_fse)   { txt+="32Fse "; }
  if(lastdisp.is_landscape==undefined||disp.is_landscape!=lastdisp.is_landscape) { txt+="64IsLAND "; }
  if(lastdisp.wh_ratio==undefined||disp.wh_ratio!=lastdisp.wh_ratio) { txt+="128whRAt "; }
  if(lastdisp.hw_ratio==undefined||disp.hw_ratio!=lastdisp.hw_ratio) { txt+="256hwRAt "; }
  if(lastdisp.orient==undefined||disp.orient!=lastdisp.orient)   { txt+="512Orient "; }
  if(lastdisp.angle==undefined||disp.angle!=lastdisp.angle)   { txt+="1024Angle "; }
  break;
  }
 return txt;
 }



 function envDisplayCompare (disp,lastdisp)
 {
 var change=0;
 while(1)
  {
  if(lastdisp.win_wid==undefined||disp.win_wid!=lastdisp.win_wid) { change+=1; }
  if(lastdisp.win_hit==undefined||disp.win_hit!=lastdisp.win_hit) { change+=2; }
  if(lastdisp.scr_wid==undefined||disp.scr_wid!=lastdisp.scr_wid) { change+=4; }
  if(lastdisp.scr_hit==undefined||disp.scr_hit!=lastdisp.scr_hit) { change+=8; }
  if(lastdisp.density==undefined||disp.density!=lastdisp.density) { change+=16; }
  if(lastdisp.is_fse==undefined||disp.is_fse!=lastdisp.is_fse)   { change+=32; }
  if(lastdisp.is_landscape==undefined||disp.is_landscape!=lastdisp.is_landscape) { change+=64; }
  if(lastdisp.wh_ratio==undefined||disp.wh_ratio!=lastdisp.wh_ratio) { change+=128; }
  if(lastdisp.hw_ratio==undefined||disp.hw_ratio!=lastdisp.hw_ratio) { change+=256; }
  if(lastdisp.orient==undefined||disp.orient!=lastdisp.orient)   { change+=512; }
  if(lastdisp.angle==undefined||disp.angle!=lastdisp.angle)   { change+=1024; }
  break;
  }
 return change;
 }






 function envTitleSet (title)
 {
 document.title=title;
 }



 function envTitleGet ()
 {
 return document.title;
 }



 function envReload (forced,ms)
 {
 if(aa.env_obj.state.is_reloading===true) { aa.debugAlert(); return true; }
 ms=parseInt(ms+aa.numRand(100));
 setTimeout(function() { window.location.reload(forced);  return false;  }, ms);
 return true;
 }


 function envGoto (ms,url)
 {
 if(aa.env_obj.state.is_reloading===true) { aa.debugAlert(); return true; }
 ms=parseInt(ms+aa.numRand(100));
 setTimeout(function() { window.location.href=url;  return false;  }, ms);
 return true;
 }



 function envFavIconGet ()
 {
 return document.getElementById("favicon");
 }




 function envFavIconSet (url)
 {
 var fi;
 fi=envFavIconGet();
 fi.href=url;
 }



 function envManifestInit (id)
 {
 var obj;
 obj={};
 obj.type="manifest";
 obj.id=id;
 obj.manifest={};
 //document.querySelector("#"+obj.id).setAttribute('href','/my-dynamic-manifest-url.json');
 return obj;
 }



 function envManifestSet (obj,key,val)
 {
 if(obj.type!="manifest") { return null; }
 obj.manifest[key]=val;
 return obj;
 }



 function envManifestApply (obj)
 {
 var sm,bl,mu;
 if(obj.type!="manifest") { return null; }
 sm=JSON.stringify(obj.manifest);
 bl=new Blob([sm],{type:'application/json'});
 mu=URL.createObjectURL(bl);
 document.querySelector('#manifestId').setAttribute('href',mu);
 return true;
 }

/*

 if(isCanvasSupported)
  {
  canvas=document.createElement('canvas');
  ctx=canvas.getContext('2d');
  txt='aaLib.DNA.RNA.NOJAB.NOCVPP.fingerprint.unq';
  ctx.textBaseline="top";
  ctx.font="14.4px Arial";
  ctx.textAlign="alphabetic";
  ctx.fillStyle="#f60212";
  ctx.fillRect(125,1,62.123,20.2);
  ctx.fillStyle="#069392";
  ctx.fillText(txt,2,15);
  ctx.fillStyle="rgba(102,204,0,0.7)";
  ctx.fillText(txt,4,17);
  keys.push(canvas.toDataURL("image/jpeg",0.7));
  }




 function envCpuMonitorBegin ()
 {
 var obj;
 obj={};
 obj.type="cpumon";
 obj.speed=0;
 obj.stage=10;
 obj.canvas=null;
 obj.ctx=null;
 return obj;
 }




 function envCpuMonitorGet (obj)
 {
 if(!obj) { return null; }
 if(obj.type!="cpumon") { return null; }

 switch(obj.stage)
  {
  case 10:
  obj.canvas=document.createElement('canvas');
  obj.ctx=obj.canvas.getContext('2d');
  obj.dom.width=512;
  obj.dom.height=512;
  obj.dom.style.left="0px";
  obj.dom.style.top="0px";
  obj.dom.style.width="512px";
  obj.dom.style.height="512px";
  obj.stage=20;
  break;

  case 20:




 if(aa.env_obj.cpu_basen==0)
  {
  aa.env_obj.cpu_basen=1;
  aa.env_obj.cpu_speed=0;
  }
 if(aa.env_obj.cpu_basen<9)
  {
  mc=aa.timerTikNow(true);
  base=aa.env_obj.cpu_basen;
  result=0;
  for(i=Math.pow(base,7);i>=0;i--)
   {
   result+=Math.atan(i)*Math.tan(i);
   }
  aa.env_obj.cpu_basen++;
  el=aa.timerTikNow(true)-mc;
  aa.env_obj.cpu_speed+=el;
  if(aa.env_obj.cpu_basen<9)   {  return 0;  }
  aa.env_obj.cpu_speed>>=0;
  }
 return aa.env_obj.cpu_speed;
 }






 function zenvManifestApply (obj)
 {
 var sid,sm,blob,mu;
 var mf,nm,link;
 if(obj.type!="manifest") { return false; }
 sm=JSON.stringify(obj.manifest);
 ///aa.debugLogger(5,sm);
 //sm=obj.
 blob=new Blob([sm],{type:'application/json'});
 mu=URL.createObjectURL(blob);
 document.getElementById(obj.id).setAttribute('href',mu);
 return true;
 }
*/


 function envClipboardWrite (txt)
 {
 return navigator.clipboard.writeText(txt);//obj.vars.txt.substring(obj.vars.sel_start,obj.vars.sel_end+1));
 }


 function envClipboardRead ()
 {
 //delete aa.env_obj.state.copy_value;
 navigator.clipboard
  .readText()
  .then((txt)=>
   (
   aa.env_obj.state.copy_value="ee "+txt
   //app.coc=txt
   //aa.env_obj.copy_val=txt
   ///document.getElementById("outbox").innerText =txt
   ));
 /*
  .then((txt)=>
   (
   alert(txt)
   //document.getElementById("outbox").innerText = clipText
   ));
*/
 //return(aa.env_obj.state.paste_value);
 }



 function envClipboardGet ()
 {
 var res=aa.env_obj.state.copy_value;
 if(res!=undefined)
  {
 // delete aa.env_obj.state.copy_value;
  return res;
  }
 return res;
 }

//-----------------------------------------------------------------------
// https://codepen.io/Hyperplexed/full/MWXBRBp


//https://www.tg007.net/raws
//https://www.alien.net.au/irc/irc2numerics.html
//http://chi.cs.uchicago.edu/chirc/irc_examples.html

// queueWrite   push() method adds new items to the end of an array.
// queuePush unshift() method adds new items to the beginning of an array.
// queuePop      pop() method removes (pops) the last item of an array.
// queueRead   shift() method removes the first item of an array.



 function queueObjInit ()
 {
 if(Object.keys(queue_obj).length!=0) { return; }
 queue_obj.handef=handleDefine("queue",256);
 queue_obj.is_init=true;
 }




 function queueCreate ()
 {
 var i,h,obj;
 for(i=0;i<queue_obj.handef.slots;i++)
  {
  obj=queue_obj.handef.array[i];
  if(obj.in_use!=false) { continue; }
  obj.ms_start=timerMsRunning();
  obj.msgs_total=0|0;
  obj.msgs_queued=0|0;
  obj.msgs_queue=[];
  h=handleUse(queue_obj.handef,i)
  return h;
  }
 return 0;
 }



 function queueDestroy (handle)
 {
 var obj;
 if((obj=handleCheck(queue_obj.handef,handle))==null) { return false; }
 obj.msgs_queue=[];
 handleRemove(queue_obj.handef,handle);
 return true;
 }




 function queueGet (handle)
 {
 return(handleCheck(queue_obj.handef,handle));
 }



 function queueWrite (handle,data)
 {
 var obj;
 if((obj=handleCheck(queue_obj.handef,handle))==null) { aa.debugAlert(); aa.debugLogger(5,"queuewrite handle check fail "+handle); return false; }
 obj.msgs_queued++;
 obj.msgs_queue.push(data);
 return true;
 }


 function queueRead (handle)
 {
 var msg,obj,bu8;
 if((obj=handleCheck(queue_obj.handef,handle))==null) {  return null; }
 if(obj.msgs_queued==0) {   return null; }
 msg=obj.msgs_queue.shift();
 obj.msgs_queued--;
 obj.msgs_total++;
 return msg;
 }



 function queuePeek (handle,ofs)
 {
 var msg,obj;
 if((obj=handleCheck(queue_obj.handef,handle))==null) { return null; }
 if(ofs<0) { return null; }
 if(ofs>=obj.msgs_queued) { return null; }
 msg=obj.msgs_queue[ofs];
 return msg;
 }



 function queueDiscard (handle)
 {
 var obj;
 if((obj=handleCheck(queue_obj.handef,handle))==null) { return false; }
 if(obj.msgs_queued==0) {  return false; }
 obj.msgs_queue.shift();
 obj.msgs_queued--;
 obj.msgs_total++;
 return true;
 }



 function queuePush (handle,data)
 {
 var obj;
 if((obj=handleCheck(queue_obj.handef,handle))==null) { aa.debugAlert(); aa.debugLogger(5,"queuewrite handle check fail "+handle); return false; }
 obj.msgs_queued++;
 obj.msgs_queue.unshift(data);
 return true;
 }



 function queuePop (handle)
 {
 var msg,obj,bu8;
 if((obj=handleCheck(queue_obj.handef,handle))==null) {  return null; }
 if(obj.msgs_queued==0) {   return null; }
 msg=obj.msgs_queue.pop();
 obj.msgs_queued--;
 obj.msgs_total++;
 return msg;
 }




 function queueStatus (handle)
 {
 var obj,info;
 if((obj=handleCheck(queue_obj.handef,handle))==null) { alert(handle); return null; }
 info={};
 info.msgs_queued=obj.msgs_queued;
 info.msgs_total=obj.msgs_total;
 return info;
 }




//-----------------------------------------------------------------------


 function pointerIsDeviceTouch ()
 {
 return(('ontouchstart' in window)||(navigator.maxTouchPoints>0)||(navigator.msMaxTouchPoints>0));
 }




 function pointerObjInit ()
 {
 var state,c;
 if(Object.keys(pointer_obj).length!=0) { return; }
 state={};
 state.is_started=false;
 state.event_counter=0;
 pointer_obj.state=state;
 pointer_obj.is_init=true;
 pointer_obj.coal_extra=0;
 }




 function pointerStart ()
 {
 if(pointer_obj.state.is_started!=false) { return false; }
 pointer_obj.state.is_started=true;
 pointer_obj.state.event_count=0;
 pointer_obj.state.event_queue_handle=aa.queueCreate();
 pointer_obj.state.event_queue_status=aa.queueStatus(pointer_obj.state.event_queue_handle);
 aa.handleCommentSet(pointer_obj.state.event_queue_handle,"pointerQueue");
 window.addEventListener("pointerdown",function(ev)    { pointerOnEvent("pointerdown",ev); },false);
 window.addEventListener("pointerup",function(ev)      { pointerOnEvent("pointerup",ev); },false);
 window.addEventListener("pointermove",function(ev)    { pointerOnEvent("pointermove",ev); },false);
 window.addEventListener("pointercancel;",function(ev) { pointerOnEvent("pointercancel",ev); },false);
 window.addEventListener("pointerout",function(ev)     { pointerOnEvent("pointerout",ev); },false);
 window.addEventListener("pointerleave",function(ev)   { pointerOnEvent("pointerleave",ev); },false);
 window.addEventListener("touchstart",function(ev) { touchOnEvent("touchstart",ev); },false);
 return true;
 }






 function touchOnEvent (name,ev)
 {
 var msg;
 msg={};

 if(1) { ev.preventDefault(); }  //march
 //ev.preventDefault();
//ev.stopPropagation();
//ev.stopImmediatePropagation();
 return true;
 }



 function pointerOnEvent (name,ev)
 {
 var msg,evs,i;
 var tsdif;
 var curms,coal;
 //console.log(name);
 //console.log(ev);
 curms=aa.timerMsRunning();
 msg={};
 msg.ms=curms;//aa.timerMsRunning();
 msg.stamp=ev.timeStamp;
 msg.counter=aa.pointer_obj.state.event_counter++;
 msg.event={};
 msg.event.pointerType=ev.pointerType;
 msg.event.type=ev.type;
 msg.event.pageX=ev.pageX;
 msg.event.pageY=ev.pageY;
 msg.event.clientX=ev.clientX;
 msg.event.clientY=ev.clientY;
 msg.event.offsetX=ev.offsetX;
 msg.event.offsetY=ev.offsetY;
 msg.event.pointerId=ev.pointerId;
 aa.queueWrite(pointer_obj.state.event_queue_handle,msg);
 pointer_obj.state.event_queue_status=aa.queueStatus(pointer_obj.state.event_queue_handle);
 if(1) { ev.preventDefault(); }  //march
 return true;
 }





 function pointerPeek (ofs)
 {
 var msg;
 if(pointer_obj.state.is_started!=true) { return null; }
 msg=aa.queuePeek(pointer_obj.state.event_queue_handle,ofs);
 return msg;
 }




 function pointerRead ()
 {
 var msg;
 if(pointer_obj.state.is_started!=true) { return null; }
 msg=aa.queueRead(pointer_obj.state.event_queue_handle);
 pointer_obj.state.event_queue_status=aa.queueStatus(pointer_obj.state.event_queue_handle);
 return msg;
 }



 function pointerStatus ()
 {
 var info;
 if(pointer_obj.state.is_started!=true) { return null; }
 pointer_obj.state.event_queue_status=aa.queueStatus(pointer_obj.state.event_queue_handle);
 info={};
 info.msgs_queued=pointer_obj.state.event_queue_status.msgs_queued;
 info.msgs_total=pointer_obj.state.event_queue_status.msgs_total;
 return info;
 }




//-----------------------------------------------------------------------


 function keyboardObjInit ()
 {
 var state,i;
 if(Object.keys(keyboard_obj).length!=0) { return; }
 state={};
 state.is_started=false;
 state.down_count=0;
 state.event_count=0;
 state.hit_map=[];
 for(i=0;i<256;i++) { state.hit_map[i]=0; }
 state.event_queue_handle=0;
 state.event_queue_status=null;
 keyboard_obj.state=state;
 keyboard_obj.is_init=true;
 }







 function keyboardStart ()
 {
 var i;
 if(keyboard_obj.state.is_started!=false) { return false; }
 keyboard_obj.state.is_started=true;
 keyboard_obj.state.down_count=0;
 keyboard_obj.state.event_count=0;
 keyboard_obj.state.hit_map=[];
 for(i=0;i<256;i++) { keyboard_obj.state.hit_map[i]=0; }
 keyboard_obj.state.event_queue_handle=aa.queueCreate();
 keyboard_obj.state.event_queue_status=aa.queueStatus(keyboard_obj.state.event_queue_handle);
 aa.handleCommentSet(keyboard_obj.state.event_queue_handle,"keyboardQueue");
 document.addEventListener('keyup',function(event)    { keyboardOnEvent("keyup",event);    });
 document.addEventListener('keydown',function(event)  { keyboardOnEvent("keydown",event);  });
 document.addEventListener('keypress',function(event) { keyboardOnEvent("keypress",event); });
 return true;
 }



 function keyboardOnEvent (name,ev)
 {
 var msg,kc,code;
 if(ev.defaultPrevented) { return;  }
 code=ev.keyCode||ev.which;
 kc=ev.keyCode||ev.key;
 if(isNaN(kc))  {  aa.debugAlert();  }
 msg={};
 msg.name=name;
 msg.keyCode=kc;
 msg.key=ev.key;
 msg.ascii=ev.key.charCodeAt(0);
 msg.alt_key=ev.altKey;
 msg.ctrl_key=ev.ctrlKey;
 msg.shift_key=ev.shiftKey;
 aa.queueWrite(keyboard_obj.state.event_queue_handle,msg);
 keyboard_obj.state.event_queue_status=aa.queueStatus(keyboard_obj.state.event_queue_handle);
 if(name=="keydown")
  {
  if(keyboard_obj.state.hit_map[kc]==0)
   {
   keyboard_obj.state.event_count++;
   keyboard_obj.state.down_count++;
   keyboard_obj.state.hit_map[kc]=1;
   }
  }
 else
 if(name=="keyup")
  {
  if(keyboard_obj.state.hit_map[kc]>0)
   {
   keyboard_obj.state.event_count++;
   keyboard_obj.state.down_count--;
   keyboard_obj.state.hit_map[kc]=0;
   }
  }
 if(msg.ctrl_key&&(msg.key=='v'||msg.key=='V'))//||msg.key=='c'||msg.key=='C'||msg.key=='x'||msg.key=='X'))//||msg.key=='a'||msg.key=='A'))
  {
  }
 else
  {
  if(code==9||msg.alt_key||msg.ctrl_key)
   {
   ev.preventDefault();
   }
  }
 }



 function keyboardPeek (ofs)
 {
 var msg;
 if(keyboard_obj.state.is_started!=true) { return null; }
 msg=aa.queuePeek(keyboard_obj.state.event_queue_handle,ofs);
 return msg;
 }




 function keyboardRead ()
 {
 var msg;
 if(keyboard_obj.state.is_started!=true) { return null; }
 msg=aa.queueRead(keyboard_obj.state.event_queue_handle);
 keyboard_obj.state.event_queue_status=aa.queueStatus(keyboard_obj.state.event_queue_handle);
 return msg;
 }






 function keyboardStatus ()
 {
 var i,j,info,len;
 if(keyboard_obj.state.is_started!=true) { return null; }
 keyboard_obj.state.event_queue_status=aa.queueStatus(keyboard_obj.state.event_queue_handle);
 info={};
 info.down_count=keyboard_obj.state.down_count;
 info.event_count=keyboard_obj.state.event_count;
 info.hit_rep=[];
 info.hit_key=[];
 len=keyboard_obj.state.hit_map.length;
 j=0;
 for(i=0;i<len;i++)
  {
  if(keyboard_obj.state.hit_map[i]==0) { continue; }
  info.hit_key[j]=i;
  info.hit_rep[j]=keyboard_obj.state.hit_map[i];
  j++;
  }
 if(j!=info.down_count) { aa.debugAlert(); }
 info.msgs_queued=keyboard_obj.state.event_queue_status.msgs_queued;
 info.msgs_total=keyboard_obj.state.event_queue_status.msgs_total;
 return info;
 }




 function keyboardMessageSet (name,key,ascii,ak,ck,sk)
 {
 var msg;
 if(key==null&&ascii==null) { return null; }
 msg={};
 msg.name=name;
 msg.keyCode=0;
 msg.key=key;
 msg.ascii=ascii;
 if(msg.ascii==null)  {  msg.ascii=msg.key.charCodeAt(0);         }
 if(msg.key==null)    {  msg.key=String.fromCharCode(msg.ascii);  }
 if(ak==true||ak==1)  {  msg.alt_key=true; }  else
 if(ak==false||ak==0) {  msg.alt_key=false; }
 if(ck==true||ck==1)  {  msg.ctrl_key=true; }  else
 if(ck==false||ck==0) {  msg.ctrl_key=false; }
 if(sk==true||sk==1)  {  msg.shift_key=true; }  else
 if(sk==false||sk==0) {  msg.shift_key=false; }
 return msg;
 }



//-----------------------------------------------------------------------





 function storageObjInit ()
 {
 let test='test';
 if(Object.keys(storage_obj).length!=0) { return; }
 try
  {
  localStorage.setItem(test,test);
  localStorage.removeItem(test);
  }
 catch(e)
  {
  alert(e);
  return false;
  }
 storage_obj.handef=handleDefine("storage",64);
 storage_obj.is_init=true;
 }





 function storageCreate (issesh)
 {
 var i,h,obj;
 if(storage_obj.is_init!=true) { return 0; }
 for(i=0;i<storage_obj.handef.slots;i++)
  {
  obj=storage_obj.handef.array[i];
  if(obj.in_use!=false) { continue; }
  h=handleUse(storage_obj.handef,i)
  if(issesh) { obj.is_session=true; }
  else       { obj.is_session=false; }
  obj.count=0;
  if(obj.is_session)   {   obj.count=sessionStorage.length;   }
  else                 {   obj.count=localStorage.length;     }
  return h;
  }
 return 0;
 }





 function storageDestroy (handle)
 {
 var obj;
 if((obj=handleCheck(storage_obj.handef,handle))==null) { return false; }
 handleRemove(storage_obj.handef,handle);
 return true;
 }




 function storageRevise (revkey,revval)
 {
 var han,tup;

 han=aa.storageCreate(false);
 tup=aa.storageRead(han,revkey);
 if(tup==null||tup!=revval)
  {
  aa.storagePurge(han);
  aa.storageWrite(han,revkey,revval);
  tup=aa.storageRead(han,revkey);
  if(tup==null) { aa.debugAlert("sss"); }
  }
 aa.storageDestroy(han);
 return tup;
 }




 function storageGet (handle)
 {
 return(handleCheck(storage_obj.handef,handle));
 }




 function storagePurge (handle)
 {
 var obj;
 if((obj=handleCheck(storage_obj.handef,handle))==null) { return false; }
 if(obj.is_session)  {  sessionStorage.clear();  }
 else                {  localStorage.clear();  }
 if(obj.is_session)  {  obj.count=sessionStorage.length;   }
 else                {  obj.count=localStorage.length;     }
 return true;
 }




 function storageRead (handle,key)
 {
 var obj,val;
 if((obj=handleCheck(storage_obj.handef,handle))==null) { return null; }
 if(obj.is_session)  {  val=sessionStorage.getItem(key);  }
 else                {  val=localStorage.getItem(key);  }
 if(obj.is_session)  {  obj.count=sessionStorage.length;   }
 else                {  obj.count=localStorage.length;     }
 return val;
 }




 function storageWrite (handle,key,val)
 {
 var obj;
 if((obj=handleCheck(storage_obj.handef,handle))==null) { return false; }
 if(obj.is_session)  {  sessionStorage.setItem(key,val);  }
 else                {  localStorage.setItem(key,val);  }
 if(obj.is_session)  {  obj.count=sessionStorage.length;   }
 else                {  obj.count=localStorage.length;     }
 return true;
 }



 function storageRemove (handle,key)
 {
 var obj;
 if((obj=handleCheck(storage_obj.handef,handle))==null) { return false; }
 if(obj.is_session)  {  sessionStorage.removeItem(key);  }
 else                {  localStorage.removeItem(key);  }
 if(obj.is_session)  {  obj.count=sessionStorage.length;   }
 else                {  obj.count=localStorage.length;     }
 return true;
 }






 function storageTuple (handle,index)
 {
 var obj,key,val,nfo;
 if((obj=handleCheck(storage_obj.handef,handle))==null) { return false; }
 if(obj.is_session)  {  key=sessionStorage.key(index);  val=sessionStorage.getItem(key);  }
 else                {  key=localStorage.key(index);    val=localStorage.getItem(key);    }
 if(obj.is_session)  {  obj.count=sessionStorage.length;   }
 else                {  obj.count=localStorage.length;     }
 nfo={};
 nfo.key=key;
 nfo.val=val;
 return nfo;
 }






 function storageStatus (handle)
 {
 var obj,info;
 if((obj=handleCheck(storage_obj.handef,handle))==null) { return null; }
 info={};
 if(obj.is_session)  { info.is_session=true;   info.count=sessionStorage.length;   }
 else                { info.is_session=false;  info.count=localStorage.length;     }
 return info;
 }



 function storageQuickRead (issesh,key)
 {
 var han,dat;
 if((han=aa.storageCreate(issesh))==0) { return null; }
 if((dat=aa.storageRead(han,key))===null) {  aa.storageDestroy(han); return null;    }
 aa.storageDestroy(han);
 return dat;
 }


 function storageQuickWrite (issesh,key,val)
 {
 var han,ret;
 if((han=aa.storageCreate(issesh))==0) { return false; }
 ret=aa.storageWrite(han,key,val);
 aa.storageDestroy(han);
 return ret;
 }


 function storageQuickRemove (issesh,key)
 {
 var han,ret;
 if((han=aa.storageCreate(issesh))==0) { return false; }
 ret=aa.storageRemove(han,key);
 aa.storageDestroy(han);
 return ret;
 }


 function storageQuickCount (issesh)
 {
 var count;
 //if((han=aa.storageCreate(issesh))==0) { return false; }
 if(issesh)  { count=sessionStorage.length;   }
 else        { count=localStorage.length;     }
 return count;
 }


//-----------------------------------------------------------------------



 function guiObjInit ()
 {
 var p;
 if(Object.keys(gui_obj).length!=0) { return; }
 gui_obj.handef=handleDefine("gui",64);
 gui_obj.is_init=true;
 gui_obj.font_fixes=[];
 //gui_obj.widget_ray=[];
 gui_obj.web_pal=[
  {"name":"INDIANRED",                 "hex":"#CD5C5C",    "rgb":[205,92,92,1.0],    "fam":["red","brown"]  },
  {"name":"LIGHTCORAL",                "hex":"#F08080",    "rgb":[240,128,128,1.0],  "fam":["red","pink","coral","light"]  },
  {"name":"SALMON",                    "hex":"#FA8072",    "rgb":[250,128,114,1.0],  "fam":["red","pink","orange","salmon"]  },
  {"name":"DARKSALMON",                "hex":"#E9967A",    "rgb":[233,150,122,1.0],  "fam":["red","pink","orange","salmon","dark"]  },
  {"name":"LIGHTSALMON",               "hex":"#FFA07A",    "rgb":[255,160,122,1.0],  "fam":["red","pink","orange","salmon","light"]  },
  {"name":"CRIMSON",                   "hex":"#DC143C",    "rgb":[220,20,60,1.0],    "fam":["red"]  },
  {"name":"RED",    "hex":"#FF0000",    "rgb":[255,0,0,1.0],    "fam":["red"]  },
  {"name":"DARKRED",    "hex":"#8B0000",    "rgb":[139,0,0,1.0],    "fam":["red","dark"]  },
  {"name":"PINK",    "hex":"#FFC0CB",    "rgb":[255,192,203,1.0],    "fam":["pink"]  },
  {"name":"LIGHTPINK",    "hex":"#FFB6C1",    "rgb":[255,182,193,1.0],    "fam":["pink","light"]  },
  {"name":"HOTPINK",    "hex":"#FF69B4",    "rgb":[255,105,180,1.0],    "fam":["pink","hot"]  },
  {"name":"DEEPPINK",    "hex":"#FF1493",    "rgb":[255,20,147,1.0],    "fam":["pink","deep"]  },
  {"name":"MEDIUMVIOLETRED",    "hex":"#C71585",    "rgb":[199,21,133,1.0],    "fam":["pink","purple","violet","medium"]  },
  {"name":"PALEVIOLETRED",             "hex":"#DB7093",    "rgb":[219,112,147,1.0],    "fam":["pink","pale","violet"]  },
  {"name":"CORAL",    "hex":"#FF7F50",    "rgb":[255,127,80,1.0],    "fam":["orange","coral"]  },
  {"name":"TOMATO",    "hex":"#FF6347",    "rgb":[255,99,71,1.0],    "fam":["orange","red"]  },
  {"name":"ORANGERED",    "hex":"#FF4500",    "rgb":[255,69,0,1.0],    "fam":["orange","red"]  },
  {"name":"DARKORANGE",    "hex":"#FF8C00",    "rgb":[255,140,0,1.0],    "fam":["orange","dark"]  },
  {"name":"ORANGE",    "hex":"#FFA500",    "rgb":[255,165,0,1.0],    "fam":["orange"]  },
  {"name":"GOLD",    "hex":"#FFD700",    "rgb":[255,215,0,1.0],    "fam":["yellow"]  },
  {"name":"YELLOW",    "hex":"#FFFF00",    "rgb":[255,255,0,1.0],    "fam":["yellow"]  },
  {"name":"LIGHTYELLOW",    "hex":"#FFFFE0",    "rgb":[255,255,224,1.0],    "fam":["yellow","light"]  },
  {"name":"LEMONCHIFFON",    "hex":"#FFFACD",    "rgb":[255,250,205,1.0],    "fam":["yellow","lemon"]  },
  {"name":"LIGHTGOLDENRODYELLOW",    "hex":"#FAFAD2",    "rgb":[250,250,210,1.0],    "fam":["yellow","light","goldenrod","tan"]  },
  {"name":"PAPAYAWHIP",    "hex":"#FFEFD5",    "rgb":[255,239,213,1.0],    "fam":["pink","tan"]  },
  {"name":"MOCCASIN",    "hex":"#FFE4B5",    "rgb":[255,228,181,1.0],    "fam":["pink","tan"]  },
  {"name":"PEACHPUFF",    "hex":"#FFDAB9",    "rgb":[255,218,185,1.0],    "fam":["pink","orange","peach"]  },
  {"name":"PALEGOLDENROD",    "hex":"#EEE8AA",    "rgb":[238,232,170,1.0],    "fam":["yellow","tan","pale","goldenrod"]  },
  {"name":"KHAKI",    "hex":"#F0E68C",    "rgb":[240,230,140,1.0],    "fam":["yellow","tan","khaki"]  },
  {"name":"DARKKHAKI",    "hex":"#BDB76B",    "rgb":[189,183,107,1.0],    "fam":["yellow","tan","khaki","dark"]  },
  {"name":"LAVENDER",    "hex":"#E6E6FA",    "rgb":[230,230,250,1.0],    "fam":["purple"]  },
  {"name":"THISTLE",    "hex":"#D8BFD8",    "rgb":[216,191,216,1.0],    "fam":["purple"]  },
  {"name":"PLUM",    "hex":"#DDA0DD",    "rgb":[221,160,221,1.0],   "fam":["purple"]  },
  {"name":"VIOLET",    "hex":"#EE82EE",    "rgb":[238,130,238,1.0],    "fam":["purple","violet","pink"]  },
  {"name":"ORCHID",    "hex":"#DA70D6",    "rgb":[218,112,214,1.0],    "fam":["purple","orchid"]  },
  {"name":"FUCHSIA",    "hex":"#FF00FF",    "rgb":[255,0,255,1.0],    "fam":["purple","pink"]  },
  {"name":"MAGENTA",    "hex":"#FF00FF",    "rgb":[255,0,255,1.0],    "fam":["purple","pink","magenta"]  },
  {"name":"MEDIUMORCHID",    "hex":"#BA55D3",    "rgb":[186,85,211,1.0],    "fam":["purple","orchid","medium"]  },
  {"name":"MEDIUMPURPLE",    "hex":"#9370DB",    "rgb":[147,112,219,1.0],    "fam":["purple","medium"]  },
  {"name":"REBECCAPURPLE",    "hex":"#663399",    "rgb":[102,51,153,1.0],    "fam":["purple","blue"]  },
  {"name":"BLUEVIOLET",    "hex":"#8A2BE2",    "rgb":[138,43,226,1.0],    "fam":["purple","blue","violet"]  },
  {"name":"DARKVIOLET",    "hex":"#9400D3",    "rgb":[148,0,211,1.0],    "fam":["purple","dark","violet"]  },
  {"name":"DARKORCHID",                "hex":"#9932CC",    "rgb":[153,50,204,1.0],   "fam":["purple","dark","orchid"]  },
  {"name":"DARKMAGENTA",               "hex":"#8B008B",    "rgb":[139,0,139,1.0],    "fam":["purple","dark","magenta"]  },
  {"name":"PURPLE",                    "hex":"#800080",    "rgb":[128,0,128,1.0],    "fam":["purple"]  },
  {"name":"INDIGO",                    "hex":"#4B0082",    "rgb":[75,0,130,1.0],     "fam":["purple","blue"]  },
  {"name":"SLATEBLUE",                 "hex":"#6A5ACD",    "rgb":[106,90,205,1.0],   "fam":["purple","blue","slate"]  },
  {"name":"DARKSLATEBLUE",             "hex":"#483D8B",    "rgb":[72,61,139,1.0],    "fam":["purple","blue","slate","dark"]  },
  {"name":"MEDIUMSLATEBLUE",           "hex":"#7B68EE",    "rgb":[123,104,238,1.0],  "fam":["purple","blue","slate","medium"]  },
  {"name":"GREENYELLOW",               "hex":"#ADFF2F",    "rgb":[173,255,47,1.0],   "fam":["green","yellow"]  },
  {"name":"CHARTREUSE",                "hex":"#7FFF00",    "rgb":[127,255,0,1.0],    "fam":["green"]  },
  {"name":"LAWNGREEN",                 "hex":"#7CFC00",    "rgb":[124,252,0,1.0],    "fam":["green"]  },
  {"name":"LIME",                      "hex":"#00FF00",    "rgb":[0,255,0,1.0],      "fam":["green"]  },
  {"name":"LIMEGREEN",                 "hex":"#32CD32",    "rgb":[50,205,50,1.0],    "fam":["green"]  },
  {"name":"PALEGREEN",                 "hex":"#98FB98",    "rgb":[152,251,152,1.0],  "fam":["green","pale"]  },
  {"name":"LIGHTGREEN",                "hex":"#90EE90",    "rgb":[144,238,144,1.0],  "fam":["green","light"]  },
  {"name":"MEDIUMSPRINGGREEN",         "hex":"#00FA9A",    "rgb":[0,250,154,1.0],    "fam":["green","medium","spring"]  },
  {"name":"SPRINGGREEN",    "hex":"#00FF7F",    "rgb":[0,255,127,1.0],    "fam":["green","spring"]  },
  {"name":"MEDIUMSEAGREEN",    "hex":"#3CB371",    "rgb":[60,179,113,1.0],    "fam":["green","sea","medium"]  },
  {"name":"SEAGREEN",    "hex":"#2E8B57",    "rgb":[46,139,87,1.0],    "fam":["green","sea"]  },
  {"name":"FORESTGREEN",    "hex":"#228B22",    "rgb":[34,139,34,1.0],    "fam":["green","forest"]  },
  {"name":"GREEN",    "hex":"#008000",    "rgb":[0,128,0,1.0],    "fam":["green"]  },
  {"name":"DARKGREEN",    "hex":"#006400",    "rgb":[0,100,0,1.0],    "fam":["green","dark"]  },
  {"name":"YELLOWGREEN",    "hex":"#9ACD32",    "rgb":[154,205,50,1.0],    "fam":["green","yellow"]  },
  {"name":"OLIVEDRAB",    "hex":"#6B8E23",    "rgb":[107,142,35,1.0],   "fam":["green","olive"]  },
  {"name":"OLIVE",    "hex":"#6B8E23",    "rgb":[128,128,0,1.0],    "fam":["green","olive"]  },
  {"name":"DARKOLIVEGREEN",    "hex":"#556B2F",    "rgb":[85,107,47,1.0],    "fam":["green","olive","dark"]  },
  {"name":"MEDIUMAQUAMARINE",    "hex":"#66CDAA",    "rgb":[102,205,170,1.0],    "fam":["green","blue","aquamarine","medium"]  },
  {"name":"DARKSEAGREEN",    "hex":"#8FBC8B",    "rgb":[143,188,139,1.0],    "fam":["green","sea","dark"]  },
  {"name":"LIGHTSEAGREEN",    "hex":"#20B2AA",    "rgb":[32,178,170,1.0],    "fam":["green","blue","sea","light"]  },
  {"name":"DARKCYAN",    "hex":"#008B8B",    "rgb":[0,139,139,1.0],    "fam":["green","blue","cyan","dark"]  },
  {"name":"TEAL",    "hex":"#008080",    "rgb":[0,128,128,1.0],    "fam":["green","blue"]  },
  {"name":"AQUA",   "hex":"#00FFFF",    "rgb":[0,255,255,1.0],    "fam":["blue","aqua"]  },
  {"name":"CYAN",    "hex":"#00FFFF",    "rgb":[0,255,255,1.0],    "fam":["blue","cyan"]  },
  {"name":"LIGHTCYAN",    "hex":"#E0FFFF",    "rgb":[224,255,255,1.0],    "fam":["blue","cyan","light"]  },
  {"name":"PALETURQUOISE",   "hex":"#AFEEEE",    "rgb":[175,238,238,1.0],    "fam":["blue","turquoise","pale"]  },
  {"name":"AQUAMARINE",    "hex":"#7FFFD4",    "rgb":[127,255,212,1.0],    "fam":["blue","aquamarine"]  },
  {"name":"TURQUOISE",    "hex":"#40E0D0",    "rgb":[64,224,208,1.0],    "fam":["blue","turquoise"]  },
  {"name":"MEDIUMTURQUOISE",    "hex":"#48D1CC",    "rgb":[72,209,204,1.0],    "fam":["blue","turquoise","medium"]  },
  {"name":"DARKTURQUOISE",    "hex":"#00CED1",    "rgb":[0,206,209,1.0],    "fam":["blue","turquoise","dark"]  },
  {"name":"CADETBLUE",    "hex":"#5F9EA0",    "rgb":[95,158,160,1.0],    "fam":["blue","gray"]  },
  {"name":"STEELBLUE",    "hex":"#4682B4",   "rgb":[70,130,180,1.0],    "fam":["blue","steel"]  },
  {"name":"LIGHTSTEELBLUE",    "hex":"#B0C4DE",    "rgb":[176,196,222,1.0],    "fam":["blue","steel","light"]  },
  {"name":"POWDERBLUE",    "hex":"#B0E0E6",    "rgb":[176,224,230,1.0],    "fam":["blue"]  },
  {"name":"LIGHTBLUE",    "hex":"#ADD8E6",    "rgb":[173,216,230,1.0],    "fam":["blue","light"]  },
  {"name":"SKYBLUE",    "hex":"#87CEEB",    "rgb":[135,206,235,1.0],    "fam":["blue","sky"]  },
  {"name":"LIGHTSKYBLUE",    "hex":"#87CEFA",    "rgb":[135,206,250,1.0],    "fam":["blue","sky","light"]  },
  {"name":"DEEPSKYBLUE",    "hex":"#00BFFF",    "rgb":[0,191,255,1.0],    "fam":["blue","sky","deep"]  },
  {"name":"DODGERBLUE",    "hex":"#1E90FF",    "rgb":[30,144,255,1.0],    "fam":["blue"]  },
  {"name":"CORNFLOWERBLUE",    "hex":"#6495ED",    "rgb":[100,149,237,1.0],    "fam":["blue"]  },
  {"name":"ROYALBLUE",    "hex":"#4169E1",    "rgb":[65,105,225,1.0],    "fam":["blue"]  },
  {"name":"BLUE",    "hex":"#0000FF",    "rgb":[0,0,255,1.0],    "fam":["blue"]  },
  {"name":"MEDIUMBLUE",    "hex":"#0000CD",    "rgb":[0,0,205,1.0],    "fam":["blue","medium"]  },
  {"name":"DARKBLUE",    "hex":"#00008B",    "rgb":[0,0,139,1.0],    "fam":["blue","dark"]  },
  {"name":"NAVY",    "hex":"#00008B",    "rgb":[0,0,128,1.0],    "fam":["blue","dark"]  },
  {"name":"MIDNIGHTBLUE",    "hex":"#191970",    "rgb":[25,25,112,1.0],    "fam":["blue","dark"]  },
  {"name":"CORNSILK",    "hex":"#FFF8DC",    "rgb":[255,248,220,1.0],    "fam":["brown","tan"]  },
  {"name":"BLANCHEDALMOND",    "hex":"#FFEBCD",   "rgb":[255,235,205,1.0],    "fam":["brown","tan"]  },
  {"name":"BISQUE",    "hex":"#FFE4C4",    "rgb":[255,228,196,1.0],    "fam":["brown","tan"]  },
  {"name":"NAVAJOWHITE",    "hex":"#FFDEAD",    "rgb":[255,222,173,1.0],    "fam":["brown","tan"]  },
  {"name":"WHEAT",    "hex":"#F5DEB3",    "rgb":[245,222,179,1.0],    "fam":["brown","tan"]  },
  {"name":"BURLYWOOD",    "hex":"#DEB887",    "rgb":[222,184,135,1.0],    "fam":["brown","tan"]  },
  {"name":"TAN",    "hex":"#D2B48C",    "rgb":[210,180,140,1.0],    "fam":["brown","tan"]  },
  {"name":"ROSYBROWN",    "hex":"#BC8F8F",    "rgb":[188,143,143,1.0],    "fam":["brown","tan"]  },
  {"name":"SANDYBROWN",    "hex":"#F4A460",    "rgb":[244,164,96,1.0],    "fam":["brown","orange"]  },
  {"name":"GOLDENROD",    "hex":"#DAA520",    "rgb":[218,165,32,1.0],    "fam":["brown","goldenrod","orange"]  },
  {"name":"DARKGOLDENROD",    "hex":"#B8860B",    "rgb":[184,134,11,1.0],    "fam":["brown","orange","goldenrod","dark"]  },
  {"name":"PERU",    "hex":"#CD853F",    "rgb":[205,133,63,1.0],    "fam":["brown","orange"]  },
  {"name":"CHOCOLATE",    "hex":"#D2691E",    "rgb":[210,105,30,1.0],    "fam":["brown","orange"]  },
  {"name":"SADDLEBROWN",    "hex":"#8B4513",    "rgb":[139,69,19,1.0],    "fam":["brown"]  },
  {"name":"SIENNA",    "hex":"#A0522D",    "rgb":[160,82,45,1.0],    "fam":["brown"]  },
  {"name":"BROWN",    "hex":"#A52A2A",    "rgb":[165,42,42,1.0],    "fam":["brown","red"]  },
  {"name":"MAROON",    "hex":"#800000",    "rgb":[128,0,0,1.0],    "fam":["brown","red"]  },
  {"name":"WHITE",    "hex":"#FFFFFF",    "rgb":[255,255,255,1.0],    "fam":["white"]  },
  {"name":"SNOW",    "hex":"#FFFAFA",    "rgb":[255,250,250,1.0],    "fam":["white"]  },
  {"name":"HONEYDEW",    "hex":"#F0FFF0",    "rgb":[240,255,240,1.0],    "fam":["white"]  },
  {"name":"MINTCREAM",    "hex":"#F5FFFA",    "rgb":[245,255,250,1.0],    "fam":["white"]  },
  {"name":"AZURE",    "hex":"#F0FFFF",    "rgb":[240,255,255,1.0],    "fam":["white"]  },
  {"name":"ALICEBLUE",    "hex":"#F0F8FF",    "rgb":[240,248,255,1.0],    "fam":["white"]  },
  {"name":"GHOSTWHITE",    "hex":"#F8F8FF",    "rgb":[248,248,255,1.0],    "fam":["white"]  },
  {"name":"WHITESMOKE",    "hex":"#F5F5F5",    "rgb":[245,245,245,1.0],    "fam":["white"]  },
  {"name":"SEASHELL",   "hex":"#FFF5EE",    "rgb":[255,245,238,1.0],    "fam":["white","pink"]  },
  {"name":"BEIGE",    "hex":"#F5F5DC",    "rgb":[245,245,220,1.0],    "fam":["white","tan"]  },
  {"name":"OLDLACE",    "hex":"#FDF5E6",    "rgb":[253,245,230,1.0],    "fam":["white","tan"]  },
  {"name":"FLORALWHITE",    "hex":"#FDF5E6",    "rgb":[253,245,230,1.0],    "fam":["white","tan"]  },
  {"name":"IVORY",    "hex":"#FFFFF0",    "rgb":[255,255,240,1.0],    "fam":["white","tan"]  },
  {"name":"ANTIQUEWHITE",    "hex":"#FAEBD7",    "rgb":[250,235,215,1.0],    "fam":["white","tan"]  },
  {"name":"LINEN",    "hex":"#FAF0E6",    "rgb":[250,240,230,1.0],    "fam":["white","tan"]  },
  {"name":"LAVENDERBLUSH",    "hex":"#FFF0F5",    "rgb":[255,240,245,1.0],    "fam":["white","lavender","pink"]  },
  {"name":"MISTYROSE",    "hex":"#FFE4E1",    "rgb":[255,228,225,1.0],    "fam":["white","pink"]  },
  {"name":"GAINSBORO",    "hex":"#DCDCDC",    "rgb":[220,220,220,1.0],    "fam":["gray"]  },
  {"name":"LIGHTGRAY",    "hex":"#D3D3D3",    "rgb":[211,211,211,1.0],    "fam":["gray","light"]  },
  {"name":"SILVER",    "hex":"#C0C0C0",    "rgb":[192,192,192,1.0],    "fam":["gray"]  },
  {"name":"DARKGRAY",    "hex":"#A9A9A9",    "rgb":[169,169,169,1.0],    "fam":["gray","dark"]  },
  {"name":"GRAY",    "hex":"#808080",    "rgb":[128,128,128,1.0],    "fam":["gray"]  },
  {"name":"DIMGRAY",    "hex":"#696969",    "rgb":[105,105,105,1.0],    "fam":["gray"]  },
  {"name":"LIGHTSLATEGRAY",    "hex":"#778899",    "rgb":[119,136,153,1.0],    "fam":["gray","light","slate"]  },
  {"name":"SLATEGRAY",    "hex":"#708090",    "rgb":[112,128,144,1.0],    "fam":["gray", "slate"]  },
  {"name":"DARKSLATEGRAY",    "hex":"#2F4F4F",    "rgb":[47,79,79,1.0],    "fam":["gray", "slate","dark"]  },
  {"name":"BLACK",        "hex":"#000000",    "rgb":[0,0,0,1.0],    "fam":["black"]  }
 ];
 for(p=0;p<gui_obj.web_pal.length;p++)
  {
  gui_obj.web_pal[p].index=p;
  gui_obj.web_pal[p].rgba="rgba("+gui_obj.web_pal[p].rgb[0]+","+gui_obj.web_pal[p].rgb[1]+","+gui_obj.web_pal[p].rgb[2]+","+gui_obj.web_pal[p].rgb[3]+")";
  }
 }








 function guiCreate (type,id,zindex)
 {
 var s,h,obj,i,iscs;

 if(type=="canstream")  { iscs=true;  }
 else                   { iscs=false; }

 switch(type)
  {
  default:  return 0;
  case "video":
  case "canvas":
  case "canstream":
  case "img":
  case "table":
  case "tr":
  case "td":
  case "div":
  case "span":
  case "p":
  case "source":
  case "iframe":
  case "input":
  break;
  }
 for(s=0;s<gui_obj.handef.slots;s++)
  {
  obj=gui_obj.handef.array[s];
  if(obj.in_use!=false)                   { continue;   }
  if((h=handleUse(gui_obj.handef,s))==0)  { return 0;   }

  obj.is_canstream=iscs;
  if(type=="canstream") { type="canvas"; }

  obj.type=type;
  obj.guc=aa_guc++;

  obj.prom=null;

  obj.vars={};
  obj.vars.is_retina=false;
  obj.vars.scale_w=1;
  obj.vars.scale_h=1;
  obj.vars.stage=0;
  obj.vars.spot={};
  obj.vars.spot.slots=256;
  obj.vars.spot.count=0;
  obj.vars.spot.ray=[];
  for(i=0;i<obj.vars.spot.slots;i++)  {  obj.vars.spot.ray[i]=null;  }
  ///obj.vars.needs_paint=true;


  if(id) {  obj.id=id;        }
  else   {  aa.debugAlert();  }
  obj.ctx=null;
  obj.dom=document.createElement(type);
  obj.dom.setAttribute("id",obj.id);
  obj.dom.id=obj.id;

  ///if(type=="video")
   {
   obj.dom.volume=0;
   obj.dom.defaultMuted=true;
   obj.dom.muted=true;
   obj.dom.autoplay=false;
   obj.dom.controls=false;
   obj.dom.loop=false;
   }

  // "contain" "cover" "fill" "none" "scale-down"
  // cover is default i use
 obj.dom.style.position="absolute";
 // obj.dom.style.position="fixed";
  obj.dom.style.zIndex=zindex; // higher zi is on top
  obj.dom.style.opacity=1.0;
  obj.dom.style.display="none";
  aa.guiParentAdd(h,0);


  if(type=="canvas")
   {
   //https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
   //const ctx = canvas.getContext('2d', { alpha: false });
   ///if(obj.id=="b_canstream_0")    {    obj.ctx=document.getElementById(obj.id).getContext("2d",{ desynchronized:true });    }
   ///else    {    obj.ctx=document.getElementById(obj.id).getContext("2d");    }

   obj.ctx=document.getElementById(obj.id).getContext("2d",
    {
    desynchronized:true,
    //preserveDrawingBuffer:true,
    //alpha: false,
    //willReadFrequently:true
    });

   //obj.ctx=document.getElementById(obj.id).getContext("2d",{colorSpace:"srgb"});
   //obj.ctx=document.getElementById(obj.id).getContext("2d",{colorSpace:"display-p3"});
   obj.ctx.self_handle=h;
   obj.ctx.han=h;
   ///obj.ctx.scale_factor=1.0;
   guiCanvasReset(h);
   }

  if(type=="video")
   {
   //obj.dom.style.objectFit="cover";
   //obj.dom.style.objectPosition="50% 50%";
   obj.dom.setAttribute('playsinline','playsinline');
   obj.dom.setAttribute('webkit-playsinline','webkit-playsinline');
   }

  if(type=="video"||iscs==true||type=="canvas")
   {
   //guiFitSet(h,"fill","0% 0%");
   //guiFitSet(h,"none","0% 0%");
   //guiFitSet(h,"contain","50% 50%");
   }

  //guiFitSet(h,"fill","0% 0%");

 obj.dom.style.objectFit="fill";
 //obj.dom.style.objectFit="contain";
 //obj.dom.style.objectFit="cover";
 //obj.dom.style.objectFit="none";
 //obj.dom.style.objectFit="scale-down";
 obj.dom.style.objectPosition="0% 0%";

  if(1) // burp
   {
   obj.dom.style.touchAction="none";
   obj.dom.style.pointerEvents="none";
   }

///  console.log("gui create "+type+"   id="+id);
  return h;
  }
 return 0;
 }







 function guiDestroy (handle)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 guiParentRemove(handle,0);
 handleRemove(gui_obj.handef,handle);
 return true;
 }






 function guiGet (handle,what)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null)   { return null; }
 if((arguments.length==1)||(what==null||what=="obj")) { return obj;           }
 if(arguments.length==2&&what=="dom")                 { return obj.dom;       }
 if(arguments.length==2&&what=="css")                 { return obj.dom.style; }
 if(arguments.length==2&&what=="ctx")                 { return obj.ctx;       }
 if(arguments.length==2&&what=="vars")                { return obj.vars;      }
 return null;
 }





 function guiGroupGet (handle)
 {
 ///if(aa_profiler.is_started) { if(arguments.callee.caller) aaProfilerHit(arguments.callee.name+"--"+arguments.callee.caller.name);  }
 //if(aa_profiler.is_started)  {  aaProfilerHit("guiGroupGet");  }
 var obj,grp;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return null; }
 grp={};
 grp.han=handle;
 grp.obj=obj;
 grp.dom=obj.dom;
 grp.css=obj.dom.style;
 grp.ctx=obj.ctx;
 grp.vars=obj.vars;
 return grp;
 }






 function guiGroupGetById (id)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiGroupGetById");  }
 var han;
 if((han=guiIdFind(id))==0) { return null; }
 return(guiGroupGet(han));
 }





 function guiIdFind (id)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiIdFind");  }
 var obj,s,c,el;
 c=0;
 el=gui_obj.handef.count;
 if(isNaN(id))
  {
  for(s=0;s<gui_obj.handef.slots;s++)
   {
   if(c>=gui_obj.handef.count) { break; }
   obj=gui_obj.handef.array[s];
   if(obj.in_use!=true) { continue;   }
   if(obj.id==id)   {   return obj.self_handle;   }
   c++;
   }
  return 0;
  }
 s=Number(id);
 if(s<0||s>=el) { return 0; }
 obj=gui_obj.handef.array[s];
 if(obj.in_use!=true) { return 0; }
 return obj.self_handle;
 }






 function guiFitSet (handle,fit,opos)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 obj.dom.style.objectFit=fit;
 obj.dom.style.objectPosition=opos;
 //aa.debugAlert();
 return true;
 }










 function guiProbeGet (handle)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiProbeGet"); }
 var grp,obj,isnanxy,isnanwh,area;
 if((grp=aa.guiGroupGet(handle))==null) { return null; }
 obj={};
 obj.type="probe";
 obj.id=grp.obj.id;
 obj.handle=handle;
 obj.grp=grp;
 obj.display=grp.css.display;
 obj.css_area=aa.guiCssAreaGet(grp.han);
 obj.opacity=parseFloat(grp.css.opacity);
 obj.is_retina=grp.vars.is_retina;
 obj.scale_wh=[grp.vars.scale_w,grp.vars.scale_h];
 obj.dom_widhit=[grp.dom.width,grp.dom.height];
 obj.vid_widhit=[grp.dom.videoWidth,grp.dom.videoHeight];
 return obj;
 }







 function guiProbeCompare (probe,disp,retina,opa,x,y,w,h,domw,domh)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiProbeCompare");  }
 var chg,grp;
 if(probe==null)         { return -1; }
 if(probe.type!="probe") { return -1; }
 chg=0;
 while(1)
  {
  chg=0;
  if(probe.display!=disp)       { chg+=1;  }
  if(probe.opacity!=opa)        { chg+=2;  }
  if(probe.css_area.left!=x)    { chg+=4;  }
  if(probe.css_area.top!=y)     { chg+=8;  }
  if(probe.css_area.width!=w)   { chg+=16; } // requires repaint
  if(probe.css_area.height!=h)  { chg+=32; } // requires repaint
  if(probe.is_retina!=retina)   { chg+=64; } // requires repaint

  if(probe.dom_widhit[0]!=(domw*probe.scale_wh[0])) { chg+=128;}
  if(probe.dom_widhit[1]!=(domh*probe.scale_wh[1])) { chg+=256;}

  //if(probe.dom_widhit[0]!=(domw)) { chg+=128;}
  //if(probe.dom_widhit[1]!=(domh)) { chg+=256;}

  //if(probe.dom_widhit[1]!=domh) { chg+=256;}
  break;
  }
 if(aa_profiler.is_started&&chg>0)
  {
  //aaProfilerHit("guiProbeCompare-changed");
  }
 return chg;
 }









 function guiApply (handle,disp,retina,opa,x,y,wid,hit,domw,domh)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiApply");  }
 var obj,aaa,bbb,osw,osh,arx,rat,rath;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }

 if(obj.dom.style.display!=disp)
  {
  obj.dom.style.display=disp;
  }
 if(obj.dom.style.opacity!=opa)
  {
  obj.dom.style.opacity=opa;
  }

 ratw=rath=1;
 if(retina)
  {
  ratw=Math.round(window.devicePixelRatio);
  rath=Math.round(window.devicePixelRatio);
  }

 osw=obj.vars.scale_w;
 osh=obj.vars.scale_h;
 obj.vars.scale_w=ratw;
 obj.vars.scale_h=ratw;

 aaa=Math.round(domw*obj.vars.scale_w);
 bbb=Math.round(domh*obj.vars.scale_h);
 //aaa=domw;
 //bbb=domh;

 if(obj.dom.width!=aaa||obj.dom.height!=bbb)
  {
  guiSizeSet(handle,aaa,bbb);
  //console.log(obj.id+" size set "+domw+"  "+aaa+"   "+obj.dom.width+"  "+obj.vars.scale_w+"  "+domh+"  "+bbb+"  "+obj.dom.height+"  "+obj.vars.scale_h);
  }

 arx={};
 arx.x=parseInt(obj.dom.style.left);
 arx.y=parseInt(obj.dom.style.top);
 arx.w=parseInt(obj.dom.style.width);
 arx.h=parseInt(obj.dom.style.height);
 if(arx.x!=x||arx.y!=y||arx.w!=wid||arx.h!=hit)
  {
  if(x==null)   { aa.debugAlert(); }
  if(y==null)   { aa.debugAlert(); }
  if(wid==null) { aa.debugAlert(); }
  if(hit==null) { aa.debugAlert(); }
  guiCssAreaSet(handle,x,y,wid,hit)
  }
 if(obj.type=="canvas")
  {
  //obj.ctx.transform(obj.vars.scale_w,0,0,obj.vars.scale_h,0,0);
  //if(obj.vars.is_retina!=retina)
  //if(osw!=obj.vars.scale_w||osh!=obj.vars.scale_h)
   {
   obj.ctx.setTransform(obj.vars.scale_w,0,0,obj.vars.scale_h,0,0);
   //console.log(obj.id+" set transform "+osw+"   "+obj.vars.scale_w+"  "+osh+"  "+obj.vars.scale_h);
   }
  }
 obj.vars.is_retina=true;
 if(obj.vars.scale_w<=1.0&&obj.vars.scale_h<=1.0) { obj.vars.is_retina=false; }
 ///obj.vars.needs_paint=true;
 return true;
 }










 function guiParentAdd    (handle,nhandle)
 {
 var obj,nobj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(nhandle==0)
  {
  ///document.getElementById("bodid").appendChild(obj.dom);
  //document.body.appendChild(obj.dom);

  //document.body.appendChild(obj.dom);
  //alert(document.getElementById("bodid"));
  document.getElementById("bodid").appendChild(obj.dom);

  obj.parent_handle=nhandle;
  }
 else
  {
  if((nobj=handleCheck(gui_obj.handef,nhandle))==null) { return false; }
  obj.dom.appendChild(nobj.dom);
  obj.parent_handle=nhandle;
  }
 return true;
 }





 function guiParentRemove (handle,nhandle)
 {
 var obj,pobj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(nhandle==0)
  {
  document.body.removeChild(obj.dom);
  obj.parent_handle=nhandle;
  }
 else
  {
  if((nobj=handleCheck(gui_obj.handef,nhandle))==null) { return false; }
  obj.dom.removeChild(nobj.dom);
  obj.parent_handle=0;
  }
 return true;
 }






 function guiSizesGet (handle)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiSizesGet");  }
 var grp,etc,area,ori,ora;
 if((grp=aa.guiGroupGet(handle))==null) { return null; }
 if((area=aa.guiCssAreaGet(grp.han))==null) { aa.debugAlert(); }
 etc={};
 etc.type="sizes";
 ora=(screen.orientation||{}).angle;
 etc.ora=ora;
 etc.vidwh=[0,0];
 if(grp.dom.videoWidth!==undefined) { etc.vidwh=[grp.dom.videoWidth,grp.dom.videoHeight];    }
 etc.domwh=[grp.dom.width,grp.dom.height];
 //etc.domwh=[grp.dom.offsetWidth,grp.dom.offsetHeight];
 etc.csswh=[area.width,area.height];
 return etc;
 }






 function guiSizeSet (handle,wid,hit)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiSizesSet");  }
 var obj,dom;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 dom=obj.dom;
 if(wid!=null) { dom.width=wid;  }
 if(hit!=null) { dom.height=hit; }
 return true;
 }








 function guiCursorSet (handle,value)
 {
 aa.debugAlert();
 var obj,bod;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 bod=document.getElementsByTagName('body')[0];
 //document.documentElement.style.pointerEvents="";
 //bod.style.pointerEvents="";
 //bod.style.cursor=value;
 setTimeout(function()
  {
  obj.dom.style.pointerEvents="auto";
  obj.dom.style.cursor=value;
  //window.location.reload(forced);  return false;
  },10);
 //obj.dom.style.pointerEvents="none";
 return true;
 }




 function guiCssAreaSet (handle,x,y,w,h)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiCssAreaSet");  }
 var obj,css;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 css=obj.dom.style;
 if(x!=null) { css.left=x+"px";   }
 if(y!=null) { css.top=y+"px";    }
 if(w!=null) { css.width=w+"px";  }
 if(h!=null) { css.height=h+"px"; }
 return true;
 }




/**


 function guiCssAreaGet (handle)
 {
 var obj,area,rect;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return null; }


 rect=obj.dom.getBoundingClientRect();
 rect={};
 if(0)
  {
  rect.left=parseInt(obj.dom.style.left);
  rect.top=parseInt(obj.dom.style.top);
  rect.width=parseInt(obj.dom.style.width);
  rect.height=parseInt(obj.dom.style.height);
  }
 else
  {
  rect.left=parseInt(rect.left);
  rect.top=parseInt(rect.top);
  rect.width=parseInt(rect.width);
  rect.height=parseInt(rect.height);
  if(isNaN(rect.left))   { rect.left=parseInt(obj.dom.style.left);  }
  if(isNaN(rect.top))    { rect.top=parseInt(obj.dom.style.top);    }
  if(isNaN(rect.width))  { rect.width=parseInt(obj.dom.style.width);  }
  if(isNaN(rect.height)) { rect.height=parseInt(obj.dom.style.height); }
  }
 area={};
 area.type="area";
 if(1)
  {
  area.left=Math.ceil(rect.left);
  area.top=Math.ceil(rect.top);
  area.width=Math.ceil(rect.width);
  area.height=Math.ceil(rect.height);
  }
 else
  {
  area.left=rect.left;
  area.top=rect.top;
  area.width=rect.width;
  area.height=rect.height;
  }
 area.lstr=area.left+"px";
 area.tstr=area.top+"px";
 area.wstr=area.width+"px";
 area.hstr=area.height+"px";
 return area;
 }


*/






 function guiCssAreaGet (handle)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiCssAreaGet");  }
 var obj,area,rect;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return null; }

 rect={};
 rect.left=parseInt(obj.dom.style.left);
 rect.top=parseInt(obj.dom.style.top);
 rect.width=parseInt(obj.dom.style.width);
 rect.height=parseInt(obj.dom.style.height);
/*
 rect=obj.dom.getBoundingClientRect();
 rect={};
  rect.left=parseInt(rect.left);
  rect.top=parseInt(rect.top);
  rect.width=parseInt(rect.width);
  rect.height=parseInt(rect.height);
  if(isNaN(rect.left))   { rect.left=parseInt(obj.dom.style.left);  }
  if(isNaN(rect.top))    { rect.top=parseInt(obj.dom.style.top);    }
  if(isNaN(rect.width))  { rect.width=parseInt(obj.dom.style.width);  }
  if(isNaN(rect.height)) { rect.height=parseInt(obj.dom.style.height); }
 */
 area={};
 area.type="area";
 if(1)
  {
  area.left=Math.ceil(rect.left);
  area.top=Math.ceil(rect.top);
  area.width=Math.ceil(rect.width);
  area.height=Math.ceil(rect.height);
  }
 else
 if(0)
  {
  area.left=Math.floor(rect.left);
  area.top=Math.floor(rect.top);
  area.width=Math.floor(rect.width);
  area.height=Math.floor(rect.height);
  }
 else
 if(0)
  {
  area.left=(rect.left>>0);
  area.top=(rect.top>>0);
  area.width=(rect.width>>0);
  area.height=(rect.height>>0);
  }


// area.lstr=area.left+"px";
 //area.tstr=area.top+"px";
 //area.wstr=area.width+"px";
 //area.hstr=area.height+"px";
 return area;
 }





 function guiCssRectGet (handle)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiCssRectGet");  }
 var obj,bndcr,rect;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return null; }
 bndcr=obj.dom.getBoundingClientRect();
 rect=guiRectSet(Math.ceil(bndcr.left),Math.ceil(bndcr.top),Math.ceil(bndcr.width),Math.ceil(bndcr.height));
 return rect;
 }








 function guiCssCordSet (handle,x,y)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiCssCordSet");  }
 var obj,css;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 css=obj.dom.style;
 css.left=x+"px";
 css.top=y+"px";
 return true;
 }




 function guiCssSizeSet (handle,w,h)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiCssSizeSet");  }
 var obj,css;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 css=obj.dom.style;
 css.width=w+"px";
 css.height=h+"px";
 return true;
 }


/*
{
 var grp,etc,area,ori,ora;
 if((grp=aa.guiGroupGet(handle))==null) { return null; }
 if((area=aa.guiCssAreaGet(grp.han))==null) { aa.debugAlert(); }
 etc={};
 etc.type="sizes";
 ora=(screen.orientation||{}).angle;
 etc.ora=ora;
 etc.vidwh=[0,0];
 if(grp.dom.videoWidth!==undefined) { etc.vidwh=[grp.dom.videoWidth,grp.dom.videoHeight];    }
 etc.domwh=[grp.dom.width,grp.dom.height];
 //etc.domwh=[grp.dom.offsetWidth,grp.dom.offsetHeight];
 etc.csswh=[area.width,area.height];
 return etc;
 }

*/



 function guiElementFromPoint (x,y,minzi,maxzi)
 {
 var e,el,grp,c,area,x1,y1,x2,y2,zi,zil,zmx,go;
 zmx=+9999999;
 el=gui_obj.handef.count;
 for(go=0;go<el;go++)
  {
  zil=-9999999;
  c=0;
  for(e=0;e<1000;e++)
   {
   if(c>=el) { break; }
   grp=gui_obj.handef.array[e];
   if(grp==null)        { continue; }
   if(grp.in_use!=true) { continue; }
   c++;
   zi=grp.dom.style.zIndex;
   if(zi>=10000) { continue; }
   if(zi>=zmx)   { continue; }
   if(zi<minzi)  { continue; }
   if(zi>maxzi)  { continue; }
   if(zi>zil)    { zil=zi; }
   }
  if(zil==-9999999) { break; }
  zmx=zil;
  //console.log(zmx);
  c=0;
  for(e=0;e<1000;e++)
   {
   if(c>=el) { break; }
   grp=gui_obj.handef.array[e];
   if(grp==null)        { continue; }
   if(grp.in_use!=true) { continue; }
   c++;
   zi=grp.dom.style.zIndex;
   if(zi!=zil) { continue; }
   if(grp.dom.style.display=="none") { continue; }
   area=aa.guiCssAreaGet(grp.han);
   x1=(area.left>>0);
   y1=(area.top>>0);
   x2=x1+(area.width>>0);
   y2=y1+(area.height>>0);
   if((x<x1)||(y<y1)) { continue; }
   if((x>x2)||(y>y2)) { continue; }
   return grp.han;
   }
  }
 return 0;
 }




 function guiLineHeightGet (handle,lines)
 {
 var ah,fh,dn,obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { aa.debugAlert(); return null; }
 //if((obj=aa.guiGet(handle))==null) { alert(); return 0; }
 ah=document.documentElement.clientHeight||window.innerHeight||document.body.clientHeight;
 dn=1.0;
 if(window.devicePixelRatio!=0.0) { dn=window.devicePixelRatio; }
 fh=((ah/dn)/lines);
 fh=fh*dn;
 ///fh=fh*obj.ctx.scale_factor;
 fh=fh*obj.vars.scale_h;
 return fh;
 }






 function guiPixelHeightGet (handle,pixels)
 {
 var ah,fh,dn,obj;
 aa.debugAlert();
 if((obj=handleCheck(gui_obj.handef,handle))==null) { aa.debugAlert(); return null; }
 //if((obj=aa.guiGet(handle))==null) { alert(); return 0; }
 //ah=document.documentElement.clientHeight||window.innerHeight||document.body.clientHeight;
 ah=document.documentElement.clientHeight||window.innerHeight||document.body.clientHeight;
 dn=1.0;
 if(window.devicePixelRatio!=0.0) { dn=window.devicePixelRatio; }
 //fh=((ah/dn)/lines);
// fh=(pixels/dn);
 fh=((ah/dn)*pixels);
 fh=fh*dn;
 fh=fh*obj.vars.scale_h;//obj.ctx.scale_factor;
 return fh;
 }






 function guiCanvasImageDataNew (width,height)
 {
 var ida;
 if(width<=0||height<=0) { return null; }
 ida=new ImageData(width,height);
 return ida;
 }






 function guiCanvasClear (handle,rect)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiCanvasClear");  }
 var obj,ctx,x,y,w,h;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 ctx=obj.ctx;
 if(0)
  {
  if(rect!==undefined) { x=rect.x; y=rect.y; w=rect.w; h=rect.h; }
  else                 { x=0; y=0; w=obj.dom.width, h=obj.dom.height; }
  aa.guiCanvasFill(handle,x,y,w,h,aa.guiRgbaString(0,0,0,0));
  }
 else
  {
  if(rect!==undefined)  {  ctx.clearRect(rect.x,rect.y,rect.w,rect.h);  }
  else                  {  ctx.clearRect(0,0,obj.dom.width,obj.dom.height);  }
  }
 return true;
 }







 function guiCanvasReset (handle)
 {
 var obj,ctx;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 //return true;
 ctx=aa.guiGet(handle,"ctx");
 ctx.globalAlpha=1;
 ctx.mozImageSmoothingEnabled=false;
 ctx.oImageSmoothingEnabled=false;
 ctx.webkitImageSmoothingEnabled=false;
 ctx.msImageSmoothingEnabled=false;
 ctx.imageSmoothingEnabled=false;
 ctx.lineWidth=1.0;
 ctx.lineCap="butt";
 ctx.lineDashOffset=0.0;
 ctx.lineJoin="miter";
 ctx.miterLimit=10.0;
 ctx.shadowColor="rgba(0,0,0,0)";
 ctx.shadowBlur=0;
 ctx.shadowOffsetX=0;
 ctx.shadowOffsetY=0;
 ctx.textAlign="left";
 ctx.textBaseline="top";
 ctx.filter="none";
 aa.guiCanvasSmoothingSet(handle,false,null,null,null,null);
 return true;
 }




 function guiCanvasSave (handle)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 obj.ctx.save();
 return true;
 }



 function guiCanvasRestore (handle)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 obj.ctx.restore();
 return true;
 }






 function guiCanvasCompositeOperationFromIndex (index)
 {
 var oper;
 switch(index)
  {
  default:  oper=null; break;
  case 0:   oper="source-over";      break;
  case 1:   oper="source-in";        break;
  case 2:   oper="source-out";       break;
  case 3:   oper="source-atop";      break;
  case 4:   oper="destination-over";  break;
  case 5:   oper="destination-in";    break;
  case 6:   oper="destination-out";   break;
  case 7:   oper="destination-atop"; break;
  case 8:   oper="lighter";    break;
  case 9:   oper="copy";        break;
  case 10:  oper="xor";        break;
  case 11:  oper="multiply";    break;
  case 12:  oper="screen";      break;
  case 13:  oper="overlay";     break;
  case 14:  oper="darken";      break;
  case 15:  oper="lighten";     break;
  case 16:  oper="color-dodge";  break;
  case 17:  oper="color-burn";  break;
  case 18:  oper="hard-light";  break;
  case 19:  oper="soft-light";  break;
  case 20:  oper="difference"; break;
  case 21:  oper="exclusion";   break;
  case 22:  oper="hue";         break;
  case 23:  oper="saturation";  break;
  case 24:  oper="color";       break;
  case 25:  oper="luminosity";  break;
  }
 return oper;
 }





 function guiCanvasCompositeOperationToIndex (oper)
 {
 var index;
 switch(oper)
  {
  default:  index=-1; break;
  case "source-over":     index=0; break;
  case "source-in":       index=1; break;
  case "source-out":      index=2; break;
  case "source-atop":     index=3; break;
  case "destination-over": index=4; break;
  case "destination-in":   index=5; break;
  case "destination-out":  index=6; break;
  case "destination-atop": index=7; break;
  case "lighter":    index=8; break;
  case "copy":       index=9; break;
  case "xor":        index=10; break;
  case "multiply":   index=11; break;
  case "screen":     index=12; break;
  case "overlay":    index=13; break;
  case "darken":     index=14; break;
  case "lighten":     index=15; break;
  case "color-dodge": index=16; break;
  case "color-burn": index=17; break;
  case "hard-light": index=18; break;
  case "soft-light": index=19; break;
  case "difference": index=20; break;
  case "exclusion":  index=21; break;
  case "hue":        index=22; break;
  case "saturation": index=23; break;
  case "color":      index=24; break;
  case "luminosity": index=25; break;
  }
 return index;
 }




 function guiCanvasCompositeOperationSet (handle,index)
 {
 var obj,oper;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 if(isNaN(index))
  {
  oper=guiCanvasCompositeOperationToIndex(index);
  if(oper<0) { return false; }
  oper=guiCanvasCompositeOperationFromIndex(oper);
  if(oper==null) { return false; }

  }
 else
  {
  oper=guiCanvasCompositeOperationFromIndex(index);
  if(oper==null) { return false; }
  }
 obj.ctx.globalCompositeOperation=oper;
 return true;
 }





 function guiCanvasCompositeOperationGet (handle)
 {
 var obj,index;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 index=guiCanvasCompositeOperationToIndex(obj.ctx.globalCompositeOperation);
 if(index==-1) { return false; }
 return index;
 }





 function guiCanvasPathBegin (handle)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 obj.ctx.beginPath();
 return true;
 }




 function guiCanvasPathEnd (handle)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 obj.ctx.closePath();
 return true;
 }




 function guiCanvasClip (handle)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 obj.ctx.clip();
 return true;
 }






 function guiCanvasRotate (handle,horz,vert,angle)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 obj.ctx.translate(horz,vert);
 obj.ctx.rotate(aa.numDegreesToRadian(angle));
 obj.ctx.translate(-horz,-vert);
 return true;
 }





 function guiCanvasSmoothingSet (handle,state,offx,offy,blur,color)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 //return true;
 if(state==false)
  {
  obj.ctx.mozImageSmoothingEnabled=false;
  obj.ctx.oImageSmoothingEnabled=false;
  obj.ctx.webkitImageSmoothingEnabled=false;
  obj.ctx.imageSmoothingEnabled=false;
  obj.ctx.imageSmoothingQuality="low";
  obj.ctx.shadowBlur=0;
  obj.ctx.shadowOffsetX=0;
  obj.ctx.shadowOffsetY=0;
  obj.ctx.shadowColor="rgba(0,0,0,0)";
  }
 else
  {
  obj.ctx.mozImageSmoothingEnabled=true;
  obj.ctx.oImageSmoothingEnabled=true;
  obj.ctx.webkitImageSmoothingEnabled=true;
  obj.ctx.imageSmoothingEnabled=true;
  obj.ctx.imageSmoothingQuality="high";
  //obj.ctx.imageSmoothingQuality="low";
  obj.ctx.shadowBlur=blur;
  obj.ctx.shadowOffsetX=offx;
  obj.ctx.shadowOffsetY=offy;
  obj.ctx.shadowColor=color;
  }
 return true;
 }




 function guiCanvasAlphaSet (handle,alpha)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 obj.ctx.globalAlpha=alpha;
 return true;
 }





//let metrics = ctx.measureText(text);
//let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
//let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;



 function guiUni (code)
 {
 var str,fc,val;
 fc=code[0];
 val=code.substring(1);
 if(fc=='#')
  {
 // console.log("#0 val="+val);
  val=Number(val);
  //console.log("#1 val="+val);
  val=val.toString(16);
  //console.log("#2 val="+val);
  }
 str="";
 str+='"';
 str+="\\";
 str+="u"+val;//code;
 str+='"';
 //console.log(str);
 return(eval(str));
 }




 function guiCanvasFontMeasure (handle,fnt,txt)
 {
 var obj;
 //aa.debugAlert();
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 aa.guiCanvasFontSet(handle,fnt);
 return(aa.guiCanvasTextMeasure(handle,txt));
 }





 function guiCanvasFontMeasureAll (handle,fnt,txt)
 {
 aa.debugAlert();
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 aa.guiCanvasFontSet(handle,fnt);
 return(aa.guiCanvasTextMeasureAll(handle,txt));
 }






 function guiCanvasTextMeasure (handle,txt)
 {
 var obj,ctx,rec,methit,metwid,metrix,ha,hb,ww0,ww1,ww2,ww3,fnt,fs,toff,soff,tok;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 ctx=obj.ctx;
 metrix=ctx.measureText(txt);
 methit=0;
 ha=hb=0;
 //ww0=Math.abs(metrix.actualBoundingBoxLeft)+Math.abs(metrix.actualBoundingBoxRight);
///ww2=Math.abs(metrix.fontBoundingBoxAscent)+Math.abs(metrix.fontBoundingBoxDescent);
// ww2=Math.abs(metrix.actualBoundingBoxAscent)+Math.abs(metrix.actualBoundingBoxDescent);
 ww2="zz";
 if(isNaN(ww2))
  {
  fnt=obj.ctx.font;
  toff=aa.stringIndexOf(false,fnt,"px",0,false);
  ///console.log("toff="+toff);
  soff=aa.stringIndexOf(false,fnt," ",toff,true);
  ///console.log("soff="+soff);
  tok=fnt.substring(soff+1,toff);
  ///console.log("tok=("  +tok+")");
  fs=Number(tok);
  fs=Math.ceil(fs);
  //soff=aa.stringIndexOf(false,fnt,"px",toff);
  //fs=parseInt(fnt.substring(0,toff));
  ww2=fs;
  //console.log("fnt="+fnt+" ww2="+ww2);
  //alert("fnt="+fnt+" ww2="+ww2);
  }
 ww1=0;
 ww3=metrix.width;

 rec={};
 rec.type="rect";
 rec.x=0;
 rec.y=0;
 rec.w=ww3;//parseInt(ww3);
 rec.h=ww2;//parseInt(ww2);
 rec.left=rec.x;
 rec.top=rec.y;
 rec.width=rec.w;
 rec.height=rec.h;

 //console.log(metrix);
 rec.fh=Math.abs(metrix.fontBoundingBoxAscent)+Math.abs(metrix.fontBoundingBoxDescent);
 rec.ah=Math.abs(metrix.actualBoundingBoxAscent)+Math.abs(metrix.actualBoundingBoxDescent);
 rec.aw=Math.abs(metrix.actualBoundingBoxLeft)+Math.abs(metrix.actualBoundingBoxRight);

 if(isNaN(rec.fh)) { rec.fh=rec.height; }
 if(isNaN(rec.ah)) { rec.ah=rec.height; }
 if(isNaN(rec.aw)) { rec.aw=rec.width; }

 return rec;
 }







 function guiCanvasTextMeasureAll (handle,txt)
 {
 aa.debugAlert();
 var obj,ctx,rec,methit,metwid,metrix,ha,hb,ww0,ww1,ww2,ww3,fnt,fs,toff,soff,tok,ci,cl,ch,str,all,xx;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 ctx=obj.ctx;
 all=[];
 cl=txt.length;
 xx=0;
 for(ci=0;ci<cl;ci++)
  {
  str=txt.substring(ci,ci+1);///,ci+1);
  metrix=ctx.measureText(str);
  methit=0;
  ha=hb=0;
  ww2="zz";
  if(isNaN(ww2))
   {
   fnt=obj.ctx.font;
   toff=aa.stringIndexOf(false,fnt,"px",0,false);
   soff=aa.stringIndexOf(false,fnt," ",toff,true);
   tok=fnt.substring(soff+1,toff);
   fs=Number(tok);
   fs=Math.ceil(fs);
   ww2=fs;
   }
  ww1=0;
  ww3=metrix.width;

  rec={};
  rec.type="rect";
  rec.x=xx;//parseInt(xx);
  xx+=ww3;
  rec.y=0;
  rec.w=ww3;//parseInt(ww3);
  rec.h=ww2;//parseInt(ww2);
  rec.left=rec.x;
  rec.top=rec.y;
  rec.width=rec.w;
  rec.height=rec.h;
  rec.ch=str;
  rec.fh=metrix.fontBoundingBoxAscent+metrix.fontBoundingBoxDescent;
  rec.ah=metrix.actualBoundingBoxAscent+metrix.actualBoundingBoxDescent;
  rec.aw=metrix.actualBoundingBoxLeft+metrix.actualBoundingBoxRight;
  if(isNaN(rec.fh)) { rec.fh=rec.height; }
  if(isNaN(rec.ah)) { rec.ah=rec.height; }
  if(isNaN(rec.aw)) { rec.aw=rec.width; }
  all[ci]=rec;
  }
 return all;
 }




 function guiCanvasFontMeasureEach (handle,fnt,txt)
 {
 var obj,i,str,fob,fray,mes,x;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(txt.length==0) { return null; }
 fray=[];
 i=0;
 str=""+txt[i];
 while(1)
  {
  mes=aa.guiCanvasFontMeasure(handle,fnt,str);
  fob={};
  fob.x=0;
  fob.w=mes.w;
  fob.fh=mes.fh;
  fob.h=mes.h;
  fob.str=str;
  fray.push(fob);
  i++;
  if(i>=txt.length) { break; }
  str=""+txt[i];
  }
 x=0;
 for(i=0;i<fray.length;i++)
  {
  fray[i].x=x;
  x+=fray[i].w;
  }
 return fray;
 }


/*
 The getImageData() returns an ImageData object representing the underlying pixel data
 getImageData(sx, sy, sw, sh, settings)
 function guiCanvasImageGet (handle,x,y,w,h)
 img=obj.ctx.getImageData(x,y,w,h);

 The putImageData() paints data from ImageData onto canvas
 putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
 function guiCanvasImagePut (handle,x,y,sx,sy,sw,sh,img)
 obj.ctx.putImageData(img,x,y,sx,sy,sw,sh);

 The drawImage() provides different ways to draw an image onto the canvas
 drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
 function guiCanvasImageDraw (handle,x,y,w,h,dx,dy,dw,dh,img)
 obj.ctx.drawImage(img,x,y,w,h,dx,dy,dw,dh);
*/




 function guiCanvasImageGet (handle,x,y,w,h)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiImageGet");  }
 var obj,img;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return null; }
 img=obj.ctx.getImageData(x,y,w,h);
 return img;
 }





 function guiCanvasImagePut (handle,x,y,sx,sy,sw,sh,img)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiImagePut");  }
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(x!=null&&y!=null&&sx==null&&sy==null&&sw==null&&sh==null)
  {
  obj.ctx.putImageData(img,x,y);
  }
 else
 if(x!=null&&y!=null&&sx!=null&&sy!=null&&sw!=null&&sh!=null)
  {
  obj.ctx.putImageData(img,x,y,sx,sy,sw,sh);
  }
 else
  {
  aa.debugAlert();
  }
 //obj.ctx.putImageData(img,x,y,sx,sy,sw,sh);
 return true;
 }




 function guiCanvasImageDraw (handle,x,y,w,h,dx,dy,dw,dh,img)
 {
 ///if(aa_profiler.is_started)  {  aaProfilerHit("guiImageDraw"); }
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(x==null&&y==null&&w==null&&h==null&&dx!=null&&dy!=null&&dw==null&&dh==null)
  {
  obj.ctx.drawImage(img,dx,dy);
  }
 else
 if(x==null&&y==null&&w==null&&h==null&&dx!=null&&dy!=null&&dw!=null&&dh!=null)
  {
  obj.ctx.drawImage(img,dx,dy,dw,dh);
  }
 else
 if(x!=null&&y!=null&&w!=null&&h!=null&&dx!=null&&dy!=null&&dw!=null&&dh!=null)
  {
  obj.ctx.drawImage(img,x,y,w,h,dx,dy,dw,dh);
  }
 else
  {
  console.log(x,y,w,h,dx,dy,dw,dh);
  aa.debugAlert();
  }
 return true;
 }






 function guiCanvasTextureMapper (handle,sindex,count,xyuv0,xyuv1,xyuv2,xyuv3,img)
 {
 var grp,c,l,t,i,j,len,end;
 var sx0,sy0,su0,sv0;
 var sx1,sy1,su1,sv1;
 var sx2,sy2,su2,sv2;
 var sx3,sy3,su3,sv3;
 var x0,x1,x2;
 var y0,y1,y2;
 var u0,u1,u2;
 var v0,v1,v2;
 var delta_0,delta_a,delta_b,delta_c,delta_d,delta_e,delta_f;
 var shf,gal;

 //alert();
 if(xyuv0===undefined||xyuv0==null) { return false; }
 if(xyuv1===undefined||xyuv1==null) { return false; }
 if(xyuv2===undefined||xyuv2==null) { return false; }
 len=xyuv0.length;
 if(sindex<0)    { return false; }
 if(sindex>=len) { return false; }
 if(count<0)     { return false; }
 if(count==0)    { return false; }
 end=sindex+count;
 if(end>len)     { return false; }
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 if(xyuv3===undefined||xyuv3==null) { c=1; }
 else                               { c=2; }

 //if(aa.numRandValue(0,10)==0) grp.ctx.reset();
 //console.log(img
 grp.ctx.save();
  grp.ctx.strokeStyle="";
  grp.ctx.fillStyle="";
  grp.ctx.lineWidth=0;

 for(j=0;j<count;j++)
  {
  i=sindex+j;
  sx0=xyuv0[i].x; sx1=xyuv1[i].x; sx2=xyuv2[i].x;
  sy0=xyuv0[i].y; sy1=xyuv1[i].y; sy2=xyuv2[i].y;
  su0=xyuv0[i].u; su1=xyuv1[i].u; su2=xyuv2[i].u;
  sv0=xyuv0[i].v; sv1=xyuv1[i].v; sv2=xyuv2[i].v;
  if(c>=2)  {  sx3=xyuv3[i].x;   sy3=xyuv3[i].y;   su3=xyuv3[i].u;    sv3=xyuv3[i].v; }
  //sx0>>=0;  sx1>>=0;  sx2>>=0;
  //sy0>>=0;  sy1>>=0;  sy2>>=0;
  //su0>>=0;  su1>>=0;  su2>>=0;
  //sv0>>=0;  sv1>>=0;  sv2>>=0;

  if(sx0==-12345) continue;


  grp.ctx.save();
  for(t=0;t<c;t++)
   {
   if(t==0) {  x0=sx0; x1=sx1; x2=sx2; y0=sy0; y1=sy1; y2=sy2; u0=su0; u1=su1; u2=su2; v0=sv0; v1=sv1; v2=sv2; }
   else     {  x0=sx2; x1=sx3; x2=sx0; y0=sy2; y1=sy3; y2=sy0; u0=su2; u1=su3; u2=su0; v0=sv2; v1=sv3; v2=sv0; }

   if(t==0)
    {
    grp.ctx.beginPath();
    grp.ctx.moveTo(sx0,sy0);
    grp.ctx.lineTo(sx1,sy1);
    grp.ctx.lineTo(sx2,sy2);
    if(c==2) { grp.ctx.lineTo(sx3,sy3); }
    //grp.ctx.stroke();
    grp.ctx.closePath();
    grp.ctx.clip();
    }



   delta_0=u0*v1+v0*u2+u1*v2-v1*u2-v0*u1-u0*v2;
   delta_a=x0*v1+v0*x2+x1*v2-v1*x2-v0*x1-x0*v2;
   delta_b=u0*x1+x0*u2+u1*x2-x1*u2-x0*u1-u0*x2;
   delta_c=u0*v1*x2+v0*x1*u2+x0*u1*v2-x0*v1*u2-v0*u1*x2-u0*x1*v2;
   delta_d=y0*v1+v0*y2+y1*v2-v1*y2-v0*y1-y0*v2;
   delta_e=u0*y1+y0*u2+u1*y2-y1*u2-y0*u1-u0*y2;
   delta_f=u0*v1*y2+v0*y1*u2+y0*u1*v2-y0*v1*u2-v0*u1*y2-u0*y1*v2;
   grp.ctx.setTransform(delta_a/delta_0,(delta_d/delta_0),delta_b/delta_0,delta_e/delta_0,delta_c/delta_0,delta_f/delta_0);
   //grp.ctx.transform(delta_a/delta_0,(delta_d/delta_0),delta_b/delta_0,delta_e/delta_0,delta_c/delta_0,delta_f/delta_0);
    //gal=grp.ctx.globalAlpha;
   //if(j<10) grp.ctx.globalAlpha=0.3;
   grp.ctx.drawImage(img,0,0);//,img.width,img.height,0,0,img.width,img.height);
   //grp.ctx.globalAlpha=gal;
   //grp.ctx.drawImage(img,0,0,img.width,img.height,0,0,img.width+4,img.height+4);
   //grp.ctx.drawImage(img,0,0,320,320,0,0,320,320);
   }
  grp.ctx.restore();
  }

 grp.ctx.restore();
  //grp.ctx.reset();
 return true;
 }







 function guiCanvasScroll (handle,x,y,w,h,sx,sy)
 {
 var obj,img;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 img=obj.ctx.getImageData(x,y,w,h);
 obj.ctx.putImageData(img,x+sx,y+sy,0,0,w,h);
 return true;
 }






 function guiCanvasBorder (handle,x,y,w,h,blw,bcl)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
/// obj.ctx.save(); //tookout
 if(bcl) { obj.ctx.strokeStyle=bcl; }
 if(blw) { obj.ctx.lineWidth=blw;   }
 //obj.ctx.strokeRect(x,y,w-blw,h-blw);
 obj.ctx.strokeRect(x,y,w,h);
/// obj.ctx.restore();  //tookout
 return true;
 }



 function guiCanvasFill (handle,x,y,w,h,fcl)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
/// obj.ctx.beginPath(); //tookout
 if(fcl) { obj.ctx.fillStyle=fcl; }
 obj.ctx.fillRect(x,y,w,h);//0,0,1,1);//x,y,10,10);//w,h);
/// obj.ctx.closePath(); //tookout
 return true;
 }



 function guiCanvasFillBorder (handle,x,y,w,h,blw,bfl,fcl)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 guiCanvasFill(handle,x,y,w,h,fcl);
 guiCanvasBorder(handle,x,y,w,h,blw,bfl);
 return true;
 }







 function guiCanvasFillFull (handle,fcl)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 return(aa.guiCanvasFill(handle,0,0,obj.dom.width,obj.dom.height,fcl));
 }




 function guiCheckeredFill (handle,x,y,w,h,sz,fcl1,fcl2)
 {
 var obj,alt1,alt2,xx,yy;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 if(fcl1) {  guiCanvasFill(handle,x,y,w,h,fcl1); }
 if(fcl2)
  {
  alt1=alt2=0;
  for(yy=0;yy<h;yy+=sz)
   {
   for(xx=0;xx<w;xx+=sz)
    {
    if(alt1++==1)  { guiCanvasFill(handle,x+xx,y+yy,sz,sz,fcl2);  alt1=0;  }
    }
   if(alt2++==1) { alt2=0; } alt1=alt2;
   }
  }
 return true;
 }










 function guiCanvasEllipseBorder (handle,x,y,rx,ry,rot,sa,ea,iscc,blw,bcl)
 {
 var obj,rs,re,ro;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
/// obj.ctx.save(); //drama
 obj.ctx.beginPath();
 rs=aa.numDegreesToRadian(sa);
 re=aa.numDegreesToRadian(ea);
 ro=aa.numDegreesToRadian(rot);
 if(bcl) { obj.ctx.strokeStyle=bcl; }
 if(blw) { obj.ctx.lineWidth=blw;   }
// obj.ctx.arc(x,y,r,rs,re);
 obj.ctx.ellipse(x,y,rx,ry,ro,rs,re,iscc);
 obj.ctx.stroke();
 obj.ctx.closePath();
/// obj.ctx.restore(); //drama
 return true;
 }



 function guiCanvasEllipseFill (handle,x,y,rx,ry,rot,sa,ea,iscc,fcl)
 {
 var obj,rs,re,ro;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 obj.ctx.beginPath();
 rs=aa.numDegreesToRadian(sa);
 re=aa.numDegreesToRadian(ea);
 ro=aa.numDegreesToRadian(rot);
 if(fcl) { obj.ctx.fillStyle=fcl; }
 obj.ctx.ellipse(x,y,rx,ry,ro,rs,re,iscc);
 obj.ctx.fill();
 obj.ctx.closePath();
 return true;
 }




 function guiCanvasArcBorder (handle,x,y,r,sa,ea,blw,bcl)
 {
 var obj,rs,re;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
/// obj.ctx.save(); //drama
 obj.ctx.beginPath();
 rs=aa.numDegreesToRadian(sa);
 re=aa.numDegreesToRadian(ea);
 if(bcl) { obj.ctx.strokeStyle=bcl; }
 if(blw) { obj.ctx.lineWidth=blw;   }
 obj.ctx.arc(x,y,r,rs,re);
 obj.ctx.stroke();
 obj.ctx.closePath();
/// obj.ctx.restore(); //drama
 return true;
 }



 function guiCanvasArcFill (handle,x,y,r,sa,ea,fcl)
 {
 var obj,rs,re;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 obj.ctx.beginPath();
 if(fcl) { obj.ctx.fillStyle=fcl; }
 rs=aa.numDegreesToRadian(sa);
 re=aa.numDegreesToRadian(ea);
 obj.ctx.arc(x,y,r,rs,re);
 obj.ctx.fill();
 obj.ctx.closePath();
 return true;
 }




 function guiCanvasLine (handle,x1,y1,x2,y2,lw,cl)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 //obj.ctx.save(); //drama
 if(cl) { obj.ctx.strokeStyle=cl; }
 if(lw) { obj.ctx.lineWidth=lw;   }
// return true;
 obj.ctx.beginPath();
 obj.ctx.moveTo(x1,y1);
 obj.ctx.lineTo(x2,y2);
 obj.ctx.stroke();
/// obj.ctx.restore(); //drama
 return true;
 }



 function guiAngleBetweenTwoCords (x1,y1,x2,y2)
 {
 var dx,dy,ang,rot,deg;
 dx=x2-x1;
 dy=y2-y1;
 rot=-Math.atan2(dx,dy);
 deg=aa.numRadianToDegrees(rot);
 ang=deg+180;
 return ang;
 }





 function guiEllipseCordGet (x,y,rx,ry,angle)
 {
 var rad,mx,my,xx,yy,obj,rax;
 mx=(rx>>1);
 my=(ry>>1);
 xx=x+mx;
 yy=y+my;
 rax=aa.numDegreesToRadian(angle);
 rad=rax-aa.numDegreesToRadian(90);
 obj={};
 obj.type="cord";
 obj.x=Math.round((xx+Math.cos(rad)*mx));
 obj.y=Math.round((yy+Math.sin(rad)*my));
 return obj;
 }






 function guiCanvasArrow (handle,x1,y1,arsz,angle,p0,p1,p2,p3,lw,lc)
 {
 var obj,dx,dy,hl0,hl1,hl2,hl3;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 hl0=arsz;
 hl1=arsz;
 hl2=arsz;
 hl3=arsz;
 dx=x1;
 dy=y1;
 //angle=Math.atan2(dy,dx);
 //rs=aa.numDegreesToRadian(sa);
 //re=aa.numDegreesToRadian(ea);
 angle=aa.numDegreesToRadian(angle-90);
/// obj.ctx.save();
 obj.ctx.beginPath();
 obj.ctx.strokeStyle=lc;
 obj.ctx.lineWidth=lw;
 obj.ctx.moveTo(x1,y1);
 obj.ctx.lineTo(x1-hl0*Math.cos(angle-Math.PI/p0),y1-hl1*Math.sin(angle-Math.PI/p1));
 obj.ctx.moveTo(x1,y1);
 obj.ctx.lineTo(x1-hl2*Math.cos(angle+Math.PI/p2),y1-hl3*Math.sin(angle+Math.PI/p3));
 obj.ctx.stroke();
 obj.ctx.closePath();
///obj.ctx.restore();
 return true;
 }





 function guiCanvasArrowLine (handle,x1,y1,x2,y2,arsz,p0,p1,p2,p3,lw,lc)
 {
 var obj,dx,dy,angle,hl0,hl1,hl2,hl3;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 hl0=arsz;
 hl1=arsz;
 hl2=arsz;
 hl3=arsz;
 dx=x2-x1;
 dy=y2-y1;
 angle=Math.atan2(dy,dx);
/// obj.ctx.save();
 obj.ctx.beginPath();
 obj.ctx.strokeStyle=lc;
 obj.ctx.lineWidth=lw;
 obj.ctx.moveTo(x1,y1);
 obj.ctx.lineTo(x2,y2);
 obj.ctx.lineTo(x2-hl0*Math.cos(angle-Math.PI/p0),y2-hl1*Math.sin(angle-Math.PI/p1));
 obj.ctx.moveTo(x2,y2);
 obj.ctx.lineTo(x2-hl2*Math.cos(angle+Math.PI/p2),y2-hl3*Math.sin(angle+Math.PI/p3));
 obj.ctx.stroke();
 obj.ctx.closePath();
/// obj.ctx.restore();
 return true;
 }




 function guiCanvasFontMatch (handle,weight,family,doheight,widhit,req)
 {
 var obj,ofnt,txt,fnt,px,recta,mul,okpx;
 if((obj=aa.handleCheck(aa.gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                                   { return false; }
 ofnt=obj.ctx.font;
 okpx=0;
 if(doheight)
  {
  txt="W";
  for(px=4;px<256;px+=4)
   {
   fnt=aa.guiFontString(weight,px,family);
   aa.guiCanvasFontSet(handle,fnt);
   recta=aa.guiCanvasTextMeasure(handle,txt);
   mul=recta.h*req;
   if(mul>widhit) { break; }
   //okpx=px;
   okpx=recta.h;
   }
  }
 else
  {
  txt="W";
  for(px=4;px<256;px+=4)
   {
   fnt=aa.guiFontString(weight,px,family);
   aa.guiCanvasFontSet(handle,fnt);
   recta=aa.guiCanvasTextMeasure(handle,txt);
   mul=recta.w*req;
   //aa.debugLogger(5,px+" "+recta.w+"  "+req+"  "+mul+"  "+widhit);
   if(mul>widhit) { break; }
   okpx=recta.w;//px;
   }
  }
 obj.ctx.font=ofnt;
 return okpx;
 }






 function guiCanvasFontSet (handle,font)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 obj.ctx.textAlign="left";
 obj.ctx.textBaseline="top";
 obj.ctx.font=font;
 return true;
 }

//https://stackoverflow.com/questions/39379392/placing-text-on-html5-canvas-inconsistent-across-browsers





 function guiCanvasText (handle,x,y,slw,sc,fc,font,text)
 {
 var obj,mes,rec;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
 ///obj.ctx.save(); //drama

 //console.log(obj.vars);//.scale_wh[0]);
 if(font) { obj.ctx.font=font; }
 obj.ctx.textAlign="left";
 obj.ctx.textBaseline="top";
 //mes=aa.guiCanvasTextMeasure(obj.han,text);
 //rec=aa.guiRectSet(x,y,mes.w,mes.h);
 if(slw)      { obj.ctx.lineWidth=slw; }
 if(sc&&slw)
  {
  obj.ctx.strokeStyle=sc;
  obj.ctx.strokeText(text,x,y);//rec.x,rec.y);
  }
 if(fc)
  {
  obj.ctx.fillStyle=fc;
  obj.ctx.fillText(text,x,y);//rec.x,rec.y);
  }
 ///obj.ctx.restore(); //drama
 return true;
 }







 function guiCanvasRounded (handle,x,y,w,h,radius,lw,bc,fc)
 {
 var obj,k,r,b;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
/// obj.ctx.save(); //drama
 if(lw) { obj.ctx.lineWidth=lw; } //obj.ctx.lineJoin="round"; }
 if(fc) { obj.ctx.fillStyle=fc; }
 if(bc) { obj.ctx.strokeStyle=bc; }
 k=4*(Math.SQRT2-1)/3;
 //console.log("k="+k);
 r=x+w;
 b=y+h;
 obj.ctx.beginPath();
 obj.ctx.moveTo(x+radius,y);
 obj.ctx.lineTo(r-radius,y);

 obj.ctx.bezierCurveTo(r+radius*(k-1),y,r,y+radius*(1-k),r,y+radius);
 obj.ctx.lineTo(r,b-radius);

 obj.ctx.bezierCurveTo(r,b+radius*(k-1),r+radius*(k-1),b,r-radius,b);
 obj.ctx.lineTo(x+radius,b);

 obj.ctx.bezierCurveTo(x+radius*(1-k),b,x,b+radius*(k-1),x,b-radius);
 obj.ctx.lineTo(x,y+radius);

 obj.ctx.bezierCurveTo(x,y+radius*(1-k),x+radius*(1-k),y,x+radius,y);

 if(fc) { obj.ctx.fill(); }
 if(bc) { obj.ctx.stroke(); }
// aa.debugLogger(5,aa.debugFunctionName());
/// obj.ctx.restore(); //drama
 return true;
 }






 function guiCanvasRounded2 (handle,x,y,w,h,radius,lw,bc,fc)
 {
 var obj,k,r,b;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
/// obj.ctx.save(); //drama
 if(lw) { obj.ctx.lineWidth=lw; } //obj.ctx.lineJoin="round"; }
 if(fc) { obj.ctx.fillStyle=fc; }
 if(bc) { obj.ctx.strokeStyle=bc; }
 obj.ctx.beginPath();
 obj.ctx.moveTo(x+radius,y);
 obj.ctx.lineTo(x+w-radius,y);
 obj.ctx.quadraticCurveTo(x+w,y,x+w,y+radius);
 obj.ctx.lineTo(x+w,y+h-radius);
 obj.ctx.quadraticCurveTo(x+w,y+h,x+w-radius,y+h);
 obj.ctx.lineTo(x+radius,y+h);
 obj.ctx.quadraticCurveTo(x,y+h,x,y+h-radius);
 obj.ctx.lineTo(x,y+radius);
 obj.ctx.quadraticCurveTo(x,y,x+radius,y);
 if(fc) { obj.ctx.fill(); }
 if(bc) { obj.ctx.stroke(); }
// aa.debugLogger(5,aa.debugFunctionName());
//// obj.ctx.restore(); //drama
 return true;
 }


/*

 grp={};
 grp.han=handle;
 grp.obj=obj;
 grp.dom=obj.dom;
 grp.css=obj.dom.style;
 grp.ctx=obj.ctx;
 grp.vars=obj.vars;
// grp.dom=guiGet(grp.han,"dom");
*/

 function guiCanvasTriangle (handle,x1,y1,x2,y2,x3,y3,lw,bc,fc)
 {
 var grp;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 //grp.ctx.save(); //drama
 if(lw) { grp.ctx.lineWidth=lw;  } // grp.ctx.lineJoin="round";
 if(fc) { grp.ctx.fillStyle=fc; }
 if(bc) { grp.ctx.strokeStyle=bc; }
 grp.ctx.beginPath();
 grp.ctx.moveTo(x1,y1);
 grp.ctx.lineTo(x2,y2);
 grp.ctx.lineTo(x3,y3);
 grp.ctx.closePath();
 if(fc) { grp.ctx.fill(); }
 if(bc) { grp.ctx.stroke(); }
 //grp.ctx.restore(); //drama
 return true;
 }



 function guiRadioButton (handle,x,y,w,h,state,blw,bcl,fcl,scl)
 {
 var obj,rec,thk;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 rec=guiRectSet(x,y,w,h);
 thk=blw;
 guiCanvasEllipseFill(handle,rec.x+(rec.w>>1),rec.y+(rec.h>>1),rec.w>>1,rec.h>>1,0,0,360,0,fcl);
 guiCanvasEllipseBorder(handle,rec.x+(rec.w>>1),rec.y+(rec.h>>1),(rec.w>>1)-(thk>>1),(rec.h>>1)-(thk>>1),0,0,360,0,thk,bcl);
 if(state)
  {
  guiCanvasEllipseFill(handle,rec.x+(rec.w>>1),rec.y+(rec.h>>1),(rec.w/5)>>0,(rec.h/5)>>0,0,0,360,0,scl);
  }
 return true;
 }


 function guiCheckBox    (handle,x,y,w,h,state,blw,bcl,fcl,scl)
 {
 var obj,rec,thk,fnt,fix,mes;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 rec=guiRectSet(x,y,w,h);
 thk=blw;
 guiCanvasFill(handle,rec.x,rec.y,rec.w,rec.h,fcl);
 guiCanvasBorder(handle,rec.x+(thk>>1),rec.y+(thk>>1),rec.w-(thk>>1),rec.h-(thk>>1),thk,bcl);
 if(state)
  {
  fnt=guiFontString(200,h-(blw),"arial");
  ///fix=guiFontFix(fnt);
  fix=0;
  mes=guiCanvasFontMeasure(handle,fnt,guiUni("u2714"));
  guiCanvasText(handle,rec.x+(rec.w>>1)-(mes.aw>>1),rec.y+(rec.h>>1)-(mes.ah>>1),0,null,scl,fnt,guiUni("u2714"));
  }
 return true;
 }




 function guiVScrollBar (handle,x,y,w,h,val,max,ipp,blw,bcl,fcl,scl)
 {
 var obj,rec,pgc,npx,pc,nrec,rc1,rc2,rc3;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }

 rec=guiRectSet(x,y,w,h);
 val=aa.numClamp(val,0,max);
 pgc=max/ipp;
 npx=rec.h/pgc;
 if(npx<16) { npx=16; }
 pc=aa.numPercentIsOf(val,max,(rec.h-npx));
 nrec=guiRectSet(1,pc+1,rec.w-2,npx-2);
 if(nrec.w<=0) { nrec.w=1; }
 if(nrec.h<=0) { nrec.h=1; }
 rc1=guiRectCopy(rec);
 guiCanvasFill(handle,rc1.x,rc1.y,rc1.w,rc1.h,fcl);
 rc2=guiRectCopy(nrec);
 guiCanvasFill(handle,rc1.x+rc2.x,rc1.y+rc2.y,rc2.w,rc2.h,scl);
 guiCanvasBorder(handle,rc1.x+rc2.x,rc1.y+rc2.y,rc2.w,rc2.h,blw,bcl);
 rc3=guiRectCopy(rec);
 guiCanvasBorder(handle,rc3.x,rc3.y,rc3.w,rc3.h,blw,bcl);
 return true;
 }




 function guiHScrollBar (handle,x,y,w,h,val,max,ipp,blw,bcl,fcl,scl)
 {
 var obj,rec,pgc,npx,pc,nrec,rc1,rc2,rc3;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 rec=guiRectSet(x,y,w,h);
 val=aa.numClamp(val,0,max);
 pgc=max/ipp;
 npx=rec.w/pgc;
 if(npx<16) { npx=16; }
 pc=aa.numPercentIsOf(val,max,(rec.w-npx));
 nrec=guiRectSet(pc+1,1,npx-2,rec.h-2);
 if(nrec.w<=0) { nrec.w=1; }
 if(nrec.h<=0) { nrec.h=1; }
 rc1=guiRectCopy(rec);
 guiCanvasFill(handle,rc1.x,rc1.y,rc1.w,rc1.h,fcl);
 rc2=guiRectCopy(nrec);
 guiCanvasFill(handle,rc1.x+rc2.x,rc1.y+rc2.y,rc2.w,rc2.h,scl);
 guiCanvasBorder(handle,rc1.x+rc2.x,rc1.y+rc2.y,rc2.w,rc2.h,blw,bcl);
 rc3=guiRectCopy(rec);
 guiCanvasBorder(handle,rc3.x,rc3.y,rc3.w,rc3.h,blw,bcl);
 return true;
 }






 function guiCanvasGrid (handle,x,y,w,h,xd,yd,lw,lc)
 {
 var obj,xx,yy,zz,dw,dh;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(obj.type!="canvas")                             { return false; }
/// obj.ctx.save(); //drama
 if(lw) { obj.ctx.lineWidth=lw; }
 if(lc) { obj.ctx.strokeStyle=lc; }
 if(xd<=1) { xd=1; }
 if(yd<=1) { yd=1; }
 dw=w/xd;
 dh=h/yd;
 obj.ctx.beginPath();
 for(zz=0;zz<=xd;zz++)
  {
  obj.ctx.moveTo(x+(zz*dw),y);
  obj.ctx.lineTo(x+(zz*dw),(y+h)-0);
  }
 for(zz=0;zz<=yd;zz++)
  {
  obj.ctx.moveTo(x,y+(zz*dh));
  obj.ctx.lineTo((x+w)-0,y+(zz*dh));
  }
 obj.ctx.closePath();
 obj.ctx.stroke();
/// obj.ctx.restore();
 return true;
 }



 function guiGridToCord (gx,gy,wid,hit,xd,yd)
 {
 var dw,dh,obj;
 dw=wid/xd;
 dh=hit/yd;
 obj={};
 obj.type="cord";
 obj.x=gx*dw;
 obj.y=gy*dh;
 return obj;
 }



 function guiGridFromCord (x,y,wid,hit,xd,yd)
 {
 var dw,dh,obj;
 dw=wid/xd;
 dh=hit/yd;
 obj={};
 obj.type="grid";
 obj.gx=x/dw;
 obj.gy=y/dh;
 return obj;
 }





 function guiGridToRect (gx,gy,gw,gh,wid,hit,xd,yd)//x,y,w,h,xd,yd)
 {
 ///aa.debugAlert();
 var dw,dh,c0,c1,rc;
 //if(xd<=1) { xd=1; }
 //if(yd<=1) { yd=1; }
 dw=wid/xd;
 dh=hit/yd;
 c0=guiGridToCord(gx,gy,wid,hit,xd,yd);
 c1=guiGridToCord(gw,gh,wid,hit,xd,yd);

// dw=w/xd;
// dh=h/yd;
 rc=guiRectSet(c0.x,c0.y,c1.x,c1.y);
 return rc;
 }






 function guiCssOpacitySet (handle,opacity)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 obj.dom.style.opacity=opacity;
 return true;
 }



 function guiCssDisplaySet (handle,pos,zindex,opacity,display)
 {
 var obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 if(pos)        { obj.dom.style.position=pos;  }
 if(zindex)     { obj.dom.style.zIndex=zindex; }
 if(opacity>=0) { obj.dom.style.opacity=opacity; }
 if(display)    { obj.dom.style.display=display; }
 return true;
 }






 function guiCssOutlineSet (handle,pixels,offset,style,rgba)
 {
 var obj,css,sty;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 sty=style;
 switch(style)
  {
  case "0": case 0:  sty="auto"; break;
  case "1": case 1:  sty="none"; break;
  case "2": case 2:  sty="dotted"; break;
  case "3": case 3:  sty="dashed"; break;
  case "4": case 4:  sty="solid"; break;
  case "5": case 5:  sty="double"; break;
  case "6": case 6:  sty="groove"; break;
  case "7": case 7:  sty="ridge"; break;
  case "8": case 8:  sty="inset"; break;
  case "9": case 9:  sty="outset"; break;
  }
 if(1)
  {
  //console.log(pixels+" "+offset);
  obj.dom.style.outlineColor=rgba;
  obj.dom.style.outlineOffset=offset+"px";
  obj.dom.style.outlineStyle=sty;
  obj.dom.style.outlineWidth=pixels+"px";
  }
 obj.dom.style.outline=pixels+"px "+sty+"   "+rgba;
 //console.log(pixels+"px "+sty+"   "+rgba);
 return true;
 }







 function guiRectsGet (handle)
 {
 var rec,dec,rco,obj;
 if((obj=handleCheck(gui_obj.handef,handle))==null) { return false; }
 rco={};
 rec=aa.guiRectSet(0,0,obj.dom.width,obj.dom.height);
 dec=aa.guiRectSet(obj.dom.style.left,obj.dom.style.top,obj.dom.style.width,obj.dom.style.height);
 dec.x=parseInt(dec.x.substring(0,dec.x.length-2));
 dec.y=parseInt(dec.y.substring(0,dec.y.length-2));
 dec.w=parseInt(dec.w.substring(0,dec.w.length-2));
 dec.h=parseInt(dec.h.substring(0,dec.h.length-2));
 rco.can_rect=rec;
 rco.dom_rect=dec;
 if(window.devicePixelRatio) { rco.density=window.devicePixelRatio; }
 else                        { rco.density=1.0; }
 rco.iensity=1.0/rco.density;
 return rco;
 }







 function guiEasingInit (mode)
 {
 var obj;
 obj={};
 obj.type="easing";
 switch(mode)
  {
  default:
  case "linear":       case 0:  obj.mode=0;  obj.name="linear";        break;
  case "inquad":       case 1:  obj.mode=1;  obj.name="inquad";        break;
   case "outquad":      case 2:  obj.mode=2;  obj.name="outquad";       break;
  case "inoutquad":    case 3:  obj.mode=3;  obj.name="inoutquad";     break;
  case "incube":       case 4:  obj.mode=4;  obj.name="incube";        break;
   case "outcube":      case 5:  obj.mode=5;  obj.name="outcube";       break;
  case "inoutcube":    case 6:  obj.mode=6;  obj.name="inoutcube";     break;
  case "inquart":      case 7:  obj.mode=7;  obj.name="inquart";       break;
   case "outquart":     case 8:  obj.mode=8;  obj.name="outquart";      break;
  case "inoutquart":   case 9:  obj.mode=9;  obj.name="inoutquart";    break;
  case "inquint":      case 10: obj.mode=10; obj.name="inquint";       break;
   case "outquint":     case 11: obj.mode=11; obj.name="outquint";      break;
  case "inoutquint":   case 12: obj.mode=12; obj.name="inoutquint";    break;
  case "insine":       case 13: obj.mode=13; obj.name="insine";        break;
   case "outsine":      case 14: obj.mode=14; obj.name="outsine";       break;
  case "inoutsine":    case 15: obj.mode=15; obj.name="inoutsine";     break;
  case "inexpo":       case 16: obj.mode=16; obj.name="inexpo";        break;
   case "outexpo":      case 17: obj.mode=17; obj.name="outexpo";       break;
  case "inoutexpo":    case 18: obj.mode=18; obj.name="inoutexpo";     break;
  case "incirc":       case 19: obj.mode=19; obj.name="incirc";        break;
   case "outcirc":      case 20: obj.mode=20; obj.name="outcirc";       break;
  case "inoutcirc":    case 21: obj.mode=21; obj.name="inoutcirc";     break;
  case "inback":       case 22: obj.mode=22; obj.name="inback";        break;
   case "outback":      case 23: obj.mode=23; obj.name="outback";       break;
  case "inoutback":    case 24: obj.mode=24; obj.name="inoutback";     break;
  case "inbounce":     case 25: obj.mode=25; obj.name="inbounce";      break;
   case "outbounce":    case 26: obj.mode=26; obj.name="outbounce";     break;
  case "inoutbounce":  case 27: obj.mode=27; obj.name="inoutbounce";   break;
  case "inelastic":    case 28: obj.mode=28; obj.name="inelastic";     break;
   case "outelastic":   case 29: obj.mode=29; obj.name="outelastic";    break;
  case "inoutelastic": case 30: obj.mode=30; obj.name="inoutelastic";  break;
  }
 return obj;
 }




 function guiEasingStep (obj,val,mag)
 {
 var mmm;
 function _linear(t)     {    return t; }
 function _inQuad(t)     {    return t*t; }
 function _outQuad(t)    {    return t*(2-t); }
 function _inOutQuad(t)  {    return t<0.5?2*t*t:-1+(4-2*t)*t; }
 function _inCube(t)     {    return t*t*t; }
 function _outCube(t)    {    const t1=t-1;    return t1*t1*t1+1; }
 function _inOutCube(t)  {    return t<0.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1; }
 function _inQuart(t)    {    return t*t*t*t; }
 function _outQuart(t)   {    const t1=t-1;    return 1-t1*t1*t1*t1; }
 function _inOutQuart(t) {    const t1=t-1;    return t<0.5?8*t*t*t*t:1-8*t1*t1*t1*t1; }
 function _inQuint(t)    {    return t*t*t*t*t; }
 function _outQuint(t)   {    const t1=t-1;    return 1+t1*t1*t1*t1*t1; }
 function _inOutQuint(t) {    const t1=t-1;    return t<0.5?16*t*t*t*t*t:1+16*t1*t1*t1*t1*t1; }
 function _inSine(t)     {    return -1*Math.cos(t*(Math.PI/2))+1; }
 function _outSine(t)    {    return Math.sin(t*(Math.PI/2)); }
 function _inOutSine(t)  {    return -0.5*(Math.cos(Math.PI*t)-1); }

 function _inExpo(t)     {    if(t===0) {  return 0;  }    return Math.pow(2,10*(t-1));  }
 function _outExpo(t)    {    if(t===1) {  return 1;  }    return (-Math.pow(2,-10*t)+1); }
 function _inOutExpo(t)  {
                              if(t===0||t===1) {   return t;  }
                              const scaledTime=t*2;
                              const scaledTime1=scaledTime-1;
                              if(scaledTime<1) {   return 0.5*Math.pow(2,10*(scaledTime1));    }
                              return 0.5*(-Math.pow(2,-10*scaledTime1)+2);
                         }

 function _inCirc(t)     {    const scaledTime=t/1;    return -1*(Math.sqrt(1-scaledTime*t)-1); }
 function _outCirc(t)    {    const t1=t-1;            return Math.sqrt(1-t1*t1); }
 function _inOutCirc(t)  {
                              const scaledTime=t*2;
                              const scaledTime1=scaledTime-2;
                              if(scaledTime<1) {   return -0.5*(Math.sqrt(1-scaledTime*scaledTime)-1);    }
                              return 0.5*(Math.sqrt(1-scaledTime1*scaledTime1)+1);
                         }

 function _inBack(t,m)    {    return t*t*((m+1)*t-m);}
 function _outBack(t,m)   {    const scaledTime=(t/1)-1;     return (scaledTime*scaledTime*((m+1)*scaledTime+m))+1;}
 function _inOutBack(t,m) {
                               const scaledTime=t*2;
                               const scaledTime2=scaledTime-2;
                               const s=m*1.525;
                               if(scaledTime<1) {    return 0.5*scaledTime*scaledTime*(((s+1)*scaledTime)-s);    }
                               return 0.5*(scaledTime2*scaledTime2*((s+1)*scaledTime2+s)+2);
                          }

 function _inBounce(t)    {    return 1-_outBounce(1-t);}
 function _outBounce(t)   {
                               const scaledTime=t/1;
                               if(scaledTime<(1/2.75))   { return 7.5625*scaledTime*scaledTime;    }
                               else
                               if(scaledTime<(2/2.75))   { const scaledTime2=scaledTime-(1.5/2.75);      return (7.5625*scaledTime2*scaledTime2)+0.75;    }
                               else
                               if(scaledTime<(2.5/2.75)) { const scaledTime2=scaledTime-(2.25/2.75);     return (7.5625*scaledTime2*scaledTime2)+0.9375;    }
                               else                      { const scaledTime2=scaledTime-(2.625/2.75);    return (7.5625*scaledTime2*scaledTime2)+0.984375;    }
                          }
 function _inOutBounce(t) {    if(t<0.5) {    return _inBounce(t*2)*0.5;    }    return (_outBounce((t*2)-1)*0.5)+0.5; }

 function _inElastic(t,m) {
                               if(t===0||t===1) {  return t;    }
                               const scaledTime=t/1;
                               const scaledTime1=scaledTime-1;
                               const p=1-m;
                               const s=p/(2*Math.PI)*Math.asin(1);
                               return -(Math.pow(2,10*scaledTime1)*Math.sin((scaledTime1-s)*(2*Math.PI)/p));
                          }
 function _outElastic(t,m) {
                               const p=1-m;
                               const scaledTime=t*2;
                               if(t===0||t===1) {   return t;    }
                               const s=p/(2*Math.PI)*Math.asin(1);
                               return (Math.pow(2,-10*scaledTime)*Math.sin((scaledTime-s)*(2*Math.PI)/p))+1;
                           }
 function _inOutElastic(t,m)  {
                                const p=1-m;
                                if(t===0||t===1) {   return t;    }
                                const scaledTime=t*2;
                                const scaledTime1=scaledTime-1;
                                const s=p/(2*Math.PI)*Math.asin(1);
                                if(scaledTime<1) {   return -0.5*(Math.pow(2,10*scaledTime1)*Math.sin((scaledTime1-s)*(2*Math.PI)/p));    }
                                return (Math.pow(2,-10*scaledTime1)*Math.sin((scaledTime1-s)*(2*Math.PI)/p)*0.5 )+1;
                              }
 if(mag)
  {
  mmm=mag;
  }
 else
  {
  switch(obj.mode)
   {
   case 22: mmm=1.70158; break;
   case 23: mmm=1.70158; break;
   case 24: mmm=1.70158; break;
   case 28: mmm=0.7;     break;
   case 29: mmm=0.7;     break;
   case 30: mmm=0.65;    break;
   }
  }


 switch(obj.mode)
  {
  case 0:  res=_linear(val);       break;
  case 1:  res=_inQuad(val);       break;
  case 2:  res=_outQuad(val);      break;
  case 3:  res=_inOutQuad(val);    break;
  case 4:  res=_inCube(val);       break;
  case 5:  res=_outCube(val);      break;
  case 6:  res=_inOutCube(val);    break;
  case 7:  res=_inQuart(val);      break;
  case 8:  res=_outQuart(val);     break;
  case 9:  res=_inOutQuart(val);   break;
  case 10: res=_inQuint(val);      break;
  case 11: res=_outQuint(val);     break;
  case 12: res=_inOutQuint(val);   break;
  case 13: res=_inSine(val);       break;
  case 14: res=_outSine(val);      break;
  case 15: res=_inOutSine(val);    break;
  case 16: res=_inExpo(val);       break;
  case 17: res=_outExpo(val);      break;
  case 18: res=_inOutExpo(val);    break;
  case 19: res=_inCirc(val);       break;
  case 20: res=_outCirc(val);      break;
  case 21: res=_inOutCirc(val);    break;
  case 22: res=_inBack(val,mmm);       break;
  case 23: res=_outBack(val,mmm);      break;
  case 24: res=_inOutBack(val,mmm);    break;
  case 25: res=_inBounce(val);     break;
  case 26: res=_outBounce(val);    break;
  case 27: res=_inOutBounce(val);  break;
  case 28: res=_inElastic(val,mmm);    break;
  case 29: res=_outElastic(val,mmm);   break;
  case 30: res=_inOutElastic(val,mmm); break;
  }
 return res;
 }







 function guiEasingHelperInit (id,tot,durms,mode,rev)
 {
 var obj,grp;
 if((grp=aa.guiGroupGetById(id))==null) { return null; }
 obj={};
 obj.type="easinghelper";
 obj.grp=grp;
 obj.val=0;
 obj.tot=tot;
 obj.dur=durms;
 obj.mode=mode;
 obj.ease=aa.guiEasingInit(mode);
 obj.state=1;
 obj.rev=rev;
 obj.ms=aa.timerMsRunning();
 obj.res=0;
 ///console.log("INIIIIIIII");
 return obj;
 }




 function guiEasingHelperStep (obj)
 {
 var grp,el,mm,res;
 if(obj.type!="easinghelper") { return false; }
 grp=obj.grp;
 if(obj.state==1)
  {
  el=(aa.timerMsRunning()-obj.ms)/obj.dur;
  obj.val=el;
  if(obj.val>=1.0)
   {
   obj.val=1.0;
   obj.state=0;
   }
  mm=aa.guiEasingStep(obj.ease,obj.val);
  mm=mm*obj.tot;
  if(obj.rev) { obj.res=(obj.tot)-mm; }
  else        { obj.res=mm; }
  //obj.res=mm;
  return true;
  }
 //if(obj.state==0) { return false; }
 return false;
 }






 function guiRgbaString (r,g,b,a)
 {
 return(aa.stringParms("rgb",r,g,b,a));
 //return("rgba("+r+","+g+","+b+","+a+")");
 }




 function guiRgbaStringCommon (index,opacity)
 {
 var opa;
 if(opacity===undefined||opacity===null||arguments.length==1)  {  opa=1.0;  }
 else                                                          {  opa=opacity;  }
 if(opa<0.0) { opa=0.0; }
 if(opa>1.0) { opa=1.0; }
 switch(index)
  {
  case 0:  return(guiRgbaString(0,0,0,opa));        // black
  case 1:  return(guiRgbaString(255,255,255,opa));  // white
  case 2:  return(guiRgbaString(255,80,80,opa));    // red
  case 3:  return(guiRgbaString(80,255,80,opa));      // green
  case 4:  return(guiRgbaString(80,80,255,opa));    // blue
  case 5:  return(guiRgbaString(80,255,255,opa));    // cyan
  case 6:  return(guiRgbaString(255,80,255,opa));    // purple
  case 7:  return(guiRgbaString(255,255,80,opa));    // yellow
  case 8:  return(guiRgbaString(255,128,128,opa));
  case 9:  return(guiRgbaString(128,255,128,opa));
  case 10: return(guiRgbaString(128,128,255,opa));
  case 11: return(guiRgbaString(128,255,255,opa));
  case 12: return(guiRgbaString(255,128,255,opa));
  case 16: return(guiRgbaString(32,32,32,opa));
  case 17: return(guiRgbaString(64,64,64,opa));
  case 18: return(guiRgbaString(128,128,128,opa));
  case 19: return(guiRgbaString(192,192,192,opa));
  default:
  case 13: return(guiRgbaString(255,255,128,opa));
  }
 }



 function guiRgbaStringRand (rmin,rmax,gmin,gmax,bmin,bmax,amin,amax,aplaces)
 {
 var s,r,g,b,a;
 rmin=aa.numClamp(rmin,0,255);
 rmax=aa.numClamp(rmax,0,255);
 gmin=aa.numClamp(gmin,0,255);
 gmax=aa.numClamp(gmax,0,255);
 bmin=aa.numClamp(bmin,0,255);
 bmax=aa.numClamp(bmax,0,255);
 aplaces=aa.numClamp(aplaces,0,2);
 amin=aa.numClamp(amin,0,1);
 amax=aa.numClamp(amax,0,1);
 if(rmin>rmax) { s=rmin; rmin=rmax; rmax=s; }
 if(gmin>gmax) { s=gmin; gmin=gmax; gmax=s; }
 if(bmin>bmax) { s=bmin; bmin=bmax; bmax=s; }
 if(amin>amax) { s=amin; amin=amax; amax=s; }
 //console.log(rmin+" "+rmax);
 r=aa.numRandValue(rmin,rmax);
 g=aa.numRandValue(gmin,gmax);
 b=aa.numRandValue(bmin,bmax);
 a=aa.numRandFloat(amin,amax,aplaces);
 return(guiRgbaString(r,g,b,a));
 }



 function guiGridSet (gx,gy,gw,gh)
 {
 var obj;
 aa.debugAlert();
 obj={};
 obj.type="grid";
 obj.gx=gx;
 obj.gy=gy;
 obj.gw=gw;
 obj.gh=gh;
 return obj;
 }


 function guiXyuvSetEx (x,y,u,v,xmul,ymul,umul,vmul)
 {
 var xyuv={};
 xyuv.type='xyuv';
 xyuv.x=x*xmul;
 xyuv.y=y*ymul;
 xyuv.u=u*umul;
 xyuv.v=v*vmul;
 return xyuv;
 }



 function guiRectSet (x,y,w,h)
 {
 var rec={};
 rec.type="rect";
 rec.x=x;
 rec.y=y;
 rec.w=w;
 rec.h=h;
 rec.left=rec.x;
 rec.top=rec.y;
 rec.width=rec.w;
 rec.height=rec.h;
 return rec;
 }




 function guiRectAdjust (rec,xa,ya,wa,ha)
 {
 if(rec.type!="rect") { aa.debugAlert(); }
 rec.x+=xa;//parseInt(xa);
 rec.y+=ya;//parseInt(ya);
 rec.w+=wa;//parseInt(wa);
 rec.h+=ha;//parseInt(ha);
 rec.left=rec.x;
 rec.top=rec.y;
 rec.width=rec.w;
 rec.height=rec.h;
 return rec;
 }




 function guiRectCopy (rec)
 {
 var obj;
 if(rec.type!="rect") { aa.debugAlert(); }
 obj=guiRectSet(rec.x,rec.y,rec.w,rec.h);
 return obj;
 }




 function guiAreaSet (l,t,w,h)
 {
 var area={};
 area.type="area";
 area.left=l;
 area.top=t;
 area.width=w;
 area.height=h;
 area.lstr=area.left+"px";
 area.tstr=area.top+"px";
 area.wstr=area.width+"px";
 area.hstr=area.height+"px";
 return area;
 }




 function guiAreaAdjust (area,la,ta,wa,ha)
 {
 if(area.type!="area") { aa.debugAlert(); }
 area.type="area";
 area.left+=la;
 area.top+=ta;
 area.width+=wa;
 area.height+=ha;
 area.lstr=area.left+"px";
 area.tstr=area.top+"px";
 area.wstr=area.width+"px";
 area.hstr=area.height+"px";
 return area;
 }




 function guiRgbaSet (r,g,b,a)
 {
 var rgba={};
 rgba.type="rgba";
 rgba.r=r;
 rgba.g=g;
 rgba.b=b;
 rgba.a=a;
 return rgba;
 }



 function guiRgbaAdjust (rgba,ra,ga,ba,aa)
 {
 if(rgba.type!="rgba") { return rgba; }
 rgba.r+=ra;
 rgba.g+=ga;
 rgba.b+=ba;
 rgba.a+=aa;
 return rgba;
 }





 function guiRgbaToHsva (rgba)
 {
 var hsva,r,g,b,h,s,v,max,min,d;
 if(rgba.type!="rgba") { return rgba; }
 r=rgba.r;
 g=rgba.g;
 b=rgba.b;
 max=Math.max(r,g,b);
 min=Math.min(r,g,b);
 v=max;
 d=max-min;
 s=max===0?0:d/max;
 if(max==min)
  {
  h=0;
  }
 else
  {
  switch(max)
   {
   case r: h=(g-b)/d+(g<b?6:0); break;
   case g: h=(b-r)/d+2; break;
   case b: h=(r-g)/d+4; break;
   }
  h/=6;
  }
 v=v/255;
 hsva=guiHsvaSet(h,s,v,rgba.a);
 return hsva;
 }







 function guiRgbaFromString (string)
 {
 var car,rgba;
 car=string.substring(string.indexOf('(')+1,string.lastIndexOf(')')).split(/,\s*/);
 rgba={};
 rgba.type="rgba";
 rgba.r=car[0];
 rgba.g=car[1];
 rgba.b=car[2];
 rgba.a=car[3];
 if(rgba.a==undefined) { rgba.a=1.0;  }
 return rgba;
 }





 function guiHsvaSet (h,s,v,a)
 {
 var hsva={};
 hsva.type="hsva";
 hsva.h=h;
 hsva.s=s;
 hsva.v=v;
 hsva.a=a;
 return hsva;
 }





 function guiHsvaAdjust (hsva,ha,sa,va,aa)
 {
 if(hsva.type!="hsva") { return hsva; }
 hsva.h+=ha;
 hsva.s+=sa;
 hsva.v+=va;
 hsva.a+=aa;
 return hsva;
 }




 function guiHsvaToRgba (hsva)
 {
 var r,g,b,i,f,p,q,t,rgba;
 if(hsva.type!="hsva") { return hsva; }
 i=Math.floor(hsva.h*6);
 f=hsva.h*6-i;
 p=hsva.v*(1-hsva.s);
 q=hsva.v*(1-f*hsva.s);
 t=hsva.v*(1-(1-f)*hsva.s);
 switch(i%6)
  {
  case 0: r=hsva.v, g=t, b=p; break;
  case 1: r=q, g=hsva.v, b=p; break;
  case 2: r=p, g=hsva.v, b=t; break;
  case 3: r=p, g=q, b=hsva.v; break;
  case 4: r=t, g=p, b=hsva.v; break;
  case 5: r=hsva.v, g=p, b=q; break;
  }
 r=Math.round(r*255);
 g=Math.round(g*255);
 b=Math.round(b*255);
 rgba=guiRgbaSet(r,g,b,hsva.a);
 return rgba;
 }




 function guiPaletteByIndex (index)
 {
 var itm,len;
 len=aa.gui_obj.web_pal.length;
 if(index<0)    { return null; }
 if(index>=len) { return null; }
 itm=aa.gui_obj.web_pal[index];
 return itm;
 }


 function guiPaletteByName (name)
 {
 var itm,i,len,r;
 len=aa.gui_obj.web_pal.length;
 for(i=0;i<len;i++)
  {
  itm=aa.gui_obj.web_pal[i];
  if(aa.stringCompare(itm.name,name,false)==true) { return itm; }
  }
 return null;
 }




 function guiPaletteGather (proc)
 {
 var i,harvest,have,itm,res;
 harvest=[];
 for(i=0;i<aa.gui_obj.web_pal.length;i++)
  {
  itm=aa.gui_obj.web_pal[i];
  if(itm===undefined) { continue; }
  res=proc(itm);
  if(res==null) { harvest.push(itm); break; }
  if(!res)      { continue; }
  //if(!proc(itm))      { continue; }
  harvest.push(itm);
  }
 if(harvest.length==0) { return false; }
 return harvest;
 }




 function guiDeltaE00 (l1,a1,b1,l2,a2,b2)
 {
 var avgL,c1,c2,avgC,g,a1p,a2p,c1p,c2p,avgCp,h1p,h2p,avghp,t;
 var deltahp,deltalp,deltacp,sl,sc,sh,deltaro,rc,rt,deltaE;

 avgL=(l1+l2)/2;
 c1=Math.sqrt(Math.pow(a1,2)+Math.pow(b1,2));
 c2=Math.sqrt(Math.pow(a2,2)+Math.pow(b2,2));

 avgC=(c1+c2)/2;
 g=(1-Math.sqrt(Math.pow(avgC,7)/(Math.pow(avgC,7)+Math.pow(25,7))))/2;
 a1p=a1*(1+g);
 a2p=a2*(1+g);
 c1p=Math.sqrt(Math.pow(a1p,2)+Math.pow(b1,2));
 c2p=Math.sqrt(Math.pow(a2p,2)+Math.pow(b2,2));

 avgCp=(c1p+c2p)/2;
 h1p=aa.numRadianToDegrees(Math.atan2(b1,a1p));
 if(h1p<0) { h1p=h1p+360; }
 h2p=aa.numRadianToDegrees(Math.atan2(b2,a2p));
 if(h2p<0) { h2p=h2p+360; }

 avghp=Math.abs(h1p-h2p)>180?(h1p+h2p+360)/2:(h1p+h2p)/2;
 t=1-0.17*Math.cos(aa.numDegreesToRadian(avghp-30))
    +0.24*Math.cos(aa.numDegreesToRadian(2*avghp))
    +0.32*Math.cos(aa.numDegreesToRadian(3*avghp+6))
     -0.2*Math.cos(aa.numDegreesToRadian(4*avghp-63));
 deltahp=h2p-h1p;
 if(Math.abs(deltahp)>180)  { if(h2p<=h1p) { deltahp+=360; } else { deltahp-=360; } }
 deltalp=l2-l1;
 deltacp=c2p-c1p;
 deltahp=2*Math.sqrt(c1p*c2p)*Math.sin(aa.numDegreesToRadian(deltahp)/2);
 sl=1+((0.015*Math.pow(avgL-50,2))/Math.sqrt(20+Math.pow(avgL-50,2)));
 sc=1+0.045*avgCp;
 sh=1+0.015*avgCp*t;
 deltaro=30*Math.exp(-(Math.pow((avghp-275)/25,2)));
 rc=2*Math.sqrt(Math.pow(avgCp,7)/(Math.pow(avgCp,7)+Math.pow(25,7)));
 rt=-rc*Math.sin(2*aa.numDegreesToRadian(deltaro));
 deltaE=Math.sqrt(Math.pow(deltalp/(sl),2)+Math.pow(deltacp/(sc),2)+Math.pow(deltahp/(sh),2)+rt*(deltacp/(sc))*(deltahp/(sh)));
 return deltaE;
 }




 function guiCieDeltae (r1,g1,b1,r2,g2,b2)
 {
 var a0,a1,a2,a3,a4,a5,de;

       function drgb2xyz (r,g,b)
       {
       var x,y,z;
       if(r>255) { r=255; } else if(r<0) { r=0; }
       if(g>255) { g=255; } else if(g<0) { g=0; }
       if(b>255) { b=255; } else if(b<0) { b=0; }
       r=r/255;
       g=g/255;
       b=b/255;
       if(r>0.04045) { r=Math.pow(((r+0.055)/1.055),2.4); } else { r=r/12.92; }
       if(g>0.04045) { g=Math.pow(((g+0.055)/1.055),2.4); } else { g=g/12.92; }
       if(b>0.04045) { b=Math.pow(((b+0.055)/1.055),2.4); } else { b=b/12.92; }
       r=r*100;
       g=g*100;
       b=b*100;
       x=(r*0.4124564)+(g*0.3575761)+(b*0.1804375);
       y=(r*0.2126729)+(g*0.7151522)+(b*0.0721750);
       z=(r*0.0193339)+(g*0.1191920)+(b*0.9503041);
       return [x,y,z];
       }

       function dxyz2lab (x,y,z)
       {
       var l,a,b;
       x=x/94.811;
       y=y/100.0;
       z=z/107.304;
       if(x>0.008856) { x=Math.pow(x,(1/3)); } else { x=(7.787*x)+(0.13793103448275862); }
       if(y>0.008856) { y=Math.pow(y,(1/3)); } else { y=(7.787*y)+(0.13793103448275862); }
       if(z>0.008856) { z=Math.pow(z,(1/3)); } else { z=(7.787*z)+(0.13793103448275862); }
       l=(116*y)-16;
       a=500*(x-y);
       b=200*(y-z);
       return [l,a,b];
       }

 a0=[r1,g1,b1];
 a1=[]; a1=drgb2xyz(a0[0],a0[1],a0[2]);
 a2=[]; a2=dxyz2lab(a1[0],a1[1],a1[2]);
 a3=[r2,g2,b2];
 a4=[]; a4=drgb2xyz(a3[0],a3[1],a3[2]);
 a5=[]; a5=dxyz2lab(a4[0],a4[1],a4[2]);
 de=guiDeltaE00(a2[0],a2[1],a2[2],a5[0],a5[1],a5[2]);
 return de;
 }





//-----------------------------------------------------------------------




 function guiSpotPurge (handle)
 {
 var grp,i,c,d,spt;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 c=grp.vars.spot.count;
 d=0;
 for(i=0;i<grp.vars.spot.slots;i++)
  {
  if(d>=c)                   { break; }
  if(grp.vars.spot.count==0) { break; }
  spt=grp.vars.spot.ray[i];
  if(spt==null) { continue; }
  d++;
  spt=null;
  grp.vars.spot.ray[i]=spt;
  grp.vars.spot.count--;
  }
 return true;
 }





 function guiSpotById (handle,sid)
 {
 var grp,i,c,d,spt;
 if((grp=aa.guiGroupGet(handle))==null) { return null; }
 c=grp.vars.spot.count;
 d=0;
 for(i=0;i<grp.vars.spot.slots;i++)
  {
  if(d>=c)      { break; }
  spt=grp.vars.spot.ray[i];
  if(spt==null) { continue; }
  d++;
  if(spt.sid==sid)   {   return spt;   }
  }
 return null;
 }





 function guiSpotAdd (handle,sid,x,y,w,h,uv1,uv2,uv3)
 {
 var grp,spt,i;


 spt=guiSpotById(handle,sid);
 if(spt!=null)
  {
  //alert("spotadd exists "+sid);
//  console.log("guiSpotAdd "+sid+" exists");
  return false;
  }
 if((grp=aa.guiGroupGet(handle))==null) { return false; }

 //if((grp=aa.guiGroupGet(handle))==null) { return false; }
 //spt=guiSpotById(handle,sid);
 //if(spt!=null) { alert("exists "+sid); return false; }
 //else { alert("not ezx "+sid); }
 for(i=0;i<grp.vars.spot.slots;i++)
  {
  spt=grp.vars.spot.ray[i];
  if(spt!=null) { continue; }
  spt={};
  spt.id=grp.obj.id;
  spt.sid=sid;
  spt.self_index=i;
  spt.x=x;
  spt.y=y;
  spt.w=w;
  spt.h=h;
  spt.uv1=uv1;
  spt.uv2=uv2;
  spt.uv3=uv3;
  grp.vars.spot.ray[i]=spt;
  grp.vars.spot.count++;
  //if(sid>=1000&&sid<=1003)
   {
   ///console.log("spot add ",spt.id+"  "+spt.x+" "+spt.y+" "+spt.w+" "+spt.h);
   }
  return true;
  }
 return false;
 }






 function guiSpotRemove (handle,sid)
 {
 var grp,spt,i;
 //if((grp=aa.guiGroupGet(handle))==null) { return false; }
 //spt=guiSpotById(handle,sid);
 //if(spt==null) { return false; }
 spt=guiSpotById(handle,sid);
 if(spt==null) { return false; }
 if((grp=aa.guiGroupGet(handle))==null) { return false; }

 i=spt.self_index;
 spt={};
 spt=null;
 grp.vars.spot.ray[i]=null;
 grp.vars.spot.count--;
 return true;
 }





 function guiSpotMatch (handle,x,y)
 {
 var grp,i,c,d,spt,hx1,hy1,hx2,hy2;
 if((grp=aa.guiGroupGet(handle))==null) { return null; }

 ///console.log(grp.obj.id);
 c=grp.vars.spot.count;
  ///console.log("spot match "+grp.obj.id+" "+c+"  "+x+"  "+y);
 d=0;
 for(i=0;i<grp.vars.spot.slots;i++)
  {
  if(d>=c)      { break; }
  spt=grp.vars.spot.ray[i];
  if(spt==null) { continue; }
  d++;
  hx1=spt.x;
  hy1=spt.y;
  hx2=hx1+spt.w;
  hy2=hy1+spt.h;
  ///console.log(x+" "+hx1+"  "+hx2+" "+y+" "+hy1+" "+hy2);
  ///console.log(x+" "+y+"  "+hx1+" "+hy1+"  "+hx2+" "+hy2);
  if((x>=hx1&&x<hx2)&&(y>=hy1&&y<hy2))   {   return spt;   }
  }
 return null;
 }




//-----------------------------------------------------------------------

////https://www.ampsoft.net/webdesign-l/WindowsMacFonts.html

//https://stackoverflow.com/questions/6604192/showing-console-errors-and-alerts-in-a-div-inside-the-page
 function guiFontAvailable (font)
 {
 var ww,bod,cntr,monoww,serifww,sansww;
 bod=document.body;
 cntr=document.createElement('span');
 cntr.innerHTML=Array(100).join('wi');
 cntr.style.cssText=['position:absolute','width:auto','font-size:128px','left:-99999px'].join(' !important;');
 function getWidth(fontFamily)
  {
  cntr.style.fontFamily=fontFamily;
  bod.appendChild(cntr);
  ww=cntr.clientWidth;
  ///console.log("family="+fontFamily+" ww="+ww);
  bod.removeChild(cntr);
  return ww;
  };
 monoww=getWidth('monospace');
 serifww=getWidth('serif');
 sansww=getWidth('sans-serif');
 return monoww!==getWidth(font+',monospace')||sansww!==getWidth(font+',sans-serif')||serifww!==getWidth(font+',serif');
 }





 function guiFontLoad (name,type,url)
 {
 var fontobj;
 fontobj={};
 fontobj.type="fontload";
 fontobj.name=name;
 fontobj.format=type;
 fontobj.url=url;
 fontobj.font=null;
 fontobj.is_error=false;
 fontobj.is_ready=false;
 fontobj.promise_object=null;
 fontobj.promise_handle=0;
 fontobj.promise_val=null;
 fontobj.stage=100;
 return fontobj;
 }




 function guiFontDelete (fontobj)
 {
 var b;
 if(fontobj==undefined)       { return false; }
 if(fontobj==null)            { return false; }
 if(fontobj.type!="fontload") { return false; }
 if(fontobj.promise_handle!=0)
  {
  aa.debugAlert();
  }
 if(fontobj.font!=null)
  {
  b=document.fonts.delete(fontobj.font);
  if(b!=true) { aa.debugAlert(); return false; }
  fontobj.font=null;
  }
 fontobj.promise_val=null;
 fontobj.promise_object=null;
 fontobj.font=null;
 fontobj={};
 return true;
 }







 function guiFontStatus (fontobj)
 {
 var txt,status,fnt;
 if(fontobj==undefined)       { return false; }
 if(fontobj==null)            { return false; }
 if(fontobj.type!="fontload") { return false; }
 switch(fontobj.stage)
  {
  case 100:
  txt="url("+fontobj.url+")";// format('"+fontobj.format+"')";
  //txt="url("+fontobj.url+") format('"+fontobj.format+"')";
  fontobj.font=new FontFace(fontobj.name,txt);
  //console.log(fontobj.font);
  fontobj.stage=120;
  break;

  case 120:
  fontobj.promise_object=fontobj.font.load();
  //console.log(fontobj.promise_object);
  fontobj.promise_handle=aa.promiseCreate(fontobj.promise_object,fontobj.stage);
  if(fontobj.promise_handle==0) { aa.debugAlert(); }
  fontobj.stage=140;
  break;


  case 140:
  status=aa.promiseStatus(fontobj.promise_handle);
  if(status.state==PROMISE_pending)   { break; }
  if(status.state==PROMISE_rejected)
   {
   aa.debugAlert("err="+status.err);
   fontobj.is_error=true;
   aa.debugAlert();
   fontobj.stage=666;
   break;
   }
  if(status.state!=PROMISE_completed) { aa.debugAlert("ss="+status.state); break;  }
  fontobj.promise_val=status.val;
  if(aa.promiseDestroy(fontobj.promise_handle)!=true) { aa.debugAlert(); }
  fontobj.promise_handle=0;
  document.fonts.add(fontobj.promise_val);
  fontobj.is_ready=true;
  fontobj.stage=200;
  break;

  case 200:
  return true;
  }
 return false;
 }





 function guiFontString (weight,size,family)
 {
 var str;
 //if(weight) { obj.font_weight=weight; }
 //if(family) { obj.font_face=family; }
 //if(size)   { obj.font_size=size; }
 str=weight+" "+size+"px '"+family+"'";
 return str;
 }




 function guiFontFix (font)
 {
 var han,grp,img,frm,y,x,z,yy,fi,fl,fo;
 fl=gui_obj.font_fixes.length;
 //console.log(font);

 for(fi=0;fi<fl;fi++)
  {
  fo=gui_obj.font_fixes[fi];
//  console.log(fi,fo);
  if(fo.font==font) { return fo.fix; }
  }
   //console.log("fl="+fl);
 if((han=aa.guiCreate("canvas","aa_font_fixer",9000))==0)  { aa.debugAlert(); }
 if((grp=aa.guiGroupGetById("aa_font_fixer"))==null) { aa.debugAlert(); }

 //function guiApply (handle,disp,retina,opa,x,y,wid,hit,domw,domh)
 //function guiRetinaSet (handle,ratw,rath,x,y,wid,hit,domw,domh)
 aa.guiApply(han,"none",false,1.0,0,0,30,200,30,200);//1.0,1.0,0,0,30,200,30,200);
 aa.debugAlert();


 aa.guiCanvasText(han,10,10,0,0,aa.guiRgbaString(240,240,240,1),font,"`");
 img=aa.guiCanvasImageGet(han,0,0,30,200);
 frm=img.data;
 yy=-1;
 for(y=0;y<200;y++)
  {
  for(x=0;x<30;x++)
   {
   z=(y*30*4)+(x*4);
   if((frm[z+0]>230)&&(frm[z+1]>230)&&(frm[z+2]>230)) { yy=y; break; }
   }
  if(yy!=-1) { break; }
  }
 aa.guiDestroy(han);
 yy=-(yy-10);
 if(yy===-0) { yy=0; }
 fo={}
 fo.font=font;
 fo.fix=yy;
 gui_obj.font_fixes.push(fo);
 return yy;
 }



//-----------------------------------------------------------------------


 function guiLenseNew (lenseid,id0,id1,paintproc)
 {
 var obj,lobj,grp0,grp1;
 if((grp0=aa.guiGroupGetById(id0))==null) { return null; }
 if((grp1=aa.guiGroupGetById(id1))==null) { return null; }
 obj={};
 obj.type="lense";
 obj.id=lenseid;
 obj.layer=[];
 obj.sxdx={sx:0,sy:0,sw:0,sh:0,dx:0,dy:0,dw:0,dh:0};
 obj.needs_paint=false;
 obj.proc=paintproc;
 obj.vars={};

 lobj={};
 lobj.type="layer0";
 lobj.id=id0;
 lobj.grp=grp0;
 lobj.area=aa.guiCssAreaGet(grp0.han);
 obj.layer.push(lobj);

 lobj={};
 lobj.type="layer1";
 lobj.id=id1;
 lobj.grp=grp1;
 lobj.area=aa.guiCssAreaGet(grp1.han);
 obj.layer.push(lobj);

 return obj;
 }



 function guiLenseAreaCalc (obj)
 {
 var l,ll,lobj;
 ll=obj.layer.length;
 for(l=0;l<ll;l++)
  {
  lobj=obj.layer[l];
  lobj.area=aa.guiCssAreaGet(lobj.grp.han);
  obj.layer[l]=lobj;
  }
 return true;
 }



 function guiLenseClear (obj,index,rect)
 {
 var lobj;
 if(index<0||index>1) { return false; }
 lobj=obj.layer[index];
 if(rect!==undefined)    {    aa.guiCanvasClear(lobj.grp.han,rect);  }
 else                    {    aa.guiCanvasClear(lobj.grp.han);       }
 return true;
 }



 function guiLenseRectSet (obj,index,x,y,w,h)
 {
 var lobj;
 var osx,osy,osw,osh,odx,ody,odw,odh;
 if(index<0||index>1) { return false; }
 lobj=obj.layer[index];
 if(x<0) { x=0; }
 if(y<0) { y=0; }
 if(x>=lobj.area.width)  { x=lobj.area.width-1; }
 if(y>=lobj.area.height) { y=lobj.area.height-1; }
 if(w>lobj.area.width)   { w=lobj.area.width; }
 if(h>lobj.area.height)  { h=lobj.area.height; }
 if((x+w)>=lobj.area.width)  { w=lobj.area.width-x; }
 if((y+h)>=lobj.area.height) { h=lobj.area.height-y; }
 osx=obj.sxdx.sx;
 osy=obj.sxdx.sy;
 osw=obj.sxdx.sw;
 osh=obj.sxdx.sh;
 odx=obj.sxdx.dx;
 ody=obj.sxdx.dy;
 odw=obj.sxdx.dw;
 odh=obj.sxdx.dh;
 if(index==0)  {  obj.sxdx.sx=x;  obj.sxdx.sy=y;  obj.sxdx.sw=w;  obj.sxdx.sh=h;  }
 else          {  obj.sxdx.dx=x;  obj.sxdx.dy=y;  obj.sxdx.dw=w;  obj.sxdx.dh=h;  }
 while(1)
  {
  if(obj.sxdx.sx!=osx) { obj.needs_paint=true; break; }
  if(obj.sxdx.sy!=osy) { obj.needs_paint=true; break; }
  if(obj.sxdx.sw!=osw) { obj.needs_paint=true; break; }
  if(obj.sxdx.sh!=osh) { obj.needs_paint=true; break; }
  if(obj.sxdx.dx!=odx) { obj.needs_paint=true; break; }
  if(obj.sxdx.dy!=ody) { obj.needs_paint=true; break; }
  if(obj.sxdx.dw!=odw) { obj.needs_paint=true; break; }
  if(obj.sxdx.dh!=odh) { obj.needs_paint=true; break; }
  break;
  }
 return true;
 }




 function guiLenseProject (obj)
 {
 var lobj0,lobj1,sx,sy,sw,sh,dx,dy,dw,dh;
 lobj0=obj.layer[0];
 lobj1=obj.layer[1];
 ///guiLenseClear(obj,1);
 sx=obj.sxdx.sx;
 sy=obj.sxdx.sy;
 sw=obj.sxdx.sw;
 sh=obj.sxdx.sh;
 dx=obj.sxdx.dx;
 dy=obj.sxdx.dy;
 dw=obj.sxdx.dw;
 dh=obj.sxdx.dh;
 aa.guiCanvasImageDraw(lobj1.grp.han,sx,sy,sw,sh,dx,dy,dw,dh,lobj0.grp.dom);
 return true;
 }




 function guiLenseNeedsPaintSet (obj,state)
 {
 obj.needs_paint=state;
 return true;
 }




 function guiLensePaint (obj)
 {
 if(obj.needs_paint!=true) { return false; }
 obj.proc(obj);
 guiLenseNeedsPaintSet(obj,false);
 return true;
 }




//-----------------------------------------------------------------------


 function imageLoaderNew (url)
 {
 var obj;
 obj={};
 obj.type="image";
 obj.url=url;
 obj.is_loading=true;
 obj.is_failed=false;
 obj.is_success=false;
 obj.is_canvased=false;
 obj.wid=0;
 obj.hit=0;
 obj.img=new Image();
 obj.img.crossOrigin='anonymous';
 obj.img.onload=function()  {  obj.is_success=true;  obj.is_loading=false;  }
 obj.img.onerror=function(e) { console.log(e); obj.is_failed=true;   obj.is_loading=false;  }
 obj.img.src=obj.url;
 return obj;
 }




 function imageLoaderDelete (obj)
 {
 if(obj.type!="image") { return false; }
 obj.img.src="";
 obj.img.onload=null;
 obj.img.onerror=null;
 obj.img=null;
 obj=null;
 return true;
 }






//-----------------------------------------------------------------------




 function spriteObjInit ()
 {
 if(Object.keys(sprite_obj).length!=0) { return; }
 sprite_obj.is_init=true;
 }




 function spriteLoad (url)
 {
 var obj,i,s,sl,ch;
 sl=url.length;
 for(s=0;s<sl;s++)  {  ch=url[sl-s-1];  if(ch=='?') { break; }  }
 obj={};
 obj.type="sprite";
 obj.guc=aa_guc++;
 obj.stage=0;
 obj.url=url;
 obj.short_url=url;
 if(sl>s)  {  for(i=0;i<(s+1);i++) {   obj.short_url=aa.stringLastCharTrim(obj.short_url);   }  }
 obj.is_loading=true;
 obj.is_failed=false;
 obj.is_success=false;
 obj.is_ready=false;
 obj.needs_store=false;
 obj.crc=0;
 obj.db=0;
 obj.wid=0;
 obj.hit=0;
 obj.hint=[];
 obj.oy=0;
 obj.sheet_crc=0;
 obj.sheet_map=[];
 obj.img=new Image();
 obj.img.crossOrigin='anonymous';
 obj.img.src=obj.url;
 obj.img.onload=function()
  {
  obj.is_success=true;
  obj.is_loading=false;
  }
 obj.img.onerror=function()
  {
  obj.is_failed=true;
  obj.is_loading=false;
  }
 return obj;
 }






 function spriteRelease (obj)
 {
 var i,grp,han;
 if(obj.type!="sprite") { return false; }
 for(i=0;i<4;i++)
  {
  grp=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_"+(i+1)));
  if(grp==null) { aa.debugAlert(i); return false; }
  han=grp.han;
  aa.guiDestroy(han);
  }
 if(obj.db!=0)
  {
  aa.storageDestroy(obj.db);
  obj.db=0;
  }
 obj.img.src="";
 obj.img.onload=null;
 obj.img.onerror=null;
 obj.img=null;
 obj.pix=null;
 obj.pix2=null;
 obj.pix3=null;
 obj.pix4=null;
 obj=null;
 return true;
 }





 function spriteStatus (obj)
 {
 var iw,ih,x,y,w,h,z,four;
 var han,grp,han2,grp2,han3,grp3,han4,grp4;
 var ok,pen,todo,r,g,b,a,go;
 var minX,minY,maxX,maxY,xx,yy,off,hob,bound;
 if(obj.type!="sprite") { return false; }
 if(obj.is_ready==true) { return true;  }
 switch(obj.stage)
  {
  case 0:
  if(obj.is_loading==true) { return false; }
  obj.stage=100;
  break;


  case 100:
  obj.wid=obj.img.width;
  obj.hit=obj.img.height;
  iw=obj.wid;
  ih=obj.hit;
  //console.log(obj.img.width,obj.img.height);



  han2=aa.guiCreate("canvas","spritesheet_"+obj.guc+"_2",3000);
  grp2=aa.guiGroupGet(han2);
  aa.guiCanvasAlphaSet(grp2.han,0.0);
  aa.guiSizeSet(grp2.han,iw,ih);
  aa.guiCssAreaSet(grp2.han,null,null,iw,ih);
  aa.guiCanvasSmoothingSet(grp2.han,false);


  han3=aa.guiCreate("canvas","spritesheet_"+obj.guc+"_3",3000);
  grp3=aa.guiGroupGet(han3);
  aa.guiCanvasAlphaSet(grp3.han,0.0);
  aa.guiSizeSet(grp3.han,iw,ih);
  aa.guiCssAreaSet(grp3.han,null,null,iw,ih);
  aa.guiCanvasSmoothingSet(grp3.han,false);

  han4=aa.guiCreate("canvas","spritesheet_"+obj.guc+"_4",3000);
  grp4=aa.guiGroupGet(han4);
  aa.guiCanvasAlphaSet(grp4.han,0.0);
  aa.guiSizeSet(grp4.han,iw,ih);
  aa.guiCssAreaSet(grp4.han,null,null,iw,ih);
  aa.guiCanvasSmoothingSet(grp4.han,false);

  han=aa.guiCreate("canvas","spritesheet_"+obj.guc+"_1",3000);
  grp=aa.guiGroupGet(han);
  aa.guiCanvasAlphaSet(grp.han,0.0);
  aa.guiSizeSet(grp.han,iw,ih);
  aa.guiCssAreaSet(grp.han,null,null,iw,ih);
  aa.guiCanvasSmoothingSet(grp.han,false);

  obj.stage=200;
  break;





  case 200:
  iw=obj.wid;
  ih=obj.hit;
  grp=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_1"));
  grp.ctx.imageSmoothingEnabled=false;
  grp.ctx.imageSmoothingQuality="low";
  aa.guiCanvasImageDraw(grp.han,0,0,iw,ih,0,0,iw,ih,obj.img);
  obj.pix=aa.guiCanvasImageGet(grp.han,0,0,iw,ih);
  obj.crc=0;
  four=0;
  for(y=0>>0;y<(ih>>0);y+=1>>0)
   {
   for(x=0>>0;x<(iw>>0);x+=1>>0)
    {
    obj.crc+=obj.pix.data[(four+0)]>>0;
    obj.crc+=obj.pix.data[(four+1)]>>0;
    obj.crc+=obj.pix.data[(four+2)]>>0;
    //if(obj.pix.data[(four+3)]>0) { obj.crc+=(
    a=obj.pix.data[(four+3)]>>0;
    //obj.crc+=(a>>0);
    //obj.crc+=obj.pix.data[(four+3)]>>0;
    obj.crc++;
    if(a!=0) { obj.crc+=(x+y);  }
    four+=4;
    }
   }
  obj.db=aa.storageCreate(false);
  obj.sheet_map=JSON.parse(aa.storageRead(obj.db,obj.short_url+"_sprite_sheet_map"));
  obj.sheet_crc=aa.storageRead(obj.db,obj.short_url+"_sprite_sheet_crc");
  obj.needs_store=true;
  if(obj.sheet_map)
   {
   if(obj.sheet_crc==obj.crc)   {    obj.needs_store=false; }
   }
/// obj.needs_store=true; ///
  if(obj.needs_store==true) { obj.stage=300; break; }
  obj.stage=600;
  break;




  case 300:
  obj.sheet_map=[];
  console.log("needs store");
  obj.oy=0;
  obj.stage=320;
  break;



  case 320:
  iw=obj.wid;
  ih=obj.hit;
  grp=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_1"));
  go=0;
  while(1)
   {
   go++;
   if(go>=128)    { break; }
   if(obj.oy>=ih) { break; }
   x=0;
   while(1)
    {
    ok=0;
    if(x>=iw) { break; }
    //pen=spritePixGet(x+0,obj.oy+0,obj.pix,{r:255,g:0,b:220,a:128});   if(pen.match==false) { x++; continue; }
    //pen=spritePixGet(x+1,obj.oy+0,obj.pix,{r:255,g:0,b:220,a:128});   if(pen.match==false) { x++; continue; }
    //pen=spritePixGet(x+0,obj.oy+1,obj.pix,{r:255,g:0,b:220,a:128});   if(pen.match==false) { x++; continue; }
    pen=spritePixCmp(x+0,obj.oy+0,obj.pix);   if(pen.match==false) { x++; continue; }
    pen=spritePixCmp(x+1,obj.oy+0,obj.pix);   if(pen.match==false) { x++; continue; }
    pen=spritePixCmp(x+0,obj.oy+1,obj.pix);   if(pen.match==false) { x++; continue; }
    ok=1;
    break;
    }
   if(ok==0) { obj.oy++; continue; }
   minX=maxX=x;
   minY=maxY=obj.oy;
   ///console.log(minX+" "+minY);
//   for(z=minX;z<iw;z++)  { pen=spritePixGet(z,minY,obj.pix,{r:255,g:0,b:220,a:128});  if(pen.match==false) { break; }   maxX=z;   }
   ///for(z=minY;z<ih;z++)  { pen=spritePixGet(minX,z,obj.pix,{r:255,g:0,b:220,a:128});  if(pen.match==false) { break; }   maxY=z;   }
   for(z=minX;z<iw;z++)  { pen=spritePixCmp(z,minY,obj.pix);  if(pen.match==false) { break; }   maxX=z;   }
   for(z=minY;z<ih;z++)  { pen=spritePixCmp(minX,z,obj.pix);  if(pen.match==false) { break; }   maxY=z;   }

   yy=minY;  for(xx=minX;xx<=maxX;xx++)   {   off=(((yy*iw)+xx)<<2)>>0;   obj.pix.data[off+1]=220>>0; }
   yy=maxY;  for(xx=minX;xx<=maxX;xx++)   {   off=(((yy*iw)+xx)<<2)>>0;   obj.pix.data[off+1]=220>>0; }
   xx=minX;  for(yy=minY;yy<=maxY;yy++)   {   off=(((yy*iw)+xx)<<2)>>0;   obj.pix.data[off+1]=220>>0; }
   xx=maxX;  for(yy=minY;yy<=maxY;yy++)   {   off=(((yy*iw)+xx)<<2)>>0;   obj.pix.data[off+1]=220>>0; }
   aa.guiCanvasImagePut(grp.han,0,0,0,0,iw,ih,obj.pix);
   hob={minX:minX,maxX:maxX,minY:minY,maxY:maxY};
   obj.hint[obj.hint.length]=hob;
   x=0;
   }
  if(obj.oy<ih) { break; }
  for(z=0;z<obj.hint.length;z++)
   {
   hob=obj.hint[z];
   x=hob.minX;
   y=hob.minY;
   w=(hob.maxX-hob.minX)+1;
   h=(hob.maxY-hob.minY)+1;
   bound=spriteBounder(grp,x+1,y+1,w-2,h-2,obj.pix);
   obj.sheet_map[obj.sheet_map.length]=bound;
   }
  obj.stage=600;
  break;



  case 600: // darken
    //obj.stage=700; break;
  iw=obj.wid;
  ih=obj.hit;
  grp=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_1"));
  aa.guiCanvasImagePut(grp.han,0,0,0,0,iw,ih,obj.pix);
  grp2=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_2"));
  obj.pix2=aa.guiCanvasImageGet(grp2.han,0,0,iw,ih); off=0;
  todo=iw*ih*4;
  while(off<todo)
   {
   if(obj.pix.data[off+3]>0)
    {
    r=obj.pix.data[off+0];   g=obj.pix.data[off+1];   b=obj.pix.data[off+2];   a=obj.pix.data[off+3];
    //r=r*0.50;   g=g*0.50;   b=b*0.50;   r=r>>0;   g=g>>0;   b=b>>0;   a=a>>0;
    r>>=1; g>>=1; b>>=1; a>>=0;
    if(r<0) { r=0; }   else   if(r>255) { r=255; }
    if(g<0) { g=0; }   else   if(g>255) { g=255; }
    if(b<0) { b=0; }   else   if(b>255) { b=255; }
    if(a<0) { a=0; }   else   if(a>255) { a=255; }
    obj.pix2.data[off+0]=r;   obj.pix2.data[off+1]=g;   obj.pix2.data[off+2]=b;   obj.pix2.data[off+3]=a;
    }
   off+=4;
   }
    ///aa.guiCanvasImagePut(grp2.han,0,0,0,0,iw,ih,obj.pix2);
  obj.stage=700;
  break;






  case 700: // gray
   ///obj.stage=750; break;
  iw=obj.wid;
  ih=obj.hit;
  grp2=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_2"));
  aa.guiCanvasImagePut(grp2.han,0,0,0,0,iw,ih,obj.pix2);
  grp3=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_3"));
  obj.pix3=aa.guiCanvasImageGet(grp3.han,0,0,iw,ih);
  off=0;
  todo=iw*ih*4;
  while(off<todo)
   {
   if(obj.pix.data[off+3]>0)
    {
    r=obj.pix.data[off+0];   g=obj.pix.data[off+1];   b=obj.pix.data[off+2];   a=obj.pix.data[off+3];
    r=(r+g+b)/3;
    r=r; g=r; b=r;
    //r=r*0.65;   g=g*0.65;   b=b*0.65;
    r=r>>0;   g=g>>0;   b=b>>0;   a=a>>0;
    if(r<0) { r=0; }   else   if(r>255) { r=255; }
    if(g<0) { g=0; }   else   if(g>255) { g=255; }
    if(b<0) { b=0; }   else   if(b>255) { b=255; }
    if(a<0) { a=0; }   else   if(a>255) { a=255; }
    obj.pix3.data[off+0]=r;   obj.pix3.data[off+1]=g;   obj.pix3.data[off+2]=b;   obj.pix3.data[off+3]=a;
    }
   off+=4;
   }
     //aa.guiCanvasImagePut(grp3.han,0,0,0,0,iw,ih,obj.pix3);
  obj.stage=750;
  break;




  case 750: // gray darker
    //obj.stage=800; break;
  iw=obj.wid;
  ih=obj.hit;
  grp3=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_3"));
  aa.guiCanvasImagePut(grp3.han,0,0,0,0,iw,ih,obj.pix3);
  grp4=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_4"));
  obj.pix4=aa.guiCanvasImageGet(grp4.han,0,0,iw,ih);
  off=0;
  todo=iw*ih*4;
  while(off<todo)
   {
   if(obj.pix.data[off+3]>0)
    {
    r=obj.pix.data[off+0];   g=obj.pix.data[off+1];   b=obj.pix.data[off+2];   a=obj.pix.data[off+3];
    r=(r+g+b)/3;
    r=r; g=r; b=r;
    //r=r*0.45;   g=g*0.45;   b=b*0.45;   r=r>>0;   g=g>>0;   b=b>>0;   a=a>>0;
    r>>=1; g>>=1; b>>=1; a>>=0;
    if(r<0) { r=0; }   else   if(r>255) { r=255; }
    if(g<0) { g=0; }   else   if(g>255) { g=255; }
    if(b<0) { b=0; }   else   if(b>255) { b=255; }
    if(a<0) { a=0; }   else   if(a>255) { a=255; }
    obj.pix4.data[off+0]=r;   obj.pix4.data[off+1]=g;   obj.pix4.data[off+2]=b;   obj.pix4.data[off+3]=a;
    }
   off+=4;
   }
    aa.guiCanvasImagePut(grp4.han,0,0,0,0,iw,ih,obj.pix4);
  obj.stage=800;
  break;



  case 800:
  if(obj.needs_store==true)
   {
   aa.storageWrite(obj.db,obj.short_url+"_sprite_sheet_crc",obj.crc);
   aa.storageWrite(obj.db,obj.short_url+"_sprite_sheet_map",JSON.stringify(obj.sheet_map));
   }
  aa.storageDestroy(obj.db);
  obj.db=0;
  obj.img=null;
  obj.is_ready=true;
  obj.stage=1000;
///  console.log(obj);

  case 1000:
  return true;
  }
 return false;
 }






 function spriteBounder (grp,xx,yy,ww,hh,data)
 {
 var iw,ih,x2,y2,a0,a1,a2,a3;
 var at,x,y,off,alf,ok,z;
 var obj,obja,objb,bounds;
 var vminx,vminy,vmaxx,vmaxy;
 var iminx,iminy,imaxx,imaxy;
 iw=data.width;
 ih=data.height;
 x2=(xx+ww)-1;
 y2=(yy+hh)-1;
 a0=[];
 a1=[];
 a2=[];
 a3=[];
 at=1;
 y=yy;
 while(1)
  {
  if(y>y2) { break; }
  x=xx;
  while(1)
   {
   if(x>x2) { break; }
   off=((y*iw)+x)<<2;
   alf=data.data[off+3]>>0;
   if(alf<at) {  x++; continue; }
   obj={x:x,y:y};
   a0[a0.length]=obj;
   break;
   }
  y++;
  }
 y=yy;
 while(1)
  {
  if(y>y2) { break; }
  x=x2;
  while(1)
   {
   if(x<xx) { break; }
   off=((y*iw)+x)<<2;
   alf=data.data[off+3]>>0;
   if(alf<at) {  x--; continue; }
   obj={x:x,y:y};
   a1[a1.length]=obj;
   break;
   }
  y++;
  }
 x=xx;
 while(1)
  {
  if(x>x2) { break; }
  y=yy;
  while(1)
   {
   if(y>y2) { break; }
   off=((y*iw)+x)<<2;
   alf=data.data[off+3]>>0;
   if(alf<at) {  y++; continue; }
   obj={x:x,y:y};
   a2[a2.length]=obj;
   break;
   }
  x++;
  }
 x=x2;
 while(1)
  {
  if(x<xx) { break; }
  y=y2;
  while(1)
   {
   if(y<yy) { break; }
   off=((y*iw)+x)<<2;
   alf=data.data[off+3]>>0;
   if(alf<at) {  y--; continue; }
   obj={x:x,y:y};
   a3[a3.length]=obj;
   break;
   }
  x--;
  }
 vminx=99999>>0; iminx=-1; for(z=0;z<a0.length;z++) {  obja=a0[z];  if(obja.x<vminx) { vminx=obja.x; iminx=z; }  }
 vmaxx=-1>>0;    imaxx=-1; for(z=0;z<a0.length;z++) {  objb=a1[z];  if(objb.x>vmaxx) { vmaxx=objb.x; imaxx=z; }  }
 vminy=99999>>0; iminy=-1; for(z=0;z<a2.length;z++) {  obja=a2[z];  if(obja.y<vminy) { vminy=obja.y; iminy=z; }  }
 vmaxy=-1>>0;    imaxy=-1; for(z=0;z<a3.length;z++) {  objb=a3[z];  if(objb.y>vmaxy) { vmaxy=objb.y; imaxy=z; }  }
 bounds={};
 bounds.x=vminx;
 bounds.y=vminy;
 bounds.x1=vminx;
 bounds.y1=vminy;
 bounds.x2=vmaxx;
 bounds.y2=vmaxy;
 bounds.w=(bounds.x2-bounds.x1)+1;
 bounds.h=(bounds.y2-bounds.y1)+1;
 return bounds;
 }







 function spritePixCmp (x,y,pix)
 {
 var m,o,rr,gg,bb,aa;
 m=null;
 o=((y*(pix.width<<2))+(x<<2))>>0;//|0;
  while(1) // 255,0,220,??
   {
   m=false;
   aa=pix.data[o+3];
   if(aa<128) { break; }
   rr=pix.data[o+0];
   if(rr<250) { break; }
   gg=pix.data[o+1];
   if(gg>16)  { break; }
   bb=pix.data[o+2];
   if(bb<210) { break; }
   if(bb>224) { break; }
   m=true;
   break;
   }
 return {  w:pix.width>>0,  h:pix.height>>0,  r:pix.data[o+0]>>0, g:pix.data[o+1]>>0, b:pix.data[o+2]>>0,  a:pix.data[o+3]>>0, match:m };
 }


/*
 function spritePixGet (x,y,pix,cmp)
 {
 var m,o,rr,gg,bb,aa;
 m=null;
 o=((y*(pix.width<<2))+(x<<2))>>0;//|0;
 if(cmp!=undefined)
  {
  while(1)
   {
   m=false;
   aa=pix.data[o+3];
   if(aa<128) { break; }
   rr=pix.data[o+0];
   if(rr<250) { break; }
   gg=pix.data[o+1];
   if(gg>16)  { break; }
   bb=pix.data[o+2];
   if(bb<210) { break; }
   if(bb>224) { break; }


   if((x<140&&y<130))
    {
    console.log(x+" "+y+"  "+rr+"  "+gg+"  "+bb+"  "+aa);
    }


   if(pix.data[o+0]!=cmp.r) { break; }
   if(pix.data[o+1]!=cmp.g) { break; }
   if(pix.data[o+2]!=cmp.b&&(pix.data[o+2]!=cmp.b+1)) { break; } //firefox renders some blues slightly off
   if(pix.data[o+3]<cmp.a)  { break; }

   m=true;
   break;
   }
  }
 return {  w:pix.width>>0,  h:pix.height>>0,  r:pix.data[o+0]>>0, g:pix.data[o+1]>>0, b:pix.data[o+2]>>0,  a:pix.data[o+3]>>0, match:m };
 }
 */






 function spriteRectGet (obj,index)
 {
 var rec;
 if(obj==undefined)              { return null; }
 if(obj.type!="sprite")          { return false; }
 if(obj.is_loading==true)        { return null; }
 if(obj.is_ready!=true)          { return null; }
 if(obj.sheet_map==undefined)    { return null; }
 if(obj.sheet_map.length==0)     { return null; }
 //console.log(obj.sheet_map.length);
 if(index>=obj.sheet_map.length) { aa.debugLogger(5,"index overflow index="+index+"  "+obj.sheet_map.length);  return null;  }
 rec=obj.sheet_map[index];
 rec.ratio_wh=rec.w/rec.h;
 rec.ratio_hw=rec.h/rec.w;
 return rec;
 }







 function spritePaint (obj,canid,sx,sy,sw,sh,dx,dy,dw,dh,rot,fx,cross)
 {
 var grp,crx,cry,iw,ih,se,sq,dv;
 var ex,ey,grad,x1,y1,x2,y2,grp2,grp3,sf,grp4,grp5;
 var ox,oy,ow,oh,mx,my,rc;
 if(obj==undefined)              { return false; }
 if(obj.type!="sprite")          { return false; }
 if(obj.is_ready!=true)          { return false; }

 grp2=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_1"));
 grp3=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_2"));
 grp4=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_3"));
 grp5=aa.guiGroupGet(aa.guiIdFind("spritesheet_"+obj.guc+"_4"));
 grp=aa.guiGroupGet(aa.guiIdFind(canid));

 if(fx==2)
  {
//  console.log("a");
  }
 grp.ctx.save();
 //if(0) { se=true;   sq="high"; }
 //else  { se=false;  sq="low";  }
 se=true; sq="low";
 grp.ctx.imageSmoothingEnabled=se;
 grp.ctx.imageSmoothingQuality=sq;
// if(dh==0&&dw!=0) { dh=dw*rect.ratio_hw; }
 //else
 //if(dw==0&&dh!=0) { dw=dh*rect.ratio_wh; }
 iw=obj.wid;
 ih=obj.hit;
 crx=dx+(dw/2);
 cry=dy+(dh/2);
 if(aa.dataValueExists(rot)===true&&rot!=0)
  {
  grp.ctx.translate(crx,cry);
  grp.ctx.rotate(aa.numDegreesToRadian(rot));
  grp.ctx.translate(-crx,-cry);
  }
 sf=1;
 //console.log(fx);
 if(fx==0)  {  ox=dx/sf;  oy=dy/sf;  ow=dw/sf;  oh=dh/sf;  aa.guiCanvasImageDraw(grp.han,sx,sy,sw,sh,ox,oy,ow,oh,grp2.dom);  } else
 if(fx==1)  {  ox=dx/sf;  oy=dy/sf;  ow=dw/sf;  oh=dh/sf;  aa.guiCanvasImageDraw(grp.han,sx,sy,sw,sh,ox,oy,ow,oh,grp3.dom);  } else
 if(fx==2)  {  ox=dx/sf;  oy=dy/sf;  ow=dw/sf;  oh=dh/sf;  aa.guiCanvasImageDraw(grp.han,sx,sy,sw,sh,ox,oy,ow,oh,grp4.dom);  } else
 if(fx==3)  {  ox=dx/sf;  oy=dy/sf;  ow=dw/sf;  oh=dh/sf;  aa.guiCanvasImageDraw(grp.han,sx,sy,sw,sh,ox,oy,ow,oh,grp5.dom);  }
 ///if(se==true)  {  grp.ctx.imageSmoothingEnabled=false;  grp.ctx.imageSmoothingQuality="low";  }
 if(cross)
  {
  mx=ox+(ow/2);
  my=oy+(oh/2);
  aa.guiCanvasLine(grp.han,mx-12,oy,mx+12,oy+oh,4,cross);
  aa.guiCanvasLine(grp.han,mx+12,oy,mx-12,oy+oh,4,cross);
  }
 grp.ctx.restore();
 return true;
 }



 function spritePaintByIndex (obj,canid,index,dx,dy,dw,dh,rot,fx,cross)
 {
 var grp,rec;
 if(obj==undefined)              { return false; }
 if(obj.type!="sprite")          { return false; }
 if(obj.is_ready!=true)          { return false; }
 grp=aa.guiGroupGet(aa.guiIdFind(canid));
 if(grp==null) { return false; }
 rec=aa.spriteRectGet(obj,index);
 if(rec==null||rec==false) { return false; }
 if(dh==0&&dw!=0) { dh=dw*rec.ratio_hw; }
 else
 if(dw==0&&dh!=0) { dw=dh*rec.ratio_wh; }
 aa.spritePaint(obj,canid,rec.x,rec.y,rec.w,rec.h,dx,dy,dw,dh,rot,fx,cross);
 return true;
 }






//-----------------------------------------------------------------------







 function ifaceObjInit ()
 {
 iface_obj.is_init=true;
 iface_obj.is_started=false;
 }




 function ifaceStart (proc)
 {
 if(iface_obj.is_started!=false) { return false; }
 iface_obj.is_started=true;
 iface_obj.blit_ms=0;
 iface_obj.blit_el=0;
 iface_obj.blit_counter=0;
 iface_obj.blit_hz=0;
 iface_obj.first_blit_ms=0;
 iface_obj.last_blit_ms=0;
 iface_obj.pseudo_blit_ms=0;
   iface_obj.is_focus_change=false;//true;//false;
   iface_obj.focus_event_last_count=-1;
   iface_obj.is_focus=false;//aa.env_obj.state.is_focus;//false;
 iface_obj.last_disp={};
 iface_obj.this_disp={};
 iface_obj.last_disp=aa.envDisplayGet();
 iface_obj.this_disp=aa.envDisplayGet();
 iface_obj.this_dsz=null;
 iface_obj.proc=proc;
 iface_obj.fingers_cache=[];
 iface_obj.fingers_down=0;
 iface_obj.fingers_dif=-1;
 iface_obj.is_disp_change=true;
 iface_obj.raf_id=0;
 if(0)
  {
  document.getElementsByTagName("html")[0].style.touchAction="none";
  document.getElementsByTagName("html")[0].style.pointerEvents="none";
  document.getElementsByTagName("body")[0].style.touchAction="none";
  document.getElementsByTagName("body")[0].style.pointerEvents="none";
  document.getElementsByTagName("html")[0].touchAction="none";
  document.getElementsByTagName("html")[0].pointerEvents="none";
  document.getElementsByTagName("body")[0].touchAction="none";
  document.getElementsByTagName("body")[0].pointerEvents="none";
  }
 iface_obj.raf_id=window.requestAnimationFrame(ifaceBlit);
/// console.log("RAF_ID="+iface_obj.raf_id);
 return true;
 }





 function ifaceStop ()
 {
 if(iface_obj.is_started!=true) { return false; }
 iface_obj.is_started=false;
 return true;
 }



 function ifaceDisplayChanged ()
 {
 if(iface_obj.is_started!=true) { return false; }
 iface_obj.is_disp_change=true;
 return true;
 }






 function ifaceDisplaySizesGet ()
 {
 var arr=[];
 if(iface_obj.is_started!=true) { aa.debugAlert(); return false; }
 arr[0]=aa.iface_obj.this_disp.win_wid;
 arr[1]=aa.iface_obj.this_disp.win_hit;
 arr[2]=aa.iface_obj.this_disp.scr_wid;
 arr[3]=aa.iface_obj.this_disp.scr_hit;

 arr[4]=window.innerWidth;
 arr[5]=document.documentElement.clientWidth;
 arr[6]=Math.abs(window.innerWidth-document.documentElement.clientWidth);

 arr[7]=window.innerHeight;
 arr[8]=document.documentElement.clientHeight;
 arr[9]=Math.abs(window.innerHeight-document.documentElement.clientHeight);


 arr[10]=aa.iface_obj.this_disp.is_landscape;
 arr[11]=aa.iface_obj.this_disp.angle;
 arr[12]=aa.iface_obj.this_disp.orient;

 arr[13]=arr[0]/arr[1]; // win wh
 arr[14]=arr[1]/arr[0]; // win hw

 arr[15]=arr[2]/arr[3]; // scr wh
 arr[16]=arr[3]/arr[2]; // scr hw

 //disp.wh_ratio=disp.win_wid/disp.win_hit;
 //disp.hw_ratio=disp.win_hit/disp.win_wid;

 return arr;
 }






 function ifaceCacheAdd (msg)
 {
 if(iface_obj.is_started!=true) {   return false; }
 iface_obj.fingers_cache.push(msg);
 iface_obj.fingers_down=iface_obj.fingers_cache.length;
 return true;
 }




 function ifaceCacheRemove (ptrid)
 {
 var i;
 if(iface_obj.is_started!=true) { return false; }
 for(i=0;i<iface_obj.fingers_cache.length;i++)
  {
  if(iface_obj.fingers_cache[i].event.pointerId==ptrid)
   {
   iface_obj.fingers_cache.splice(i,1);
   iface_obj.fingers_down=iface_obj.fingers_cache.length;
   return true;
   }
  }
 return false;
 }





 function ifaceCacheGetById (ptrid)
 {
 var i;
 if(iface_obj.is_started!=true) { return false; }
 for(i=0;i<iface_obj.fingers_cache.length;i++)
  {
  if(iface_obj.fingers_cache[i].event.pointerId==ptrid)   {   return i;   }
  }
 return false;
 }




 function ifaceCacheGetByIndex (index)
 {
 var fi,fl,fc;
 if(iface_obj.is_started!=true)           { return null; }
 if(index<0)                              { return null; }
 if(index>=iface_obj.fingers_cache.length) { return null; }
 return(iface_obj.fingers_cache[index]);
 }



 function ifaceBlit (timestamp)
 {
 var tim,e,grp,isd,el,hh;

 tim=aa.timerTikNow(true);

 if(timestamp==-1&&iface_obj.raf_id!=0) { cancelAnimationFrame(iface_obj.raf_id);  iface_obj.raf_id=0;  }



 if(iface_obj.first_blit_ms==0) { iface_obj.first_blit_ms=tim;  }
 iface_obj.last_blit_ms=tim;
 el=iface_obj.last_blit_ms-iface_obj.first_blit_ms;
 iface_obj.blit_el=el;
 iface_obj.blit_hz=(iface_obj.blit_counter/(iface_obj.blit_el/1000))>>0;

 iface_obj.this_disp=aa.envDisplayGet();
 if(iface_obj.is_disp_change==false)
  {
  if(aa.envDisplayCompare(iface_obj.this_disp,iface_obj.last_disp)!=0)
   {
   iface_obj.is_disp_change=true;
   }
  }
 if(iface_obj.focus_event_last_count!=aa.env_obj.state.focus_event_count)
  {
  iface_obj.focus_event_last_count=aa.env_obj.state.focus_event_count;
  iface_obj.is_focus_change=true;
  iface_obj.is_focus=aa.env_obj.state.is_focus;
  }
 iface_obj.this_dsz=ifaceDisplaySizesGet();
 iface_obj.proc(iface_obj);
 iface_obj.is_disp_change=false;
 iface_obj.is_focus_change=false;
 iface_obj.last_disp=iface_obj.this_disp;
 iface_obj.blit_counter++;

 //if(timestamp>0)
  {
  iface_obj.raf_id=window.requestAnimationFrame(ifaceBlit);
  }
 }








//-----------------------------------------------------------------------



 function mediaObjInit ()
 {
 var state;
 if(Object.keys(media_obj).length!=0) { return; }
 state={};
 ///state.detect_stage=0;
 ///state.detect_state="idle";
 ///state.detect_obj={};
 state.vars={};
 state.vars.stage=0;

 state.in_promise=false;
 state.promise_object=null;
 state.promise_handle=0;
 state.promise_val=null;

// state.vars.in_promise=false;
// state.vars.promise_info="";
// state.vars.promise_object=null;
// state.vars.prosync_handle=0;
// state.vars.promise_val=null;
 state.vars.is_error=false;
 media_obj.handef=handleDefine("media",64);
 media_obj.state=state;
 media_obj.is_init=true;
 }






 function mediaErrorEtc (name,msg)
 {
 var e,f,r;
 while(1)
  {
  e=0;
  if(name=="NotFoundError"||name=="DevicesNotFoundError")               {  e=1; break; } //required track is missing     }
  if(name=="NotReadableError"||name=="TrackStartError")                 {  e=2; break; } //webcam or mic are already in use     }
  if(name=="OverconstrainedError"||name=="ConstraintNotSatisfiedError") {  e=3; break; } //constraints can not be satisfied by avb. devices     }
  if(name=="NotAllowedError"||name=="PermissionDeniedError")            {  e=4; break; } //permission denied in browser     }
  if(name=="TypeError"||name=="TypeError")                              {  e=5; break; } //empty constraints object      }
  if(name=="PermissionDismissedError")                                  {  e=6; break; } //chrome only, dialog ignored
  break;
  }
 while(1)
  {
  f=0;
  if(aa.stringIndexOf(false,msg,"denied",0,false)>=0)    { f=4; break; }
  if(aa.stringIndexOf(false,msg,"dismissed",0,false)>=0) { f=6; break; }
  break;
  }
 r=(e*10)+f;
 return r;
 }






 function mediaErrObjCreate (resstr,ename,emessage,ecode)
 {
 var obj,val;
 //aa.debugLogger(0,"mediaErrObjCreate "+resstr+"  "+ename+" "+emessage+"  "+ecode);

 //console.log(ename+"/"+emessage+"/"+ecode);
 obj={};
 obj.type="errobj";
 obj.res=resstr;
 obj.name=ename;//error.name;
 obj.msg=emessage;//error.message;
 obj.code=ecode;//error.code;
 val=mediaErrorEtc(obj.name,obj.msg);
 obj.etc=val;
 obj.etc0=Math.floor(val/10);
 obj.etc1=val%10;
 return obj;
 }







//https://stackoverflow.com/questions/37848494/is-it-possible-to-control-the-camera-light-on-a-phone-via-a-website






 function mediaDeviceEnumerator ()
 {
 var obj,ray;//,supported;
 obj={};
 obj.type="mediadeviceenumerator";
 obj.guc=aa_guc++;
 obj.is_ready=false;
 obj.is_failed=false;
 obj.vid_output=false;
 obj.vid_input=false;
 obj.aud_input=false;
 obj.aud_output=false;
 obj.vid_output_list=[];
 obj.vid_input_list=[];
 obj.aud_input_list=[];
 obj.aud_output_list=[];
 ////aa.debugAlert("mediadeviceenumerator guc="+obj.guc);

 ///console.log("about to enum");
 navigator.mediaDevices.enumerateDevices()
 .then(function(devices)
  {
  devices.forEach(function(device)
   {
   //alert(device.kind+"  "+device.deviceId);
   //console.log(device.kind+"  "+device.deviceId);
   if(device.kind=="audioinput")
    {
    //alert("audio "+device.deviceId);
    ///console.log("audio "+device.deviceId);
    if(device.deviceId!="")
     {
     obj.aud_input=true;
     ray={};
     ray.deviceId=device.deviceId;
     ray.groupId=device.groupId;
     ray.kind=device.kind;
     ray.label=device.label;
     ray.clean=aa.mediaDeviceLabelClean(ray.label);
     obj.aud_input_list.push(ray);
     }
    }
   else
   if(device.kind=="audiooutput")
    {
    //alert("audio "+device.deviceId);
    ///console.log("audio "+device.deviceId);
    if(device.deviceId!="")
     {
     obj.aud_output=true;
     ray={};
     ray.deviceId=device.deviceId;
     ray.groupId=device.groupId;
     ray.kind=device.kind;
     ray.label=device.label;
     ray.clean=aa.mediaDeviceLabelClean(ray.label);
     obj.aud_output_list.push(ray);
     }
    }
   else
   if(device.kind=="videooutput")
    {
    //alert("vddio "+device.deviceId);
    ///console.log("vddio "+device.deviceId);
    if(device.deviceId!="")
     {
     obj.vid_output=true;
     ray={};
     ray.deviceId=device.deviceId;
     ray.groupId=device.groupId;
     ray.kind=device.kind;
     ray.label=device.label;
     ray.clean=aa.mediaDeviceLabelClean(ray.label);
     obj.vid_output_list.push(ray);
     }
    }
   else
   if(device.kind=="videoinput")
    {
    if(device.deviceId!="")
     {
     obj.vid_input=true;
     ray={};
     ray.deviceId=device.deviceId;
     ray.groupId=device.groupId;
     ray.kind=device.kind;
     ray.label=device.label;
     ray.clean=aa.mediaDeviceLabelClean(ray.label);
     obj.vid_input_list.push(ray);
     }
    }
   ///aa.debugAlert(obj.guc+"  "+obj.is_ready+"  "+obj.is_failed+"  "+obj.type);
   ///console.log(obj.guc+"  "+obj.is_ready+"  "+obj.is_failed+"  "+obj.type);
   });
  ////aa.debugAlert("enumerator ready "+obj.guc+"  "+obj.vid_input_list.length+"  "+obj.aud_input_list.length);
  ///console.log("enumerator ready "+obj.guc+"  "+obj.vid_input_list.length+"  "+obj.aud_input_list.length);
  obj.is_ready=true;
  })
 .catch(function(error)
  {
  aa.debugAlert("enumerator catch eer");
  obj.is_failed=true;
  });

 return obj;
 }







 function mediaDeviceLabelClean (txt)
 {
 var rt,ix,str,len,c,c0,c1,c2,ok,off,mat,matlen;
 function labelZap (str,mat,into,todo)
  {
  var matlen,off;
  while(1)
   {
   matlen=mat.length;
   off=aa.stringIndexOf(false,str,mat,0);
   if(off<0) { break;  }
   if(into>=0) { off+=into; matlen-=into; }
   if(todo>=0) { matlen=todo; }
   str=str.substring(0,off)+str.substring(off+matlen);
   }
  return str;
  }
 str=txt;
 len=str.length;
 if(1&&len>11)
  {
  c0=str[len-11];  c1=str[len-6];  c2=str[len-1];
  if(c0=="("&&c1==":"&&c2==")")
   {
   ok=true;
   for(c=(len-10);c<len-2;c++)
    {
    if(ok>='0'&&ok<='9') { continue; }
    if(ok>='a'&&ok<='f') { continue; }
    ok=false;
    break;
    }
   if(ok==true)  { str=str.substring(0,len-12);  len=str.length;   }
   }
  }
 if(1)
  {
  str=labelZap(str," - ",0,2);
  str=labelZap(str,"-");
  str=labelZap(str,"(r)");
  str=labelZap(str,"(");
  str=labelZap(str,")");
  str=labelZap(str,"High Definition ",2,3);
  str=labelZap(str,"HiDefinition ",5,7);
  str=labelZap(str,"Default ",3,4);
  str=labelZap(str," SPEAKER ",3,2);
  str=labelZap(str," SPKER ",4,1);
  str=labelZap(str,"Speaker ",2,2);
  str=labelZap(str,"Speakers ",2,2);
  str=labelZap(str,"Spker ",3,1);
  str=labelZap(str,"Spkers ",3,1);
  str=labelZap(str,"Bluetooth",1,3);
  str=labelZap(str,"Microphone ",3,7);
  str=labelZap(str,"Microphone",3,7);
  str=labelZap(str,"Communications",3,10);
  str=labelZap(str,"Camera",3,3);
  str=labelZap(str,"Webcam",0,3);
  str=labelZap(str,"HiDef ",1,1);
  str=labelZap(str,"HDef ",2,2);
  str=labelZap(str,"Virtual ",4,3);
  }
 return str;
 }





 function mediaCreate (isscreen,vconstraints,aconstraints)
 {
 var i,h,obj,sup;
 ///alert("aa.media create "+vconstraints+" "+aconstraints);
 if(media_obj.is_init!=true) {  return 0; }

 sup=(navigator.mediaDevices&&"getDisplayMedia" in navigator.mediaDevices);
 if(isscreen)  {  if(sup!=true) { return 0; }  }

 for(i=0;i<media_obj.handef.slots;i++)
  {
  obj=media_obj.handef.array[i];
  if(obj.in_use!=false) { continue; }
  h=handleUse(media_obj.handef,i)
  obj.is_attached=false;
  obj.is_canvas=false;
  obj.is_screen=isscreen;
  obj.v_contraints=vconstraints;
  obj.a_contraints=aconstraints;
  obj.img_capture=null;
  obj.pho_caps=null;
  obj.torch_available=null;
  obj.torch_state=false;
  obj.vars={};
  obj.avc={};
  obj.prom_handle=0;
  obj.prom_object=null;
  obj.prom_val=null;
  if(vconstraints) { obj.avc.video=obj.v_contraints; } // else { obj.avc.video=null; }
  if(aconstraints) { obj.avc.audio=obj.a_contraints; } //else { obj.avc.audio=null; }
  //console.log("avc");
//  console.log(obj.avc);
  obj.res=null;
  obj.e_name=null;
  obj.e_msg=null;
  obj.e_etc0=0;
  obj.e_etc1=0;
  obj.stream=null;
  obj.a_stream=null;
  obj.v_stream=null;
  obj.a_settings=null;
  obj.v_settings=null;
  obj.attached_handle=0;
  obj.output_media_stream=null;
  obj.output_tracks=[];
  obj.stage=100;
  obj.prom=null;
  ///console.log("mediaCreate() index "+i+"  "+aa.timerMsRunning());
  return h;
  }
 return 0;
 }








 function mediaDestroy (handle)
 {
 var obj;
 if((obj=handleCheck(media_obj.handef,handle))==null) { return false; }
 if(obj.is_attached==true)  {  aa.mediaAttach(handle,null);  }
 if(obj.pho_caps)     {  obj.pho_caps=null;    }
 if(obj.img_capture)  {  obj.img_capture=null; }
 handleRemove(media_obj.handef,handle);
 return true;
 }







 function mediaGet (handle)
 {
 var obj;
 obj=handleCheck(media_obj.handef,handle);
 ///console.log(obj);
 //if(obj!=null) console.log(obj);
 return(obj);
 }










 function mediaAttach (handle,dhandle)
 {
 var obj,dobj,isplaying,stream,tracks;
 if((obj=handleCheck(media_obj.handef,handle))==null) { return false; }
 ///aa.debugLogger(70,"media attach  "+obj.is_attached+"  "+handle+" "+dhandle+"  "+aa.timerMsRunning());

 ///console.log("attach ",handle,dhandle,obj.is_attached);
 //if(obj.is_attached)  {  aa.debugAlert("already attached to media");  }
 if(dhandle!=null)
  {
  if((dobj=aa.guiGet(dhandle))==null)          { return false; }
  //console.log("===== mediaattach() type "+dobj.type+" id="+dobj.id);
  if(dobj.type=="video")
   {
   if(0)  {  dobj.dom.setAttribute('autoplay', '');  dobj.dom.setAttribute('muted', '');   dobj.dom.setAttribute('playsinline', '');    }
   obj.is_attached=true;
   obj.is_canvas=false;
   obj.attached_handle=dhandle;
   dobj.dom.srcObject=obj.output_media_stream;
   dobj.frame_number=0;
   dobj.prev_time=-1;
   dobj.dom.defaultMuted=true;
   dobj.dom.volume=0;
   dobj.dom.muted=true;
   isplaying=dobj.dom.currentTime>0&&!dobj.dom.paused&&!dobj.dom.ended&&dobj.dom.readyState>2;
   //dobj.dom.play();
   //aa.debugAlert();
   if(dobj.prom!=null) { alert("DOBJ mediaAttach prom not null"); }
   if(0) { console.log("mediaAttach about to PLAY!!!!!!!!!!"); }
   dobj.prom=dobj.dom.play();
   if(dobj.prom!==undefined)
    {
    dobj.prom.then(()=>
     {
     if(0) { console.log("DOBJ mediaAttach PLAY ok!!!!!!!!!!!!!!!"); }
     dobj.prom=null;
     })
    .catch(error=>
     {
     if(1) { console.log("DOBJ mediaAttach PLAY err!!!!!!!!!!!!!!",error); }
     dobj.prom=null;
     });
    }
   }
  else
   {
   aa.debugAlert("trying to attach type "+dobj.type);
   }
  }
 else
  {
  if(obj.is_attached!=true) { return false; }
  if((dobj=aa.guiGet(obj.attached_handle))==null)  { aa.debugLogger(5,"cant find attached handle"); }
  if(0) {  dobj.dom.setAttribute('autoplay', ''); dobj.dom.setAttribute('muted', ''); dobj.dom.setAttribute('playsinline', '');   }
  stream=dobj.dom.srcObject;
  tracks=obj.output_media_stream.getTracks();
  tracks.forEach(function(track) { track.stop();  });
  dobj.dom.defaultMuted=true;
  dobj.dom.volume=0;
  dobj.dom.muted=true;
  dobj.dom.srcObject=null;
  dobj.frame_number=0;
  dobj.prev_time=-1;
  dobj.prom=null;
  obj.is_attached=false;
  obj.is_canvas=false;
  obj.attached_handle=0;
  }
 return true;
 }





 function mediaTorchSet (handle,state)
 {
 var obj,trk;
 if((obj=handleCheck(media_obj.handef,handle))==null) { return false; }
 if(obj.torch_available!=true) { return false; }

 trk=obj.output_media_stream.getVideoTracks()[0];
 alert(trk);
 if(state)
  {
  trk.applyConstraints({advanced: [{torch: true}]})
  //obj.v_stream.applyConstraints({advanced: [{torch: true}]})
  .then(()=>{  obj.torch_state=true;   })
  .catch(e=>{  alert(e);   });
  }
 else
  {
  if(obj.torch_state!=true) { return false; }
  obj.v_stream.applyConstraints({advanced: [{torch: false}]})
  .then(()=>{ obj.torch_state=false;   })
  .catch(e=>{ alert(e);   });
  }
 return true;
 }






 function mediaStatus (handle)
 {
 var obj,trk,avc,asettings,status,prom,val;
 if((obj=handleCheck(media_obj.handef,handle))==null) { return false; }
 switch(obj.stage)
  {
  case 100: // creating
  if(obj.prom!=null) { aa.debugAlert(obj.stage+" ms op !=null"); }
  if(obj.is_screen)   {   obj.stage=150;   break;   }
  obj.prom=navigator.mediaDevices.getUserMedia(obj.avc)
  .then(function(stream)
   {
   obj.res="ok";
   obj.stream=stream;
   obj.a_stream=stream.getAudioTracks()[0];
   obj.v_stream=stream.getVideoTracks()[0];
   obj.prom=null;
   })
  .catch(function(error)
   {
   console.log("xerr "+error);
   obj.res="err";
   obj.e_constraint=error.constraint;
   obj.e_name=error.name;
   obj.e_msg=error.message;
   obj.e_code=error.code;
   val=mediaErrorEtc(obj.e_name,obj.e_msg);
   obj.e_etc0=Math.floor(val/10);
   obj.e_etc1=val%10;
   obj.prom=null;
   ///console.log("aa.stg="+aa.main_state.stage+" prom err"+obj.e_constraint+" "+obj.e_name+" "+obj.e_msg+" "+obj.e_code);
   })
  .finally(()=>
   {
   obj.prom=null;
   });
  obj.stage=200;
  break;





  case 150: // create screen share
  if(obj.prom!=null) { aa.debugAlert(obj.stage+" ms op !=null"); }
  obj.prom=navigator.mediaDevices.getDisplayMedia(obj.avc)
  .then(function(stream)
   {
   ///console.log("aa mediaStatus() stage="+obj.stage+"  gum ok "+aa.timerMsRunning());
   obj.res="ok";
   obj.stream=stream;
   obj.a_stream=stream.getAudioTracks()[0];
   obj.v_stream=stream.getVideoTracks()[0];
   obj.prom=null;
   })
  .catch(function(error)
   {
   obj.res="err";
   obj.e_constraint=error.constraint;
   obj.e_name=error.name;
   obj.e_msg=error.message;
   obj.e_code=error.code;
   val=mediaErrorEtc(obj.e_name,obj.e_msg);
   obj.e_etc0=Math.floor(val/10);
   obj.e_etc1=val%10;
   obj.prom=null;
   })
  .finally(()=>
   {
   obj.prom=null;
   });
  obj.stage=200;
  break;




  case 200:
  if(obj.res==null)  { break; }
  if(obj.res=="err") { return false; }
  if(obj.v_contraints)   {   obj.output_tracks=obj.output_tracks.concat(obj.v_stream);   }
  if(obj.a_contraints)   {   obj.output_tracks=obj.output_tracks.concat(obj.a_stream);   }
  if(typeof MediaStream!=='undefined')
   {
   //console.log(arguments.callee.name,"adding tracks");
   obj.output_media_stream=new MediaStream(obj.output_tracks);
   obj.stream.getTracks().forEach(function(track)    {    obj.output_media_stream.addTrack(track);    });
   ///console.log("200 output_media_stream A");
   }
  else
   {
   //console.log(arguments.callee.name,"direct tracks");
   console.log("200 output_media_stream B");
   obj.output_media_stream=obj.stream;
   }
  if(obj.avc.audio!=undefined) {   obj.a_settings=obj.a_stream.getSettings(); }
  if(obj.avc.video!=undefined) {   obj.v_settings=obj.v_stream.getSettings(); }
  obj.torch_available=false;
  //console.log("aa mediaStatus() stage="+obj.stage+"  checking torch "+aa.timerMsRunning());
  //alert("ssew 200");

  if(obj.prom!=null) { aa.debugAlert(obj.stage+" ms op !=null"); }


  /*
  if('ImageCapture' in window)
   {
   trk=obj.output_media_stream.getVideoTracks()[0];
   obj.img_capture=new ImageCapture(trk);
   obj.pho_caps=obj.img_capture.getPhotoCapabilities().then(()=>
    {
    obj.v_stream.applyConstraints({advanced: [{torch: false}]})
    .then(()=>
     {
     obj.torch_state=false;    obj.torch_available=true;
     obj.prom=null;
     })
    .catch(e=> { obj.prom=null; });
    }).
   catch(()=>{ });
   }
  */

  obj.stage=300;
  break;

  case 300:
  return true;
  }
 return false;
 }




 function mediaAudioMuteSet (handle,state)
 {
 var obj;
 aa.debugAlert();
 if((obj=handleCheck(media_obj.handef,handle))==null) { return false; }
 if(obj.is_attached!=true) { return false; }
 if(state) {    obj.output_media_stream.getAudioTracks()[0].enabled=false; }
 else      {    obj.output_media_stream.getAudioTracks()[0].enabled=true; }
 return true;
 }


 function mediaAudioMuteGet (handle)
 {
 var obj,state;
 aa.debugAlert();
 if((obj=handleCheck(media_obj.handef,handle))==null) { return null; }
 if(obj.is_attached!=true) { return null; }
 state=obj.output_media_stream.getAudioTracks()[0].enabled;
 if(state) { return false; }
 return true;
 }





 function mediaSdpFix (sdp)
 {
 var lines,newlines,curline,li,off,stage,ostage,parts,pi,val,which,temp,codes,c;
 temp="";
 lines=sdp.split("\r\n");
 newlines="";
 stage=0;
 ostage=0;
 li=0;
 while(1)
  {
  if(li>=(lines.length)) { break; }
  ostage=stage;
  switch(stage)
   {
   case 0:
   if(aa.stringIndexOf(true,lines[li],"m=")===0) {  stage=100; break; }
   newlines+=lines[li]+"\r\n";
   li++;
   break;

   case 100:
   if(aa.stringIndexOf(true,lines[li],"m=application")===0) {  stage=200; break; }
   if(aa.stringIndexOf(true,lines[li],"m=audio")===0)       {  stage=400; break; }
   if(aa.stringIndexOf(true,lines[li],"m=video")===0)       {  stage=600; break; }
   li++;
   stage=0;
   break;

   case 200:
   newlines+=lines[li]+"\r\n";
   li++;
   stage=220;
   break;

   case 220:
   if(aa.stringIndexOf(true,lines[li],"m=")===0) {  stage=100; break; }
   newlines+=lines[li]+"\r\n";
   li++;
   break;

   case 400:
   newlines+=lines[li]+"\r\n";
   li++;
   stage=420;
   break;

   case 420:
   if(aa.stringIndexOf(true,lines[li],"m=")===0) {  stage=100; break; }
   newlines+=lines[li]+"\r\n";
   li++;
   break;

   case 600:
   curline="";
   codes=[];
   parts=lines[li].split(" ");
   for(pi=0;pi<parts.length;pi++)
    {
    if(pi<3) { curline+=parts[pi]+" "; continue; }
    val=parseInt(parts[pi]);
    if(val==96||val==97) { continue; }
    codes.push(val);
    }
   curline+="96 97 ";
   for(c=0;c<codes.length;c++)
    {
    val=codes[c];
    curline+=val+" ";
    }
   curline=aa.stringLastCharTrim(curline);
   newlines+=curline+"\r\n";
   li++;
   stage=620;
   break;

   case 620:
   if(aa.stringIndexOf(true,lines[li],"m=")===0) {  stage=100; break; }
   newlines+=lines[li]+"\r\n";
   li++;
   break;
   }
  }
 newlines=aa.stringLastCharTrim(newlines);
 newlines=aa.stringLastCharTrim(newlines);
 return newlines;
 }






 function mediaSdpBitRateSet (sdp,media,bitrate)
 {
 var line,lines,i,newLines;

 lines=sdp.split("\r\n");
 line=-1;
 for(i=0;i<lines.length;i++)
  {
  if(lines[i].indexOf("m="+media)===0) {  line=i;   break;   }
  }
 if(line===-1)  { return sdp;  }
 line++;
 while(lines[line].indexOf("i=")===0||lines[line].indexOf("c=")===0) { line++;  }
 if(lines[line].indexOf("b")===0)
  {
  lines[line]="b=AS:"+bitrate;
  return lines.join("\r\n");
  }
 newLines=lines.slice(0, line)
 newLines.push("b=AS:"+bitrate);
 newLines=newLines.concat(lines.slice(line, lines.length))
 return newLines.join("\r\n")
 }




 function mediaSdpManipulate (sdp,fix,arate,vrate)
 {
// aa.debugAlert();
 if(fix===true)  {  sdp=mediaSdpFix(sdp); }
 if(arate>0)     {  sdp=mediaSdpBitRateSet(sdp,"audio",arate); }
 if(vrate>0)     {  sdp=mediaSdpBitRateSet(sdp,"video",vrate); }
 return sdp;
 }




//-----------------------------------------------------------------------




 function recorderObjInit ()
 {
 var state;
 if(Object.keys(recorder_obj).length!=0) { return; }
 state={};
 state.vars={};
 state.vars.stage=0;
 recorder_obj.handef=handleDefine("recorder",64);
 recorder_obj.state=state;
 recorder_obj.is_init=true;
 }








 function recorderCreate ()
 {
 var i,h,obj;
 if(recorder_obj.is_init!=true) {  return 0; }
 for(i=0;i<recorder_obj.handef.slots;i++)
  {
  obj=recorder_obj.handef.array[i];
  if(obj.in_use!=false) { continue; }
  h=handleUse(recorder_obj.handef,i)
  obj.vars={};
  obj.is_recording=false;  //
  obj.is_stopping=false;   //
  obj.is_stop=false;       //
  obj.is_start=false;      //
  obj.is_error=false;      //
  obj.is_stop_called=false;  //
  obj.is_paused=false;
  obj.stream=null; //
  obj.chunk_bytes=4096;  //
  obj.total_blobs_recorded=0; //
  obj.total_bytes_recorded=0; //
  obj.rem_file_bytes=0;       //
  obj.queue_handle=aa.queueCreate();
  obj.queue_status=aa.queueStatus(obj.queue_handle);
  obj.reader=null;   //
  obj.vim=null;      //
  obj.blobs=[];      //
  obj.cur_blob=null; //
  obj.view=null;     //
  obj.voff=0;        //
  obj.vlen=0;        //
  obj.vrem=0;        //
  obj.ms=0;          //
  obj.elapsed=0;    //
  obj.bobo=[];
  obj.mr={};        //
  obj.stage=100;
  return h;
  }
 return 0;
 }





 function recorderDestroy (handle)
 {
 var obj;
 if((obj=handleCheck(recorder_obj.handef,handle))==null) { return false; }
 if(obj.queue_handle!=0)
  {
  aa.queueDestroy(obj.queue_handle);
  obj.queue_handle=0;
  }
 if(obj.is_stop)
  {
  obj.mr=null;
  }
 obj.cur_blob=null;
 obj.blobs=[];
 obj.reader.arr=null;
 obj.reader.arr8=null;
 obj.reader=null;
 obj.vim=null;
 obj.bobo=[];
 handleRemove(recorder_obj.handef,handle);
 return true;
 }




 function recorderGet (handle)
 {
 var obj;
 obj=handleCheck(recorder_obj.handef,handle);
 return(obj);
 }







 function recorderStart (handle,stream,chunkbytes)
 {
 var obj,options;
 if((obj=handleCheck(recorder_obj.handef,handle))==null) { return false; }
 if(obj.is_recording==true) { alert("already recording"); return false; }

 //options={audioBitsPerSecond:arate,videoBitsPerSecond:vrate};
 ///option={};//mimeType:'video/mp4'};
  ///option={mimeType:"video/mp4"};
 ///options={mimeType:"video/mp4"};
 options={};

 obj.stream=stream;
 obj.is_recording=true;
 obj.mr=new MediaRecorder(obj.stream,options);
 obj.is_stopping=false;
 obj.is_stop=false;
 obj.is_start=false;
 obj.is_error=false;
 obj.is_stop_called=false;
 obj.is_paused=false;
 obj.chunk_bytes=chunkbytes;

 obj.blobs=[];
 obj.cur_blob=null;
 obj.reader=null;
 obj.total_blobs_recorded=0;
 obj.total_bytes_recorded=0;
 obj.rem_file_bytes=0;
 obj.view=null;
 obj.voff=0;
 obj.vlen=0;
 obj.vrem=0;
 obj.vim=null;
 obj.elapsed=0;
 obj.bobo=[];
 obj.ms=aa.timerMsRunning();

 obj.mr.onstop=(event)=>
  {
  console.log("recorder stop");
  obj.is_stop=true;
  };

 obj.mr.onstart=function(e)
  {
  //console.log("recorder started "+obj.mr.state);
  if(obj.mr.start!="inactive") {   obj.mr.requestData(); }
  obj.is_start=true;
  };

 obj.mr.onerror=function(e)
  {
  console.log("recorder error");
  obj.is_error=true;
  };

 obj.mr.ondataavailable=function(event)
  {
  if(event.data&&event.data.size>0)
   {
   //rec.mimeType
   obj.bobo.push(event.data);
   recorderDataToBlobEngine(event,handle);  ///==================================================
   }
  };

 obj.mr.start(500);//1000);
 return true;
 }







 function recorderDataToBlobEngine     (event,handle)
 {
 var entry,recer,len,off,ed,left,todo,br,sz,obj,be;
 if((obj=handleCheck(recorder_obj.handef,handle))==null) { aa.debugAlert(); return false; }
 if(obj.is_recording!=true)            { console.log("badda"); return false; }
 if(obj.is_stop_called==true)          { console.log("baddb"); return false; }
  len=event.data.size;
  sz=len;
  off=0;
  be=0;
  while(1)
   {
   left=len-off;
   if(left==0)              { break; }
   if(left<sz)              { todo=left; }
   else                     { todo=sz;   }

   if(todo>obj.chunk_bytes) { todo=obj.chunk_bytes; }
   ed=event.data.slice(off,(off+todo)-0);
   obj.blobs.push(ed);
   off+=todo;
   obj.total_bytes_recorded+=todo;
   obj.total_blobs_recorded++;
   be++;
   }
 return true;
 }











 function recorderStop (handle)
 {
 var obj;
 if((obj=handleCheck(recorder_obj.handef,handle))==null) { return false; }
 if(obj.is_recording!=true) { alert("not recording"); return false; }
 if(obj.is_stopping==true) { alert("already stopping"); return false; }
 obj.is_stopping=true;
 obj.mr.stop();
 //console.log("obj.mr.stop called");
 return true;
 }




 function recorderPause (handle,state)
 {
 var obj;
 if((obj=handleCheck(recorder_obj.handef,handle))==null) { return false; }
 if(obj.is_recording!=true) { alert("not recording"); return false; }
 if(obj.is_stopping==true) { alert("already stopping"); return false; }
 //console.log("PAUSE");
 if(state)
  {
  if(obj.is_paused==true) { return true; }
  obj.mr.pause();
  obj.is_paused=true;
  }
 else
  {
  if(obj.is_paused==false) { return true; }
  obj.mr.resume();
  obj.is_paused=false;
  }
 if(obj.mr.state!="inactive")  {  }
 return true;
 }





 function recorderSwap (handle)
 {
 var obj,tracks;
 if((obj=handleCheck(recorder_obj.handef,handle))==null) { return false; }
 tracks=obj.stream.getVideoTracks();
 console.log(tracks);
 return true;
 }




 function recorderStatus (handle)
 {
 var obj;
 if((obj=handleCheck(recorder_obj.handef,handle))==null) { return false; }
 if(obj.is_recording!=true)  {  return false;  }
 if(obj.mr.state!="inactive")
  {
  obj.mr.requestData();
  }
 if(obj.is_stopping==true)
  {
  if(obj.is_stop!=true) { return false; }
  while(1)
   {
   if(obj.blobs.length==0) { break; }
   recorderBlobToQueueEngine(handle);       ///_________________________________________________
   }
  return true;
  }
 if(obj.is_stop!=true)
  {
  recorderBlobToQueueEngine(handle);       ///_________________________________________________
  obj.elapsed=aa.timerMsRunning()-obj.ms;
  }
 return true;
 }




 function recorderRead (handle)
 {
 var obj,rt;
 if((obj=handleCheck(recorder_obj.handef,handle))==null) { console.log("erra"); return false; }
 obj.queue_status=aa.queueStatus(obj.queue_handle);
 rt=aa.queueRead(obj.queue_handle);
 if(rt==false||rt==null) { return false; }
 obj.queue_status=aa.queueStatus(obj.queue_handle);
 return rt;
 }







 function recorderBlobToQueueEngine (handle)
 {
 var obj,han,rob,cmd,str,arr8,todo;
 if((obj=handleCheck(recorder_obj.handef,handle))==null) { return false; }
 if(obj.is_recording!=true) { return false;  }
 if(obj.blobs.length==0)    { return false; }
 if(0&&obj.cur_blob!=null)  { return false; }
 if(obj.is_error!=false)    { return false; }

 obj.cur_blob=obj.blobs.shift();
 obj.reader=new FileReader();
 obj.reader.ci=handle;
 obj.reader.sz=obj.cur_blob.size;

 obj.reader.onload=function(e) // all read succfessully
  {
  if(obj.is_stop==false)
   {
   han=obj.reader.ci;
   if((rob=handleCheck(recorder_obj.handef,han))==null) { aa.debugAlert(); }
   obj.reader.ara=obj.reader.result;
   obj.reader.arr8=new Uint8Array(obj.reader.ara);
   todo=obj.reader.arr8.length;
   rob.vim=obj.reader.arr8.subarray(0,todo);
   if(aa.queueWrite(obj.queue_handle,obj.vim)!=true) { aa.debugAlert();  }
   obj.queue_status=aa.queueStatus(obj.queue_handle);
   obj.reader.arr8=obj.reader.arr8.slice(todo);
   if(obj.reader.arr8.length==0)   {   obj.reader.arr8=obj.reader.arr8.subarray(0,0);   }
   obj.reader.is_load=true;
   obj.reader.sz=0;
   }
  return true;
  };

 obj.reader.onerror=function(e)
  {
  han=obj.reader.ci;
  console.log("oneerror");
  if((rob=handleCheck(recorder_obj.handef,han))==null) { aa.debugAlert(); }
  rob.is_error=true;
  return true;
  };

 obj.reader.onloadend=function(e)
  {
  obj.vim=null;
  if(obj.reader!=null)
   {
   if(obj.reader.arr!=null)  { obj.reader.arr=null;  }
   if(obj.reader.arr8!=null) { obj.reader.arr8=null; }
   }
  obj.cur_blob=null;
  obj.reader=null;
  return true;
  };

 obj.reader.readAsArrayBuffer(obj.cur_blob);

 return true;
 }


//-----------------------------------------------------------------------



 function videoObjInit ()
 {
 if(Object.keys(video_obj).length!=0) { return; }
 video_obj.is_init=true;
 }




 function videoLoadEvent (event)
 {
 var han,grp;

 //console.log(event);
 switch(event.type)
  {
  default:
  break;

  case "loadedmetadata":
  if((han=aa.guiIdFind(event.target.id))==0)  { aa.debugAlert(); }
  //console.log(event);
  grp=aa.guiGroupGet(han);
  //console.log(grp.dom.videoWidth+"  "+grp.dom.videoHeight);
  grp.vars.is_meta=true;
  grp.vars.can_play=true;
  break;

  case "ended":
  if((han=aa.guiIdFind(event.target.id))==0) { aa.debugAlert(); }
  grp=aa.guiGroupGet(han);
  break;

  case "canplay":
  break;

  case "progress":
  //if((han=aa.guiIdFind(event.target.id))==0) { aa.debugAlert(); }
  //grp=aa.guiGroupGet(han);
  //console.log("progress "+event.timeStamp+"  "+grp.dom.currentTime);
  break;

  case "loadstart":
  break;

  case "canplaythrough":
  if((han=aa.guiIdFind(event.target.id))==0) { aa.debugAlert(); }
  grp=aa.guiGroupGet(han);
  grp.vars.can_play=true;
  grp.vars.can_play_through=true;
  if(grp.vars.is_ended==true)   {   grp.vars.is_ended=false;   }
  break;

  case "error":
  if((han=aa.guiIdFind(event.target.id))==0) { aa.debugAlert(); }
  grp=aa.guiGroupGet(han);
  grp.vars.is_failed=true;
  break;
  }

 if((han=aa.guiIdFind(event.target.id))>0)
  {
  if((grp=aa.guiGroupGet(han))!=null) { grp.vars.last_event=event.type;   }
  }
 return true;
 }





 function videoLoad (handle,isurl,url)
 {
 var grp;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
/// console.log("grp="+grp.han);
 grp.vars.can_play=false;
 grp.vars.can_play_through=false;
 grp.vars.is_meta=false;
 grp.vars.is_failed=false;
 grp.vars.is_ended=false;
 grp.vars.is_playing=false;
 grp.vars.is_paused=false;
 grp.vars.is_url=isurl;
 grp.vars.last_event="";
 if(grp.vars.is_url==true)  {  grp.vars.blo=null;  grp.vars.url=url;   }
 else                       {  grp.vars.blo=url;   grp.vars.url=null;  }
 grp.vars.udata=0;
 grp.vars.vdata=0;
 grp.vars.frame_number=0;
 grp.vars.prev_time=-1;
 grp.dom.load();
 if(grp.vars.is_url==true)  {  grp.dom.src=grp.vars.url;  }
 else                       {  grp.dom.src=URL.createObjectURL(grp.vars.blo);  }
 grp.dom.loop=false;
 grp.dom.setAttribute('playsinline','playsinline');
 grp.dom.setAttribute('webkit-playsinline','webkit-playsinline');
 grp.dom.setAttribute('autoplay','');
 grp.dom.autoplay=false;
 //grp.dom.controls=true;
 grp.dom.controls=false;
 if(1) { grp.dom.defaultMuted=false; grp.dom.muted=false;  grp.dom.volume=0.5; }
 else  { grp.dom.defaultMuted=true;  grp.dom.muted=true;   grp.dom.volume=0.0; }
 grp.dom.defaultPlaybackRate=1.0;
 grp.dom.playbackRate=1.0;
 grp.dom.addEventListener('loadedmetadata',videoLoadEvent);
 grp.dom.addEventListener('loadstart',videoLoadEvent);
 grp.dom.addEventListener('progress',videoLoadEvent);
 grp.dom.addEventListener('canplay',videoLoadEvent);
 grp.dom.addEventListener('canplaythrough',videoLoadEvent);
 grp.dom.addEventListener('ended',videoLoadEvent);
 grp.dom.addEventListener('error',videoLoadEvent);
 //pork grp.dom.style.touchAction="auto";
 //pork grp.dom.style.pointerEvents="auto";
 grp.dom.disablePictureInPicture=true;
 grp.dom.setAttribute("controlsList","nofullscreen nodownload noplaybackrate");
 videoMuteSet(handle,true);
 return true;
 }






 function videoFree (handle)
 {
 var grp;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 grp.dom.src="";
 grp.dom.removeEventListener('loadstart',videoLoadEvent);
 grp.dom.removeEventListener('progress',videoLoadEvent);
 grp.dom.removeEventListener('canplay',videoLoadEvent);
 grp.dom.removeEventListener('canplaythrough',videoLoadEvent);
 grp.dom.removeEventListener('ended',videoLoadEvent);
 grp.dom.removeEventListener('error',videoLoadEvent);
 delete grp.vars.can_play;
 delete grp.vars.can_play_through;
 delete grp.vars.is_failed;
 delete grp.vars.is_ended;
 delete grp.vars.is_playing;
 delete grp.vars.is_paused;
 delete grp.vars.url;
 delete grp.vars.last_event;
 return true;
 }




 function videoControlsSet (handle,state)
 {
 var grp;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 grp.dom.controls=false;
 if(state)
  {
  grp.dom.disablePictureInPicture=true;
  grp.dom.setAttribute("controlsList","nofullscreen nodownload noplaybackrate");
  grp.dom.controls=true;
  }
 return true;
 }






 function videoStatus (handle)
 {
 var status,grp,cc,vl,bi,str;
 if((grp=aa.guiGroupGet(handle))==null) { return null; }
 grp.vars.is_playing=grp.dom.currentTime>0&&!grp.dom.paused&&grp.dom.readyState>2;
 status={};
 status.ready_state=grp.dom.readyState;
 status.can_play=grp.vars.can_play;
 status.can_play_through=grp.vars.can_play_through;
 status.is_meta=grp.vars.is_meta;
 status.is_failed=grp.vars.is_failed;
 status.is_ended=grp.vars.is_ended;
 status.is_playing=grp.vars.is_playing;
 status.is_paused=grp.vars.is_paused;
 status.last_event=grp.vars.last_event;
 status.current_time=grp.dom.currentTime;
 status.duration=grp.dom.duration;
 status.play_rate=grp.dom.playbackRate;
 return status;
 }







 function videoStatusString (handle,status)
 {
 var str,sts;
 str="";
 if(status===undefined||status==null)
  {
  sts=aa.videoStatus(handle);
  if(sts==null) { return str; }
  str+=sts.ready_state+" ";
  str+=sts.cam_play+" ";
  str+=sts.cam_play_through+" ";
  str+=sts.is_meta+" ";
  str+=sts.is_failed+" ";
  str+=sts.is_ended+" ";
  str+=sts.is_playing+" ";
  str+=sts.is_paused+" ";
  str+=sts.last_event+" ";
  str+=aa.numRoundPlaces(sts.current_time,1)+" ";
  str+=aa.numRoundPlaces(sts.duration,1)+" ";
  str+=aa.numRoundPlaces(sts.play_rate,1);
  aa.debugAlert();
  }
 else
  {
  str+="rs="+status.ready_state+" ";
  str+="cp="+status.can_play+" ";
  str+="cpt="+status.can_play_through+" ";
  str+="mt="+status.is_meta+" ";
  str+="if="+status.is_failed+" ";
  str+="ie="+status.is_ended+" ";
  str+="il="+status.is_playing+" ";
  str+="ip="+status.is_paused+" ";
  str+=status.last_event+" ";
  str+=aa.numRoundPlaces(status.current_time,1)+" ";
  str+=aa.numRoundPlaces(status.duration,1)+" ";
  str+=aa.numRoundPlaces(status.play_rate,1);
  }
 return str;
 }






 function videoChange (handle,blob)
 {
 var grp;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 videoPause(grp.han);
 grp.dom.src=URL.createObjectURL(blob);
 grp.dom.load();
 grp.vars.frame_number=0;
 grp.vars.prev_time=-1;
 grp.dom.currentTime=0;
 return true;
 }




 function videoPause (handle)
 {
 var grp;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 grp.dom.pause();
 grp.vars.is_paused=true;
 return true;
 }






 function videoPlay (handle)
 {
 var grp,prom;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }

 grp.dom.loop=false;
  //grp.dom.loop=true;
 grp.dom.muted=false;

 prom=grp.dom.play();
 if(prom!==undefined)
  {
  prom.then(()=>
   {
   grp.vars.last_event="";
   grp.vars.is_paused=false;
   })
  .catch(error=>
   {
   grp.vars.last_event="";
   grp.dom.muted=true;
   grp.dom.play();
   });
  }
 //grp.dom.play()
 //.then(()=>{ grp.vars.is_paused=false;  })
 //.catch(function(error)  {  aa.debugAlert(error);  });
 return true;
 }







 function videoMuteSet (handle,state)
 {
 var grp;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 if(state) { grp.dom.defaultMuted=true;  grp.dom.muted=true;   grp.dom.volume=0.0; }
 else      { grp.dom.defaultMuted=false; grp.dom.muted=false;  grp.dom.volume=0.9; }
 return true;
 }






 function videoSeekSet (handle,secs)
 {
 var grp;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 grp.dom.currentTime=secs;
 return true;
 }






 function videoRateSet (handle,rate)
 {
 var grp;
 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 grp.dom.playbackRate=rate;
 return true;
 }





//-----------------------------------------------------------------------





 function socketObjInit ()
 {
 if(Object.keys(socket_obj).length!=0) { return; }
 socket_obj.handef=handleDefine("socket",64);
 socket_obj.is_init=true;
 }




 function socketCreate (url)
 {
 var i,h,obj;
 for(i=0;i<socket_obj.handef.slots;i++)
  {
  obj=socket_obj.handef.array[i];
  if(obj.in_use!=false) { continue; }
  h=handleUse(socket_obj.handef,i)
  obj.stage=0;
  obj.ms_start=aa.timerMsRunning();
  obj.ms_idle=obj.ms_start;
  obj.url=url;
  obj.is_open=false;
  obj.is_closed=false;
  obj.is_error=false;
  obj.is_direct=false;//true;//false;//true;//true;//false;//true;
  obj.code=0;
  obj.rcve_queue_handle=aa.queueCreate();
  aa.handleCommentSet(obj.rcve_queue_handle,"socket rcve_queue");
  obj.xmit_queue_handle=aa.queueCreate();
  aa.handleCommentSet(obj.xmit_queue_handle,"socket xmit_queue");
  obj.cycle_of_timer=0;
  obj.last_timer_ms=0;
  obj.buffered=0;
  obj.buffered_threshold=250000;
  obj.vars={};
  obj.socket=new WebSocket(obj.url);
  obj.socket.binaryType='arraybuffer';
  //obj.socket.binaryType='blob';
  obj.socket.onopen=function(event)
   {
   obj.is_open=true;
   };
  obj.socket.onclose=function(event)
   {
   obj.is_closed=true;
   obj.code=event.code;
   };
  obj.socket.onerror=function(event)
   {
   obj.is_error=true;
   obj.code=event.code;
   };
  obj.socket.onmessage=function(data)
   {
   obj.ms_idle=aa.timerMsRunning();
   queueWrite(obj.rcve_queue_handle,data.data);
   };
  return h;
  }
 return 0;
 }







 function socketDestroy (handle)
 {
 var obj;
 if((obj=handleCheck(socket_obj.handef,handle))==null) { return false; }
 if(obj.xmit_queue_handle!=0)  {  queueDestroy(obj.xmit_queue_handle);  obj.xmit_queue_handle=0;  }
 if(obj.rcve_queue_handle!=0)  {  queueDestroy(obj.rcve_queue_handle);  obj.rcve_queue_handle=0;  }
 obj.socket.onclose=function() {};
 obj.socket.close();
 obj.socket=null;
 obj.vars=null;
 handleRemove(socket_obj.handef,handle);
 return true;
 }




 function socketGet (handle)
 {
 return(handleCheck(socket_obj.handef,handle));
 }




 function socketWrite (handle,msg)
 {
 var obj;
 if((obj=socketGet(handle))==null) {  return false; }
 ///console.log(obj.is_direct);//console.log(arguments.callee.name+"  "+aa.main_obj.state.cycle);
 if(obj.is_direct==true&&obj.is_open==true)
  {
  obj.socket.send(msg,{binary:true});
  }
 else
  {
  //console.log("socketWrite is NOT direct");
  if(aa.queueWrite(obj.xmit_queue_handle,msg)!=true) { return false; }
  socketProcess(handle);
  }
 return true;
 }




 function socketPeek (handle,ofs)
 {
 var obj,msg;
 if((obj=socketGet(handle))==null) { return null; }
 msg=queuePeek(obj.rcve_queue_handle,ofs);
 return msg;
 }





 function socketRead (handle)
 {
 var obj,msg,prs,str,ser;
 if((obj=socketGet(handle))==null) { return null; }
 msg=queueRead(obj.rcve_queue_handle);
 return msg;
 }



 function socketDiscard (handle)
 {
 var obj;
 if((obj=socketGet(handle))==null) { return null; }
 return(queueDiscard(obj.rcve_queue_handle));
 }



 function socketProcess (handle)
 {
 var obj,info,msg,go;
 if((obj=socketGet(handle))==null) { return false; }
 go=0;
 while(1)
  {
  //go++;
  if(obj.is_direct==true)   {   if((go++)>=4) { break; }   }
  else                      {   if((go++)>=8) { break; }   }
  info=socketStatus(handle);
  if(info.xmit_queue_status.msgs_queued==0)     { break; }
  if(info.is_open!=true||info.is_closed!=false) { break; }
  msg=queueRead(obj.xmit_queue_handle);
  obj.socket.send(msg,{binary:true});
  info=socketStatus(handle);
  if(info.buffered>obj.buffered_threshold) { console.log("info.buffered",info.buffered); break; }
  }
 if(go>=4)
  {
  //console.log("socket process go = "+go);
  alert("socket process go = "+go+"  "+obj.is_direct+"  "+info.xmit_queue_status.msgs_queued+"  "+info.rcve_queue_status.msgs_queued);
  }
 return true;
 }





 function socketStatus (handle)
 {
 var obj,info;
 if((obj=socketGet(handle))==null) { return null; }
 obj.buffered=obj.socket.bufferedAmount;
 info={};
 info.url=obj.url;
 info.is_open=obj.is_open;
 info.is_closed=obj.is_closed;
 info.is_error=obj.is_error;
 if(aa.main_state.cycle!=obj.cycle_of_timer)
  {
  info.ms=aa.timerMsRunning()-obj.ms_start;
  obj.last_timer_ms=info.ms;
  obj.cycle_of_timer=aa.main_state.cycle;
  }
 else
  {
  info.ms=obj.last_timer_ms;
  }
 info.buffered=obj.buffered;
 info.rcve_queue_status=aa.queueStatus(obj.rcve_queue_handle);
 info.xmit_queue_status=aa.queueStatus(obj.xmit_queue_handle);
 return info;
 }




 function socketYield ()
 {
 var go,h,c;
 if(socket_obj.handef.count==0) { return false; }
 // console.log(arguments.callee.name+"  "+aa.main_obj.state.cycle);
 c=0;
 for(go=0;go<1;go++)
  {
  if(c>=socket_obj.handef.count) { return true; }
  if((h=handleNext(socket_obj.handef,true))==0) { break; }
  c++;
  socketProcess(h);
  return true;
  }
 return false;
 }




//-----------------------------------------------------------------------





 function dspObjInit ()
 {
 if(Object.keys(dsp_obj).length!=0) { return; }
 dsp_obj.is_init=true;
 }




 function dspAudioResample (isampf32,irate,samples,orate)
 {
 var dstsize,dstdata,iaccum,oaccum,iratio,oratio,i_pos,o_pos,ii,oo;
 iaccum=0;
 oaccum=0;
 i_pos=0;
 o_pos=0;
 iratio=irate/orate;
 oratio=1.0;
 dstsize=Math.ceil(samples/iratio);
 dstdata=new Float32Array(dstsize);
 while(1)
  {
  ii=i_pos|0;
  oo=o_pos|0;
  if(ii>=samples) { break; }
  if(oo>=dstsize)            { break; }
  dstdata[oo]=isampf32[ii];
  oaccum+=oratio;    o_pos=oaccum;
  iaccum+=iratio;    i_pos=iaccum;
  }
 return dstdata;
 }



 function dspSineWaveAt (rate,sampleNumber,tone)
 {
 var sampleFreq=rate/tone;
 return Math.sin(sampleNumber/(sampleFreq/(Math.PI*2)));
 }



 function dspZigZag (size)
 {
 var i,j,e,obj={};
 obj.type="zigzag";
 obj.width=size;
 obj.height=size;
 obj.matrix=[];
 for(i=0;i<size;i++) { obj.matrix[i]=[]; }
 i=1;
 j=1;
 for(e=0;e<size*size;e++)
  {
  obj.matrix[i-1][j-1]=e|0;
  if((i+j)%2==0)
   {
   if(j<size) { j++;  }
   else       { i+=2; }
   if(i>1)    { i--; }
   }
  else
   {
   if(i<size) { i++; }
   else       { j+=2; }
   if(j>1)    { j--; }
   }
  }
 return obj;
 }



 function dspBlockGet (rgbaframe,framewid,framehit,channel,blksize,blkx,blky,block)
 {
 var bx,by,px,py,off,z,skp;
 off=((blky*framewid*4)+(blkx*4)+channel)|0;
 z=0|0;
 skp=((framewid*4)-(blksize*4))|0;
 for(py=0|0;py<blksize|0;py++)
  {
  for(px=0|0;px<blksize|0;px++)
   {
   block[z]=rgbaframe[off|0];
   off+=4|0;
   z+=1|0;
   }
  off+=skp|0;
  }
 return block;
 }




 function dspBlockSet (rgbaframe,framewid,framehit,channel,blksize,blkx,blky,block)
 {
 var bx,by,px,py,off,z,skp;
 off=((blky*framewid*4)+(blkx*4)+channel)|0;
 z=0|0;
 skp=((framewid*4)-(blksize*4))|0;
 for(py=0|0;py<blksize|0;py++)
  {
  for(px=0|0;px<blksize|0;px++)
   {
   rgbaframe[off|0]=block[z];
   off+=4|0;
   z+=1|0;
   }
  off+=skp|0;
  }
 }



 function dspDbCalculate (buf,step)
 {
 var len,sum,i,rms,deb,dec,obj;
 len=buf.length;
 sum=0;
 for(i=0|0;i<(len);i+=(step|0))  {  sum+=(buf[i]**2);  }
 obj={};
 obj.sum=sum;
 obj.dec=10*Math.log10(sum/len);
 obj.rms=Math.sqrt(sum/len);
 obj.deb=20*Math.log10(obj.rms);
 return obj;
 }




//-----------------------------------------------------------------------




 function bitioObjInit ()
 {
 if(Object.keys(bitio_obj).length!=0) { return; }
 bitio_obj.handef=handleDefine("bitio",32);
 bitio_obj.is_init=true;
 }




 function bitioCreate ()
 {
 var i,h,obj;
 for(i=0;i<bitio_obj.handef.slots;i++)
  {
  obj=bitio_obj.handef.array[i];
  if(obj.in_use!=false) { continue; }
  h=handleUse(bitio_obj.handef,i)
  obj.vars={};
  obj.main_array=[];
  obj.head_bit_buf=0|0;
  obj.head_bit_count=0;
  obj.tail_bit_buf=0|0;
  obj.tail_bit_count=0;
  return h;
  }
 return 0;
 }



 function bitioDestroy (handle)
 {
 var obj;
 if((obj=handleCheck(bitio_obj.handef,handle))==null) { return false; }
 obj.vars={};
 handleRemove(bitio_obj.handef,handle);
 return true;
 }




 function bitioGet (handle)
 {
 return(handleCheck(bitio_obj.handef,handle));
 }




 function bitioStatus (handle)
 {
 var obj,status;
 if((obj=bitioGet(handle))==null) { return null; }
 status={};
 status.total_bits=(obj.main_array.length*8)+obj.head_bit_count+obj.tail_bit_count;
 status.total_bytes=0;
 if(status.total_bits>0)
  {
  status.total_bytes=(status.total_bits/8)|0;
  if((status.total_bits%8)!=0) { status.total_bytes++; }
  }
 return status;
 }






 function bitioRead (handle)
 {
 var obj,buffer,i,len,val;
 if((obj=bitioGet(handle))==null) { return null; }
 buffer=0;
 i=0;
 len=obj.main_array.length;
 for(;i<len;i++)
  {
  buffer=obj.main_array[i]&((1<<obj.head_bit_count)-1);
  obj.main_array[i]=(obj.head_bit_buf<<(8-obj.head_bit_count))|(obj.main_array[i]>>>obj.head_bit_count);
  obj.head_bit_buf=buffer;
  }
 obj.tail_bit_buf|=obj.head_bit_buf<<obj.tail_bit_count;
 obj.tail_bit_count+=obj.head_bit_count;
 obj.head_bit_buf=0;
 obj.head_bit_count=0;
 if(obj.tail_bit_count>=8)
  {
  obj.main_array.push(obj.tail_bit_buf>>>(obj.tail_bit_count-8));
  obj.tail_bit_buf&=(1<<(obj.tail_bit_count-8))-1;
  obj.tail_bit_count-=8;
  }
 val=obj.main_array.shift();
 return val;
 }





 function bitioWrite (handle,bits,val,prepend)
 {
 var obj;
 if((obj=bitioGet(handle))==null) { return false; }
 if(prepend==true)
  {
  obj.head_bit_buf|=(val<<obj.head_bit_count);
  obj.head_bit_count+=bits;
  while(obj.head_bit_count>=8)
   {
   obj.main_array.unshift(obj.head_bit_buf&255);
   obj.head_bit_buf>>>=8;
   obj.head_bit_count-=8;
   }
  }
 else
  {
  obj.tail_bit_buf=(obj.tail_bit_buf<<bits)|val;
  obj.tail_bit_count+=bits;
  while(obj.tail_bit_count>=8)
   {
   obj.main_array.push(obj.tail_bit_buf>>>(obj.tail_bit_count-8));
   obj.tail_bit_buf&=(1<<(obj.tail_bit_count-8))-1;
   obj.tail_bit_count-=8;
   }
  }
 return true;
 }




//-----------------------------------------------------------------------



 function rtcObjInit ()
 {
 if(Object.keys(rtc_obj).length!=0) { return; }
 rtc_obj.handef=handleDefine("rtc",64);
 rtc_obj.is_init=true;
 }




 function rtcCreate (config)
 {
 var i,h,obj,s;
 for(i=0;i<rtc_obj.handef.slots;i++)
  {
  obj=rtc_obj.handef.array[i];
  if(obj.in_use!=false) { continue; }
  h=handleUse(rtc_obj.handef,i)
 // obj.stage=10;
  obj.in_promise=false;
  obj.promise_info="";
  obj.promise_object=null;
  obj.promise_handle=0;
  obj.promise_val=null;
  obj.promise_status=null;
  obj.promise_stage=0;
  obj.prom=null;



  obj.loc_desc=null;
  obj.rem_desc=null;
  obj.offer=null;
  obj.answer=null;
  obj.ice_candi=null;
  obj.user_data="";
  obj.vars={};

  obj.vars.stats_rate=0;
  obj.vars.stats_ms=0;
  obj.vars.stats_el=0;
  obj.vars.stats_is_stopping=false;
  obj.vars.stats_in_promise=false;
  obj.vars.stats_promise_info="";
  obj.vars.stats_promise_object=null;
  obj.vars.stats_prosync_handle=0;
  ///obj.vars.stats_queue_handle=aa.queueCreate();
  ///obj.vars.stats_queue_status=aa.queueStatus(obj.vars.stats_queue_handle);

  obj.vars.stats_ray=[];
  obj.vars.stats_available=[];
  for(s=0;s<16;s++)
   {
   obj.vars.stats_ray[s]=[];
   obj.vars.stats_available[s]=0;
   }

  obj.i_what=null;
  obj.rem_stream=null;
  obj.gui_id=null;
  obj.ice_queue_handle=aa.queueCreate();
  obj.ice_queue_status=aa.queueStatus(obj.ice_queue_handle);
  obj.ice_final=false;
  obj.data_channel=[];
  obj.data_open_count=0;
  obj.data_channel_count=0;
  obj.pc_config=Object.assign({},config);
  obj.pc=new RTCPeerConnection(obj.pc_config);
  obj.pc.self_handle=h;
  obj.pc.han=h;
  obj.pc.onconnectionstatechange=function(e)    { rtcOnProc(this,"onconnectionstatechange",e);   };
  obj.pc.onicecandidate=function(e)             { rtcOnProc(this,"onicecandidate",e);   };
  obj.pc.oniceconnectionstatechange=function(e) { rtcOnProc(this,"oniceconnectionstatechange",e);   };
  obj.pc.onicegatheringstatechange=function(e)  { rtcOnProc(this,"onicegatheringstatechange",e);   };
  obj.pc.onsignalingstatechange=function(e)     { rtcOnProc(this,"onsignalingstatechange",e);   };
  obj.pc.onnegotiationneeded=function(e)        { rtcOnProc(this,"onnegotiationneeded",e);   };
  obj.pc.ontrack=function(e)                    { rtcOnProc(this,"ontrack",e);   };
  obj.pc.onaddtrack=function(e)                 { rtcOnProc(this,"onaddtrack",e);   };
  obj.pc.onremovetrack=function(e)              { rtcOnProc(this,"onremovetrack",e);   };
  obj.pc.onaddstream=function(e)                { rtcOnProc(this,"onaddstream",e);   };
  obj.pc.onremovestream=function(e)             { rtcOnProc(this,"onremovestream",e);   };
  obj.pc.ondatachannel=function(e)              { rtcOnProc(this,"ondatachannel",e);   };
  return h;
  }
 return 0;
 }





 function rtcDestroy (handle)
 {
 var obj,idx,dc,i,s;
 if((obj=handleCheck(rtc_obj.handef,handle))==null) { return false; }
 if(obj.ice_queue_handle!=0)
  {
  aa.queueDestroy(obj.ice_queue_handle);
  obj.ice_queue_handle=0;
  }
 rtcPromiseClear(handle);
 obj.ice_final=false;

// if(obj.vars.stats_queue_handle!=0)
//  {
//  aa.queueDestroy(obj.vars.stats_queue_handle);
//  obj.vars.stats_queue_handle=0;
//  }

 if(obj.vars.stats_prosync_handle!=0)
  {
  aa.promiseDestroy(obj.vars.stats_prosync_handle);
  obj.vars.stats_in_promise=false;
  obj.vars.stats_promise_info="";
  obj.vars.stats_promise_object=null;
  obj.vars.stats_prosync_handle=0;
  }
 if(obj.vars.stats_ray!==undefined)
  {
  for(s=0;s<16;s++)
   {
   obj.vars.stats_ray[s]=null;
   obj.vars.stats_available[s]=0;
   }
  obj.vars.stats_ray=null;
  obj.vars.stats_available=null;
  }



 for(i=0;i<obj.data_channel.length;i++)
  {
  dc=obj.data_channel[i];
  if(dc.rcve_queue_handle!=0)
   {
   aa.queueDestroy(dc.rcve_queue_handle);
   dc.rcve_queue_handle=0;
   dc.rcve_queue_status=null;
   }
  dc.cdc.close();
  dc.cdc.onopen=null;
  dc.cdc.onclose=null;
  dc.cdc.onmessage=null;
  dc.cdc=null;
  }
 obj.data_channel=[];
 obj.data_open_count=0;
 obj.data_channel_count=0;
 obj.pc_config=null;
 obj.pc.self_handle=0;
 obj.pc.han=0;
 obj.pc.onconnectionstatechange=null;
 obj.pc.onicecandidate=null;
 obj.pc.oniceconnectionstatechange=null;
 obj.pc.onicegatheringstatechange=null;
 obj.pc.onsignalingstatechange=null;
 obj.pc.onnegotiationneeded=null;
 obj.pc.ontrack=null;
 obj.pc.onaddtrack=null;
 obj.pc.onremovetrack=null;
 obj.pc.onaddstream=null;
 obj.pc.onremovestream=null;
 obj.pc.ondatachannel=null;
 obj.pc.close();
 obj.pc=null;
 obj.vars={};
 handleRemove(rtc_obj.handef,handle);
 return true;
 }





 function rtcGet (handle)
 {
 var res,s,cl;
 res=handleCheck(rtc_obj.handef,handle);
 if(res==null) { return res; }
 cl=res.vars.stats_ray.length
 for(s=0;s<cl;s++)
  {
  res.vars.stats_available[s]=res.vars.stats_ray[s].length;
  }
 return res;
 }






 function rtcStatus (handle)
 {
 var obj,status,ps,hex;
 if((obj=rtcGet(handle))==null) { return null; }


 if(obj.vars.stats_rate>0)
  {
  obj.vars.stats_el=aa.timerMsRunning()-obj.vars.stats_ms;
  if(obj.vars.stats_el>=obj.vars.stats_rate)
   {
   if(obj.vars.stats_in_promise!=undefined&&obj.vars.stats_in_promise==false)
    {
    jex=obj.pc.getStats(null);
    obj.vars.stats_in_promise=true;
    obj.vars.stats_promise_info="getting stats";
    obj.vars.stats_promise_object=jex;
    obj.vars.stats_prosync_handle=aa.promiseCreate(obj.vars.stats_promise_object,222);
    }
   }
  if(obj.vars.stats_in_promise!=undefined&&obj.vars.stats_in_promise==true)
   {
   ///aa.debugLog("about to rtcstatsgetstatus");
   if(rtcStatsGetStatus(handle)==true)
    {
    ///aa.debugLog("snt stats!!!!!!!!");
    if(obj.vars.stats_in_promise!=false) { aa.debugAlert(); }
    obj.vars.stats_ms=aa.timerMsRunning();
    obj.vars.stats_el=0;
    if(obj.vars.stats_is_stopping==true)
     {
     ///aa.debugLog("spptt");
     obj.vars.stats_rate=0;
     obj.vars.stats_is_stopping=false;
     ///while(aa.queueDiscard(obj.vars.stats_queue_handle)==true);
     ///obj.vars.stats_queue_status=aa.queueStatus(obj.vars.stats_queue_handle);
     }
    }
   }
  }

 status={};
 status.in_promise=false;
 status.promise_info="";
 status.promise_status=null;
 if(obj.in_promise==true)
  {
  status.in_promise=true;
  status.promise_info=obj.promise_info;
  status.promise_status=aa.promiseStatus(obj.promise_handle);
  if(status.promise_status.state==PROMISE_completed)
   {
   //aa.debugLog("promise good "+status.promise_status.etc);
   switch(status.promise_status.etc)
    {
    case 100:  obj.offer=status.promise_status.val;  break;
    case 200:  obj.answer=status.promise_status.val;  break;
    case 300:  obj.rem_desc=obj.pc.remoteDescription;  break;
    case 400:  obj.loc_desc=obj.pc.localDescription;  break;
    case 500:  obj.ice_candi=status.promise_status.val;  break;
    default: aa.debugAlert("dstt="+obj.stage); break;
    }
   }
  else
  if(status.promise_status.state==PROMISE_rejected)
   {
   aa.debugLog("PROMISE REJECTED!!!!!!!!!!!");
   ///aa.debugAlert(status.promise_status.etc);
   }
  }
 status.prom=obj.prom;
 return status;
 }






 function rtcPromiseCreate (handle,stage,object,info)
 {
 var obj;
 if((obj=rtcGet(handle))==null) { aa.debugAlert(); return false; }
 if(obj.in_promise!=false) { alert("rtcPromiseCreate not false"); }
 //obj.stage=stage;
 //aa.debugLog("rtc promise stage="+stage);
 //aa.debugLog(obj.vars.pc.localDescription);
 switch(stage)
  {
  default: aa.debugAlert("s="+stage); break;
  case 100:  obj.offer=null;  break;
  case 200:  obj.answer=null;  break;
  case 300:  obj.rem_desc=null;  break;
  case 400:  obj.loc_desc=null;  break;
  case 500:  obj.ice_candi=null;  break;
  }
 obj.in_promise=true;
 obj.promise_info=info;
 obj.promise_object=object;
 obj.promise_handle=aa.promiseCreate(obj.promise_object,stage);
 obj.promise_status=aa.promiseStatus(obj.promise_handle);
 obj.promise_stage=stage;
 return true;
 }





 function rtcPromiseClear (handle)
 {
 var obj;
 if((obj=rtcGet(handle))==null) { return false; }
 if(obj.in_promise!=true)  { return false; }
 obj.promise_status=aa.promiseStatus(obj.promise_handle);
 if(obj.promise_status.state!=PROMISE_completed)
  {
  aa.debugLog("rtcPromiseClear ps.state="+obj.promise_status.state);
  //aa.debugAlert("rtcPromiseClear ps.state="+obj.promise_status.state);
  aa.promiseDestroy(obj.promise_handle);
  obj.in_promise=false;
  obj.promise_info="";
  obj.promise_object=null;
  obj.promise_handle=0;
  return false;
  }
 aa.promiseDestroy(obj.promise_handle);
 obj.in_promise=false;
 obj.promise_info="";
 obj.promise_object=null;
 obj.promise_handle=0;
 return true;
 }








 function rtcOnProc (pc,name,event)
 {
 var obj,rtc,docon,candi;

 if((rtc=rtcGet(pc.self_handle))==null)
  {
  }

  //aa.debugLog(name);

 docon=0;

 switch(name)
  {
  case "onaddstream":
  if(docon) { aa.debugLog("RTCONPROC: "+name); }
  break;
  case "onremovestream":
  if(docon) { aa.debugLog("RTCONPROC: "+name); }
  break;
  case "onaddtrack":
  if(docon) { aa.debugLog("RTCONPROC: "+name); }
  break;
  case "onremovetrack":
  if(docon) { aa.debugLog("RTCONPROC: "+name); }
  break;

  case "ontrack":
  if(docon) { aa.debugLog("RTCONPROC: "+name); }
  //aa.debugAlert();
  //console.log(event.streams);
  if(event.streams&&event.streams[0])
   {
   //aa.debugAlert();
   ///aa.debugLog("#############  ontrack, track has been added");
   ///aa.debugLog(event.streams[0]);
   ///console.log("##########");
   rtc.rem_stream=event.streams[0];
   rtc.gui_id=null;
   }
  break;

  case "onnegotiationneeded":
  if(docon) { aa.debugLog("RTCONPROC: "+name); }
  ///aa.debugLog(rtc.user_data+"  "+name+"  !!!!!!!!!!!!!!!!");
  break;

  case "onsignalingstatechange":
  if(docon) { aa.debugLog("RTCONPROC: "+name+"  "+pc.signalingState); }
  //aa.debugLogger(20,rtc.user_data+"  "+name+"  "+pc.signalingState);
  //aa.debugLog(rtc.user_data+"  "+name+"  "+pc.signalingState+"  @@@@@@@@@@");
  ///aa.debugLog(rtc.user_data+"  "+name+"  "+pc.signalingState+"  @@@@@@@@@@");
  break;

  case "onconnectionstatechange":
  if(docon) { aa.debugLog("RTCONPROC: "+name+"  "+pc.connectionState); }
  ///aa.debugLog(rtc.user_data+"  "+name+"  "+pc.connectionState);
  ///if(pc.connectionState=="connected") fckok=true;
  break;

  case "onicegatheringstatechange":
  if(docon) { aa.debugLog("RTCONPROC: "+name+"  "+pc.iceGatheringState); }
  //aa.debugLogger(25,rtc.user_data+"  "+name+"  "+pc.iceGatheringState);
//  aa.debugLog(rtc.user_data+"  "+name+"  "+pc.iceGatheringState);
  break;

  case "oniceconnectionstatechange":
  if(docon) { aa.debugLog("RTCONPROC: "+name+"  "+pc.iceConnectionState); }
  //aa.debugLogger(25,rtc.user_data+"  "+name+"  "+pc.iceConnectionState);
//aa.debugLog(rtc.user_data+"  "+name+"  "+pc.iceConnectionState);
  break;



  ///expandedLog(key[1].candidate,2,0);
  case "onicecandidate":
  if((obj=rtcGet(pc.self_handle))==null) { aa.debugAlert("line 5485"); }
  //if(docon||1)   {   aa.debugLog("RTCONPROC: "+name+"  ");   }
  ///if(event.candidate=="")  aa.debugAlert();
  //aa.debugLog(event.candidate);
  //if(event.candidate==null) { aa.debugLog("EV null"); }
  //if(event.candidate=="")   { aa.debugLog("EV empty"); }
  ///if(event.candidate==null)//||event.candidate=="")

  if(event.candidate==null)
   {
   if(docon) { aa.debugLog("RTCONPROC::: FINAL ICE"); }
   aa.queueWrite(obj.ice_queue_handle,".");
   obj.ice_final=true;
   }
  else
   {
   candi=event.candidate.candidate;//.candidate;
   ///console.log(event);
   //console.log(event.candidate.candidate);
   ///if(candi.indexOf("relay")<0)    {    aa.debugLog("not realay");    break;    }
   aa.queueWrite(obj.ice_queue_handle,event.candidate);
   }
  obj.ice_queue_status=aa.queueStatus(obj.ice_queue_handle);
  ///if(docon) { aa.debugLog("RTCONPROC: "+name); }
  break;



  case "ondatachannel":
  if(docon) { aa.debugLog("RTCONPROC: "+name); }
  ///aa.debugLog("*ondch"+rtc.vars.user_data+" "+name+" "+event.channel.readyState+" "+event.channel.label);
  rtcDataChannelAdd(pc.self_handle,event.channel.label,event.channel);
  break;


  default:
  if(docon) { aa.debugLog("RTCONPROC: "+name); }
  break;
  }
 }










 function rtcOfferCreate (handle)
 {
 var obj,jex;
 if((obj=rtcGet(handle))==null) { return false; }
 if(obj.in_promise!=false) { alert("offercreate"); }
 //aa.debugLogger(50,"line="+aa.debugLineNumber()+" createOffer");
 obj.i_what="offer";
 jex=obj.pc.createOffer();
 rtcPromiseCreate(handle,100,jex,"creating_offer");
 if(obj.in_promise!=true) { alert("offercreate"); }
  //if((obj.promise_handle=aa.promiseCreate(obj.promise_object,obj.stage))==0) { aa.debugAlert(); }
 return true;
 }




 function rtcAnswerCreate (handle)
 {
 var obj,jex;
 if((obj=rtcGet(handle))==null) { return false; }
 if(obj.in_promise!=false) { alert("answercreate"); }
 ///aa.debugLogger(50,"line="+aa.debugLineNumber()+" createAnswer");
 obj.i_what="answer";
 jex=obj.pc.createAnswer();
 rtcPromiseCreate(handle,200,jex,"creating_answer");
 if(obj.in_promise!=true) { alert("answerreate"); }
 return true;
 }




 function rtcDescRemoteSet (handle,desc)
 {
 var obj,jex,dex;
 if((obj=rtcGet(handle))==null) { return false; }
 if(obj.in_promise!=false) { alert("setremoteder"); }
 //aa.debugLogger(50,"line="+aa.debugLineNumber()+" setRemoteDescription");
// aa.debugLog("rtcDescRemoteSet");
 jex=obj.pc.setRemoteDescription(new RTCSessionDescription(desc));
 rtcPromiseCreate(handle,300,jex,"set_remote_desc");
 if(obj.in_promise!=true) { alert("remoteseate"); }
 return true;
 }




 function rtcDescLocalSet (handle,desc)
 {
 var obj,jex;
 if((obj=rtcGet(handle))==null) { return false; }
 if(obj.in_promise!=false) { alert("setlocder"); }
 ///aa.debugLogger(50,"line="+aa.debugLineNumber()+" setLocalDescription");
 jex=obj.pc.setLocalDescription(desc);
 rtcPromiseCreate(handle,400,jex,"set_local_desc");
 if(obj.in_promise!=true) { alert("localeseate"); }
 return true;
 }




 function rtcIceCandidateAdd (handle,candidate)
 {
 var obj,jex,res,candi;
 if((obj=rtcGet(handle))==null) { return false; }
 if(obj.in_promise!=false)  {  if(1) alert("icecandidateadd!!x");  }
 if(candidate==".") { return true; }
 //if(obj.in_promise!=false)  {  if(1) alert("icecandidateadd!!");  }
 if(0)  {  aa.debugLogger(5,"rtcIceCandidateAdde "+candidate.candidate);  }

 ///aa.debugLog("rtcIceCandidateAdd");
 ///aa.debugLog(candidate);
 //aa.debugLog(JSON.stringify(candidate,0,2));

 //candi=new RTCIceCandidate(event.data)
 ///console.log(candidate);
 candi=new RTCIceCandidate(candidate);//.candidate)
 ///aa.debugLog("************* CANDI=",candi);
 //aa.debugLog("candi");
 //aa.debugLog(candi);
 jex=obj.pc.addIceCandidate(candi);  // changed
 //jex=obj.pc.addIceCandidate(candidate.candidate);
 rtcPromiseCreate(handle,500,jex,"add_ice_candidate");
 return true;
 }



 function rtcIceCandidateGet (handle)
 {
 var obj,ice;
 if((obj=rtcGet(handle))==null) { return null; }
 ice=aa.queueRead(obj.ice_queue_handle);
 obj.ice_queue_status=aa.queueStatus(obj.ice_queue_handle);
 if(ice==null) { return null; }
 if(0)
  {
  aa.debugLog(" ");
  aa.debugLog("------------------------------------------------");
  aa.debugLog("rtcIceCandidateGet");
  aa.debugLog(ice);
  aa.debugLog("------------------------------------------------");
  aa.debugLog(" ");
  }
 //aa.debugLog(JSON.stringify(ice,0,2));
 return ice;
 }






 function rtcDataChannelFind (handle,name)
 {
 var obj,idx,dc;
 if((obj=rtcGet(handle))==null) { return -1; }
 if(obj.in_promise!=false) { alert("finddatachannel"); }
 for(idx=0;idx<obj.data_channel.length;idx++)
  {
  dc=obj.data_channel[idx];
  if(dc.name!=name) { continue; }
  return idx;
  }
 return -1;
 }






 function rtcDataChannelGet (handle,index)
 {
 var obj,dc;
 if((obj=rtcGet(handle))==null) { return false; }
 if(index>=obj.data_channel.length) {   return false; }
 dc=obj.data_channel[index];
 if(dc.is_open!=true) {  return false; }
 ///aa.debugLogger(60,"channelsend "+idx+"  "+dc.last_state);
 //dc.cdc.send(msg);
 return dc;
 }






 function rtcOnData (handle,event)
 {
 var rtc,idx,dc,data;
 ///aa.debugLog("ondata");
 if((rtc=rtcGet(handle))==null)
  {
  if(1)
   {
   aa.debugLogger(65,"*************");
   aa.debugLogger(65,"RtcOnData rtc.handle="+handle);
   aa.debugLogger(65,"RtcOnData "+event.type+"  "+event.currentTarget.label);
   aa.debugLogger(65,"*************");
   }
  return false;
  }

 dc=null;
 for(idx=0;idx<rtc.data_channel.length;idx++)
  {
  dc=rtc.data_channel[idx];
  if(dc.name==event.currentTarget.label) { break; }
  }
 if(idx==rtc.data_channel.length) { dc=null; }
 //aa.debugLog("ondata");
 if(dc!==null)
  {
  //if(dc.cdc.readyState!=event.type)  alert(dc.cdc.readyState+" "+event.type);
  if(dc.cdc.readyState!=dc.last_state)
   {
   //aa.debugLogger(5,dc.name+" prev="+dc.last_state+"  rs="+dc.cdc.readyState);
   dc.last_state=dc.cdc.readyState;
   dc.is_open=false;
   if(dc.last_state=="open")     {    dc.is_open=true;    }
   }
  }
 switch(event.type)
  {
  case "open":
  rtc.data_open_count++;
  aa.debugLog(rtc.user_data+"         onData "+event.type+"  "+event.currentTarget.label);
  break;

  case "message":
  //aa.debugLogger(65,rtc.user_data+"         onData "+event.type+"  "+event.currentTarget.label);
  if(dc.rcve_queue_handle==0) { aa.debugAlert(); }
  else
   {
   aa.queueWrite(dc.rcve_queue_handle,event);
   dc.rcve_queue_status=aa.queueStatus(dc.rcve_queue_handle);
   //aa.debugLog(idx,dc.rcve_queue_status);
   }
  //data=event.data;
  //aa.debugLogger(65,event);
  //aa.debugLogger(65,event.data);
  break;

  case "closed":
  aa.debugAlert();
  break;

  case "close":
  rtc.data_open_count--;
  aa.debugLog(rtc.user_data+"         onData "+event.type+"  "+event.currentTarget.label);
  break;

  default:
  aa.debugLog(rtc.user_data+"         onData "+event.type+"  "+event.currentTarget.label);
  break;
  }
 }





//aa.rtcDataChannelCreate(peer.vars.rtc_handle,'datachan0',1);
 function rtcDataChannelCreate (handle,name,reliable,maxretransmits,maxpktlifetime)
 {
 var obj,idx,dc,opts;
 if((obj=rtcGet(handle))==null) { return -1; }
 if(obj.in_promise!=false) { alert("createdatachannel1"); }
 //aa.debugLogger(5,aa.debugFunctionName()+" "+name+" "+mode);
 opts={};
 if(reliable==true) {     opts.reliable=true;  opts.ordered=true;  }
 else               {     opts.reliable=false; opts.ordered=false; }
 if(maxretransmits!=null) { opts.maxRetransmits=maxretransmits;   }
 if(maxpktlifetime!=null) { opts.maxPacketLifeTime=maxpktlifetime; }

 idx=obj.data_channel.length;
 dc={};
 dc.how="created";
 dc.is_open=false;
 dc.name=name;
 dc.max_retransmits=opts.maxRetransmits;
 dc.max_pkt_lifetime=opts.maxPacketLifeTime;
 dc.is_ordered=opts.ordered;
 dc.is_reliable=opts.reliable;
 dc.last_state="";
 dc.rcve_queue_handle=aa.queueCreate();
 dc.rcve_queue_status=aa.queueStatus(dc.rcve_queue_handle);
 dc.cdc={};
 //if(maxretransmits!=null) { opts.maxRetransmits=maxretransmits; }
 //if(maxpktlifetime!=null) { opts.maxPacketLifeTime=maxpktlifetime; }
 //if(isordered!=null)      { opts.ordered=isordered; }
 ///opts.maxRetransmits=maxretransmits;
 ///opts.maxPacketLifeTime=maxpktlifetime;
 dc.cdc=obj.pc.createDataChannel(name,opts);
 obj.data_channel[idx]=dc;
 obj.data_channel_count++;
 ///aa.debugLogger(40,"datachancreate="+name+" idx="+idx,opts);
 dc.cdc.onopen=function(event)    {  rtcOnData(handle,event);  };
 dc.cdc.onclose=function(event)   {  rtcOnData(handle,event);  };
 dc.cdc.onmessage=function(event) {  rtcOnData(handle,event);  };
 return idx;
 }





 function rtcDataChannelAdd (handle,name,cdc)
 {
 var obj,idx,dc;
 if((obj=rtcGet(handle))==null) { return -1; }
 idx=obj.data_channel.length;
 dc={};
 dc.how="added";
 dc.is_open=false;
 dc.name=name;
 dc.mode=123;
 dc.last_state="";
 dc.rcve_queue_handle=aa.queueCreate();
 dc.rcve_queue_status=aa.queueStatus(dc.rcve_queue_handle);
 dc.cdc={};
 dc.cdc=cdc;
 obj.data_channel[idx]=dc;
 obj.data_channel_count++;
 ///aa.debugLogger(40,"datachanAdd="+name+" idx="+idx);
 dc.cdc.onopen=function(event)    {  rtcOnData(handle,event);  };
 dc.cdc.onclose=function(event)   {  rtcOnData(handle,event);  };
 dc.cdc.onmessage=function(event) {  rtcOnData(handle,event);  };
 return idx;
 }




 function rtcDataChannelSend (handle,idx,msg)
 {
 var obj,dc;
 if((obj=rtcGet(handle))==null) { return false; }
 if(idx>=obj.data_channel.length) { return false; }
 dc=obj.data_channel[idx];
 ///aa.debugLog(dc);
 if(dc.is_open!=true) { return false; }
 //aa.debugLog(dc);
 ///aa.debugLogger(60,"channelsend "+idx+"  "+dc.last_state);
 dc.cdc.send(msg);
 return true;
 }



 function rtcDataChannelPeek (handle,idx)
 {
 var obj,dc,msg;
 if((obj=rtcGet(handle))==null) { aa.debugAlert("datachannelpeek handle="+handle); return false; }
 if(idx>=obj.data_channel.length) { aa.debugAlert();  return false; }
 dc=obj.data_channel[idx];
 if(dc.is_open!=true) {  return false; }
 dc.rcve_queue_status=aa.queueStatus(dc.rcve_queue_handle);
 if(dc.rcve_queue_status.msgs_queued==0) { return null; }
 msg=aa.queuePeek(dc.rcve_queue_handle,0);
 return msg;
 }




 function rtcDataChannelDiscard (handle,idx)
 {
 var obj,dc,msg,rt;
 if((obj=rtcGet(handle))==null) { return false; }
 if(idx>=obj.data_channel.length) { return false; }
 dc=obj.data_channel[idx];
 if(dc.is_open!=true) { return false; }
 dc.rcve_queue_status=aa.queueStatus(dc.rcve_queue_handle);
 if(dc.rcve_queue_status.msgs_queued==0) { return false; }
 if((rt=aa.queueDiscard(dc.rcve_queue_handle,0))!=true) { return rt; }
 dc.rcve_queue_status=aa.queueStatus(dc.rcve_queue_handle);
 return true;
 }




 function rtcDataChannelRead (handle,idx)
 {
 var msg,rt,val,tag;
 msg=rtcDataChannelPeek(handle,idx);
 if(msg==false||msg==null) { return msg; }
// if((rt=rtcDataChannelDiscard(handle,idx))!=true) { return rt; }
 val={};
 val.type=msg.type;
 val.timestamp=msg.timeStamp;
 val.data=msg.data;
 tag=msg.currentTarget;
 val.id=tag.id;
 val.label=tag.label;
 val.buffered_amount=tag.bufferedAmount;
 val.max_retransmits=tag.maxRetransmits;
 val.max_packet_lifetime=tag.maxPacketLifeTime;
 val.negotiated=tag.negotiated;
 val.ordered=tag.ordered;
 val.protocol=tag.protocol;
 val.reliable=tag.reliable;
 val.ready=tag.readyState;
 val.binary_type=tag.binaryType;
 if((rt=rtcDataChannelDiscard(handle,idx))!=true) { return rt; }
 return val;
 }





 function rtcBitrateChange (handle,arate,vrate)
 {
 var rtc,snd,prm;
 if((rtc=rtcGet(handle))==null) { return false; }

 if(rtc.prom!=null) { return false; } //alert("rtcprom not null"); }

 if(arate<=0&&vrate<=0) { return true; }
 if(arate>0&&vrate>0)   { return false; }

 //console.log(rtc);
 if(arate>0)
  {
  if(1)
   {
   snd=rtc.pc.getSenders()[0];
   prm=snd.getParameters();
   prm.encodings[0].maxBitrate=arate*1000;
   rtc.prom=snd.setParameters(prm);
   }
  //alert(snd.track.kind);
  //snd=rtc.pc.getSenders().filter(s=>s.track.kind==='audio')[0];
  //rtc.prom=snd.setParameters({...(snd.getParameters()), encodings: [{  maxBitrate:(arate*1000),}]});
  }
 if(vrate>0)
  {
  if(1)
   {
   snd=rtc.pc.getSenders()[1];
   prm=snd.getParameters();
   prm.encodings[0].maxBitrate=vrate*1000;
   rtc.prom=snd.setParameters(prm);
   }
  //snd=rtc.pc.getSenders().filter(s=>s.track.kind==='video')[0];
  //rtc.prom=snd.setParameters({...(snd.getParameters()), encodings: [{  maxBitrate:(vrate*1000),}]});
  }

 if(rtc.prom!==undefined&&rtc.prom!=null)
  {
  rtc.prom.then(()=>
   {
//   alert("ok");
//   aa.debugLog("bitrate changed ok");
   rtc.prom=null;
   })
  .catch(error=>
   {
   alert(error);
   aa.debugLog(rtc.prom);
   aa.debugLog(error);
   aa.debugLog("bitrate changed err ",error.message);
   rtc.prom=null;
   });
  }


 return true;
 }

               //        if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
               //        var snd=rtc.pc.getSenders().filter(s => s.track.kind === 'video')[0];
               //        snd.setParameters({...(snd.getParameters()), encodings: [{  maxBitrate: 1000*8,}]});






 function rtcStatsGet (handle,rate)
 {
 var obj;
 if((obj=rtcGet(handle))==null) { return false; }
 //aa.debugLog("set 0 "+obj.vars.stats_is_stopping+"  "+rate+"  "+obj.vars.stats_rate);
 if(rate<0) { return false; }
 if(obj.vars.stats_is_stopping==true) { return false; }
 aa.debugLog("setstats_rate="+obj.vars.stats_rate+" rate="+rate);
 if(obj.vars.stats_rate>0&&rate>0)
  {
  ///aa.debugLog("set 1, stats_rate="+obj.vars.stats_rate+" rate="+rate);
  obj.vars.stats_rate=rate;
  //aa.debugLog("set 1");
  return true;
  }
 if(obj.vars.stats_rate>0&&rate==0)
  {
  obj.vars.stats_is_stopping=true;
  aa.debugLog("set 2");
  return true;
  }
 obj.vars.stats_rate=rate;
 obj.vars.stats_ms=aa.timerMsRunning();
 obj.vars.stats_el=0;
 //aa.debugLog("set 3");
 return true;
 }




 function rtcStatsPeek (handle,wkindex,index)
 {
 var obj,cob,six;
 if((obj=rtcGet(handle))==null) { return null; }
 if(wkindex<0||wkindex>=obj.vars.stats_ray.length) { return null; }
 cob=obj.vars.stats_ray[wkindex];
 if(index<0||index>=cob.length) { return null; }
 six=cob[index];
 rtcGet(handle);
 return six;
 }


 function rtcStatsDiscard (handle,wkindex)
 {
 var obj,cob;//,rt;
 if((obj=rtcGet(handle))==null) { return null; }
 if(wkindex<0||wkindex>=obj.vars.stats_ray.length) { return null; }
 cob=obj.vars.stats_ray[wkindex];
 cob.shift();
 rtcGet(handle);
 return true;
 }





 function rtcStatsGetStatus (handle)
 {
 var obj,status,val,dat,str,txt,ok,br,bx,cob;
 if((obj=aa.rtcGet(handle))==null) { return false; }
 while(1)
  {
  if(obj.vars.stats_prosync_handle==0) { break; }
  status=aa.promiseStatus(obj.vars.stats_prosync_handle);
  if(status==undefined)
   {
   if((rt=aa.promiseDestroy(obj.vars.stats_prosync_handle))!=true) { }//aa.debugAlert(); }
   obj.vars.stats_prosync_handle=0;
   obj.vars.stats_in_promise=false;
   return true;
   }
  if(status.state==undefined)          { aa.debugAlert(); }
  if(status.state==PROMISE_pending)    { break; }
  if(status.state==PROMISE_rejected)   { aa.debugAlert(status.err+" "+status.etc); }
  if(status.state!=PROMISE_completed)  { aa.debugAlert(status.state); break;  }
  val=status.val;
  val.forEach(report=>
   {
   if(report.kind!="audio"&&report.kind!="video")              { return; }
   cob=null;
   //https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_Statistics_API
   switch(report.type) //https://developer.mozilla.org/en-US/docs/Web/API/RTCStats/type
    {
    case "inbound-rtp":
    case "outbound-rtp":
    case "track":  // obsolete
    case "media-source":
    case "remote-inbound-rtp":
    case "remote-outbound-rtp":
    //aa.debugLog("used report.type="+report.type);
    //aa.debugLog(report);
    cob={};
    cob.type="rtcreport";
    cob.what=report.type;
    cob.id=report.id;
    cob.timestamp=report.timestamp;

    cob.ms=aa.timerMsRunning();
    cob.micro=aa.timerMicroRunning();
    cob.cycle=aa.main_state.cycle;

    cob.kind=report.kind;
    cob.trackid=report.trackId?report.trackId:null;
    cob.inbound=null;
    cob.ssrc=null;

    while(1)
     {
     if(cob.what=="inbound-rtp")         { cob.inbound=true; break; }
     if(cob.what=="outbound-rtp")        { cob.inbound=false; break; }
     if(cob.what=="remote-inbound-rtp")  { cob.inbound=true; break; }
     if(cob.what=="remote-outbound-rtp") { cob.inbound=false; break; }
     if(cob.what=="track"&&report.remoteSource==true)  { cob.inbound=true; break; }
     if(cob.what=="track"&&report.remoteSource==false) { cob.inbound=false; break; }
     break;
     }
    cob.wkint=0;
    while(1)
     {
     if(cob.what=="inbound-rtp"&&cob.kind=="audio")         { cob.wkint=1;  break; }
     if(cob.what=="inbound-rtp"&&cob.kind=="video")         { cob.wkint=2;  break; }
     if(cob.what=="outbound-rtp"&&cob.kind=="audio")        { cob.wkint=3;  break; }
     if(cob.what=="outbound-rtp"&&cob.kind=="video")        { cob.wkint=4;  break; }
     if(cob.what=="remote-inbound-rtp"&&cob.kind=="audio")  { cob.wkint=5;  break; }
     if(cob.what=="remote-inbound-rtp"&&cob.kind=="video")  { cob.wkint=6;  break; }
     if(cob.what=="remote-outbound-rtp"&&cob.kind=="audio") { cob.wkint=7;  break; }
     if(cob.what=="remote-outbound-rtp"&&cob.kind=="video") { cob.wkint=8;  break; }
     if(cob.what=="media-source"&&cob.kind=="audio")        { cob.wkint=9; break; }
     if(cob.what=="media-source"&&cob.kind=="video")        { cob.wkint=10; break; }
     if(cob.what=="track"&&cob.inbound==true&&cob.kind=="audio") { cob.wkint=11; break; }
     if(cob.what=="track"&&cob.inbound==true&&cob.kind=="video") { cob.wkint=12; break; }
     if(cob.what=="track"&&cob.inbound==false&&cob.kind=="audio") { cob.wkint=13; break; }
     if(cob.what=="track"&&cob.inbound==false&&cob.kind=="video") { cob.wkint=14; break; }
     alert("cob.what="+cob.what+" cob.kind="+cob.kind);
     break;
     }
    cob.fullname="";
    while(1)
     {
     if(cob.wkint>=1&&cob.wkint<=10) { cob.fullname=cob.what+"-"+cob.kind; break; }
     if(cob.wkint==11)               { cob.fullname=cob.what+"-inbound-"+cob.kind; break; }
     if(cob.wkint==12)               { cob.fullname=cob.what+"-inbound-"+cob.kind; break; }
     if(cob.wkint==13)               { cob.fullname=cob.what+"-outbound-"+cob.kind; break; }
     if(cob.wkint==14)               { cob.fullname=cob.what+"-outbound-"+cob.kind; break; }
     aa.debugAlert();
     break;
     }

    cob.report=report;
    if(cob.report.ssrc!==undefined) { cob.ssrc=cob.report.ssrc;  }

    ///aa.debugLog("STATS QIEI WRO");
    ////aa.queueWrite(obj.vars.stats_queue_handle,cob);
    ///obj.vars.stats_queue_status=aa.queueStatus(obj.vars.stats_queue_handle);

    if(cob.wkint>=0)
     {
     if(cob.wkint<obj.vars.stats_ray.length)
      {
      obj.vars.stats_ray[cob.wkint].push(cob);
      }
     }


    break;

    default:
    aa.debugLog("unused report.type="+report.type);
    alert("unused report.type="+report.type);
    break;
    }
   });

  if((rt=aa.promiseDestroy(obj.vars.stats_prosync_handle))!=true) { aa.debugAlert(); }
  obj.vars.stats_prosync_handle=0;
  obj.vars.stats_in_promise=false;
  val=null;
  return true;
  }
 return false;
 }








//-----------------------------------------------------------------------



 function staterNew ()
 {
 var obj;
 obj={};
 obj.type="stater";
 obj.version=1;
 obj.is_running=true;
 obj.is_exiting=false;
 obj.cycle=-1;
 obj.tim=aa.timerMsRunning();
 obj.ms=0;
 obj.speed_req=1;
 obj.speed_got=0;
 obj.stage=0;
 return obj;
 }





 function staterProc (obj,proc)
 {
 var msr;

 obj.ms=aa.timerMsRunning()-obj.tim;
 ///console.log(obj.ms/1000);
 //console.log(obj.cycle/(obj.ms/1000));
 obj.speed_got=parseInt(obj.cycle/(obj.ms/1000));
 //console.log(obj.speed_got+" "+obj.speed_req);
 if((obj.speed_got)>(obj.speed_req)) { return false; }
 //console.log("ok");
 obj.cycle++;
 if(obj.is_exiting!=true&&obj.is_running!=false)
  {
  if(proc) {   proc();  }
  }
 return true;
 }




 function staterExit (obj,code)
 {
 if(obj.is_running!=true)  { return false; }
 if(obj.is_exiting!=false) { return true; }
 obj.is_exiting=true;
 return true;
 }




 function staterStageSet (obj,stage)
 {
 var ps;
 ps=obj.stage;
 if(ps!=stage)  { }
 obj.stage=stage;
 }




 function staterStageAdjust (obj,by)
 {
 staterStageSet(obj.stage+by);
 }





 function staterCycleGet (obj)
 {
 return obj.cycle;
 }



 function staterCyclePulse (obj,stride)
 {
 var s1;
 s1=stride|0;
 if(s1<1) { sl=1; }
 if((obj.cycle%s1)==0)  {  return true;  }
 return false;
 }




//-----------------------------------------------------------------------



 function miscTextFileRead (file)
 {
 var raw,ttt;
 raw=new XMLHttpRequest();
 raw.file_name=file;
 raw.text_lines=null;
 raw.mime=null;
 raw.open("GET",file,false);
 raw.onreadystatechange=function()
  {
  if(raw.readyState===4)
   {
   if(raw.status===200||raw.status==0)
    {
    ttt=raw.responseText;
    ///raw.text_lines=ttt.split("\n");
    raw.text_lines=ttt.split(/\r\n|\r|\n/);

    raw.mime=raw.getResponseHeader("Content-Type");

    ///console.log(ttt.length);
    ///raw.text_lines=raw.text_lines.split("\n");
    ///raw.text_lines=raw.responseText.split("\n");
    ///console.log("a="+raw.text_lines.length);
   /// ttt=raw.responseText;
    ///ttt=ttt.replace(/\r\n|\r/g, " ");
    //o.replace(/\r?\n|\r/g, " "); /
    //raw.text_lines=raw.responseText.split(/\r?\n/).filter(element=>element);
    ///raw.text_lines=ttt.split(/\r?\n/).filter(element=>element);
    ///console.log("b="+raw.text_lines.length);
    //console
    }
   else                                 {  alert(raw.status);    }
   }
  }
 raw.send(null);
 return raw;
 }



//-----------------------------------------------------------------------

 function widgetObjInit ()
 {
 if(Object.keys(widget_obj).length!=0) { return; }
 widget_obj.is_init=true;
 }



//-----------------------------------------------------------------------



 function mainObjInit ()
 {
 var state,vars;
 if(Object.keys(main_obj).length!=0) { return; }
 state={};
 vars={};
 state.is_running=false;
 state.is_exiting=false;
 state.version=0;
 state.speed=0;
 state.proc=null;
 state.thread_id=0;
 state.worker_array=[];
 main_obj.state=state;
 main_obj.vars=vars;
 main_obj.vars.app={};
 main_obj.initial_dmm=null;
 main_obj.is_init=true;
 }






 function mainClickProc (event)
 {
 if(event==null) { alert("epnull"); return; }
 switch(event.type)
  {
  case "click":
  case "touchend":
  case "tap":
  aa.main_state.initial_click=true;//click_count++;
  break;
  }
 return true;
 }



//
//aaJs.js?1662731000998:9608
//[Intervention] Ignored attempt to cancel a touchmove event with cancelable=false,
//for example because scrolling is in progress and cannot be interrupted.
//document.addEventListener.passive @ aaJs.js?1662731000998:9608

///aajs.js?851366575:11783 [Intervention] Ignored attempt to cancel a touchstart event with cancelable=false,
///for example because scrolling is in progress and cannot be interrupted.

 function mainStart (ver,spd,mainproc)
 {
 if(main_obj.state.is_running!=false) { return false; }

 if(1) //march
 {
 document.addEventListener('touchstart',function(event)
  {
  if(event.scale!==1) { event.preventDefault(); } }, { passive: false });

 document.addEventListener('touchmove',function(event)
  {
  if(event.scale!==1) { event.preventDefault(); }  }, { passive: false });

 document.addEventListener('touchend',function(event)
  {
  if(event.scale!==1) { event.preventDefault(); }  }, { passive: false });

 document.addEventListener('pointerdown',function(event)
  {
  if(event.scale!==1) { event.preventDefault(); }  }, { passive: false });

 document.addEventListener('pointermove',function(event)
  {
  if(event.scale!==1) { event.preventDefault(); }  }, { passive: false });

 document.addEventListener('pointerup',function(event)
  {
  if(event.scale!==1) { event.preventDefault(); }  }, { passive: false });
 }

 ///if(1) //march pork
  if(1)// burp
  {
  document.body.style.touchAction="none";
  document.body.style.pointerEvents="none";
  document.documentElement.style.touchAction="none";
  document.documentElement.style.pointerEvents="none";
  }

 //debugger;
 //clientWidth||window.innerWidth||document.body.clientWidth;
// document.body.style.touchAction="pan-y";
 main_obj.state.version=ver;
 main_obj.state.cycle=-1;
 main_obj.state.thread_id=0;
 main_obj.state.speed_req=spd;
 main_obj.state.speed_got=0;
 main_obj.state.speed_to=0;
 main_obj.state.proc=mainproc;
 main_obj.state.is_running=true;
 main_obj.state.stage=0;
 main_obj.state.initial_click=false;

 if(1)
  {
  mainWorkerAdd("socketYield",socketYield,1);
  main_obj.state.click_listeners=true;
  window.addEventListener("touchend",mainClickProc);
  window.addEventListener("click",mainClickProc);
  window.addEventListener("tap",mainClickProc);
  }
 return true;
 }








 function mainWorkerAdd (name,proc,step)
 {
 var work={};
 work.name=name;
 work.proc=proc;
 work.step=step;
 main_obj.state.worker_array.push(work);
 return true;
 }





 function mainWorkerRemove (name)
 {
 var i,work;
 for(i=0;i<main_obj.state.worker_array.length;i++)
  {
  work=main_obj.state.worker_array[i];
  if(work.proc==undefined||work.proc==null) { continue; }
  if(work.name!=name)                       { continue; }
  work.name=null;
  work.proc=null;
  work.step=0;
  return true;
  }
 return false;
 }






 function mainWorkerStep ()
 {
 var i,work,rlen;
 rlen=main_obj.state.worker_array.length;
 if(rlen<=0) { return true; }
/// if(main_obj.state.worker_array.length>=2) { console.log(main_obj.state.worker_array.length); alert(); }
 for(i=0;i<rlen;i++)//main_obj.state.worker_array.length;i++)
  {
  work=main_obj.state.worker_array[i];
  if(work.proc==undefined||work.proc==null) { continue; }
  if(work.step<1)                           { continue; }
  if(((main_obj.state.cycle%work.step)==(work.step-1))||(main_obj.state.cycle==1))
   {
   ///if(rlen>=2) console.log(i+" "+work.name+"  "+aa.main_state.cycle);
   work.proc();
   }
  }
 return true;
 }





 function mainProc ()
 {
 var msr,dif,del;
 main_obj.state.cycle++;
 //if((main_obj.state.cycle%10)==9) { alert(main_obj.state.cycle); }
 mainWorkerStep();
 if(aa.main_state.initial_click==true)
  {
  if(main_obj.state.click_listeners==true)
   {
   window.removeEventListener("touchend",mainClickProc);
   window.removeEventListener("click",mainClickProc);
   window.removeEventListener("tap",mainClickProc);
   //if(1) //march pork
   if(0)// burp
    {
    document.body.style.touchAction="none";
    document.body.style.pointerEvents="none";
    document.documentElement.style.touchAction="none";
    document.documentElement.style.pointerEvents="none";
    }
   }
  main_obj.state.click_listeners=false;
  //document.body.style.touchAction="none";
  }
 if(main_obj.state.cycle>120)
  {
  ///alert(main_obj.state.cycle+"  "+main_obj.state.stage+" "+main_obj.state.is_exiting+"  "+main_obj.state.is_running+"  ");
  //if(app.beam!==undefined&&app.beam.sh1!==undefined) { alert(app.beam.sh1.stage); }
  }
 if(main_obj.state.is_exiting!=true&&main_obj.state.is_running!=false)
  {
  main_obj.state.proc();
  }
 msr=aa.timerMsRunning()/1000;
 main_obj.state.speed_got=(main_obj.state.cycle/msr)>>0;
//main_obj.state.speed_to=((1000/main_obj.state.speed_req)>>0)+2;
 main_obj.state.speed_to=(((1000/main_obj.state.speed_req)*0.9)>>0);
 if((main_obj.state.cycle%30)==0)
  {
  ///console.log("req="+main_obj.state.speed_req+" got="+main_obj.state.speed_got+"  to="+main_obj.state.speed_to);//spddif="+dif+" to="+main_obj.state.speed_to);
  }
 /*
 dif=main_obj.state.speed_req-main_obj.state.speed_got;
 if(dif!=0&&1&&((main_obj.state.cycle%30)==0))
  {
  console.log("req="+main_obj.state.speed_req+" got="+main_obj.state.speed_got+"  dif="+dif+" to="+main_obj.state.speed_to);//spddif="+dif+" to="+main_obj.state.speed_to);
  del=+dif;
  if(del>8)  { del=8; }
  del*=3;
  if(dif>+2)   { main_obj.state.speed_to-=del;  }
  else
  if(dif<-2)   { main_obj.state.speed_to+=del; }
  if(main_obj.state.speed_to<6) { main_obj.state.speed_to=6; }
  }
  */
 return true;
 }










 function mainRun ()
 {
 var el;
 main_obj.state.thread_id=window.setTimeout(function()
  {
  clearTimeout(main_obj.state.thread_id);
  main_obj.state.thread_id=0;
  mainProc();


  if(1&&(aa.iface_obj.is_started==true&&aa.iface_obj.blit_hz<60))
   {
   if((window.document.hasFocus()==false||document.hidden==true))  {   aa.ifaceBlit(-1);     }
   }

  if(main_obj.state.is_running==false)
   {
   if(main_obj.state.is_exiting==true) { alert("dl="+aa.debugLineNumber()); }
   }
  if(main_obj.state.is_exiting==true)
   {
   if(main_obj.state.is_running==false) { alert("dl="+aa.debugLineNumber()); }
   main_obj.state.is_running=false;
   }
  if(main_obj.state.is_running==true)
   {
   if(main_obj.initial_dmm==null)    {    main_obj.initial_dmm=aa.debugMemoryUsage();    }
   mainRun();
   }
  else
   {
   aa.debugLogger(5,"global kill");
   aa.handleGlobalKill();
   aa.handleGlobalDump();
   aa.debugLogger(5,JSON.stringify(aa.debugMemoryUsage(),0,2));
   }
  },main_obj.state.speed_to);
 return true;
 }






 function mainExit (code)
 {
 if(main_obj.state.is_running!=true) { return false; }
 if(main_obj.state.is_exiting!=false) { return true; }
 main_obj.state.is_exiting=true;
 return true;
 }






 function mainProcSet (proc)
 {
 main_obj.state.proc=proc;
 return true;
 }




 function mainSpeedSet (speed)
 {
 var msr;
 main_obj.state.speed_req=speed;
 //main_obj.state.speed_to=parseInt((1000/main_obj.state.speed_req));
 msr=aa.timerMsRunning()/1000;
 main_obj.state.speed_got=(main_obj.state.cycle/msr)>>0;
 main_obj.state.speed_to=(((1000/main_obj.state.speed_req)*0.9)>>0);
 }



 function mainStageAdjust (by)
 {
 main_obj.state.stage+=parseInt(by);
 }





 function mainStageSet (stage)
 {
 //var ps;
 //ps=main_obj.state.stage;
// if(ps!=stage) { aa.debugAlert("mainStageSet "+ps+" to "+stage); }
 main_obj.state.stage=stage;
 }




 function mainStageGet ()
 {
 return main_obj.state.stage;
 }




 function mainCycleGet ()
 {
 return main_obj.state.cycle;
 }






 function mainCyclePulse (stride)
 {
 var s1;
 s1=stride|0;
 if(s1<1) { s1=1; }
 //if((main_obj.state.cycle%s1)==(s1-1))  {  return true;  }
 if((main_obj.state.cycle%s1)==0)  {  return true;  }
 return false;
 }





//-----------------------------------------------------------------------


 function mainPluginLoad (url,id)
 {
 var obj,p,s,scr,e,mat,so,ep;
 obj={};
 obj.type="plugin";
 obj.head=document.head;
 obj.state=0;
 obj.is_ready=false;
 obj.vars={};
 obj.res=null;
 obj.api=null;
 obj.api_procs=null;
 obj.script=document.createElement('script');
 obj.script.type='text/javascript';
 obj.script.defer=true;
 obj.script.id=id;
 obj.script.src=url+"?"+aa.numRand(10000000);

 function _eventPath(evt)
  {
  var path=(evt.composedPath&&evt.composedPath())||evt.path,target=evt.target;
  if(path!=null)      { return(path.indexOf(window)<0)?path.concat(window):path; }
  if(target===window) { return [window]; }
  function _getParents(node,memo)
   {
   memo=memo||[];
   var pn=node.parentNode;
   if(!pn) { return memo; }
   return _getParents(pn,memo.concat(pn));
   }
  return [target].concat(_getParents(target),window);
  }

 function _pluginErrorHandler(event)
  {
  event.preventDefault();
  obj.is_ready=true;
  obj.res="err";
  obj.state=3;
  };
 window.addEventListener('error',_pluginErrorHandler);

 obj.script.onload=function(event)
  {
  ep=_eventPath(event);
  for(p=0;p<ep.length;p++)
   {
   if(obj.state==1) { break; }
   if(typeof ep[p]==='object')
    {
    if(ep[p].scripts)
     {
     for(e=0;e<ep[p].scripts.length;e++)
      {
      if((so=aa.stringIndexOf(true,ep[p].scripts[e].src,obj.script.src,0))<0) { continue; }
      obj.state=1;
      break;
      }
     }
    }
   }
  if(obj.state==1)
   {
   function _getAllProcs(object)
    {
    return Object.getOwnPropertyNames(object).filter(function(property) { return typeof object[property]=='function'; });
    }
   obj.api=pluginEntry();
   obj.api_procs=_getAllProcs(obj.api);
   obj.is_ready=true;
   obj.res="ok";
   obj.state=2;
   }
  else
   {
   obj.is_ready=true;
   obj.res="err";
   obj.state=3;
   }
  };
 obj.head.appendChild(obj.script);
 return obj;
 }






 function mainPluginFree (obj)
 {
 var elem,res,eid;
 if(obj.type!="plugin") { return false; }
 elem=document.getElementById(obj.script.id);
 elem.parentNode.removeChild(elem);
 obj.type="";
 obj.state=0;
 obj.is_ready=false;
 obj.res=null;
 obj.api=null;
 obj.api_procs=null;
 obj.vars={};
 obj.head={};
 obj.script={};
 delete obj.api;
 delete obj.api_procs;
 delete obj.head;
 delete obj.script;
 delete obj.vars;
 delete obj.state;
 delete obj.is_ready;
 delete obj.res;
 delete obj.type;
 obj={};
 obj=null;
 return true;
 }



//-----------------------------------------------------------------------





 function mainWasmLoad (url,pages)
 {
 var obj;
 if(pages<1||pages>4096) { return null; }
 obj={};
 obj.type="wasm";
 obj.promise_object=null;
 obj.promise_handle=0;
 obj.url=url;
 obj.this_stage=100;
 obj.prev_stage=0;
 obj.next_stage=0;
 obj.is_error=false;
 obj.is_ready=false;
 obj.err=0;
 obj.fetched=null;
 obj.import_object=null;
 obj.array_buffer=null;
 obj.pages=pages;
 obj.memory=null;
 obj.xports=null;
 obj.export_ray=null;
 obj.import_ray=null;
 obj.heap=null;
 obj.heap_base=null;
 //----------------------
 obj.txt_encoder=new TextEncoder();
 obj.txt_decoder=new TextDecoder();
 //----------------------
 obj.gra_off=0;
 obj.gra_ray=[];
 return obj;
 }









 function mainWasmStatus (obj)
 {
 var status,rt,toff,func;
 if(obj===undefined)  { return false; }
 if(obj.type!="wasm") { return false; }
 switch(obj.this_stage)
  {
  case 50:
  if((rt=aa.promiseDestroy(obj.promise_handle))!=true) { aa.debugAlert(); }
  obj.promise_handle=0;
  obj.this_stage=obj.next_stage;
  break;



  case 66:
  obj.is_error=true;
  aa.debugAlert(status.err+" "+status.etc);
  if((rt=aa.promiseDestroy(obj.promise_handle))!=true) { aa.debugAlert(); }
  obj.err=obj.prev_stage;
  obj.promise_handle=0;
  obj.this_stage=666;
  break;



  case 666:
  break;



  case 100:
  obj.promise_object=fetch(obj.url);
  if((obj.promise_handle=aa.promiseCreate(obj.promise_object,obj.this_stage))==0) { aa.debugAlert(); }
  obj.this_stage=120;
  break;



  case 120:
  status=aa.promiseStatus(obj.promise_handle);
  if(status.state==PROMISE_rejected)  { obj.prev_stage=obj.this_stage; obj.this_stage=66; break; }
  if(status.state!=PROMISE_completed) { break;  }
  obj.fetched=status.val;
  obj.this_stage=50;
  obj.next_stage=200;
  break;



  case 200:
  obj.promise_object=obj.fetched.arrayBuffer();
  if((obj.promise_handle=aa.promiseCreate(obj.promise_object,obj.this_stage))==0) { aa.debugAlert(); }
  status=aa.promiseStatus(obj.promise_handle);
  obj.this_stage=240;
  break;



  case 240:
  status=aa.promiseStatus(obj.promise_handle);
  if(status.state==PROMISE_rejected)  { obj.prev_stage=obj.this_stage; obj.this_stage=66; break; }
  if(status.state!=PROMISE_completed) { break;  }
  obj.array_buffer=status.val;
  obj.this_stage=50;
  obj.next_stage=300;
  break;




  case 300:
  obj.promise_object=WebAssembly.compile(obj.array_buffer);
  if((obj.promise_handle=aa.promiseCreate(obj.promise_object,obj.this_stage))==0) { aa.debugAlert(); }
  status=aa.promiseStatus(obj.promise_handle);
  obj.this_stage=340;
  break;



  case 340:
  status=aa.promiseStatus(obj.promise_handle);
  if(status.state==PROMISE_rejected)  { aa.debugAlert(status.err+" "+status.etc); obj.prev_stage=obj.this_stage; obj.this_stage=66; break; }
  if(status.state!=PROMISE_completed) { break;  }
  obj.compiled=status.val;
  obj.this_stage=50;
  obj.next_stage=400;
  break;



  case 400:
  obj.memory=new WebAssembly.Memory({initial:obj.pages});
  obj.heap=new Uint8Array(obj.memory.buffer);
  obj.this_stage=500;
  break;




  case 500:
  obj.import_obj=
   {
   env:
    {
    ext_consoleLog:    function(arg)         { console.log(arg); },
    ext_consoleAlert:  function(arg)         { alert(arg);       },
    ext_consoleText:   function(arg)         { console.log(arg); },
    ext_consoleFog:    function(arg,len)     { console.log(len+" "+arg); },

    //------------------------------------------------------------------------------

    ext_sin:            function(x)           { return(Math.sin(x));     },
    ext_log:            function(x)           { return(Math.log(x));     },
    ext_cos:            function(x)           { return(Math.cos(x));     },
    ext_atan2:          function(x,y)         { return(Math.atan2(x,y)); },
    ext_log2:           function(x)           { return(Math.log2(x));    },
    ext_round:          function(x)           { return(Math.round(x));   },
    ext_sqrt:           function(x)           { return(Math.sqrt(x));    },
    ext_pow:            function(x,y)         { return(Math.pow(x,y));   },

    //------------------------------------------------------------------------------

    memory:obj.memory,
    memb:obj.heap,
    },
   };
  obj.this_stage=520;
  break;



  case 520:
  obj.promise_object=WebAssembly.instantiate(obj.compiled,obj.import_obj);
  if((obj.promise_handle=aa.promiseCreate(obj.promise_object,obj.this_stage))==0) { aa.debugAlert(); }
  obj.this_stage=540;
  break;




  case 540:
  status=aa.promiseStatus(obj.promise_handle);
  if(status.state==PROMISE_rejected)  { aa.debugAlert(); obj.prev_stage=obj.this_stage; obj.this_stage=66; break; }
  if(status.state!=PROMISE_completed) { break;  }
  obj.instance=status.val;
  obj.this_stage=50;
  obj.next_stage=600;
  break;



  case 600:
  obj.export_ray=WebAssembly.Module.exports(obj.compiled);
  obj.import_ray=WebAssembly.Module.imports(obj.compiled);
  obj.xports=obj.instance.exports;
  func=obj.instance.exports.wasmMain;
  toff=typeof func;
  if(toff!=="function") {  obj.is_error=true;  obj.err=100;  obj.this_stage=666;  break;   }
  func(obj.memory.buffer.byteLength);
  obj.is_ready=true;
  obj.this_stage=1000;
  return true;



  case 1000:
  return true;
  }
 return false;
 }





if(0)
{



 function mainWasmGraReset (obj)
 {
 var g,gl,gra;
 if(obj.type!="wasm")   { return false; }
 if(obj.is_ready!=true) { return false; }
 gl=obj.gra_ray.length;
 for(g=0;g<gl;g++)
  {
  gra=mainWasmGraGet(obj,index);
  gra.mem=null;
  }
 obj.gra_off=0;
 obj.gra_ray=[];
 return true;
 }





 function mainWasmGraDump (obj)
 {
 var g,gl,gra;
 if(obj.type!="wasm")   { return false; }
 if(obj.is_ready!=true) { return false; }
 gl=obj.gra_ray.length;
 for(g=0;g<gl;g++)
  {
  gra=mainWasmGraGet(obj,g);
  console.log("dump "+g+" / "+gl);
  console.log(JSON.stringify(gra,0));
  }
 return true;
 }






 function mainWasmGraAdd (obj,type,len)
 {
 var off,gog,gra,add,nam;
 if(obj.type!="wasm")   { return false; }
 if(obj.is_ready!=true) { return false; }
 off=obj.gra_off;
// console.log(type+" "+len);
 switch(type)
  {
  case "s8":
  case "i8":
  case 1:
  if(type==1) { type="s8";  }
  nam="Int8Array";
  add=(len*Int8Array.BYTES_PER_ELEMENT);
  gra=new Int8Array(obj.memory.buffer,off,add);
  break;


  case "u8":
  case 2:
  if(type==2) { type="u8";  }
  nam="Uint8Array";
  add=(len*Uint8Array.BYTES_PER_ELEMENT);
  gra=new Uint8Array(obj.memory.buffer,off,add);
  break;


  case "s16":
  case "i16":
  case 3:
  if(type==3) { type="s16";  }
  nam="Int16Array";
  add=(len*Int16Array.BYTES_PER_ELEMENT);
  gra=new Int16Array(obj.memory.buffer,off,add);
  break;


  case "u16":
  case 4:
  if(type==3) { type="u16";  }
  nam="Uint16Array";
  add=(len*Int16Array.BYTES_PER_ELEMENT);
  gra=new Uint16Array(obj.memory.buffer,off,add);
  break;


  case "s32":
  case "i32":
  case 5:
  if(type==5) { type="s32";  }
  nam="Int32Array";
  add=(len*Int16Array.BYTES_PER_ELEMENT);
  gra=new Int32Array(obj.memory.buffer,off,add);
  break;


  case "u32":
  case 6:
  if(type==6) { type="u32";  }
  nam="Uint32Array";
  add=(len*Uint32Array.BYTES_PER_ELEMENT);
  gra=new Uint32Array(obj.memory.buffer,off,add);
  break;


  case "f32":
  case 7:
  if(type==7) { type="f32";  }
  nam="Float32Array";
  add=(len*Uint32Array.BYTES_PER_ELEMENT);
  gra=new Float32Array(obj.memory.buffer,off,add);
  break;


  case "f64":
  case 8:
  if(type==8) { type="f64";  }
  nam="Float64Array";
  add=(len*Float64Array.BYTES_PER_ELEMENT);
  gra=new Float64Array(obj.memory.buffer,off,add);
  break;


  case "s64":
  case "i64":
  case 9:
  if(type==9) { type="s64";  }
  nam="BigInt64Array";
  add=(len*Float64Array.BYTES_PER_ELEMENT);
  gra=new BigInt64Array(obj.memory.buffer,off,add);
  break;


  case "u64":
  case 10:
  if(type==10) { type="u64";  }
  nam="BigUint64Array";
  add=(len*BigUint64Array.BYTES_PER_ELEMENT);
  gra=new BigUint64Array(obj.memory.buffer,off,add);
  break;

  case "u8clamped":
  case 11:
  if(type==2) { type="u8clamped";  }
  nam="Uint8ClampedArray";
  add=(len*Uint8ClampedArray.BYTES_PER_ELEMENT);
  gra=new Uint8ClampedArray(obj.memory.buffer,off,add);
  break;

  default:
  return false;
  }

 if(gra.byteOffset!=off) { aa.debugAlert("juke "+off+" "+gra.byteOffset); }
 if(gra.byteLength!=add) { aa.debugAlert("zeee "+add+"  "+len+" "+gra.byteLength); }
 //if(gra.byteLength!=len) { aa.debugAlert("eeke "+len+" "+gra.byteLength); }

 gog={};
 gog.type=type;
 gog.index=obj.gra_ray.length;
 gog.name=nam;
 gog.off=off;
 gog.len=len;
 gog.add=add;
 gog.mem=gra;

 obj.gra_ray.push(gog);//ghra);
 obj.gra_off+=add;
 return obj.gra_ray[gog.index];
 }






 function mainWasmGraGet (obj,index)
 {
 var gra;
 if(obj.type!="wasm")   { return false; }
 if(obj.is_ready!=true) { return false; }
 if(index<0)                   { return null; }
 if(index>=obj.gra_ray.length) { return null; }
 gra=obj.gra_ray[index];
 return gra;
 }


}

//
// function mainWasmGraTextSet (obj,index,string)
// {
// var gr;
// gr=mainWasmGraGet(obj,index);
// if(gr==null||gr==false) { return false; }
// gr.mem.set(obj.txt_encoder.encode(string));
// return true;
// }
//
//
//
//
//
//
//
// function mainWasmGraTextGet (obj,ptr,length)
// {
// var gr;
// gr=mainWasmGraAdd(obj,"u8",length);
// if(gr==null||gr==false) { alert("sl"); return false; }
// //st=obj.txt_decoder.decode(gr.gra)
// gr.mem.set(obj.txt_decoder.decode(ptr));
// return true;
// }
//




//-----------------------------------------------------------------------




 return {
 handle_obj:handle_obj,
 debug_obj:debug_obj,
 promise_obj:promise_obj,
 timer_obj:timer_obj,
 num_obj:num_obj,
 data_obj:data_obj,
 string_obj:string_obj,
 env_obj:env_obj,
 queue_obj:queue_obj,
 pointer_obj:pointer_obj,
 keyboard_obj:keyboard_obj,
 storage_obj:storage_obj,
 gui_obj:gui_obj,
 sprite_obj:sprite_obj,
 iface_obj:iface_obj,
 media_obj:media_obj,
 recorder_obj:recorder_obj,
 video_obj:video_obj,
 socket_obj:socket_obj,
 dsp_obj:dsp_obj,
 bitio_obj:bitio_obj,
 rtc_obj:rtc_obj,
 stater_obj:stater_obj,
 main_obj:main_obj,
 ret:ret,

 geo:geo,
 hancock:hancock,


 virtualLogNew:virtualLogNew,
 virtualLogDelete:virtualLogDelete,
 virtualLogGet:virtualLogGet,
 virtualLogSet:virtualLogSet,

 //debugSpeedTest:debugSpeedTest,
 debugLineNumber:debugLineNumber,
 debugFunctionName:debugFunctionName,
 debugLogFunctionLine:debugLogFunctionLine,
 debugStackUsage:debugStackUsage,
 debugStackGet:debugStackGet,
 debugAlert:debugAlert,
 debugPrompt:debugPrompt,
 debugConfirm:debugConfirm,
 debugLevelSet:debugLevelSet,
 debugClear:debugClear,
 debugGroup:debugGroup,
 debugGroupCollapsed:debugGroupCollapsed,
 debugGroupEnd:debugGroupEnd,
 debugLog:debugLog,
 debugLoggerLevelSet:debugLoggerLevelSet,
 debugLogger:debugLogger,
 debugExpandedLog:debugExpandedLog,
 debugFx:debugFx,
 debugMemoryUsage:debugMemoryUsage,
 debugGarbageGenerate:debugGarbageGenerate,
 debugGarbageClean:debugGarbageClean,


 promiseObjectNew:promiseObjectNew,
 promiseCreate:promiseCreate,
 promiseDestroy:promiseDestroy,
 promiseGet:promiseGet,
 promiseStatus:promiseStatus,


 timerSleep:timerSleep,
 timerTikNow:timerTikNow,
 timerTikElapsed:timerTikElapsed,
 timerMsRunning:timerMsRunning,
 timerMsElapsed:timerMsElapsed,
 timerMicroRunning:timerMicroRunning,
 timerMicroElapsed:timerMicroElapsed,
 timerTimeoutSet:timerTimeoutSet,
 timerTimeoutReset:timerTimeoutReset,
 timerTimeoutTest:timerTimeoutTest,
 timerRaterInit:timerRaterInit,
 timerRaterUpdate:timerRaterUpdate,
 timerUnixGet:timerUnixGet,
 timerMsToDuration:timerMsToDuration,

 numRandFloat:numRandFloat,
 numRand:numRand,
 numRandValue:numRandValue,
 numRandValueEquals:numRandValueEquals,
 numFixed:numFixed,
 numPercentOf:numPercentOf,
 numPercentIs:numPercentIs,
 numPercentIsOf:numPercentIsOf,
 numPad:numPad,
 numIntToHex:numIntToHex,
 numIntToBinary:numIntToBinary,
 numPrecision:numPrecision,
 numRound:numRound,
 numRoundPlaces:numRoundPlaces,
 numFloatFormat:numFloatFormat,
 numIsWhole:numIsWhole,
 numBitGet:numBitGet,
 numBitSet:numBitSet,
 numBitClear:numBitClear,
 numBitToggle:numBitToggle,
 numDegreesToRadian:numDegreesToRadian,
 numRadianToDegrees:numRadianToDegrees,
 numDistanceGet:numDistanceGet,
 numAngleGet:numAngleGet,
 numTriangleAreaGet:numTriangleAreaGet,
 numIsPointInTriangle:numIsPointInTriangle,
 numVelocityGet:numVelocityGet,
 numRotate:numRotate,
 numClamp:numClamp,


 dataArrayCreate:dataArrayCreate,
 dataArray2DCreate:dataArray2DCreate,
 dataObjectApxSize:dataObjectApxSize,
 dataGlobalExists:dataGlobalExists,
 dataGlobalPropertiesGet:dataGlobalPropertiesGet,
 dataObjectIsPromise:dataObjectIsPromise,
 dataObjectIsEmpty:dataObjectIsEmpty,
 dataObjectIsUndefined:dataObjectIsUndefined,
 dataObjectLength:dataObjectLength,
 dataValueExists:dataValueExists,
 dataValueIsEmpty:dataValueIsEmpty,
 dataValueIsNotEmpty:dataValueIsNotEmpty,
 dataArrayVargs:dataArrayVargs,
 dataArrayUniqueCount:dataArrayUniqueCount,
 dataArrayRotate:dataArrayRotate,
 dataArrayInsert:dataArrayInsert,
 dataArrayRemove:dataArrayRemove,
 dataFloat32ArrayToUint8Array:dataFloat32ArrayToUint8Array,
 dataUint8ArrayToFloat32Array:dataUint8ArrayToFloat32Array,
 dataFloat32ArrayToInt16Array:dataFloat32ArrayToInt16Array,
 dataInt16ArrayToFloat32Array:dataInt16ArrayToFloat32Array,
 dataInt16ArrayToUint8Array:dataInt16ArrayToUint8Array,
 dataUint8ArrayToInt16Array:dataUint8ArrayToInt16Array,
 dataToJson:dataToJson,
 dataToString:dataToString,
 dataJsonParse:dataJsonParse,


 stringHancock:stringHancock,
 stringIndexOf:stringIndexOf,
 stringLastCharGet:stringLastCharGet,
 stringLastCharTrim:stringLastCharTrim,
 stringFirstCharGet:stringFirstCharGet,
 stringFirstCharTrim:stringFirstCharTrim,
 stringInsert:stringInsert,
 stringCharSet:stringCharSet,
 stringDelete:stringDelete,
 stringFill:stringFill,
 stringReverse:stringReverse,
 stringContainsDigits:stringContainsDigits,
 stringSha256:stringSha256,
 stringUuid:stringUuid,
 stringBase64FromUint8:stringBase64FromUint8,
 stringBase64ToUint8:stringBase64ToUint8,
 stringSplitter:stringSplitter,
 stringToLines:stringToLines,
 stringTime:stringTime,
 stringParms:stringParms,
 stringBytesToSize:stringBytesToSize,
 stringCompare:stringCompare,
 stringRandom:stringRandom,
 stringHtmlDecode:stringHtmlDecode,


 envScriptInfoGet:envScriptInfoGet,
 envInfoGet:envInfoGet,
 envBrowserArgByKey:envBrowserArgByKey,
 envBrowserArgByIndex:envBrowserArgByIndex,
 envBrowserArg:envBrowserArg,
 envIsOnline:envIsOnline,
 envDisplayGet:envDisplayGet,
 envDisplayCompareText:envDisplayCompareText,
 envDisplayCompare:envDisplayCompare,

 envTitleSet:envTitleSet,
 envTitleGet:envTitleGet,
 envReload:envReload,
 envGoto:envGoto,
 envFavIconGet:envFavIconGet,
 envFavIconSet:envFavIconSet,
 envManifestInit:envManifestInit,
 envManifestSet:envManifestSet,
 envManifestApply:envManifestApply,
 //envCpuMonitorBegin:envCpuMonitorBegin,
 //envCpuMonitorGet:envCpuMonitorGet,
 envClipboardWrite:envClipboardWrite,
 envClipboardRead:envClipboardRead,
 envClipboardGet:envClipboardGet,


 handleDefine:handleDefine,
 handleCheck:handleCheck,
 handleReset:handleReset,
 handleGet:handleGet,
 handleUse:handleUse,
 handleRemove:handleRemove,
 handleNext:handleNext,
 handleText:handleText,
 handleGlobalDump:handleGlobalDump,
 handleGlobalKill:handleGlobalKill,
 handleCommentSet:handleCommentSet,
 handleCommentGet:handleCommentGet,


 queueCreate:queueCreate,
 queueDestroy:queueDestroy,
 queueGet:queueGet,
 queueWrite:queueWrite,
 queueRead:queueRead,
 queuePeek:queuePeek,
 queuePush:queuePush,
 queuePop:queuePop,
 queueDiscard:queueDiscard,
 queueStatus:queueStatus,


 pointerStart:pointerStart,
 pointerOnEvent:pointerOnEvent,
 pointerPeek:pointerPeek,
 pointerRead:pointerRead,
 pointerStatus:pointerStatus,

 keyboardStart:keyboardStart,
 keyboardPeek:keyboardPeek,
 keyboardRead:keyboardRead,
 keyboardStatus:keyboardStatus,
 keyboardMessageSet:keyboardMessageSet,

 storageCreate:storageCreate,
 storageDestroy:storageDestroy,
 storageRevise:storageRevise,
 storageGet:storageGet,
 storagePurge:storagePurge,
 storageRead:storageRead,
 storageWrite:storageWrite,
 storageRemove:storageRemove,
 storageTuple:storageTuple,
 storageStatus:storageStatus,
 storageQuickRead:storageQuickRead,
 storageQuickWrite:storageQuickWrite,
 storageQuickRemove:storageQuickRemove,
 storageQuickCount:storageQuickCount,


 guiCreate:guiCreate,
 guiDestroy:guiDestroy,
 guiGet:guiGet,
 guiGroupGet:guiGroupGet,
 guiGroupGetById:guiGroupGetById,
 guiIdFind:guiIdFind,
 guiFitSet:guiFitSet,

 guiProbeGet:guiProbeGet,
 guiProbeCompare:guiProbeCompare,
 guiApply:guiApply,
 //kuiRequire:kuiRequire,
 //kuiSettings:kuiSettings,

 guiParentAdd:guiParentAdd,
 guiParentRemove:guiParentRemove,
 guiSizesGet:guiSizesGet,
 guiSizeSet:guiSizeSet,
 guiCursorSet:guiCursorSet,
 guiCssAreaSet:guiCssAreaSet,
 guiCssAreaGet:guiCssAreaGet,
 guiCssRectGet:guiCssRectGet,
 guiCssCordSet:guiCssCordSet,
 guiCssSizeSet:guiCssSizeSet,
 //guiRetinaSet:guiRetinaSet,
 guiElementFromPoint:guiElementFromPoint,
 guiLineHeightGet:guiLineHeightGet,
 guiPixelHeightGet:guiPixelHeightGet,
 guiCanvasImageDataNew:guiCanvasImageDataNew,
 guiCanvasClear:guiCanvasClear,
 guiCanvasReset:guiCanvasReset,
 guiCanvasSave:guiCanvasSave,
 guiCanvasRestore:guiCanvasRestore,
 guiCanvasCompositeOperationFromIndex:guiCanvasCompositeOperationFromIndex,
 guiCanvasCompositeOperationToIndex:guiCanvasCompositeOperationToIndex,
 guiCanvasCompositeOperationSet:guiCanvasCompositeOperationSet,
 guiCanvasCompositeOperationGet:guiCanvasCompositeOperationGet,
 guiCanvasPathBegin:guiCanvasPathBegin,
 guiCanvasPathEnd:guiCanvasPathEnd,
 guiCanvasClip:guiCanvasClip,
 guiCanvasRotate:guiCanvasRotate,
 guiCanvasSmoothingSet:guiCanvasSmoothingSet,
 guiCanvasFontMatch:guiCanvasFontMatch,
 guiCanvasFontSet:guiCanvasFontSet,
 guiCanvasFontMeasure:guiCanvasFontMeasure,
 guiCanvasFontMeasureAll:guiCanvasFontMeasureAll,
 guiCanvasTextMeasure:guiCanvasTextMeasure,
 guiCanvasTextMeasureAll:guiCanvasTextMeasureAll,
 guiCanvasFontMeasureEach:guiCanvasFontMeasureEach,
 guiUni:guiUni,
 guiCanvasAlphaSet:guiCanvasAlphaSet,
 guiCanvasImageGet:guiCanvasImageGet,
 guiCanvasImagePut:guiCanvasImagePut,
 guiCanvasImageDraw:guiCanvasImageDraw,
 guiCanvasTextureMapper:guiCanvasTextureMapper,
 guiCanvasScroll:guiCanvasScroll,
 guiCanvasBorder:guiCanvasBorder,
 guiCanvasFill:guiCanvasFill,
 guiCanvasFillFull:guiCanvasFillFull,
 guiCheckeredFill:guiCheckeredFill,
 guiCanvasFillBorder:guiCanvasFillBorder,
 guiCanvasEllipseBorder:guiCanvasEllipseBorder,
 guiCanvasEllipseFill:guiCanvasEllipseFill,
 guiCanvasArcBorder:guiCanvasArcBorder,
 guiCanvasArcFill:guiCanvasArcFill,
 guiCanvasLine:guiCanvasLine,
 guiAngleBetweenTwoCords:guiAngleBetweenTwoCords,
 guiEllipseCordGet:guiEllipseCordGet,
 guiCanvasArrow:guiCanvasArrow,
 guiCanvasArrowLine:guiCanvasArrowLine,
 guiCanvasText:guiCanvasText,
 guiCanvasRounded:guiCanvasRounded,
 guiCanvasRounded2:guiCanvasRounded2,
 guiCanvasTriangle:guiCanvasTriangle,
 guiRadioButton:guiRadioButton,
 guiCheckBox:guiCheckBox,
 guiVScrollBar:guiVScrollBar,
 guiHScrollBar:guiHScrollBar,
 guiCanvasGrid:guiCanvasGrid,
 guiGridToRect:guiGridToRect,
 guiGridToCord:guiGridToCord,
 guiGridFromCord:guiGridFromCord,
 guiCssOpacitySet:guiCssOpacitySet,
 guiCssDisplaySet:guiCssDisplaySet,
 guiCssOutlineSet:guiCssOutlineSet,
 guiRectsGet:guiRectsGet,
 guiEasingInit:guiEasingInit,
 guiEasingStep:guiEasingStep,
 guiEasingHelperInit:guiEasingHelperInit,
 guiEasingHelperStep:guiEasingHelperStep,

 guiRgbaString:guiRgbaString,
 guiRgbaStringCommon:guiRgbaStringCommon,
 guiRgbaStringRand:guiRgbaStringRand,
 guiGridSet:guiGridSet,
 guiXyuvSetEx:guiXyuvSetEx,
 guiRectSet:guiRectSet,
 guiRectAdjust:guiRectAdjust,
 guiRectCopy:guiRectCopy,
 guiAreaSet:guiAreaSet,
 guiAreaAdjust:guiAreaAdjust,
 guiRgbaSet:guiRgbaSet,
 guiRgbaAdjust:guiRgbaAdjust,
 guiRgbaToHsva:guiRgbaToHsva,
 guiRgbaFromString:guiRgbaFromString,
 guiHsvaSet:guiHsvaSet,
 guiHsvaAdjust:guiHsvaAdjust,
 guiHsvaToRgba:guiHsvaToRgba,
 guiPaletteByIndex:guiPaletteByIndex,
 guiPaletteByName:guiPaletteByName,
 guiPaletteGather:guiPaletteGather,
 guiCieDeltae:guiCieDeltae,

 guiSpotPurge:guiSpotPurge,
 guiSpotById:guiSpotById,
 guiSpotAdd:guiSpotAdd,
 guiSpotRemove:guiSpotRemove,
 guiSpotMatch:guiSpotMatch,

 guiFontAvailable:guiFontAvailable,
 guiFontLoad:guiFontLoad,
 guiFontDelete:guiFontDelete,
 guiFontStatus:guiFontStatus,
 guiFontString:guiFontString,
 guiFontFix:guiFontFix,

 guiLenseNew:guiLenseNew,
 guiLenseAreaCalc:guiLenseAreaCalc,
 guiLenseClear:guiLenseClear,
 guiLenseRectSet:guiLenseRectSet,
 guiLenseProject:guiLenseProject,
 guiLenseNeedsPaintSet:guiLenseNeedsPaintSet,
 guiLensePaint:guiLensePaint,


 imageLoaderNew:imageLoaderNew,
 imageLoaderDelete:imageLoaderDelete,

 spriteLoad:spriteLoad,
 spriteRelease:spriteRelease,
 spriteStatus:spriteStatus,
 spriteRectGet:spriteRectGet,
 spritePaint:spritePaint,
 spritePaintByIndex:spritePaintByIndex,

 ifaceStart:ifaceStart,
 ifaceStop:ifaceStop,
 ifaceBlit:ifaceBlit,
 ifaceDisplayChanged:ifaceDisplayChanged,
 ifaceDisplaySizesGet:ifaceDisplaySizesGet,
 ifaceCacheAdd:ifaceCacheAdd,
 ifaceCacheRemove:ifaceCacheRemove,
 ifaceCacheGetById:ifaceCacheGetById,
 ifaceCacheGetByIndex:ifaceCacheGetByIndex,
// ifaceStatus:ifaceStatus,


 mediaErrorEtc:mediaErrorEtc,
 mediaErrObjCreate:mediaErrObjCreate,
 mediaDeviceEnumerator:mediaDeviceEnumerator,
 mediaDeviceLabelClean:mediaDeviceLabelClean,
 mediaCreate:mediaCreate,
 mediaDestroy:mediaDestroy,
 mediaGet:mediaGet,
 mediaAttach:mediaAttach,
 mediaTorchSet:mediaTorchSet,
 mediaStatus:mediaStatus,
 //mediaAudioVolumeSet:mediaAudioVolumeSet,
 //mediaAudioVolumeGet:mediaAudioVolumeGet,
 mediaAudioMuteSet:mediaAudioMuteSet,
 mediaAudioMuteGet:mediaAudioMuteGet,

 mediaSdpFix:mediaSdpFix,
 mediaSdpBitRateSet:mediaSdpBitRateSet,
 mediaSdpManipulate:mediaSdpManipulate,

 recorderCreate:recorderCreate,
 recorderDestroy:recorderDestroy,
 recorderGet:recorderGet,
 recorderStart:recorderStart,
 recorderStop:recorderStop,
 recorderPause:recorderPause,
 recorderSwap:recorderSwap,
 recorderStatus:recorderStatus,
 recorderRead:recorderRead,

 videoLoad:videoLoad,
 videoFree:videoFree,
 videoStatus:videoStatus,
 videoStatusString:videoStatusString,
 videoControlsSet:videoControlsSet,
 videoChange:videoChange,
 videoPause:videoPause,
 videoPlay:videoPlay,
 videoMuteSet:videoMuteSet,
 videoSeekSet:videoSeekSet,
 videoRateSet:videoRateSet,


 socketCreate:socketCreate,
 socketDestroy:socketDestroy,
 socketGet:socketGet,
 socketWrite:socketWrite,
 socketPeek:socketPeek,
 socketRead:socketRead,
 socketDiscard:socketDiscard,
 socketProcess:socketProcess,
 socketStatus:socketStatus,
 socketYield:socketYield,

 dspAudioResample:dspAudioResample,
 dspSineWaveAt:dspSineWaveAt,
 dspZigZag:dspZigZag,
 dspBlockGet:dspBlockGet,
 dspBlockSet:dspBlockSet,
 dspDbCalculate:dspDbCalculate,

 bitioCreate:bitioCreate,
 bitioDestroy:bitioDestroy,
 bitioGet:bitioGet,
 bitioStatus:bitioStatus,
 bitioRead:bitioRead,
 bitioWrite:bitioWrite,

 rtcCreate:rtcCreate,
 rtcDestroy:rtcDestroy,
 rtcGet:rtcGet,
 rtcPromiseCreate:rtcPromiseCreate,
 rtcPromiseClear:rtcPromiseClear,
 rtcStatus:rtcStatus,
 rtcOfferCreate:rtcOfferCreate,
 rtcAnswerCreate:rtcAnswerCreate,
 rtcDescRemoteSet:rtcDescRemoteSet,
 rtcDescLocalSet:rtcDescLocalSet,
 rtcIceCandidateAdd:rtcIceCandidateAdd,
 rtcIceCandidateGet:rtcIceCandidateGet,
 rtcDataChannelFind:rtcDataChannelFind,
 rtcDataChannelGet:rtcDataChannelGet,
 rtcDataChannelCreate:rtcDataChannelCreate,
 rtcDataChannelAdd:rtcDataChannelAdd,
 rtcDataChannelSend:rtcDataChannelSend,
 rtcDataChannelPeek:rtcDataChannelPeek,
 rtcDataChannelDiscard:rtcDataChannelDiscard,
 rtcDataChannelRead:rtcDataChannelRead,
 rtcBitrateChange:rtcBitrateChange,
 rtcStatsGet:rtcStatsGet,
 rtcStatsPeek:rtcStatsPeek,
 rtcStatsDiscard:rtcStatsDiscard,


 staterNew:staterNew,
 staterProc:staterProc,
 staterExit:staterExit,
 staterStageSet:staterStageSet,
 staterStageAdjust:staterStageAdjust,
 staterCycleGet:staterCycleGet,
 staterCyclePulse:staterCyclePulse,

 miscTextFileRead:miscTextFileRead,

 main_vars:main_obj.vars,
 main_state:main_obj.state,
 mainClickProc:mainClickProc,
 mainStart:mainStart,
 mainWorkerAdd:mainWorkerAdd,
 mainWorkerRemove:mainWorkerRemove,
 mainRun:mainRun,
 mainExit:mainExit,
 mainProcSet:mainProcSet,
 mainSpeedSet:mainSpeedSet,
 mainStageAdjust:mainStageAdjust,
 mainStageSet:mainStageSet,
 mainStageGet:mainStageGet,
 mainCycleGet:mainCycleGet,
 mainCyclePulse:mainCyclePulse,
 mainPluginLoad:mainPluginLoad,
 mainPluginFree:mainPluginFree,
 mainWasmLoad:mainWasmLoad,
 mainWasmStatus:mainWasmStatus,

// mainWasmGraReset:mainWasmGraReset,
// mainWasmGraDump:mainWasmGraDump,
// mainWasmGraAdd:mainWasmGraAdd,
// mainWasmGraGet:mainWasmGraGet,
 //mainWasmGraTextSet:mainWasmGraTextSet,
 //mainWasmGraTextSet:mainWasmGraTextGet,

 };

})();


//-----------------------------------------------------------------------





 function aaProfilerStart (space)
 {
 var index,obj,kl;
 if(Object.keys(aa_profiler).length>1) {  return true; } // aa_profiler.is_started counts as a key
 if(space===undefined) { space=1500000; }
 if(space<50000) { space=50000; }
 aa_profiler.is_started=true;
 aa_profiler.msec_base=Date.now();
 //new Date().valueOf();
 aa_profiler.ray=[];
 aa_profiler.global_hits=0;
 aa_profiler.global_names=0;
 aa_profiler.dump_hits=0;
 aa_profiler.index_low=1000000000;
 aa_profiler.index_high=0;
 aa_profiler.space=space;
 for(index=0;index<aa_profiler.space;index++)
  {
  obj={};
  obj.is_frozen=false;
  obj.state=0;
  obj.name="";
  obj.hash=0;
  obj.hits=0;
  obj.flag=0;
  aa_profiler.ray[index]=obj;
  }
 return true;
 }




 function aaProfilerStop ()
 {
 if(Object.keys(aa_profiler).length<=1) { return true; }
 aa_profiler.is_started=false;
 aa_profiler={};
 return true;
 }




 function aaProfilerHashCode (str)
 {
 var i,char,hash=0|0;
 if(str==undefined) { aa.debugAlert(); }
 if(str.length==0) {  return hash;    }
 for(i=0|0;i<str.length;i++)
  {
  char=str.charCodeAt(i);
  hash=((hash<<5)-hash)+char;
  hash=hash&hash;
  }
 if(hash<0) { hash=Math.abs(hash); }
 return hash;
 }





 function aaProfilerHit (name,count)
 {
 var hash,raylen,obj,index,cnt;
 if(aa_profiler.is_started!=true)       { return false; }
 if(Object.keys(aa_profiler).length<=1) { return false; }
// if(aa_profiler.is_started!=true)       { return false; }
 if(arguments.length==2)  { cnt=count; }
 else                     { cnt=1;     }
 if(name==undefined) { return false; }
 if(name=="") { return false; }
 if(cnt<=0)   { return false; }
 raylen=aa_profiler.ray.length;
 //if(name==undefined) aa.debugAlert();
 //if(name==null) aa.debugAlert();
 hash=aaProfilerHashCode(name);
 index=hash%raylen;
 while(cnt--)
  {
  obj=aa_profiler.ray[index];
  if(index<aa_profiler.index_low)  { aa_profiler.index_low=index; }
  if(index>aa_profiler.index_high) { aa_profiler.index_high=index; }
  if(obj.state==0)
   {
   obj.state=1;
   obj.name=name;
   obj.hash=hash;
   obj.hits=1;
   aa_profiler.global_hits++;
   aa_profiler.global_names++;
   }
  else
  if(obj.state==1)
   {
   if(obj.name!=name||obj.hash!=hash) { alert("profilerErr "+obj.name+"  "+name+"  "+index+"  "+obj.hash+"  "+hash+"  increase hash space"); }
   obj.hits++;
   aa_profiler.global_hits++;
   }
  aa_profiler.ray[index]=obj;
  }
 return true;
 }






 function aaProfilerFreeze (name)
 {
 var hash,raylen,obj,index,cnt;
 if(Object.keys(aa_profiler).length<=1) { return false; }
 if(aa_profiler.is_started!=true)       { return false; }
 if(name=="") { return false; }
 cnt=1;
 raylen=aa_profiler.ray.length;
 hash=aaProfilerHashCode(name);
 index=hash%raylen;
 while(cnt--)
  {
  obj=aa_profiler.ray[index];
  if(index<aa_profiler.index_low)  { aa_profiler.index_low=index; }
  if(index>aa_profiler.index_high) { aa_profiler.index_high=index; }
  if(obj.state!=1) { continue; }
  if(obj.name!=name||obj.hash!=hash) { alert("freeze profilerErr "+obj.name+"  "+name+"  "+index+"  "+obj.hash+"  "+hash+"  increase hash space"); }
  //obj.hits++;
  //aa_profiler.global_hits++;
  //aa_profiler.ray[index]=obj;
  //aa_profiler.
  obj.is_frozen=true;
  }
 return true;
 }






//dopathed 0=exclude all pathed names
//         1=include all
//         2=include only pathed

 function aaProfilerDump (minperc,maxperc,minhz,maxhz,dopathed,dostyle,dosummary)
 {
 var raylen,index,obj,txt,str,all,perc,band,remain,num,sio,count,memobj;
 var mperc,speed,msr,secs,now,lines
 //console.log(aa.main_obj.state);
 if(aa.main_obj.state.cycle==0) { return false; }
 if(Object.keys(aa_profiler).length<=1) { return false; }
 if(aa_profiler.is_started!=true)       { return false; }
 now=Date.now();
 raylen=aa_profiler.ray.length;
 mperc=minperc;
 msr=(Date.now()-aa_profiler.msec_base);
 //msr=(new Date().valueOf()-aa_profiler.msec_base);
 all="";
 all+="***************************\r\n";
 if(dosummary)
  {
//  stringBytesToSize (bytes,frac)
//  heap_limit: 4294705152
//  heap_size: 464500407
//  heap_used: 437620527
//  --
//  heap_limit: 4294705152
//  heap_size: 195850850
//  heap_used: 158721338
  memobj=aa.debugMemoryUsage();
//  console.log(aa.main_obj.initial_dmm);
//  console.log(memobj);
  all+="cycle="+aa.main_state.cycle+"    ";
  all+="stage="+aa.main_state.stage+"    ";
  str="ms="+msr+"  ";
  all+=str.padEnd(10)+" ";
  //all+="speed_req/got="+aa.main_state.speed_req+"/"+aa.main_state.speed_got+"\r\n";
  all+="speed="+aa.main_state.speed_req+"/"+aa.main_state.speed_got+"/"+aa.main_state.speed_to+"  ";
  all+="blit="+aa.iface_obj.blit_hz+"hz\r\n";
  all+="global_names="+aa_profiler.global_names+"   global_hits="+aa_profiler.global_hits+"  ";
  all+="dump_hits="+aa_profiler.dump_hits+"  ";
  all+="\r\n";
  all+="init heap size: "+aa.stringBytesToSize(aa.main_obj.initial_dmm.heap_size,0)+"  used: "+aa.stringBytesToSize(aa.main_obj.initial_dmm.heap_used,0)+" ";
  all+="\r\n";
  all+="last heap size: "+aa.stringBytesToSize(memobj.heap_size,0)+"  used: "+aa.stringBytesToSize(memobj.heap_used,0)+" ";
  all+="\r\n";
  //all+="m/m perc="+minperc+"/"+maxperc+"  ";
  //all+="m/m hz="+minhz+"/"+maxhz+"\r\n";
  if(aa_profiler.global_hits>0)   {   all+="---------------------------\r\n";   }
  }
 remain=aa_profiler.global_names;
 band=99.0;
 num=0;
 count=0;
  for(index=aa_profiler.index_low;index<(aa_profiler.index_high+1);index++)
   {
   obj=aa_profiler.ray[index];
   if(obj.state==0)     { continue; }
   if(obj.flag)         { continue; }
   //if(minhits>obj.hits) { continue; }
   if(2>obj.hits)   { continue;  }
   if(dopathed==0)    {    if(obj.name.indexOf("<-")>=0) { continue; }    }
   else
   if(dopathed==1)    {    }
   else
   if(dopathed==2)    {    if(obj.name.indexOf("<-")<0) { continue; }    }
   perc=((100.0/aa_profiler.global_hits)*obj.hits).toFixed(2);
   if(perc>=minperc&&perc<=maxperc)
    {
    secs=msr/1000.0;
    speed=obj.hits/secs;
    if((speed>=minhz&&speed<=maxhz))///&&(maxnum>num))
     {
     if(dostyle==0)
      {
      txt="";
      str=""+count+"";       txt+=str.padEnd(4);
      if(dopathed==0) { str=""+obj.name+"";    txt+=str.padEnd(24-8); }
      else            { str=""+obj.name+"";    txt+=str.padEnd(30-8); }
      str=""+obj.hits+"";    txt+=str.padEnd(9);
      str=""+perc+"%";       txt+=str.padEnd(9);
      speed=speed.toFixed(2);
      str=""+speed+" Hz";     txt+=str.padEnd(8);
      all+=txt+"\r\n";
      count++;
      }
     else
     if(dostyle==1)
      {
      txt="";
      str=""+count+"";       txt+=str.padEnd(4);
      if(dopathed==0) { str=""+obj.name+"";    txt+=str.padEnd(38); }
      else            { str=""+obj.name+"";    txt+=str.padEnd(45); }
      speed=speed.toFixed(2);
      str=""+speed+" Hz";     txt+=str.padEnd(8);
      all+=txt+"\r\n";
      count++;
      }
     else
      {
      txt="";
      str=""+count+"";       txt+=str.padEnd(4);
      if(dopathed==0) { str=""+obj.name+"";    txt+=str.padEnd(35); }
      else            { str=""+obj.name+"";    txt+=str.padEnd(45); }
      speed=speed.toFixed(0);
      str=""+speed+" Hz";     txt+=str.padEnd(6);
      all+=txt+"\r\n";
      count++;
      }
     }
    }
   obj.flag=1;
   num++;
   }
 for(index=aa_profiler.index_low;index<(aa_profiler.index_high+1);index++)
  {
  obj=aa_profiler.ray[index];
  if(obj.state) { obj.flag=0; }
  }
 all+="***************************";
 aa_profiler.dump_hits++;
 lines=all.split(/\r\n|\r|\n/);
 //return all;
 return lines;
 }



//-----------------------------------------------------------------------

 (function(global)
 {
 var startY,enabled,supportsPassiveOption,opts,el,zoom,style,scrolling,overflowY,height;
 var isScrollable,canScroll,curY,isAtTop,isAtBottom,testDiv,isScrollSupported,iNoBounce;
 startY=0;
 enabled=false;
 supportsPassiveOption=false;
 try
  {
  opts=Object.defineProperty({},'passive',
   {
   get: function() { supportsPassiveOption=true;	}
   });
  window.addEventListener('test',null,opts);
  }
 catch(e) {}

 var handleTouchmove=function(evt)
  {
  el=evt.target;
  zoom=window.innerWidth/window.document.documentElement.clientWidth;
  if(evt.touches.length>1||zoom!==1) { return; }
  while(el!==document.body&&el!==document)
   {
   style=window.getComputedStyle(el);
   if(!style) { break; }
   if(el.nodeName==='INPUT'&&el.getAttribute('type')==='range') { return; }
   scrolling=style.getPropertyValue('-webkit-overflow-scrolling');
   overflowY=style.getPropertyValue('overflow-y');
   height=parseInt(style.getPropertyValue('height'),10);
   isScrollable=scrolling==='touch'&&(overflowY==='auto'||overflowY==='scroll');
   canScroll=el.scrollHeight>el.offsetHeight;
   if(isScrollable&&canScroll)
    {
    curY=evt.touches?evt.touches[0].screenY:evt.screenY;
    isAtTop=(startY<=curY&&el.scrollTop===0);
    isAtBottom=(startY>=curY&&el.scrollHeight-el.scrollTop===height);
    if(isAtTop||isAtBottom) { evt.preventDefault(); }
    return;
    }
   el=el.parentNode;
   }
  evt.preventDefault();
  };

  var handleTouchstart=function(evt)
  {
  startY=evt.touches?evt.touches[0].screenY:evt.screenY;
  };

  var enable=function()
  {
  window.addEventListener('touchstart',handleTouchstart,supportsPassiveOption?{ passive:false }:false);
  window.addEventListener('touchmove',handleTouchmove,supportsPassiveOption?{ passive:false }:false);
  enabled=true;
  };


  var disable=function()
  {
  window.removeEventListener('touchstart',handleTouchstart,false);
  window.removeEventListener('touchmove',handleTouchmove,false);
  enabled=false;
  };

 var isEnabled=function()  {  return enabled;  };

 testDiv=document.createElement('div');
 document.documentElement.appendChild(testDiv);
 testDiv.style.WebkitOverflowScrolling='touch';
 isScrollSupported='getComputedStyle' in window&&window.getComputedStyle(testDiv)['-webkit-overflow-scrolling']==='touch';
 document.documentElement.removeChild(testDiv);
 if(isScrollSupported) { enable(); }
 iNoBounce={enable:enable,disable:disable,isEnabled:isEnabled,isScrollSupported:isScrollSupported };
 if(typeof module!=='undefined'&&module.exports) { module.exports=iNoBounce; }
 if(typeof global.define==='function')
  {
  (function(define) { define('iNoBounce',[],function() { return iNoBounce; }); }(global.define));
  }
 else
  {
  global.iNoBounce=iNoBounce;
  }
 }(this));



