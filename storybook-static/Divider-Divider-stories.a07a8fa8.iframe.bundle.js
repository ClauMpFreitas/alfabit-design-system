/*! For license information please see Divider-Divider-stories.a07a8fa8.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkds_alfabit=self.webpackChunkds_alfabit||[]).push([[61,87],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/Divider/Divider.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DivisorDark:()=>DivisorDark,DivisorWithProps:()=>DivisorWithProps,Primary:()=>Primary,ThicknessDivisor:()=>ThicknessDivisor,default:()=>Divider_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),_excluded=["children","width","height","bgColor"],__jsx=react.createElement,colorClassMap={dark:"bg-dark",light:"bg-light",black:"bg-black"},Divider=function Divider(_ref){var children=_ref.children,width=_ref.width,_ref$height=_ref.height,height=void 0===_ref$height?"h-[1px]":_ref$height,_ref$bgColor=_ref.bgColor,bgColor=void 0===_ref$bgColor?"black":_ref$bgColor,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),colorClass=colorClassMap[bgColor],barClasses=classnames_default()(children?"w-1/3":"w-1/2",height,colorClass);return __jsx("div",(0,esm_extends.Z)({className:classnames_default()(width,"flex items-center justify-center")},rest),__jsx("div",{className:barClasses}),children&&__jsx("div",{className:"px-3"},children),__jsx("div",{className:barClasses}))};Divider.displayName="Divider",Divider.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{height:{defaultValue:{value:'"h-[1px]"',computed:!1},required:!1,tsType:{name:"string"},description:""},bgColor:{defaultValue:{value:'"black"',computed:!1},required:!1,tsType:{name:"union",raw:'"light" | "dark" | "black"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"black"'}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Divider_Divider=Divider;try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"h-[1px]"},description:"",name:"height",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"black"},description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"black"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Divider/Divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"components/Divider/Divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Default$parameters,_Default$parameters2,_DivisorWithProps$par,_DivisorWithProps$par2,_ThicknessDivisor$par,_ThicknessDivisor$par2,_DivisorDark$paramete,_DivisorDark$paramete2;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Divider_stories={title:"Desing System/Atoms/Divider",component:Divider_Divider,argTypes:{children:{type:"string"}}};var Primary={args:{}},Default={args:{}},DivisorWithProps={args:{children:"Olá mundo"}},ThicknessDivisor={args:{height:"h-[4px]"}},DivisorDark={args:{bgColor:"dark",height:"h-1"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),DivisorWithProps.parameters=_objectSpread(_objectSpread({},DivisorWithProps.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DivisorWithProps$par=DivisorWithProps.parameters)||void 0===_DivisorWithProps$par?void 0:_DivisorWithProps$par.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    children: "Olá mundo"\n  }\n}'},null===(_DivisorWithProps$par2=DivisorWithProps.parameters)||void 0===_DivisorWithProps$par2||null===(_DivisorWithProps$par2=_DivisorWithProps$par2.docs)||void 0===_DivisorWithProps$par2?void 0:_DivisorWithProps$par2.source)})}),ThicknessDivisor.parameters=_objectSpread(_objectSpread({},ThicknessDivisor.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ThicknessDivisor$par=ThicknessDivisor.parameters)||void 0===_ThicknessDivisor$par?void 0:_ThicknessDivisor$par.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    height: "h-[4px]"\n  }\n}'},null===(_ThicknessDivisor$par2=ThicknessDivisor.parameters)||void 0===_ThicknessDivisor$par2||null===(_ThicknessDivisor$par2=_ThicknessDivisor$par2.docs)||void 0===_ThicknessDivisor$par2?void 0:_ThicknessDivisor$par2.source)})}),DivisorDark.parameters=_objectSpread(_objectSpread({},DivisorDark.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DivisorDark$paramete=DivisorDark.parameters)||void 0===_DivisorDark$paramete?void 0:_DivisorDark$paramete.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    bgColor: "dark",\n    height: "h-1"\n  }\n}'},null===(_DivisorDark$paramete2=DivisorDark.parameters)||void 0===_DivisorDark$paramete2||null===(_DivisorDark$paramete2=_DivisorDark$paramete2.docs)||void 0===_DivisorDark$paramete2?void 0:_DivisorDark$paramete2.source)})})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);