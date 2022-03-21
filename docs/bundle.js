(()=>{"use strict";function e(e,t,r,n,a,c,i){try{var u=e[c](i),o=u.value}catch(e){return void r(e)}u.done?t(o):Promise.resolve(o).then(n,a)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(a,c){var i=t.apply(r,n);function u(t){e(i,a,c,u,o,"next",t)}function o(t){e(i,a,c,u,o,"throw",t)}u(void 0)}))}}var r=function(){var e=t(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,axios.get("https://api-bsale-server.herokuapp.com/api/v1/products?name=".concat(t));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,axios.get("https://api-bsale-server.herokuapp.com/api/v1/products");case 8:e.t0=e.sent;case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(){var e=t(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("https://api-bsale-server.herokuapp.com/api/v1/products?page=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=t(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("https://api-bsale-server.herokuapp.com/api/v1/categories/".concat(t,"/products"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=t(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("https://api-bsale-server.herokuapp.com/api/v1/categories");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP",minimumFractionDigits:0}),u=function(e){var t=document.getElementById("product-list");t.innerHTML="",e.forEach((function(e){var r=""!==e.url_image&&null!==e.url_image?e.url_image:"https://via.placeholder.com/200x200",n=document.createElement("div");n.classList.add("col-md-4"),n.classList.add("mt-2"),n.innerHTML+='\n        <div class="card"">            \n        <img src="'.concat(r,'" class="card-img-top img-fluid" alt="imagen producto">                            \n            <div class="card-body">            \n                <h5 class="card-title">').concat(e.name,'</h5>\n                <p class="card-text">').concat(i.format(e.price),'</p>\n                <a href="#" class="btn btn-primary">Añadir al Carro</a>\n            </div>\n        </div>            \n    '),t.appendChild(n)}))},o=function(e){var t=document.getElementById("categories-list");t.innerHTML="",e.forEach((function(e){var r=document.createElement("li");r.classList.add("nav-item"),r.innerHTML+='\n        <a class="nav-link active" aria-current="page" href="#" id="'.concat(e.id,'">').concat(e.name.toUpperCase(),"</a>\n        "),t.appendChild(r)}))},s=function(e,t){var r=document.getElementById("pagination");r.innerHTML="";for(var n=1;n<=t;n++){var a=document.createElement("li");a.classList.add("page-item");var c=document.createElement("a");c.setAttribute("href","#"),c.classList.add("page-link"),c.innerText=n,a.appendChild(c),r.appendChild(a),n===e&&c.classList.add("disabled")}};function p(e,t,r,n,a,c,i){try{var u=e[c](i),o=u.value}catch(e){return void r(e)}u.done?t(o):Promise.resolve(o).then(n,a)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var c=e.apply(t,r);function i(e){p(c,n,a,i,u,"next",e)}function u(e){p(c,n,a,i,u,"throw",e)}i(void 0)}))}}var l=function(){var e=d(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("input-search").value,e.next=3,r(t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a.products);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=d(regeneratorRuntime.mark((function e(){var t,i,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return t=e.sent,i=t.data,console.log(i),e.next=7,c();case 7:p=e.sent,u(i.products),o(p),s(i.current,i.pages),document.getElementById("btn-search-product").addEventListener("click",function(){var e=d(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l();case 3:r=e.sent,u(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),document.getElementById("categories-list").addEventListener("click",function(){var e=d(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("a"!==t.target.localName){e.next=8;break}return r=t.target.id,e.next=5,a(r);case 5:n=e.sent,u(n.products),s(n.current,n.pages);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),document.getElementById("pagination").addEventListener("click",function(){var e=d(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"a"!==t.target.localName){e.next=10;break}return r=t.target.innerText,e.next=6,n(r);case 6:a=e.sent,console.log(a),u(a.products),s(a.current,a.pages);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();window.addEventListener("DOMContentLoaded",function(){var e=d(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})();