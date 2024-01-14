//---------------------------------------------------------
// "use strict";
//--------------------------------------------------------

var all_ok=0;

 function mediaCanvasPaint (obj)
 {
 var vgrp,ready,vgsz,isplaying,fps,mgt,res,same,dwid,dhit,osi;


 if(app.mpipe===undefined) { return; }
 //console.log(app.mpipe);//.obj_ray.length);
 if(app.mpipe.obj_ray[0].is_ready!=true) { return; }
 if(app.mpipe.obj_ray[1].is_ready!=true) { return; }
 if(app.mpipe.obj_ray[2].is_ready!=true) { return; }
 if(app.mpipe.obj_ray[3].is_ready!=true) { return; }

 if(app.media==undefined) { return; }
 if(app.media.handle<=0)  { return; }
 mgt=aa.mediaGet(app.media.handle);
 if(mgt.res==null)        { return; }
 if(mgt.res!="ok")        { alert("res="+mgt.res); return; }

 dwid=obj.this_dsz[5];
 dhit=obj.this_dsz[8];

 if(opts.use_mp4==0) { vgrp=aa.guiGroupGetById("b_video_0"); }
 else                { vgrp=aa.guiGroupGetById("vippy");     }
 if(vgrp==null||vgrp.dom.videoWidth==0)    { return; }

 while(1)
  {
  ready=false;
  if(app.media.is_swapping==true) {   break; }
  if(vgrp.obj.dom.readyState!=4)  {   break; }
  if(vgrp.obj.vars.prev_time!==undefined)  {   if(vgrp.obj.dom.currentTime==vgrp.obj.vars.prev_time)  { break;   }   }
  ready=true;
  break;
  }

 if(ready!=true)     { return; }
 isplaying=vgrp.dom.currentTime>0&&!vgrp.dom.paused&&!vgrp.dom.ended&&vgrp.dom.readyState>2;
 if(isplaying!=true) { return; }

 vgsz=aa.guiSizesGet(vgrp.han);
 if(vgrp.obj.vars.frame_number==undefined)   {   vgrp.obj.vars.frame_number=0; }
 if(vgrp.obj.vars.frame_number==0)           {   vgrp.obj.vars.start_time=vgrp.obj.dom.currentTime;   }

 vgrp.obj.vars.frame_number++;

 same=false;
 if(vgrp.obj.vars.prev_time==vgrp.obj.dom.currentTime) { same=true; } //!!

 vgrp.obj.vars.prev_time=vgrp.obj.dom.currentTime;
 fps=0;
 if(vgrp.obj.vars.frame_number>0) { fps=vgrp.obj.vars.frame_number/(vgrp.obj.dom.currentTime-vgrp.obj.vars.start_time); }
 vgrp.obj.vars.fps=fps;

 if(1)
  {
  osi=0;
  mpipeWrite(app.mpipe.obj_ray[osi], vgsz.vidwh[0],vgsz.vidwh[1],vgrp.dom);
  mpipeSend(app.mpipe.obj_ray[osi]);
  }


 if(0)
  {
  osi=2;
  mpipeWrite(app.mpipe.obj_ray[osi], vgsz.vidwh[0],vgsz.vidwh[1],vgrp.dom);
  //mpipeSend(app.mpipe.obj_ray[osi]);
  }


 }




//---------------------------------------------------------



 function mpipeStart ()
 {
 app.mpipe={};
 app.mpipe.obj_ray=[];
 mpipeCreate("fm","video",320,240);
 mpipeCreate("fm","image",320,240);
 mpipeCreate("ss","video",320,240);
 mpipeCreate("ss","image",320,240);
 app.mpipe.satu=1.0;
 app.mpipe.brightness=1.0;
 app.mpipe.contrast=1;
 app.mpipe.gal=0.90;
 app.mpipe.obj_pf=0;
 }






 function mpipeCreate (what,name,width,height)
 {
 var obj,disp,req;

 obj={};
 obj.type="mpipe";
 obj.what=what;
 obj.name=name;
 obj.self_index=app.mpipe.obj_ray.length;
 obj.stage=100;

 obj.is_started=true;
 obj.is_ready=false;
 obj.is_working=false;
 obj.is_ok=false;

 obj.raw_queue=aa.queueCreate();
 obj.pro_queue=aa.queueCreate();
 obj.raw_qs=aa.queueStatus(obj.raw_queue);
 obj.pro_qs=aa.queueStatus(obj.pro_queue);

 obj.ss=null;
 obj.fm=null;

 obj.last_pop=null;
 if(0) { disp="inline-block"; }
 else  { disp="none"; }

 obj.can_id="mpipe_canvas_"+obj.self_index;
 obj.can_wid=width;
 obj.can_hit=height;
 obj.can_handle=aa.guiCreate("canvas",obj.can_id,9995);
 obj.can_grp=aa.guiGroupGetById(obj.can_id);
 obj.can_probe=aa.guiProbeGet(obj.can_handle);

 req={};
 req.type="guirequirments";
 req.disp=disp;
 req.retina=false;
 req.opa=1.0;
 req.x=640;//+(obj.self_index*320);
 req.y=(obj.self_index*240);
 req.w=obj.can_wid;
 req.h=obj.can_hit;
 req.domw=obj.can_wid;
 req.domh=obj.can_hit;

 obj.can_changes=aa.guiProbeCompare(obj.can_probe,req.disp,req.retina,req.opa,req.x,req.y,req.w,req.h,req.domw,req.domh);
 aa.guiApply(obj.can_probe.handle,req.disp,req.retina,req.opa,req.x,req.y,req.w,req.h,req.domw,req.domh);
 switch(obj.can_id)
  {
  default: console.log("SHIT "+obj.can_id); break;

  case "mpipe_canvas_0":
  //aa.guiCssOutlineSet(obj.can_probe.handle,3,-4,"double",aa.guiRgbaString(0,255,255,1));
  break;

  case "mpipe_canvas_1":
  //aa.guiCssOutlineSet(obj.can_probe.handle,3,-4,"double",aa.guiRgbaString(255,255,0,1));
  break;

  case "mpipe_canvas_2":
  //aa.guiCssOutlineSet(obj.can_probe.handle,3,-4,"double",aa.guiRgbaString(0,255,255,1));
  break;

  case "mpipe_canvas_3":
  //aa.guiCssOutlineSet(obj.can_probe.handle,3,-4,"double",aa.guiRgbaString(255,255,0,1));
  break;
  }
 obj.can_probe=aa.guiProbeGet(obj.can_handle)
 app.mpipe.obj_ray.push(obj);
 return obj;
 }





 function mpipeCordGet (lmark,index,xmul,ymul,zmul)
 {
 var cd;
 if(lmark==undefined) { return null; }
 if(index<0||index>=lmark.length) { aa.debugAlert("eea2"); }
 cd={};
 cd.type="mpipecord";
 cd.x=lmark[index].x*xmul;
 cd.y=lmark[index].y*ymul;
 cd.z=lmark[index].z*zmul;
 return cd;
 }





 function mpipeQueueStatus (obj)
 {
 if(obj.type!="mpipe") { return; }
 obj.pro_qs=aa.queueStatus(obj.pro_queue);
 obj.raw_qs=aa.queueStatus(obj.raw_queue);
 guixVlog(6+obj.self_index,1,obj.self_index+" raw="+obj.raw_qs.msgs_queued+"  rtot="+obj.raw_qs.msgs_total+" pro="+obj.pro_qs.msgs_queued+" ptot="+obj.pro_qs.msgs_total);
 }




 function mpipeRead (obj)
 {
 var io;
 if(obj.type!="mpipe")             { return null; }
 if(obj.is_ready!=true)            { return null; }
 if((io=aa.queueRead(obj.pro_queue))==null) { return null; }
 mpipeQueueStatus(obj);
 return io;
 }




 function mpipePeek (obj)
 {
 var io;
 if(obj.type!="mpipe")             { return null; }
 if(obj.is_ready!=true)            { return null; }
 if((io=aa.queuePeek(obj.pro_queue,0))==null) { return null; }
 mpipeQueueStatus(obj);
 return io;
 }




 function mpipeWrite (obj,wid,hit,img)
 {
 var io,egrz,imw,imh,hsv,rgb,pix;

 if(obj.type!="mpipe")   { aa.debugAlert(); return false; }
 if(obj.is_ready!=true)  { console.log(obj.self_index+" is_ready!=true");  return false; }
 if((egrz=guixGrpSizesGet(obj.can_id))==null)  { aa.debugAlert(); }
 mpipeQueueStatus(obj);
 if(obj.pro_qs.msgs_queued>0) { return false; }
 if(obj.raw_qs.msgs_queued>0) { return false; }

 ///console.log(obj.self_index+" pipe write "+obj.can_id+"  "+obj.raw_qs.msgs_queued+"  "+obj.raw_qs.msgs_total+"  "+obj.pro_qs.msgs_queued+"  "+obj.pro_qs.msgs_total);

if(0)
 {
 if(obj.self_index==0)
  {
  aa.guiCanvasImageDraw(egrz.grp.han, 0,0, wid , hit, 0,0,egrz.gsz.domwh[0],egrz.gsz.domwh[1], img);
  }
 else
 if(obj.self_index==1)
  {
  aa.guiCanvasImageDraw(egrz.grp.han, 0,0, wid , hit, 0,0,egrz.gsz.domwh[0],egrz.gsz.domwh[1], img);
  }
 else
 if(obj.self_index==2)
  {
  aa.guiCanvasImageDraw(egrz.grp.han, 0,0, wid , hit, 0,0,egrz.gsz.domwh[0],egrz.gsz.domwh[1], img);
  }
 else
 if(obj.self_index==3)
  {
  aa.guiCanvasImageDraw(egrz.grp.han, 0,0, wid , hit, 0,0,egrz.gsz.domwh[0],egrz.gsz.domwh[1], img);
  }
 if(obj.self_index==1&&0)
  {
  pix=aa.guiCanvasImageGet(egrz.grp.han,  0,0,egrz.gsz.domwh[0],egrz.gsz.domwh[1]);
  pix=guiImageBrisatSet(pix,app.mpipe.brightness,app.mpipe.satu);
  pix=guiImageContrastSet(pix,app.mpipe.contrast);
  aa.guiCanvasImagePut(egrz.grp.han, 0,0,  0,0,egrz.gsz.domwh[0],egrz.gsz.domwh[1],   pix);
  }
 io={};
 io.width=egrz.gsz.domwh[0];
 io.height=egrz.gsz.domwh[1];
 io.vframe=egrz.grp.dom;
 aa.queueWrite(obj.raw_queue,io);
 mpipeQueueStatus(obj);
 }
 else
 {
 io={};
 io.width=wid;
 io.height=hit;
 io.vframe=img;
 aa.queueWrite(obj.raw_queue,io);
 mpipeQueueStatus(obj);
 }



 return true;
 }





 function mpipeSend (obj)
 {
 var raw;
 if(obj.type!="mpipe")       { return false; }
 if(obj.is_ready!=true)      { return false; }
 if(obj.is_working==true)    { return false; }
 if((raw=aa.queueRead(obj.raw_queue))==null) { return false; }
 mpipeQueueStatus(obj);
 obj.is_working=true;
 if(obj.what=="fm")
  {
  obj.fm.send({image:raw.vframe});
  }
 else
 if(obj.what=="ss")
  {
  obj.ss.send({image:raw.vframe});
  }
 else
  {
  aa.debugAlert();
  }
 //obj.is_working=true;
 return true;
 }





 var flag0=0;





 function mpipeProcessor (obj)
 {
 var iu,img,ret,vgrp,vgsz,cobj;
 var wid0,hit0,wid2,hit2

 if(obj==undefined)       { return false; }
 if(obj.type!="mpipe")    { return false; }
 if(obj.is_started!=true) { return false; }

 if(flag0==0&&aa.main_state.initial_click==true)  {  inputBtn();  flag0=1;  }

 if(obj.self_index==0) { cobj=app.mpipe.obj_ray[1]; } else
 if(obj.self_index==1) { cobj=app.mpipe.obj_ray[0]; } else

 if(obj.self_index==2) { cobj=app.mpipe.obj_ray[3]; } else
 if(obj.self_index==3) { cobj=app.mpipe.obj_ray[2]; } else  { aa.debugAlert(); }

 while(1)
  {
  switch(obj.stage)
   {
   case 100:
   if(obj.what=="fm") { obj.stage=200; }
   else               { obj.stage=300; }
   break;


   case 200:
   obj.fm=new FaceMesh({locateFile:(file)=>{ return "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/"+file;  }});
   obj.fm.setOptions({maxNumFaces:1,
                      refineLandmarks:true,
                      minDetectionConfidence:0.5,
                      minTrackingConfidence:0.5,
                      selfieMode:false,
                      useCpuInference:false,
                      cameraNear:false,
                      cameraFar:false,
                      cameraVerticalFovDegrees:59,
                      enableFaceGeometry:false});
   obj.fm.onResults(function(results)
    {
    ///console.log("is _ok "+obj.self_index);
    obj.is_ok=true;
    if(obj.is_working!=true)   { aa.debugAlert(); }
    obj.is_working=false;

    if(0)
     {
     aa.queueWrite(obj.pro_queue,results);
     mpipeQueueStatus(obj);
     }
    else
     {
     aa.queueWrite(obj.pro_queue,results);
     mpipeQueueStatus(obj);

     wid0=results.image.width;
     hit0=results.image.height;
     mpipeWrite(app.mpipe.obj_ray[2], wid0,hit0,results.image);
     mpipeSend(app.mpipe.obj_ray[2])
     }

    return;
    });
   console.log(obj.self_index+" fm ready");
   obj.is_ready=true;
   all_ok++;
   obj.stage=220;
   break;



   case 220:
   if(mpipeSend(obj)==true) { }
   if(obj.self_index!=1) { break; }
   if(cobj.is_ok!=true)  { break; }
   ///mpipeQueueStatus(obj);
   /*
   if(opts.use_mp4==1&&opts.use_pic==0)
    {
    vgrp=aa.guiGroupGetById("b_video_0");
    vgsz=aa.guiSizesGet(vgrp.han);
    mpipeWrite(obj, vgsz.vidwh[0],vgsz.vidwh[1],vgrp.dom);
    mpipeSend(obj);
    break;
    }
   if(opts.use_mp4==1&&opts.use_pic==1)
    {
    iu=0;
    img=app.guix.image[iu].img;
    mpipeWrite(obj,img.width,img.height,img);
    mpipeSend(obj);
    break;
    }
   if(opts.use_mp4==0&&opts.use_pic==1)
    {
    if(obj.raw_qs.msgs_total==0)    {     sigLog(7,obj.self_index+" sending pic "+obj.raw_qs.msgs_queued+"  "+obj.raw_qs.msgs_total+" "+obj.pro_qs.msgs_queued+"  "+obj.pro_qs.msgs_total);     }
    iu=0;
    img=app.guix.image[iu].img;
    mpipeWrite(obj,img.width,img.height,img);
    mpipeSend(obj);
    break;
    }
   if(opts.use_mp4==0&&opts.use_pic==0)
    {
    vgrp=aa.guiGroupGetById("vippy");
    vgsz=aa.guiSizesGet(vgrp.han);
    mpipeWrite(obj, vgsz.vidwh[0],vgsz.vidwh[1],vgrp.dom);
    mpipeSend(obj);
    break;
    }
   aa.debugAlert();
   */
   break;





   case 300:
   //obj.ss=new SelfieSegmentation({locateFile:(file)=>{ return "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/"+file; }});
   obj.ss=new SelfieSegmentation({locateFile:(file)=>{ return "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/"+file; }});
   obj.ss.setOptions({modelSelection:1});
   obj.ss.onResults(function(results)
    {
    ///console.log("is _ok "+obj.self_index);
    obj.is_ok=true;
    if(obj.is_working!=true)   { aa.debugAlert(); }
    obj.is_working=false;
    aa.queueWrite(obj.pro_queue,results);
    mpipeQueueStatus(obj);
    return;
    });
   console.log(obj.self_index+" ss ready");
   all_ok++;
   obj.is_ready=true;
   obj.stage=320;
   break;


   case 320:
   //console.log("AA "+obj.self_index+"  "+cobj.is_ok);
   //break;
   //if(obj.self_index!=2) { break; }
   //if(cobj.is_ok!=true)  { break; }

   if(mpipeSend(obj)==true) { }
   ///mpipeQueueStatus(obj);
   break;
   }
  break;
  }
 }














 function mpipeYield ()
 {
 var done,go,oix,obj,rvl,done,obj0,obj1,pkt0,pkt1,pkt2,pkt3;
 var obj2,obj3;
 var wid0,hit0,wid1,hit1,wid2,hit2,wid3,hit3;
 var cgrz,egrz;
 var ii,il,cd;
 var lcd0,lcd1,i,l,guide;
 var xyu0,xyu1,xyu2,xyu3,nn,t0,t1,t2,t3;
 var exy0,exy1,exy2,exy3;
 var zeee,j;
 var ela,go;
 var pix0,pix1,pix2,pix3;
 var ok,oi,ml,mouth,gal;
 var pixa,pixb;
 var x0,y0,z0,x1,y1,z1,x2,y2,z2,x3,y3,z3;
 //var ex0,ey0,ex1,ey1,ex2,ey2,ex3,ey3;
 var brec;
 var rr0,gg0,bb0,rr1,gg1,bb1,eeq;
 var rix;
 var lmk0,lmk1,lmk2,lmk3;
 var mat,how;
 var sci,sco,scx,sxt,savg;
 var zz0,rgb,al,pp;
 var stride,len,iii,lw,hi;
 var facerlm,go;
 var osi;


 aaProfilerHit(callerName());

 if(app.mpipe==undefined)         { return; }
 if(app.mpipe.obj_ray==undefined) { return; }

 done=0;
 for(go=0;go<app.mpipe.obj_ray.length;go++)
  {
  oix=app.mpipe.obj_pf;
  obj=app.mpipe.obj_ray[oix];
  rvl=mpipeProcessor(obj);
  oix++;
  if(oix>=app.mpipe.obj_ray.length) { oix=0; }
  app.mpipe.obj_pf=oix;
  if(rvl!=true) { continue; }
  done++;
  }

 obj0=app.mpipe.obj_ray[0];
 obj1=app.mpipe.obj_ray[1];
 obj2=app.mpipe.obj_ray[2];
 obj3=app.mpipe.obj_ray[3];

 pkt0=null;
 pkt1=null;
 pkt2=null;
 pkt3=null;


 if((cgrz=guixGrpSizesGet("b_canstream_0"))==null)   { aa.debugAlert(); }
 if((egrz=guixGrpSizesGet("mpipe_canvas_3"))==null)  { aa.debugAlert(); }



 if((pkt0=mpipeRead(obj0))!=null)
  {
  wid0=pkt0.image.width;
  hit0=pkt0.image.height;
 // osi=2;
  //mpipeWrite(app.mpipe.obj_ray[osi], wid0,hit0,pkt0.image);
  wid2=cgrz.gsz.domwh[0];
  hit2=cgrz.gsz.domwh[1];
  //mpipeSend(obj2)
  //aa.guiCanvasImageDraw(cgrz.grp.han,0,0,wid0,hit0, 0,0,wid2,hit2,pkt0.image);
  //return;
  obj0.last_pop=pkt0;
  }



 if((pkt2=mpipeRead(obj2))!=null)
  {
  wid0=pkt2.image.width;
  hit0=pkt2.image.height;
  wid2=cgrz.gsz.domwh[0];
  hit2=cgrz.gsz.domwh[1];

  aa.guiCanvasClear(cgrz.grp.han);
  aa.guiCanvasImageDraw(cgrz.grp.han,0,0,wid0,hit0, 0,0,wid2,hit2,pkt2.segmentationMask);

  pix0=aa.guiCanvasImageGet(cgrz.grp.han,  0,0,wid2,hit2);
  for(of=0;of<(pix0.width*4*pix0.height);of+=4)
   {
   if(pix0.data[of+3]<200)    {    pix0.data[of+3]>>=2;    }
   else                       {    pix0.data[of+3]=255;    }
   }
  aa.guiCanvasImagePut(cgrz.grp.han, 0,0,  0,0,wid2,hit2,pix0);

   aa.guiCanvasCompositeOperationSet(cgrz.grp.han,"source-out");
   aa.guiCanvasFillFull(cgrz.grp.han,aa.guiRgbaString(230,80,139,1));
   aa.guiCanvasCompositeOperationSet(cgrz.grp.han,"destination-atop");
   aa.guiCanvasImageDraw(cgrz.grp.han,0,0,wid0,hit0, 0,0,wid2,hit2,pkt2.image);
  aa.guiCanvasCompositeOperationSet(cgrz.grp.han,0);

  if(obj0.last_pop!=null&&1)
   {
   pkt0=obj0.last_pop;
   //aa.guiCanvasImageDraw(cgrz.grp.han,0,0,wid0,hit0, 0,0,wid2,hit2,pkt0.image);
   lcd0=[];
   len=pkt0.multiFaceLandmarks[0].length;
   for(i=0;i<len;i++)
    {
    lcd0[i]=mpipeCordGet(pkt0.multiFaceLandmarks[0],i,pkt0.image.width,pkt0.image.height,1);
    aa.guiCanvasFill(cgrz.grp.han,lcd0[i].x,lcd0[i].y,2,2,aa.guiRgbaString(230,80,139,1));
    }
   obj0.last_pop=null;
   }
  }


/*
 if((pkt2=mpipeRead(obj2))!=null)
  {
  wid0=pkt2.image.width;
  hit0=pkt2.image.height;
  wid2=cgrz.gsz.domwh[0];
  hit2=cgrz.gsz.domwh[1];

  aa.guiCanvasClear(cgrz.grp.han);
  aa.guiCanvasImageDraw(cgrz.grp.han,0,0,wid0,hit0, 0,0,wid2,hit2,pkt2.segmentationMask);
  if(1)
   {
   //if(0) { cgrz.grp.ctx.globalCompositeOperation="source-in";  }
   //else  { cgrz.grp.ctx.globalCompositeOperation="source-out"; }
   if(0) { aa.guiCanvasCompositeOperationSet(cgrz.grp.han,1); }
   else  { aa.guiCanvasCompositeOperationSet(cgrz.grp.han,2); }

   aa.guiCanvasFillFull(cgrz.grp.han,aa.guiRgbaString(230,80,139,1));
   //cgrz.grp.ctx.globalCompositeOperation="destination-atop";
   aa.guiCanvasCompositeOperationSet(cgrz.grp.han,7);
   aa.guiCanvasImageDraw(cgrz.grp.han,0,0,wid0,hit0, 0,0,wid2,hit2,pkt2.image);
   //cgrz.grp.ctx.globalCompositeOperation="source-over";
   aa.guiCanvasCompositeOperationSet(cgrz.grp.han,0);
   }
  //return;
  }
 */





 /*
 if((pkt0=mpipeRead(obj0))!=null)  {  obj0.last_pop=pkt0;  }
 if((pkt1=mpipeRead(obj1))!=null)  {  obj1.last_pop=pkt1;  }
 if((pkt2=mpipeRead(obj2))!=null)  {  obj2.last_pop=pkt2;  }
 if((pkt3=mpipeRead(obj3))!=null)  {  obj3.last_pop=pkt3;  }

 pkt0=obj0.last_pop;
 pkt1=obj1.last_pop;
 pkt2=obj2.last_pop;
 pkt3=obj3.last_pop;
 */

// if(pkt0) { console.log(pkt0); }

/*
 if(pkt0&&pkt0.multiFaceLandmarks&&pkt0.multiFaceLandmarks[0])
  {
  if(pkt1&&pkt1.multiFaceLandmarks&&pkt1.multiFaceLandmarks[0])
   {
   wid0=pkt0.image.width;
   hit0=pkt0.image.height;
   wid2=cgrz.gsz.domwh[0];
   hit2=cgrz.gsz.domwh[1];
   wid1=pkt1.image.width;
   hit1=pkt1.image.height;
   wid3=egrz.gsz.domwh[0];
   hit3=egrz.gsz.domwh[1];
   ///=========

   obj0.last_pop=null;
   }
  }
*/
 if(pkt0&&pkt2&&0)
  {
  wid0=pkt0.image.width;
  hit0=pkt0.image.height;
  wid2=cgrz.gsz.domwh[0];
  hit2=cgrz.gsz.domwh[1];
  aa.guiCanvasImageDraw(cgrz.grp.han,0,0,wid0,hit0, 0,0,wid2,hit2,pkt0.image);

console.log("aa");
  obj0.last_pop=null;
  }


 }












 var the_score=[[5],[5],[5],[5],[5]];
 var the_sclen=0;
 var the_avg=0;
 var the_samples=0;


 //var facerlm=[];


 function mpipeYieldPre ()
 {
 var done,go,oix,obj,rvl,done,obj0,obj1,pkt0,pkt1;
 var wid0,hit0,wid1,hit1,wid2,hit2,wid3,hit3;
 var cgrz,egrz;
 var ii,il,cd;
 var lcd0,lcd1,i,l,guide;
 var xyu0,xyu1,xyu2,xyu3,nn,t0,t1,t2,t3;
 var exy0,exy1,exy2,exy3;
 var zeee,j;
 var ela,go;
 var pix0,pix1,pix2,pix3;
 var ok,oi,ml,mouth,gal;
 var pixa,pixb;
 var x0,y0,z0,x1,y1,z1,x2,y2,z2,x3,y3,z3;
 //var ex0,ey0,ex1,ey1,ex2,ey2,ex3,ey3;
 var brec;
 var rr0,gg0,bb0,rr1,gg1,bb1,eeq;
 var rix;
 var lmk0,lmk1,lmk2,lmk3;
 var mat,how;
 var sci,sco,scx,sxt,savg;
 var zz0,rgb,al,pp;
 var stride,len,iii,lw,hi;
 var facerlm,go;


 aaProfilerHit(callerName());

 if(app.mpipe==undefined)         { return; }
 if(app.mpipe.obj_ray==undefined) { return; }

 done=0;
 for(go=0;go<app.mpipe.obj_ray.length;go++)
  {
  oix=app.mpipe.obj_pf;
  obj=app.mpipe.obj_ray[oix];
  rvl=mpipeProcessor(obj);
  oix++;
  if(oix>=app.mpipe.obj_ray.length) { oix=0; }
  app.mpipe.obj_pf=oix;
  if(rvl!=true) { continue; }
  done++;
  }

 obj0=app.mpipe.obj_ray[0];
 obj1=app.mpipe.obj_ray[1];
 pkt0=null;
 pkt1=null;

 if((cgrz=guixGrpSizesGet("b_canstream_0"))==null)   { aa.debugAlert(); }
 if((egrz=guixGrpSizesGet("mpipe_canvas_1"))==null)  { aa.debugAlert(); }

 if((pkt0=mpipeRead(obj0))!=null)  {  obj0.last_pop=pkt0;  }
 if((pkt1=mpipeRead(obj1))!=null)  {  obj1.last_pop=pkt1;  }
 pkt0=obj0.last_pop;
 pkt1=obj1.last_pop;

 if(pkt0&&pkt0.multiFaceLandmarks&&pkt0.multiFaceLandmarks[0])
  {
  if(pkt1&&pkt1.multiFaceLandmarks&&pkt1.multiFaceLandmarks[0])
   {
   wid0=pkt0.image.width;
   hit0=pkt0.image.height;
   wid2=cgrz.gsz.domwh[0];
   hit2=cgrz.gsz.domwh[1];
   wid1=pkt1.image.width;
   hit1=pkt1.image.height;
   wid3=egrz.gsz.domwh[0];
   hit3=egrz.gsz.domwh[1];
   ///=========
   aa.guiCanvasFillFull(cgrz.grp.han,aa.guiRgbaString(10,80,139,1));
   aa.guiCanvasImageDraw(cgrz.grp.han,0,0,wid0,hit0, 0,0,wid2,hit2,pkt0.image);
   ///=========
   lcd0=[];
   lcd1=[];
   len=pkt1.multiFaceLandmarks[0].length; for(i=0;i<len;i++) { lcd1[i]=mpipeCordGet(pkt1.multiFaceLandmarks[0],i,1,1,1); }
   len=pkt0.multiFaceLandmarks[0].length; for(i=0;i<len;i++) { lcd0[i]=mpipeCordGet(pkt0.multiFaceLandmarks[0],i,1,1,1); }
   facerlm=[];

   for(i=0;i<len;i++)
    {
    facerlm[i]={};
    facerlm[i].x=(lcd0[i].x*wid0)>>0;
    facerlm[i].y=(lcd0[i].y*hit0)>>0;
    facerlm[i].z=lcd0[i].z;
    }

   //for(i=0;i<20;i++)
   pp=160;
    {
    al=0.9;
    rgb=aa.guiRgbaString(255,10,13,al);
    aa.guiCanvasFill(cgrz.grp.han,facerlm[pp].x-1,facerlm[pp].y-1,2,2,rgb);
    }

   guide=mpipeTria466;
   len=guide.length;
   stride=3;
   j=0;
   for(i=0;i<len;i+=stride)
    {
    t0=guide[i+0];
    t1=guide[i+1];
    t2=guide[i+2];
    if(t0==pp||t1==pp||t2==pp)
     {
     x0=facerlm[t0].x; y0=facerlm[t0].y;
     x1=facerlm[t1].x; y1=facerlm[t1].y;
     x2=facerlm[t2].x; y2=facerlm[t2].y;
     lw=0.5;
     al=0.5;
     rgb=aa.guiRgbaString(24,10,13,al);
     aa.guiCanvasLine(cgrz.grp.han,x0,y0,x1,y1,lw,rgb);
     aa.guiCanvasLine(cgrz.grp.han,x1,y1,x2,y2,lw,rgb);
     aa.guiCanvasLine(cgrz.grp.han,x2,y2,x0,y0,lw,rgb);
     }
    }



   brec={};
   brec.x0=+99999;   brec.y0=+99999;
   brec.x1=-99999;   brec.y1=-99999;
   for(i=0;i<pkt0.multiFaceLandmarks[0].length;i++)
    {
    exy0=aa.guiXyuvSetEx(lcd0[i].x,lcd0[i].y,lcd1[i].x,lcd1[i].y,wid0,hit0,wid1,hit1);
    if(exy0.x<=brec.x0) { brec.x0=exy0.x; }
    if(exy0.y<=brec.y0) { brec.y0=exy0.y; }
    if(exy0.x>=brec.x1) { brec.x1=exy0.x; }
    if(exy0.y>=brec.y1) { brec.y1=exy0.y; }
    }
   brec.x0+=10;   brec.y0+=30;
   brec.x1-=62;   brec.y1-=75;
   //brec.y0+30;
   //console.log(brec);



   //console.log(len);

   //pp=53; exy0=aa.guiXyuvSetEx(lcd0[pp].x,lcd0[pp].y,lcd1[pp].x,lcd1[pp].y,wid0,hit0,wid1,hit1);
   //pp=55; exy1=aa.guiXyuvSetEx(lcd0[pp].x,lcd0[pp].y,lcd1[pp].x,lcd1[pp].y,wid0,hit0,wid1,hit1);
   //pp=128; exy2=aa.guiXyuvSetEx(lcd0[pp].x,lcd0[pp].y,lcd1[pp].x,lcd1[pp].y,wid0,hit0,wid1,hit1);
   //pp=228; exy3=aa.guiXyuvSetEx(lcd0[pp].x,lcd0[pp].y,lcd1[pp].x,lcd1[pp].y,wid0,hit0,wid1,hit1);



   guide=mpipeTria466;
   len=guide.length;
   stride=3;
   j=0;
   for(i=0;i<len;i+=stride)
    {
    t0=guide[i+0];
    t1=guide[i+1];
    t2=guide[i+2];

    x0=(pkt0.multiFaceLandmarks[0][t0].x*wid1)>>0;
    y0=(pkt0.multiFaceLandmarks[0][t0].y*hit1)>>0;
    x1=(pkt0.multiFaceLandmarks[0][t1].x*wid1)>>0;
    y1=(pkt0.multiFaceLandmarks[0][t1].y*hit1)>>0;
    x2=(pkt0.multiFaceLandmarks[0][t2].x*wid1)>>0;
    y2=(pkt0.multiFaceLandmarks[0][t2].y*hit1)>>0;

    if(x0<brec.x0||x1<brec.x0||x2<brec.x0) { continue; }
    if(y0<brec.y0||y1<brec.y0||y2<brec.y0) { continue; }
    if(x0>brec.x1||x1>brec.x1||x2>brec.x1) { continue; }
    if(y0>brec.y1||y1>brec.y1||y2>brec.y1) { continue; }

    //if(x0<exy0.x||y0<exy0.y) { continue; }


    //if(y0<exy0.y||y0<exy1.x) { continue; }
    //if(y0<exy0.y||y0<exy1.x) { continue; }
    //if(y0<exy0.y) { continue; }

    hi=-1;
    if(y0<=y1&&y0<=y2) { hi=0; } else
    if(y1<=y0&&y1<=y2) { hi=1; } else
    if(y2<=y0&&y2<=y1) { hi=2; }
    if(hi==-1) aa.debugAlert(y0+" "+y1+" "+y2);

    j++;

    al=1.0;
    if((j%3)==0) { rgb=aa.guiRgbaString(24,10,13,al); } else
    if((j%3)==1) { rgb=aa.guiRgbaString(10,24,13,al); } else
    if((j%3)==2) { rgb=aa.guiRgbaString(10,10,24,al); }

    lw=0.2;
//    aa.guiCanvasLine(cgrz.grp.han,x0,y0,x1,y1,lw,rgb);
  //  aa.guiCanvasLine(cgrz.grp.han,x1,y1,x2,y2,lw,rgb);
//    aa.guiCanvasLine(cgrz.grp.han,x2,y2,x0,y0,lw,rgb);

    //aa.guiCanvasFill(cgrz.grp.han,x0,y0,1,1,aa.guiRgbaString(10,80,139,1));
    //aa.guiCanvasFill(cgrz.grp.han,x1,y1,1,1,aa.guiRgbaString(10,80,139,1));
    //aa.guiCanvasFill(cgrz.grp.han,x2,y2,1,1,aa.guiRgbaString(10,80,139,1));


    //if(hi==0) aa.guiCanvasFill(cgrz.grp.han,x0,y0,1,1,aa.guiRgbaString(10,80,139,1));
    //if(hi==1) aa.guiCanvasFill(cgrz.grp.han,x1,y1,1,1,aa.guiRgbaString(10,80,139,1));
    //if(hi==2) aa.guiCanvasFill(cgrz.grp.han,x2,y2,1,1,aa.guiRgbaString(10,80,139,1));
    }

    //console.log(exy0);
   if(0      )
    {
    aa.guiCanvasLine(cgrz.grp.han,exy0.x>>0,exy0.y>>0,exy1.x>>0,exy1.y>>0,1,aa.guiRgbaString(10,8,19,1));
    aa.guiCanvasLine(cgrz.grp.han,exy1.x>>0,exy1.y>>0,exy2.x>>0,exy2.y>>0,1,aa.guiRgbaString(10,8,19,1));
    aa.guiCanvasLine(cgrz.grp.han,exy2.x>>0,exy2.y>>0,exy3.x>>0,exy3.y>>0,1,aa.guiRgbaString(10,8,19,1));
    aa.guiCanvasLine(cgrz.grp.han,exy3.x>>0,exy3.y>>0,exy0.x>>0,exy0.y>>0,1,aa.guiRgbaString(10,8,19,1));
    }

   len=pkt0.multiFaceLandmarks[0].length;
   for(iii=0;iii<len;iii++)
    {
    x0=(pkt0.multiFaceLandmarks[0][iii].x*wid0)>>0;
    y0=(pkt0.multiFaceLandmarks[0][iii].y*hit0)>>0;
    al=0.5;
    lw=0.4;
//    aa.guiCanvasFill(cgrz.grp.han,x0-4,y0-4,8,8,aa.guiRgbaString(10,80,139,al));
//    aa.guiCanvasBorder(cgrz.grp.han,x0-4,y0-4,8,8,lw,aa.guiRgbaString(10,8,19,al));
    }









   ///=========
  if(0)
   {
   xyu0=[]; xyu1=[]; xyu2=[]; xyu3=[];
   lmk0=[]; lmk1=[]; lmk2=[]; lmk3=[];
   zeee=[];
   nn=0;
   stride=3;
   guide=mpipeTria466c;
   l=guide.length;
   for(i=0;i<l;i+=stride)
    {
    t0=guide[i+0];
    t1=guide[i+1];
    t2=guide[i+2];
    if(stride==4) t3=guide[i+3];
    z0=lcd0[t0].z;
    z1=lcd0[t1].z;
    z2=lcd0[t2].z;
    if(stride==4) z3=lcd0[t3].z;
    if(stride==3) {  zz0=(((z0+z1+z2)/3)*320);     zz0=50-zz0; }
    else          {  zz0=(((z0+z1+z2+z3)/4)*320);  zz0=50-zz0; }
    zeee[nn]=zz0;
    xyu0[nn]=aa.guiXyuvSetEx(lcd0[t0].x,lcd0[t0].y,lcd1[t0].x,lcd1[t0].y,wid0,hit0,wid1,hit1);
    xyu1[nn]=aa.guiXyuvSetEx(lcd0[t1].x,lcd0[t1].y,lcd1[t1].x,lcd1[t1].y,wid0,hit0,wid1,hit1);
    xyu2[nn]=aa.guiXyuvSetEx(lcd0[t2].x,lcd0[t2].y,lcd1[t2].x,lcd1[t2].y,wid0,hit0,wid1,hit1);
    if(stride==4) xyu3[nn]=aa.guiXyuvSetEx(lcd0[t3].x,lcd0[t3].y,lcd1[t3].x,lcd1[t3].y,wid0,hit0,wid1,hit1);
    lmk0[nn]=t0;
    lmk1[nn]=t1;
    lmk2[nn]=t2;
    if(stride==4) lmk3[nn]=t3;
    nn++;
    }
   }
  ///=========
  if(0)
   {
   pixa=aa.guiCanvasImageGet(cgrz.grp.han,0,0,cgrz.gsz.domwh[0],cgrz.gsz.domwh[1]);
   if(1)
    {
    gal=cgrz.grp.ctx.globalAlpha;
    cgrz.grp.ctx.globalAlpha=app.mpipe.gal;
    //canvasTextureMapper(cgrz.grp.han,0,nn,zeee,zeee.sortIndices,xyu0,xyu1,xyu2,null,pkt1.image);
    if(stride==3) canvasTextureMapper(cgrz.grp.han,0,nn,null,null,xyu0,xyu1,xyu2,null,pkt1.image);
    else          canvasTextureMapper(cgrz.grp.han,0,nn,null,null,xyu0,xyu1,xyu2,xyu3,pkt1.image);
    cgrz.grp.ctx.globalAlpha=gal;
    }
   pixb=aa.guiCanvasImageGet(cgrz.grp.han,0,0,cgrz.gsz.domwh[0],cgrz.gsz.domwh[1]);
   }


   obj0.last_pop=null;
   }
  }
 }

