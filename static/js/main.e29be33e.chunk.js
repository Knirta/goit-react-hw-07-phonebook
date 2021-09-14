(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{56:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContacts",(function(){return g})),n.d(c,"addContact",(function(){return y})),n.d(c,"deleteContact",(function(){return S}));var a={};n.r(a),n.d(a,"getContacts",(function(){return q})),n.d(a,"getFilter",(function(){return E})),n.d(a,"getFilteredItems",(function(){return N}));var r=n(0),o=n.n(r),s=n(10),u=n.n(s),i=n(4),d=n(18),l=n(7),b=n.n(l),j=n(13),f=n(2),O={fetchContactsRequest:Object(f.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:Object(f.b)("contacts/fetchContactsSuccess"),fetchContactsError:Object(f.b)("contacts/fetchContactsError"),addContactRequest:Object(f.b)("contacts/addContactRequest"),addContactSuccess:Object(f.b)("contacts/addContactSuccess"),addContactError:Object(f.b)("contacts/addContactError"),deleteContactRequest:Object(f.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(f.b)("contacts/deleteContactSuccess"),deleteContactError:Object(f.b)("contacts/deleteContactError"),changeFilter:Object(f.b)("contacts/changeFilter")},h=n(9),C=n.n(h);C.a.defaults.baseURL="http://localhost:4040";var m,p,x,v={fetchContacts:function(){return C.a.get("/contacts")},addContact:function(t){return C.a.post("/contacts",t)},deleteContact:function(t){return C.a.delete("/contacts/".concat(t))}},g=function(){return function(){var t=Object(j.a)(b.a.mark((function t(e){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(O.fetchContactsRequest()),t.prev=1,t.next=4,v.fetchContacts();case 4:n=t.sent,c=n.data,e(O.fetchContactsSuccess(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(O.fetchContactsError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},y=function(t){var e=t.name,n=t.number;return function(){var t=Object(j.a)(b.a.mark((function t(c){var a,r,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(O.addContactRequest()),t.prev=2,t.next=5,v.addContact(a);case 5:r=t.sent,o=r.data,c(O.addContactSuccess(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(O.addContactError(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},S=function(t){return function(){var e=Object(j.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O.deleteContactRequest()),e.prev=1,e.next=4,v.deleteContact(t);case 4:n(O.deleteContactSuccess(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(O.fetchContactsError(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},F=n(11),q=function(t){return t.contacts.items},E=function(t){return t.contacts.filter},N=Object(F.a)([q,E],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),R=(n(56),n(1)),_=function(){var t=Object(r.useState)(""),e=Object(d.a)(t,2),n=e[0],o=e[1],s=Object(r.useState)(""),u=Object(d.a)(s,2),l=u[0],b=u[1],j=Object(i.c)(a.getContacts),f=Object(i.b)(),O=function(){o(""),b("")},h=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":b(c);break;default:return}};return Object(R.jsxs)("form",{className:"Form",onSubmit:function(t){if(t.preventDefault(),j.find((function(t){return t.name===n})))return alert(n+" is already in contacts"),void O();f(c.addContact({name:n,number:l})),O()},children:[Object(R.jsxs)("label",{children:[Object(R.jsx)("p",{className:"Form__label",children:"Name:"}),Object(R.jsx)("input",{className:"Form__input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:h,value:n})]}),Object(R.jsxs)("label",{children:[Object(R.jsx)("p",{className:"Form__label",children:"Number:"}),Object(R.jsx)("input",{className:"Form__input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:h})]}),Object(R.jsx)("button",{className:"Form__button",type:"submit",children:"Add contact"})]})},k=(n(58),function(){var t=Object(i.c)(a.getFilter),e=Object(i.b)();return Object(R.jsxs)("label",{children:[Object(R.jsx)("p",{className:"Filter__title",children:"Find contacts by name"}),Object(R.jsx)("input",{className:"Filter__input",type:"text",name:"filter",value:t,onChange:function(t){return e(O.changeFilter(t.currentTarget.value))}})]})}),w=(n(59),function(t){var e=t.contact,n=e.id,a=e.name,r=e.number,o=Object(i.b)();return Object(R.jsxs)("li",{className:"Item",children:[Object(R.jsxs)("p",{children:[a,": ",r]}),Object(R.jsx)("button",{className:"Item__button",type:"button",onClick:function(){return o(c.deleteContact(n))},children:"Delete"})]})}),A=(n(60),function(){var t=Object(i.c)(a.getFilteredItems);return Object(R.jsx)("ul",{className:"ContactList",children:t.map((function(t){return Object(R.jsx)(w,{contact:t},t.id)}))})}),I=(n(61),function(t){var e=t.children;return Object(R.jsx)("div",{className:"Container",children:e})}),L=(n(62),function(){var t=Object(i.b)(),e=Object(i.c)(a.getContacts);return Object(r.useEffect)((function(){t(c.fetchContacts())}),[t]),Object(R.jsxs)(I,{children:[Object(R.jsx)("h1",{className:"title",children:"Phonebook"}),Object(R.jsx)(_,{}),Object(R.jsx)("h2",{className:"title",children:"Contacts"}),e.length>0?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(k,{}),Object(R.jsx)(A,{})]}):Object(R.jsx)("p",{children:"There are no contacts yet..."})]})}),z=n(3),J=n(27),T=n(6),Z=Object(f.c)([],(m={},Object(z.a)(m,O.fetchContactsSuccess,(function(t,e){return e.payload})),Object(z.a)(m,O.addContactSuccess,(function(t,e){return[e.payload].concat(Object(J.a)(t))})),Object(z.a)(m,O.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),m)),B=Object(f.c)("",Object(z.a)({},O.changeFilter,(function(t,e){return e.payload}))),D=Object(f.c)(!1,(p={},Object(z.a)(p,O.fetchContactsRequest,(function(){return!0})),Object(z.a)(p,O.fetchContactsSuccess,(function(){return!1})),Object(z.a)(p,O.fetchContactsError,(function(){return!1})),Object(z.a)(p,O.addContactRequest,(function(){return!0})),Object(z.a)(p,O.addContactSuccess,(function(){return!1})),Object(z.a)(p,O.addContactError,(function(){return!1})),Object(z.a)(p,O.deleteContactRequest,(function(){return!0})),Object(z.a)(p,O.deleteContactSuccess,(function(){return!1})),Object(z.a)(p,O.deleteContactError,(function(){return!1})),p)),M=Object(f.c)(null,(x={},Object(z.a)(x,O.fetchContactsError,(function(t,e){return e.payload})),Object(z.a)(x,O.fetchContactsRequest,(function(){return null})),Object(z.a)(x,O.addContactsError,(function(t,e){return e.payload})),Object(z.a)(x,O.addContactsRequest,(function(){return null})),Object(z.a)(x,O.deleteContactsError,(function(t,e){return e.payload})),Object(z.a)(x,O.deleteContactsRequest,(function(){return null})),x)),P=Object(T.b)({items:Z,filter:B,isLoading:D,error:M}),U=Object(f.d)(),$=Object(f.a)({reducer:{contacts:P},middleware:U,devtools:!1});n(63),n(64);u.a.render(Object(R.jsx)(o.a.StrictMode,{children:Object(R.jsx)(i.a,{store:$,children:Object(R.jsx)(L,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.e29be33e.chunk.js.map