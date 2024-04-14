"use strict";

(()=>{ try{
const isTest=Utils.isOptionValid('test');
const isNwjs=Utils.isNwjs();
if(!window._agold404_keepGoing&&!(Date.now()<1743734744444)){
	if(!(Date.now()<1744744744744)){
		const r=SceneManager.goto;
		(SceneManager.goto=function f(scctor){
			if(scctor) return f.ori.call(this,Scene_Options);
			else return f.ori.apply(this,arguments);
		}).ori=r;
	} 
	return;
}
const eeee=window.eval,L=LZString,d=L&&L.decompressFromBase64;
if(window._isHotfixDisabled) return;
const _agold404_dbg_nwjs=window._agold404_dbg_nwjs;
const _agold404_version=window._agold404_version;


// hot fix

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
398, // 房
]),
t,
];
if(_agold404_version<'2024-04-06 1') p.hotFix_maps.tbl[1].union_inplaceThis(new Set([
4, // 俯瞰前存檔
408, // 9beat
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
[ {loc:"LD",showFrame:7777}, "按下 \\C[6]F12\\C[0] 至 console 輸入以下，立即解鎖加速功能：\n\\C[6]ConfigManager.canFrameFastForward=true;\\C[0]" ],
[ {loc:"LD",showFrame:4*4}, "有時\\C[6]黃金\\C[0]會做出新功能，\n然後就有新東西想做進來，\n結果就花更多時間了。" ],
], // 1:
];
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
!isTest && isNwjs && setTimeout(()=>{
eeee(d.call(L,"C4Jwng3gUAFAZgVwHYGNgEsD2SAEcYCU06+AhDAIYgDmCAtgKZLADOA2gAwC6AfALwcCBHCAbAEIXPgAsHaQQDcUEjA4AeKrUbN23YaPGS8lGvSatOXALQBGRVBTYWwHABM+rho88BVAEoAkgDCmHQADtjmADQoKHwMAG4UADYwAO7oSK6YaQB0AFYSybnAmADKoJnUhARRANYMYHwA5GEULB0MDK7NUYzAABaY7gBEAAoA8mUAKiNRRXwjA8DAYSwAXAD0mywoIOhhwLnUmJjUyQy5jnSbdBR7mCw7mwCCANJwYCgARmAIABJgAAy0wA+mMAIovfJ+HwAR3QFCBCAAGgBZdDTADMKKBmBQHBR0wAmi9pAgAFLAACsVnQADlKWMACIATiBACEgsSxkgABxpMCuLEBN4+akMkAALzSmwYAA8vCMlCpkviUhVMCAKNRLrrgAFgAw6DAGmAhCIxBIkEoLi5gOEFDgIDhHEhnDg6nwzQBqZpWFhdHpOh1hPhqlAa0ra3XHMSG42mxQ4FSkUPCCNRrU6y6Bg1Gk11KKhvjfUoUGBoiiDXLarKhQglcqVJDVAi5FjJdAoBiqKI2ABs7bargAolkYIOos0OM0CH6rM0fTBmdXLkgco3ShV9q2ah2uz2+zYsUJkwBfBxOFyB7p8UNRVzViiLW+jH1vpSJFIwVwwEagGAACkADsHJARwLzwMgaBYEgQEAEwcPgBCgeBkGpiYWjmCwQHUhyHB4cyQFYqOJHMoIqFIQY1qIchMCyPIJHoS8KiEViQSaGYOh4QRRFURwNGSHR+BcdorC8YR1LMrYqFYix36pH+iEIYBiHUmB6mQdBqAYNg6lISh6maQh1IYWQWHcRJpn4YRNnEaZpHqViFFCAZglWsJpmGQxchUdS8laax+B2QFnGmOJuE2Xx9n+dRnnwd59FiTh6m2WlMl2M54GmZBsQwEUBlBP0QyuEVoUIUET7ABQ5VFcA8rAM5DkBaOMANU1jktS5zXNJgdRzgZA5DTAmbJJqMa5vGBamo0RXNDYc5uY5OVmS8xnMgQhDZUFG2RsAKADDADD+SZa0bSpbmBZBoGbdt13rSBzL7Ydx2oZpN1PSMQhKOeW32OeL1HSd0DnkAA="));
},1);
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

