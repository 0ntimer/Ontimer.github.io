(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4],{282:function(t,e,n){"use strict";n.r(e);var o={props:["tools"]},l=n(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col gap-2"},t._l(t.tools,(function(t){return n("tool-item",{key:t.id,attrs:{tool:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ToolItem:n(285).default})},332:function(t,e,n){"use strict";n.r(e);var o=n(10),l=(n(64),n(21),n(146),n(203),n(84),n(283)),r={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,m,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,(o=n.params.tag.split("-")).splice(0,1),o.splice(-1,1),o.splice(-1,1),r=o.join("-"),c=o.join(" "),e.next=9,l.a.from("tools").select("*").contains("tags",[r]);case 9:return m=e.sent,data=m.data,e.abrupt("return",{tools:data,tag:r,tagName:c});case 12:case"end":return e.stop()}}),e)})))()}},c=n(35),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen pb-96 max-w-4xl mx-auto"},[n("h1",{staticClass:"text-4xl m-4 mb-8 font-medium"},[t._v("Best "+t._s(t.tagName)+" developer tools")]),t._v(" "),n("div",{staticClass:"px-4"},[n("tool-list",{attrs:{tools:t.tools}})],1),t._v(" "),n("div",{staticClass:"text-center p-4 mt-12 text-blue-400"},[n("router-link",{attrs:{to:"/"}},[t._v("Back to home")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ToolList:n(282).default})}}]);