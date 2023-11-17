(function(){"use strict";var A={8495:function(A,t,e){var g=e(6369),C=function(){var A=this,t=A._self._c;return t("div",{class:{correct:A.correctChoice},attrs:{id:"app"}},[t("div",[t("div",{staticClass:"quarter top-left",class:{active:A.topLeft},on:{click:function(t){A.quarterClicked("topLeft"),A.playAudio(0)}}}),t("div",{staticClass:"quarter top-right",class:{active:A.topRight},on:{click:function(t){A.quarterClicked("topRight"),A.playAudio(1)}}})]),t("div",[t("div",{staticClass:"quarter bottom-left",class:{active:A.bottomLeft},on:{click:function(t){A.quarterClicked("bottomLeft"),A.playAudio(2)}}}),t("div",{staticClass:"quarter bottom-right",class:{active:A.bottomRight},on:{click:function(t){A.quarterClicked("bottomRight"),A.playAudio(3)}}})]),t("button",{on:{click:A.newGame}},[A._v("Старт")]),t("h2",[A._v(" "+A._s(A.score)+" ")]),t("button",{class:{selected:A.selected[0]},on:{click:function(t){return A.changeDifficulty(0)}}},[A._v("Легко")]),t("button",{class:{selected:A.selected[1]},on:{click:function(t){return A.changeDifficulty(1)}}},[A._v("Cредне")]),t("button",{class:{selected:A.selected[2]},on:{click:function(t){return A.changeDifficulty(2)}}},[A._v("Сложно")])])},i=[],I=(e(560),"data:audio/mpeg;base64,//NAwAAAAAJYAUAAAP/c0Zhhsa0QV/vxJjdg1ja5Kv+X4GSASN53w1cCAGBlQP4hOJTGT/w1YHVCxcDfkf/AMBDBIORcr//5OFw0N9P//8oGgARgXKMmhr////06CDJ+9X////+z7aD/80DAWxjzEjgBnaABgaByYceMwT48EjRUAUCVl5AgOzAozDFMnD/HZTggdzDcGjAsKhIDWgKAs4q44U2Wq1q0IgNMDgCZc/Wf//RcY4BwwX25dRR//////vSD8g4Fkv/////////////zQMBSFmLmilHdmAH//WeDoxPw4CSmAgMA5dQGh+Y3VqZohyXUS/fdnCsbz87z/2SEAAqN//+iah3Aik///////eiLwiqv/////////////+ibBJgFgiIweZiIAC4wZBkw5Co3IjY3//NAwFMQ8uqMAutiudQwKBdQPZCsoUAl0ct9//CFAWlv//0SqErGeR//////95wPwDNpf/////////////9AujlAfAk4sIk2MwIQBjBDAFMAIHowsUejDOB+AIDpZRAYmuhozS1zWv3/80DAahHi7oAA7Ka42BpB2UP//qlUNTEkPf/////+qcGGFDJt//////////////qNhCoLqQBtW/MEBVCAKMTAbOF2nOVgXIiaDAMQCJtjoINix1jr1LUsEMRqX//7w6EN9b//////rf/zQMB9EprmgAD0JriqEYifl//////////////6lk0H6AH4HaAAUjgBlKwQUAXMAAB4cCLMJBSMwNQjzAKAiLVsrSYSDaHRf//0RJAjv/19/c6pJ//U3R6r///s5wRiZN////////////NAwI0SWup8AOwmuP///9RKiuAZ+SR4AFAwAd5ahCEhhQAgQXR0kEh4GA5EYgOCdDmOAEOg2p3ljhr/HUDL/7d/Ws+Sb/+rX/f//9lGRDw3hv/////////////+mKeLkAwyQhTwAED/80DAnhNy7nx482S4mkFABTApAYMBYDcwDwkjB3WaMRUJQwBQHxQAJIBLIt61af/PXveOgKyv9ktX81G////////WUxPv//////////////XIwByAF4kUWyABRCxiiMN3ABSGSZak9P/zQMCrE2rudHjsaLjpD8DZc8akMNsgi1vX9/oJAJvoz88kNMdzOaQiMMl/9jD3MZlmK6v6vV1J3IIZpf///7VMnVr9WtV///////mQjIC8bsAHBQrwwUt0YgTmeYRjTadrdnXbIJAm//NAwLgTmu50YPQmuaTSHVLRQq/jjauzUOFwAhdrJXVnub6FQVGL/+/95n//7qJgy0m/X/7f3U7da1an1vs3//////rNSQAPTFiAAJUiMLDjIPDQsw0VwJ9zJqMDA0kCzJL8aDisFqj/80DAxBSa7os+2qC68+apKRIeCtoN6v/0yVDVYXTKzf/////9riti+v////qXs1mW9/Uv//////7nwQ4QXGmsAygAQpAaZS7HQyxr4gYkgmqI4sWMHaqzkAA6ENN++fuUAmEMa39nVf/zQMDMFLLubzbZ2riqcej0QQBYTjTv/////+xNJU4fb///9FT9XRRRU/qSUl//////0x6g3gAKgskQXKzxl7QGpKWlygYcRqFVDpy5iKafDF2ovNDoiigmQPMVFUx2RUVEV2JDURgh//NAwNQUMu5YBuSiuBAIBHGhMs7P/////5UVU////////////+iqzs5QwUECOR9ChgQYsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/80DA3hVi7kxG2pq4AAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIP/zQMDjFOr5yADBxLkAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//NAwOoAAAJYAAAAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAAC/A+kEAAAz"),o="data:audio/mpeg;base64,//MwwAAAAAJYAUAAAAwBQGBwOBQOBgB1A34DtDQYPAAoDTjIGnfIxb/j8RYt/4LgFg/M/8eMePz//8kMZzScKb//8RC//////bf3//////MwwEERwvZ8f5NQIP/zIDAmFykJFSHUAMBQMPhYIwQDnwaBwUBvEMsUBopNvzoyJEkv//MimHh0v/////0jApt////////////+okBQ//MwwDsOqpKlgdVoAYAOxQvEsGIPI1ZBTAfuMUlfC/3//6hNEP//zEVv/////+TCP/////////////WEEaiJVUBKRpg16HGSKXagm5jl//MwwEEMKpahQNtatI0/f//xV///WYi1//////1CiE/////////////74MDUwBX6RJRJgw+LgHax4NNRl9e5dr///9Qcf//6Hib///////MwwFEMIpqcAONUtP6DATv////////////vhOBW4AIzdgZA6CQwetzs44CAOziH6ekt0vP//oGbf//Q8l//////0iYQv/////////////MwwGEMWpqcIOKUtP+gfBnPgCBZsQDUjhqh/AaqMIjIP1JozTZ2b6BeP/+06jkwdO+3dlnf1n0//QN/////////////zlAEAAkpdIEA//MwwHANCpqcQOKatDLpGHnCeqHAYIV/XqlWtU5+v/C03//4zDr//////6ZLf///////////+rRL4Ns1A4l4dABeRlxhoPH7CeGBRk7u//MwwHwNQpaoeKqOtlJK6SVf+//BT//+gxH3//////MT3////////////2WZm4CQHABXvBlFILmwupABOACQwcKJGzov+gt/+1LOECCv//MwwIgNQpqUYOKatOxyKjdTTpV2NX/6Dw7///6/////////8aALgC5EKgERyqWRCITaCNHAManK+8quP///Ug8XW62+68KDpX//66f///MwwJQNepaQSOKatf5hRP////////////8LDjgAj04wIGBJwLAzPRwgeFvpxQE3F0985//xCMIhl//9CUVyb//////OJ///be/1fr////MwwJ8NypqoeKFKtv////7BJS6eQAhH1JQjhyB5xsbno2pY98tmpdll/758qD0Wp//6AuB0//////8SDor/////oYrf//////4RAEcA//MwwKgNapqYeslKti+pBD0YljhHqDhC1BtCLjcLGgEsssz0KEOztZ6p2/ymKFQ5Hb/////////////////ZymKCBgwNUAAAAAAAAAAA//MwwLMOQpp0GNqatAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//MwwLsOCppwOMnKtiAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAg//MwwMMOIo3UAHiEtQAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//MwwMsAAAJYAAAAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAvwMdBQAANA==",s="data:audio/mpeg;base64,/+MwwAAAAAJYAUAAAP+tETMpXTjE8/9p6ozVZHD2+Jf9rlcyxCASEjmi3Ayg4DJFABknvwN8gAejA04cLZ/+RMvjrFBi4/++CACAkwBujArQiBc//yuYE4XybK6P//6aZOIIINAcC////BtqBkwJ4wNOggg/////+m9lug3///////0000PoGBOAZMKHtBaYbpgkyGBRct8YHD2Y/+MgwI8hLBIwAZ2gAJQNmIoVGDY0n8pKHbhMmGpIGIg1RNIpgJCABftjsSs46prWX41UisI7CZcNUDnEWJ5Kk+i3/r1sZE8AuAA0KELMkSKyv////////UkkQcGosR0RySLL////////4zDAZR8T6nTJ3aAB///////////+tygQ8OKAywgOXE7mB4HAlMtlYEAYeAQLAMYAj+Z1emZPjKYHhGYRgKTApA8ItYY8/+e/rTMQHY42////qMCbFYKKaP////////9MtJAOei///////////////////6TsViaByQBoJSAAURzJnJgMBo6Bpg0DJh6Ixxh5RtuGxgaN5hsLoCD/4yDAdxYr4oQA7BrZORRadDsuq9y7z0eqiPyAHJT////3MTxocS///q/v////1nRIhtJJf//////////////////ouWSVGsGCgJkZY1TgfhHcFAUYQgiKgih8YgBocZ8Ia+FgYPhMYP/jMMB5F9vmeBjrYtnIfAoA1AKksjFjuev8wshrJMEsCbPt////UYDSaP/////////uiXBZSX//////////////////9SiiXgxuA8hBgcz55wPUoDWWggwOg0HGVxCIwUYpHZwxSmZDeadOgYJlUHAkUrn4/S1q9NfTNZY0BgQQn6f///PIC5////aum3///85iBh8L2X//+j1nsv/jIMCoF0PueADrYtinfamuh6q9tKHtZm7OtEp///////VkUSwCoiBkTKgOASAt0NAzfdztASEmZI+d7eZxkbhyCoMPvo06WKbRGlyy/E3Q41AFAeCATHV///9B4JgAQJEW/////////+MwwKYaK+Z4FuKU2/8ydL///+ip/+v99SanRSRfZF6KTotuiyn///////1ssujSEhMDYDDjAITEZgRnTFFgNHNkJNi0MZJBLEDUAU6LIs8ZsuV4IHt3K9g2RakXiRJhfLCWLpxN2qsp12/2SJpIEMYELsFaJuMgeRd7f///////NRWJGop7f/////////////////5qKxxglAtE/+MgwMwY4+ZkBtHa2gNxgkaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAIAAgACAAIAAgACAAIAAgACD/4zDAwxsL7hQA007YACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAD/4yDA5QAAAlgAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAAL8DGQQAADU=",n="data:audio/mpeg;base64,/+MgwAAAAAJYAUAAAP/dwzLGc0Onr/lmztZgjZRFv+/YIjZAQV9DAwBgDXLgCmn+PwoAcAav/ZsM8AYEAdJMGERR//xwMxcLhp//m7s5ZGbES///AOAFF0Gqp////pvTdDoM//////T/4yDAWxo7GjgBnaAA3pm4WiCdQ5c0DH///ygYdCS8D0CgCgZy5L0xOCoxzDg47YA6GA8wVB0wEASN1oMimvx7rHHKVKTEICyHl//+uZF8P+MMAWxiX//////6RKitjxdb///////////jIMBNFgrqsv/dkAH///+vQTEdjJiUBIBpNkWAtJcKBmYw1CYvCKlJE3PfJtpfe7+vpToxQJ4tv//6zAkQVRb//////9BAkg4Si3/////////////+oeoK6NxBPOB26zTR0NGIyGd0/+MgwE8RGvKQAOtauPefLGZkQCCQDhlTARgWmqY7z+SSERYIS3+v/mmnFm//////95kVEoUm//////////////0B8BbAAQwWlDyozUCh4GCoYSFYZkdYcMgwKAGIgALuq6L2q9y7n/r/4yDAZRHC6oQA4pq5lqcHsJQ0W31/r9RMMf//////8lBklt/////////////9VIvkCApAbCGAisCAAwHDMETjLywxZNMTlDiXwxFYMhLx4IR0LjtWcbOW0vLTIcRC8BUs1P6/2IjBaP/jIMB5EprufADrZLnG///7fN67fx41v////+3+nb//////oeAkDRLJiwDgANKaqYWwHLwBpK4c/QGxlxkIU2GPu458h3zLfLxMExguZ///OEYFAnCU3//////0Hppv////U039zWdt/+MgwIkS0u53JtqOuFL2//////6D4QQAoXkoj7QFRF0TCAENIXBc4IAmIt9yZyHrtnWRQ8iNio4exyOaj9bamEgegSCwPxgbDpj//////1VjKj/////////////9WMGOMBBQQsY2QAD/4yDAmBKq7mQG2dS4AAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIP/jIMCoEtr2HADBxLkAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA/+MgwLcAAAJYAAAAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAAC/AzEKAAA2",c={name:"SimonGame",data(){return{topLeft:!1,topRight:!1,bottomLeft:!1,bottomRight:!1,correctChoice:!1,sequence:[],sequenceToGuess:[],elementsToAdd:["topLeft","topRight","bottomLeft","bottomRight"],sounds:[I,o,s,n],difficulty:900,selected:[!0,!1,!1]}},methods:{newGame(){this.sequence=[],setTimeout((()=>{this.goToNextLevel()}),1e3)},addSequenceElement(){this.sequence.push(this.elementsToAdd[Math.floor(Math.random()*this.elementsToAdd.length)]),this.sequenceToGuess=[...this.sequence]},changeDifficulty(A){switch(this.selected=[!1,!1,!1],A){case 0:this.difficulty=900;break;case 1:this.difficulty=600;break;case 2:this.difficulty=200;break}this.selected[A]=!0,this.resetState()},playAudio(A){let t=new Audio(this.sounds[A]);t.play()},resetState(){this.topLeft=!1,this.topRight=!1,this.bottomLeft=!1,this.bottomRight=!1},goToNextLevel(){this.addSequenceElement(),this.resetState(),this.startSequence(this.sequenceToGuess[0])},quarterClicked(A){this.sequenceToGuess[0]===A?(this.playAudio(A),this[A]=!0,this.correctChoice=!0,setTimeout((()=>{this.resetState(),this.correctChoice=!1}),400),setTimeout((()=>{this.sequenceToGuess.shift(),0===this.sequenceToGuess.length&&this.goToNextLevel()}),1e3)):alert(`Вы проиграли! ${this.score}`)},startSequence(A){this[A]=!0,this.playAudio(A),setTimeout((()=>{this.resetState(),this.sequenceToGuess.shift(),0!==this.sequenceToGuess.length?setTimeout((()=>{this.startSequence(this.sequenceToGuess[0])}),this.difficulty):this.sequenceToGuess=[...this.sequence]}),300)}},computed:{score(){const A=this.sequence.length-1;return A<0?"Счет : 0":`Счет : ${A}`}}},u=c,a=e(1001),r=(0,a.Z)(u,C,i,!1,null,null,null),h=r.exports;g.ZP.config.productionTip=!1,g.ZP.config.devtools=!0,new g.ZP({render:A=>A(h)}).$mount("#app")}},t={};function e(g){var C=t[g];if(void 0!==C)return C.exports;var i=t[g]={exports:{}};return A[g].call(i.exports,i,i.exports,e),i.exports}e.m=A,function(){var A=[];e.O=function(t,g,C,i){if(!g){var I=1/0;for(c=0;c<A.length;c++){g=A[c][0],C=A[c][1],i=A[c][2];for(var o=!0,s=0;s<g.length;s++)(!1&i||I>=i)&&Object.keys(e.O).every((function(A){return e.O[A](g[s])}))?g.splice(s--,1):(o=!1,i<I&&(I=i));if(o){A.splice(c--,1);var n=C();void 0!==n&&(t=n)}}return t}i=i||0;for(var c=A.length;c>0&&A[c-1][2]>i;c--)A[c]=A[c-1];A[c]=[g,C,i]}}(),function(){e.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return e.d(t,{a:t}),t}}(),function(){e.d=function(A,t){for(var g in t)e.o(t,g)&&!e.o(A,g)&&Object.defineProperty(A,g,{enumerable:!0,get:t[g]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)}}(),function(){var A={143:0};e.O.j=function(t){return 0===A[t]};var t=function(t,g){var C,i,I=g[0],o=g[1],s=g[2],n=0;if(I.some((function(t){return 0!==A[t]}))){for(C in o)e.o(o,C)&&(e.m[C]=o[C]);if(s)var c=s(e)}for(t&&t(g);n<I.length;n++)i=I[n],e.o(A,i)&&A[i]&&A[i][0](),A[i]=0;return e.O(c)},g=self["webpackChunkvue_simon"]=self["webpackChunkvue_simon"]||[];g.forEach(t.bind(null,0)),g.push=t.bind(null,g.push.bind(g))}();var g=e.O(void 0,[998],(function(){return e(8495)}));g=e.O(g)})();
//# sourceMappingURL=app.8ab81cd9.js.map