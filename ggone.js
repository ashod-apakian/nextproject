//---------------------------------------------------------
// "use strict";
//--------------------------------------------------------


 window.onload=function() { aa.mainStart(cfg_app_version,cfg_app_speed,appProc); aa.mainRun(); };

 var app=aa.main_vars.app;
 var opts;

//---------------------------------------------------------

 window.addEventListener("unhandledrejection",function(reason) { });

//---------------------------------------------------------



 function fgpntFind (fp)
 {
 var mat,f;
 app.fpi=-1;
 if(fp) { mat=fp; }
 else   { mat=app.ei.finger_print; }
 for(f=0;f<fgpnts.length;f++)
  {
  if(mat==fgpnts[f].fp)  { app.fpi=f; return fgpnts[f]; }
  }
 console.log("fp not in whitelist ",app.ei.finger_print);
 return null;
 }



//---------------------------------



 function appYield ()
 {
 var str,lines,i,j,sec,hit;

 if(cfg_profiler_use&&aa_profiler.is_started==false)  {  aaProfilerStart();  }
 sec=aa.main_state.cycle/(1000/(1000/cfg_app_speed));
 hit=false;
 if(sec>(cfg_profiler_hz+app.hz_sec+1)) { hit=true;  app.hz_sec+=(cfg_profiler_hz+1); }

 if(cfg_profiler_use&&aa_profiler.is_started&&hit==true)
  {
  lines=aaProfilerDump(0,100,0,20000000,1,0,0);
  if(lines!=false&&lines.length>2)
   {
   for(i=0;i<lines.length;i++)
    {
    if(i==0)                { continue; }
    if((i+1)==lines.length) { continue; }
    j=5+i;
    //guixVlog(j,1,lines[i]);
    }
   }
  }
 if(app.media)
  {
  for(i=0;i<1;i++) {  mediaYield(); }
  }
 if(app.bb)
  {
  for(i=0;i<1;i++) {  clientRtcsigYield(app.bb);   }
  sigRead();
  }
 if(app.mpipe)
  {
  //if(aa.main_state.stage>=500)
   {
   for(i=0;i<1;i++) { mpipeYield(); }
   }
  }
 }







 function appProc ()
 {
 var msg,med,grp,eob,vs,sz,vgrp,vgsz;
 var str,txt;
 var sek,rvl,obj;
 var iu,img;
 var gsz,rat;

 //aaProfilerHit(functionName());
 //aaProfilerHit(callerName());

 switch(aa.main_state.stage)
  {
  case 0:
  opts=app.opts={};
  opts.use_mp4=0;
  opts.show_top_most=1;
  opts.use_pic=1;

  app.noSleep=new NoSleep();
  app.hz_sec=0;
  app.ei=aa.envInfoGet();
  app.fp=fgpntFind(app.ei.finger_print);
  aa.mainStageSet(100);
  break;


  case 66:
  break;


  case 100:
  if(cfg_rembug_use==false) { aa.mainStageSet(300); break; }
  app.bb=clientRtcsigNew("wss://xdosh.com:443/wss/rtcsig/",10,"bugroom");
  aa.mainStageSet(120);
  break;



  case 120:
  if(app.bb.cli.sock_xfwd=="") { break; }
  if(app.bb.is_ready!=true)    { break; }
  sigLog(7,"_");
  sigLog(7," ");
  sigLog(7,"guix ready");
  //sigLog(7,"120 connected");
  //sigLog(-1,app.ei.finger_print);
  aa.mainStageSet(300);
  break;


  case 300:
  guixInit();
  aa.mainStageSet(350);
  break;



  case 350:
  if(app.guix.is_ready!=true)      { break; }
  if(app.guix.group_ray.length==0) { break; }
  aa.mainStageSet(370);
  break;



  case 370:
  //if(aa.main_state.initial_click==false) { break; }
  console.log("initial click");
  app.noSleep.enable();
  aa.mainStageSet(380);
  break;




  case 380:
  if((grp=aa.guiGroupGetById("vippy"))==null) { aa.debugAlert("eee"); }
  ///if(opts.use_mp4==0)   {   aa.mainStageSet(400);   break;   }
  aa.videoLoad(grp.han,true,"https://xdosh.com/x/we/pete1.mp4");
  //aa.videoLoad(grp.han,true,"https://xdosh.com/x/we/dd.mp4");
  //aa.videoLoad(grp.han,true,"https://xdosh.com/x/we/pom.mp4");
  //aa.videoLoad(grp.han,true,"https://xdosh.com/x/we/zon.mp4");
  //aa.videoLoad(grp.han,true,"https://xdosh.com/x/we/obama1sd.mp4");
  aa.videoPause(grp.han);
  aa.videoSeekSet(grp.han,1.0);
  aa.mainStageSet(390);
  break;




  case 390:
  if((grp=aa.guiGroupGetById("vippy"))==null) { aa.debugAlert("eee"); }
  if(grp.vars.is_failed)                      { aa.debugAlert(); }
  vs=aa.videoStatus(grp.han);
  if(vs.can_play!=true)         { break; }
  if(vs.can_play_through!=true) { break; }

  /*
 obj.dom.style.objectFit="fill";
 //obj.dom.style.objectFit="contain";
 //obj.dom.style.objectFit="cover";
 //obj.dom.style.objectFit="none";
 //obj.dom.style.objectFit="scale-down";
 */

  //aa.guiFitSet(grp.han,"fill","0% 0%");

  aa.videoMuteSet(grp.han,true);
 aa.videoPlay(grp.han);
  rat=aa.numRoundPlaces(grp.dom.width/grp.dom.height,3);
  guixVlog(14,3,"video = "+grp.dom.width+"  "+grp.dom.height+" "+rat);
  rat=aa.numRoundPlaces(grp.dom.videoWidth/grp.dom.videoHeight,3);
  guixVlog(14,3,"video = "+grp.dom.videoWidth+"  "+grp.dom.videoHeight+" "+rat);

  gsz=aa.guiSizesGet(grp.han);
  //console.log(gsz);

  aa.mainStageSet(400);
  break;




  case 400:
  aa.mainStageSet(410);
  break;




  case 410:
  mpipeStart();
  aa.mainStageSet(420);
  break;



  case 420:
  /*
    obj=app.mpipe.obj_ray[0];
    vgrp=aa.guiGroupGetById("b_video_0");
    vgsz=aa.guiSizesGet(vgrp.han);
    mpipeWrite(obj, vgsz.vidwh[0],vgsz.vidwh[1],vgrp.dom);
    mpipeSend(obj);
    */
  mediaStart();
  aa.mainStageSet(430);
  break;



  case 430:
  mediaDetectStart();
  aa.mainStageSet(440);
  break;


  case 440:
  mediaYield();
  if(app.media.is_detect_success==false&&app.media.is_detect_failure==false) { break; }
  if(app.media.is_detect_success==true)
   {
   //console.log("detected");
   //sigLog(7,"detected");
   aa.mainStageSet(450);
   break;
   }
  aa.mainStageSet(66);
  break;




  case 450:
  if(app.media.devenu.vid_input==true&&app.media.devenu.aud_input==true)
   {
   if(0) { mediaDeviceDump(false); }
   mediaDeviceListInit(app.media.devenu);
   aa.mainStageSet(460);
   break;
   }
  aa.mainStageSet(66);
  break;





  case 460:
  /*
    obj=app.mpipe.obj_ray[0];
    iu=0;
    img=app.guix.image[iu].img;
    mpipeWrite(obj,img.width,img.height,img);
    mpipeSend(obj);
    */
  app.media.handle=mediaPairCreate(app.media.cur_axi,app.media.cur_vxi);
  aa.mainStageSet(470);
  break;





  case 470:
  aa.mediaStatus(app.media.handle);
  if((med=aa.mediaGet(app.media.handle))==null) { break; }
  if(med.res==null) { break; }
  //sigLog(7,""+med.res+" "+med.stage);

  if(med.res==="err")
   {
   err=aa.mediaErrorEtc(med.e_name,med.e_msg);
   alert("berr = "+err+"  "+med.e_name+"  "+med.e_msg);
   aa.mainStageSet(66);
   break;
   }
  if(med.res!=="ok")  { break; }
  if(med.stage!=300)  { break; }

  if((grp=aa.guiGroupGetById("b_video_0"))==null) { aa.debugAlert("eee"); }
  aa.mediaAttach(app.media.handle,grp.han);
  if(cfg_audio_loopback_muted==true)   {   grp.dom.muted=true;    grp.dom.volume=0;   }
  else                                 {   grp.dom.muted=false;   grp.dom.volume=1;   }
  eob=aa.mediaErrObjCreate(med.res,med.e_name,med.e_msg,med.e_code);
  mediaDeviceListErr(app.media.active_devenu,"videoinput",app.media.cur_vxi,eob);
  mediaDeviceListErr(app.media.active_devenu,"audioinput",app.media.cur_axi,eob);

  aa.mainStageSet(480);
  break;




  case 480:
  mediaDeviceSwapperInit();
  guixNeeds("side_menu",true,null);
  aa.mainStageSet(500);
  break;




  case 500:
  sigLog(7,"going to 2000");
  aa.mainStageSet(2000);
  break;



  case 2000:
  if((1&&opts.use_mp4)&&(aa.numRandValueEquals(0,3,0)))
   {
   if((grp=aa.guiGroupGetById("vippy"))==null) { aa.debugAlert("eee"); }
   vs=aa.videoStatus(grp.han);
   curr_tom=aa.videoStatusString(grp.han,vs);
   if(grp.vars.is_failed) { aa.debugAlert(curr_tom); }
   if((curr_tom!=prev_tom))
    {
    guixVlog(2,1,"cur="+aa.numRoundPlaces(vs.current_time,1)+" dur="+aa.numRoundPlaces(vs.duration,1));
    if(vs.current_time>=vs.duration)
     {
     if((rvl=aa.videoSeekSet(grp.han,1.0))!=true) { aa.debugAlert(); }
     aa.videoPlay(grp.han);
     vs=aa.videoStatus(grp.han);
     curr_tom=aa.videoStatusString(grp.han,vs);
     prev_tom=curr_tom;
     curr_tom=-1;
     break;
     }
    }
   prev_tom=curr_tom;
   }
  break;
  }

 appYield();

 if(aa.numRandValueEquals(0,3,1))
  {
  guixVlog(3,1,"ms="+aa.timerMsRunning()+" req="+aa.main_state.speed_req+"   got="+aa.main_state.speed_got+"   stage="+aa.main_state.stage+"  mp4="+opts.use_mp4+" pic="+opts.use_pic);
  if(app.media)
   {
   //guixVlog(4,1,"media_detect_stage="+app.media.detect_stage);
   guixVlog(4,1,"cur_axi="+app.media.cur_axi+"  cur_vxi="+app.media.cur_vxi);
   }
  }
 }






//---------------------------------



 function clientNew (address)
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var obj={};
 obj.type="client";
 obj.show_bug=true;
 obj.stage=1000;
 obj.sock_handle=0;
 obj.sock_status=null;
 obj.sock_obj=null;
 obj.sock_xfwd="";
 obj.close_msg_shown=false;
 obj.error_msg_shown=false;
 obj.pkt_in_ray=[];
 obj.tot_pkts_sent=0;
 obj.tot_pkts_read=0;
 obj.address=address;
 obj.vars={};
 obj.sock_handle=aa.socketCreate(address);
 if(obj.sock_handle==0) {   aa.debugAlert("ff");  }
 aa.socketYield(obj.sock_handle);
 obj.sock_obj=aa.socketGet(obj.sock_handle);
 obj.sock_status=aa.socketStatus(obj.sock_handle);
 return obj;
 }




 function clientDelete (clientobj)
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 if(clientobj==null)          { return false; }
 if(clientobj.type!="client") { return false; }
 if(clientobj.sock_handle!=0) { aa.socketDestroy(clientobj.sock_handle); }
 clientobj.sock_handle=0;
 clientobj.sock_status=null;
 clientobj.sock_obj=null;
 clientobj.pkt_in_ray=[];
 clientobj.vars={};
 clientobj={};
 clientobj=null;
 return true;
 }




 function clientReconnect (clientobj)
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var adr,sbu;
 if(clientobj==null)          { return false;  }
 if(clientobj.type!="client") { return false;  }
 adr=clientobj.address;
 sbu=clientobj.show_bug;
 if(clientobj.sock_handle!=0) { aa.socketDestroy(clientobj.sock_handle); }
 clientobj.sock_handle=0;
 clientobj.sock_status=null;
 clientobj.sock_obj=null;
 clientobj.pkt_in_ray=[];
 clientobj.vars={};
 clientobj.stage=1000;
 clientobj.sock_xfwd="";
 clientobj.close_msg_shown=false;
 clientobj.error_msg_shown=false;
 clientobj.tot_pkts_sent=0;
 clientobj.tot_pkts_read=0;
 clientobj.show_bug=sbu;
 clientobj.address=adr;
 clientobj.sock_handle=aa.socketCreate(adr);
 if(clientobj.sock_handle==0) {   aa.debugAlert("gg");  }
 aa.socketYield(clientobj.sock_handle);
 clientobj.sock_obj=aa.socketGet(clientobj.sock_handle);
 clientobj.sock_status=aa.socketStatus(clientobj.sock_handle);
 return true;
 }




 function clientRead (clientobj)
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var ret,pkt;
 if((ret=clientStatus(clientobj))!=true) { return null; }
 if(clientobj.pkt_in_ray.length==0)      { return null; }
 pkt=clientobj.pkt_in_ray.shift();
 return pkt;
 }





 function clientWrite (clientobj,sfy,pkt)
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var ret;
 if((ret=clientStatus(clientobj))!=true) { return false; }
 if(1||clientobj.sock_xfwd=="220.240.77.127")
  {
  if(sfy) { aa.socketWrite(clientobj.sock_handle,JSON.stringify(pkt));   }
  else    { aa.socketWrite(clientobj.sock_handle,pkt); }
  }
 clientobj.tot_pkts_sent++;
 return true;
 }




 function clientStatus (clientobj)
 {
 var pkt,go;
 //aaProfilerHit(callerName());
 if(clientobj==null)          { return false;  }
 if(clientobj.type!="client") { return false;  }
 if(clientobj.sock_handle==0) { return false;  }
 aa.socketYield(clientobj.sock_handle);
 clientobj.sock_obj=aa.socketGet(clientobj.sock_handle);
 clientobj.sock_status=aa.socketStatus(clientobj.sock_handle);
 if(clientobj.sock_status.is_closed==true&&clientobj.close_msg_shown==false)
  {
  if(clientobj.show_bug) { console.log("client closed"); }
  clientobj.close_msg_shown=true;
  }
 if(clientobj.sock_status.is_error==true&&clientobj.error_msg_shown==false)
  {
  if(clientobj.show_bug) { console.log("client error"); }
  clientobj.error_msg_shown=true;
  }
 if(clientobj.sock_status.is_error==true||clientobj.sock_status.is_closed==true)
  {
  return aa.ret.FAILED;
  }
 switch(clientobj.stage)
  {
  case 1000:
  if(clientobj.sock_status.is_open!=true) { break; }
  clientobj.stage=1200;
  break;


  case 1200:
  for(go=0;go<1;go++)
   {
   aa.socketYield(clientobj.sock_handle);
   if((pkt=aa.socketRead(clientobj.sock_handle))==null) { break; }
   if(clientobj.sock_xfwd=="")
    {
    if(pkt.substring(0,9)=="{\"xfwd\":\"")
     {
     clientobj.sock_xfwd=pkt.substring(9);
     clientobj.sock_xfwd=aa.stringLastCharTrim(clientobj.sock_xfwd);
     clientobj.sock_xfwd=aa.stringLastCharTrim(clientobj.sock_xfwd);
     continue;
     }
    }
   clientobj.tot_pkts_read++;
   clientobj.pkt_in_ray.push(pkt);
   }
  return true;
  }
 return false;
 }



//---------------------------------------------------------



 function clientRtcsigNew (address,tc,room)
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var obj;
 obj={};
 obj.type="clientrtcsig";
 obj.stage=100;
 obj.is_ready=false;
 obj.is_full=false;
 obj.cli=null;
 obj.adr=address;
 obj.room=room;
 obj.test_count=tc;
 obj.i_queue=[];
 obj.peer_ray=[];
 return obj;
 }





 function clientRtcsigDelete (obj)
 {
 if(obj.type!="clientrtcsig")          { return false; }
 if(obj.cli!=null) {  clientDelete(obj.cli);  }
 obj.cli=null;
 obj.i_queue=null;
 obj.peer_ray=null;
 return true;
 }





 function clientRtcsigPeerGet (obj,pidx)
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var peer;
 if(obj.type!="clientrtcsig")          { return false; }
 if(pidx<0||pidx>=obj.peer_ray.length) { return null;  }
 peer=obj.peer_ray[pidx];
 return peer;
 }





 function clientRtcsigRead (obj)
 {
 var msg;
 //aaProfilerHit(callerName());
 if(obj.type!="clientrtcsig") { return false; }
 if(obj.i_queue.length==0)    { return null;  }
 msg=obj.i_queue.shift();
 return msg;
 }



 function clientRtcsigWrite (obj,to,func,data)
 {
 var msg,pkt;
 //aaProfilerHit(callerName());
 if(obj.type!="clientrtcsig") { return false; }
 if(obj.is_ready!=true)       { return false; }
 msg={"func":func,"data":data};
 pkt={"cmd":"say","room":obj.room,"to":to,"msg":msg};
 clientWrite(obj.cli,true,pkt);
 return true;
 }




 function clientRtcsigYield (obj)
 {
 var pkt,jsn,pi,pl,etc,t,tl,msg;
 //aaProfilerHit(callerName());
 if(obj.type!="clientrtcsig") { return false; }
 switch(obj.stage)
  {
  case 100:
  obj.cli=clientNew(obj.adr);
  obj.stage=110;
  break;


  case 110:
  obj.my_uid=0;
  obj.is_ready=false;
  obj.stage=120;
  break;


  case 120:
  clientStatus(obj.cli);
  if(obj.cli.sock_xfwd=="") { break; }
  pkt={"cmd":"join","room":obj.room,"fingerprint":app.ei.finger_print,"testcount":obj.test_count};
  clientWrite(obj.cli,true,pkt);
  obj.stage=140;
  break;


  case 133:
  clientStatus(obj.cli);
  break;


  case 140:
  clientStatus(obj.cli);
  if((pkt=clientRead(obj.cli))!=null)
   {
   jsn=aa.dataJsonParse(pkt);
   switch(jsn.cmd)
    {
    case "hi":
    if(jsn.room!=obj.room)                 { alert("room wrong , "+jsn.room+" "+obj.room); break; }
    if(jsn.peerCount!=jsn.peerList.length) { alert("wrong peercount "+jsn.peerCount+"  "+jsn.peerList.length); break; }
    obj.my_uid=jsn.uuid;
    obj.is_ready=true;
    for(pi=0;pi<jsn.peerList.length;pi++)  { obj.peer_ray.push(jsn.peerList[pi]);   }
    etc={};
    etc.cmd="hi";
    etc.room=jsn.room;
    etc.uuid=jsn.uuid;
    obj.i_queue.push(etc);
    console.log("I AM "+jsn.uuid+"  ROOM "+jsn.room);
    obj.stage=160;
    break;

    case "full":
    obj.is_full=true;
    etc={};
    etc.cmd="full";
    etc.room=jsn.room;
    obj.i_queue.push(etc);
    obj.stage=133;
    break;

    default:
    alert("jsn.cmd="+jsn.cmd);
    break;
    }
   }
  break;


  case 160:
  clientStatus(obj.cli);
  if((pkt=clientRead(obj.cli))!=null)
   {
   jsn=aa.dataJsonParse(pkt);
   switch(jsn.cmd)
    {
    case "joined":
    if(jsn.room!=obj.room)   { alert("jroom wrong , "+jsn.room); break; }
    if(jsn.uuid==obj.my_uid) { alert("i joined while joined");   break; }
    pl=obj.peer_ray.length;
    for(pi=0;pi<pl;pi++)     { if(obj.peer_ray[pi]==jsn.uuid) { break; }  }
    if(pi!=pl)               { alert(jsn.uuid+" jouined already in list"); break; }
    obj.peer_ray.push(jsn.uuid);
    etc={};
    etc.cmd="joined";
    etc.room=jsn.room;
    etc.uuid=jsn.uuid;
    obj.i_queue.push(etc);
    break;

    case "left":
    if(jsn.room!=obj.room)   { alert("lroom wrong , "+jsn.room); break; }
    if(jsn.uuid==obj.my_uid) { alert("i left while joined");     break; }
    pl=obj.peer_ray.length;
    for(pi=0;pi<pl;pi++)     { if(obj.peer_ray[pi]==jsn.uuid) { break; } }
    if(pi==pl)               { alert(jsn.uuid+" left not in peer list"); break; }
    aa.dataArrayRemove(obj.peer_ray,pi);
    etc={};
    etc.cmd="left";
    etc.room=jsn.room;
    etc.uuid=jsn.uuid;
    obj.i_queue.push(etc);
    break;

    case "said":
    if(jsn.room!=obj.room)              { alert("lroom wrong , "+jsn.room); break; }
    if(jsn.target!=obj.my_uid)          { console.log("not targeted to me, but for "+jsn.target); break; }
    if(jsn.to==0||(jsn.to==obj.my_uid)) { obj.i_queue.push(jsn); break;     }
    aa.debugAlert("sent direct not to me",JSON.stringify(jsn,0,2));
    break;

    default:
    console.log(JSON.stringify(jsn,0,2));
    aa.debugAlert("hh");
    break;
    }
   }
  break;
  }
 return true;
 }



//---------------------------------------------------------



 function sigRead ()
 {
 var msg,secs;
 if(app.bb&&app.bb.is_ready)
  {
  msg=clientRtcsigRead(app.bb);
  if(msg==null) { return; }
  if(msg.cmd=="said"&&(msg.room==app.bb.room&&msg.target==app.bb.my_uid))
   {
   if(app.fpi==7)
    {
    if(msg.msg_data=="ciao")
     {
     aa.envReload(true,300);
     }
    //alert(msg.msg_data);
    }
   //console.log("func="+msg.msg_func+"  data="+msg.msg_data+"  to="+msg.to+"  from="+msg.uuid);
   //console.log(msg.msg_func+"="+msg.msg_data+"  to="+msg.to+"  from="+msg.uuid);
   ///console.log(aa.timerMsRunning()+"  "+msg.msg_func+"="+msg.msg_data);//+"  to="+msg.to+"  from="+msg.uuid);
   secs=aa.numRoundPlaces(aa.timerMsRunning()/1000,2);
   console.log(secs+"  "+msg.msg_data);//+"  to="+msg.to+"  from="+msg.uuid);
   }
  }
 }




 function sigLog (fpi,msg)
 {
 if(app.bb&&app.bb.is_ready)
  {
  if(app.fpi==fpi||fpi==-1)
   {
   clientRtcsigWrite(app.bb,0,"sig_log",""+msg);
   return true;
   }
  }
 return false;
 }



//---------------------------------------------------------



 function mediaStart ()
 {
// aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 app.media={};
 app.media.is_started=true;
 app.media.is_swapping=false;
 app.media.is_detecting=false;
 app.media.is_detect_failure=false;
 app.media.is_detect_success=false;
 app.media.detect_handle=0;
 app.media.detect_stage=0;
 app.media.detect_err=0;
 app.media.devenu=null;
 app.media.active_devenu=null;
 app.media.handle=0;
 app.media.handle2=0;
 app.media.cur_axi=0;  // current mic
 app.media.cur_vxi=0;  // current cam
 if(app.fp&&app.fp.fp=="9730d3d5b6a370a32f97421c2921060d393c5ec1f4523e05a2666eae650ff587")
  {
  app.media.cur_axi=1;
  app.media.cur_vxi=3;
  }
 app.media.cur_axo=0;  // current speakers
 app.media.cur_vfxi=0; // current vid fx
 app.media.cur_afxi=0; // current aud fx
 app.media.cur_grxi=0; // current green screen fx
 app.media.cur_arxi=0; // current AR fx
 app.media.cam_swap_stage=0;
 app.media.cam_swap_vxi=0;
 app.media.mic_swap_stage=0;
 app.media.mic_swap_axi=0;
 app.media.grp_of_b_video_0=null;
 app.media.grp_of_b_canstream_0=null;
 mediaLocalGainMuteSet(cfg_audio_default_gain,cfg_audio_local_initially_muted);
 }





 function mediaSize (useshort,rezwid,isrot)
 {
// aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var ww,hh,obj,ko;
 switch(rezwid)
  {
  //default:  aa.debugAlert("rezwid="+rezwid);  break;
  default:   ww=rezwid;  hh=rezwid; break;
  case 80:   ww=rezwid;  if(useshort) { hh=50;   }  else  { hh=60; }  break;
  case 160:  ww=rezwid;  if(useshort) { hh=90;   }  else  { hh=120; }  break;
  case 320:  ww=rezwid;  if(useshort) { hh=180;  }  else  { hh=240; }  break;
  case 640:  ww=rezwid;  if(useshort) { hh=360;  }  else  { hh=480; }  break;
  case 1280: ww=rezwid;  if(useshort) { hh=630;  }  else  { hh=720;}  break;
  case 1080: ww=rezwid;  if(useshort) { hh=1200; }  else  { hh=1920;}  break;
  case 1920: ww=rezwid;  if(useshort) { hh=960;  }  else  { hh=1080;}  break;
  }
 if(isrot)  {  swp=ww;  ww=hh;  hh=swp;  }

 obj={};
 obj.w=320; obj.h=240;
// obj.w=160; obj.h=120;
 return obj;
 }








 function mediaLocalGainMuteSet (gainval,muteval)
 {
 aaProfilerHit(callerName());
 app.media.cur_local_gain=gainval;
 app.media.cur_local_mute=muteval;
 }




 function mediaYield ()
 {
 aaProfilerHit(callerName());
 if(app.media===undefined) { return; }
 mediaDetectYield();
 mediaSwapYield();
 }





 function mediaDetectStart ()
 {
 if(app.media.is_detecting==true) { return false; }
 if(app.media.devenu!=null) { aa.debugAlert("devenu not null"); return false; }
 app.media.detect_stage=100;
 app.media.is_detecting=true;
 app.media.is_detect_failure=false;
 app.media.is_detect_success=false;
 app.media.detect_err="";
 return true;
 }





 function mediaDeviceDump (doactive)
 {
 var str,len,i,eo,d,den,o;

 aaProfilerHit(callerName());
 console.log("mediaDeviceDump==========");
 sigLog(7,"mediaDeviceDump==========");
 if(doactive) { den=app.media.active_devenu; }
 else         { den=app.media.devenu;        }
 for(i=0;i<den.aud_input_list.length;i++)
  {
  o=den.aud_input_list[i];
  str=i+" "+o.kind+" "+o.clean+" ";
  if(o.res!=null)  {  str+="res.res="+o.res.res+" res.name="+o.res.name+" res.msg="+o.res.msg+" ";   }
  console.log(str);
  sigLog(7,""+str);
  }
 console.log(" ");
 for(i=0;i<den.vid_input_list.length;i++)
  {
  o=den.vid_input_list[i];
  str=i+" "+o.kind+" "+o.clean+" ";
  if(o.res!=null)  {  str+="res.res="+o.res.res+" res.name="+o.res.name+" res.msg="+o.res.msg+" ";   }
  console.log(str);
  sigLog(7,""+str);
  }
 console.log(" ");
 for(i=0;i<den.aud_output_list.length;i++)
  {
  o=den.aud_output_list[i];
  str=i+" "+o.kind+" "+o.clean+" ";
  if(o.res!=null) {  str+="res.res="+o.res.res+" res.name="+o.res.name+" res.msg="+o.res.msg+" ";   }
  console.log(str);
  sigLog(7,""+str);
  }
 console.log(" ");
 for(i=0;i<den.vid_output_list.length;i++)
  {
  o=den.vid_output_list[i];
  str=i+" "+o.kind+" "+o.clean+" ";
  if(o.res!=null) {  str+="res.res="+o.res.res+" res.name="+o.res.name+" res.msg="+o.res.msg+" ";   }
  console.log(str);
  sigLog(7,""+str);
  }
 }






 function mediaDetectYield ()
 {
 var res,err,os;

 ///aaProfilerHit(callerName());

 os=app.media.detect_stage;

 switch(app.media.detect_stage)
  {
  case 66:
  break;

  case 100:
  //aa.debugAlert
  console.log("mediadetectyield 100, creating media {},{}");
  app.media.detect_handle=aa.mediaCreate(false,{},{});
  app.media.detect_stage=120;
  break;

  case 120:
  if((res=aa.mediaStatus(app.media.detect_handle))!=true) { break; }
  res=aa.mediaGet(app.media.detect_handle);
  if(res.res=="ok")
   {
   if(aa.mediaDestroy(app.media.detect_handle)!=true) {  aa.debugAlert("rdf");    }
   app.media.detect_handle=0;
   app.media.detect_res=res.res;
 //  console.log("120 going to 200");
   app.media.detect_stage=200;
   break;
   }
  if(res.res=="err")
   {
   if(aa.mediaDestroy(app.media.detect_handle)!=true) { aa.debugAlert("wefwef");   }
   app.media.detect_handle=0;
   app.media.is_detect_success=false;
   app.media.is_detect_failure=true;
   app.media.detect_err=err;
   app.media.detect_stage=66;
   app.media.is_detecting=false;
   break;
   }
  break;

  case 200:
  app.media.devenu=aa.mediaDeviceEnumerator();
  app.media.detect_stage=220;
  break;


  case 220:
  if(app.media.devenu.is_failed==true)
   {
   app.media.detect_stage=66;
   app.media.is_detecting=false;
   break;
   }
  if(app.media.devenu.is_ready!=true)  { break; }
  app.media.is_detect_success=true;
  app.media.is_detect_failure=false;
  app.media.detect_err=0;
  app.media.detect_stage=300;
  app.media.is_detecting=false;
  //aa.debugAlert("220, enumerator fin");
  //console.log("media detect ok");
  break;

  case 300:
  break;
  }

 if(app.media.detect_stage!=os)
  {
  console.log("media detect yield "+os+" "+app.media.detect_stage);
  //sigLog(7,"media detect yield "+os+" "+app.media.detect_stage);
  }
 }






 function mediaMicSwap (axi)
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var pxi,mod;
 if(app.media.is_swapping!=false) { console.log("swapping in use"); return false; }
 if(axi==null)                    { return false; }
 mod=mediaDeviceCountGet("audioinput");
 pxi=app.media.cur_axi;
 axi%=mod;
 if(axi==pxi) { return true; }
 app.media.is_swapping=true;
 app.media.mic_swap_stage=1;
 app.media.mic_swap_axi=axi;
 return true;
 }




 function mediaCamSwap (vxi)
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var pxi,mod;
 if(app.media.is_swapping!=false) { return false; }
 if(vxi==null) { return false; }
 mod=mediaDeviceCountGet("videoinput");
 if(vxi<0) { vxi=mod-1; }
 pxi=app.media.cur_vxi;
 vxi%=mod;
 ///if(vxi==pxi) { return true; }
 app.media.is_swapping=true;
 app.media.cam_swap_stage=1;
 app.media.cam_swap_vxi=vxi;
 return true;
 }





 function mediaSwapYield ()
 {
 //aaProfilerHit(callerName());
 if(app.media.is_swapping!=true) { return; }
 mediaSwapMicYield();
 mediaSwapCamYield();
 }






 function mediaDeviceListInit (obj)
 {
 var o,i,l;
 //aaProfilerHit(callerName());
 app.media.active_devenu=null;
 app.media.active_devenu=JSON.parse(JSON.stringify(obj));
 l=app.media.active_devenu.aud_input_list.length;
 for(i=0;i<l;i++)  {  app.media.active_devenu.aud_input_list[i].res=null;  }
 l=app.media.active_devenu.vid_input_list.length;
 for(i=0;i<l;i++)  {  app.media.active_devenu.vid_input_list[i].res=null;  }
 l=app.media.active_devenu.aud_output_list.length;
 for(i=0;i<l;i++)  {  app.media.active_devenu.aud_output_list[i].res=null;  }
 l=app.media.active_devenu.vid_output_list.length;
 for(i=0;i<l;i++)  {  app.media.active_devenu.vid_output_list[i].res=null;  }
 return true;
 }






 function mediaDeviceGet (kind,index)
 {
 //aaProfilerHit(callerName());
 switch(kind)
  {
  case "audioinput":
  if(index>=app.media.active_devenu.aud_input_list.length) { break; }
  return app.media.active_devenu.aud_input_list[index];

  case "audiooutput":
  if(index>=app.media.active_devenu.aud_output_list.length) { break; }
  return app.media.active_devenu.aud_output_list[index];

  case "videoinput":
  if(index>=app.media.active_devenu.vid_input_list.length) { break; }
  return app.media.active_devenu.vid_input_list[index];

  case "videooutput":
  if(index>=app.media.active_devenu.vid_output_list.length) { break; }
  return app.media.active_devenu.vid_output_list[index];
  }
 return null;
 }







 function mediaDeviceListErr (obj,kind,index,errobj)
 {
 var oe;

 //aaProfilerHit(callerName());
 if(errobj!==undefined)  {  }
 switch(kind)
  {
  case "audioinput":   app.media.active_devenu.aud_input_list[index].res=errobj; break;
  case "videoinput":   app.media.active_devenu.vid_input_list[index].res=errobj; break;
  case "audiooutput":  app.media.active_devenu.aud_output_list[index].res=errobj; break;
  case "videooutput":  app.media.active_devenu.vid_output_list[index].res=errobj; break;
  }
 if(errobj.res!="ok")
  {
  console.log("res="+errobj.res+" name="+errobj.name);
  console.log("msg="+errobj.msg+" code="+errobj.code);
  console.log("etc="+errobj.etc+" "+errobj.etc0+","+errobj.etc1);
  }
 }





 function mediaDeviceCountGet (kind)
 {
 //aaProfilerHit(callerName());
 switch(kind)
  {
  case "audioinput":   return app.media.active_devenu.aud_input_list.length;
  case "audiooutput":  return app.media.active_devenu.aud_output_list.length;
  case "videoinput":   return app.media.active_devenu.vid_input_list.length;
  case "videooutput":  return app.media.active_devenu.vid_output_list.length;
  }
 return 0;
 }





 function mediaDeviceSwapperInit ()
 {
 //aaProfilerHit(callerName());
 var cap_stream,vid_tracks,med_object,aud_stream,new_stream,grp,tr;

 if((grp=aa.guiGroupGetById("b_canstream_0"))==null) { aa.debugAlert("weewdw"); }
 if(cfg_cstream_auto) { cap_stream=grp.dom.captureStream();            }
 else                 { cap_stream=grp.dom.captureStream(cfg_cam_fps); }
 vid_tracks=cap_stream.getVideoTracks()[0];

 med_object=aa.mediaGet(app.media.handle);
 aud_stream=med_object.a_stream;

 new_stream=mediaCombineStreams(aud_stream,vid_tracks);
 app.new_stream=new_stream;

 grp.vars.audio_processor=mediaAudioProcessorStart(grp.obj.id,new_stream);
 grp.vars.audio_processor.stream=new_stream;

 app.media.aud_pro=grp.vars.audio_processor;

 grp.vars.cst=cap_stream;
 grp.vars.nws=new_stream;
 //console.log(" "+callerName());
 }







 function mediaDeviceSwapperSwap ()
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var cap_stream,vid_tracks,med_object,aud_stream,new_stream,grp,tr,han;

 if((grp=aa.guiGroupGetById("b_canstream_0"))==null) { aa.debugAlert("qqqqqqq"); }
 if(cfg_cstream_auto) { cap_stream=grp.dom.captureStream();            }
 else                 { cap_stream=grp.dom.captureStream(cfg_cam_fps); }
 vid_tracks=cap_stream.getVideoTracks()[0];

 han=app.media.handle;
 med_object=aa.mediaGet(han);
 aud_stream=med_object.a_stream;

 new_stream=mediaCombineStreams(aud_stream,vid_tracks);
 grp.vars.audio_processor.stream=new_stream;

 grp.vars.audio_processor.microphone.disconnect();
 grp.vars.audio_processor.microphone=grp.vars.audio_processor.context.createMediaStreamSource(new_stream);
 grp.vars.audio_processor.microphone.connect(grp.vars.audio_processor.analyser);
 //console.log(" "+callerName());
 }







 function mediaCombineStreams (astream,vstream)
 {
 //aaProfilerHit(callerName());
 //aaProfilerHit(functionName());
 var stream,tr=[];
 if(astream!=undefined) { tr=tr.concat(astream); }
 if(vstream!=undefined) { tr=tr.concat(vstream); }
 stream=new MediaStream(tr);
 return stream;
 }









 function mediaPairCreate (axi,vxi)
 {
 var ax,vx,dsz,csz,wid,hit,adid,vdid,han;

 ax=axi;
 vx=vxi;
 dsz=aa.ifaceDisplaySizesGet();
 csz=mediaSize(cfg_cam_res_short,cfg_cam_res_wid,cfg_cam_res_rot);
 wid=csz.w;
 hit=csz.h;
 if(ax>=0) {  if((adid=mediaDeviceGet("audioinput",ax))!=null)  {  adid=adid.deviceId;  }  }
 if(vx>=0) {  if((vdid=mediaDeviceGet("videoinput",vx))!=null)  {  vdid=vdid.deviceId;  }  }

 console.log("mediaPairCreate axi="+axi+"  vxi="+vxi);
 //aa.debugAlert("mediaPairCreate axi="+axi+"  vxi="+vxi);


 if(axi!=-1&&vxi==-1)
  {
  han=aa.mediaCreate(false,
    null,
    {deviceId:{exact:adid},channelCount:1,sampleRate:{min:16000,ideal:48000,max:48000},latency:0,
      echoCancellation:cfg_audio_aec,noiseSuppression:cfg_audio_nsu,autoGainControl:cfg_audio_agc,
     googEchoCancellation:cfg_audio_aec,googNoiseSuppression:cfg_audio_nsu,googAutoGainControl:cfg_audio_agc}
    );
  app.media.cur_axi=axi;
  return han;
  }

 if(axi==-1&&vxi!=-1&&vxi!=1000)
  {
  han=aa.mediaCreate(false,
    {deviceId:{exact:vdid},width:{ideal:wid,max:wid},height:{ideal:hit,max:hit},frameRate:{ideal:cfg_cam_fps,max:cfg_cam_fps} },
     null,
    );
   app.media.cur_vxi=vxi;
  return han;
  }

 if(axi==-1&&vxi==1000)
  {
  han=aa.mediaCreate(true,
    {cursor:"always",width:{ideal:wid,max:wid},height:{ideal:hit,max:hit},frameRate:{ideal:cfg_cam_fps,max:cfg_cam_fps},aspectRatio:16/9},
    null
    );
  app.media.cur_vxi=vxi;
  return han;
  }

 if(axi!=-1&&vxi!=-1&&vxi!=1000)
  {
  han=aa.mediaCreate(false,
    {deviceId:{exact:vdid},width:{ideal:wid,max:wid},height:{ideal:hit,max:hit},frameRate:{ideal:cfg_cam_fps,max:cfg_cam_fps} },
    {deviceId:{exact:adid},channelCount:1,sampleRate:{min:16000,ideal:48000,max:48000},latency:0,
     echoCancellation:cfg_audio_aec,noiseSuppression:cfg_audio_nsu,autoGainControl:cfg_audio_agc,
     googEchoCancellation:cfg_audio_aec,googNoiseSuppression:cfg_audio_nsu,googAutoGainControl:cfg_audio_agc}
    );
   app.media.cur_axi=axi;
   app.media.cur_vxi=vxi;
  return han;
  }
 aa.debugAlert("rr");
 return han;
 }






 function mediaAudioProcessorStart (id,newlycreatedstream)
 {
 var obj,settings,sss;
 obj={};
 obj.id=id;
 obj.context=new AudioContext();
 sss=newlycreatedstream.getAudioTracks()[0];
 if(sss!=undefined)
  {
  obj.rate=sss.getSettings().sampleRate;
  obj.microphone=obj.context.createMediaStreamSource(newlycreatedstream);
  obj.destination=obj.context.createMediaStreamDestination();
  obj.scripter=obj.context.createScriptProcessor(cfg_audio_script_processor_size,1,1);
  obj.scripter.onaudioprocess=function(event) { mediaAudioProcessorProc(obj,event);  }

  obj.analyser_cycle=0;
  obj.analyser_level=0;
  obj.analyser=obj.context.createAnalyser();
  obj.analyser.fftSize=cfg_audio_fft_size;
  obj.analyser.smoothingTimeConstant=cfg_audio_smoothing; // was 0.3
  obj.analyser.maxDecibels=cfg_audio_max_db;
  obj.analyser.minDecibels=cfg_audio_min_db;

  obj.freq_buffer_len=obj.analyser.frequencyBinCount;
  obj.freq_float_buffer=new Float32Array(obj.freq_buffer_len);
  obj.freq_range=obj.rate/2.0;

  obj.band_count=obj.freq_buffer_len;
  obj.band_hertz=obj.freq_range/obj.band_count;

  obj.microphone.connect(obj.analyser);
  obj.analyser.connect(obj.scripter);
  obj.scripter.connect(obj.destination);
  }
 obj.stream=newlycreatedstream;
 return obj;
 }







 function mediaAudioProcessorProc (object,event)
 {
 var grp;
 grp=aa.guiGroupGetById(object.id);
 mediaAudioAnalyzeInput(object,event);
 mediaAudioScriptWithGain(object,event,app.media.cur_local_gain);
 }








 function mediaAudioAnalyzeInput (object,event)
 {
 var mv,suv,s,i,ii,r,fqs,fqe,val,va,lev;

 if((object.analyser_cycle%4)==0)
  {
  object.analyser.getFloatFrequencyData(object.freq_float_buffer);
  mv=-Infinity;
  for(i=0,ii=object.freq_buffer_len;i<ii;i++)
   {
   if(object.freq_float_buffer[i]>mv&&object.freq_float_buffer[i]<0) {  mv=object.freq_float_buffer[i];   }
   }
  suv=0;
  s=0;
  for(r=0;r<object.freq_buffer_len;r++)
   {
   //fqe=Math.round(audioIndexToFreq(object,r+1))-1;
   fqs=r+0;
   fqe=r+1;
   val=object.freq_float_buffer[r];
   val-=object.analyser.minDecibels;
   suv+=val**2;
   s++;
   }
  fqs=Math.round(mediaAudioIndexToFreq(object,fqs))-0;
  fqe=Math.round(mediaAudioIndexToFreq(object,fqe))-1;
  va=20*Math.log10(suv/s);
  mv=aa.numFixed(mv,1);
  va=aa.numFixed(va,1);
  lev=aa.numFixed((mv-(-160)),0);
  object.analyser_level=lev;
  }
 object.analyser_cycle++;
 }





 function mediaAudioFreqToIndex (object,freq)
 {
 var index,res;
 index=Math.round((freq/object.freq_range)*object.band_count);
 res=aa.numClamp(index,0,object.band_count);
 return res;
 }






 function mediaAudioIndexToFreq (object,index)
 {
 var res=(index*object.rate)/(object.band_count*2);
 return res;
 }





 function mediaAudioScriptWithGain (object,event,gain)
 {
 var ibuf,obuf,ilen,i,ival,minv,maxv,oval;

 ibuf=event.inputBuffer.getChannelData(0);
 obuf=event.outputBuffer.getChannelData(0);
 ilen=ibuf.length;
 minv=-0.999;
 maxv=+0.999;

 gain=aa.numRandValue(0.2,4.5);

 for(i=0;i<ilen;i++)
  {
  ival=ibuf[i];
  oval=ival*gain;
  if(oval<minv) { oval=minv;  }  else
  if(oval>maxv) { oval=maxv;  }
  obuf[i]=oval;
  }
 }




 function mediaVideoAddVadColor (cgrp,cw,ch)
 {
 if(app.media.aud_pro==undefined) { return; }
 if(app.media.aud_pro.analyser_level>=cfg_audio_threshold&&app.media.cur_local_mute==false)
  {
  aa.guiCanvasBorder(cgrp.obj.han,0,0,cw-1,ch-1,2,aa.guiRgbaString(aa.numRandValue(0,255),220,240,1));
  }
 }




 function mediaSwapMicYield ()
 {
 var obj,ret,mob,grp,stream,rtc,status,grpc,vstream,astream,cstream,grpv,err,oe;

 switch(app.media.mic_swap_stage)
  {
  case 0:
  return;


  case 1:
  ///console.log("mediaSwapMicYield stage 1, device count= "+mediaDeviceCountGet("audioinput"));
  //console.log("cur axi="+app.media.cur_axi+"  swap axi="+app.media.mic_swap_axi);
  app.media.cur_axi=app.media.mic_swap_axi;
  app.media.cur_axi%=mediaDeviceCountGet("audioinput");
  app.media_handle2=mediaPairCreate(app.media.cur_axi,app.media.cur_vxi); ///!!!!!!!!!!!!!!!!!!
  app.media.mic_swap_stage=2;
  ///guixNeedsPaintSet("sidemenu");
  return;




  case 6:
  console.log("mic 666");
  break;




  case 2:
  status=aa.mediaStatus(app.media_handle2);
  if((obj=aa.mediaGet(app.media_handle2))==null) { return; }
  if(obj.res==null) { return; }
  if(obj.res=="ok")
   {
   if(app.media.grp_of_b_canstream_0==null)
    {
    app.media.grp_of_b_canstream_0=aa.guiGroupGetById("b_canstream_0");
    }

   if((grpc=app.media.grp_of_b_canstream_0)==null) { aa.debugAlert("Ferffer"); }
   aa.mediaAttach(app.media.handle,null);
   aa.mediaDestroy(app.media.handle);
   if(app.media.grp_of_b_video_0==null)
    {
    app.media.grp_of_b_video_0=aa.guiGroupGetById("b_video_0");
    }
   ret=aa.mediaAttach(app.media_handle2,app.media.grp_of_b_video_0.han);
   app.media.handle=app.media_handle2;
   app.media_handle2=0;
   if((obj=aa.mediaGet(app.media.handle))===null) { aa.debugAlert("erferfer"); }
   if(app.media.grp_of_b_video_0==null)
    {
    app.media.grp_of_b_video_0=aa.guiGroupGetById("b_video_0");
    }
   if((grpv=app.media.grp_of_b_video_0)==null) { aa.debugAlert("ferff"); }
   ///if((grpv=aa.guiGroupGet(aa.guiIdFind("b_video_0")))==null) { aa.debugAlert(); }
   grpv.vars.prev_time=0;
   grpv.vars.frame_number=0;
   grpv.vars.fps=0;
   mediaDeviceSwapperSwap();
   app.media.mic_swap_stage=0;
   ///mediaStoreLastDevice();
   app.media.is_swapping=false;
   //console.log("** mic swap success axi="+app.media.cur_axi+"  "+app.media.devenu.aud_input_list[app.media.cur_axi].clean);
   err=aa.mediaErrObjCreate(obj.res,obj.e_name,obj.e_msg,obj.e_code);
   mediaDeviceListErr(app.media.active_devenu,"audioinput",app.media.mic_swap_axi,err);//app.media.cur_axi,err);
   //guixNeedsPaint("b_hud_0",true);
   guixNeeds("b_hud_0",true,null);
   }
  else
  if(obj.res=="err")
   {
   err=aa.mediaErrObjCreate(obj.res,obj.e_name,obj.e_msg,obj.e_code);
   mediaDeviceListErr(app.media.active_devenu,"audioinput",app.media.mic_swap_axi,err);//app.media.cur_axi,err);
   app.media.mic_swap_stage=1;
   app.media.mic_swap_axi++;
   app.media.mic_swap_axi%=mediaDeviceCountGet("audioinput");;
   break;
   }
  return;
  }
 }






 function mediaSwapCamYield ()
 {
 var obj,ret,mob,grp,stream,rtc,status,grpc,vstream,astream,cstream,grpv,err;

 switch(app.media.cam_swap_stage)
  {
  case 0:
  return;

  case 1:
  app.media.cur_vxi=app.media.cam_swap_vxi;
  app.media.cur_vxi%=mediaDeviceCountGet("videoinput");
  app.media_handle2=mediaPairCreate(app.media.cur_axi,app.media.cur_vxi);
  app.media.cam_swap_stage=2;
  return;

  case 6:
  console.log("cam 666");
  break;


  case 2:
  status=aa.mediaStatus(app.media_handle2);
  if((obj=aa.mediaGet(app.media_handle2))==null)     { return; }
  if(obj.res==null) { return; }
  if(obj.res=="ok")
   {
   if(app.media.grp_of_b_canstream_0==null)
    {
    app.media.grp_of_b_canstream_0=aa.guiGroupGetById("b_canstream_0");
    }
   grpc=app.media.grp_of_b_canstream_0;
   if(!grpc) { aa.debugAlert("fefefer"); }
   aa.mediaAttach(app.media.handle,null);
   aa.mediaDestroy(app.media.handle);
   if(app.media.grp_of_b_video_0==null)
    {
    app.media.grp_of_b_video_0=aa.guiGroupGetById("b_video_0");
    }
   if((ret=aa.mediaAttach(app.media_handle2,app.media.grp_of_b_video_0.han))!=true) { aa.debugAlert("media attach  ="+ret); }
   app.media.handle=app.media_handle2;
   app.media_handle2=0;
   if((obj=aa.mediaGet(app.media.handle))===null) { aa.debugAlert("weeeee"); }
   grpv=app.media.grp_of_b_video_0;
   if(!grpv) { aa.debugAlert("xxxxxxx"); }
   //if((grpv=aa.guiGroupGet(aa.guiIdFind("b_video_0")))==null) { aa.debugAlert(); }
   grpv.vars.prev_time=0;
   grpv.vars.frame_number=0;
   grpv.vars.fps=0;
   mediaDeviceSwapperSwap();
   app.media.cam_swap_stage=0;
   app.media.is_swapping=false;
   console.log("** cam swap success vxi="+app.media.cur_vxi+"  "+app.media.devenu.vid_input_list[app.media.cur_vxi].clean);
   err=aa.mediaErrObjCreate(obj.res,obj.e_name,obj.e_msg,obj.e_code);
   mediaDeviceListErr(app.media.active_devenu,"videoinput",app.media.cam_swap_vxi,err);//app.media.cur_axi,err);
   guixNeeds("b_hud_0",true,null);
   }
  else
  if(obj.res=="err")
   {
   err=aa.mediaErrObjCreate(obj.res,obj.e_name,obj.e_msg,obj.e_code);
   mediaDeviceListErr(app.media.active_devenu,"videoinput",app.media.cam_swap_vxi,err);//app.media.cur_axi,err);
   app.media.cam_swap_stage=1;
   app.media.cam_swap_vxi++;
   app.media.cam_swap_vxi%=mediaDeviceCountGet("videoinput");;
   break;
   }
  return;
  }
 }


//---------------------------------------------------------




 function guixInit ()
 {
 var s,i;
 app.guix={};
 app.guix.is_ready=false;
 app.guix.group_ray=[];
 app.guix.font_ray=[];
 app.guix.fonts_ready=false;
 if(1)  {  app.guix.pointer={};   aa.pointerStart();   }
 if(1)  {  app.guix.keyboard={};  aa.keyboardStart();  }
 s=Math.floor(Date.now()/100000);
 app.guix.font_ray.push(aa.guiFontLoad("saira","woff","./fonts/saira.woff?"+s));
// app.guix.font_ray.push(aa.guiFontLoad("srccodepro","woff","./fonts/srccodepro.woff?"+s));
 app.guix.font_ray.push(aa.guiFontLoad("resty","woff2","./fonts/resty.woff2?"+s));
 app.guix.font_ray.push(aa.guiFontLoad("lcd","woff","./fonts/lcd.woff?"+s));
// app.guix.font_ray.push(aa.guiFontLoad("lcdx","woff","./fonts/lcdx.woff?"+s));
 s=Math.floor(Date.now()/100000);
 app.guix.sprite=aa.spriteLoad("./gfx/spritestwo.png?"+s);
 s=Math.floor(Date.now()/100000);
 app.guix.image=[];
 app.guix.image.push(aa.imageLoaderNew("./faces/face_cillan.jpg?"+s));
 app.guix.image_used=app.guix.image.length;
 app.guix.vlog=aa.virtualLogNew(20);
 app.guix.side={};
 aa.ifaceStart(guixIfaceProc);
 }







 function guixFontSet (fidx,weight,px)
 {
 var fnt;
 fnt=""+weight+" "+px+"px ";
 if(isNaN(fidx))    {  fnt+=""+fidx;  return fnt;  }
 if(fidx<0)                         { return null; }
 if(fidx>=app.guix.font_ray.length) { return null; }
 fnt+=""+app.guix.font_ray[fidx].name;
 return fnt;
 }






 function guixWarmup (obj)
 {
 var c,f,rat;

 if(app.guix.is_ready==true) { return true; }
 if(app.guix.fonts_ready!=true)
  {
  for(c=0,f=0;f<app.guix.font_ray.length;f++) { if(aa.guiFontStatus(app.guix.font_ray[f])==true) { c++; } }
  if(c==app.guix.font_ray.length)             { app.guix.fonts_ready=true;   }
  }
 if(app.guix.sprite.is_ready!=true)
  {
  for(f=0;f<12;f++) { aa.spriteStatus(app.guix.sprite); if(app.guix.sprite.is_ready) { break; } }
  }
 if(app.guix.sprite.is_ready!=true||app.guix.fonts_ready!=true) {  return false;   }

 f=app.guix.image.length;
 for(c=0;c<f;c++)   { if(app.guix.image[c].is_success!=true) { break; }   }
 if(c!=f)           { return false; }
 for(c=0;c<f;c++)
  {
  rat=app.guix.image[c].img.width/app.guix.image[c].img.height;
  rat=Math.round(rat*100)/100;
  console.log(c+"  "+app.guix.image[c].url+" "+app.guix.image[c].img.width+" "+app.guix.image[c].img.height+" "+rat);
  }
 guixCreateElements();
 console.log("sprite.sheet count="+app.guix.sprite.sheet_map.length);
 guixSidemenuInit();
 //guixSidemenuClick();
 //guixSidemenuSnsSet(3);
 app.guix.is_ready=true;
 return false;
 }






 function guixCreateElements ()
 {
 var c;
 guixCreate("canvas","main_canvas",9000);
 guixCreate("canvas","top_most",9998);
 guixCreate("canvas","side_menu",9999);
 guixCreate("canstream","b_canstream_0",9070);
 for(c=0;c<cfg_max_peers;c++) { guixCreate("video","b_video_"+c,9070);  }
 guixCreate("video","vippy",9996);
 }






 function guixIfaceProc (obj)
 {
 if(guixWarmup(obj)!=true) { return false; }
 if(app.guix.vlog.needs_paint)
  {
  guixNeeds("top_most",true,true);
  app.guix.vlog.needs_paint=false;
  }
 guixHandleElements(obj);
 guixPtrYield(obj);
 guixKeyYield(obj);
 mediaCanvasPaint(obj);
 return true;
 }






 function guixNeeds (id,paintstate,drawstate)
 {
 var grp;
 if((grp=aa.guiGroupGetById(id))==null) { return false;  }
 if(paintstate!=null) { grp.vars.needs_paint=paintstate; }
 if(drawstate!=null)  { grp.vars.needs_draw=drawstate;   }
 return true;
 }




 function guixCreate (type,id,zi)
 {
 var han,grp,idx,rgb,pal;
 if((han=aa.guiCreate(type,id,zi))==0)  { aa.debugAlert("jjr"); }
 if((grp=aa.guiGroupGetById(id))==null) { aa.debugAlert("wedw"); }
 idx=app.guix.group_ray.length;
 guixNeeds(id,true,true);
 grp.vars.probe=null;
 app.guix.group_ray.push(grp);
 switch(id)
  {
  case "main_canvas":
  //aa.guiCssOutlineSet(grp.han,1,-4,"dotted",aa.guiRgbaString(aa.numRandValue(120,230),aa.numRandValue(0,200),aa.numRandValue(0,200),1));
  break;
  case "side_menu":
  aa.guiCssOutlineSet(grp.han,1,-2,"dotted",aa.guiRgbaString(aa.numRandValue(120,230),aa.numRandValue(0,200),aa.numRandValue(0,200),1));
  break;
  case "top_most":
  //aa.guiCssOutlineSet(grp.han,1,-2,"dotted",aa.guiRgbaString(255,0,0,1));
  break;
  case "b_video_0":
  case "b_video_1":
  case "b_video_2":
  //aa.guiCssOutlineSet(grp.han,2,-4,"dotted",aa.guiRgbaString(0,255,0,1));
  break;
  case "b_canstream_0":
  //aa.guiCssOutlineSet(grp.han,2,-4,"dashed",aa.guiRgbaString(0,0,255,1));
  break;
  case "vippy":
  //aa.guiCssOutlineSet(grp.han,3,-2,"double",aa.guiRgbaString(255,0,255,1));
  break;
  default:
  console.log("AAA "+id);
  aa.debugAlert("AAA "+id);
  aa.guiCssOutlineSet(grp.han,1,-2,"dotted",aa.guiRgbaString(aa.numRandValue(120,230),aa.numRandValue(0,200),aa.numRandValue(0,200),1));
  break;
  }
 return grp;
 }







 function guixAssertion (grp,disp,retina,opa,x,y,w,h,dwid,dhit)
 {
 var req,chg,ps,ds;

 grp.vars.probe=aa.guiProbeGet(grp.han);
 req={};
 req.type="guirequirments";
 req.disp=disp;
 req.retina=retina;
 req.opa=opa;
 req.x=x;
 req.y=y;
 req.w=w;
 req.h=h;
 req.domw=dwid;
 req.domh=dhit;
 chg=aa.guiProbeCompare(grp.vars.probe,req.disp,req.retina,req.opa,req.x,req.y,req.w,req.h,req.domw,req.domh);
 if(chg<=0) { return chg; }
 aa.guiApply(grp.vars.probe.handle,req.disp,req.retina,req.opa,req.x,req.y,req.w,req.h,req.domw,req.domh);
 grp.vars.probe=aa.guiProbeGet(grp.vars.probe.handle);
 ps=false;
 ds=false;
 if(chg>=16) { ps=true; }
 if(chg>=1)  { ds=true; }
 guixNeeds(grp.obj.id,ps,ds);
 return chg;
 }





 function guixGrpSizesGet (id)
 {
 var obj,grp;
 grp=aa.guiGroupGetById(id);
 if(grp==null) { return null; }
 obj={};
 obj.type="grpsizes";
 obj.grp=grp;
 obj.gsz=aa.guiSizesGet(grp.han);
 return obj;
 }






 function guixHandleElements (obj)
 {
 var totchg,dwid,dhit,c,z,grp,ok,sub,val,disp;
 aaProfilerHit(callerName());

 totchg=0;
 dwid=obj.this_dsz[5];
 dhit=obj.this_dsz[8];
 c=app.guix.group_ray.length;
 for(z=0;z<c;z++)
  {
  grp=app.guix.group_ray[z];
  ok=true;
  switch(grp.obj.id)
   {
   case "main_canvas":
   guixAssertion(grp,"inline-block",false,1.0,0,0,dwid,dhit,dwid,dhit);
   break;

   case "top_most":
   if(opts.show_top_most==1) { guixAssertion(grp,"inline-block",true,0.6,320,0,dwid-320,240,dwid-320,240); }
   else                      { guixAssertion(grp,"none"        ,true,0.6,320,0,dwid-320,240,dwid-320,240); }
   break;

   case "side_menu":
   guixSidemenuAssert(grp,dwid,dhit);
   //guixAssertion(grp,"inline-block",false,1.0,0,0,10,dhit,10,dhit);
   break;

   case "b_canstream_0":
   guixAssertion(grp,"inline-block",false,1.0,0,0,320,240,320,240);//dwid,dhit,dwid,dhit);//240,240);//240,240,dwid,dhit);//240,240);
   break;

   case "b_video_0":
   //guixAssertion(grp,"inline-block",false,1.0,320,0,320,240,320,240);
   guixAssertion(grp,"none",false,1.0,320,120,320,240,320,240);
   break;

   case "b_video_1":
   case "b_video_2":
   sub=grp.obj.id.substring(8);
   val=parseInt(sub);
   disp="none";
   disp="inline-block";
   //guixAssertion(grp,disp,false,1.0,360+((val-1)*320),(val-1)*80,240,240,240,240);
   guixAssertion(grp,disp,false,1.0,0+((val-1)*320),240,320,240,320,240);
   break;

   case "vippy":
   if(1) { disp="none"; }
   else  { disp="inline-block"; }
   guixAssertion(grp,disp,false,1.0,640,240,320,240,320,240);
   break;

   default:  ok=false;    break;
   }
  }
 guixHandlePainting();
 }







 function guixSprite (grp,spidx,xx,yy,ww,hh,spid)
 {
 var spc,rec;
 spc=aa.spriteRectGet(app.guix.sprite,spidx);
 if(spc==null) {  console.log("guixSprite spriteRectGet "+spidx+" ==null");  return null;  }
 if(ww==0&&hh!=0) { ww=hh*spc.ratio_wh; }
 else
 if(ww!=0&&hh==0) { hh=ww*spc.ratio_hw; }
 ww>>=0;
 hh>>=0;
 aa.spritePaintByIndex(app.guix.sprite,grp.obj.id,spidx,xx,yy,ww,hh,0,0,0);
 rec=aa.guiRectSet(xx,yy,ww,hh);
 return rec;
 }




 function guixKeyYield (obj)
 {
 var key,grp;
 ///aaProfilerHit(callerName());
 key=aa.keyboardRead();
 if(key==null) { return false; }
 if(key.name=="keydown")
  {
  if(app.fpi==0)
   {
   /*
   if(key.key=='u')
    {
    if(opts.use_mp4==0) { opts.use_mp4=1; }
    else                { opts.use_mp4=0; }
    //guixSidemenuSnsSet(-1);
    //guixSidemenuSnsSet(3);
    guixSidemenuItmSet(3,1);
    }
   else
   if(key.key=='i')
    {
    if(opts.use_pic==0) { opts.use_pic=1; }
    else                { opts.use_pic=0; }
    //guixSidemenuSnsSet(-1);
    //guixSidemenuSnsSet(3);
    guixSidemenuItmSet(3,3);
    }
   else
   */

   if(key.key=='t')
    {
    sigLog(0,"ciao");
    }
   else
   if(key.key=='a')    {    app.mpipe.satu-=0.1;    }
   else
   if(key.key=='q')    {    app.mpipe.satu+=0.1;    }
   else
   if(key.key=='z')    {    app.mpipe.satu=0.5;    }
   else
   if(key.key=='s')    {    app.mpipe.brightness-=0.1;    }
   else
   if(key.key=='w')    {    app.mpipe.brightness+=0.1;    }
   else
   if(key.key=='x')    {    app.mpipe.brightness=0.5;    }
   else
   if(key.key=='f')    {    app.mpipe.contrast-=2;    }
   else
   if(key.key=='r')    {    app.mpipe.contrast+=2;    }
   else
   if(key.key=='v')    {    app.mpipe.contrast=1;    }
   else
   if(key.key=='d')    {    app.mpipe.gal-=0.05;    }
   else
   if(key.key=='e')    {    app.mpipe.gal+=0.05;    }
   else
   if(key.key=='c')    {    app.mpipe.gal=0.5;    }

   else
   if(key.key==' ')
    {
    if((grp=aa.guiGroupGetById("vippy"))==null) { aa.debugAlert("eee"); }
    aa.videoPause(grp.han);
    grp.vars.url="https://xdosh.com/x/we/pete1.mp4";
    grp.dom.src=grp.vars.url;
    //grp.dom.src=URL.createObjectURL(blob);
    ///grp.dom.load();
    grp.vars.frame_number=0;
    grp.vars.prev_time=-1;
    grp.dom.currentTime=0;
    aa.videoPlay(grp.han);
    console.log("yeah");
    }

   //app.fpi
   //console.log(key.key+" "+key.ascii+" "+key.keyCode);
   }
  }
 return true;
 }








 function guixPtrYield (obj)
 {
 var rat,x0,y0,x1,y1;
 var idx,mzi,el,grp,area,spot,mod,div;

 //aaProfilerHit(callerName());

 while(1)
  {
  if((rat=aa.pointerRead())==null)  { break; }
  x0=rat.event.pageX;
  y0=rat.event.pageY;

  guixVlog(0,1,""+(x0|0)+"  "+(y0|0)+" ");

  idx=0;
  for(mzi=0;mzi<1000;mzi++)
   {
   el=aa.guiElementFromPoint(x0,y0,10000-mzi,10000-mzi);
   if(el>0)
    {
    grp=aa.guiGroupGet(el);
    area=aa.guiCssAreaGet(el);
    guixVlog(1,1,"grp.id="+grp.obj.id);
    }
   }


  if(rat.event.type=="pointermove") { continue; }
  if(rat.event.type=="pointerup")
   {
   idx=0;
   for(mzi=0;mzi<1000;mzi++)
    {
    el=aa.guiElementFromPoint(x0,y0,10000-mzi,10000-mzi);
    if(el>0)
     {
     grp=aa.guiGroupGet(el);
     area=aa.guiCssAreaGet(el);
     if(area!=null)
      {
      x1=x0-area.left;
      y1=y0-area.top;
      spot=aa.guiSpotMatch(el,x0,y0);
      if(spot!=null)
       {
       console.log(spot.sid+" "+spot.uv1);
       //if(spot.sid>=2000&&spot.uv1==2000) {  guixSidemenuSnsSet(spot.sid-2000);      return;        }
       if(spot.sid>=2000)
        {
        mod=spot.uv1%100;
        div=((spot.uv1-2000)/100)|0;
        console.log("m",div,mod);
        if(mod==0) { guixSidemenuSnsSet(div);   return;         }
        guixSidemenuItmSet(div,mod);
        //console.log(spot.sid+" "+spot.uv1);
        return;
        }
//console.log(spot.sid+" "+spot.uv1);

       return;
       //if(spot.sid>=2000)   {  guixSidemenuSnsSet(spot.sid-2000);      return;        }
       }
      }
     }
    }

   if(x0<500)   guixSidemenuClick();
   }
  }
 }





 function guixButton (id,spid,x,y,w,h,txt)
 {
 var grp,fnt,fix,str,mes,ww,hh,six,spc,xx,yy,gal;

 grp=aa.guiGroupGetById(id);
 if(grp==null) { aa.debugAlert(); return null; }
 fnt=guixFontSet("arial",300,11);
 fix=0;
 str=""+txt;
 mes=aa.guiCanvasFontMeasure(grp.han,fnt,str);
 ww=mes.aw+6;
 hh=mes.ah+4;
 if(isNaN(txt))
  {
  //console.log("ss "+txt);
  aa.guiCanvasFill(grp.han,x,y,ww,hh,aa.guiRgbaString(5,72,aa.numRandValue(0,200),0.7));
  aa.guiCanvasText(grp.han,x+2,y+2+fix,0,null,aa.guiRgbaString(225,225,226,1),fnt,str);
  aa.guiCanvasBorder(grp.han,x,y,ww,hh,1,aa.guiRgbaString(25,25,226,1));
  aa.guiSpotAdd(grp.han,spid,x,y+fix,ww,hh,1,2,3);
  return;
  }
 six=txt;
 spc=aa.spriteRectGet(app.guix.sprite,six);
 xx=x;
 yy=y;
 if(0) { ww=60;  hh=ww*spc.ratio_hw; }
 else  { hh=32;  ww=hh*spc.ratio_wh; }
 gal=grp.ctx.globalAlpha;
 grp.ctx.globalAlpha=0.8;
 aa.spritePaintByIndex(app.guix.sprite,grp.obj.id,six,xx,yy,ww,hh,0,0,0);
 grp.ctx.globalAlpha=gal;
 aa.guiSpotAdd(grp.han,spid,xx,yy,ww,hh,1,2,3);
 }








 function guixHandlePainting ()
 {
 var z,grp,pdone,ddone;

 //console.log("func",callerName());
 //aaProfilerHit(callerName());

 pdone=ddone=0;
 for(z=0;z<app.guix.group_ray.length;z++)
  {
  grp=app.guix.group_ray[z];
  if(grp.vars.needs_paint!=true&&grp.vars.needs_draw!=true) { continue; }
  if(grp.vars.needs_paint==true) { pdone++; }
  if(grp.vars.needs_draw==true)  { ddone++; }
  if(grp.vars.needs_paint==true)
   {
   if(grp.obj.id.startsWith("top_most"))
    {
    if(aa.numRandValueEquals(0,5,0))
     {
     guixPaintTopMost(grp);
     aa.guiSpotPurge(grp.han);
     if(aa.main_state.stage>=2000)
      {
      guixButton(grp.obj.id,1020, 20,5,60,100,"s "+aa.numRoundPlaces(app.mpipe.satu,2));
      guixButton(grp.obj.id,1024, 80,5,60,100,"b "+aa.numRoundPlaces(app.mpipe.brightness,2));
      guixButton(grp.obj.id,1024, 140,5,60,100,"g "+aa.numRoundPlaces(app.mpipe.gal,2));
      guixButton(grp.obj.id,1022, 200,5,60,100,"c "+aa.numRoundPlaces(app.mpipe.contrast,2));
      }
     guixNeeds(grp.obj.id,false,false);
     }
    continue;
    }
   if(grp.obj.id.startsWith("side_menu"))
    {
    guixSideMenuPaint();
    }
   }
  guixNeeds(grp.obj.id,false,false);
  }
 if(0&&(pdone!=0||ddone!=0)) { console.log(pdone,ddone); }
 }









 function guixVlog (line,lines,txt)
 {
 if(app.guix===undefined) { return; }
 aa.virtualLogSet(app.guix.vlog,line,lines,txt);
 }







 function guixPaintTopMost (grp)
 {
 var fnt,fix,mes,rec,i,l,x,y;

 //aa.guiCanvasClear(grp.han);
 aa.guiCanvasFillFull(grp.han,aa.guiRgbaString(25,25,126,1));
 fnt=guixFontSet("consolas",500,10);
 fix=0;
 x=10;
 y=30;
 for(i=0;i<app.guix.vlog.num_lines;i++)
  {
  mes=aa.guiCanvasFontMeasure(grp.han,fnt,app.guix.vlog.line[i]);
  rec=aa.guiRectSet(x,y,mes.w,mes.h+fix);
  ///aa.guiCanvasFill(grp.han,rec.x,rec.y,rec.w,rec.h,aa.guiRgbaString(25,25,226,1));
///  aa.guiCanvasClear(grp.han,rec);
  aa.guiCanvasText(grp.han,rec.x,rec.y,2,aa.guiRgbaString(2,2,16,1),aa.guiRgbaString(242,245,55,1),fnt,app.guix.vlog.line[i]);
//  aa.guiCanvasText(grp.han,rec.x-2,rec.y-2,0,null,aa.guiRgbaString(242,245,216,1),fnt,app.guix.vlog.line[i]);
  y+=rec.h;
  }

 }


//---------------------------------------------------------




 function guixSideMenuWidthGet ()
 {
 var ids,mxw;
 ids=aa.ifaceDisplaySizesGet();
 app.guix.side.wid=500;
 mxw=((ids[5]*0.85)>>0);
 if(app.guix.side.wid>=mxw)  {  app.guix.side.wid=mxw;   }
 }





 function guixSidemenuInit ()
 {
 app.guix.side.stage=0;
 guixSideMenuWidthGet();
 app.guix.side.pos=-app.guix.side.wid;
 app.guix.side.dir=1;
 app.guix.side.speed=38;
 app.guix.side.sns=-1;
// app.guix.side.sns=1;
 app.guix.side.num_section=0;
 app.guix.side.data_ray=[];
 }



 function guixSidemenuItmSet (val,itm)
 {
 var grp;
 //console.log("item "+val+"  "+itm);
 switch(val)
  {
  case 0:
  mediaCamSwap(itm-1);
  break;
  case 1:
  mediaMicSwap(itm-1);
  break;
  case 3:
  if((itm-1)==0)
   {
   if(opts.use_mp4==0) { opts.use_mp4=1; }
   else                { opts.use_mp4=0; }
   if(opts.use_mp4==1)
    {
    if((grp=aa.guiGroupGetById("vippy"))==null) { aa.debugAlert("eee"); }
    aa.videoPlay(grp.han);
    break;
    }
   break;
   }
  else
  if((itm-1)==1)
   {
   if(opts.show_top_most==0) { opts.show_top_most=1; }
   else                      { opts.show_top_most=0; }
   guixNeeds("side_menu",true,true);
   break;
   }
  else
  if((itm-1)==2)
   {
   if(opts.use_pic==0) { opts.use_pic=1; }
   else                { opts.use_pic=0; }
   guixNeeds("side_menu",true,true);
   break;
   }

  break;
  default:
//  console.log("item "+val+"  "+itm);
  break;
  }
 guixNeeds("side_menu",true,true);
 }




 function guixSidemenuSnsSet (val)
 {
 var old;
 old=app.guix.side.sns;
 app.guix.side.sns=val;
 if(app.guix.side.sns==old) { app.guix.side.sns=-1; }
 //console.log("snsset, old="+old+"  new="+val+"  and="+app.guix.side.sns);
 guixNeeds("side_menu",true,true);
 }





 function guixSidemenuClick ()
 {
// console.log("click "+app.guix.side.stage)
 switch(app.guix.side.stage)
  {
  case 0:
  guixSideMenuWidthGet();
  if(app.guix.side.pos==-app.guix.side.wid)   {   app.guix.side.stage=100;   app.guix.side.dir=1;   break;   }
  if(app.guix.side.pos==0)                    {   app.guix.side.stage=140;   app.guix.side.dir=-1;  break;   }
  break;

  case 100:
  break;
  app.guix.side.stage=140;
  app.guix.side.dir=-1;
  break;


  case 140:
  break;
  app.guix.side.stage=100;
  app.guix.side.dir=+1;
  break;
  }
 }







 function guixSidemenuAssert(grp,dwid,dhit)
 {
 var xx,yy,ww,hh,chg,ids,re,al;

// console.log(app.guix.side.stage)
 re=true;
 al=0.8;
 switch(app.guix.side.stage)
  {
  case 0:
  xx=app.guix.side.pos;
  yy=0;
  ww=app.guix.side.wid;
  hh=dhit;
  chg=guixAssertion(grp,"inline-block",re,al,xx,yy,ww,hh,ww,hh);
  if(chg>0)   {    guixNeeds("side_menu",true,true);   }
  break;

  case 100:
  if(app.guix.side.pos>0) { app.guix.side.pos=0; }
  xx=app.guix.side.pos;
  yy=0;
  ww=app.guix.side.wid;
  hh=dhit;
  chg=guixAssertion(grp,"inline-block",re,al,xx,yy,ww,hh,ww,hh);
  if(app.guix.side.pos==0) { app.guix.side.stage=0; break; }
  app.guix.side.pos+=app.guix.side.speed;
  break;


  case 140:
  if(app.guix.side.pos<-app.guix.side.wid) { app.guix.side.pos=-app.guix.side.wid; }
  xx=app.guix.side.pos;
  yy=0;
  ww=app.guix.side.wid;
  hh=dhit;
  chg=guixAssertion(grp,"inline-block",re,al,xx,yy,ww,hh,ww,hh);
  if(app.guix.side.pos==-app.guix.side.wid) { app.guix.side.stage=0; break; }
  app.guix.side.pos-=app.guix.side.speed;
  break;
  }
 }



 function guixSidemenuDataReset ()
 {
 app.guix.side.data_ray=[];
 app.guix.side.num_section=0;
 }



 function guixSidemenuDataAppend (type,data)
 {
 data.self_index=app.guix.side.data_ray.length;
 data.type=type;
 app.guix.side.data_ray.push(data);
 }






 function guixSidemenuHeadingAppend (data,state)
 {
 guixSidemenuDataAppend("hed",{data:data,open:state,section:app.guix.side.num_section});
 app.guix.side.num_section++;
 }




 function guixSidemenuItemAppend (data,state,isswitch)
 {
 guixSidemenuDataAppend("itm",{data:data,state:state,isswitch:isswitch});
 }





 function guixSidemenuSectionSet (sec,state)
 {
 var di,dl,itema;
 dl=app.guix.side.data_ray.length;
 for(di=0;di<dl;di++)
  {
  itema=app.guix.side.data_ray[di];
  if(itema.type!="hed")   { continue; }
  if(sec==-1)             { itema.open=state;   continue;   }
  if(itema.section!=sec)  { continue; }
  itema.open=state;
  break;
  }
 }





 function guixSideMenuPaint ()
 {
 var probe,spx,spc,rc,grp,fnt,fix,mes,txt,xx,yy,grad,ww,hh;
 probe=aa.guiProbeGet(aa.guiGroupGetById("side_menu").han);
 if((grp=aa.guiGroupGetById(probe.id))==null) { aa.debugAlert("rfff"); }
 xx=probe.css_area.left;
 ww=probe.css_area.width;
 hh=probe.css_area.height;
 if(isNaN(ww)) { ww=0; }
 if(isNaN(hh)) { hh=0; }
 grad=guixGradient(grp,0,0,ww,hh,0.0,aa.guiRgbaString(112,124,130,1.0),1.0,aa.guiRgbaString(233,183,221,1.0));
 aa.guiCanvasFill(grp.han,0,0,ww,hh,grad);
 guixSidemenuBuild();
 guixSidemenuDump();
 //console.log("side menu paint");
 }






 function guixSidemenuBuild ()
 {
 var den,i,str,str,di,dl,itema,grp;

 if((grp=aa.guiGroupGetById("side_menu"))==null) { aa.debugAlert("eee"); }
 aa.guiSpotPurge(grp.han);

 if(app.media&&app.media.active_devenu) { den=app.media.active_devenu; }
 else                                   { den=null; }

 guixSidemenuDataReset();

 if(app.guix.side.data_ray.length!=0) { aa.debugAlert(); }

  if(den&&den.vid_input_list.length>1)
   {
   str="Video";
   guixSidemenuHeadingAppend(str,false);
   for(i=0;i<den.vid_input_list.length;i++)
    {
    str=den.vid_input_list[i].clean;
    guixSidemenuDataAppend("itm",{data:str,state:(app.media.cur_vxi==i),isswitch:false});
    }
   }

  if(den&&den.aud_input_list.length>1)
   {
   str="Audio";
   guixSidemenuHeadingAppend(str,false);
   for(i=0;i<den.aud_input_list.length;i++)
    {
    str=den.aud_input_list[i].clean;
    guixSidemenuDataAppend("itm",{data:str,state:(app.media.cur_axi==i),isswitch:false});
    }
   }

  if(den&&den.aud_output_list.length>1)
   {
   str="Speakers";
   guixSidemenuHeadingAppend(str,false);
   for(i=0;i<den.aud_output_list.length;i++)
    {
    str=den.aud_output_list[i].clean;
    guixSidemenuDataAppend("itm",{data:str,state:(app.media.cur_axo==i),isswitch:false});
    }
   }

  str="Options";
  guixSidemenuHeadingAppend(str,false);
  str="use clip";
  guixSidemenuDataAppend("itm",{data:str,state:(opts.use_mp4),isswitch:true});
  str="show top most";
  guixSidemenuDataAppend("itm",{data:str,state:(opts.show_top_most),isswitch:true});
  str="use pic";
  guixSidemenuDataAppend("itm",{data:str,state:(opts.use_pic),isswitch:true});


//  guixSidemenuItemAppend("Audio activity",false,true);
//  guixSidemenuItemAppend("Audio activity",false,true);
//  guixSidemenuItemAppend("Auto hello",true,true);

  str="Effects";
  guixSidemenuHeadingAppend(str,false);
  guixSidemenuDataAppend("itm",{data:'Censor',state:false,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'Disco',state:true,isswitch:false});

  str="Todo";
  guixSidemenuHeadingAppend(str,false);
  guixSidemenuDataAppend("itm",{data:'Scrolling chat log',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'File sharing',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'Screen sharing',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'Single color polys',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'Cache Wasm',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'crolling chat log',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'ile sharing',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'creen sharing',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'ingle color polys',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'ache Wasm',state:true,isswitch:false});

  str="Bugs";
  guixSidemenuHeadingAppend(str,false);
  guixSidemenuDataAppend("itm",{data:'More than I care for',state:true,isswitch:false});

  str="About";
  guixSidemenuHeadingAppend(str,false);
  guixSidemenuDataAppend("itm",{data:'aa_version: '+aa_version,state:false,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'copyright: ope(c)n Ashod Apakian',state:false,isswitch:false});

 guixSidemenuSectionSet(-1,false);
 if(app.guix.side.sns>=0)  {  guixSidemenuSectionSet(app.guix.side.sns,true);  }

// console.log("side menu build");
 return true;
 }






 function guixText (grp,xx,yy,xd,yd,slw,sc,fc,scd,fcd,font,text)
 {
 aa.guiCanvasText(grp.han,xx,yy,slw,sc,fc,font,text);
 if(xd==0&&yd==0) { return; }
 aa.guiCanvasText(grp.han,xx+xd,yy+yd,slw,scd,fcd,font,text);
 }





 function guixGradient (grp,xx,yy,ww,hh)
 {
 var grad,perc,rgba,i,l;
 grad=grp.ctx.createLinearGradient(xx,yy,ww,hh);
 l=arguments.length;
 for(i=5;i<l;i+=2)
  {
  perc=Number(arguments[i+0]);
  rgba=arguments[i+1];
  grad.addColorStop(perc,rgba);
  }
 return grad;
 }








 function guixSidemenuDump ()
 {
 var grpv,gpsz,grpa,di,dl,itema,itemb;
 var xx,yy,txt,etc,fnt,mesa,mesb,mesd,str;
 var spc,ww,hh,fs,six,wid,hit;
 var nexthed,spid,itid,grad,cnt;

 if((grpv=aa.guiGroupGetById("side_menu"))==null) { aa.debugAlert(); }
 gpsz=aa.guiSizesGet(grpv.han);
 //nsole.log(gpsz);
 spid=2000;
 itid=2000;
 cnt=0;

 grpa=null;
 xx=14;
 yy=50;
 dl=app.guix.side.data_ray.length;
 di=0;
 nexthed=false;
 ww=gpsz.csswh[0];
 wid=gpsz.csswh[0]-30;
 if(isNaN(wid)) return false;

 while(1)
  {
  if(di>=dl) { break; }
  itema=app.guix.side.data_ray[di];

  if(nexthed==true)
   {
   if(itema.type!="hed") { di++; continue; }
   nexthed=false;
   }

  if(itema.type=="hed")
   {
   itid=(cnt*100)+2000;
   ww=gpsz.csswh[0];
   txt=itema.data;
   if(itema.open==true) {   etc=aa.guiUni("u25b2"); }
   else                 {   etc=aa.guiUni("u25bc"); }
   fs=24;
   fnt=guixFontSet("arial",300,fs);
   mesa=aa.guiCanvasFontMeasure(grpv.han,fnt,txt);
   mesb=aa.guiCanvasFontMeasure(grpv.han,fnt,etc);
   if(itema.open==true)  {   grad=guixGradient(grpv,0,yy,ww,30,0,aa.guiRgbaString(112,124,130,1.0),1,aa.guiRgbaString(22,22,255,1));    }
   else                  {   grad=guixGradient(grpv,0,yy,ww,30,0,aa.guiRgbaString(112,124,130,1.0),1,aa.guiRgbaString(233,183,221,1));    }


   aa.guiCanvasFill(grpv.han,0,yy,ww,30,grad);
   aa.guiCanvasText(grpv.han,xx              ,yy ,2,aa.guiRgbaString(10,10,19,1),aa.guiRgbaString(240,180,70,1),fnt,txt);
   aa.guiCanvasText(grpv.han,(xx+wid)-mesb.aw,yy ,2,aa.guiRgbaString(10,10,19,1),aa.guiRgbaString(240,245,20,1),fnt,etc);
   aa.guiSpotAdd(grpv.han,spid,0,yy+2,ww,30-4,itid,0,0);


   spid++;
   cnt++;
   yy+=mesa.height+8;
   if(itema.open!=true) { nexthed=true; di++; continue; }
   }
  else
  if(itema.type=="itm")
   {
   ww=gpsz.csswh[0];
   itid++;
   txt=itema.data;
   fs=24;
   fnt=guixFontSet("resty",300,fs);
   mesa=aa.guiCanvasFontMeasure(grpv.han,fnt,"|");
   mesb=aa.guiCanvasFontMeasure(grpv.han,fnt,txt);
   aa.guiCanvasFill(grpv.han,0,yy,ww,mesa.height+2,aa.guiRgbaString(10,80,139,1));
   aa.guiCanvasText(grpv.han,xx+24          ,yy+2,0,null,aa.guiRgbaString(10,10,19,1),fnt,txt);
   aa.guiCanvasText(grpv.han,xx+22          ,yy-0,0,null,aa.guiRgbaString(240,240,240,1),fnt,txt);
   aa.guiSpotAdd(grpv.han,spid,0,yy+2,ww,mesa.height,itid,0,0);
   spid++;
   if(itema.isswitch==true)
    {
    if(itema.state==true)
     {
     six=27;
     spc=aa.spriteRectGet(app.guix.sprite,six);
     hh=20;    ww=hh*spc.ratio_wh;
     aa.spritePaintByIndex(app.guix.sprite,grpv.obj.id,six,xx,yy+2,ww,hh,0,0,0);
     }
    }
   else
   if(itema.isswitch==false)
    {
    if(itema.state==true)
     {
     six=63;
     spc=aa.spriteRectGet(app.guix.sprite,six);
     hh=20;    ww=hh*spc.ratio_wh;
     aa.spritePaintByIndex(app.guix.sprite,grpv.obj.id,six,xx,yy+2,ww,hh,0,0,0);
     }
    }
   yy+=mesa.height+2+2;
   spid++;
   }
  else
   {
   aa.debugAlert();
   }
  di++;
  }
 //console.log("side menu dump");
 return true;
 }



//---------------------------------------------------------






 function guiImageContrastSet (imgData,contrast)
 {
 var val,d,intercept,i;
 var rr,gg,bb;

 if(contrast==0) { return imgData; }
 val=contrast;
  //console.log(val);
 d=imgData.data;
 val=(val/100)+1;
 intercept=128*(1-val);

//onsole.log(val,intercept,val+intercept);
 for(i=0;i<d.length;i+=4)
  {
  ///rr=d[i+0]; gg=d[i+1]; bb=d[i+2];
  d[i+0]=d[i+0]*val+intercept;
  d[i+1]=d[i+1]*val+intercept;
  d[i+2]=d[i+2]*val+intercept;
  //console.log(rr+"="+d[i+0]+"  "+gg+"="+d[i+1]+"  "+bb+"="+d[i+1]+"  ");
  }
 return imgData;
 }





 function guiImageBrisatSet (imgData,brightness,saturation)
 {
 var d,i,rr,gg,bb,hsv,rgb;

 if(brightness==1&&saturation==1) { return imgData; }
 //console.log(imgData);
 d=imgData.data;
 for(i=0;i<d.length;i+=4)
  {
  rr=d[i+0];
  gg=d[i+1];
  bb=d[i+2];
  rgb=aa.guiRgbaSet(rr,gg,bb,255);
  hsv=aa.guiRgbaToHsva(rgb);
  hsv.s*=saturation;
  hsv.v*=brightness;
  rgb=aa.guiHsvaToRgba(hsv);
  d[i+0]=rgb.r;
  d[i+1]=rgb.g;
  d[i+2]=rgb.b;
  }
 return imgData;
 }






 function inputBtn()
 {
 var rat;
 var input=document.createElement('input');
 input.type="file";
 //  input.multiple =false;
 input.accept="image/jpeg";
 input.id="ffff";
 input.name="effff";
 document.getElementById('bodid').appendChild(input);
 input.style.position="absolute";
 input.style.left="600px";
 input.style.top="300px";
 input.style.width="90px";
 input.style.touchAction="auto";
 input.style.pointerEvents="auto";
 input.onclick=(e)=>
  {
  if((e.x<600||e.x>690)||(e.y<300||e.y>350))
   {
   e.preventDefault();
   }
  }
 input.onchange=(e)=>
  {
  var file=e.target.files[0];
  if(file&&file.type.match('image.*'))
   {
   const reader=new FileReader();
   reader.addEventListener("load",() =>
    {
    aa.imageLoaderDelete(app.guix.image[0]);
    app.guix.image[0]=aa.imageLoaderNew(reader.result);
    setTimeout(()=>
     {
     rat=app.guix.image[0].img.width/app.guix.image[0].img.height;
     //app.mpipe.obj_ray[1].needs_touching=true;
     guixVlog(14,3,"loaded  "+app.guix.image[0].img.width+"  "+app.guix.image[0].img.height+"  "+rat);
     },"2000");
    },false);
   reader.readAsDataURL(e.target.files[0])
   }
  }
 input.style.zIndex=10000;
 }



//---------------------------------------------------------





 function canvasTextureMapper (handle,sindex,count,zeee,zeeeoi,xyuv0,xyuv1,xyuv2,xyuv3,img)
 {
 var len,end,grp,c,t,i,j;
 var sx0,sy0,su0,sv0;
 var sx1,sy1,su1,sv1;
 var sx2,sy2,su2,sv2;
 var sx3,sy3,su3,sv3;
 var x0,x1,x2,u0,u1,u2;
 var y0,y1,y2,v0,v1,v2;
 var delta_0,delta_a,delta_b,delta_c,delta_d,delta_e,delta_f;
 var z0,z1,z2,z3;
 var zel;

 aaProfilerHit(callerName());
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

 //console.log(xyuv2);

 //console.log(zeee.length);
 //console.log(zeeeoi.length);
 //console.log(zeeeoi[0]);
 //count=440;
 //count=100;
 grp.ctx.save();
 grp.ctx.strokeStyle="";
 grp.ctx.fillStyle="";
 grp.ctx.lineWidth=0;

/// zel=zeeeoi.length;
 //console.log(zel);
 for(j=0;j<count;j++)
  {
  i=sindex+j;
  //i=zeeeoi[880-i-1];
  //i=zeeeoi[i];

  //if(j<0) { continue; }
//  if(j<50) { continue; }

  ///if(0) { i=zeeeoi[zel-(sindex+j)-1]; }
  ///else  { i=zeeeoi[(sindex+j)]; }

  //if((j%10)==0)   { console.log(j,i,zeee[j]); }

  //if(zeee[j]<15) continue;



  //if(j<20) continue;

  sx0=xyuv0[i].x; sx1=xyuv1[i].x; sx2=xyuv2[i].x;
  sy0=xyuv0[i].y; sy1=xyuv1[i].y; sy2=xyuv2[i].y;
  su0=xyuv0[i].u; su1=xyuv1[i].u; su2=xyuv2[i].u;
  sv0=xyuv0[i].v; sv1=xyuv1[i].v; sv2=xyuv2[i].v;
  if(c>=2)  {
  sx3=xyuv3[i].x; sy3=xyuv3[i].y; su3=xyuv3[i].u;  sv3=xyuv3[i].v;
  }
  if(sx0==-12345) continue;

  grp.ctx.save();
  for(t=0;t<c;t++)
   {
   if(t==0) {  x0=sx0; x1=sx1; x2=sx2; y0=sy0; y1=sy1; y2=sy2; u0=su0; u1=su1; u2=su2; v0=sv0; v1=sv1; v2=sv2; }
   else     {  x0=sx2; x1=sx3; x2=sx0; y0=sy2; y1=sy3; y2=sy0; u0=su2; u1=su3; u2=su0; v0=sv2; v1=sv3; v2=sv0; }
   if(t==0&&1)
    {
    grp.ctx.beginPath();
    grp.ctx.moveTo(sx0,sy0);
    grp.ctx.lineTo(sx1,sy1);
    grp.ctx.lineTo(sx2,sy2);
    if(c==2) { grp.ctx.lineTo(sx3,sy3); }
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
   grp.ctx.drawImage(img,0,0);
   }
  grp.ctx.restore();
  }
 grp.ctx.restore();
 return true;
 }







