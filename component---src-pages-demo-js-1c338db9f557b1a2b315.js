(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{FnBB:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t("MX0m"),n=t.n(r),l=t("q1tI"),s=t.n(l);function i(e){var a=e.height;return s.a.createElement("div",{className:n.a.dynamic([["1329640638",[a]]])+" space-divider"},s.a.createElement(n.a,{id:"1329640638",dynamic:[a]},[".space-divider.__jsx-style-dynamic-selector{content:' ';height:"+a+"px;}"]))}},fXcs:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var r=t("/S4K"),n=t("MX0m"),l=t.n(n),s=t("kD0k"),i=t.n(s),o=t("q1tI"),c=t.n(o),m=t("KYPV"),u=t("UGp+"),d=t("/P0+"),p=t("VHpo"),y=t("t0wy"),h=t("5Wrh"),b=t("WlAH"),_=t("e8Tc"),f=t("lWR1");function v(){var e=Object(o.useState)(null),a=e[0],t=e[1],n=Object(o.useState)(!1),s=n[0],v=n[1],g=Object(o.useCallback)(function(){var e=Object(r.a)(i.a.mark((function e(a,r){var n,l,s,o,c,m,u,d,p,y,h,b,g,x,j,E;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.setSubmitting,l=r.resetForm,e.prev=1,t(null),s=a.name,o=a.email,c=a.phone,m=a.company,u=a.website,d=a.job_title,p=a.industry,y=a.annual_revenue,h=a.accounting_platform,b=a.customer_purchase_frequency,g=a.offer_net_terms,x=a.ecommerce_platform,a.campaign=Object(f.a)(),Object(_.a)({email:o,phone:c,name:s,company:{name:m},website:u,job_title:d,industry:p,annual_revenue:y,accounting_platform:h,customer_purchase_frequency:b,offer_net_terms:g,ecommerce_platform:x}),Object(_.b)("Contact form submitted",{name:s,email:o,phone:c,company:m,website:u,context:{campaign:Object(f.a)()},job_title:d,industry:p,annual_revenue:y,accounting_platform:h,customer_purchase_frequency:b,offer_net_terms:g,ecommerce_platform:x}),j="localhost"===window.location.hostname?"http://localhost:2222":"https://app.resolvepay.com",e.next=10,fetch(j+"/api/web/contact",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()}));case 10:(E=e.sent)&&E.success&&(n(!1),l(),v(!0)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),n(!1),t(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(a,t){return e.apply(this,arguments)}}(),[]),x=Object(m.a)({initialValues:{name:"",email:"",phone:"",company:"",website:"",job_title:"",industry:"",annual_revenue:"",accounting_platform:"",customer_purchase_frequency:"",offer_net_terms:"",ecommerce_platform:""},validationSchema:Object(u.a)().shape({name:Object(u.b)().trim().required("Required"),email:Object(u.b)().trim().lowercase().email("Invalid email").required("Required"),phone:Object(u.b)().trim().required("Required"),company:Object(u.b)().trim().required("Required"),website:Object(u.b)().trim().lowercase().required("Required"),job_title:Object(u.b)().trim().required("Required"),industry:Object(u.b)().required("Required"),annual_revenue:Object(u.b)().required("Required"),accounting_platform:Object(u.b)().required("Required"),customer_purchase_frequency:Object(u.b)().required("Required"),offer_net_terms:Object(u.b)().required("Required"),ecommerce_platform:Object(u.b)()}),onSubmit:g});return c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])},s?c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])},c.a.createElement("p",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" contact_sales__subtitle"},"Thanks! We'll get back to you soon")):c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])},c.a.createElement("p",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" contact_sales__subtitle"},"Tell us how to reach you and let's discuss how Resolve can grow your b2b business."),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" contact_sales_form__form-container"},c.a.createElement("form",{onSubmit:x.handleSubmit,className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])},c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-row clearfix"},c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(d.a,{id:"name",name:"name",error:x.errors.name,value:x.values.name,onChange:x.handleChange,onBlur:x.handleBlur,label:"Full name"})),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(d.a,{id:"company",name:"company",type:"text",error:x.errors.company,value:x.values.company,onChange:x.handleChange,onBlur:x.handleBlur,label:"Company"}))),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-row clearfix"},c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(d.a,{id:"email",name:"email",error:x.errors.email,value:x.values.email,onChange:x.handleChange,onBlur:x.handleBlur,label:"Work email"})),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(d.a,{id:"phone",name:"phone",type:"tel",error:x.errors.phone,value:x.values.phone,onChange:x.handleChange,onBlur:x.handleBlur,label:"Phone"}))),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-row clearfix"},c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(d.a,{id:"job_title",name:"job_title",error:x.errors.job_title,value:x.values.job_title,onChange:x.handleChange,onBlur:x.handleBlur,label:"Job title"})),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(d.a,{id:"website",name:"website",type:"text",error:x.errors.website,value:x.values.website,onChange:x.handleChange,onBlur:x.handleBlur,label:"Website"}))),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-row clearfix"},c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(p.a,{id:"industry",name:"industry",error:x.errors.industry,value:x.values.industry,onChange:x.handleChange,onBlur:x.handleBlur,label:"Industry",options:["Agriculture, Forestry, and Fishing","Auto","Construction","Education","Electronics","Fashion & Beauty","Financial Services","Fitness & Sporting Goods","Furniture","Healthcare","Industrial Tools & Equipment","Maintenance, Repair, and Operations (MRO)","Retail","Restaurant","Professional Services","Software","Travel","Transportation","Other"]})),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(p.a,{id:"customer_purchase_frequency",name:"customer_purchase_frequency",error:x.errors.customer_purchase_frequency,value:x.values.customer_purchase_frequency,onChange:x.handleChange,onBlur:x.handleBlur,label:"Customer purchase frequency",options:["Monthly","Quarterly","Annually","Once"]}))),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-row clearfix"},c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(p.a,{id:"annual_revenue",name:"annual_revenue",error:x.errors.annual_revenue,value:x.values.annual_revenue,onChange:x.handleChange,onBlur:x.handleBlur,label:"Annual B2B revenue",options:["Pre-launch","<$1M","$1M-$5M","$5M-$10M","$10M-$25M",">$25M"]})),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(p.a,{id:"offer_net_terms",name:"offer_net_terms",error:x.errors.offer_net_terms,value:x.values.offer_net_terms,onChange:x.handleChange,onBlur:x.handleBlur,label:"Do you offer net terms?",options:["Not at all","1-25% of b2b revenue","25-50% of b2b revenue",">50% of b2b revenue"]}))),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-row clearfix"},c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(p.a,{id:"accounting_platform",name:"accounting_platform",placeholder:"Accounting platform",error:x.errors.accounting_platform,value:x.values.accounting_platform,onChange:x.handleChange,onBlur:x.handleBlur,label:"Accounting platform",options:["Freshbooks","Microsoft Dynamics 365","Netsuite","Odoo","Oracle","Quickbooks Desktop","Quickbooks Enterprise","Quickbooks Online","Sage","SAP","Wave","Xero","Zoho","Other"]})),c.a.createElement("div",{className:"jsx-2363263274 "+l.a.dynamic([["591290344",[b.b.halyardDisplay]]])+" resolve-col"},c.a.createElement(p.a,{id:"ecommerce_platform",name:"ecommerce_platform",placeholder:"E-commerce platform",error:x.errors.ecommerce_platform,value:x.values.ecommerce_platform,onChange:x.handleChange,onBlur:x.handleBlur,label:"E-commerce platform",options:["3dCart","BigCommerce","Custom","Hybris","Insite","Magento 1","Magento 2","Netsuite","None","NuOrder","Odoo","Oro Commerce","Shopify","Shopify Plus","SquareSpace","Volusion","WooCommerce","Other"]}))),c.a.createElement(y.a,{error:a&&"There was an error submitting your request. Please try again."}),c.a.createElement(h.a,{type:"submit",primary:!0,disabled:x.isSubmitting,className:"contact_sales_form__submit"},"Submit")))),c.a.createElement(l.a,{id:"591290344",dynamic:[b.b.halyardDisplay]},[".clearfix.__jsx-style-dynamic-selector::after{content:'';clear:both;display:table;}",".contact_sales__subtitle.__jsx-style-dynamic-selector{font-family:"+b.b.halyardDisplay+";font-size:22px;line-height:1.64;-webkit-letter-spacing:0.8px;-moz-letter-spacing:0.8px;-ms-letter-spacing:0.8px;letter-spacing:0.8px;margin:20px 0 40px;text-align:center;}",".resolve-row.__jsx-style-dynamic-selector{margin-left:-15px;margin-right:-15px;}",".resolve-col.__jsx-style-dynamic-selector{float:left;width:50%;padding:0 15px;}","@media (max-width:767px){.resolve-col.__jsx-style-dynamic-selector{float:none;width:100%;}}"]),c.a.createElement(l.a,{id:"2363263274"},[".contact_sales_form__submit{width:100%;}",".contact_sales__container *{box-sizing:border-box;}"]))}},vX0t:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var r=t("MX0m"),n=t.n(r),l=t("q1tI"),s=t.n(l),i=t("+7A0"),o=t("7oih"),c=t("VUD3"),m=t("fXcs"),u=t("JwsL"),d=t("ztx+"),p=t("FnBB"),y=t("WlAH"),h=t("UiNE");function b(e){var a=e.data,t=Object(h.a)(a.companies,(function(e){return e.image.fluid}));return s.a.createElement(o.a,null,s.a.createElement(i.GatsbySeo,{title:"Contact sales"}),s.a.createElement(c.a,null,s.a.createElement("div",{className:n.a.dynamic([["3597279418",[y.b.halyardDisplay]]])+" contact_sales__container"},s.a.createElement("div",{className:n.a.dynamic([["3597279418",[y.b.halyardDisplay]]])+" contact_sales__title"},"See Resolve in action"),s.a.createElement(m.a,null)),s.a.createElement(p.a,{height:100}),s.a.createElement(d.a,{pretitle:"Trusted by innovative companies",data:[{image:t["Vice Golf"],name:"Vice Golf",offsetTop:0},{image:t.Article,name:"Article"},{image:t["OnDemand Tires"],name:"OnDemand Tires",offsetTop:0},{image:t["Archipelago Lighting"],name:"Archipelago Lighting",offsetTop:0},{image:t["Linus Bike"],name:"Linus Bike",offsetTop:0},{image:t.QuietKat,name:"QuietKat",offsetTop:0}]})),s.a.createElement(u.a,{darkSkin:!0}),s.a.createElement(n.a,{id:"3597279418",dynamic:[y.b.halyardDisplay]},[".contact_sales__container.__jsx-style-dynamic-selector{max-width:600px;width:100%;margin:50px auto;}",".contact_sales__container.__jsx-style-dynamic-selector *.__jsx-style-dynamic-selector{box-sizing:border-box;}",".contact_sales__title.__jsx-style-dynamic-selector{font-family:"+y.b.halyardDisplay+";font-size:28px;font-weight:600;line-height:1.43;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;text-align:center;}"]))}}}]);
//# sourceMappingURL=component---src-pages-demo-js-1c338db9f557b1a2b315.js.map