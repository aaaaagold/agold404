"use strict";

(()=>{ try{
if(window._isHotfixDisabled) return;
const _agold404_dbg_nwjs=window._agold404_dbg_nwjs;
const _agold404_version=window._agold404_version;

// hot fix

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

// 白粉說明文
try{
(()=>{ let k,r,t;
const p=Scene_Title.prototype;
k='start';
r=p[k]; (p[k]=function f(){
	const rtv=f.ori.apply(this,arguments);
	this.tune白粉說明文();
	return rtv;
}).ori=r;
p.tune白粉說明文=()=>{
	const item=$dataItems.filter(dataobj=>dataobj&&dataobj.name==="白粉")[0];
	const meta=item.meta;
	meta.道具額外文字檔=meta.道具額外文字檔.replace(/(?<=BLR_custom\/detail\/item\/Items)[0-9]+(?=\.txt)/g,item.id);
};
})();
}catch(e){
}
// 白粉說明文

// 如如ㄉ裝是在所尛
try{
(()=>{ let k,r,t;
const p=Scene_Title.prototype;
k='start';
r=p[k]; (p[k]=function f(){
	const rtv=f.ori.apply(this,arguments);
	this.tune如如裝();
	return rtv;
}).ori=r;
p.tune如如裝=()=>{
	const c=Game_BattlerBase.TRAIT_EQUIP_LOCK;
	const forEach_trait=trait=>trait.code===c&&(trait.code=-404);
	const forEach_dataobj=function(id){ const dataobj=this[id];
		const ts=dataobj&&dataobj.traits; if(!ts) return;
		if(ts) ts.forEach(forEach_trait);
	};
	[
		[$dataArmors,[60,620,360,906],],
		[$dataWeapons,[180],],
	].forEach(kv=>kv[1].forEach(forEach_dataobj.bind(kv[0])));
};
})();
}catch(e){
}
// 如如ㄉ裝是在所尛

// 扣道具忘ㄌ傳參
try{
if(_agold404_version<'2024-03-10 1')(()=>{ let k,r,t;
Game_Interpreter.prototype.cmdCommon_gainThings=function f(dataobjv,cal_kw){
	const dataobj=dataobjv[this._params[0]];
	let n=this.operateValue(this._params[1], this._params[2], this._params[3]);
	if(0<n){
		const v0=n;
		for(let arr=$gameParty.members(),x=arr.length;x--;) n=Math.max(arr[x][cal_kw](v0,dataobj),n);
	}
	$gameParty.gainItem(dataobj,n|0,this._params[4]);
	return true;
};
})();
}catch(e){
}
// 扣道具忘ㄌ傳參

// YEP卡條
try{
if(_agold404_version<'2024-03-10 0')(()=>{ let k,r,t;
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
(()=>{ let k,r,t;
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


// data hot fix
try{
if(_agold404_version<'2024-03-24 1')(()=>{ let k,r,t;
const p=Game_Event.prototype;
k='findProperPageIndex';
r=p[k]; (p[k]=function f(){
	return this.event()?f.ori.apply(this,arguments):-1;
}).ori=r;
})();
if(_agold404_version<'2024-03-22 1')(()=>{ let k,r,t;
const p=Game_Event.prototype;
k='update';
r=p[k]; (p[k]=function f(){
	return this.event()&&f.ori.apply(this,arguments);
}).ori=r;
})();
if((_agold404_dbg_nwjs||Utils.isNwjs()) && _agold404_version<'2024-03-22 0')(()=>{ let k,r,t;
t=[
"https://raw.githubusercontent.com/aaaaagold/MBR_data/main/",
];
{ const p=XMLHttpRequest.prototype;
k='open';
r=p[k]; (p[k]=function f(method, url, async, user, password){
	let tmp;
	if(tmp=this.hotFix_maps(url)) arguments[1]=tmp;
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
8, // 俯瞰
255, // 輪盤
360, // 白虎洞
396, // 鴿房
398, // 房
400, // 圖房
]),
t,
];
}
{ const p=Scene_Title.prototype;
k='start';
r=p[k]; (p[k]=function f(){
	const rtv=f.ori.apply(this,arguments);
	this.tuneDatabase();
	return rtv;
}).ori=r;
(p.tuneDatabase=function f(){
	try{
		f.tbl[1].slice().forEach(f.tbl[2].bind(f.tbl));
	}catch(e){
	}
}).tbl=[
t,
[
["CommonEvents.json",arr=>{
	if(!$dataCommonEvents) return;
	const xs=arr&&arr.length; if(0<xs){ for(let x=0;x!==xs;++x){ if(arr[x] && $dataCommonEvents[x]) $dataCommonEvents[x].list=arr[x].list; } }
}],
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
(()=>{ let k,r,t;
const p=Scene_Title.prototype;
k='initialize';
r=p[k]; (p[k]=function f(){
	this.openResponseForm();
	return f.ori.apply(this,arguments);
}).ori=r;
(p.openResponseForm=function f(){
	const w=window,tw=getTopFrameWindow();
	
	if(tw._openResponseForm_opened) return;
	if(!(Math.random()*f.tbl[0]<1)) return;
	w.open("https://docs.google.com/forms/d/e/1FAIpQLSeNj8kwKvZweS1vNNq4pdfKpjijFgidpIqjcKWipeh8lsXA_Q/viewform",f.tbl[1],f.tbl[2]);
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
(()=>{ let k,r,t;
const p=Scene_Title.prototype;
k='start';
r=p[k]; (p[k]=function f(){
	const rtv=f.ori.apply(this,arguments);
	this.tinyTitleOnlyMsg();
	return rtv;
}).ori=r;
(p.tinyTitleOnlyMsg=function f(){
	if(!(Math.random()*f.tbl[0]<1)) return;
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
], // 1:
];
})();
}catch(e){
}
// 小訊息

// ---- ---- ---- ----

try{
{ const me=document.currentScript;
const p=me&&me.parentNode;
if(p) p.removeChild(me);
}
}catch(e){
}

}catch(e){
} })();

