(()=>{var e={};e.id=257,e.ids=[257],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},50852:e=>{"use strict";e.exports=require("async_hooks")},14300:e=>{"use strict";e.exports=require("buffer")},96206:e=>{"use strict";e.exports=require("console")},6113:e=>{"use strict";e.exports=require("crypto")},67643:e=>{"use strict";e.exports=require("diagnostics_channel")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},15673:e=>{"use strict";e.exports=require("node:events")},84492:e=>{"use strict";e.exports=require("node:stream")},47261:e=>{"use strict";e.exports=require("node:util")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},77282:e=>{"use strict";e.exports=require("process")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},35356:e=>{"use strict";e.exports=require("stream/web")},71576:e=>{"use strict";e.exports=require("string_decoder")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},29830:e=>{"use strict";e.exports=require("util/types")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},10677:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>p,routeModule:()=>f,tree:()=>d});var i=r(50482),s=r(69108),n=r(62563),a=r.n(n),l=r(68300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["refer",{children:["dashboard",{children:["new",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,40028)),"/Users/mudit/workspace/staffing/elega/src/app/refer/dashboard/new/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,79175)),"/Users/mudit/workspace/staffing/elega/src/app/refer/dashboard/layout.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,36345)),"/Users/mudit/workspace/staffing/elega/src/app/refer/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,51965)),"/Users/mudit/workspace/staffing/elega/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/mudit/workspace/staffing/elega/src/app/refer/dashboard/new/page.js"],c="/refer/dashboard/new/page",u={require:r,loadChunk:()=>Promise.resolve()},f=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/refer/dashboard/new/page",pathname:"/refer/dashboard/new",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4045:(e,t,r)=>{Promise.resolve().then(r.bind(r,25056))},81038:(e,t,r)=>{"use strict";r.d(t,{Cz:()=>m,H_:()=>p,Me:()=>u,NA:()=>x,O_:()=>d,X1:()=>f,Xh:()=>l,bo:()=>c,gg:()=>o,sh:()=>a});var i=r(83289),s=r(29127),n=r(50712);let a={USERS:"users",REFERRALS:"referrals"},l=e=>i.EK.fromDate(e),o=e=>e.toDate().toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric"}),d=e=>{let t=e.toDate(),r=new Date;return t.getMonth()===r.getMonth()};async function p(e,t){let r=null,i=null;try{r=await (0,s.ET)((0,s.hJ)(n.db,e),t)}catch(e){console.error(e),i=e}return{result:r,error:i}}async function c(e,t,r){let i=null,a=null;try{i=await (0,s.pl)((0,s.JU)(n.db,e,t),r,{merge:!0})}catch(e){console.error(e),a=e}return{result:i,error:a}}async function u(e,t){let r=(0,s.JU)(n.db,e,t),i=null,a=null;try{i=await (0,s.QT)(r)}catch(e){console.error(e),a=e}return{result:i,error:a}}async function f(e,t,r,i){let a=null,l=null;try{let l=(0,s.hJ)(n.db,e),o=(0,s.IO)(l,(0,s.ar)(t,r,i));a=await (0,s.PL)(o)}catch(e){console.error(e),l=e}return{result:a,error:l}}async function x(e,t,r,i,a,l,o){let d=null,p=null;try{let p=(0,s.hJ)(n.db,e),c=(0,s.IO)(p,(0,s.ar)(t,r,i),(0,s.ar)(a,l,o));d=await (0,s.PL)(c)}catch(e){console.error(e),p=e}return{result:d,error:p}}async function m(e,t,r,i,s,n,a){let l=await x(e,t,r,i,s,n,a);return!l?.result?.hasError&&l?.result?.size>0}},25056:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var i=r(95344);let s=`<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title>
  </title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <noscript>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        </noscript>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Open Sans" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Open Sans);
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }
  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }
  </style>
  <style type="text/css">
    [owa] .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
</head>

<body style="word-spacing:normal;background-color:#f8f8f8;">
  <div style="background-color:#f8f8f8;">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:40px;padding-right:50px;padding-bottom:0px;padding-left:50px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:64px;">
                                <img alt="" height="auto" src="https://www.elega.co.in/logo.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title="" width="64" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0px 25px 0px 25px;padding-top:5px;padding-right:50px;padding-bottom:0px;padding-left:50px;word-break:break-word;">
                        <div style="font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#000000;">
                          <p style="margin: 10px 0; text-align: center;"><b style="font-size:24px">Elega</b></p>
                          <p style="margin: 10px 0; text-align: center;">Elevating Tech Hiring</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;padding-bottom:70px;padding-top:30px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0px 25px 0px 25px;padding-top:0px;padding-right:50px;padding-bottom:0px;padding-left:50px;word-break:break-word;">
                        <div style="font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#797e82;">
                          <h1 style="text-align:center; color: #000000; line-height:32px">You&apos;re almost there!</h1>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0px 25px 0px 25px;padding-top:0px;padding-right:50px;padding-bottom:0px;padding-left:50px;word-break:break-word;">
                        <div style="font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#797e82;">
                          <p style="margin: 10px 0; text-align: center;">{referredBy} has invited you to join Elega’s exclusive community of top-notch tech talent.</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:20px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                          <tr>
                            <td align="center" bgcolor="#3490dc" role="presentation" style="border:none;border-radius:100px;cursor:auto;mso-padding-alt:15px 25px 15px 25px;background:#3490dc;" valign="middle">
                              <a href={link} style="display:inline-block;background:#3490dc;color:#ffffff;font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:15px 25px 15px 25px;mso-padding-alt:0px;border-radius:100px;" target="_blank">
                                <b style="font-weight:700"><b style="font-weight:700">Join Now</b></b>
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0px 25px 0px 25px;padding-top:0px;padding-right:50px;padding-bottom:0px;padding-left:50px;word-break:break-word;">
                        <div style="font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;text-align:left;color:#797e82;">
                          <p style="margin: 0; text-align: center;">or copy this URL into your browser: </p>
                          <p style="margin: 0; text-align: center;">{link}</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>

</html>`;var n=r(42963),a=r(3729);let l=({initialRating:e=0,maxRating:t=5,onRatingChange:r})=>{let[s,n]=(0,a.useState)(e),l=e=>{n(e),r&&r(e)};return i.jsx("div",{className:"flex items-center pt-1",children:[...Array(t)].map((e,t)=>i.jsx("button",{className:`text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mx-1 focus:outline-none ${t+1<=s?"bg-[#5D87FF] text-white":"bg-white text-[#5D87FF]"}`,onClick:()=>l(t+1),children:t+1},t))})};var o=r(81038);async function d(e){let t=await fetch("/api/mail/sendEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();r.success?console.log("Email sent successfully"):console.error("Error sending email:",r.error)}var p=r(90078),c=r.n(p),u=r(69697);function f(e){let{user:t}=e,r={linkedInUrl:"",email:"",referredByUserId:t.id,status:"Email Sent",rating:null,comments:""},[p,f]=(0,a.useState)(r),[x,m]=(0,a.useState)(!1);async function g(e){if(c()(e.linkedInUrl)){u.Am.error("LinkedIn URL not provided");return}if(c()(e.email)){u.Am.error("Email not provided");return}e.referredOn=(0,o.Xh)(new Date),m(!0);try{if(await (0,o.Cz)(o.sh.REFERRALS,"email","==",e.email,"status","!=","Email Sent")){u.Am.error("User already referred"),m(!1);return}}catch(e){console.log(e),u.Am.error("Error occurred"),m(!1);return}try{let i=await (0,o.H_)("referrals",e),n={to:e.email,subject:`${t?.name} has invited you to Elega`,text:null,html:s.replace(/{referredBy}/g,t.name).replace(/{link}/g,"https://www.elega.co.in/refer/join?refId="+i?.result?.id)};d(n),f(r),m(!1),u.Am.success("Referral submitted successfully")}catch(e){console.error(e),m(!1),u.Am.error("Error occurred")}}return x?i.jsx(n.Z,{}):i.jsx("div",{className:"position-relative overflow-hidden min-vh-100 d-flex align-items-center justify-content-center !bg-customDarkBg1",children:i.jsx("div",{className:"d-flex align-items-center justify-content-center w-full",children:i.jsx("div",{className:"card mb-0 pb-0 lg:px-8 lg:py-4 !bg-transparent !shadow-sm lg:w-1/2 flex justify-center items-center",children:(0,i.jsxs)("div",{className:"lg:w-3/4 !pb-0",children:[i.jsx("h2",{className:"text-center text-white mb-10",children:"Add referral details"}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"mb-3",children:[i.jsx("label",{htmlFor:"exampleInputtext1",className:"form-label text-white",children:"LinkedIn URL"}),i.jsx("input",{type:"text",value:p.linkedInUrl,onChange:e=>{f({...p,linkedInUrl:e.target.value})},className:"form-control text-white","aria-describedby":"textHelp"})]}),(0,i.jsxs)("div",{className:"mb-3",children:[i.jsx("label",{htmlFor:"exampleInputEmail1",className:"form-label text-white",children:"Email"}),i.jsx("input",{type:"email",value:p.email,onChange:e=>{f({...p,email:e.target.value})},className:"form-control text-white","aria-describedby":"emailHelp"})]}),(0,i.jsxs)("div",{className:"mb-3",children:[i.jsx("label",{htmlFor:"exampleInputEmail1",className:"form-label text-white",children:"How would you rate the candidate?"}),i.jsx(l,{onRatingChange:e=>f({...p,rating:e})})]}),(0,i.jsxs)("div",{className:"mb-3",children:[i.jsx("label",{className:"form-label text-white",children:"Your recommendation"}),i.jsx("textarea",{value:p.comments,onChange:e=>{f({...p,comments:e.target.value})},className:"form-control text-white h-20 !pb-4"})]}),i.jsx("button",{onClick:()=>g(p),className:"btn btn-primary w-100 py-8 fs-4 mt-4 rounded-2",children:"Submit Referral"})]})]})})})})}var x=r(47674);let m=function(){let{data:e}=(0,x.useSession)();return i.jsx(f,{user:e.user})}},40028:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>a});let i=(0,r(86843).createProxy)(String.raw`/Users/mudit/workspace/staffing/elega/src/app/refer/dashboard/new/page.js`),{__esModule:s,$$typeof:n}=i,a=i.default}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[638,852,337,593,474,78,523],()=>r(10677));module.exports=i})();