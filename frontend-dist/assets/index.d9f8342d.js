import{o as i,c,a as n,b as T,r as B,n as H,F as M,d as w,e as f,f as P,l as A,g as x,w as z,v as E,h as C,i as g,j as b,t as d,k as u,m as _,p as O,q as v,u as k,s as j,x as U,y as L,z as V}from"./vendor.61b3fed0.js";const R=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};R();var y=(o,a)=>{const s=o.__vccOpts||o;for(const[l,e]of a)s[l]=e;return s};const q={props:["kind"],computed:{kindClass(){return"alert-"+this.kind}}},D=w('<svg xmlns="http://www.w3.org/2000/svg" style="display:none;"><symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></symbol></svg>',1),G={class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img"},W={key:0,"xlink:href":"#check-circle-fill"},J={key:1,"xlink:href":"#exclamation-triangle-fill"};function K(o,a,s,l,e,t){return i(),c(M,null,[D,n("div",{class:H(["alert d-flex align-items-center mt-4",t.kindClass]),role:"alert"},[(i(),c("svg",G,[s.kind=="success"?(i(),c("use",W)):s.kind=="warning"||s.kind=="danger"?(i(),c("use",J)):T("",!0)])),n("div",null,[B(o.$slots,"default")])],2)],64)}var X=y(q,[["render",K]]);f.extend(P);f.extend(A);const Y={components:{Alert:X},data(){return{state:"idle",message:null,address:"",addressSent:"",amountSent:0n,tx:null,liftAtUnixtime:0}},computed:{isLoading(){return this.state=="loading"},isValid(){return this.address.startsWith("0x")&&this.address.length==42&&this.address.substr(2).match(/^[0-9A-Fa-f]+$/)},liftInHr(){return f().to(f.unix(this.liftAtUnixtime))},liftAtHr(){return f.unix(this.liftAtUnixtime).format("LLL")},txHr(){const o=(this.tx||"").trim();return o.substr(0,6)+".."+o.substr(o.length-6)}},mounted(){this.$refs.input.focus()},methods:{reset(){this.state="idle",this.tx=null,this.message=""},async giveMe(){grecaptcha.ready(async()=>{const o=await grecaptcha.execute("6LdUTFcdAAAAAH6Xu8p8x8eBdmAOzjinOn5Fomk_",{action:"submit"});this.proceedWithRequest(o)})},async proceedWithRequest(o){this.state="loading",this.tx=null,this.message="";const a={method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({address:this.address,token:o})};let s=null;try{s=await(await window.fetch(this.$root.urlPrefix+"/api/gimme/",a)).json()}catch{}if(!s){this.state="fail",this.message="Failure :-(";return}if(!s.success){s.isLimited?(this.state="limited",this.liftAtUnixtime=s.liftAtUnixtime):s.isEmpty?this.state="empty":s.isBot?this.state="bot":(this.state="fail",this.message=s.message||"Oops");return}this.state="success",this.tx=s.tx,this.addressSent=s.address,this.amountSent=BigInt(s.amount),this.address=""}}},Q={style:{"{ opacity":"isLoading ? 0.5 : 1 }"},class:"form-faucet"},Z=["disabled"],ee={class:"form-floating"},te=["disabled"],se=n("label",{for:"address"},"Your Ropsten address",-1),ne=["disabled"],oe=u(" Sent "),ae=["href"],re=u(". "),ie=u(" Address limited. Please retry in "),le=u(" at "),ce=u(" Faucet is empty. Please notify me on "),de=n("a",{href:"https://twitter.com/egorfine"},"Twitter",-1),ue=u(" so that I mine some more rETH. "),me=u(" Unfortunately, Google Recaptcha failed. "),he={key:5,class:"text-muted mt-1 small"};function fe(o,a,s,l,e,t){const r=x("alert");return i(),c("div",Q,[n("form",{onSubmit:a[2]||(a[2]=C((...m)=>t.giveMe&&t.giveMe(...m),["prevent"])),disabled:t.isLoading},[n("div",ee,[z(n("input",{ref:"input",type:"text","onUpdate:modelValue":a[0]||(a[0]=m=>e.address=m),onInput:a[1]||(a[1]=(...m)=>t.reset&&t.reset(...m)),disabled:t.isLoading,class:"form-control mb-2",id:"address",placeholder:"0x....."},null,40,te),[[E,e.address]]),se]),n("button",{class:"w-100 btn btn-lg btn-primary",type:"submit",disabled:t.isLoading||!t.isValid},"Give me Ropsten eth!",8,ne)],40,Z),e.state=="success"?(i(),g(r,{key:0,kind:"success"},{default:b(()=>[n("small",null,[oe,n("b",null,d(o.$format18(e.amountSent)),1),u(" to "+d(e.addressSent)+" with tx hash ",1),n("a",{href:"https://ropsten.etherscan.io/tx/"+e.tx},d(t.txHr),9,ae),re])]),_:1})):e.state=="limited"?(i(),g(r,{key:1,kind:"warning"},{default:b(()=>[ie,n("b",null,d(t.liftInHr),1),le,n("b",null,d(t.liftAtHr)+".",1)]),_:1})):e.state=="empty"?(i(),g(r,{key:2,kind:"danger"},{default:b(()=>[ce,de,ue]),_:1})):e.state=="bot"?(i(),g(r,{key:3,kind:"warning"},{default:b(()=>[me]),_:1})):e.state=="fail"?(i(),g(r,{key:4,kind:"danger"},{default:b(()=>[u(d(e.message),1)]),_:1})):(i(),c("div",he," Please enter valid Ethereum address to get free Ropsten testnet ETH. "))])}var _e=y(Y,[["render",fe]]);const p=o=>(j("data-v-cf478916"),o=o(),U(),o),pe={key:0},ge={key:1},be=u(" available now at faucet"),ve=p(()=>n("br",null,null,-1)),ye=["href"],xe=p(()=>n("br",null,null,-1)),ke=p(()=>n("br",null,null,-1)),we=u(" daily limit per address. "),Ae=p(()=>n("br",null,null,-1)),Le=p(()=>n("br",null,null,-1)),Se={key:0,class:"blockNumber small danger"},$e={key:1,class:"blockNumber small danger"},Ne={key:2,class:"blockNumber small"},Fe=p(()=>n("br",null,null,-1)),Ie={setup(o){f.extend(A);const a=_(!0),s=_(0),l=_(0),e=_(""),t=_(null),r=_(null),m=async()=>{let h=null;try{h=await(await window.fetch(window.urlPrefix+"/api/stats/")).json()}catch{}!h||(s.value=BigInt(h.balance),l.value=BigInt(h.weiPerAddress),e.value=h.address,t.value=h.blockNumber,r.value=h.blockTimestamp)};O(async()=>{await m(),a.value=!1,setInterval(m,3e4)});const S=v(()=>r.value?Math.floor(Date.now()/1e3)-r.value:null),$=v(()=>r.value?f.unix(r.value).format("LLLL"):"unknown"),N=v(()=>e.value?e.value.substr(0,6)+" ... "+e.value.substr(-4):""),F=v(()=>S.value>=135);return(h,I)=>a.value?(i(),c("div",pe," Loading stats... ")):(i(),c("div",ge,[n("b",null,d(h.$format18(s.value))+"\xA0rETH",1),be,ve,n("a",{class:"small",href:"https://ropsten.etherscan.io/address/"+e.value},d(k(N)),9,ye),xe,ke,n("b",null,d(h.$format18(l.value))+"\xA0rETH",1),we,Ae,Le,r.value?k(F)?(i(),c("span",$e,"Stalled at block "+d(t.value)+" ("+d(k($))+")",1)):(i(),c("span",Ne,"Currently at block "+d(t.value),1)):(i(),c("span",Se,"No last block information (stalled?)")),Fe]))}};var Te=y(Ie,[["__scopeId","data-v-cf478916"]]);const Be={components:{AddressForm:_e,Stats:Te},setup(){window.urlPrefix=""},data(){return{urlPrefix:""}}},He={class:"container mt-5"},Me={class:"row"},Pe={class:"col-md-6 col-sm-12"},ze=n("h1",{class:"h3 mt-3 mb-4 fw-normal"},"Ropsten testnet faucet",-1),Ee={class:"col-md-6 col-sm-12 text-muted"},Ce=n("h1",{class:"h3 mt-3 mb-4 fw-light"},"Faucet stats",-1),Oe=w('<p class="mt-5 mb-1 text-muted"> \xA9 2021 Egor Egorov </p><p class="mb-3 text-muted"><a href="https://github.com/egorFiNE/ropstenfaucet">github</a><span class="ms-2 separator">|</span><a class="ms-2" href="https://twitter.com/egorFiNE">twitter</a><span class="ms-2 separator">|</span><a class="ms-2" href="mailto:me@egorfine.com">me@egorfine.com</a></p>',2);function je(o,a,s,l,e,t){const r=x("AddressForm"),m=x("Stats");return i(),c("main",He,[n("div",Me,[n("div",Pe,[ze,L(r)]),n("div",Ee,[Ce,L(m)])]),Oe])}var Ue=y(Be,[["render",je]]);const Ve=new Intl.NumberFormat("en-US",{useGrouping:!0,minimumFractionDigits:4});function Re(o){const a=BigInt(o)/10n**14n;return Ve.format(Number(a.toString())/10**4)}var qe={install:o=>{o.config.globalProperties.$format18=(a,s="")=>(a??null)===null?s:Re(a)}};V(Ue).use(qe).mount("#app");
//# sourceMappingURL=index.d9f8342d.js.map
