/*-----------------------------------------------------------------------*/
 #pragma once
 #ifndef INC_WESOSE_H
 #define INC_WESOSE_H
 #define PUB                           extern
 #ifdef __cplusplus
 PUB "C" {
 #endif
/*-----------------------------------------------------------------------*/
 #include "aa.h"
/*-----------------------------------------------------------------------*/
 #define DEV_VERSION                   "0.91"
/*-----------------------------------------------------------------------*/

 structure
 {
 H magic;
 H stage;
 B is_prompt;
 B is_fin;
 H sli;
 _shell shell;
 B cmd[_4K];
 H bytes;
 B data[_512K];
 }
 _bash;


 B bashStart                           (_bash*bash);
 B bashEnd                             (_bash*bash);
 B bashCmdAppendf                      (_bash*bash,VP fmt,...);
 B bashExecute                         (_bash*bash);
 B bashYield                           (_bash*bash);


/*-----------------------------------------------------------------------*/

 #define SERVER_MAX_CALLS              200


 structure
 {
 H call_handle;
 H call_index;
 H call_number;
 H call_session;
 B room_name[65];
 Q uuid;
 N bashy_index;
 }
 _theservercallextradata;


 structure
 {
 H count;
 N call_extra_index[SERVER_MAX_CALLS];
 }
 _theservercallgather;


 B serverCallRoomGather                (_theservercallgather*scgather,VP fmt,...);

 B serverCallToText                    (VP txt);
 B serverCallNext                      (V);
 B serverCallPktWrite                  (B oc,B ff,H bytes,VP data);
 B serverCallPktWritef                 (B oc,B ff,VP fmt,...);
 B serverCallPktRead                   (_websockethdr*wockhdr,VP wockdata);
 B serverCallPktProcess                (_websockethdr*wockhdr,VP wockdata);
 B serverProcessor                     (V);


/*-----------------------------------------------------------------------*/

 Q globalIdGenerate                    (V);

/*-----------------------------------------------------------------------*/


 structure
 {
 H magic;
 B ret;
 B key[_4K];
 H line;
 B is_qtd;
 B val[_4K];
 }
 _trobj;


 B trObjInit                           (_trobj*trobj,VP fmt,...);

 B trValGet                            (_textreader*textreader,VP val,HP li,BP isqtd,VP fmt,...);
 B trKeyValGet                         (_textreader*textreader,H li,BP isqtd,VP key,VP val);

/*-----------------------------------------------------------------------*/


 structure
 {
 H magic;
 B is_ready;
 B is_paused;
 B do_quit;
 _info info;
 _sysinfo si;
 _displayinfo di;
 _surfaceunit surf;
 H tray_icon_index;
 Q tray_icon_ms;
 _surfaceunit canvas;
 Q canvas_update_ms;
 _fontunit font[1];
 B bilboard[15][257];
 B esc_state;
 Q esc_ms;
 _netstatus ns;
 _websocketserver the_server;
 _theservercallextradata the_server_call_extra_data[SERVER_MAX_CALLS];
 Q global_id_counter;
 B global_id_block[SERVER_MAX_CALLS];
 _bash bashy[32];
 }
 _app;


 B appStart                            (V);
 B appStop                             (V);
 B appYield                            (V);
 B appLog                              (H index,H lines,VP fmt,...);
 B appStats                            (V);
 V appEngine                           (V);

/*-----------------------------------------------------------------------*/
 PUB _app                              app;
/*-----------------------------------------------------------------------*/
 #endif
/*-----------------------------------------------------------------------*/
 #ifdef __cplusplus
 }
 #endif


