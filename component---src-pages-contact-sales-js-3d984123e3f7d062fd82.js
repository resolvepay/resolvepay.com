(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"9T8q":function(e,a,l){"use strict";l.r(a),l.d(a,"pageQuery",(function(){return S})),l.d(a,"default",(function(){return R}));var t=l("q1tI"),r=l.n(t),n=l("+7A0"),i=l("7oih"),o=l("VUD3"),s=l("JwsL"),c=l("ztx+"),m=l("FnBB"),u=l("t8Zj"),b=l("/S4K"),d=l("MX0m"),y=l.n(d),h=l("KYPV"),p=l("UGp+"),_=l("YwZP"),f=l("5Wrh"),v=l("/P0+"),g=l("VHpo"),x=l("WlAH"),w=l("e8Tc"),E=l("lWR1"),j=function(){return{hutk:document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$)|^.*$/,"$1")||void 0,pageUri:""+window.location.origin+window.location.pathname,pageName:document.title}},T=[{name:"lead_type__c",value:"Inquiry"},{name:"inquiry_type__c",value:"Web Contact Form"},{name:"leadsource",value:"Inbound"},{name:"lead_source",value:"Web Contact Form"},{name:"lifecyclestage",value:"marketingqualifiedlead"}],N={utm_source:"utm_source_cf_388275__c",utm_medium:"utm_medium_cf_388271__c",utm_campaign:"utm_campaign_cf_388269__c",utm_content:"utm_content_cf_439125__c",utm_term:"utm_term_cf_388278__c",referrer:"referer_url_cf_388277__c",landingPage:"landing_page_url_cf_437468__c"};function O(){var e=Object(t.useState)(!1),a=e[0],l=e[1],n=Object(t.useState)(),i=n[0],o=n[1],s=Object(t.useState)(!1),c=s[0],m=s[1],d=Object(_.useLocation)().state,O=Object(_.useNavigate)();Object(t.useEffect)((function(){(function(){var e=Object(b.a)((function*(){try{var e=yield fetch("https://api.ipstack.com/check?access_key="+{}.GATSBY_IP_STACK_ACCESS_KEY),a=yield e.json();if(!1===a.success)throw a.error;o(a.ip)}catch(l){}}));return function(){return e.apply(this,arguments)}})()()}),[]);var C=(null==d?void 0:d.formIndex)&&!isNaN(null==d?void 0:d.formIndex)?null==d?void 0:d.formIndex:0;Object(t.useEffect)((function(){var e=document.createElement("script");e.src="//js.hsforms.net/forms/v2.js",document.body.appendChild(e),e.addEventListener("load",(function(){window.hbspt&&window.hbspt.forms.create({portalId:"8982602",formId:"0d89c92b-e587-4d33-b702-719e646b7b07",target:"#first-hubspot-form"})}))}),[]);var S=function(){var e=Object(b.a)((function*(e,a){var t,r=a.setSubmitting;l(!1);try{var n=yield fetch("https://api.hsforms.com/submissions/v3/integration/submit/8982602/0d89c92b-e587-4d33-b702-719e646b7b07",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({fields:[{name:"firstname",value:e.firstName},{name:"lastname",value:e.lastName},{name:"email",value:e.email},{name:"phone",value:e.phone},{name:"company",value:e.companyName},{name:"goal",value:e.goal}].concat(T,Object(u.a)((t=Object(E.a)(),Object.keys(t).filter((function(e){return t[e]})).map((function(e){return{name:N[e],value:t[e]}}))))),context:Object.assign({},j(),{ipAddress:i})})}),o=yield n.json();if("error"===o.status)throw o.message;O("",{state:{formIndex:1}}),r(!1),Object(w.a)(e),Object(w.b)("Contact form submitted",Object.assign({},e,{context:{campaign:Object(E.a)()}})),window.hbspt&&!c&&(window.hbspt.forms.create({portalId:"8982602",formId:"af860ba3-c410-47aa-97a1-02f9cba41d57",target:"#second-hubspot-form"}),m(!0))}catch(s){l(!0)}}));return function(a,l){return e.apply(this,arguments)}}(),R=Object(h.a)({initialValues:{firstName:"",lastName:"",email:"",phone:"",companyName:"",goal:""},validationSchema:Object(p.a)().shape({firstName:Object(p.b)().trim().required("Required"),lastName:Object(p.b)().trim().required("Required"),email:Object(p.b)().trim().lowercase().email("Invalid email").required("Required"),phone:Object(p.b)().trim().required("Required"),companyName:Object(p.b)().trim().required("Required"),goal:Object(p.b)().trim().required("Required")}),onSubmit:S}),k=function(){var e=Object(b.a)((function*(e,a){var t=a.setSubmitting;l(!1);try{var r=yield fetch("https://api.hsforms.com/submissions/v3/integration/submit/8982602/af860ba3-c410-47aa-97a1-02f9cba41d57",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({fields:[{name:"email",value:R.values.email},{name:"company_industry",value:e.industry},{name:"annual_b2b_revenue",value:e.revenue},{name:"e_commerce_platform",value:e.eCommercePlatform},{name:"accounting_platform",value:e.accountingPlatform},{name:"customer_purchase_frequency",value:e.customerFrequency},{name:"do_you_offer_net_terms_",value:e.offersTerms},{name:"existing_terms_you_would_like_managed",value:e.existingTerms}].concat(T),context:Object.assign({},j(),{ipAddress:i})})}),n=yield r.json();if("error"===n.status)throw n.message;O("",{state:{formIndex:2}}),t(!1),Object(w.b)("KYB form submitted",Object.assign({},e,{goal:R.values.goal,context:{campaign:Object(E.a)()}}))}catch(o){l(!0)}}));return function(a,l){return e.apply(this,arguments)}}(),B="Offer Net Terms for E-commerce"===R.values.goal,q="Manage my existing Net Terms"===R.values.goal,D=Object(h.a)({initialValues:{industry:"",revenue:"",eCommercePlatform:"",accountingPlatform:"",customerFrequency:"",offersTerms:"",existingTerms:""},validationSchema:Object(p.a)().shape({industry:Object(p.b)().trim().required("Required"),revenue:Object(p.b)().trim().required("Required"),eCommercePlatform:Object(p.b)().trim(),accountingPlatform:Object(p.b)().trim().required("Required"),customerFrequency:Object(p.b)().trim().required("Required")}),validate:function(e){var a={};return!e.existingTerms&&q&&(a.existingTerms="Required"),!e.offersTerms&&B&&(a.offersTerms="Required"),a},onSubmit:k});return Object(t.useEffect)((function(){0===C||R.values.email||O("",{state:{formIndex:0}})})),r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__container "+(2===C?"contact_sales__small-container":"")},a?r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales_error"},"Something went wrong"):null,0===C?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__title"},"Tell us how Resolve can help your business"),r.a.createElement("form",{onSubmit:R.handleSubmit,className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])},R.isSubmitting?r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form-loading-mask"}):null,r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_row"},r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(v.a,{id:"firstName",name:"firstName",type:"text",error:R.touched.firstName?R.errors.firstName:void 0,value:R.values.firstName,onChange:R.handleChange,onBlur:R.handleBlur,label:"First name",placeholder:"Enter first name"})),r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(v.a,{id:"lastName",name:"lastName",type:"text",error:R.touched.lastName?R.errors.lastName:void 0,value:R.values.lastName,onChange:R.handleChange,onBlur:R.handleBlur,label:"Last name",placeholder:"Enter last name"}))),r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_row"},r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(v.a,{id:"companyName",name:"companyName",type:"text",error:R.touched.companyName?R.errors.companyName:void 0,value:R.values.companyName,onChange:R.handleChange,onBlur:R.handleBlur,label:"Company name",placeholder:"Enter company name"}))),r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_row"},r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(v.a,{id:"email",name:"email",type:"text",error:R.touched.email?R.errors.email:void 0,value:R.values.email,onChange:R.handleChange,onBlur:R.handleBlur,label:"Work email",placeholder:"Enter your email"})),r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(v.a,{id:"phone",name:"phone",type:"text",error:R.touched.phone?R.errors.phone:void 0,value:R.values.phone,onChange:R.handleChange,onBlur:R.handleBlur,label:"Phone number",placeholder:"Enter phone number"}))),r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_row"},r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(g.a,{id:"goal",name:"goal",label:"I am looking to",firstOptionLabel:"Select a goal",error:R.touched.goal?R.errors.goal:void 0,value:R.values.goal,onChange:R.handleChange,onBlur:R.handleBlur,options:[{value:"Offer Net Terms for E-commerce",label:"Offer Net Terms for E-commerce"},{value:"Manage my existing Net Terms",label:"Manage my existing Net Terms"},{value:"I am new to Net Terms",label:"I am new to Net Terms"}]}))),r.a.createElement(f.a,{primary:!0,hasArrow:!0,isFullWidth:!0,type:"submit",className:"contact_sales__form_button",loading:R.isSubmitting},"Continue")),r.a.createElement("div",{id:"first-hubspot-form",className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales_hubspot_form"})):1===C?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__title"},"Tell us how Resolve can help your business"),r.a.createElement("form",{onSubmit:D.handleSubmit,className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])},D.isSubmitting?r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form-loading-mask"}):null,r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_row"},r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(g.a,{id:"industry",name:"industry",label:"Industry",firstOptionLabel:"Select industry",error:D.touched.industry?D.errors.industry:void 0,value:D.values.industry,onChange:D.handleChange,onBlur:D.handleBlur,options:[{value:"Agriculture, Forestry, and Fishing",label:"Agriculture, Forestry, and Fishing"},{value:"Apparel",label:"Apparel"},{value:"Auto",label:"Auto"},{value:"Banking",label:"Banking"},{value:"Biotechnology",label:"Biotechnology"},{value:"Chemicals",label:"Chemicals"},{value:"Communications",label:"Communications"},{value:"Construction",label:"Construction"},{value:"Consulting",label:"Consulting"},{value:"Education",label:"Education"},{value:"Electronics",label:"Electronics"},{value:"Energy",label:"Energy"},{value:"Engineering",label:"Engineering"},{value:"Entertainment",label:"Entertainment"},{value:"Environmental",label:"Environmental"},{value:"Fashion & Beauty",label:"Fashion & Beauty"},{value:"Finance",label:"Finance"},{value:"Financial Services",label:"Financial Services"},{value:"Fitness & Sporting Goods",label:"Fitness & Sporting Goods"},{value:"Food & Beverage",label:"Food & Beverage"},{value:"Furniture",label:"Furniture"},{value:"Government",label:"Government"},{value:"Healthcare",label:"Healthcare"},{value:"Hospitality",label:"Hospitality"},{value:"Industrial Tools & Equipment",label:"Industrial Tools & Equipment"},{value:"Insurance",label:"Insurance"},{value:"Machinery",label:"Machinery"},{value:"Maintenance, Repair, and Operations (MRO)",label:"Maintenance, Repair, and Operations (MRO)"},{value:"Manufacturing",label:"Manufacturing"},{value:"Media",label:"Media"},{value:"Not For Profit",label:"Not For Profit"},{value:"Other",label:"Other"},{value:"Professional Services",label:"Professional Services"},{value:"Recreation",label:"Recreation"},{value:"Restaurant",label:"Restaurant"},{value:"Retail",label:"Retail"},{value:"Shipping",label:"Shipping"},{value:"Software",label:"Software"},{value:"Technology",label:"Technology"},{value:"Telecommunications",label:"Telecommunications"},{value:"Transportation",label:"Transportation"},{value:"Travel",label:"Travel"},{value:"Utilities",label:"Utilities"}]})),r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(g.a,{id:"revenue",name:"revenue",label:"Annual b2b revenue",firstOptionLabel:"Select revenue range",error:D.touched.revenue?D.errors.revenue:void 0,value:D.values.revenue,onChange:D.handleChange,onBlur:D.handleBlur,options:[{value:"Pre-launch",label:"Pre-launch"},{value:"<$1M",label:"<$1M"},{value:"$1M-$5M",label:"$1M-$5M"},{value:"$5M-$10M",label:"$5M-$10M"},{value:"$10M-$25M",label:"$10M-$25M"},{value:">$25M",label:">$25M"}]}))),r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_row"},r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(g.a,{id:"eCommercePlatform",name:"eCommercePlatform",label:"E-commerce platform",firstOptionLabel:"Select platform",error:D.touched.eCommercePlatform?D.errors.eCommercePlatform:void 0,value:D.values.eCommercePlatform,onChange:D.handleChange,onBlur:D.handleBlur,options:[{value:"3dCart",label:"3dCart"},{value:"BigCommerce",label:"BigCommerce"},{value:"Custom",label:"Custom"},{value:"Hybris",label:"Hybris"},{value:"Insite",label:"Insite"},{value:"Magento 1",label:"Magento 1"},{value:"Magento 2",label:"Magento 2"},{value:"Netsuite",label:"Netsuite"},{value:"None",label:"None"},{value:"NuOrder",label:"NuOrder"},{value:"Odoo",label:"Odoo"},{value:"Oro Commerce",label:"Oro Commerce"},{value:"Shopify",label:"Shopify"},{value:"Shopify Plus",label:"Shopify Plus"},{value:"SquareSpace",label:"SquareSpace"},{value:"Volusion",label:"Volusion"},{value:"WooCommerce",label:"WooCommerce"},{value:"Other",label:"Other"}]})),r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(g.a,{id:"accountingPlatform",name:"accountingPlatform",label:"Accounting platform",firstOptionLabel:"Select platform",error:D.touched.accountingPlatform?D.errors.accountingPlatform:void 0,value:D.values.accountingPlatform,onChange:D.handleChange,onBlur:D.handleBlur,options:[{value:"Freshbooks",label:"Freshbooks"},{value:"Microsoft Dynamics 365",label:"Microsoft Dynamics 365"},{value:"Netsuite",label:"Netsuite"},{value:"Odoo",label:"Odoo"},{value:"Oracle",label:"Oracle"},{value:"Quickbooks Desktop",label:"Quickbooks Desktop"},{value:"Quickbooks Enterprise",label:"Quickbooks Enterprise"},{value:"Quickbooks Online",label:"Quickbooks Online"},{value:"Sage",label:"Sage"},{value:"SAP",label:"SAP"},{value:"Wave",label:"Wave"},{value:"Xero",label:"Xero"},{value:"Zoho",label:"Zoho"},{value:"Other",label:"Other"}]}))),r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_row"},r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(g.a,{id:"customerFrequency",name:"customerFrequency",label:"Customer purchase frequency",firstOptionLabel:"Select purchase frequency",error:D.touched.customerFrequency?D.errors.customerFrequency:void 0,value:D.values.customerFrequency,onChange:D.handleChange,onBlur:D.handleBlur,options:[{value:"Monthly",label:"Monthly"},{value:"Quarterly",label:"Quarterly"},{value:"Annually",label:"Annually"},{value:"Once",label:"Once"}]})),B?r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(g.a,{id:"offersTerms",name:"offersTerms",label:"Do you currently offer terms?",firstOptionLabel:"Select terms",error:D.touched.offersTerms?D.errors.offersTerms:void 0,value:D.values.offersTerms,onChange:D.handleChange,onBlur:D.handleBlur,options:[{value:"Not at all",label:"Not at all"},{value:"1-25% of b2b revenue",label:"1-25% of b2b revenue"},{value:"25-50% of b2b revenue",label:"25-50% of b2b revenue"},{value:">50% of b2b revenue",label:">50% of b2b revenue"}]})):q?r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__form_col"},r.a.createElement(g.a,{id:"existingTerms",name:"existingTerms",label:"Existing terms you would like managed",firstOptionLabel:"Select terms amount",error:D.touched.existingTerms?D.errors.existingTerms:void 0,value:D.values.existingTerms,onChange:D.handleChange,onBlur:D.handleBlur,options:[{value:"All of my customers",label:"All of my customers"},{value:"Some of my customers",label:"Some of my customers"},{value:"A few of my customers",label:"A few of my customers"},{value:"Not sure yet",label:"Not sure yet"}]})):null),r.a.createElement(f.a,{primary:!0,isFullWidth:!0,type:"submit",className:"contact_sales__form_button",loading:D.isSubmitting},"Submit")),r.a.createElement("div",{id:"second-hubspot-form",className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales_hubspot_form"})):2===C?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__title"},"Thank you for reaching out to us!"),r.a.createElement("p",{className:"jsx-2601514828 "+y.a.dynamic([["3534932313",[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]]])+" contact_sales__subtitle"},"Our sales team will reach out to you as soon as we're finished processing your submission.")):null,r.a.createElement(y.a,{id:"3534932313",dynamic:[x.a.white,x.b.halyardText,x.a.redRibbon,x.a.white,x.b.gilroy,x.a.primary,x.b.halyardDisplay]},[".contact_sales__container.__jsx-style-dynamic-selector{max-width:616px;width:100%;margin:50px auto;position:relative;}",".contact_sales__container.__jsx-style-dynamic-selector *.__jsx-style-dynamic-selector{box-sizing:border-box;}",".contact_sales__small-container.__jsx-style-dynamic-selector{max-width:385px;}",".contact_sales__form-loading-mask.__jsx-style-dynamic-selector{position:absolute;width:100%;height:100%;top:0;left:0;background-color:"+x.a.white+";opacity:0.3;z-index:10000;}",".contact_sales_error.__jsx-style-dynamic-selector{font-family:"+x.b.halyardText+";font-size:17px;font-weight:400;background-color:"+x.a.redRibbon+";color:"+x.a.white+";margin-bottom:48px;padding:16px;}",".contact_sales__title.__jsx-style-dynamic-selector{font-family:"+x.b.gilroy+";font-size:30px;font-weight:600;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;margin-bottom:32px;line-height:1.4;}",".contact_sales__subtitle.__jsx-style-dynamic-selector{font-size:22px;color:"+x.a.primary+";font-family:"+x.b.halyardDisplay+";font-weight:300;}",".contact_sales__form_row.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","@media (max-width:480px){.contact_sales__form_row.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}",".contact_sales__form_col.__jsx-style-dynamic-selector{width:100%;}",".contact_sales__form_col.__jsx-style-dynamic-selector:not(:first-of-type){margin-left:24px;}","@media (max-width:480px){.contact_sales__form_col.__jsx-style-dynamic-selector:not(:first-of-type){margin-left:0;}}",".contact_sales_hubspot_form.__jsx-style-dynamic-selector{display:none;}"]),r.a.createElement(y.a,{id:"2601514828"},[".contact_sales__form_button{margin-top:28px;}"]))}var C=l("UiNE"),S="3756326996";function R(e){var a=e.data,l=Object(C.a)(a.companies,(function(e){return e.image.fluid}));return r.a.createElement(i.a,null,r.a.createElement(n.GatsbySeo,{title:"Contact sales"}),r.a.createElement(o.a,null,r.a.createElement(O,null),r.a.createElement(m.a,{height:100}),r.a.createElement(c.a,{pretitle:"Trusted by innovative companies",data:[{image:l["Vice Golf"],name:"Vice Golf",offsetTop:0},{image:l.Article,name:"Article"},{image:l["OnDemand Tires"],name:"OnDemand Tires",offsetTop:0},{image:l["Archipelago Lighting"],name:"Archipelago Lighting",offsetTop:0},{image:l["Linus Bike"],name:"Linus Bike",offsetTop:0},{image:l.QuietKat,name:"QuietKat",offsetTop:0}]})),r.a.createElement(s.a,{darkSkin:!0}))}},FnBB:function(e,a,l){"use strict";l.d(a,"a",(function(){return o}));var t=l("MX0m"),r=l.n(t),n=l("q1tI"),i=l.n(n);function o(e){var a=e.height;return i.a.createElement("div",{className:r.a.dynamic([["1329640638",[a]]])+" space-divider"},i.a.createElement(r.a,{id:"1329640638",dynamic:[a]},[".space-divider.__jsx-style-dynamic-selector{content:' ';height:"+a+"px;}"]))}}}]);
//# sourceMappingURL=component---src-pages-contact-sales-js-3d984123e3f7d062fd82.js.map