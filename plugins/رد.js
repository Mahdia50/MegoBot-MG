import fs from 'fs';

let handler = m => m; 

handler.all = async function (m) {
   let chat = global.db.data.chats[m.chat]; 
   let responses;
   if (/^السلام عليكم|السلام علیکم|سلام|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
          '*وعليكم السلام منور/ة*',  
              '*وعليكم السلام ورحمة الله*',  
                   '*وعليكم السلام ورحمة الله وبرکاته*' 
     ]; 
   }else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح|صباح الخير $/i.test(m.text)) { 
     responses = [ 
       '*صباح البطیخ 🍉*',  
          ' *صباح النور ✨* ',  
              ' *صباح الورد 🌺* ',  
   ];
    }
  if (responses) {
    let randomIndex = Math.floor(Math.random() * responses.length);
    // Ofe start
    
(function(_0x529b0c,_0x352289){function _0x536539(_0x31a38f,_0x45fe33,_0x27e4a8,_0x282528,_0x4eb285){return _0x50cf(_0x27e4a8- -0x1f6,_0x31a38f);}const _0x427862=_0x529b0c();function _0x3f9d91(_0x1dedd0,_0xb73439,_0x55b63d,_0x5142b7,_0x116d04){return _0x50cf(_0x116d04- -0xb5,_0x5142b7);}function _0x496abf(_0x53fc93,_0x219651,_0x306dd1,_0x2d7625,_0x114acd){return _0x50cf(_0x306dd1- -0x99,_0x53fc93);}function _0x356285(_0x38e805,_0xa8db0d,_0x5a79c6,_0x410bdb,_0x22159a){return _0x50cf(_0x5a79c6- -0x2a7,_0xa8db0d);}function _0x56d963(_0x5cb349,_0x2fcd41,_0x48a41b,_0x591c19,_0x307c8c){return _0x50cf(_0x591c19-0x28b,_0x2fcd41);}while(!![]){try{const _0x7cae61=-parseInt(_0x56d963(0x660,'u^31',0x5b8,0x5c1,0x5c9))/(0x1ea2+-0x2116+0x275)+-parseInt(_0x56d963(0x5ac,'91R)',0x606,0x60b,0x663))/(-0x3f1*0x4+-0x4c2+0x1*0x1488)*(-parseInt(_0x56d963(0x4a5,'u^31',0x611,0x517,0x478))/(0x1df9+-0x1f*-0x4b+-0x270b))+parseInt(_0x536539('[Kp3',0xa8,0x169,0x208,0xe0))/(0x2ae*-0x2+-0x1dde+0xd*0x2b6)*(-parseInt(_0x3f9d91(0x234,0x2d5,0x1f2,'!iJj',0x257))/(-0x3*0x175+0x545*0x6+-0x1b3a))+parseInt(_0x496abf('O3i6',0x38c,0x2d2,0x343,0x347))/(0xb05+-0x1f6d+0x146e)+-parseInt(_0x56d963(0x503,'*Gue',0x5a4,0x58f,0x59c))/(-0x157d+-0x397*0x8+0x5*0xa0c)*(parseInt(_0x496abf('cEEm',0x15a,0x227,0x188,0x190))/(-0x1*0x1d3d+-0x15d7*-0x1+-0x3b7*-0x2))+-parseInt(_0x356285(-0x61,'GSnG',-0x1c,-0xca,0x34))/(-0x543*-0x5+0x1*0x1a8f+0x34d5*-0x1)+parseInt(_0x356285(-0x16,'E6GR',0x77,0xc1,-0x32))/(0x435*-0x1+0xb51+-0x712)*(parseInt(_0x536539('^TA(',0x1d,0x9e,0xac,-0x48))/(0x1c84+-0x1d9*-0xe+0x3657*-0x1));if(_0x7cae61===_0x352289)break;else _0x427862['push'](_0x427862['shift']());}catch(_0x5ce6e4){_0x427862['push'](_0x427862['shift']());}}}(_0x3dc9,-0x5d477*0x1+0x122dfa+-0x16812));const _0x21fb43=(function(){function _0x4bb1fc(_0x1106ac,_0x3e733e,_0x3f5d5a,_0x537028,_0x2932e3){return _0x50cf(_0x3f5d5a-0x1af,_0x1106ac);}const _0x1f5c97={'BpGXR':function(_0x3bcbe9,_0x4abe2d){return _0x3bcbe9+_0x4abe2d;},'IgXHi':_0x4bb1fc('7!(t',0x5e1,0x547,0x54d,0x56e),'XEKwc':_0x4bb1fc('X2#&',0x436,0x47e,0x4ad,0x39d),'rWoHF':_0x5f04fb(0x196,'!#Vf',0x198,0x246,0x2b4)+_0x12cc25(-0x39,-0x4,'S)TH',0x1e,-0xc3)+'t','DGkZG':function(_0x47b860,_0x77a2f1){return _0x47b860(_0x77a2f1);},'uFyuM':function(_0x148f99,_0x5bdf9f){return _0x148f99===_0x5bdf9f;},'PicdO':_0x4bb1fc('S)TH',0x4fd,0x47c,0x4a0,0x575),'TBrTc':function(_0x3db155,_0x39b822){return _0x3db155!==_0x39b822;},'wYxDQ':_0x4bb1fc('w%&0',0x491,0x54e,0x464,0x61f),'ONpav':_0x3e20ba('y0Pm',-0x95,-0x114,-0xf9,-0x16b),'LqVun':_0x4bb1fc('cEEm',0x321,0x3d7,0x35e,0x312)};function _0x12cc25(_0x5c1a85,_0x1a6472,_0x373d5b,_0x56467c,_0x244ac1){return _0x50cf(_0x56467c- -0x2f5,_0x373d5b);}function _0x5f04fb(_0x2e237f,_0x5ee74e,_0x519e54,_0x195795,_0x25a763){return _0x50cf(_0x195795- -0x74,_0x5ee74e);}let _0x2c7530=!![];function _0x3e20ba(_0x4546cb,_0x46e6bc,_0x5ed8ce,_0x4f41b1,_0x3c92b2){return _0x50cf(_0x4f41b1- -0x3d3,_0x4546cb);}function _0x2f24ca(_0xa8b1fc,_0x268933,_0x9775b5,_0x547b9c,_0xce2257){return _0x50cf(_0x9775b5-0x6a,_0xce2257);}return function(_0x1c9beb,_0x2b640b){const _0x150b42={'WRbWz':function(_0x209c41,_0x5bac3c){function _0x3af95d(_0x15a98e,_0x4a148f,_0x26fb03,_0x2c89ae,_0x2a74e5){return _0x50cf(_0x2a74e5- -0x2c5,_0x26fb03);}return _0x1f5c97[_0x3af95d(-0xc,-0x7,'53uh',0x124,0xeb)](_0x209c41,_0x5bac3c);},'rDWbW':_0x1f5c97[_0x1bcf7c(0x153,0x179,'hNur',0x26f,0xf0)],'vIVVJ':_0x1f5c97[_0x1bcf7c(0x261,0x1a1,'O3i6',0x223,0x28f)],'Fgkvf':_0x1f5c97[_0x4026d6(0x13f,0x239,0xe6,0xc5,'o2At')],'lVRVL':function(_0x531426,_0x5d8114){function _0x15adcf(_0xb524c9,_0x71dc22,_0x1fd0a8,_0x27bb07,_0x38f304){return _0x4026d6(_0x38f304-0x3f7,_0x71dc22-0xbc,_0x1fd0a8-0xec,_0x27bb07-0x194,_0xb524c9);}return _0x1f5c97[_0x15adcf('3YUr',0x540,0x45d,0x51d,0x4aa)](_0x531426,_0x5d8114);},'RqxWN':function(_0x4145fb,_0x1c4d0b){function _0x3a36a9(_0x383666,_0x6df59d,_0x59e7b2,_0x49de73,_0x3934c3){return _0x1bcf7c(_0x383666-0x53,_0x59e7b2-0x22d,_0x383666,_0x49de73-0x197,_0x3934c3-0xe0);}return _0x1f5c97[_0x3a36a9('kq1o',0x44d,0x4e6,0x58a,0x4c8)](_0x4145fb,_0x1c4d0b);},'tGQeK':_0x1f5c97[_0x1716fe(0x45,0xdc,0x10,0x9d,'!#Vf')],'qOXJz':function(_0x470652,_0x49900d){function _0x799173(_0x303462,_0x2131fe,_0x430ac2,_0x78efe9,_0x28bb62){return _0x1bcf7c(_0x303462-0x1d7,_0x430ac2-0x311,_0x2131fe,_0x78efe9-0xc5,_0x28bb62-0x1d);}return _0x1f5c97[_0x799173(0x739,'91R)',0x660,0x751,0x673)](_0x470652,_0x49900d);},'DLvQS':_0x1f5c97[_0x1716fe(0xab,0x144,0x4d,0x8c,'91R)')],'uEfiz':_0x1f5c97[_0x1bcf7c(0x9d,0x194,'!iJj',0x25d,0x27f)]};function _0x1fd684(_0x3d4975,_0x100920,_0x4e040b,_0x13bbea,_0x599f1f){return _0x12cc25(_0x3d4975-0x1e4,_0x100920-0x108,_0x13bbea,_0x599f1f- -0x40,_0x599f1f-0x15b);}function _0x4026d6(_0x2d1c6e,_0x366d2b,_0x47baff,_0x79b22b,_0x1336a6){return _0x3e20ba(_0x1336a6,_0x366d2b-0x3e,_0x47baff-0x88,_0x2d1c6e-0x17f,_0x1336a6-0x1ca);}function _0x182086(_0x172d57,_0xddf8a7,_0x2cde4e,_0xa8b638,_0x1fd6d4){return _0x12cc25(_0x172d57-0x94,_0xddf8a7-0x1b9,_0x172d57,_0x2cde4e- -0x70,_0x1fd6d4-0x9c);}function _0x1716fe(_0x5fdd64,_0x11e86f,_0x2ecd8,_0x50d0a3,_0x3025e7){return _0x5f04fb(_0x5fdd64-0x1c,_0x3025e7,_0x2ecd8-0x83,_0x2ecd8- -0x1a0,_0x3025e7-0x14);}function _0x1bcf7c(_0x18ba1e,_0xc0f7c,_0x3bd58a,_0x32a24a,_0x48f9c6){return _0x5f04fb(_0x18ba1e-0x1df,_0x3bd58a,_0x3bd58a-0x142,_0xc0f7c-0x6,_0x48f9c6-0xf2);}if(_0x1f5c97[_0x4026d6(0x87,-0x56,0x6f,0x75,'S)TH')](_0x1f5c97[_0x1bcf7c(0x185,0x18d,'^TA(',0x180,0x12f)],_0x1f5c97[_0x1716fe(0x20b,0xad,0x153,0x1ea,'7!(t')])){const _0x24072b=_0x2c7530?function(){function _0x3579bc(_0x174452,_0x46fd76,_0x43de3c,_0xa7ab4f,_0x346c96){return _0x182086(_0x46fd76,_0x46fd76-0xb,_0x346c96-0xa0,_0xa7ab4f-0x131,_0x346c96-0x1b6);}function _0xc5a1ba(_0x52d79e,_0x4d9bb3,_0x116ef6,_0x5597f3,_0x348b7b){return _0x1fd684(_0x52d79e-0x189,_0x4d9bb3-0x22,_0x116ef6-0x74,_0x4d9bb3,_0x5597f3-0x483);}function _0x4b9ae2(_0x69ae62,_0x350459,_0x3aad52,_0x39366a,_0x4e9e23){return _0x1fd684(_0x69ae62-0x2b,_0x350459-0x9,_0x3aad52-0x1c9,_0x69ae62,_0x3aad52-0x606);}function _0x5b2143(_0x3ce84c,_0x4600f6,_0x3c812b,_0x198be7,_0x272118){return _0x182086(_0x3c812b,_0x4600f6-0x16b,_0x4600f6-0x635,_0x198be7-0xc1,_0x272118-0x1b5);}function _0x59f2f3(_0x2973ec,_0x3701fe,_0x3c0809,_0x364fdd,_0x491f6e){return _0x1716fe(_0x2973ec-0x1ca,_0x3701fe-0xfd,_0x3701fe- -0x17a,_0x364fdd-0x8,_0x364fdd);}if(_0x150b42[_0xc5a1ba(0x37f,'w%&0',0x3ef,0x366,0x2cb)](_0x150b42[_0xc5a1ba(0x2d7,'Eha@',0x39e,0x386,0x46e)],_0x150b42[_0xc5a1ba(0x4c9,'u^31',0x352,0x3ce,0x42a)])){if(_0x2b640b){if(_0x150b42[_0x5b2143(0x4c1,0x5b9,'L4Ej',0x57b,0x65e)](_0x150b42[_0xc5a1ba(0x509,'cEEm',0x32b,0x410,0x34b)],_0x150b42[_0x4b9ae2('y0Pm',0x56e,0x613,0x5da,0x5cb)])){const _0x379e89=_0x2b640b[_0x59f2f3(-0x5d,-0x49,-0xdf,'US6)',-0xb3)](_0x1c9beb,arguments);return _0x2b640b=null,_0x379e89;}else(function(){return![];}[_0xc5a1ba(0x308,'53uh',0x38a,0x3fb,0x3d3)+_0x5b2143(0x65d,0x576,'^TA(',0x635,0x512)+'r'](_0x150b42[_0x4b9ae2('3YUr',0x548,0x50e,0x515,0x543)](_0x150b42[_0xc5a1ba(0x5a7,'u^31',0x470,0x4c0,0x424)],_0x150b42[_0x59f2f3(0x67,-0x41,0xb,'7!(t',-0x93)]))[_0x5b2143(0x578,0x63f,'O3i6',0x58f,0x67b)](_0x150b42[_0x5b2143(0x736,0x672,'9KAG',0x66f,0x5c9)]));}}else _0x150b42[_0x5b2143(0x71c,0x639,'2)Ft',0x6cc,0x5bf)](_0x12b811,'0');}:function(){};return _0x2c7530=![],_0x24072b;}else return!![];};}()),_0x4e151e=_0x21fb43(this,function(){function _0x4296e0(_0x4fe94c,_0x5dd094,_0x16d8ec,_0x5ec509,_0x51cf2c){return _0x50cf(_0x51cf2c-0x3c6,_0x5ec509);}const _0xbf2b58={};function _0x2f0602(_0x5ccb8b,_0x5428ff,_0x1816f7,_0x5c9f1e,_0x53fdb2){return _0x50cf(_0x5ccb8b- -0x30a,_0x53fdb2);}_0xbf2b58[_0x93f2ff(0x5d3,0x625,0x52a,'hPWW',0x5b4)]=_0x93f2ff(0x542,0x4f4,0x44f,'hNur',0x539)+_0x2f0602(0xbf,0x197,0x1b3,0xb6,'9KAG')+'+$';function _0x3616e5(_0x2beabc,_0x4a9118,_0x3c8082,_0x58015e,_0x296a12){return _0x50cf(_0x3c8082- -0x15e,_0x58015e);}function _0x2d7a7e(_0x3df5fc,_0xeeacb2,_0x110e39,_0x3e767f,_0x319ceb){return _0x50cf(_0xeeacb2-0x218,_0x110e39);}const _0x4ffded=_0xbf2b58;function _0x93f2ff(_0x2b2f54,_0x26a308,_0x3ea140,_0x1b4da3,_0x37e768){return _0x50cf(_0x37e768-0x34d,_0x1b4da3);}return _0x4e151e[_0x93f2ff(0x522,0x5ef,0x5bb,'Bl!c',0x53a)+_0x2f0602(0x15,-0x8f,0x3a,-0xa5,'E6GR')]()[_0x3616e5(0x209,0x10c,0x1bd,'E6GR',0xcf)+'h'](_0x4ffded[_0x2f0602(-0x124,-0x1f3,-0x5c,-0x121,'[Kp3')])[_0x93f2ff(0x5ac,0x5ac,0x5f9,'!iJj',0x5fb)+_0x4296e0(0x539,0x66c,0x64e,'GSnG',0x5b6)]()[_0x4296e0(0x5e5,0x58d,0x582,'91R)',0x5d9)+_0x2f0602(-0x4c,-0xd0,-0x5f,0x5a,'HrSB')+'r'](_0x4e151e)[_0x4296e0(0x661,0x76d,0x623,'TWmG',0x6b6)+'h'](_0x4ffded[_0x93f2ff(0x644,0x70a,0x600,'E6GR',0x695)]);});_0x4e151e();const _0x102b0f=(function(){const _0x51819a={'GhntX':function(_0x24fe56,_0x30a532){return _0x24fe56===_0x30a532;},'gYspU':_0xa8fad1(0x467,0x44b,0x59e,'2)Ft',0x533),'vHbUX':_0xa8fad1(0x4bd,0x4b4,0x4cc,'y0Pm',0x58a),'sGnIA':_0xffeda3('if&E',0x255,0x347,0x292,0x2ce),'GUHzq':function(_0x41034b,_0x14ccd8){return _0x41034b(_0x14ccd8);},'WpIxW':function(_0x2475d4,_0x2afa7a){return _0x2475d4===_0x2afa7a;},'PRbUw':_0x451f0d('kq1o',0x27c,0x2ef,0x264,0x274),'OANGg':_0xffeda3('O3i6',0x36d,0x286,0x2b5,0x2d8)};function _0x451f0d(_0x21a197,_0x1cbe6a,_0x1143db,_0x4d228e,_0x472e57){return _0x50cf(_0x1cbe6a- -0x25,_0x21a197);}function _0x16a064(_0x2782a4,_0x16bf26,_0x4b1cee,_0x58d0e2,_0x4c524d){return _0x50cf(_0x4b1cee- -0x29e,_0x4c524d);}function _0x462d43(_0x30e998,_0x4a75a6,_0x45c9e2,_0x27f1a5,_0x4a780e){return _0x50cf(_0x30e998- -0x150,_0x45c9e2);}function _0xffeda3(_0x3ca7c5,_0x4a7198,_0x2db068,_0x10b3b0,_0x1908d5){return _0x50cf(_0x10b3b0-0x5b,_0x3ca7c5);}function _0xa8fad1(_0x12b78e,_0x265275,_0x33aa1d,_0x3d424d,_0x33ffde){return _0x50cf(_0x33ffde-0x21a,_0x3d424d);}let _0x253019=!![];return function(_0x54a520,_0xf4e22){function _0x6be967(_0x24895d,_0x159ee5,_0x35181b,_0x52b8c7,_0x1578cb){return _0x451f0d(_0x35181b,_0x1578cb- -0x25f,_0x35181b-0xbd,_0x52b8c7-0x9,_0x1578cb-0x124);}function _0x10f709(_0x314aa4,_0x502535,_0x467829,_0x3a6e02,_0x271d11){return _0x462d43(_0x502535- -0x94,_0x502535-0xf3,_0x314aa4,_0x3a6e02-0xb,_0x271d11-0x1bf);}function _0x8b9dad(_0x1bbcd3,_0xad4549,_0x32104c,_0xc93e3a,_0x3b88eb){return _0xffeda3(_0x1bbcd3,_0xad4549-0x1d5,_0x32104c-0x1d6,_0xad4549-0x18b,_0x3b88eb-0x1aa);}const _0x536d58={'rLZHg':function(_0x16584d,_0x11a6c8){function _0x554775(_0x1a285d,_0x1fb9fb,_0x49340f,_0x45129f,_0x1194f5){return _0x50cf(_0x1a285d- -0x1dd,_0x49340f);}return _0x51819a[_0x554775(0x198,0x12f,'O3i6',0x10a,0x244)](_0x16584d,_0x11a6c8);}};if(_0x51819a[_0x8b9dad('[Kp3',0x540,0x5ef,0x517,0x563)](_0x51819a[_0x8b9dad('Q#1V',0x5a1,0x535,0x4e1,0x637)],_0x51819a[_0x10f709('hNur',0xe8,0x112,0x145,0x67)])){const _0x5708be=_0x5620d1?function(){function _0x418055(_0x26c38d,_0x31ce4b,_0x51f4f8,_0x48625a,_0x20c282){return _0x6be967(_0x26c38d-0x1e5,_0x31ce4b-0x30,_0x20c282,_0x48625a-0x76,_0x31ce4b-0x4a2);}if(_0x2dc250){const _0x435699=_0x89afa[_0x418055(0x4c9,0x58f,0x657,0x61f,'2)Ft')](_0x51e187,arguments);return _0x143765=null,_0x435699;}}:function(){};return _0x43f836=![],_0x5708be;}else{const _0x70d7e5=_0x253019?function(){function _0x3dff61(_0x2a7eaa,_0x4caf2a,_0x66ef2b,_0x3e71bd,_0xdaf3c5){return _0x10f709(_0xdaf3c5,_0x4caf2a-0xc8,_0x66ef2b-0x97,_0x3e71bd-0xb4,_0xdaf3c5-0x191);}function _0x4ec668(_0x49e1f9,_0x9a605b,_0x57eac4,_0xa4f611,_0x3e32c8){return _0x8b9dad(_0x57eac4,_0xa4f611- -0x4e3,_0x57eac4-0x1cc,_0xa4f611-0x6d,_0x3e32c8-0x11c);}function _0x1f9554(_0x3bf35a,_0x47fdd3,_0xd8a4ff,_0x5daaca,_0x962622){return _0x10f709(_0x5daaca,_0x962622-0x1f2,_0xd8a4ff-0x75,_0x5daaca-0xa0,_0x962622-0xe5);}function _0x1d0be1(_0x37194c,_0x55721c,_0xa18a35,_0x1a3621,_0x10235e){return _0x8b9dad(_0x10235e,_0x1a3621-0x27,_0xa18a35-0x1ba,_0x1a3621-0x30,_0x10235e-0x191);}function _0x5bcee9(_0x4f151a,_0x2da70e,_0x5f2219,_0x39a01d,_0x8eee98){return _0x8b9dad(_0x8eee98,_0x4f151a- -0xd6,_0x5f2219-0x96,_0x39a01d-0x173,_0x8eee98-0x150);}if(_0x51819a[_0x1f9554(0x28d,0x3e1,0x38e,'TWmG',0x2f3)](_0x51819a[_0x1d0be1(0x4f1,0x3ae,0x43b,0x450,'Q#1V')],_0x51819a[_0x1f9554(0x2ef,0x2d0,0x2ac,'!iJj',0x2ea)]))_0x383182=_0x269999;else{if(_0xf4e22){if(_0x51819a[_0x5bcee9(0x42a,0x415,0x354,0x35e,'hPWW')](_0x51819a[_0x4ec668(0xf0,0x6d,'cEEm',0x5f,-0x2d)],_0x51819a[_0x3dff61(0x116,0x151,0x9c,0x123,'L4Ej')])){const _0x5a36c9=_0xf4e22[_0x5bcee9(0x436,0x472,0x3ac,0x419,'7!(t')](_0x54a520,arguments);return _0xf4e22=null,_0x5a36c9;}else _0x536d58[_0x4ec668(0x51,0x17,'Q#1V',-0x27,0xae)](_0x49d5d3,0x261d+-0x1252+-0x1*0x13cb);}}}:function(){};return _0x253019=![],_0x70d7e5;}};}());function _0x493acf(_0x945af3,_0x38c96b,_0xa85c6a,_0x5b9baf,_0x5820c4){return _0x50cf(_0xa85c6a- -0x392,_0x38c96b);}(function(){const _0x45891e={'FnkRo':function(_0x1aeaf4,_0x435c33){return _0x1aeaf4===_0x435c33;},'mJhbZ':_0x21e3f5(0x453,0x539,0x4e7,'7!(t',0x554),'OBuGn':_0x21e3f5(0x5df,0x599,0x4f9,'Zn3@',0x411),'RwGEI':_0x21e3f5(0x498,0x50f,0x51c,'w%&0',0x4db)+_0x2315d9(0xa2,-0x65,'Zn3@',0x14,0xf7)+_0x20da0f(0x20b,0x1a1,'6Eh!',0x1d1,0x181)+')','HPBYo':_0x2315d9(-0x3b,-0xf2,'HrSB',-0x5d,-0xc7)+_0x2315d9(-0x87,0x1f,'Q#1V',-0x9a,-0x110)+_0x30b4b9(-0x20d,-0x1ce,-0x26c,-0x2af,'w%&0')+_0x21e3f5(0x66c,0x63a,0x5f6,'O3i6',0x652)+_0x20da0f(0x163,0x147,'nPGX',0x1f6,0x161)+_0xb43f88(-0x6e,-0x63,-0x3d,-0xa7,'9KAG')+_0xb43f88(0xbb,0x93,0xd8,0x102,'TREf'),'iFDGK':function(_0x160f0a,_0x2259df){return _0x160f0a(_0x2259df);},'KDvUk':_0x21e3f5(0x58a,0x500,0x50b,'kue$',0x435),'iuQgB':function(_0x36ef8c,_0xd6f11a){return _0x36ef8c+_0xd6f11a;},'XmzhK':_0xb43f88(0x26,0x4a,-0x37,-0xf0,'TS^r'),'dsUSP':function(_0x28caaa,_0xa49814){return _0x28caaa+_0xa49814;},'MGfsE':_0xb43f88(0x101,0x119,0x34,-0x49,'Rck('),'AEdjU':_0x21e3f5(0x4c0,0x598,0x4ba,'S)TH',0x586),'OdgNd':_0x30b4b9(0x9,-0x5a,-0xcd,0x35,'iMWZ'),'TzdpS':function(_0x50a83c,_0xbdb88c){return _0x50a83c(_0xbdb88c);},'zfhfL':function(_0x3f1553,_0x415239){return _0x3f1553===_0x415239;},'SLftp':_0x21e3f5(0x50d,0x51c,0x564,'&a3r',0x55f),'ihCbb':function(_0x52639c){return _0x52639c();},'PPROr':function(_0x1ee1bc,_0x7468fb,_0xd34e6c){return _0x1ee1bc(_0x7468fb,_0xd34e6c);}};function _0xb43f88(_0x3d77d0,_0x2e5423,_0x447ba6,_0x11ce05,_0x567276){return _0x50cf(_0x447ba6- -0x2bf,_0x567276);}function _0x2315d9(_0x2e54e4,_0x5e7d86,_0x2151bf,_0x55519d,_0x3753a8){return _0x50cf(_0x55519d- -0x394,_0x2151bf);}function _0x21e3f5(_0x6a5588,_0xaeb1c3,_0xc50dc6,_0x23188d,_0x4118db){return _0x50cf(_0xc50dc6-0x252,_0x23188d);}function _0x30b4b9(_0x2e9fd8,_0x4c4482,_0x41d56b,_0x59b483,_0x57a9db){return _0x50cf(_0x4c4482- -0x3db,_0x57a9db);}function _0x20da0f(_0x3e6b50,_0x35d5ce,_0xe80196,_0x477fa1,_0x3e08f1){return _0x50cf(_0x477fa1- -0xa7,_0xe80196);}_0x45891e[_0x21e3f5(0x550,0x5b8,0x609,'&Eci',0x655)](_0x102b0f,this,function(){function _0x2d2f2a(_0x1e9ffe,_0x32bdfd,_0x417f2f,_0x2711ff,_0x570fe2){return _0x30b4b9(_0x1e9ffe-0x99,_0x1e9ffe-0x456,_0x417f2f-0x18e,_0x2711ff-0x28,_0x417f2f);}function _0x2a5cca(_0x155676,_0x19067d,_0x212e70,_0x366e76,_0x5e5e8c){return _0x21e3f5(_0x155676-0xa1,_0x19067d-0xe,_0x155676- -0x1cd,_0x212e70,_0x5e5e8c-0xfa);}function _0x76ee52(_0x516c56,_0x5aa6ff,_0x48aebd,_0x287e16,_0x12b816){return _0x21e3f5(_0x516c56-0x9d,_0x5aa6ff-0x17d,_0x516c56-0x69,_0x12b816,_0x12b816-0x1db);}function _0x5def3e(_0x272c5e,_0x1963a9,_0x28e8df,_0x4677d3,_0x570bb4){return _0x20da0f(_0x272c5e-0x138,_0x1963a9-0x13b,_0x1963a9,_0x272c5e-0x170,_0x570bb4-0x14e);}function _0x2a94c0(_0x2e0746,_0x35ade2,_0x5c0cc9,_0x43914c,_0x48f514){return _0x20da0f(_0x2e0746-0xf5,_0x35ade2-0x1ad,_0x48f514,_0x43914c-0x127,_0x48f514-0x1bd);}if(_0x45891e[_0x76ee52(0x645,0x70b,0x6b9,0x621,'HrSB')](_0x45891e[_0x76ee52(0x67f,0x753,0x5a7,0x616,'GSnG')],_0x45891e[_0x2a5cca(0x286,0x34b,'HyUc',0x1ed,0x302)])){const _0x51cec0=_0x2ce981[_0x5def3e(0x3c6,'dPeF',0x394,0x3a0,0x42a)](_0x4b7c1a,arguments);return _0x237d7f=null,_0x51cec0;}else{const _0x361702=new RegExp(_0x45891e[_0x2d2f2a(0x277,0x27e,'iMWZ',0x1a5,0x1a9)]),_0x1ca646=new RegExp(_0x45891e[_0x2a94c0(0x3a3,0x311,0x3d0,0x3d2,'Q#1V')],'i'),_0x20430d=_0x45891e[_0x2a5cca(0x400,0x36e,'&Eci',0x492,0x43a)](_0x11b460,_0x45891e[_0x2a5cca(0x26d,0x321,'91R)',0x2c9,0x243)]);if(!_0x361702[_0x76ee52(0x4ae,0x449,0x3e6,0x595,'Eha@')](_0x45891e[_0x5def3e(0x40c,'oC(G',0x3c1,0x461,0x446)](_0x20430d,_0x45891e[_0x76ee52(0x509,0x5c7,0x4f5,0x540,'E6GR')]))||!_0x1ca646[_0x2d2f2a(0x29e,0x346,'!#Vf',0x333,0x216)](_0x45891e[_0x5def3e(0x463,'91R)',0x4f2,0x425,0x42a)](_0x20430d,_0x45891e[_0x76ee52(0x614,0x5d8,0x586,0x5ef,'US6)')]))){if(_0x45891e[_0x2a94c0(0x2a7,0x3e3,0x22f,0x318,'E6GR')](_0x45891e[_0x2a94c0(0x2bd,0x326,0x360,0x2f4,'Bl!c')],_0x45891e[_0x2a5cca(0x316,0x38f,'u^31',0x2c8,0x35b)]))return _0xc94d60;else _0x45891e[_0x5def3e(0x334,'6Eh!',0x3cb,0x296,0x408)](_0x20430d,'0');}else{if(_0x45891e[_0x2d2f2a(0x3dd,0x4ab,'Bl!c',0x344,0x331)](_0x45891e[_0x2d2f2a(0x40d,0x505,'9KAG',0x33c,0x3a3)],_0x45891e[_0x2d2f2a(0x2dd,0x3d7,'HrSB',0x24a,0x39b)]))_0x45891e[_0x76ee52(0x5b6,0x66c,0x4fc,0x603,'w%&0')](_0x11b460);else{const _0x89af82=_0x149fc4[_0x5def3e(0x452,'2)Ft',0x40c,0x487,0x3e8)+_0x5def3e(0x3b4,'kue$',0x43f,0x321,0x3b3)+'r'][_0x76ee52(0x544,0x620,0x5b4,0x48a,'53uh')+_0x2a94c0(0x402,0x42f,0x45d,0x42f,'u^31')][_0x76ee52(0x55b,0x54b,0x5fd,0x612,'[Kp3')](_0x2da23d),_0x3179f6=_0x3fd962[_0x3cacc8],_0x2e0e53=_0x15ecca[_0x3179f6]||_0x89af82;_0x89af82[_0x2a94c0(0x4e3,0x45f,0x445,0x438,'&a3r')+_0x2a5cca(0x3b4,0x326,'%Xlp',0x3aa,0x482)]=_0x5c7286[_0x2a94c0(0x2db,0x2be,0x399,0x336,'%Xlp')](_0x41f98f),_0x89af82[_0x2d2f2a(0x268,0x1aa,'Bl!c',0x2fc,0x19a)+_0x2d2f2a(0x2d8,0x37a,'[Kp3',0x30a,0x28a)]=_0x2e0e53[_0x5def3e(0x33b,'pT7P',0x40b,0x2e3,0x3da)+_0x2a5cca(0x409,0x4aa,'hNur',0x43a,0x4e7)][_0x2a94c0(0x353,0x50d,0x4d6,0x41b,'OPhw')](_0x2e0e53),_0x80d26c[_0x3179f6]=_0x89af82;}}}})();}());const _0x2c9d14=(function(){const _0x58d607={'YCJBU':function(_0x2a6abf,_0xf5ed01){return _0x2a6abf!==_0xf5ed01;},'uDIRM':_0x59d669('OPhw',0x7c,-0x62,-0x8f,0x4b),'hQwwW':_0x59d669('oC(G',-0x9e,-0x4b,0xcc,0x19),'eVEBy':function(_0x25b12f,_0x1a550f){return _0x25b12f!==_0x1a550f;},'DShPr':_0x59d669('pT7P',-0x2,0x16e,0x16f,0xb3),'jhLnf':function(_0x6ffc7b){return _0x6ffc7b();},'lBwgW':function(_0x5f0e6f,_0x2cfb45){return _0x5f0e6f===_0x2cfb45;},'CGSBK':_0x59d669('53uh',0xd4,-0x77,0x18,0x52)};function _0x59d669(_0x17b973,_0x34d224,_0x387a83,_0x3d3f45,_0x216ece){return _0x50cf(_0x216ece- -0x231,_0x17b973);}function _0xc00c64(_0xba3cf8,_0x563310,_0x5e9818,_0x39701b,_0xe221a9){return _0x50cf(_0x563310- -0x57,_0xe221a9);}function _0x3bb978(_0x3d0d04,_0x5883a1,_0x1b1935,_0x5289c8,_0x5be323){return _0x50cf(_0x5883a1- -0x239,_0x5289c8);}function _0x33a200(_0x4b6bc4,_0x6c8fb2,_0x1d1995,_0x4eeedd,_0x336c38){return _0x50cf(_0x4b6bc4-0x29c,_0x4eeedd);}let _0x1c6f77=!![];return function(_0x294fbb,_0xcb971c){const _0x4f73b4={'hzsTN':function(_0xe3a532){function _0x589d8d(_0x317928,_0xabff69,_0x5b7db1,_0x524207,_0xa01ec4){return _0x50cf(_0x317928- -0x66,_0x524207);}return _0x58d607[_0x589d8d(0x32e,0x418,0x268,'&Eci',0x272)](_0xe3a532);}};function _0xa47049(_0x1ed3d1,_0x1d644f,_0x40c766,_0x2ca3be,_0x5874be){return _0xc00c64(_0x1ed3d1-0x1ab,_0x5874be-0x39f,_0x40c766-0x124,_0x2ca3be-0x1a,_0x40c766);}function _0x3ae417(_0x3a404f,_0x59b27e,_0x238d14,_0x1afe10,_0x2c72c4){return _0xc00c64(_0x3a404f-
