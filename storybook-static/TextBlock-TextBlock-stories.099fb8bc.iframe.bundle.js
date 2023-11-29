/*! For license information please see TextBlock-TextBlock-stories.099fb8bc.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkds_alfabit=self.webpackChunkds_alfabit||[]).push([[967,87],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var D_workspace_alfabit_design_system_project_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),D_workspace_alfabit_design_system_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),D_workspace_alfabit_design_system_project_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_excluded=["rounded","border","filledBackground","type","children","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,typeClassMap={primary:"bg-primary",secondary:"bg-tertiary",dark:"bg-dark",alert:"bg-yellow-100 text-yellow-900",success:"bg-green-100 text-green-900",error:"bg-red-100 text-red-900"},Box=function Box(_ref){var _ref$rounded=_ref.rounded,rounded=void 0!==_ref$rounded&&_ref$rounded,_ref$border=_ref.border,border=void 0!==_ref$border&&_ref$border,_ref$filledBackground=_ref.filledBackground,filledBackground=void 0!==_ref$filledBackground&&_ref$filledBackground,_ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,children=_ref.children,className=_ref.className,rest=(0,D_workspace_alfabit_design_system_project_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,D_workspace_alfabit_design_system_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)({"rounded-md":rounded,"border border-gray-300":border,"bg-gray-100":filledBackground},typeClassMap[type],type),className);return __jsx("div",(0,D_workspace_alfabit_design_system_project_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:classes},rest),children)};Box.displayName="Box",Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{rounded:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},border:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},filledBackground:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},type:{defaultValue:{value:'"primary"',computed:!1},required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "dark" | "alert" | "success" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"alert"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Box;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},filledBackground:{defaultValue:{value:"false"},description:"",name:"filledBackground",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'},{value:'"success"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var D_workspace_alfabit_design_system_project_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),D_workspace_alfabit_design_system_project_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_excluded=["children","element","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,textVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)(["text-gray-primary","text-sm","font-normal"],{variants:{variant:{primary:["text-gray-primary"],secondary:["text-gray-secondary"],tertiary:["text-gray-tertiary"]},size:{xs:["text-xs"],sm:["text-sm"],md:["text-md"],lg:["text-lg"],xl:["text-xl"],title1:["text-txl"],title2:["text-tlg"],title3:["text-tmd"]},defaultVariants:{variant:"primary",size:"md"}}}),Text=function Text(_ref){var children=_ref.children,_ref$element=_ref.element,element=void 0===_ref$element?"p":_ref$element,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,rest=(0,D_workspace_alfabit_design_system_project_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(element,(0,D_workspace_alfabit_design_system_project_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:"".concat(textVariants(rest)," ").concat(className)},rest),children)};Text.displayName="Text",Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{element:{defaultValue:{value:'"p"',computed:!1},required:!1,tsType:{name:"unknown"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{defaultVariants:{defaultValue:null,description:"",name:"defaultVariants",required:!1,type:{name:'"variant" | "size" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "tertiary" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "xl" | "title1" | "title2" | "title3" | null'}},element:{defaultValue:{value:"p"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextBlock/TextBlock.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,TextBlockPrimary:()=>TextBlockPrimary,TextBlockSecondary:()=>TextBlockSecondary,TextBlockTertiary:()=>TextBlockTertiary,default:()=>TextBlock_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./components/Box/Box.tsx"),Text=__webpack_require__("./components/Text/Text.tsx"),_excluded=["title","type","children","className"],__jsx=react.createElement,TextBlock=function TextBlock(_ref){var title=_ref.title,_ref$type=_ref.type,type=void 0===_ref$type?"dark":_ref$type,children=_ref.children,rest=(_ref.className,(0,objectWithoutProperties.Z)(_ref,_excluded)),textClass="primary"===type?"text-white":"text-gray-primary";return __jsx(Box.Z,(0,esm_extends.Z)({className:"flex flex-col gap-2 p-5 ",type,rounded:!0},rest),__jsx(Text.Z,{className:"font-bold ".concat(textClass),size:"xl"},title),__jsx(Text.Z,{className:textClass},children))};TextBlock.displayName="TextBlock",TextBlock.__docgenInfo={description:"",methods:[],displayName:"TextBlock",props:{type:{defaultValue:{value:'"dark"',computed:!1},required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "dark"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"dark"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const TextBlock_TextBlock=TextBlock;try{TextBlock.displayName="TextBlock",TextBlock.__docgenInfo={description:"",displayName:"TextBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},type:{defaultValue:{value:"dark"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextBlock/TextBlock.tsx#TextBlock"]={docgenInfo:TextBlock.__docgenInfo,name:"TextBlock",path:"components/TextBlock/TextBlock.tsx#TextBlock"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_TextBlockPrimary$par,_TextBlockPrimary$par2,_TextBlockSecondary$p,_TextBlockSecondary$p2,_TextBlockTertiary$pa,_TextBlockTertiary$pa2;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const TextBlock_stories={title:"Desing System/Molecules/TextBlock",component:TextBlock_TextBlock,argTypes:{type:{type:"string"},title:{type:"string"},children:{type:"string"}}};var Primary={args:{title:"Título",children:"Olá eu sou uma bloco de Texto padrão"}},TextBlockPrimary={args:{title:"Título",children:"Olá eu sou uma bloco de Texto Primário",type:"primary"}},TextBlockSecondary={args:{title:"Título",children:"Olá eu sou uma bloco de Texto Secundário",type:"secondary"}},TextBlockTertiary={args:{title:"Título",children:"Olá eu sou uma bloco de Texto Terciário",type:"dark"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Título",\n    children: "Olá eu sou uma bloco de Texto padrão"\n  }\n}'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),TextBlockPrimary.parameters=_objectSpread(_objectSpread({},TextBlockPrimary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TextBlockPrimary$par=TextBlockPrimary.parameters)||void 0===_TextBlockPrimary$par?void 0:_TextBlockPrimary$par.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Título",\n    children: "Olá eu sou uma bloco de Texto Primário",\n    type: "primary"\n  }\n}'},null===(_TextBlockPrimary$par2=TextBlockPrimary.parameters)||void 0===_TextBlockPrimary$par2||null===(_TextBlockPrimary$par2=_TextBlockPrimary$par2.docs)||void 0===_TextBlockPrimary$par2?void 0:_TextBlockPrimary$par2.source)})}),TextBlockSecondary.parameters=_objectSpread(_objectSpread({},TextBlockSecondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TextBlockSecondary$p=TextBlockSecondary.parameters)||void 0===_TextBlockSecondary$p?void 0:_TextBlockSecondary$p.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Título",\n    children: "Olá eu sou uma bloco de Texto Secundário",\n    type: "secondary"\n  }\n}'},null===(_TextBlockSecondary$p2=TextBlockSecondary.parameters)||void 0===_TextBlockSecondary$p2||null===(_TextBlockSecondary$p2=_TextBlockSecondary$p2.docs)||void 0===_TextBlockSecondary$p2?void 0:_TextBlockSecondary$p2.source)})}),TextBlockTertiary.parameters=_objectSpread(_objectSpread({},TextBlockTertiary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TextBlockTertiary$pa=TextBlockTertiary.parameters)||void 0===_TextBlockTertiary$pa?void 0:_TextBlockTertiary$pa.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Título",\n    children: "Olá eu sou uma bloco de Texto Terciário",\n    type: "dark"\n  }\n}'},null===(_TextBlockTertiary$pa2=TextBlockTertiary.parameters)||void 0===_TextBlockTertiary$pa2||null===(_TextBlockTertiary$pa2=_TextBlockTertiary$pa2.docs)||void 0===_TextBlockTertiary$pa2?void 0:_TextBlockTertiary$pa2.source)})})},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);