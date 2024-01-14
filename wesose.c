/*-----------------------------------------------------------------------*/
 #include "wesose.h"
/*-----------------------------------------------------------------------*/
 _app app={.magic=0};
/*-----------------------------------------------------------------------*/
 _jsonunit json_unit;
 _jcursor jay_cur;
 _textreader tr={.magic=0};
/*-----------------------------------------------------------------------*/

 _bash my_bash;
 PUB H binerr_user_cntr;

/*-----------------------------------------------------------------------*/

//https://xhamster.com/pornstars/katty-west/2
 V porno (H from,H to,VP fmt,...)
 {
 H i,c;
 aaVargsf128K(fmt);
 c=(to-from)+1;
 for(i=0;i<c;i++)  {  aaNetBrowserWritef(0,"%s?quality=720p&page=%i",str128k.buf,from+i);  }
 }




 F triArea (F x1,F y1,F x2,F y2,F x3,F y3)
 {
 F res=abs((x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))/2.0);
 //res=res>>0;
 //res=Math.round(res*10)/10;
 return res;
 }




 V fuck (V)
 {
 aaDebugf("%.2f",triArea(10,10,11,7,12,10));

 }




 V aaMain                              (V)
 {
 #if 0
 porno(1,4,"https://xhamster.com/search/leia+daddy");
 porno(1,4,"https://xhamster.com/search/leia+braces");
 return;
 #endif
 if(0) { fuck(); return; }
 appStart();
 while(appYield()==YES)
  {
  if(app.do_quit==2) { break; }
  appEngine();
  }
 appStop();
 }




 B appStart                            (V)
 {
 B ret;
 _size s1;
 _rect r1;

 aaFocusToDbg(0);
 aaDebugf(0);
 aaMemoryFill(&app,sizeof(_app),0);
 app.magic=aaHPP(appStart);
 if((ret=aaSysInfoGet(&app.si))!=YES)        { oops; }
 if((ret=aaDisplayInfoGet(&app.di,88))!=YES) { oops; }
 if((ret=aaInfoGet(&app.info,F32))!=YES)     { oops; }
 app.tray_icon_index=0;
 app.tray_icon_ms=aaMsRunning();
 aaSizeSet(&s1,80,80);
 if((ret=aaSurfaceCreate(&app.surf.handle,&s1))!=YES) { oops; }
 if((ret=aaSurfaceVisualize(app.surf.handle,YES-0,0))!=YES) { oops; }
 if((ret=aaSurfaceIconSetUsingResource(app.surf.handle,1000,0))!=YES) { oops; }
 aaSurfaceTitleSet(app.surf.handle,"WeSoSe Server");
 aaSurfaceStatus(app.surf.handle,&app.surf.status);
 if((ret=aaSurfaceTraySet(app.surf.handle,1001+(app.tray_icon_index%2),"%s %s",app.surf.status.title,DEV_VERSION))!=YES) { oops; }
 aaSurfaceStatus(app.surf.handle,&app.surf.status);
 app.canvas_update_ms=aaMsRunning();
 aaSizeSet(&s1,780,540);
 if(1) { aaRectSet(&r1,app.di.desktop_rect.w-s1.w-5, app.di.desktop_rect.h-s1.h-5, s1.w,s1.h);  }
 else  { aaRectSet(&r1,app.info.display_info.tray_rect.x-s1.w-4,app.info.display_info.tray_rect.y-s1.h-4,s1.w,s1.h); }
 if((ret=aaSurfaceCreate(&app.canvas.handle,&s1))!=YES) { oops; }
 if((ret=aaSurfaceVisualize(app.canvas.handle,YES-1,0))!=YES) { oops; }
 if((ret=aaSurfaceIconSetUsingResource(app.canvas.handle,1000,F32))!=YES) { oops; }
 aaSurfaceTitleSet(app.canvas.handle,"%s %s",app.surf.status.title,DEV_VERSION);
 aaSurfaceRectSet(app.canvas.handle,&r1);
 aaSurfaceFillFrame(app.canvas.handle,0,2,&col_gray[2],&col_pastelblue[17]);
 aaSurfaceShow(app.canvas.handle,YES);
 aaSurfaceFocus(app.canvas.handle);
 if(0) { aaSurfaceTransparencySet(app.canvas.handle,190,0); }
 aaSurfaceStatus(app.canvas.handle,&app.canvas.status);
 if((ret=aaFontCreate(&app.font[0].handle,"consolas",0,-11,172,0,0,6,0))!=YES) { oops; }
 aaFontStatus(app.font[0].handle,&app.font[0].status);
 if((ret=aaNetWebsocketServerNew(&app.the_server,0,8080,SERVER_MAX_CALLS))!=YES) { oops; }
 aaNetStatus(&app.ns);
 app.global_id_counter=100000LL;
 return RET_YES;
 }




 B appStop                             (V)
 {
 if(app.magic!=aaHPP(appStart)) { return RET_NOTINITIALIZED; }
 if(app.surf.handle)             {  aaSurfaceDestroy(app.surf.handle);  }
 if(app.canvas.handle)           {  aaSurfaceDestroy(app.canvas.handle);  }
 if(app.font[0].handle)          {  aaFontDestroy(app.font[0].handle); app.font[0].handle=0; }
 aaNetWebsocketServerDelete(&app.the_server);
 aaFocusToCodeBlocks();
 aaMemoryFill(&app,sizeof(_app),0);
 return RET_YES;
 }




 B appYield                            (V)
 {
 B ret;
 _size s1;
 _rect r1;
 H p;
 B ir;
 Q el;

 if(app.magic!=aaHPP(appStart)) { return RET_NOTINITIALIZED; }

 if((ret=aaYield(700))!=YES)    { return ret; }

 aaSurfaceStatus(app.canvas.handle,&app.canvas.status);
 aaSurfaceStatus(app.surf.handle,&app.surf.status);

 if(aaMathRand32(0,50)==0)  {  aaNetStatus(&app.ns);  }

 if(app.surf.status.is_systray)
  {
  el=aa_msrunning-app.canvas_update_ms;
  if(el>=450)
   {
   appStats();
   app.canvas_update_ms=aa_msrunning;
   }
  el=aa_msrunning-app.tray_icon_ms;
  if(el>=409)
   {
   if(aa_display_change_counter)
    {
    if((ret=aaInfoGet(&app.info,F32))!=YES) { oops; }
    aaSizeSet(&s1,app.canvas.status.size.w,app.canvas.status.size.h);
    aaRectSet(&r1,app.info.display_info.tray_rect.x-s1.w-4,app.info.display_info.tray_rect.y-s1.h-4,s1.w,s1.h);
    aaSurfaceRectSet(app.canvas.handle,&r1);
    aaSurfaceStatus(app.canvas.handle,&app.canvas.status);
    aa_display_change_counter=0;
    }
   app.tray_icon_index++;
   if((ret=aaSurfaceTraySet(app.surf.handle,1001+(app.tray_icon_index%2),"%s %s",app.surf.status.title,DEV_VERSION))!=YES)
    {
    aaDebugf("surfacetrayset failure");
    //oops;
    }
   app.tray_icon_ms=aa_msrunning;
   }
  if(aaSurfaceIsTrayClicked(app.surf.handle,0,&ir)==RET_YES)
   {
   if(ir)    {    if(app.do_quit==0) { app.do_quit=1; }    }
   else
    {
    if(app.canvas.status.is_shown)   { aaSurfaceShow(app.canvas.handle,NO);  }
    else                             { aaSurfaceShow(app.canvas.handle,YES); aaSurfaceFocus(app.canvas.handle); }
    aaSurfaceStatus(app.canvas.handle,&app.canvas.status);
    }
   if((ret=aaSurfaceTrayClickClear(app.surf.handle))!=YES) { oops; }
   aaSurfaceStatus(app.surf.handle,&app.surf.status);
   }
  }

 for(p=0;p<1;p++)  {  aaNetWebsocketServerYield(&app.the_server);  }
 return RET_YES;
 }






 B appLog                              (H index,H lines,VP fmt,...)
 {
 H till,j;
 aaVargsf128K(fmt);
 if(app.magic!=aaHPP(appStart)) { return RET_NOTINITIALIZED; }
 if(index>=aaElementCount(app.bilboard)) { return RET_BOUNDS; }
 if(lines==F32) { lines=aaElementCount(app.bilboard)-index; }
 if(lines==0)   { return RET_YES; }
 till=index+lines;
 if(till>aaElementCount(app.bilboard)) { return RET_BOUNDS; }
 if(lines>1)
  {
  for(j=(index+1);j<till;j++) { aaStringCopy(app.bilboard[j-1],app.bilboard[j]); }
  }
 aaStringCopyf(app.bilboard[till-1],"%s",str128k.buf);
 ///aaDebugf("%s",str128k.buf);
 return RET_YES;
 }







 B appStats                            (V)
 {
 _rect r1;
 Q msr;
 D rate;
 B etc[_8K],txt[_2K];
 H i,ecst,shade_throb[4]={0,2,3,2};
 _memorystatus memsta;
 S H this_cycle=0;

 if(app.magic!=aaHPP(appStart)) { return RET_NOTINITIALIZED; }
 aaMemoryStatus(&memsta);
 aaSurfaceStatus(app.canvas.handle,&app.canvas.status);
 aaSurfaceStatus(app.surf.handle,&app.surf.status);
 aaRectSet(&r1,4,4,app.canvas.status.size.w-8,app.canvas.status.size.h-8);
 aaStringNull(etc);

 msr=aa_msrunning;
 if(msr<60000)     {     aaStringCopyf(txt,"secs=%.2f",msr/1000.0);    }   else
 if(msr<3600000)   {     aaStringCopyf(txt,"mins=%.2f",msr/60000.0);   }   else
                   {     aaStringCopyf(txt,"hrs=%.2f",msr/3600000.0);  }
 aaStringCopyf(etc,"%s %-13s ",app.canvas.status.title,txt);
 aaStringAppendf(etc,"Cycle=%-10I64d ",aa_cycle);
 aaStringAppendf(etc,"stage=%-5i ",aa_stage);
 aaStringAppendf(etc,"pid=%u\n",app.info.sys_info.process_id);
 aaStringAppendf(etc,"\n");
 aaStringAppendf(etc,"cur_cpu_load=%-6.2f   ",aa_curcpuload);
 aaStringAppendf(etc,"avg_cpu_load=%-6.2f\n",aa_avgcpuload);
 aaStringAppendf(etc,"cur_app_load=%-6.2f   ",aa_curproload);
 aaStringAppendf(etc,"avg_app_load=%-6.2f\n",aa_avgproload);
 aaStringAppendf(etc,"\n");
 aaStringAppendf(etc,"ask_herz=%-6.1f  ",aa_askhz);
 aaStringAppendf(etc,"cur_herz=%-6.1f  ",aa_curhz);
 aaStringAppendf(etc,"eve_wai=%-3i  bin_err=%i\n",aa_ie_events_waiting,binerr_user_cntr);
 aaStringAppendf(etc,"note:  show_count=%-3i  ",aa_note_show_count);
 aaStringAppendf(etc,"miss_count=%-3i  ",aa_note_miss_count);
 aaStringAppendf(etc,"kill_count=%-3i ",aa_note_kill_count);
 aaStringAppendf(etc,"\n");
 aaStringAppendf(etc,"copied=%.2fG   ",memsta.bytes_copied/1073741824.0);
 rate=((D)memsta.bytes_copied/1048576.0)/aa_secsrunning;
 aaStringAppendf(etc,"copy=%.2fM/s   ",rate);
 aaStringAppendf(etc,"filled=%.2fG   ",memsta.bytes_filled/1073741824.0);
 rate=((D)memsta.bytes_filled/1048576.0)/aa_secsrunning;
 aaStringAppendf(etc,"fill=%.2fM/s  ",rate);
 aaStringAppendf(etc,"\n\n");

 aaStringAppendf(etc,"incoming_tcp_ports_inuse=%i  ",app.ns.incoming_tcp_ports_inuse);
 aaStringAppendf(etc,"max_tcp_calls=%i\n",app.ns.max_tcp_calls);

 aaStringAppendf(etc,"tot_out_tcp_call_count=%i    ",app.ns.total_outgoing_tcp_call_count);
 aaStringAppendf(etc,"tot_in_tcp_call_count=%i   ",app.ns.total_incoming_tcp_call_count);
 aaStringAppendf(etc,"tot_tcp_call_count=%i\n",app.ns.total_tcp_call_count);

 aaStringAppendf(etc,"cur_out_tcp_call_count=%i    ",app.ns.current_outgoing_tcp_call_count);
 aaStringAppendf(etc,"cur_in_tcp_call_count=%i   ",app.ns.current_incoming_tcp_call_count);
 aaStringAppendf(etc,"cur_tcp_calls_connected=%i\n",app.ns.current_tcp_calls_connected);
 aaStringAppendf(etc,"\n");

 aaStringAppendf(etc,"tot_tcp_bytes_in=%.2fM    ",app.ns.total_tcp_bytes_in/1048576.0);
 aaStringAppendf(etc,"tot_tcp_bytes_out=%.2fM\n\n",app.ns.total_tcp_bytes_out/1048576.0);

 for(i=0;i<aaElementCount(app.bilboard);i++)  {  aaStringAppendf(etc,"%s\n",app.bilboard[i]);  }
 ecst=aaElementCount(shade_throb);
 aaSurfaceLabel(app.canvas.handle,&r1,&col_gray[26+shade_throb[this_cycle%ecst]],app.font[0].handle,&col_gray[2],4,4,0,0,0,"%s",etc);
 if(app.canvas.status.is_shown)     {    aaSurfaceUpdateAreaAdd(app.canvas.handle,0,YES);    }
 else                               {    aaSurfaceUpdateAreaAdd(app.canvas.handle,0,NO);     }
 this_cycle++;
 return RET_YES;
 }



/*-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------*/



 V appEngine                           (V)
 {
 H go,to,i;
 H chars;
 B ret;

 to=1;
 go=0;
 while((go++)<to)
  {
  if(app.do_quit==1) { app.do_quit=2; break;  }

  if(app.is_paused)  { break; }
  switch(aa_stage)
   {
   default:
   if(app.do_quit==0) { app.do_quit=1; }
   break;

   case 0:
   aaStageSet(10);
   break;

   case 10:
//   getload(9976);
   aaStageSet(30);
   break;

   case 30:
   break;

   case 301:
   bashStart(&my_bash);
   bashCmdAppendf(&my_bash,"-H \"authority: www.ibm.com\" ");
   bashCmdAppendf(&my_bash,"-H \"accept: application/json, text/plain, */*\" ");
   bashCmdAppendf(&my_bash,"-H \"accept-language: en-US,en;q=0.9\" ");
   bashCmdAppendf(&my_bash,"-H \"content-type: application/json;charset=UTF-8\" ");
   bashCmdAppendf(&my_bash,"-H \"origin: https://www.ibm.com\" ");
   bashCmdAppendf(&my_bash,"-H \"referer: https://www.ibm.com/demos/live/watson-language-translator/self-service/home\" ");
   bashCmdAppendf(&my_bash,"\"https://www.ibm.com/demos/live/watson-language-translator/api/translate/text\" ");
   bashCmdAppendf(&my_bash,"--data-raw \"{\\\"text\\\":\\\"hello how are you\\\",\\\"source\\\":\\\"en\\\",\\\"target\\\":\\\"zh\\\"}\" ");
   bashExecute(&my_bash);
   aaStageSet(40);
   break;

   case 40:
   bashYield(&my_bash);
   if(my_bash.is_fin!=YES) { break; }
   aaDebugf("bash done %i [%s]",my_bash.bytes,my_bash.data);
   bashEnd(&my_bash);
   aaStageSet(50);
   break;

   case 50:
   break;
   }
  }
 if(aa_stage>=30)
  {
  for(i=0;i<4;i++) {  serverProcessor(); }
  }
 }





/*-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------*/




 Q globalIdGenerate                    (V)
 {
 Q go,bs,id,bi;
 bs=(Q)sizeof(app.global_id_block);
 go=0;
 id=0;
 while(1)
  {
  go++;
  if(go>=(bs/2))
   {
   ///globalIdReset();
   app.global_id_counter+=bs;
   aaMemoryFill(app.global_id_block,sizeof(app.global_id_block),0);
   go=0;
   continue;
   }
  bi=aaMathRand64(0,bs);
  bi=bi%bs;
  if(app.global_id_block[bi]==1) { continue; }
  id=(app.global_id_counter*bs)+bi;
  app.global_id_block[bi]=1;
  break;
  }
 return id;
 }




/*-----------------------------------------------------------------------*/





 B trObjInit                           (_trobj*trobj,VP fmt,...)
 {
 aaVargsf256K(fmt);
 aaMemoryFill(trobj,sizeof(_trobj),0);
 trobj->magic=aaHPP(trObjInit);
 aaStringCopyf(trobj->key,"%s",str256k.buf);
 return RET_YES;
 }




 B trValGet                            (_textreader*textreader,VP val,HP li,BP isqtd,VP fmt,...)
 {
 B ret;
 B value[_32K];
 B isq;
 H line;
 aaVargsf256K(fmt);
 if(li)    { *li=0; }
 if(val)   { aaStringNull(val); }
 if(isqtd) { *isqtd=0; }
 if((ret=aaTextReaderLineFind(textreader,0,&line,value,"%s:",str256k.buf))!=YES) { aaNote(0,"%s %s",arets,str256k.buf); return ret; }
 aaStringIsQuoted(value,0,&isq);
 aaStringUnQuote(value,0,0);
 //    if(1) { appLog(0,F32,"%-2i=%-2i [%s] [%s]",li,is_qtd,key,val); }
 if(li)    { *li=line; }
 if(val)   { aaStringCopy(val,value); }
 if(isqtd) { *isqtd=isq; }
 return ret;
 }




 B trKeyValGet                         (_textreader*textreader,H li,BP isqtd,VP key,VP val)
 {
 B ret;
 B tmp[_32K];
 B value[_32K];
 B isq;
 H pos;
 if(val)   { aaStringNull(val); }
 if(isqtd) { *isqtd=0; }
 if(key)   { aaStringNull(key); }
 if((ret=aaTextReaderLineGet(textreader,li,0,tmp))!=YES) { oops; }
 if(aaStringFindChar(tmp,0,&pos,':',YES,0,YES)!=YES) { oof; }
 if(key) {  aaStringNCopy(key,tmp,pos,YES); }
 aaStringCopy(value,&tmp[pos+1]);
 aaStringIsQuoted(value,0,&isq);
 aaStringUnQuote(value,0,0);
 //if(1) { appLog(0,F32,"%-2i=%-2i [%s] [%s]",tr.li,is_qtd,key,val); }
 if(isqtd) { *isqtd=isq; }
 if(val)   { aaStringCopy(val,value); }
 return RET_YES;
 }




/*-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------*/



 B bashStart                           (_bash*bash)
 {
 aaMemoryFill(bash,sizeof(_bash),0);
 bash->magic=aaHPP(bashStart);
 bash->stage=100;
 return RET_YES;
 }




 B bashEnd                             (_bash*bash)
 {
 if(bash->magic!=aaHPP(bashStart)) { return RET_NOTINITIALIZED; }
 aaShellDelete(&bash->shell);
 aaMemoryFill(bash,sizeof(_bash),0);
 return RET_YES;
 }





 B bashCmdAppendf                      (_bash*bash,VP fmt,...)
 {
 aaVargsf16K(fmt);
 if(bash->magic!=aaHPP(bashStart)) { return RET_NOTINITIALIZED; }
 if(bash->cmd[0]==NULL_CHAR)
  {
  bash->cmd[0]=NULL_CHAR;
  aaStringAppendf(bash->cmd,"curl ");
  aaStringAppendf(bash->cmd,"-j -L ");
  ///aaStringAppendf(bash->cmd,"-X GET ");
  aaStringAppendf(bash->cmd,"-H \"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36\" ");
  aaStringAppendf(bash->cmd,"--silent ");
  }
 aaStringAppendf(bash->cmd,"%s ",str16k.buf);
 return RET_YES;
 }



 B bashExecute                         (_bash*bash)
 {
 if(bash->magic!=aaHPP(bashStart)) { return RET_NOTINITIALIZED; }
 bash->stage=200;
 return RET_YES;
 }




 B bashYield                           (_bash*bash)
 {
 B ret;
 B bigbuf[_512K];
 H biglen;
 H ko,to;

 if(bash->magic!=aaHPP(bashStart)) { return RET_NOTINITIALIZED; }

 switch(bash->stage)
  {
  case 100:
  break;

  case 200:
  if((ret=aaShellNew(&bash->shell))!=YES) { oops; bash->stage=666; return ret; }
  bash->stage=220;
  break;

  case 220:
  if((ret=aaShellYield(&bash->shell,1))!=YES) { oops; break; }
  if(bash->shell.is_ready!=YES) { break; }
  ///aaDebugf("%s",bash->cmd);
  if((ret=aaShellWritef(&bash->shell,"%s\r\n",bash->cmd))!=YES) { oops; }
  bash->stage=240;
  break;

  case 240:
  if((ret=aaShellYield(&bash->shell,1))!=YES) { oops; break; }
  to=2;
  bigbuf[0]=0;
  biglen=0;
  for(ko=0;ko<to;ko++)
   {
   if(aaShellRead(&bash->shell,&bash->is_prompt,&biglen,bigbuf)==YES)  {  break;     }
   if(bash->bytes>=_8MEG) { aaNote(0,"bash->bytes=%i",bash->bytes); }
   }
  if(ko==to)  { break;   }
  if(bash->sli>=4&&bash->is_prompt==NO)
   {
   aaStringAppend(bash->data,bigbuf);
   //aaStringAppend(bash->data,"\n");
   aaStringLen(bash->data,&bash->bytes);
   }
  if(bash->is_prompt==YES)
   {
   bash->stage=350;
   break;
   }
  if(bash->is_prompt==NO)  {  bash->sli++;      break; }
  break;

  case 350:
  //aaDebugf("done %i bytes",bash->bytes);
  //aaDebugf("[%s]",bash->data);
  bash->stage=500;
  break;

  case 500:
  bash->is_fin=YES;
  break;
  }
 return RET_YES;
 }





/*-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------*/



 B serverCallRoomGather                (_theservercallgather*scgather,VP fmt,...)
 {
 H e,ec,c;
 aaVargsf256K(fmt);
 scgather->count=0;
 ec=aaElementCount(scgather->call_extra_index);
 if(ec!=SERVER_MAX_CALLS) { aaNote(0,"gather ec=%i ",ec); }
 for(e=0;e<ec;e++) { scgather->call_extra_index[e]=-1; }
 c=0;
 for(e=0;e<ec;e++)
  {
  if(app.the_server_call_extra_data[e].call_handle==0) { continue; }
  if(app.the_server_call_extra_data[e].call_index!=e)  { aaNote(0,"e=%i ci=%i",e,app.the_server_call_extra_data[e].call_index);  continue; }
  if(aaStringICompare(app.the_server_call_extra_data[e].room_name,str256k.buf,0)!=YES) { continue; }
  scgather->call_extra_index[c]=e;
  c++;
  }
 scgather->count=c;
 return RET_YES;
 }





 B serverCallToText                    (VP txt)
 {
 if(app.the_server.call.status.index>=SERVER_MAX_CALLS) { aaNote(0,"index=%i",app.the_server.call.status.index); }
 aaStringNull(txt);
 aaStringAppendf(txt,"%s ",app.the_server.scd->wock.x_forwarded_for);
 aaStringAppendf(txt,"%s ",app.the_server.scd->wock.url);
 aaStringAppendf(txt,"%u ",app.the_server.call.handle);
 aaStringAppendf(txt,"%u ",app.the_server.call.status.index);
 aaStringAppendf(txt,"%u ",app.the_server.call.status.number);
 aaStringAppendf(txt,"%x ",app.the_server.call.status.session);
 aaStringAppendf(txt,"%i ",app.the_server.scd->is_close);
 aaStringAppendf(txt,"%i ",app.the_server.scd->is_closing);
 return RET_YES;
 }






 B serverCallNext                      (V)
 {
 B pre[_1K];
 H ci;

 while(1)
  {
  if(aaNetWebsocketServerCallNext(&app.the_server)!=YES) { break; }
  if(app.the_server.scd==NULL) { oof; }
  if(app.the_server.call.handle==0) { oof; }

  if(app.the_server.scd->is_closing)
   {
   if(app.the_server.scd->ustage>=1000) {  break;   }
   serverCallToText(pre);
   //aaDebugf("%s closea ",pre);
   //appLog(0,F32,"%s closea",pre);
   ci=app.the_server.call.status.index;
   aaMemoryFill(&app.the_server_call_extra_data[ci],sizeof(_theservercallextradata),0);
   if(aaNetWebsocketServerCallClose(&app.the_server)!=YES) { oof; }
   break;
   }

  if(app.the_server.scd->is_ready!=YES) { break; }
  if(app.the_server.scd->sys_flag==0)
   {
   aaNetWebsocketServerPktWritef(&app.the_server,WEBSOCKET_OPCODE_TEXT,YES,"{\"xfwd\":\"%s\"}",app.the_server.scd->wock.x_forwarded_for);
   app.the_server.scd->sys_flag=1;
   }
  return RET_YES;
  }
 return RET_NOTREADY;
 }





 B serverCallPktWrite                  (B oc,B ff,H bytes,VP data)
 {
 B ret;
 if((ret=aaNetWebsocketServerPktWrite(&app.the_server,oc,ff,bytes,data))!=RET_YES) { oops; }
 return RET_YES;
 }



 B serverCallPktWritef                 (B oc,B ff,VP fmt,...)
 {
 B ret;
 aaVargsf256K(fmt);
 if((ret=aaNetWebsocketServerPktWritef(&app.the_server,oc,ff,"%s",str256k.buf))!=RET_YES) { oops; }
 return RET_YES;
 }





 B serverCallPktRead                   (_websockethdr*wockhdr,VP wockdata)
 {
 B ret;
 BP bp;
 if((ret=aaNetWebsocketServerPktRead(&app.the_server,wockhdr,wockdata))!=RET_YES) { return ret; }
 bp=(BP)wockdata;
 bp[wockhdr->bytes]=NULL_CHAR;
 return RET_YES;
 }






 B serverCallPktProcess                (_websockethdr*wockhdr,VP wockdata)
 {
 B ret;
 BP wdata;
 wdata=(BP)wockdata;
 wdata[wockhdr->bytes]=NULL_CHAR;
 //appLog(0,F32,"pktprocess %s",wdata);
 if((ret=aaJsonCreate(&json_unit.handle,NO))!=YES) { oops; }
 if((ret=aaJsonDecoderBegin(json_unit.handle,wockhdr->bytes,wockdata))!=YES)
  {
  //appLog(0,F32,"serverCallPktProcess jsonbegin failed %s",arets);
  if((ret=aaJsonDestroy(json_unit.handle))!=YES) { oops; }
  return RET_FAILED;
  }
 if((ret=aaJsonDecoderYield(json_unit.handle,YES,&json_unit.status))!=RET_YES)
  {
  //appLog(0,F32,"serverCallPktProcess json failed %s",arets);
  if((ret=aaJsonDestroy(json_unit.handle))!=YES) { oops; }
  return RET_FAILED;
  }
 //appLog(0,F32,"line=%i",__LINE__);
 aaJcursorNew(&jay_cur);
 aaJcursorAttach(&jay_cur,json_unit.handle);
 if((ret=aaJcursorFlatten(&jay_cur))!=YES) { oops; }
 if(tr.magic!=0) { aaTextReaderDelete(&tr); }
 if((ret=aaTextReaderNew(&tr,0,jay_cur.flat_out))!=YES) { oops; }
 aaJcursorDelete(&jay_cur);
 if((ret=aaJsonDestroy(json_unit.handle))!=YES) { oops; }
 return RET_YES;
 }





/*-----------------------------------------------------------------------*/



 Q last_bug_from=0;

 B serverProcessor                     (V)
 {
 B ret;
 _websockethdr wockhdr;
 B pre[_1K];
 B wockdata[_256K];
 H ok,ci,ti,j;
 H test_count;
 N scei;
 B key[_32K];
 B val[_32K];
 B out[_32K];
 B is_qtd,cha;
 Q uid,from,to,el;
 B room[_1K];
 _trobj trobj[32];
 _theservercallgather scgath;
 N w0;
 N bashyindex,bi;

 if(serverCallNext()==YES)
  {
  if(app.the_server.scd->is_close!=0&&app.the_server.scd->is_closing==0)
   {
   ci=app.the_server.call.status.index;
   serverCallToText(pre);
   aaStringCopyf(room,"%s",app.the_server_call_extra_data[ci].room_name);
   uid=app.the_server_call_extra_data[ci].uuid;
   //appLog(0,F32,"%s closeb",pre);
   bashyindex=app.the_server_call_extra_data[ci].bashy_index;
   if(bashyindex>=0)
    {
    aaDebugf("ending bashy %i",bashyindex);
    bashEnd(&app.bashy[bashyindex]);
    }
   aaMemoryFill(&app.the_server_call_extra_data[ci],sizeof(_theservercallextradata),0);
   if(aaNetWebsocketServerCallClose(&app.the_server)!=YES) { oof; }
   if(room[0]&&uid)
    {
    serverCallRoomGather(&scgath,"%s",room);
    for(j=0;j<scgath.count;j++)
     {
     scei=scgath.call_extra_index[j];
     if(scei==(N)ci) { continue; }
     if((ret=aaNetWebsocketServerCallSet(&app.the_server,app.the_server_call_extra_data[scei].call_handle))!=YES) { oops; continue; }
     aaStringNull(out);
     aaStringAppendf(out,"{");
     aaStringAppendf(out,"\"cmd\":\"left\",");
     aaStringAppendf(out,"\"room\":\"%s\",",room);
     aaStringAppendf(out,"\"uuid\":%I64d",uid);
     aaStringAppendf(out,"}");
     serverCallPktWritef(WEBSOCKET_OPCODE_TEXT,1,"%s",out);
     }
    }
   return RET_YES;
   }

  switch(app.the_server.scd->ustage)
   {
   case 0:
   if(app.the_server.scd->sys_flag!=1) { break; }
   serverCallToText(pre);
   while(1)
    {
    ok=0;
    if(aaStringICompare(app.the_server.scd->wock.url,"/rtcsig/",0)==YES) { ok=2000; break; }
    break;
    }
   if(ok==0)
    {
    appLog(0,F32,"%s answered bad url",pre);
    if(aaNetWebsocketServerCallClose(&app.the_server)!=YES) { oof; }
    binerr_user_cntr++;
    break;
    }
   appLog(0,F32,"%s answered",pre);
   ci=app.the_server.call.status.index;
   aaMemoryFill(&app.the_server_call_extra_data[ci],sizeof(_theservercallextradata),0);
   app.the_server_call_extra_data[ci].call_handle=app.the_server.call.handle;
   app.the_server_call_extra_data[ci].call_index=ci;
   app.the_server_call_extra_data[ci].call_number=app.the_server.call.status.number;
   app.the_server_call_extra_data[ci].call_session=app.the_server.call.status.session;
   app.the_server_call_extra_data[ci].bashy_index=-1;

   app.the_server.scd->ustage=ok;
   ///appLog(0,F32,"going to stage %i",app.the_server.scd->ustage);
   break;



   case 60: app.the_server.scd->ustage++; break;
   case 61: app.the_server.scd->ustage++; break;
   case 62: app.the_server.scd->ustage++; break;
   case 63: app.the_server.scd->ustage++; break;
   case 64: app.the_server.scd->ustage++; break;
   case 65: app.the_server.scd->ustage++; break;
   case 66: if(aaNetWebsocketServerCallClose(&app.the_server)!=YES) { oof; } break;

   case 70: el=aaMsRunning()-app.the_server.scd->ums;
   //aaDebugf("%I64d",el);
            if(el>=3000) { app.the_server.scd->ustage=60; }
            break;



   case 2000:
   serverCallToText(pre);
   ci=app.the_server.call.status.index;
   if(serverCallPktRead(&wockhdr,wockdata)==YES)
    {
    if(serverCallPktProcess(&wockhdr,wockdata)==YES)
     {
     ti=0;
     trObjInit(&trobj[ti],"cmd");
     trobj[ti].ret=trValGet(&tr,trobj[ti].val,&trobj[ti].line,&trobj[ti].is_qtd,"%s",trobj[ti].key);
     if(trobj[ti].ret!=RET_YES) {   appLog(0,F32,"cmd not found");      break;      }
     aaStringIsIStringQuoted(trobj[ti].val,100,&w0,"join","say","bash",0);

     switch(w0)
      {
      default:
      appLog(0,F32,"cmd=%s",trobj[ti].val);
      break;

      case 100: // join
      trObjInit(&trobj[0],"cmd");
      trObjInit(&trobj[1],"room");
      trObjInit(&trobj[2],"fingerprint");
      trObjInit(&trobj[3],"testcount");

      for(ti=0;ti<4;ti++) { trobj[ti].ret=trValGet(&tr,trobj[ti].val,&trobj[ti].line,&trobj[ti].is_qtd,"%s",trobj[ti].key);   }
      aaStringToNumber(trobj[3].val,0,&test_count,0,0,0);
      if(test_count<2)  { test_count=2; }
      else
      if(test_count>32) { test_count=32; }


      serverCallRoomGather(&scgath,"%s",trobj[1].val);
//    aaDebugf("tc=%i sc=%i",test_count,scgath.count);
      if(scgath.count>=test_count)
       {
       aaStringNull(out);
       aaStringAppendf(out,"{");
       aaStringAppendf(out,"\"cmd\":\"full\",");
       aaStringAppendf(out,"\"room\":\"%s\"",trobj[1].val);
       aaStringAppendf(out,"}");
       serverCallPktWritef(WEBSOCKET_OPCODE_TEXT,1,"%s",out);
       app.the_server.scd->ums=aaMsRunning();
       app.the_server.scd->ustage=70;
       break;
       }
      uid=globalIdGenerate();
      aaStringCopy(app.the_server_call_extra_data[ci].room_name,trobj[1].val);
      app.the_server_call_extra_data[ci].uuid=uid;
      serverCallRoomGather(&scgath,"%s",trobj[1].val);
      aaStringNull(out);
      aaStringAppendf(out,"{");
      aaStringAppendf(out,"\"cmd\":\"hi\",");
      aaStringAppendf(out,"\"room\":\"%s\",",trobj[1].val);
      aaStringAppendf(out,"\"uuid\":%I64d,",uid);
      aaStringAppendf(out,"\"peerCount\":%i,",scgath.count);
      aaStringAppendf(out,"\"peerList\":[");
      for(j=0;j<scgath.count;j++)
       {
       scei=scgath.call_extra_index[j];
       aaStringAppendf(out,"%I64d,",app.the_server_call_extra_data[scei].uuid);
       }
      aaStringLastCharGet(out,0,&cha);
      aaStringLastCharDeleteIfChar(out,0,',');
      aaStringAppendf(out,"]");
      aaStringAppendf(out,"}");
      serverCallPktWritef(WEBSOCKET_OPCODE_TEXT,1,"%s",out);
      for(j=0;j<scgath.count;j++)
       {
       scei=scgath.call_extra_index[j];
       if(scei==(N)ci) { continue; }
       if((ret=aaNetWebsocketServerCallSet(&app.the_server,app.the_server_call_extra_data[scei].call_handle))!=YES) { oops; continue; }
       aaStringNull(out);
       aaStringAppendf(out,"{");
       aaStringAppendf(out,"\"cmd\":\"joined\",");
       aaStringAppendf(out,"\"room\":\"%s\",",trobj[1].val);
       aaStringAppendf(out,"\"uuid\":%I64d",uid);
       aaStringAppendf(out,"}");
       serverCallPktWritef(WEBSOCKET_OPCODE_TEXT,1,"%s",out);
       }
      break;




      case 101: // say
      trObjInit(&trobj[0],"cmd");
      trObjInit(&trobj[1],"room");
      trObjInit(&trobj[2],"to");
      trObjInit(&trobj[3],"msg.func");
      trObjInit(&trobj[4],"msg.data");
      for(ti=0;ti<5;ti++) { trobj[ti].ret=trValGet(&tr,trobj[ti].val,&trobj[ti].line,&trobj[ti].is_qtd,"%s",trobj[ti].key);   }
      serverCallRoomGather(&scgath,"%s",trobj[1].val);

      aaStringToNumber(trobj[2].val,0,0,0,0,&to);
      ///appLog(0,F32,"to=%I64d",to);
      from=app.the_server_call_extra_data[ci].uuid;

      if(to==0) // to all
       {
       for(j=0;j<scgath.count;j++)
        {
        scei=scgath.call_extra_index[j];
        //if(scei==ci) { continue; }
        if((ret=aaNetWebsocketServerCallSet(&app.the_server,app.the_server_call_extra_data[scei].call_handle))!=YES) { oops; continue; }
        aaStringNull(out);
        aaStringAppendf(out,"{");
        aaStringAppendf(out,"\"cmd\":\"said\",");
        aaStringAppendf(out,"\"room\":\"%s\",",trobj[1].val);
        aaStringAppendf(out,"\"uuid\":%I64d,",from); // from
        aaStringAppendf(out,"\"to\":%I64d,",to);
        aaStringAppendf(out,"\"target\":%I64d,",app.the_server_call_extra_data[scei].uuid);
        aaStringAppendf(out,"\"msg_func\":\"%s\",",trobj[3].val);
        aaStringAppendf(out,"\"msg_data\":\"%s\"",trobj[4].val);
        aaStringAppendf(out,"}");
        serverCallPktWritef(WEBSOCKET_OPCODE_TEXT,1,"%s",out);
        }
       }
      else
      if(to==1) // to server
       {
       //aaDebugf("from=%I64d",from);
       if(from!=last_bug_from)
        {
        aaDebugf("uid=%I64d",from);
        }
       aaDebugf("%s",trobj[4].val);
       last_bug_from=from;
       //aaDebugf("%s) %I64d, %s: %s",trobj[1].val,from,trobj[3].val,trobj[4].val);
       }
      else
       {
       for(j=0;j<scgath.count;j++)
        {
        scei=scgath.call_extra_index[j];
        //if(scei==ci) { continue; }
        if(app.the_server_call_extra_data[scei].uuid!=to) { continue; }
        if((ret=aaNetWebsocketServerCallSet(&app.the_server,app.the_server_call_extra_data[scei].call_handle))!=YES) { oops; continue; }
        aaStringNull(out);
        aaStringAppendf(out,"{");
        aaStringAppendf(out,"\"cmd\":\"said\",");
        aaStringAppendf(out,"\"room\":\"%s\",",trobj[1].val);
        aaStringAppendf(out,"\"uuid\":%I64d,",from); // from
        aaStringAppendf(out,"\"to\":%I64d,",to);
        aaStringAppendf(out,"\"target\":%I64d,",app.the_server_call_extra_data[scei].uuid);
        aaStringAppendf(out,"\"msg_func\":\"%s\",",trobj[3].val);
        aaStringAppendf(out,"\"msg_data\":\"%s\"",trobj[4].val);
        aaStringAppendf(out,"}");
        serverCallPktWritef(WEBSOCKET_OPCODE_TEXT,1,"%s",out);
        break;
        }
       }
      break;



      case 102:
      trObjInit(&trobj[0],"slang");
      trObjInit(&trobj[1],"tlang");
      trObjInit(&trobj[2],"text");
      for(ti=0;ti<3;ti++) { trobj[ti].ret=trValGet(&tr,trobj[ti].val,&trobj[ti].line,&trobj[ti].is_qtd,"%s",trobj[ti].key);   }
      aaDebugf("%s",trobj[0].val);
      aaDebugf("%s",trobj[1].val);
      aaDebugf("%s",trobj[2].val);

      for(bi=0;bi<32;bi++)
       {
       if(app.bashy[bi].magic==0) { break; }
       }
      if(bi==32) { oof; }
      ci=app.the_server.call.status.index;
      app.the_server_call_extra_data[ci].bashy_index=bi;
      bi=app.the_server_call_extra_data[ci].bashy_index;
      bashStart(&app.bashy[bi]);
      bashCmdAppendf(&app.bashy[bi],"-H \"authority: www.ibm.com\" ");
      bashCmdAppendf(&app.bashy[bi],"-H \"accept: application/json, text/plain, */*\" ");
      bashCmdAppendf(&app.bashy[bi],"-H \"accept-language: en-US,en;q=0.9\" ");
      bashCmdAppendf(&app.bashy[bi],"-H \"content-type: application/json;charset=UTF-8\" ");
      bashCmdAppendf(&app.bashy[bi],"-H \"origin: https://www.ibm.com\" ");
      bashCmdAppendf(&app.bashy[bi],"-H \"referer: https://www.ibm.com/demos/live/watson-language-translator/self-service/home\" ");
      bashCmdAppendf(&app.bashy[bi],"\"https://www.ibm.com/demos/live/watson-language-translator/api/translate/text\" ");
      //bashCmdAppendf(&app.bashy[bi],"--data-raw \"{\\\"text\\\":\\\"hello how are you\\\",\\\"source\\\":\\\"en\\\",\\\"target\\\":\\\"zh\\\"}\" ");
      bashCmdAppendf(&app.bashy[bi],"--data-raw \"{\\\"text\\\":\\\"%s\\\",\\\"source\\\":\\\"%s\\\",\\\"target\\\":\\\"%s\\\"}\" ",trobj[2].val,trobj[0].val,trobj[1].val );
      bashExecute(&app.bashy[bi]);
      app.the_server.scd->ustage=3000;
      break;


      case 10221:
      for(tr.li=0;tr.li<tr.line_count;tr.li++)
       {
       if(trKeyValGet(&tr,tr.li,&is_qtd,key,val)==YES)  {  appLog(0,F32,"%-2i %-2i [%s] [%s]",tr.li,is_qtd,key,val); }
       }
      break;

      }
     }
    }
   break;

   case 3000:
   serverCallToText(pre);
   ci=app.the_server.call.status.index;
   bi=app.the_server_call_extra_data[ci].bashy_index;
   bashYield(&app.bashy[bi]);
   if(app.bashy[bi].is_fin!=YES) { break; }
   aaDebugf("bash done %i [%s]",app.bashy[bi].bytes,app.bashy[bi].data);

      aaStringNull(out);
      aaStringAppendf(out,"{");
      aaStringAppendf(out,"\"cmd\":\"smash\",");
      aaStringAppendf(out,"\"room\":\"%s\",",app.the_server_call_extra_data[ci].room_name);
      aaStringAppendf(out,"\"uuid\":%I64d,",app.the_server_call_extra_data[ci].uuid);
      aaStringAppendf(out,"\"data\":");
      aaStringAppendf(out,"%s",app.bashy[bi].data);
      aaStringAppendf(out,"}");
      serverCallPktWritef(WEBSOCKET_OPCODE_TEXT,1,"%s",out);

   bashEnd(&app.bashy[bi]);
   app.the_server_call_extra_data[ci].bashy_index=-1;
   app.the_server.scd->ustage=2000;
   break;





   }
  }
 return RET_YES;
 }



