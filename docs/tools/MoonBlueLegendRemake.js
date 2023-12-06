"use strict";

(()=>{ try{
// hot fix



{ const me=document.currentScript;
const p=me&&me.parentNode;
if(p) p.removeChild(me);
}

}catch(e){
} })();

