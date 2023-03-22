"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[241],{2241:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,i=t(1413),o=t(2791),a=t(168),u=t(7402),c=u.Z.form(r||(r=(0,a.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 0;\n\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,\n    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n  label {\n    font-weight: 500;\n  }\n  input {\n    width: 300px;\n    padding: 5px;\n    margin-bottom: 20px;\n    font-size: 20px;\n    \n  }\n   button{\n        width: 100px;\n        padding: 5px 0;\n        cursor: pointer;\n        font-size: 15px;\n        border: none;\n        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\n         rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, \n         rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n        background-color: transparent;\n        border-radius: 5px;\n        :hover, :focus {\n            background-color: rgb(155, 164, 165);\n           \n        }\n    }\n  }\n"]))),s=t(9434),p=t(3634),l="NOT_FOUND";var d=function(n,e){return n===e};function f(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?d:r,o=t.maxSize,a=void 0===o?1:o,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),s=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:l},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return l}return{get:r,put:function(e,i){r(e)===l&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function p(){var e=s.get(arguments);if(e===l){if(e=n.apply(null,arguments),u){var t=s.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function x(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function h(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,p=s.memoizeOptions,l=void 0===p?t:p,d=Array.isArray(l)?l:[l],f=x(r),h=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:f,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return i}var m,g,v,b,y,j=h(f),w=function(n){return n.contacts},k=function(n){return n.filter},C=j([w,k],(function(n,e){var t=e.toLowerCase();return n.items.filter((function(n){return n.name.toLowerCase().includes(t)})).sort((function(n,e){return n.name.localeCompare(e.name)}))})),Z=t(887),L=t(184),E=function(){var n=(0,Z.cI)({mode:"onChange"}),e=n.register,t=n.formState,r=t.errors,o=t.isValid,a=n.handleSubmit,u=n.reset,l=n.getValues,d=(0,s.v9)(w),f=(0,s.I0)();return(0,L.jsxs)(c,{onSubmit:a((function(n){var e=l("name"),t=l("number");d.items.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}))||d.items.some((function(n){return n.number.toLowerCase()===t.toLowerCase()}))?alert("<".concat(e,"> or <").concat(t,"> is already in contacts")):(f((0,p.uK)(n)),u())})),children:[(0,L.jsxs)("label",{htmlFor:"",children:["Name:",(0,L.jsx)("input",(0,i.Z)((0,i.Z)({},e("name",{required:"this field is required!",minLength:{value:3,message:"length must be at least 3 characters!"}})),{},{type:"name"}))]}),(0,L.jsx)("div",{children:(null===r||void 0===r?void 0:r.name)&&(0,L.jsx)("p",{children:r.name.message||"Error!"})}),(0,L.jsxs)("label",{htmlFor:"",children:["Number:",(0,L.jsx)("input",(0,i.Z)((0,i.Z)({},e("number",{required:"this field is required!",minLength:{min:3,message:"length must be at least 3 characters!"}})),{},{type:"tel"}))]}),(0,L.jsx)("input",{type:"submit",disabled:!o})]})},q=u.Z.li(m||(m=(0,a.Z)(["\n  display: flex;\n  width: 1500px;\n  padding: 10px 10px;\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,\n    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;\n  justify-content: space-between;\n  span {\n  }\n  button {\n    border-radius: 5px;\n    cursor: pointer;\n    border: none;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\n      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\n      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n    :hover,\n    :focus {\n      background-color: rgb(218, 70, 70);\n    }\n  }\n"]))),F=function(n){var e=n.id,t=n.name,r=n.number,i=(0,s.I0)();return(0,L.jsxs)(q,{children:[(0,L.jsxs)("span",{children:[t," : ",r]}),(0,L.jsx)("button",{type:"button",onClick:function(){return n=e,void i((0,p.GK)(n));var n},children:"Delete contact"})]})},z=t(1362),A=t(4808),I=u.Z.input(g||(g=(0,a.Z)(["\n  width: 200px;\n  padding: 4px 8px;\n"]))),S=u.Z.div(v||(v=(0,a.Z)(["\n  padding-top: 20px;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n"]))),N=function(){var n=(0,s.I0)(),e=(0,s.v9)(w)||[],t=e.items,r=e.isLoading,i=(0,s.v9)(k);return(0,L.jsxs)("div",{children:[(0,L.jsxs)(S,{children:[r&&(0,L.jsx)(z.a,{}),(0,L.jsx)("h2",{children:"Contacts"})]}),t.length?(0,L.jsx)(I,{name:"name",type:"text",placeholder:"find contacts by name",value:i,onChange:function(e){n((0,A.sP)(e.currentTarget.value))}}):(0,L.jsx)("h1",{children:"No contacts added"})]})},O=u.Z.ul(b||(b=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n  padding: 0px 0;\n  gap: 10px;\n"]))),_=function(){var n=(0,s.I0)(),e=(0,s.v9)(C);return(0,o.useEffect)((function(){n((0,p.yF)())}),[n]),(0,L.jsx)("div",{children:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(N,{}),(0,L.jsx)(O,{children:e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,L.jsx)(F,{id:e,name:t,number:r},e)}))})]})})},R=u.Z.section(y||(y=(0,a.Z)(["\n  text-align: center;\n"])));function D(){return(0,L.jsxs)("div",{children:[(0,L.jsxs)(R,{children:[(0,L.jsx)("h1",{children:"Phonebook"}),(0,L.jsx)(E,{})]}),(0,L.jsx)(R,{children:(0,L.jsx)(_,{})})]})}}}]);
//# sourceMappingURL=241.c5dad45c.chunk.js.map