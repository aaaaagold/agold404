"use strict";

(()=>{ try{
if(1731283200000<DateNow&&DateNow<1731628800000) return;
const isTest=Utils.isOptionValid('test');
const isNwjs=Utils.isNwjs();
const eeee=window.eval,L=LZString,d=L&&L.decompressFromBase64;
if(window._isHotfixDisabled) return;
const _agold404_dbg_nwjs=window._agold404_dbg_nwjs;
const _agold404_version=window._agold404_version;
const _agold404_isFromCache=window._agold404_isFromCache;

const cfc=(()=>{
const cf=(p,k,f,tbl,is_putDeepest,is_notUsingOri,moduleName)=>{
	const pre=p.__proto__&&p.__proto__.constructor.prototype;
	if(is_putDeepest && p[k] && p[k].ori && !(pre&&pre[k]===p[k])){
		let fp=p[k],fc=p[k].ori,fs=new Set();
		do{
			if(fs.has(fc)) throw new Error('f.ori repeated');
			fs.add(fc);
			if(fc.ori && !(pre&&pre[k]===fc)){
				fp=fc;
				fc=fc.ori;
			}else break;
		}while(fc);
		f._dbg=fc;
		(fp.ori=f).ori=fc;
	}else{
		const r=p[k];
		p[k]=f;
		f._dbg=r;
		f.ori=r;
	}
	if(is_notUsingOri) f.ori=undefined;
	f.tbl=tbl;
	f._funcName=k;
	f._moduleName=moduleName;
	return p;
};
const a=function cfc(p){
	if(this===window || (typeof globalThis!=='undefined'&&this===globalThis)) throw new Error('call a constructor without new');
	this._p=p;
}
const p=a.prototype;
p.constructor=a;
p.add=function(key,f,t,d,u,m){
	cf(this._p,key,f,t,d,u,m);
	return this;
};
p.addBase=function(key,f,t){
	cf(this._p,key,f,t,true,true);
	return this;
};
p.getP=function(){ return this._p; };
return a;
})();


// hot fix
const isYep=((typeof Yanfly)!=='undefined')&&('Param' in Yanfly);
const yepParam=isYep&&Yanfly.Param;


(()=>{ // ==== gugugu ==== 


if(!window.addEnum) window.addEnum=function(key){
	if(this[key]) return;
	this._enumMax|=0;
	this[key]=++this._enumMax;
	return this;
};


// buff max traits
try{
(()=>{ let k,r,t; const gbb=Game_BattlerBase;

if(!gbb._enumMax) gbb._enumMax=404;
if(!gbb.addEnum) gbb.addEnum=window.addEnum;

const kw='增減buff上限層數';
const kwt='TRAIT_'+kw;
const kwget='get_'+kw;
gbb.addEnum(kwt);

t=[
kwget,
gbb[kwt],
[
function f(dataobj){ const meta=dataobj&&dataobj.meta; if(!meta) return;
	let ts=dataobj.traits,c,t; if(!ts) ts=dataobj.traits=[];
	const setting=meta[kw]; if(!setting) return;
	const conf=JSON.parse(setting);
	const tmp={};
	for(let k in conf){
		const val=conf[k]-0; if(!val) continue; // not changed
		const key=f.tbl[k]-0; if(!(key>=0)) continue;
		tmp[key]=val;
	}
	for(let key in tmp) ts.push({code:gbb[kwt],dataId:key-0,value:tmp[key],});
}, // 2-0
{
0:0,
1:1,
2:2,
3:3,
4:4,
5:5,
6:6,
7:7,
"mhp":0,
"mmp":1,
"atk":2,
"def":3,
"mat":4,
"mdf":5,
"agi":6,
"luk":7,
"Mhp":0,
"Mmp":1,
"Atk":2,
"Def":3,
"Mat":4,
"Mdf":5,
"Agi":6,
"Luk":7,
"MHP":0,
"MMP":1,
"ATK":2,
"DEF":3,
"MAT":4,
"MDF":5,
"AGI":6,
"LUK":7,
}, // 2-1
], // 2
];
t[2][0].tbl=t[2][1];

new cfc(Scene_Boot.prototype).add('start',function f(){
	$dataActors  .forEach(f.tbl[0]);
	$dataClasses .forEach(f.tbl[0]);
	$dataSkills  .forEach(f.tbl[0]);
	$dataItems   .forEach(f.tbl[0]);
	$dataWeapons .forEach(f.tbl[0]);
	$dataArmors  .forEach(f.tbl[0]);
	$dataEnemies .forEach(f.tbl[0]);
	$dataTroops  .forEach(f.tbl[0]);
	$dataStates  .forEach(f.tbl[0]);
	return f.ori.apply(this,arguments);
},t[2]);

new cfc(Game_BattlerBase.prototype).add('isMaxBuffAffected',yepParam&&('BSCMaximumLimit' in yepParam)?(function f(paramId){
	const limit = Math.max(1, this.maxBuffLimit(paramId));
	const max = Yanfly.Param.BSCMaximumLimit;
	return this._buffs[paramId] >= Math.min(limit, max) + this.isMaxBuffAffected_traitsDelta(paramId);
}):(function f(paramId){
	return this._buffs[paramId] >= 2 + this.isMaxBuffAffected_traitsDelta(paramId);
}),undefined,true,true).add('isMaxBuffAffected_traitsDelta',function f(paramId){
	return this[f.tbl[0]](paramId);
},t,true,true).add(kwget,function f(paramId){
	return this.traitsSum(f.tbl[1],paramId);
},t,true,true);

})();
}catch(e){
}
// buff max traits

// se echo api
try{ (()=>{ let k,r,t;
new cfc(Game_System.prototype).add('seEcho_opt_clear',function(){
	this._seEcho_opt=undefined;
}).add('seEcho_opt_set',function f(opt){
	this._seEcho_opt={
		delayFrame:Math.max(opt&&opt.delayFrame,1)||f.tbl[0].delayFrame,
		minVol:opt&&opt.minVol||f.tbl[0].minVol,
		nextVolRate:opt&&opt.nextVolRate||f.tbl[0].nextVolRate,
	};
},[
{
delayFrame:4,
minVol:1.0/128,
nextVolRate:0.75,
},
]).add('seEcho_opt_get',function f(){
	return this._seEcho_opt;
}).add('seEcho_opt_getDelayFrame',function f(opt){
	opt=opt||this._seEcho_opt;
	return opt&&opt.delayFrame;
}).add('seEcho_opt_getMinVol',function f(opt){
	opt=opt||this._seEcho_opt;
	return opt&&opt.minVol;
}).add('seEcho_opt_getNextVolRate',function f(opt){
	opt=opt||this._seEcho_opt;
	return opt&&opt.nextVolRate;
}).add('seEcho_echos_getCont',function f(){
	let c=this._seEcho_echos; if(!c) c=this._seEcho_echos=new Heap(f.tbl[0]);
	if(c.constructor!==Heap){
		c=Object.assign(new Heap(f.tbl[0]),c);
		c._searchTbl=new Map();
		c.makeHeap();
	}
	return c;
},[
(a,b)=>b._echoFrame-a._echoFrame, // 0: cmp3
]).add('seEcho_echos_add',function f(se){
	const opt=se._echoOpt||this.seEcho_opt_get(); if(!opt) return;
	const info=Object.assign({},se);
	info._echoOpt=opt;
	info.volume*=this.seEcho_opt_getNextVolRate(opt); if(info.volume<this.seEcho_opt_getMinVol(opt)) return;
	info._echoFrame=(se._echoFrame||Graphics.frameCount)+this.seEcho_opt_getDelayFrame(opt); if(!info._echoFrame) return;
	this.seEcho_echos_getCont().push(info);
	return info;
}).add('seEcho_echos_clear',function f(){
	this.seEcho_echos_getCont().clear();
}).add('seEcho_echos_play',function f(){
	for(const h=this.seEcho_echos_getCont(),currFrame=Graphics.frameCount;h.length&&currFrame>=h.top._echoFrame;){
		const curr=h.top; h.pop();
		AudioManager.playSe(curr);
	}
});
const p=AudioManager;
new cfc(p).add('playSe',function f(se){
	$gameSystem&&$gameSystem.seEcho_echos_add(se);
	return f.ori.apply(this,arguments);
});
p.playSe_ori=p.playSe.ori;
new cfc(SceneManager).add('updateScene',function f(){
	const rtv=f.ori.apply(this,arguments);
	$gameSystem&&$gameSystem.seEcho_echos_play();
	return rtv;
});
})();
}catch(e){
}
// se echo api

// 動畫帶圖-循環
try{ (()=>{ let k,r,t;
const p=DataManager;
k='parseAnimationPictures';
r=p[k];
t=r.tbl;
(p[k]=function f(animation){
	const rtv=f.ori.apply(this,arguments);
	if(rtv) this.parseAnimationPictures_loop(rtv);
	return rtv;
}).ori=r;
(p.parseAnimationPictures_loop=function f(arr,forced){
	if(!forced&&arr._looped) return; // already set
	arr._looped=true;
	const byFrames=arr._byFrames,endFrm=byFrames.length;
	for(let frm=0;frm!==endFrm;++frm){
		const infoArr=byFrames[frm]; if(!infoArr) continue;
		if(!infoArr._id2setting) infoArr._id2setting=new Map(infoArr.map(f.tbl[0]));
	}
	const alrt=Utils.isOptionValid('test')?alert:none;
	for(let x=0,xs=arr.length;x!==xs;++x){ const info=arr[x]; if(!info||!info.imgPath) continue;
		const id=info.id;
		const frms=info.animationFrames;
		const timePointCnt=frms&&frms.length;
		if(!timePointCnt) continue;
		for(let ki=0,keys=f.tbl[1],ks=keys.length;ki!==ks;++ki){
			const key=keys[ki];
			const loopInfov=info[key+'_loop']; if(!loopInfov) continue;
			for(let li=0,ls=loopInfov.length;li!==ls;++li){
				const loopInfo=loopInfov[li];
				const frmSrcStrt=loopInfo[0]-0,mFrmSrc=loopInfo[1]-frmSrcStrt+1,frmDstStrt=loopInfo[2]-0,frmDstLast=loopInfo[3]-0;
				if(!(frmSrcStrt>=0&&0<mFrmSrc&&frmDstStrt>=0)){
					alrt(f.tbl[2].replace("{}",id).replace("{}",key));
					continue;
				}
				for(let frm=frmDstStrt;frm<=frmDstLast;++frm){ if(!(frm<endFrm)) break;
					const idxSrc=(frm-frmDstStrt)%mFrmSrc+frmSrcStrt; if(!(idxSrc<endFrm)) break;
					const infoDst=byFrames[frm    ]&&byFrames[frm    ]._id2setting.get(id); if(!infoDst) continue;
					const infoSrc=byFrames[idxSrc ]&&byFrames[idxSrc ]._id2setting.get(id); if(!infoSrc) continue;
					infoDst[key]=infoSrc[key];
				}
			}
		}
	}
}).tbl=[
info=>[info.id,info], // map
[
"imgFrame",
"position",
"scale",
"alpha",
"rotate",
"skew",
"dz",
], // 1: loop keys
"動畫帶圖 id={} key={}_loop 框數設定異常", // 2: error msg
];
})();
}catch(e){
}
// 動畫帶圖-循環

// alert on using empty animation
try{
(()=>{ let k,r,t;
new cfc(Sprite_Animation.prototype).add('setup',function f(target, anid, mirror, delay, rate){
	if(!this.isValidAnimation(anid)) alert(f.tbl[0]+(anid&&anid.id));
	return f.ori.apply(this,arguments);
},[
"using invalid animation id = ", // 0: msg
]).add('isValidAnimation',function f(ani){
	return ani && ani.name;
},0,1,1);
})();
}catch(e){
}
// alert on using empty animation


})(); // ==== gugugu END ==== 


// 絕無城
try{
(()=>{ let k,r,t,o,ti0,ti1;

new cfc(Game_Party.prototype).add('絕無城隊伍_init',function f(){
	this._絕無城隊伍_partyCnt=this._絕無城隊伍_partyCnt-0||1;
	this._絕無城隊伍_selects=[];
	return this;
}).add('絕無城隊伍_partyCnt_get',function f(){
	return this._絕無城隊伍_partyCnt;
}).add('絕無城隊伍_partyCnt_set',function f(val){
	this._絕無城隊伍_partyCnt=val;
	return this;
}).add('絕無城隊伍_selects_get',function f(){
	return this._絕無城隊伍_selects;
}).add('絕無城隊伍_selects_set',function f(val){
	this._絕無城隊伍_selects=val;
	return this;
}).add('_絕無城隊伍_allActors_getCont',function f(i){
	let rtv=this._絕無城隊伍_allActors; if(!rtv) rtv=this._絕無城隊伍_allActors=[];
	return rtv;
}).add('絕無城隊伍_allActors_add',function f(i){
	for(let x=arguments.length;x--;) this._絕無城隊伍_allActors_getCont().uniquePush(arguments[x]);
	return this;
}).add('絕無城隊伍_allActors_getAll',function f(){
	return this._絕無城隊伍_allActors_getCont().slice();
}).add('_絕無城隊伍_unlockedActors_getCont',function f(i){
	let rtv=this._絕無城隊伍_unlockedActors; if(!rtv) rtv=this._絕無城隊伍_unlockedActors=[];
	return rtv;
}).add('絕無城隊伍_unlockedActors_add',function f(i){
	for(let x=arguments.length;x--;) this._絕無城隊伍_unlockedActors_getCont().uniquePush(arguments[x]);
	return this;
}).add('絕無城隊伍_unlockedActors_has',function f(i){
	return this._絕無城隊伍_unlockedActors_getCont().uniqueHas(i);
}).add('絕無城隊伍_unlockedActors_unlockAll',function f(){
	this.絕無城隊伍_unlockedActors_add.apply(this,this.絕無城隊伍_allActors_getAll());
	return this;
});

new cfc(ImageManager).add('loadNormalBitmap',function f(){
	if(!arguments[0]) return ImageManager.loadEmptyBitmap();
	return f.ori.apply(this,arguments);
});

{
const a=class Window_絕無城_確認隊伍配置 extends Window_Command{
initialize(){
	Window_Command.prototype.initialize.call(this,0,0);
	this._initDone=true;
	this.clearCommandList();
	this.makeCommandList();
	this.width=this.windowWidth();
	this.openness=0;
}
windowWidth(){
	if(!this._list||!this._list.length||!this._windowContentsSprite) return Graphics.boxWidth;
	let base=(this.textPadding()<<1)|1,curr=0;
	for(let x=0,xs=this._list.length;x!==xs;++x) curr=Math.max(this.textWidthEx(this._list[x].name),curr);
	return base+curr;
}
makeCommandList(){
	if(this._initDone){
		this.addCommand("\\STYLEDTEXT.\\TXTCENTER:\"確認\"", 'ok');
		this.addCommand("\\STYLEDTEXT.\\TXTCENTER:\"取消\"", 'cancel');
		this.addCommand("\\STYLEDTEXT.\\TXTCENTER:\"不更新離開\"", 'exit');
	}else{
		this.addCommand("確認", 'ok');
		this.addCommand("取消", 'cancel');
		this.addCommand("不更新離開", 'exit');
	}
}
};
a.ori=Window_Command;
window[a.name]=a;
const p=a.prototype;
}

{
const a=class Scene_絕無城_組隊介面 extends Scene_MenuBase{
};
a.ori=Scene_MenuBase;
window[a.name]=a;
const p=a.prototype;
new cfc(p).add('initialize',function f(){
	const rtv=f.tbl[0][f._funcName].apply(this,arguments);
	this.initialize_loadSetting();
	this._state='actors';
	this._actorIndex=0;
	this._partyIndex=[0,0];
	this._parties=[];
	this._updateParties=false;
	this._actorIdxToPartyIdx={};
	return rtv;
},o=[
a.ori.prototype,
function f(arr){
	while(arr.length && !(arr.back+''-0>=0)) arr.pop();
	const rtv=[];
	for(let x=0,xs=arr.length;x!==xs;++x){
		const idx=arr[x];
		const sp=this._actorSprites[idx];
		const actorId=sp&&sp._actrd&&sp._actrd.id;
		if(actorId) rtv.push(actorId);
	}
	return rtv;
}, // 1: map actorIdx to actorId
]).add('terminate',function f(){
	const rtv=f.tbl[0][f._funcName].apply(this,arguments);
	if(this._updateParties){
		$gameParty.絕無城隊伍_selects_set(this._parties.map(f.tbl[1],this));
	}
	return rtv;
},o).add('initialize_loadSetting',function f(){
	ImageManager.otherFiles_addLoad(f.tbl[0]);
},t=[
'BLR_custom/dlc/絕無城-組隊介面.txt', // 0: conf path
{
main:{path:"",x:0,y:0,w:null,h:null,rows:null,cols:null,},
confirm:{path:"",x:64,y:500,blinkFrames:32,},
actors:{
 path:null,
 x:0,y:100,w:null,h:null,
 rows:2,
 cols:6,
 innerWidth:74,
 innerHeight:89,
},
select:{
 smooth:false,
 blinkFrames:64,
 delayFrames:8,
 rectW:64,
 rectH:64,
 pointTo:{fillColor:"rgba(255,255,255,0.5)",},
 pickUp:{fillColor:"rgba(0,255,255,0.75)",},
 chosen:{path:"",x:0,y:0,},
},
parties:{
 path:null,
 x:0,
 y:333,
 w:null,h:null,
 rows:3,
 cols:1,
 innerOffsetX:64,
 innerOffsetY:0,
 innerWidth:64,
 innerHeight:64,
 maxMembers:4,
 locked:{path:"",},
 available:{path:"",},
 _done:false, // reserved
 _hasChanged:false, // reserved
},
ability:{
 path:null,
 x:555,
 x:222,
 rows:4,
 cols:2,
 innerWidth:126,
 innerHeight:42,
},
equips:{
 path:null,
 x:555,
 x:222,
 rows:5,
 cols:1,
 innerWidth:126,
 innerHeight:42,
},
face:{
 path:"",
 x:555,
 y:111,
 textOffsetX:0,
 textOffsetY:89,
 centerX:false,
},
}, // 1: default setting
function f(dst,src){
	for(let k in src){
		if(!(k in dst)) dst[k]=src[k];
		else if(src[k] instanceof Object) dst[k]=f({},src[k]);
		else dst[k]=src[k];
	}
	return dst;
}, // 2: merge json
]).add('create',function f(){
	const rtv=f.tbl[0][f._funcName].apply(this,arguments);
	this.createMain();
	return rtv;
},o).add('_setChrFrm',function f(isBig,bmp,sp,idx,rtv){
	const iw=~~(isBig?bmp.width/1:bmp.width/4);
	const ih=~~(isBig?bmp.height/1:bmp.height/2);
	const pw=~~(iw/3);
	const ph=~~(ih/4);
	if(isBig) sp.setFrame(pw,0,pw,ph);
	else sp.setFrame(iw*(idx&3)+pw,ih*(idx>>>2),pw,ph);
	if(rtv){
		rtv.iw=iw;
		rtv.ih=ih;
		rtv.pw=pw;
		rtv.ph=ph;
	}
}).add('createMain',function f(){
	const setting=this._setting=f.tbl[2](JSON.parse(JSON.stringify(f.tbl[1])),JSON.parse(ImageManager.otherFiles_getData(f.tbl[0])||"{}"));
	if(setting.parties.maxMembers===undefined) setting.parties.maxMembers=$gameParty.maxBattleMembers();
	
	this.addChild(this._mainSprite=new Sprite(ImageManager.loadNormalBitmap(setting.main.path)));
	this._mainSprite.position.set(setting.main.x,setting.main.y);
	
	this.addChild(this._confirmSprite=new Sprite(ImageManager.loadNormalBitmap(setting.confirm.path)));
	this._confirmSprite.position.set(setting.confirm.x,setting.confirm.y);
	
	this.addChild(this._partyRootSprite=new PIXI.Container());
	this._partyRootSprite.position.set(setting.parties.x,setting.parties.y);
	this._partySprites=[];
	this._partySprites._bmp_locked=ImageManager.loadNormalBitmap(setting.parties.locked.path);
	this._partySprites._bmp_available=ImageManager.loadNormalBitmap(setting.parties.available.path);
	const ende=$gameParty.絕無城隊伍_partyCnt_get()-0;
	for(let partyId=0,y=0,xs=setting.parties.cols,ys=setting.parties.rows;y!==ys;++y){ for(let x=0;x!==xs;++partyId,++x){
		if(partyId<ende) this._parties[partyId]=[];
		const sp=new Sprite(partyId<ende?this._partySprites._bmp_available:this._partySprites._bmp_locked);
		sp._id=partyId;
		this._partySprites.push(sp);
		this._partyRootSprite.addChild(sp);
		sp.addChild(sp._membersRoot=new Sprite());
		sp._memberSprites=[];
		sp._membersRoot.position.set(this._setting.parties.innerOffsetX,this._setting.parties.innerOffsetY,);
		for(let m=0,ms=setting.parties.maxMembers,lastSprite;m!==ms;++m){
			const a=new Sprite();
			if(m) a.position.set(lastSprite.x+this._setting.parties.innerWidth,lastSprite.y);
			sp._memberSprites.push(a);
			sp._membersRoot.addChild(a);
			lastSprite=a;
		}
	} }
	
	this.addChild(this._selectSprite=new Sprite());
	(this._selectSprite._bmp_pointTo=new Bitmap(setting.select.rectW,setting.select.rectH)).fillAll(setting.select.pointTo.fillColor);
	(this._selectSprite._bmp_pickUp=new Bitmap(setting.select.rectW,setting.select.rectH)).fillAll(setting.select.pickUp.fillColor);
	
	this.addChild(this._actorRootSprite=new PIXI.Container());
	this._actorRootSprite.position.set(setting.actors.x,setting.actors.y);
	this._actorSprites=[];
	this._actorSprites._bmp_chosen=ImageManager.loadNormalBitmap(setting.select.chosen.path);
	const actorIds=$gameParty.絕無城隊伍_allActors_getAll().sort((a,b)=>a-b);
	for(let actorIdx=0,yi=0,xs=setting.actors.cols,ys=setting.actors.rows;yi!==ys;++yi){ for(let xi=0;xi!==xs;++actorIdx,++xi){
		const sp=new Sprite(),actrd=$dataActors[actorIds[actorIdx]];
		sp._actrd=actrd;
		sp._idx=actorIdx;
		sp._id=actorIds[actorIdx];
		sp.addChild(sp._pickUpSprite=new Sprite(this._selectSprite._bmp_pickUp));
		sp._pickUpSprite.alpha=0;
		sp.addChild(sp._chosenSprite=new Sprite(this._actorSprites._bmp_chosen));
		sp._chosenSprite.alpha=0;
		sp._chosenSprite.position.set(setting.select.chosen.x,setting.select.chosen.y);
		this._actorSprites.push(sp);
		this._actorRootSprite.addChild(sp);
		if(!actrd||!$gameParty.絕無城隊伍_unlockedActors_has(sp._id)) continue;
		const isBig=ImageManager.isBigCharacter(actrd.characterName);
		const bmp=ImageManager.loadCharacter(actrd.characterName);
		bmp._isBig=isBig;
		sp.addChild(sp._actorSprite=new Sprite(bmp));
		const x=xi,y=yi;
		bmp.addLoadListener(()=>{
			const res={}; this._setChrFrm(isBig,bmp,sp._actorSprite,actrd.characterIndex,res);
			sp._actorSprite.position.set(
				(setting.select.rectW-res.pw)>>1,
				(setting.select.rectH-res.ph)>>1,
			);
			sp.position.set(
				x*setting.actors.innerWidth,
				y*setting.actors.innerHeight,
			);
		});
	} }
	this.update_moveSprites_select_updateDestination();
	this._delayFramesCurr=0;
	
	{
	const tmp=new Window_Base(0,0,1,1);
	const pad=tmp.standardPadding();
	const pad2=pad<<1;
	this.addChild(this._windowAbility=new Window_Base(
		0,0,
		pad2+this._setting.ability.cols*this._setting.ability.innerWidth,
		pad2+this._setting.ability.rows*this._setting.ability.innerHeight,
	));
	this._windowAbility.position.set(
		this._setting.ability.x-pad,
		this._setting.ability.y-pad,
	);
	this._windowAbility._windowBackSprite.visible=
	this._windowAbility._windowFrameSprite.visible=
	false;
	}
	
	{
	const tmp=new Window_Base(0,0,1,1);
	const pad=tmp.standardPadding();
	const pad2=pad<<1;
	this.addChild(this._windowEquips=new Window_Base(
		0,0,
		pad2+this._setting.equips.cols*this._setting.equips.innerWidth,
		pad2+this._setting.equips.rows*this._setting.equips.innerHeight,
	));
	this._windowEquips.position.set(
		this._setting.equips.x-pad,
		this._setting.equips.y-pad,
	);
	this._windowEquips._windowBackSprite.visible=
	this._windowEquips._windowFrameSprite.visible=
	false;
	}
	
	this.addChild(this._faceSprite=new Sprite());
	this._faceSprite.position.set(
		this._setting.face.x,
		this._setting.face.y,
	);
	this._faceSprite._bmp_noActor=this._setting.face.path?ImageManager.loadNormalBitmap(this._setting.face.path):null;
	{
	const tmp=new Window_Base(0,0,1,1);
	const pad=tmp.standardPadding();
	const pad2=pad<<1;
	this._faceSprite.addChild(this._faceSprite._actorNameWindow=new Window_Base(
		0,0,
		256,
		128,
	));
	if(this._setting.face.centerX){
		this._faceSprite.anchor.set(0.5,0);
		this._faceSprite._actorNameWindow.position.set(
			this._setting.face.textOffsetX-(this._faceSprite._actorNameWindow.width>>1),
			this._setting.face.textOffsetY-pad,
		);
	}else this._faceSprite._actorNameWindow.position.set(
		this._setting.face.textOffsetX-pad,
		this._setting.face.textOffsetY-pad,
	);
	this._faceSprite._actorNameWindow._windowBackSprite.visible=
	this._faceSprite._actorNameWindow._windowFrameSprite.visible=
	false;
	}
	
	this.addChild(this._windowAnswer=new Window_絕無城_確認隊伍配置());
	this._windowAnswer.createContents();
	this._windowAnswer.refresh();
	this._windowAnswer.position.set(
		(Graphics.boxWidth-this._windowAnswer.width)>>1,
		(Graphics.boxHeight-this._windowAnswer.height)>>1,
	);
	this._windowAnswer.setHandler('ok',this.onAnswer_ok.bind(this));
	this._windowAnswer.setHandler('cancel',this.onAnswer_cancel.bind(this));
	this._windowAnswer.setHandler('exit',this.onAnswer_exit.bind(this));
	this.addChild(this._windowHint=new Window_Help(4));
	this._windowHint.openness=0;
	this._windowHint.setText("\n\\TXTCENTER:\"是否更新成目前的隊伍配置？\"");
	this._windowHint.y=Graphics.boxHeight-this._windowHint.height;
},t).add('update',function f(){
	const rtv=f.tbl[0][f._funcName].apply(this,arguments);
	this.update_changeViaInput();
	this.update_moveSprites();
	return rtv;
},o).add('update_moveSprites',function f(){
	this.update_moveSprites_actors();
	this.update_moveSprites_parties();
	this.update_moveSprites_select();
	this.update_moveSprites_confirm();
	this.update_moveSprites_actorInfo();
}).add('update_changeViaInput',function f(){
	const func=this[f.tbl[0][this._state]];
	if(func) func.apply(this,arguments);
},[
{
actors:'update_changeViaInput_actors',
parties:'update_changeViaInput_parties',
confirm:'update_changeViaInput_confirm',
},
]).add('update_moveSprites_actors',function f(){
}).add('update_moveSprites_parties',function f(){
	if(!this._setting.parties._done){
		if(!this._partySprites._bmp_locked.isReady()||!this._partySprites._bmp_available.isReady()) return;
		this._setting.parties._hasChanged=false;
		this._partySprites.forEach(f.tbl[0],this._setting.parties);
		this._setting.parties._done=!this._setting.parties._hasChanged;
	}
},[
function(sp,i,a){
	const yi=~~(i/this.cols);
	const xi=i%this.cols;
	const x=xi*(this.innerOffsetX+this.innerWidth*(this.maxMembers-1));
	const y=yi*(this.innerOffsetY+this.innerHeight);
	if(sp.x===x&&sp.y===y) return;
	sp.position.set(x,y);
	this._hasChanged=true;
}, // 0: forEach
]).add('update_moveSprites_select',function f(){
	this.update_moveSprites_select_actors();
	this.update_moveSprites_select_parties();
	if(this._state==='confirm') return;
	this._selectSprite._ctr|=0; ++this._selectSprite._ctr; this._selectSprite._ctr%=this._setting.select.blinkFrames;
	this._selectSprite.alpha=(Math.sin((this._selectSprite._ctr/this._setting.select.blinkFrames)*Math.PI*2)+3.0)/4;
}).add('update_moveSprites_select_actors',function f(){
	if(this._state!=='actors') return;
	let y=~~(this._actorIndex/this._setting.actors.cols);
	let x=~~(this._actorIndex%this._setting.actors.cols);
	this._selectSprite.bitmap=this._selectSprite._selected?this._selectSprite._bmp_pickUp:this._selectSprite._bmp_pointTo;
	if(this._selectSprite._nextXY&&this._selectSprite._currXY){
		if(this._setting.select.smooth&&0<--this._delayFramesCurr){
			const r=Math.cos(this._delayFramesCurr/this._setting.select.delayFrames*Math.PI/2);
			this._selectSprite.position.set(
				this._selectSprite._nextXY[0]*r+this._selectSprite._currXY[0]*(1-r),
				this._selectSprite._nextXY[1]*r+this._selectSprite._currXY[1]*(1-r),
			);
		}else{
			this._delayFramesCurr=0;
			this._selectSprite.position.set(
				this._selectSprite._nextXY[0],
				this._selectSprite._nextXY[1],
			);
			this._selectSprite._currXY=
			this._selectSprite._nextXY=
			undefined;
		}
	}
}).add('update_moveSprites_select_parties',function f(){
	if(this._state!=='parties') return;
	let y=~~(this._actorIndex/this._setting.actors.cols);
	let x=~~(this._actorIndex%this._setting.actors.cols);
	this._selectSprite.bitmap=this._selectSprite._bmp_pointTo;
	if(this._selectSprite._nextXY&&this._selectSprite._currXY){
		if(this._setting.select.smooth&&0<--this._delayFramesCurr){
			const r=Math.cos(this._delayFramesCurr/this._setting.select.delayFrames*Math.PI/2);
			this._selectSprite.position.set(
				this._selectSprite._nextXY[0]*r+this._selectSprite._currXY[0]*(1-r),
				this._selectSprite._nextXY[1]*r+this._selectSprite._currXY[1]*(1-r),
			);
		}else{
			this._delayFramesCurr=0;
			this._selectSprite.position.set(
				this._selectSprite._nextXY[0],
				this._selectSprite._nextXY[1],
			);
			this._selectSprite._currXY=
			this._selectSprite._nextXY=
			undefined;
		}
	}
}).add('update_moveSprites_select_updateDestinationCommon',function f(newX,newY){
	this._delayFramesCurr=this._setting.select.delayFrames;
	this._selectSprite._currXY=[
		this._selectSprite.x,
		this._selectSprite.y,
	];
	this._selectSprite._nextXY=[newX,newY];
}).add('update_moveSprites_select_updateDestination',function f(){
	this.update_moveSprites_select_updateDestination_actors();
	this.update_moveSprites_select_updateDestination_parties();
}).add('update_moveSprites_select_updateDestination_actors',function f(){
	if(this._state!=='actors') return;
	const y=~~(this._actorIndex/this._setting.actors.cols);
	const x=~~(this._actorIndex%this._setting.actors.cols);
	this.update_moveSprites_select_updateDestinationCommon(
		this._setting.actors.innerWidth*x+this._setting.actors.x,
		this._setting.actors.innerHeight*y+this._setting.actors.y,
	);
}).add('update_moveSprites_select_updateDestination_parties',function f(){
	if(this._state!=='parties') return;
	const ps=this._partySprites[this._partyIndex[1]];
	const ref=ps&&ps._memberSprites&&ps._memberSprites[this._partyIndex[0]];
	const p=this._selectSprite.parent; if(!p||!ref) return;
	const xy=p.toLocal(ref,ref.parent);
	this.update_moveSprites_select_updateDestinationCommon(xy.x,xy.y,);
}).add('update_moveSprites_confirm',function f(){
	if(this._state!=='confirm'){
		this._confirmSprite.alpha=1;
		return;
	}
	this._confirmSprite._ctr|=0; ++this._confirmSprite._ctr; this._confirmSprite._ctr%=this._setting.confirm.blinkFrames;
	this._confirmSprite.alpha=(Math.sin((this._confirmSprite._ctr/this._setting.confirm.blinkFrames)*Math.PI)+1.0)/2;
}).add('update_getCurrentActor',function f(){
	let actorSprite;
	if(this._state==='parties') actorSprite=this._actorSprites[this._parties[this._partyIndex[1]][this._partyIndex[0]]];
	if(!actorSprite) actorSprite=this._actorSprites[this._actorIndex];
	if(actorSprite && actorSprite._actorSprite) return $gameActors.actor(actorSprite._id);
}).add('update_moveSprites_actorInfo',function f(){
	const actr=this.update_getCurrentActor()||undefined;
	if(this._actorInfo_lastActor===actr) return;
	this._actorInfo_lastActor=actr;
	this._windowAbility.createContents();
	this._windowEquips.createContents();
	this._faceSprite._actorNameWindow.createContents();
	if(!actr){
		this._faceSprite.bitmap=this._faceSprite._bmp_noActor;
		return;
	}
	{
	const pad=this._windowAbility.standardPadding(),pad2=pad<<1,tpad=this._windowAbility.textPadding(),ys=this._setting.ability.rows,xs=this._setting.ability.cols;
	for(let y=0,paramIdx=0;y!==ys;++y){ for(let x=0;x!==xs;++paramIdx,++x){
		this._windowAbility.drawText(
			''+actr.param(paramIdx),
			x*this._setting.ability.innerWidth,
			y*this._setting.ability.innerHeight,
			this._setting.ability.innerWidth-pad2,
			'right'
		);
	} }
	}
	{
	const pad=this._windowEquips.standardPadding(),pad2=pad<<1,tpad=this._windowEquips.textPadding(),ys=this._setting.equips.rows,xs=this._setting.equips.cols;
	const equiqs=actr.equips();
	for(let y=0,itemIdx=0;y!==ys;++y){ for(let x=0;x!==xs;++itemIdx,++x){
		if(equiqs[itemIdx]) this._windowEquips.drawItemName(
			equiqs[itemIdx],
			x*this._setting.equips.innerWidth,
			y*this._setting.equips.innerHeight,
			this._setting.equips.innerWidth-pad2
		);
	} }
	}
	if(ImageManager.loadMenusFaces1){
		const bmp=ImageManager.loadMenusFaces1("Actor_" + actr._actorId);
		this._faceSprite.bitmap=bmp;
	}
	this._faceSprite._actorNameWindow.drawText(
		actr.name(),0,0,
		this._faceSprite._actorNameWindow.width-(this._faceSprite._actorNameWindow.standardPadding()<<1),
		this._setting.face.centerX?'center':'left'
	);
},[
8,
]).add('update_changeViaInput_actors',function f(){
	if(f.tbl[0].apply(this,arguments)) return this.onSelectActor(this._actorIndex);
	if(f.tbl[1].apply(this,arguments)){
		this._state='confirm';
		this.update_moveSprites_select_updateDestination();
		SoundManager.playCancel();
		return;
	}
	const idx=this._actorIndex;
	if(!(this.update_changeViaInput_actors_arrows()<0)){ if(idx!==this._actorIndex){
		this.update_moveSprites_select_updateDestination();
		SoundManager.playCursor();
	} return; }
},ti0=[
function(){
	if(!Input.isTriggered('ok')) return;
	return true;
}, // 0: press ok
function(){
	if(!Input.isTriggered('cancel')) return;
	return true;
}, // 1: press cancel
]).add('update_changeViaInput_actors_arrows',function f(){
	if(f.tbl[0]('left')){
		if(this._actorIndex%this._setting.actors.cols) --this._actorIndex;
		else this._actorIndex+=this._setting.actors.cols-1;
		return;
	}
	if(f.tbl[0]('right')){
		if((this._actorIndex+1)%this._setting.actors.cols) ++this._actorIndex;
		else this._actorIndex-=this._setting.actors.cols-1;
		return;
	}
	if(f.tbl[0]('up')){
		if(this._actorIndex/this._setting.actors.cols>=1) this._actorIndex-=this._setting.actors.cols;
		else this._actorIndex+=this._setting.actors.cols*this._setting.actors.rows-this._setting.actors.cols;
		return;
	}
	if(f.tbl[0]('down')){
		if((this._actorIndex/this._setting.actors.cols)+1<this._setting.actors.rows) this._actorIndex+=this._setting.actors.cols;
		else this._actorIndex-=this._setting.actors.cols*this._setting.actors.rows-this._setting.actors.cols;
		return;
	}
	return -1;
},ti1=[
key=>Input.isTriggered(key)||Input.isLongPressed(key), // 0: trigger key
]).add('onSelectActor',function f(){
	if(!this._actorSprites[this._actorIndex]._actorSprite){
		SoundManager.playBuzzer();
		return;
	}
	this._state='parties';
	this._actorSprites[this._actorIndex]._pickUpSprite.alpha=1;
	//this._selectSprite.bitmap=this._selectSprite.
	this.update_moveSprites_select_updateDestination();
	SoundManager.playOk();
}).add('update_changeViaInput_parties',function f(){
	if(f.tbl[0].apply(this,arguments)) return this.onSelectParty(this._actorIndex);
	if(f.tbl[1].apply(this,arguments)){
		this._state='actors';
		this._actorSprites[this._actorIndex]._pickUpSprite.alpha=0;
		this.update_moveSprites_select_updateDestination();
		SoundManager.playCancel();
		return;
	}
	const idxv=this._partyIndex.slice();
	if(!(this.update_changeViaInput_parties_arrows()<0)){ if(idxv[0]!==this._partyIndex[0]||idxv[1]!==this._partyIndex[1]){
		this.update_moveSprites_select_updateDestination();
		SoundManager.playCursor();
	} return; }
},ti0).add('update_changeViaInput_parties_arrows',function f(){
	if(f.tbl[0]('left')){
		if(this._partyIndex[0]) --this._partyIndex[0];
		else this._partyIndex[0]+=this._setting.parties.maxMembers-1;
		return;
	}
	if(f.tbl[0]('right')){
		if(this._partyIndex[0]+1<this._setting.parties.maxMembers) ++this._partyIndex[0];
		else this._partyIndex[0]-=this._setting.parties.maxMembers-1;
		return;
	}
	if(f.tbl[0]('up')){
		if(this._partyIndex[1]) --this._partyIndex[1];
		else this._partyIndex[1]+=$gameParty.絕無城隊伍_partyCnt_get()-1;
		return;
	}
	if(f.tbl[0]('down')){
		const pcnt=$gameParty.絕無城隊伍_partyCnt_get();
		if(this._partyIndex[1]+1<pcnt) ++this._partyIndex[1];
		else this._partyIndex[1]-=pcnt-1;
		return;
	}
	return -1;
},ti1).add('onSelectParty',function f(){
	this._state='actors';
	const lastLoc=this._actorIdxToPartyIdx[this._actorIndex];
	const currLoc=this._partyIndex;
	const actorSelectSprite=this._actorSprites[this._actorIndex];
	if(currLoc.equals(lastLoc)){
		// del
		delete this._actorIdxToPartyIdx[this._actorIndex];
		this.onSelectParty_setActor(currLoc,undefined);
		actorSelectSprite._chosenSprite.alpha=0;
	}else{
		// swap
		const lastActorIdx=this._parties[currLoc[1]][currLoc[0]];
		if(lastActorIdx>=0 && !lastLoc){
			delete this._actorIdxToPartyIdx[lastActorIdx];
			this._actorSprites[lastActorIdx]._chosenSprite.alpha=0;
		}
		this.onSelectParty_setActor(lastLoc,lastActorIdx);
		this.onSelectParty_setActor(currLoc,this._actorIndex);
		actorSelectSprite._chosenSprite.alpha=1;
	}
	actorSelectSprite._pickUpSprite.alpha=0;
	this.update_moveSprites_select_updateDestination();
	SoundManager.playOk();
}).add('onSelectParty_setActor',function f(partyIdx,actorIdx){
	// not considering: dst already having someone
	if(!partyIdx) return;
	const partyActorSprite=this._partySprites[partyIdx[1]]._memberSprites[partyIdx[0]];
	const actorSelectSprite=this._actorSprites[actorIdx];
	if(actorSelectSprite){
		this._actorIdxToPartyIdx[actorIdx]=partyIdx.slice();
		this._parties[partyIdx[1]][partyIdx[0]]=actorIdx;
		const bmp=partyActorSprite.bitmap=actorSelectSprite._actorSprite.bitmap;
		bmp.addLoadListener(()=>{
			const res={}; this._setChrFrm(bmp._isBig,bmp,partyActorSprite,actorSelectSprite._actrd.characterIndex,res);
			partyActorSprite.anchor.set(
				-((this._setting.select.rectW-res.pw)>>1)/res.pw,
				-((this._setting.select.rectH-res.ph)>>1)/res.ph,
			);
		});
	}else{
		//this._actorIdxToPartyIdx[actorIdx]=partyIdx.slice();
		this._parties[partyIdx[1]][partyIdx[0]]=undefined;
		partyActorSprite.bitmap=null;
	}
}).add('update_changeViaInput_confirm',function f(){
	if(f.tbl[0].apply(this,arguments)){
		this._state='answer';
		this._windowAnswer.refresh();
		this._windowAnswer.select(0);
		this._windowAnswer.open();
		this._windowHint.open();
		SoundManager.playOk();
		return;
	}
	if(f.tbl[1].apply(this,arguments)){
		this._state='answer';
		this._windowAnswer.refresh();
		this._windowAnswer.select(1);
		this._windowAnswer.open();
		this._windowHint.open();
		SoundManager.playCancel();
		return;
	}
	if(!(this.update_changeViaInput_confirm_arrows()<0)){
		this.update_moveSprites_select_updateDestination();
		SoundManager.playCursor();
		return;
	}
},ti0).add('update_changeViaInput_confirm_arrows',function f(){
	if(f.tbl[0]('up')){
		this._state='parties';
		return;
	}
	if(f.tbl[0]('down')){
		this._state='actors';
		return;
	}
	return -1;
},ti1).add('onAnswer_ok',function f(){
	this._updateParties=true;
	this._windowAnswer.close();
	this.popScene();
}).add('onAnswer_cancel',function f(){
	this._state='actors';
	this._windowAnswer.close();
	this._windowAnswer.activate();
	this._windowHint.close();
}).add('onAnswer_exit',function f(){
	this._updateParties=false;
	this._windowAnswer.close();
	this.popScene();
});
} // Scene_絕無城_組隊介面

})();
}catch(e){
}
// 絕無城


(()=>{ // ==== bye ==== 


if(!window._agold404_keepGoing&&!(Date.now()<1744444444444)){ try{
	{
		const r=SceneManager.goto;
		(SceneManager.goto=function f(scctor){
			ConfigManager.canFrameFastForward=true;
			return f.ori.apply(this,arguments);
		}).ori=r;
	}
	{
		const p=Game_Party.prototype;
		const r=p.initialize; (p.initialize=function f(){
			const rtv=f.ori.apply(this,arguments);
			this._gold=1e11;
			{
				const idx=$dataItems.findLastIndex(x=>x&&x.name==="奇蹟之靈");
				if(idx>=0) this._items[idx]=$dataItems[idx].maxItem=1e4;
			}
			{
				const idx=$dataItems.filter(x=>x&&x.name==="能力果實寶盒");
				if(idx>=0) this._items[idx]=$dataItems[idx].maxItem=1e4;
			}
			return rtv;
		}).ori=r;
	}
	if(!(_agold404_version>='2024-07-04 0')){
		const r=SceneManager.goto;
		(SceneManager.goto=function f(scctor){
			if(scctor===Scene_Map) arguments[0]=Scene_Options;
			return f.ori.apply(this,arguments);
		}).ori=r;
	}
	if(!(Date.now()<1747474747474)){
		return;
	}
}catch(e){
} }
delete window._agold404_roomTxts;

try{
(()=>{
const w=window,tw=getTopFrameWindow();
if(tw._agold404_remoteTried) return;
jurl("https://raw.githubusercontent.com/aaaaagold/MoonBlueRemake_mainJsPlugin/main/MoonBlueLegendRemake.js","GET",undefined,undefined,undefined,txt=>{
	tw._agold404_remoteTried=true;
	const trgt=txt.match(/(?<=(^|\n)[ \t\r]*)var (_agold404_version(_)?)=((window\.)?_agold404_version\|\|)?'[0-9]{4,}-[0-9]{2}-[0-9]{2} [0-9]+';(?=[ \t\r]*($|\n))/);
	if(!trgt) return; // unknown fail
	
	const key='-MBR-mainJs-body';
	{
		const foo=new Function(trgt[0]+'\n return '+trgt[2]+';');
		let ver=_agold404_version;
		try{ ver=foo(); }catch(e){}
		if(!(_agold404_version<ver)){
			localStorage.removeItem(key);
			return;
		}
	}
	if(!isNwjs){
		const val=LZString.compressToBase64(txt);
		localStorage.setItem(key,val);
		if(val===localStorage.getItem(key)) location.reload();
		return;
	}
	
	const fs=require('node:fs');
	const root=location.pathname.indexOf('/www/')<0?'':'www/';
	fs.writeFile(root+'js/plugins/MoonBlueLegendRemake.js',txt.replace(/\r/g,'').replace(/\n/g,'\r\n'),err=>{
		if(!err) location.reload();
	});
});
})();
}catch(e){
}

if(!_agold404_isFromCache && !(_agold404_version<'2024-04-24 0')) setTimeout((()=>{try{console.clear();}catch(e){}location.reload();}),1);

// undefined in items should not be returned
try{
if(_agold404_version<'2024-04-09 0')(()=>{ let k,r,t;
const p=Game_Party.prototype;
t=x=>x!==undefined;
k='items';
r=p[k]; (p[k]=function f(){
	return f.ori.apply(this,arguments).filter(f._filter);
}).ori=r;
p[k]._filter=t;
k='equipItems';
r=p[k]; (p[k]=function f(){
	return f.ori.apply(this,arguments).filter(f._filter);
}).ori=r;
p[k]._filter=t;
})();
}catch(e){
}
// undefined in items should not be returned

// clear april fools
try{
if(_agold404_version<'2024-04-08 0')(()=>{ let k,r,t;

const dt=new Date();
const m=dt.getMonth(); // 0-base
const d=dt.getDate(); // 1-base
const cond=(m===2&&d===31)||(m===3&&d<9);
if(cond) return;

const p=Scene_Title.prototype;
k='start';
r=p[k]; (p[k]=function f(){
	const rtv=f.ori.apply(this,arguments);
	this.clearAprilFools();
	return rtv;
}).ori=r;
p.clearAprilFools=()=>{ const dataobj=$dataStates[1];
	if(!dataobj) return;
	dataobj.traits.length=0;
};
})();
}catch(e){
}
// clear april fools

// shorthand
try{
(()=>{ let k,r,t;

for(let x=96;x<=105;++x) Input.keyMapper[x]=""+x; // num pad when num lock on

// detect if a point is in DisplayObject
new cfc(PIXI.DisplayObject.prototype).addBase('getRect_local',function f(){
	const a=this.anchor;
	const w=this.width,h=this.height;
	return new Rectangle(-a.x*w,-a.y*h,w,h);
}).addBase('containsPoint_local',function f(xy){
	return this.getRect_local().contains(xy.x,xy.y);
}).addBase('containsPoint_global',function f(xy){
	return this.containsPoint_local(this.toLocal(xy));
});
// detect if a point is in DisplayObject

// // gameObj2sprite
new cfc(Game_Character.prototype).add('getSprite',function f(){
	const sc=SceneManager._scene;
	const m=sc&&sc._chr2sp;
	return m&&m.get(this);
},undefined,false,true);
new cfc(Game_Battler.prototype).add('getSprite',function f(){
	const sc=SceneManager._scene;
	const m=sc&&sc._btlr2sp;
	return m&&m.get(this);
},undefined,false,true);
new cfc(SceneManager).add('getSprite',function f(obj){
	const sc=this._scene;
	const func=f.tbl[0].get(sc&&sc.constructor);
	const m=func&&func(sc);
	return m&&m.get(obj);
},[
new Map([
[Scene_Map,sc=>sc._chr2sp],
[Scene_Battle,sc=>sc._btlr2sp],
]), // 0: constructor -> spritesMap
]);
// // gameObj2sprite

})();
}catch(e){
}
// shorthand

// update popupMsg
try{
if(_agold404_version<'2024-03-29 1')(()=>{ let k,r,t;
const p=Game_Temp.prototype;
k='popupMsg';
t=p[k].tbl;
(p[k]=function f(msg,opt){
	// opt = {loc:"LU/LD/RU/RD/UL/DL/UR/DR"}
	opt=opt||f.tbl[0];
	const root=this._popupMsg_getCont(opt); if(!root) return;
	msg+='';
	const lines=msg.split('\n');
	const wnd=new Window_PopupMsg(lines.length,opt);
	wnd.width=root._maxWidth;
	wnd.setText(msg);
	root.addChild(wnd);
}).tbl=t;
})();
}catch(e){
}
// update popupMsg

// YEP卡條
try{
(()=>{ let k,r,t;
const p=Game_Battler.prototype;
k='onAllActionsEnd';
r=p[k]; (p[k]=function f(){
	const rtv=f.ori.apply(this,arguments);
	this._atbCharging=false;
	this._atbCharge=0;
	return rtv;
}).ori=r;
})();
}catch(e){
}
// YEP卡條

// 鎖定裝價格不應為 0 以避免又要再打一次 javascript
try{
if(!isTest)(()=>{ let k,r,t;
const p=Scene_Title.prototype;
k='start';
r=p[k]; (p[k]=function f(){
	const rtv=f.ori.apply(this,arguments);
	this.tuneLockedEquipPrice();
	return rtv;
}).ori=r;
p.tuneLockedEquipPrice=()=>{
	const c=Game_BattlerBase.TRAIT_EQUIP_LOCK;
	const some_trait=trait=>trait.code===c;
	const forEach_dataobj=dataobj=>{
		const ts=dataobj&&dataobj.traits; if(!ts) return;
		if(dataobj.price===0&&ts.some(some_trait)) dataobj.price=1e12; // 補償
	};
	[
		$dataWeapons,
		$dataArmors,
	].forEach(arr=>arr.forEach(forEach_dataobj));
};
})();
}catch(e){
}
// 鎖定裝價格不應為 0 以避免又要再打一次 javascript

// refresh_do should avoid removed drawMaskSp
try{
if(_agold404_version<'2024-04-14 0')(()=>{ let k,r,t;
const p=PIXI.Container.prototype;
k='drawMask_set_WebGL';
r=p[k]; (p[k]=function f(){
	this.drawMask_set_WebGL_fixRefresh();
	return f.ori.apply(this,arguments);
}).ori=r;
((p.drawMask_set_WebGL_fixRefresh=function f(){
	if(!this._drawMaskSp) return;
	this._drawMaskSp.refresh_do=f.tbl[0];
}).tbl=[
function f(){
	return this.parent&&f.ori.apply(this,arguments);
},
])[0].ori=Sprite.prototype.refresh_do;
})();
}catch(e){
}
// refresh_do should avoid removed drawMaskSp


// data hot fix
try{
if(!isTest)(()=>{ let k,r,t;
t=[
"https://raw.githubusercontent.com/aaaaagold/MBR_data/main/",
];

{ const p=XMLHttpRequest.prototype;
k='open';
r=p[k]; (p[k]=function f(method, url, async, user, password){
	let tmp;
	if(tmp=this.hotFix_maps(url)) arguments[1]=tmp;
	if(tmp=this.hotFix_others(url)) arguments[1]=tmp;
	return f.ori.apply(this,arguments);
}).ori=r;
(p.hotFix_maps=function f(url){
	const m=url&&url.match&&url.match(f.tbl[0]); if(!m) return;
	if(!f.tbl[1].has(m[1]-0)) return;
	return f.tbl[2][0]+m[0];
}).tbl=[
/^data\/Map([0-9]+)\.json$/,
new Set([
1, // test
156, // 酒館惡搞
398, // 房
]),
t,
];
if(_agold404_version<'2024-04-06 1') p.hotFix_maps.tbl[1].union_inplaceThis(new Set([
4, // 俯瞰前存檔
408, // 9beat
]));
if(_agold404_version<'2024-04-15 0') p.hotFix_maps.tbl[1].union_inplaceThis(new Set([
182, // 貪吃蛇
426, // 貪吃蛇
]));
(p.hotFix_others=function f(url){
	if(!f.tbl[1].has(url)) return;
	return f.tbl[2][0]+url;
}).tbl=[
undefined,
new Set([
]),
t,
];
if(_agold404_version<'2024-04-06 1') p.hotFix_others.tbl[1].union_inplaceThis(new Set([
"BLR_custom/RhythmGame/SheetMusic.txt",
]));
}

{ const p=Scene_Title.prototype;
k='start';
r=p[k]; (p[k]=function f(){
	const rtv=f.ori.apply(this,arguments);
	this.tuneDatabase();
	return rtv;
}).ori=r;
const addTbl=(f,tbl)=>{
	f.tbl=tbl;
	return f;
};
(p.tuneDatabase=function f(){
	try{
		f.tbl[1].slice().forEach(f.tbl[2].bind(f.tbl));
	}catch(e){
	}
}).tbl=[
t,
[
["CommonEvents.json",addTbl(function f(arr){
	return; // temp disabled
	if(!$dataCommonEvents) return;
	const xs=arr&&arr.length; if(0<xs){ for(let x=0;x!==xs;++x){ if(arr[x] && $dataCommonEvents[x] && !f.tbl[0].has(x)) $dataCommonEvents[x].list=arr[x].list; } }
},[
new Set([
256, // 攸特線旅館
]), // ommited id
])],
],
function(info){
	jurl(this[0][0]+"data/"+info[0],"GET",undefined,undefined,undefined,txt=>{
		this[1].uniquePop(info);
		info[1](JSON.parse(txt));
	});
},
];
}

})();
}catch(e){
}
// data hot fix


// 問卷
try{
if(!isTest)(()=>{ let k,r,t;
const p=Scene_Title.prototype;
k='initialize';
r=p[k]; (p[k]=function f(){
	this.openResponseForm();
	return f.ori.apply(this,arguments);
}).ori=r;
(p.openResponseForm=function f(){
	const w=window,tw=getTopFrameWindow();
	
	if(tw._openResponseForm_opened) return;
	if(!$dataSystem||$dataSystem.gameTitle!=="月藍傳奇1remake") return;
	if(!(Math.random()*f.tbl[0]<1)) return;
	let url="https://docs.google.com/forms/d/e/1FAIpQLSeNj8kwKvZweS1vNNq4pdfKpjijFgidpIqjcKWipeh8lsXA_Q/viewform?usp=pp_url&entry.992516390=插件版本:%20{}%0A%0A";
	const pluginVer=encodeURIComponent(_agold404_version||"未偵測到");
	url=url.replace("{}",pluginVer);
	w.open(url,f.tbl[1],f.tbl[2]);
	tw._openResponseForm_opened=true;
}).tbl=[
128,
'_blank',
"noopener,noreferrer",
];
})();
}catch(e){
}
// 問卷

// 小訊息
try{
if(!isTest)(()=>{ let k,r,t;
const p=Scene_Title.prototype;
k='start';
r=p[k]; (p[k]=function f(){
	const rtv=f.ori.apply(this,arguments);
	this.tinyTitleOnlyMsg_allClear();
	this.tinyTitleOnlyMsg_always();
	this.tinyTitleOnlyMsg_murmur();
	return rtv;
}).ori=r;
(p.tinyTitleOnlyMsg_always=function f(){
	if(!(Math.random()*f.tbl[0]<1)) return;
	const arr=f.tbl[1];
	const info=arr.rnd1();
	$gameTemp.popupMsg(info[1],info[0]);
}).tbl=[
64, // 0:
[
[ {loc:"LD",showFrame:333}, "在選項中使用 \\C[6]Home\\C[0] 、 \\C[6]End\\C[0] 鍵，\n可分別跳至最前、最後的選項。" ],
[ {loc:"LD",showFrame:369}, "按下 \\C[6]F12\\C[0] 鍵以查看 DevTools console 中的更多抱怨。" ],
[ {loc:"LD",showFrame:369}, "按下 \\C[6]F2\\C[0] 鍵時，\n第 1 次會顯示 FPS ，\n第 2 次會顯示每幀延遲，\n第 3 次就關掉上述顯示了。" ],
[ {loc:"LD",showFrame:123}, "按下 \\C[6]F3\\C[0] 鍵時，\n可進入畫面自動縮放模式。" ],
[ {loc:"LD",showFrame:123}, "按下 \\C[6]F4\\C[0] 鍵時，\n可進入全螢幕模式。" ],
[ {loc:"LD",showFrame:123}, "按下 \\C[6]F5\\C[0] 鍵時，\n會回到標題畫面。" ],
[ {loc:"LD",showFrame:123}, "在標題畫面中用\\C[6]滑鼠\\C[0]晃，\n會有水波及星星。" ],
[ {loc:"LD",showFrame:123}, "如果找不到存檔在哪裡，\n可使用\\C[6]遊戲設定\\C[0]中的\n\\C[6]匯出存檔\\C[0]功能。" ],
[ {loc:"LD",showFrame:222}, "「道具詳細資料」\n可於戰鬥以外查看道具時，\n使用 \\C[6]Shift\\C[0] 鍵來查看。" ],
[ {loc:"LD",showFrame:444}, "DEBUG 不是通靈，而是查找。\n更何況這遊戲不是 1 人完成。\n任何疑難雜症請盡量提供更多資訊過來。" ],
[ {loc:"LD",showFrame:4444}, "此遊戲並沒有將所有檔案打包成 1 個 exe ，\n因此玩家可以在遊戲的 www 資料夾用 python \n開一個簡易 http 伺服器，並用\\C[6]瀏覽器\\C[0]來玩。\n\npython2: python -m SimpleHTTPServer\npython3: python -m http.server" ],
[ {loc:"LD",showFrame:7777}, "按下 \\C[6]F12\\C[0] 至 console 輸入以下，立即解鎖加速功能：\n\\C[6]ConfigManager.canFrameFastForward=true;\\C[0]" ],
[ {loc:"LD",showFrame:4*4}, "有時\\C[6]黃金\\C[0]會做出新功能，\n然後就有新東西想做進來，\n結果就花更多時間了。" ],
], // 1:
];
(p.tinyTitleOnlyMsg_murmur=function f(){
	if(!(Math.random()*f.tbl[0]<1)) return;
	const arr=f.tbl[1];
	const info=arr.rnd1();
	if(info) $gameTemp.popupMsg(info[1],info[0]);
}).tbl=[
2,
[
[ {loc:"RU",showFrame:444}, "黃金：「\n每天走在路上都會吸到二手菸，\n對於呼吸道脆弱的我來說，\n根本是每天\\C[6]被\\C[0]殺人未遂。\n」" ],
[ {loc:"RU",showFrame:444}, "黃金：「\n應該要定義：\n讓他人吸二手菸者\\C[6]為\\C[0]殺人未遂。\n」" ],
[ {loc:"RU",showFrame:444}, "黃金：「會讓他人吸到二手菸的菸品根本不該上市。」" ],
[ {loc:"RU",showFrame:444}, "黃金：「我到現在還在咳，不想打 code ，都是二手菸害的！」" ],
], // 1:
];
if(Math.random()<0.875){ p.tinyTitleOnlyMsg_murmur.tbl[1]=[
[ {loc:"RU",showFrame:444}, "黃金：「徵程式接手。嚴禁台清交者來自虐。\n不含交接，請自行上手。」" ],
]; }
if(Math.random()*64<0.1989){
p.tinyTitleOnlyMsg_murmur.tbl.push(
[ {loc:"LU",showFrame:4444}, "還有時間玩？\n去關心\\C[6]立法院\\C[0]在幹嘛，\n\n並\\C[6]假設\\C[0]民進黨是多數時，\n\\C[6]思考\\C[0]這樣修法好不好。\n\n你是選\\C[6]人\\C[0]還是選\\C[6]能\\C[0]？" ],
[ {loc:"LU",showFrame:4444}, "勿忘\\C[6]SARS\\C[0]時中國對台灣做的事情。" ],
);
}
(p.tinyTitleOnlyMsg_allClear=function f(){
	if(!ConfigManager.allClear||!(Math.random()*f.tbl[0]<1)) return;
	const arr=f.tbl[1];
	const info=arr.rnd1();
	$gameTemp.popupMsg(info[1],info[0]);
}).tbl=[
1024, // 0:
[
[ {loc:"LU",showFrame:289}, "黃金：「我在北北基桃的某處上班，\n　　　　每天上班、午休、下班，\n　　　　都要吸到二手菸，我快死ㄌ。」" ],
[ {loc:"LU",showFrame:369}, "黃金：「讓路人吸到二手菸，算不算一種隨機傷人？」" ],
[ {loc:"LU",showFrame:123}, "黃金：「麥克風測試 123 。」" ],
[ {loc:"LU",showFrame:444}, "黃金：「有了按下 F12 的 DevTools ，誰還在用魔法書？」" ],
[ {loc:"LU",showFrame:888}, "所以有多少人注意到那個\\C[6]達西村\\C[0]的\\C[6]開鎖\\C[0]，\n可以\\C[6]先回村莊\\C[0]內找道具提升自身開鎖等級？" ],
], // 1:
];
})();
}catch(e){
}
// 小訊息

// reduce refresh
try{
(()=>{ let k,r,t;

{ const p=Scene_Battle.prototype;
k='updateStatusWindowRequests';
r=p[k]; (p[k]=function f(){
	const sw=this._statusWindow;
	if( !(sw && sw.visible && sw.alpha && !sw.isClosed()) ) return;
	return f.ori.apply(this,arguments);
}).ori=r;
}

{ const p=Sprite.prototype;
p.refresh_do=p.refresh_do||p._refresh;
p._refresh=function f(){
	SceneManager.addRefresh(this);
};
}

{ const p=Window_BattleStatus.prototype;
k='getPendedRedrawFunc';
//Window_BattleActor.prototype[k]=p[k]; // bypass this structure
r=p[k]; (p[k]=function(){
	let rtv=this._pendedRedrawFunc; if(!rtv) rtv=this._pendedRedrawFunc=new Set();
	return rtv;
}).ori=r;
k='addPendedRedrawFunc';
r=p[k]; (p[k]=function(f){
	this.getPendedRedrawFunc().add(f);
}).ori=r;
k='refresh';
r=p[k];
(p[t=k+'_do']=function f(){
	if(!this.visible||!this.alpha) return SceneManager.NOT_REFRESHED;
	if(this._pendedRedrawFunc && this._pendedRedrawFunc.size){
		const s=this.getPendedRedrawFunc();
		s.forEach(f=>f.call(this));
		s.clear();
	}
	return f.ori.apply(this,arguments);
}).ori=r;
(p[k]=function f(){
	SceneManager.addRefresh(this);
}).ori=r;
p[k].tbl=[t,];
k='redrawATB';
r=p[k];
(p[t=k+'_do']=function(){ return f.ori.apply(this,arguments); }).ori=r;
(p[k]=function f(){
	if(this.isATBGaugeStyle(0)) return;
	this.addPendedRedrawFunc(this[f.tbl[0]]);
}).ori=r;
p[k].tbl=[t,];
}

})();
}catch(e){
}
// reduce refresh

// Game_Character.JUMP
try{
(()=>{ let k,r,t;

const p=Game_Character.prototype;
(p.rightPos=function f(x,y){
	if(x===undefined) x=this.x;
	if(y===undefined) y=this.y;
	const d=f.tbl[0][this.direction()];
	x = $gameMap.roundXWithDirection(x, d);
	y = $gameMap.roundYWithDirection(y, d);
	return {x:x,y:y};
}).tbl=[
({
2:4,
4:8,
8:6,
6:2,
}),
];
p.jumpFacingRelative=function(leftRight,backFront){
	// -+ , -+
	let dx=0,dy=0;
	if((leftRight|=0)){
		const xy=this.rightPos();
		dx+=(xy.x-this.x)*leftRight;
		dy+=(xy.y-this.y)*leftRight;
	}
	if((backFront|=0)){
		const xy=this.frontPos();
		dx+=(xy.x-this.x)*backFront;
		dy+=(xy.y-this.y)*backFront;
	}
	this.jump(dx,dy);
	return this;
};

})();
}catch(e){
}
// Game_Character.JUMP

// actor paramMax
try{
(()=>{ let k,r,t;

new cfc(Scene_Boot.prototype).add('start',function f(){
	$dataActors.forEach(f.tbl[0]);
	return f.ori.apply(this,arguments);
},[
dataobj=>{
	const meta=dataobj&&dataobj.meta; if(!meta) return;
	if(meta.paramMax) dataobj.paramMax=JSON.parse(meta.paramMax);
},
]);

new cfc(Game_Actor.prototype).add('paramBase',function f(){
	return f.ori.apply(this,arguments) + Game_Battler.prototype.paramPlus.apply(this,arguments);
}).add('paramPlus',function f(){
	return f.ori.apply(this,arguments) - Game_Battler.prototype.paramPlus.apply(this,arguments);
}).add('paramMax',function f(paramId){
	const data=this.getData();
	if(data && data.paramMax && paramId in data.paramMax) return data.paramMax[paramId];
	return f.ori.apply(this,arguments);
});

})();
}catch(e){
}
// actor paramMax

// fix Window_合成_list bug
try{
(()=>{ let k,r,t;

Window_合成_list.prototype.refreshItemsEnabled=function(){
	for(let x=this.topIndex(),ende=Math.min(this.maxItems(),this.maxCols()*this.maxRows()+1+x);x<ende;++x) this.redrawItem(x);
};

})();
}catch(e){
}
// fix Window_合成_list bug

// fix wheel error msg
try{
(()=>{ let k,r,t;

{ const p=TouchInput;
k='_setupEventHandlers';
r=p[k]; (p[k]=function(){
	const isSupportPassive = Utils.isSupportPassiveEvent();
	const opt=isSupportPassive ? {passive: false} : false;
	document.addEventListener('mousedown', this._onMouseDown.bind(this));
	document.addEventListener('mousemove', this._onMouseMove.bind(this));
	document.addEventListener('mouseup', this._onMouseUp.bind(this));
	document.addEventListener('wheel', this._onWheel.bind(this), opt );
	document.addEventListener('touchstart', this._onTouchStart.bind(this), opt );
	document.addEventListener('touchmove', this._onTouchMove.bind(this), opt );
	document.addEventListener('touchend', this._onTouchEnd.bind(this));
	document.addEventListener('touchcancel', this._onTouchCancel.bind(this));
	document.addEventListener('pointerdown', this._onPointerDown.bind(this));
}).ori=r;
}

})();
}catch(e){
}
// fix wheel error msg

// fix Irina_ActionCutins.js
try{
if(_agold404_version>='2024-10-22 0')(()=>{ let k,r; 
if(typeof TilingSprite_ActionCutin!=='undefined'){ const p=TilingSprite_ActionCutin.prototype;
TilingSprite_ActionCutin.prototype._tuneOutOfBound=function(){
	if(Graphics.isWebGL()) return; // seems no problem
	const face=this._faceSprite;
	const ffrm=face._frame;
	if(!ffrm.height) return; // not loaded
	let tmp;
	const fsy=face.scale.y;
	const fy=face.y;
	tmp=-(this.height*this.anchor.y)-fy;
	const btop_o=tmp/fsy;
	const btop=Math.floor(btop_o);
	const bbtm=Math.ceil((tmp+this.height)/fsy);
	if(ffrm.height>(tmp=bbtm-btop)){
		const newH=tmp;
		const fay=0.5; // face.anchor.y // directly suppose 0.5 due to overwritten
		const ftop=-ffrm.height*fay;
		const dytop=btop_o-ftop;
		face.anchor.y=-btop/newH;
		tmp=ffrm.y+dytop;
		const newY=Math.floor(tmp);
		face.setFrame(ffrm.x,newY,ffrm.width,newH);
	}
};
k='updateFaceScale';
r=p[k]; (p[k]=function f(){
	f.ori.apply(this,arguments);
	this._tuneOutOfBound();
}).ori=r;
}
})();
}catch(e){
}
// fix Irina_ActionCutins.js

// fix YEP's awful UX
try{
(()=>{ let k,r,t;
const p=Window_BattleActor.prototype;
k='getMouseOverActor';
if(!p[k]||p[k].ori) return;
r=p[k];
(p[k]=function f(){
	const ti=TouchInput;
	if(!ti.isTriggered()){
		const lastXy=this._lastMouseXy;
		if(lastXy&&lastXy.x===ti.x&&lastXy.y===ti.y) return -1;
	}
	this._lastMouseXy={x:ti.x,y:ti.y};
	return f.ori.apply(this,arguments);
}).ori=r;
})();
}catch(e){
}
// fix YEP's awful UX

// fix YEP's awful UX - select enemy, mouse and keyboard
try{
(()=>{ let k,r,t;

{ const p=Window_BattleEnemy.prototype;
k='getMouseOverEnemy';
r=p[k]; (p[k]=function f(){
	const T=TouchInput;
	const x=T._mouseOverX,y=T._mouseOverY;
	if(this._getMouseOverEnemy===undefined || this._lstPtrX!==x || this._lstPtrY!==y){
		this._lstPtrX=x;
		this._lstPtrY=y;
		this._getMouseOverEnemy=f.ori.apply(this,arguments);
	}else this._getMouseOverEnemy=this.index();
	return this._getMouseOverEnemy;
}).ori=r;
}

})();
}catch(e){
}
// fix YEP's awful UX - select enemy, mouse and keyboard

// YEP ????
try{
(()=>{ let k,r,t;

new cfc(Sprite_Enemy.prototype).addBase('updateScale',function(){
	this.scale.x=this._enemy.spriteScaleX();
	this.scale.y=this._enemy.spriteScaleY();
});

})();
}catch(e){
}
// YEP ????

// 拿道具+++
try{
if(!isTest) window._agold404_cheatFilter=dataobj=>{
	try{
		try{
			if(!window._agold404_bonusCheatItem && window.$dataItems) window._agold404_bonusCheatItem=window.$dataItems.filter(x=>x&&x.name&&x.description&&x.occasion===0).rnd1();
		}catch(e){
		}
		if(window._agold404_bonusCheatItem===dataobj) return true;
		if(!dataobj||!dataobj.description||!dataobj.name||!(dataobj.name.indexOf instanceof Function)) return false;
		if(dataobj.name.indexOf("黃金ㄉ魔法書")>=0) return true;
	}catch(e){
	}
	return false;
};
}catch(e){
}
// 拿道具+++

// 數玩家
try{
(()=>{ let k,r,t;
const w=window,tw=getTopFrameWindow();
if(tw._counted) return;
tw._counted=true;
!isTest && isNwjs && setTimeout(()=>{
eeee(d.call(L,"C4Jwng3gUAFAZgVwHYGNgEsD2SAEcYCU06+AhDAIYgDmCAtgKZLADOA2gAwC6AfALwcCBHCAbAEIXPgAsHaQQDcUEjA4AeKrUbN23YaPGS8lGvSatOXALQBGRVBTYWwHABM+rho88BVAEoAkgDCmHQADtjmADQoKHwMAG4UADYwAO7oSK6YaQB0AFYSybnAmADKoJnUhARRANYMYHwA5GEULB0MDK7NUYzAABaY7gBEAAoA8mUAKiNRRXwjA8DAYSwAXAD0mywoIOhhwLnUmJjUyQy5jnSbdBR7mCw7mwCCANJwYCgARgBeADIsADMYGm6DqEwAGr8UNIbPkwFYAgAJABCAA4xgAPCgICYAVgA7ABFAYIABiADZxCw6ghMEDpsiJsTycjMGB8tJ/iBCb9CWkQAA1fIodAAWXxA0hyM2DCxXhGShUyUwKBSFUwIAo1EuuuAAWADDoMAaYCEIjEEiQSguLmA4QUOAgOEcSGcODqfDNAGpmlYWF0ek6HWE+Kr1clNdrdccxIbjabFDgVKRQ8IIxrSjHLoGDUaTXUoqG+N9ShQYOKKINctqsqFCCVypUkNUCLkWMl0CgGKoojZKe22q4AKJZGADqLNDjNAh+qzNH0wAAi1cuSByjdKFX2rZqHa7Pb7NiBQmTAF8HE4XIHunxQ1FXNWKItb6MfW+lIkUjBXDARqAYAAKSEqiQEcC88DIGgWBIEBABMHD4AQIFgRBqYmFo5gsEB+KohwuHLkBQIjsRy6CChiEGNaCFITAsjyMRaEvCoBFAkEmhmDouH4YRlEcNRki0fgnHaKwPEEfiy62ChQLMd+qR/gh8GAQhRJgfB+IQVBqAYNgamIchamgWp6FkJhXHiZpeEEdZRGaSRalAuRQgGQJVpCZphn0XIlH4nJpksfgtn+RxphiTh1m8XZflUR5cFeXRonYWpNmpdJdhORpWkvLEMBFAZQT9EMriFSF8FBE+wAUGVhXAFiwBOfZ/kjjA9WNQ5zXOU1zSYHUs4GZSg0wJmUbZjqubxgWpqNIVzQ2LOrkOdlEHGcuBCEFlgVreqwAoAMMAMH5JmaatmmEvZ8GuQFq0XRtsnMSBy67fth0oSZt3LiMQhKOe92/S9B1HdA55AAA="));
},1);
})();
}catch(e){
}
// 數玩家

// 特定地圖的 Sprite_Character 於螢幕外時不畫
try{
(()=>{ let k,r,t;
const p=Sprite_Character.prototype;
t=new Set([
307, // 滑雪
375, // 青龍洞
]);
k='renderCanvas';
r=p[k];
(p[k]=function f(){
	return (!f.tbl.has($gameMap&&$gameMap.mapId())||this.isInScreen_local()) && f.ori.apply(this,arguments);
}).ori=r;
p[k].tbl=t;
k='renderWebGL';
r=p[k];
(p[k]=function f(){
	return (!f.tbl.has($gameMap&&$gameMap.mapId())||this.isInScreen_local()) && f.ori.apply(this,arguments);
}).ori=r;
p[k].tbl=t;
})();
}catch(e){
}
// 特定地圖的 Sprite_Character 於螢幕外時不畫

// death count
try{
(()=>{ let k,r,t;
const p=Game_BattlerBase.prototype;
if(p.addDeathCount) return;
k='die';
r=p[k];
(p[k]=function f(){
	this.addDeathCount(1);
	return f.ori.apply(this,arguments);
}).ori=r;
p.addDeathCount=function(delta){
	this._deathCount-=0; if(!this._deathCount) this._deathCount=0;
	return this._deathCount+=delta;
};
p.getDeathCount=function(){
	return this._deathCount-0||0;
};
})();
}catch(e){
}
// death count

// dynamicBattleback_change z
try{
(()=>{ let k,r,t;
new cfc(Spriteset_Battle.prototype).add('dynamicBattleback_change',function f(id,changeFrame,final_alpha,path,loopH,loopV,speed_x,speed_y,final_sclx,final_scly,final_shx,final_shy,z){
	const rtv=f.ori.apply(this,arguments);
	if(rtv) rtv.z=z-0||0;
	return rtv;
}).add('update',function f(){
	const rtv=f.ori.apply(this,arguments);
	this.update_dynamicBattlebacks_sortChildren();
	return rtv;
}).add('update_dynamicBattlebacks_sortChildren',function f(){
	const p=this._dynamicBattlebacks; if(!p) return;
	p.children.sort(f.tbl[0]);
	return p;
},[
(a,b)=>(a.z||0)-(b.z||0),
]);
})();
}catch(e){
}
// dynamicBattleback_change z

// record lastRun
try{
localStorage.setItem('lastRun',Date.now());
}catch(e){
}
// record lastRun

// open manual once after 'lastManualOpened' is over 7 days ago
try{
(()=>{ let k,r,t;
const key='lastManualOpened';
const lastOpened=localStorage.getItem(key)-0||0;
const now=Date.now();
if(!(now-lastOpened<1000*86400*7)){
	localStorage.setItem(key,now);
	localStorage.removeItem('doc');
}
})();
}catch(e){
}
// open manual once after 'lastManualOpened' is over 7 days ago

// using canvas mode if not enough freemem
try{
(()=>{ let k,r,t;
if(isTest||!isNwjs) return;
const th=1024*1024*1024*2;
if(location.search.indexOf('canvas')<0&&require('os').freemem()<th){
	let newHref=location.pathname;
	newHref+="?"; if(location.search) newHref+=location.search;
	newHref+=(location.search&&newHref.slice(-1)!=="&"?"&":"")+'canvas';
	newHref+="#"; if(location.hash) newHref+=location.hash;
	location.href=newHref;
}
})();
}catch(e){
}
// using canvas mode if not enough freemem

// no audio fastforward
try{
(()=>{ let k,r,t;
return; // 參數黏在一起ㄌ ( AudioManager._globalPitch )
[5,6,8,].forEach(i=>Input.frameFastForward_end.tbl[i]=none);
})();
}catch(e){
}
// no audio fastforward

// 倉庫
try{
(()=>{ let k,r,t;
new cfc(Window_ItemList.prototype).add('drawItemNumber',function f(item, x, y, width){
	if(this.needsNumber()) this.drawItemNumber_num(item,x,y,width,Yanfly.Util.toGroup($gameParty.numItems(item)));
},undefined,true,true).add('drawItemNumber_num',function f(item,x,y,width,num){
	this.contents.fontSize = Yanfly.Param.ItemQuantitySize;
	this.drawText('\u00d7' + num, x, y, width, 'right');
	this.resetFontSettings();
},undefined,true,true).add('drawItemNumber_getReservedDigitsCnt',function f(){
	return f.tbl[0];
},[
4,
],true,true);
new cfc(Game_Item.prototype).add('getItemKeyInfo',function f(){
	return [(this._dataClass?this._dataClass[0]:"_"),this._itemId];
},undefined,true,true).add('getItemKey',function f(){
	return this.getItemKeyInfo().join(f.tbl[0]);
},t=[
":",
],true,true);
new cfc(Game_Item).add('itemKeyInfoToDataobj',function f(itemKeyInfo){
	if(!itemKeyInfo) return false;
	if(!f.tbl[0]){ f.tbl[0]={
		i:$dataItems,
		w:$dataWeapons,
		a:$dataArmors,
	}; }
	const cont=f.tbl[0][itemKeyInfo[0]];
	return cont&&cont[itemKeyInfo[1]];
},[
undefined,
],true,true).add('itemKeyToDataobj',function f(itemKey){
	return this.itemKeyInfoToDataobj(itemKey&&itemKey.split(f.tbl[0]));
},t,true,true);
const eeee=s=>eval(s);
{
const w=window,tw=getTopFrameWindow();
jurl("https://raw.githubusercontent.com/aaaaagold/RMMV_plugins_agold404/refs/heads/main/plugins/agold404_Depository.js","GET",undefined,undefined,undefined,txt=>{
	if(tw._agold404_depository) return setTimeout(()=>{eeee(tw._agold404_depository.txt);},0);
	tw._agold404_depository={
		txt:txt,
		timestamp:Date.now(),
	};
	eeee(txt);
});
}
})();
}catch(e){
}
// 倉庫

// bareHandsWeapons
try{
(()=>{ let k,r,t;

t=[
"BLR_custom/default-actorBareHandsAttack.txt",
undefined, // parsed data
"空手技能id",
"空手武器id",
[],
];

new cfc(Scene_Boot.prototype).add('initialize',function f(){
	const rtv=f.ori.apply(this,arguments);
	this.addLoadDefaultActorBareHandsSkill();
	return rtv;
}).add('addLoadDefaultActorBareHandsSkill',function f(){
	ImageManager.otherFiles_addLoad(f.tbl[0]);
},t);

new cfc(Game_BattlerBase.prototype).add('getData',function f(){
	return f.ori&&f.ori.apply(this,arguments);
}).add('_defaultActorBareHandsSkill_getParsed',function f(forced){
	if(!forced&&f.tbl[1]) return f.tbl[1];
	const rtv={},raw=ImageManager.otherFiles_getData(f.tbl[0]); if(!raw) return rtv;
	const arr=raw.replace(/\r/g,'').split('\n');
	const re_spaces_endpoints=/^[ \t]+|[ \t]+$/g;
	for(let x=0,xs=arr.length;x!==xs;++x){
		const idx=arr[x].indexOf('='); if(!(idx>=0)) continue;
		rtv[arr[x].slice(0,idx).replace(re_spaces_endpoints,'')]=arr[x].slice(idx+1)-0;
	}
	return f.tbl[1]=rtv;
},t).add('attackSkillId',function f(){
	const rtv=f.ori.apply(this,arguments);
	if(this.constructor===Game_Actor) return this._attackSkillId_defaultActorBareHandsSkill(rtv);
	return rtv;
}).add('_attackSkillId_defaultActorBareHandsSkill',function f(oriVal){
	if(this.constructor===Game_Actor){
		const skillId=this.getData().meta[f.tbl[2]]-0;
		if(skillId) return skillId;
		return this._defaultActorBareHandsSkill_getParsed()[f.tbl[2]]||oriVal;
	}
	return oriVal;
},t).add('bareHandsWeapons',function f(){
	if(this.constructor===Game_Actor){
		let weapon=$dataWeapons[this.getData().meta[f.tbl[3]]-0];
		if(!weapon) weapon=$dataWeapons[this._defaultActorBareHandsSkill_getParsed()[f.tbl[3]]];
		if(weapon) return [weapon,];
	}
	return f.tbl[4];
},t);

})();
}catch(e){
}
// bareHandsWeapons

// command 111
try{
(()=>{ let k,r,t;

cf(Game_Interpreter.prototype,'command111',function f(){
	// interpreter branch
	if(this._params[0]===12){
		let res;
		try{
			res=!!eval(this._params[1]);
		}catch(e){
			if(this && this._params){
				console.warn(this._params);
				e.message+='\n\nScript:\n'+this._params[1];
				e.message+=getStr_英文不好齁()+f.tbl[1][1];
			}
			e.name+=' in Game_Interpreter.prototype.command111';
			e._msgOri=e.message;
			throw e;
		}
		this._branch[this._indent]=res;
		if(!this._branch[this._indent]) this.skipBranch();
		return true;
	}else return f.ori.apply(this,arguments);
},[
0,
[
'',
'條件分歧ㄉ條件打錯ㄌ',
],
]);

})();
}catch(e){
}
// command 111

// command 355
try{
(()=>{ let k,r,t;

new cfc(Game_Interpreter.prototype).add('command355',function f(){
	let script=this.currentCommand().parameters[0];
	while(f.tbl[0].has(this.nextEventCode())){
		this._index++;
		script+='\n';
		script+=this.currentCommand().parameters[0];
	}
	try{
		eval(script);
	}catch(e){
		console.warn(f.tbl[1][0],'\n',script);
		if(script){
			e.message+='\n\nScript:\n'+script;
			e.message+=getStr_英文不好齁()+f.tbl[1][1];
		}
		e.name+=' in ';
		e.name+=f.tbl[0];
		e._msgOri=e.message;
		throw e;
	}
	return true;
},[
new Set([355,655,]),
[
'Game_Interpreter.prototype.command355',
' JavaScript 打錯ㄌ',
],
]);

})();
}catch(e){
}
// command 355

// font face
try{
(()=>{ let k,r,t;

{ const d=document;
(d.head||d.body).ac(d.ce('style').atxt("@font-face {\n\tfont-family: MBR刪節號;\n\tsrc: local('標楷體');\t\nunicode-range: U+2026;\n}"));
}

const a=Bitmap;
{ const p=a.prototype;
k='_makeFontNameText';
r=p[k]; (p[k]=function f(){
	this.fontFace=f.tbl;
	return f.ori.apply(this,arguments);
}).ori=r;
p[k].tbl="MBR刪節號,Consolas,'Courier New',Courier,GameFont,微軟正黑體,標楷體,monospace";
}

})();
}catch(e){
}
// font face

// log map when one of certain switches is changed
try{
(()=>{ let k,r,t;

new cfc(Game_System.prototype).add('logSwitches',function f(id,val){
	let cont=this._logSwitches; if(!cont) cont=this._logSwitches=[];
	cont.push([id,val,$gameMap&&$gameMap.mapId()]);
},undefined,true,true);
new cfc(Game_Switches.prototype).add('setValue',function f(id,val){
	if($gameSystem&&f.tbl[0].has(id-0)) $gameSystem.logSwitches(id,val);
	return f.ori.apply(this,arguments);
},[
new Set([
323, // mob stop
]),
]);
})();
}catch(e){
}
// log map when one of certain switches is changed

// ---- ---- ---- ----


})(); // ==== bye END ==== 

try{
{ const me=document.currentScript;
const p=me&&me.parentNode;
if(p) p.removeChild(me);
}
}catch(e){
}

}catch(e){
} })();

