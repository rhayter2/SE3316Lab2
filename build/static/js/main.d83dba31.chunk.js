(this.webpackJsonpconnect4=this.webpackJsonpconnect4||[]).push([[0],{14:function(e,t,a){},9:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(5),s=a(2),c=a(8),i=a(7),o=a(1),l=a.n(o),u=a(6),h=a.n(u),f=(a(14),a(0)),b=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={turn1:!0,board:[],end:!1,message:""},n.placePeice=n.placePeice.bind(Object(s.a)(n)),n}return Object(n.a)(a,[{key:"togglePlayer",value:function(){this.setState({turn1:!this.state.turn1})}},{key:"createBoard",value:function(){for(var e=[],t=0;t<6;t++){for(var a=[],r=0;r<7;r++)a.push(null);e.push(a)}this.setState({board:e,turn1:!0,end:!1,message:""})}},{key:"placePeice",value:function(e){if(this.state.end)this.setState({message:"Game Over, Please Restart"});else{for(var t=this.state.board,a=5;a>=0;a--)if(!t[a][e]){this.state.turn1?t[a][e]=1:t[a][e]=2;break}var r=this.checkVertical(t)||this.checkHorizontal(t)||this.checkDiagonalRight(t)||this.checkDiagonalLeft(t)||this.checkTie(t);1===r?(this.setState({board:t}),this.setState({end:!0}),this.setState({message:"red wins"})):2===r?(this.setState({board:t}),this.setState({end:!0}),this.setState({message:"yellow wins"})):"tie"===r?(this.setState({board:t}),this.setState({end:!0}),this.setState({message:"tie"})):(this.setState({board:t}),this.togglePlayer())}}},{key:"checkVertical",value:function(e){for(var t=3;t<6;t++)for(var a=0;a<7;a++)if(e[t][a]&&e[t][a]===e[t-1][a]&&e[t][a]===e[t-2][a]&&e[t][a]===e[t-3][a])return e[t][a]}},{key:"checkHorizontal",value:function(e){for(var t=0;t<6;t++)for(var a=0;a<4;a++)if(e[t][a]&&e[t][a]===e[t][a+1]&&e[t][a]===e[t][a+2]&&e[t][a]===e[t][a+3])return e[t][a]}},{key:"checkDiagonalRight",value:function(e){for(var t=3;t<6;t++)for(var a=0;a<4;a++)if(e[t][a]&&e[t][a]===e[t-1][a+1]&&e[t][a]===e[t-2][a+2]&&e[t][a]===e[t-3][a+3])return e[t][a]}},{key:"checkDiagonalLeft",value:function(e){for(var t=3;t<6;t++)for(var a=3;a<7;a++)if(e[t][a]&&e[t][a]===e[t-1][a-1]&&e[t][a]===e[t-2][a-2]&&e[t][a]===e[t-3][a-3])return e[t][a]}},{key:"checkTie",value:function(e){for(var t=0;t<6;t++)for(var a=0;a<7;a++)if(null===e[t][a])return null;return"tie"}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{className:"button",onClick:function(){e.createBoard()},children:"New Game"}),Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{}),Object(f.jsx)("tbody",{children:this.state.board.map((function(t,a){return Object(f.jsx)(d,{row:t,call:e.placePeice},a)}))})]}),Object(f.jsx)("label",{className:"message",children:this.state.message})]})}}]),a}(l.a.Component),d=function(e){var t=e.row,a=e.call;return Object(f.jsx)("tr",{children:t.map((function(e,t){return Object(f.jsx)(v,{value:e,column:t,call:a},t)}))})},v=function(e){var t=e.value,a=e.column,r=e.call,n="white";return 1===t?n="red":2===t&&(n="yellow"),Object(f.jsx)("td",{children:Object(f.jsx)("button",{className:"boardCell",onClick:function(){r(a)},children:Object(f.jsx)("button",{className:n})})})};h.a.render(Object(f.jsx)("div",{children:Object(f.jsx)(b,{})}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.d83dba31.chunk.js.map