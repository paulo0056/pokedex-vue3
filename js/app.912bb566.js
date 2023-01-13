(function(){"use strict";var e={794:function(e,n,a){var o=a(963),t=a(252),s=a(577),p=a.p+"img/pokedex-bg.3daca8c2.png";const r={class:"app"},i=["src"],c={key:0,class:"pokemon_data"},u={key:1,class:"pokemon_data"},l={class:"pokemon_number"},k=(0,t.Uk)(" - "),m={class:"pokemon_name"},v={class:"pokemon_detail_grid"},f={class:"pokemon_hp"},d=(0,t.Uk)("HP: "),_={class:"hp"},b={class:"pokemon_atk"},h=(0,t.Uk)("ATK: "),g={class:"atk"},y={class:"pokemon_def"},w=(0,t.Uk)("Def: "),x={class:"def"},H={class:"pokemon_spc_atk"},P=(0,t.Uk)("Atk Spc: "),N={class:"atk_spc"},O={class:"pokemon_type"},z=(0,t.Uk)("Type: "),j={class:"type"},U={class:"buttons"},S=(0,t._)("img",{src:p,alt:"pokedex",class:"pokedex"},null,-1);function C(e,n,a,p,C,D){return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("img",{src:`${e.pokemonImage}`,alt:"",class:"pokemon_image"},null,8,i),e.loading?((0,t.wg)(),(0,t.iD)("h1",c,(0,s.zw)(e.apiMessage),1)):((0,t.wg)(),(0,t.iD)("h1",u,[(0,t._)("span",l,(0,s.zw)(e.pokemonNumber),1),k,(0,t._)("span",m,(0,s.zw)(e.pokemonNameSearched),1)])),(0,t._)("h3",v,[(0,t._)("span",f,[d,(0,t._)("span",_,(0,s.zw)(e.hp),1)]),(0,t._)("span",b,[h,(0,t._)("span",g,(0,s.zw)(e.atk),1)]),(0,t._)("span",y,[w,(0,t._)("span",x,(0,s.zw)(e.def),1)]),(0,t._)("span",H,[P,(0,t._)("span",N,(0,s.zw)(e.atkSpc),1)])]),(0,t._)("span",O,[z,(0,t._)("span",j,(0,s.zw)(`${e.type1} / ${e.type2}`),1)]),(0,t._)("form",{class:"form",onSubmit:n[1]||(n[1]=(0,o.iM)((n=>e.fectchPokemon(e.pokemonName)),["prevent"]))},[(0,t.wy)((0,t._)("input",{type:"search",class:"input_search","onUpdate:modelValue":n[0]||(n[0]=n=>e.pokemonName=n),placeholder:"Name or Number",required:""},null,512),[[o.nr,e.pokemonName]])],32),(0,t._)("div",U,[(0,t._)("button",{class:"button btn-prev",onClick:n[2]||(n[2]=(...n)=>e.backPokemon&&e.backPokemon(...n))},"< Prev"),(0,t._)("button",{class:"button btn-next",onClick:n[3]||(n[3]=(...n)=>e.nextPokemon&&e.nextPokemon(...n))},"Next >")]),S])}var D=a(262),T=(0,t.aZ)({name:"App",setup(){let e=(0,D.iH)(1);const n=(0,D.iH)(!1),a=(0,D.iH)(),o=(0,D.iH)(),t=(0,D.iH)("1"),s=(0,D.iH)(),p=(0,D.iH)("Loading..."),r=(0,D.iH)(),i=(0,D.iH)(),c=(0,D.iH)(),u=(0,D.iH)(),l=(0,D.iH)(),k=(0,D.iH)(),m=async o=>{n.value=!0,t.value=o,s.value=void 0;const m=await fetch(`https://pokeapi.co/api/v2/pokemon/${"number"===typeof o?o:o.toLowerCase()}`);if(200===m.status){const o=await m.json();t.value=o.name,a.value=o.id,s.value=o.sprites.versions["generation-v"]["black-white"].animated["front_default"],e.value=o.id,n.value=!1,r.value=o.stats[0].base_stat,i.value=o.stats[1].base_stat,c.value=o.stats[2].base_stat,u.value=o.stats[3].base_stat,l.value=o.types[0].type.name,k.value=o.types[1].type.name}else s.value=void 0,p.value="Not Found D:",n.value=!0},v=()=>{e.value+=1,m(e.value)},f=()=>{e.value>1&&(e.value-=1,m(e.value))};return{pokemonName:o,fectchPokemon:m,pokemonNameSearched:t,pokemonNumber:a,pokemonImage:s,apiMessage:p,nextPokemon:v,backPokemon:f,loading:n,hp:r,atk:i,def:c,atkSpc:u,type1:l,type2:k}},created(){this.fectchPokemon("1")}}),$=a(744);const A=(0,$.Z)(T,[["render",C]]);var M=A;(0,o.ri)(M).mount("#app")}},n={};function a(o){var t=n[o];if(void 0!==t)return t.exports;var s=n[o]={exports:{}};return e[o](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(n,o,t,s){if(!o){var p=1/0;for(u=0;u<e.length;u++){o=e[u][0],t=e[u][1],s=e[u][2];for(var r=!0,i=0;i<o.length;i++)(!1&s||p>=s)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(r=!1,s<p&&(p=s));if(r){e.splice(u--,1);var c=t();void 0!==c&&(n=c)}}return n}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,t,s]}}(),function(){a.d=function(e,n){for(var o in n)a.o(n,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){a.p="/pokedex-vue3/"}(),function(){var e={143:0};a.O.j=function(n){return 0===e[n]};var n=function(n,o){var t,s,p=o[0],r=o[1],i=o[2],c=0;if(p.some((function(n){return 0!==e[n]}))){for(t in r)a.o(r,t)&&(a.m[t]=r[t]);if(i)var u=i(a)}for(n&&n(o);c<p.length;c++)s=p[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},o=self["webpackChunkpokedex_vue3"]=self["webpackChunkpokedex_vue3"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(794)}));o=a.O(o)})();
//# sourceMappingURL=app.912bb566.js.map