"use strict";

(()=>{ try{
if(window._isHotfixDisabled) return;
const _agold404_version=window._agold404_version;

// hot fix

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

