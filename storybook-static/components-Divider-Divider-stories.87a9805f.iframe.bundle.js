/*! For license information please see components-Divider-Divider-stories.87a9805f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdraupnir=self.webpackChunkdraupnir||[]).push([[953],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/Divider/Divider.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Default:()=>Default,DivisorWithProps:()=>DivisorWithProps,ThicknessDivisor:()=>ThicknessDivisor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Divider",component:__webpack_require__("./src/components/Divider/Divider.tsx").Z,parameters:{parameters:{notes:"These are notes for the Divider stories",info:"This is info for the Divider stories"}},argTypes:{children:{type:"string",options:["string"],description:"Text of the divider."},bgColor:{control:{type:"radio"},options:["dark","light","black"],description:"background color of the divider."},width:{type:"string",options:["string"],description:"width of the divider."}}};var Default={args:{}},Dark={args:{bgColor:"dark"}},DivisorWithProps={args:{children:"Hello, world!"}},ThicknessDivisor={args:{height:"h-[5px]"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:'{\n  args: {\n    bgColor: "dark"\n  }\n}',...Dark.parameters?.docs?.source}}},DivisorWithProps.parameters={...DivisorWithProps.parameters,docs:{...DivisorWithProps.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Hello, world!"\n  }\n}',...DivisorWithProps.parameters?.docs?.source}}},ThicknessDivisor.parameters={...ThicknessDivisor.parameters,docs:{...ThicknessDivisor.parameters?.docs,source:{originalSource:'{\n  args: {\n    height: "h-[5px]"\n  }\n}',...ThicknessDivisor.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Dark","DivisorWithProps","ThicknessDivisor"]},"./src/components/Divider/Divider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_antoniobernardinodasilva_Desktop_road_to_portugal_draupnir_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_excluded=["width","height","children","bgColor"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,colorClassMap={light:"bg-light",dark:"bg-dark",black:"bg-black"},Divider=function Divider(_ref){var width=_ref.width,_ref$height=_ref.height,height=void 0===_ref$height?"h-[1px]":_ref$height,children=_ref.children,_ref$bgColor=_ref.bgColor,bgColor=void 0===_ref$bgColor?"black":_ref$bgColor,colorClass=((0,_Users_antoniobernardinodasilva_Desktop_road_to_portugal_draupnir_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),colorClassMap[bgColor]),barClass=classnames__WEBPACK_IMPORTED_MODULE_1___default()(children?"w-1/3":"w-1/2",height,colorClass);return __jsx("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(width,"flex items-center justify-center")},__jsx("div",{className:barClass}),children&&__jsx("div",{className:"px-3"},children," "),__jsx("div",{className:barClass}))};Divider.displayName="Divider";const __WEBPACK_DEFAULT_EXPORT__=Divider;try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"h-[1px]"},description:"",name:"height",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"black"},description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"black"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);