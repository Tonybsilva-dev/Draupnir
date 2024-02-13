"use strict";(self.webpackChunkdraupnir=self.webpackChunkdraupnir||[]).push([[65],{"./src/components/Badge/Badge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Primary:()=>Primary,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Badge",component:__webpack_require__("./src/components/Badge/Badge.tsx").C,parameters:{layout:"centered",parameters:{notes:"These are notes for the Badge stories",info:"This is info for the Badge stories"}},argTypes:{children:{control:{type:"string",options:["string"],description:"Text of the badge."}}}};var Primary={args:{children:"Badge"}},Success={args:{children:"Badge",variant:"success"}},Warning={args:{children:"Badge",variant:"warning"}},Danger={args:{children:"Badge",variant:"danger"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Badge"\n  }\n}',...Primary.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Badge",\n    variant: "success"\n  }\n}',...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Badge",\n    variant: "warning"\n  }\n}',...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Badge",\n    variant: "danger"\n  }\n}',...Danger.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Success","Warning","Danger"]},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Badge});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement,badgeVariantClasses={primary:"bg-blue-600 text-white",success:"bg-green-600 text-white",warning:"bg-yellow-600 text-white",danger:"bg-red-600 text-white"},Badge=function Badge(_ref){var children=_ref.children,_ref$variant=_ref.variant;return __jsx("span",{className:"text-sm px-2 py-1 rounded ".concat(badgeVariantClasses[void 0===_ref$variant?"primary":_ref$variant])},children)};Badge.displayName="Badge";try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"primary"'},{value:'"danger"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}}}]);