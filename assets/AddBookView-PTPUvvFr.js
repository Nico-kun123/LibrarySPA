import{d as b,b as h,r as B,g,c as I,a as S,_ as y,e as N,o as F,f as E,h as c,i as k,p as D,j as w,k as A}from"./index-PzNDYobM.js";var f={exports:{}},_={};/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-isbn
 * @version 2.4.0
 */_.isbn=function(){return{validate:function(e){if(e.value==="")return{meta:{type:null},valid:!0};var o;switch(!0){case/^\d{9}[\dX]$/.test(e.value):case(e.value.length===13&&/^(\d+)-(\d+)-(\d+)-([\dX])$/.test(e.value)):case(e.value.length===13&&/^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e.value)):o="ISBN10";break;case/^(978|979)\d{9}[\dX]$/.test(e.value):case(e.value.length===17&&/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(e.value)):case(e.value.length===17&&/^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e.value)):o="ISBN13";break;default:return{meta:{type:null},valid:!1}}var t,s,l=e.value.replace(/[^0-9X]/gi,"").split(""),a=l.length,u=0;switch(o){case"ISBN10":for(u=0,t=0;t<a-1;t++)u+=parseInt(l[t],10)*(10-t);return(s=11-u%11)===11?s=0:s===10&&(s="X"),{meta:{type:o},valid:"".concat(s)===l[a-1]};case"ISBN13":for(u=0,t=0;t<a-1;t++)u+=t%2==0?parseInt(l[t],10):3*parseInt(l[t],10);return(s=10-u%10)===10&&(s="0"),{meta:{type:o},valid:"".concat(s)===l[a-1]}}}}};f.exports=_;var $=f.exports;const x=b({name:"AddBookView",setup(){const e=async a=>{a.preventDefault();const u=a.target.name.value,r=a.target.authors.value.split(",");let i=parseFloat(a.target.year.value),n=parseFloat(a.target.rating.value),d=a.target.ISBN.value;if(r.forEach((p,v)=>{r[v]=p.trim()}),isNaN(i)&&(i=null),isNaN(n)&&(n=0),d.trim()===""&&(d=null),await t(u,r,i,n,d)){const p={name:u,authors:r,year:i,rating:n,ISBN:d};try{await o(p),l(a.target),alert("Книга успешно добавлена в Firestore!"),B.push("/")}catch(v){alert("Ошибка при добавлении книги в Firestore!"),console.error("Ошибка при добавлении книги в Firestore:",v)}}},o=async a=>{try{const u=g(),r=I(u,"books");await S(r,a)}catch(u){throw new Error(u)}},t=async(a,u,r,i,n)=>a.trim()===""?(alert("❌ Название не может быть пустым!"),!1):a.length>100?(alert("❌ Название не может быть длиннее 100 символов!"),!1):u.some(d=>d.trim()==="")?(alert("❌ Книга должна содержать хотя бы одного автора!"),!1):r&&r<1800?(alert("❌ Год должен быть больше 1800!"),!1):i&&(i<0||i>10)?(alert("❌ Рейтинг должен быть от 0 до 10!"),!1):n&&n.trim()!==""&&!s(n)?(alert("❌ Некорректный ISBN!"),!1):!0,s=a=>{const u=$.isbn().validate({value:a,options:{message:"Неверный формат ISBN-кода!"}});return console.log("ISBN type:",u.meta,`
ISBN is valid: ${u.valid}`),u.valid},l=a=>{a.reset()};return{handleSubmit:e}},components:{booksIcon:h}}),m=e=>(D("data-v-7c72e1ea"),e=e(),w(),e),X={class:"mainfield"},C={class:"mainfield__title"},V=m(()=>c("h1",null,"Создать Книгу",-1)),j=m(()=>c("div",{class:"separator"},null,-1)),T=m(()=>c("p",{class:"mainfield__message"},"*Поля обязательны для заполнения",-1)),q=A('<div class="mainfield__form__group" data-v-7c72e1ea><label for="name" data-v-7c72e1ea>Название книги*</label><input type="text" id="name" name="name" data-v-7c72e1ea></div><div class="mainfield__form__group" data-v-7c72e1ea><label for="authors" data-v-7c72e1ea>Автор(-ы)*</label><input type="text" id="authors" name="authors" data-v-7c72e1ea></div><div class="mainfield__form__group" data-v-7c72e1ea><label for="year" data-v-7c72e1ea>Год публикации</label><input type="number" id="year" name="year" data-v-7c72e1ea></div><div class="mainfield__form__group" data-v-7c72e1ea><label for="rating" data-v-7c72e1ea>Рейтинг</label><input type="string" id="rating" name="rating" data-v-7c72e1ea></div><div class="mainfield__form__group" data-v-7c72e1ea><label for="ISBN" data-v-7c72e1ea>ISBN</label><input type="text" id="ISBN" name="ISBN" data-v-7c72e1ea></div><p data-v-7c72e1ea>Подсказка: Если у книги несколько авторов, то введите их через запятую.</p><button type="submit" data-v-7c72e1ea>Добавить книгу</button>',7),z=[q];function G(e,o,t,s,l,a){const u=N("booksIcon");return F(),E("main",null,[c("div",X,[c("div",C,[k(u),V]),j,T,c("form",{onSubmit:o[0]||(o[0]=(...r)=>e.handleSubmit&&e.handleSubmit(...r)),class:"mainfield__form"},z,32)])])}const J=y(x,[["render",G],["__scopeId","data-v-7c72e1ea"]]);export{J as default};