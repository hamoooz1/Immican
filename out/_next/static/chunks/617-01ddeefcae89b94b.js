"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[617],{35646:function(e,t,r){r.d(t,{x:function(){return f}});var a=r(52799),n=r(28847),o=r(72044),s=r(41244),l=(0,o.tv)({base:["w-full","p-1","min-w-[200px]"]});(0,o.tv)({slots:{base:["flex","group","gap-2","items-center","justify-between","relative","px-2","py-1.5","w-full","h-full","box-border","rounded-small","outline-none","cursor-pointer","tap-highlight-transparent","data-[pressed=true]:opacity-70",...s.Dh,"data-[focus-visible=true]:dark:ring-offset-background-content1"],wrapper:"w-full flex flex-col items-start justify-center",title:"flex-1 text-small font-normal truncate",description:["w-full","text-tiny","text-foreground-500","group-hover:text-current"],selectedIcon:["text-inherit","w-3","h-3","flex-shrink-0"],shortcut:["px-1","py-0.5","rounded","font-sans","text-foreground-500","text-tiny","border-small","border-default-300","group-hover:border-current"]},variants:{variant:{solid:{base:""},bordered:{base:"border-medium border-transparent bg-transparent"},light:{base:"bg-transparent"},faded:{base:"border-small border-transparent hover:border-default data-[hover=true]:bg-default-100"},flat:{base:""},shadow:{base:"data-[hover=true]:shadow-lg"}},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{},false:{}}},defaultVariants:{variant:"solid",color:"default",disableAnimation:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:"data-[hover=true]:bg-default data-[hover=true]:text-default-foreground"}},{variant:"solid",color:"primary",class:{base:"data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground"}},{variant:"solid",color:"secondary",class:{base:"data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground"}},{variant:"solid",color:"success",class:{base:"data-[hover=true]:bg-success data-[hover=true]:text-success-foreground"}},{variant:"solid",color:"warning",class:{base:"data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground"}},{variant:"solid",color:"danger",class:{base:"data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground"}},{variant:"shadow",color:"default",class:{base:"data-[hover=true]:shadow-default/50 data-[hover=true]:bg-default data-[hover=true]:text-default-foreground"}},{variant:"shadow",color:"primary",class:{base:"data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground"}},{variant:"shadow",color:"secondary",class:{base:"data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground"}},{variant:"shadow",color:"success",class:{base:"data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground"}},{variant:"shadow",color:"warning",class:{base:"data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground"}},{variant:"shadow",color:"danger",class:{base:"data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground"}},{variant:"bordered",color:"default",class:{base:"data-[hover=true]:border-default"}},{variant:"bordered",color:"primary",class:{base:"data-[hover=true]:border-primary data-[hover=true]:text-primary"}},{variant:"bordered",color:"secondary",class:{base:"data-[hover=true]:border-secondary data-[hover=true]:text-secondary"}},{variant:"bordered",color:"success",class:{base:"data-[hover=true]:border-success data-[hover=true]:text-success"}},{variant:"bordered",color:"warning",class:{base:"data-[hover=true]:border-warning data-[hover=true]:text-warning"}},{variant:"bordered",color:"danger",class:{base:"data-[hover=true]:border-danger data-[hover=true]:text-danger"}},{variant:"flat",color:"default",class:{base:"data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground"}},{variant:"flat",color:"primary",class:{base:"data-[hover=true]:bg-primary/20 data-[hover=true]:text-primary"}},{variant:"flat",color:"secondary",class:{base:"data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary"}},{variant:"flat",color:"success",class:{base:"data-[hover=true]:bg-success/20 data-[hover=true]:text-success "}},{variant:"flat",color:"warning",class:{base:"data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning"}},{variant:"flat",color:"danger",class:{base:"data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger"}},{variant:"faded",color:"default",class:{base:"data-[hover=true]:text-default-foreground"}},{variant:"faded",color:"primary",class:{base:"data-[hover=true]:text-primary"}},{variant:"faded",color:"secondary",class:{base:"data-[hover=true]:text-secondary"}},{variant:"faded",color:"success",class:{base:"data-[hover=true]:text-success"}},{variant:"faded",color:"warning",class:{base:"data-[hover=true]:text-warning"}},{variant:"faded",color:"danger",class:{base:"data-[hover=true]:text-danger"}},{variant:"light",color:"default",class:{base:"data-[hover=true]:text-default-500"}},{variant:"light",color:"primary",class:{base:"data-[hover=true]:text-primary"}},{variant:"light",color:"secondary",class:{base:"data-[hover=true]:text-secondary"}},{variant:"light",color:"success",class:{base:"data-[hover=true]:text-success"}},{variant:"light",color:"warning",class:{base:"data-[hover=true]:text-warning"}},{variant:"light",color:"danger",class:{base:"data-[hover=true]:text-danger"}}]}),(0,o.tv)({slots:{base:"relative mb-2",heading:"pl-1 text-tiny text-foreground-500",group:"data-[has-title=true]:pt-1",divider:"mt-2"}}),(0,o.tv)({base:"w-full flex flex-col gap-0.5 p-1"});var u=r(5142),i=r(7878),c=r(2265),d=r(67728);function f(e){let{as:t,triggerRef:r,isOpen:o,defaultOpen:s,onOpenChange:f,type:p="menu",trigger:v="press",placement:h="bottom",isDisabled:b=!1,closeOnSelect:g=!0,shouldBlockScroll:m=!0,classNames:y,disableAnimation:x=!1,onClose:w,className:j,...N}=e,P=(0,c.useRef)(null),k=r||P,_=(0,c.useRef)(null),S=(0,c.useRef)(null),C=(0,a.W)({trigger:v,isOpen:o,defaultOpen:s,onOpenChange:e=>{null==f||f(e),e||null==w||w()}}),{menuTriggerProps:E,menuProps:I}=(0,n.u4)({type:p,trigger:v,isDisabled:b},C,k),O=(0,c.useMemo)(()=>l({className:j}),[j]),R=e=>{(void 0===e||e)&&g&&C.close()};return{Component:t||"div",menuRef:_,menuProps:I,classNames:O,closeOnSelect:g,onClose:C.close,autoFocus:C.focusStrategy||!0,disableAnimation:x,getPopoverProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{state:C,placement:h,ref:S,disableAnimation:x,shouldBlockScroll:m,scrollRef:_,triggerRef:k,...(0,d.dG)(N,e),classNames:{...y,...e.classNames,content:(0,u.W)(O,null==y?void 0:y.content,e.className)}}},getMenuProps:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{ref:(0,i.l)(t,_),menuProps:I,...(0,d.dG)(e,{onAction:()=>R(null==e?void 0:e.closeOnSelect)})}},getMenuTriggerProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{onKeyDown:r,onPress:a,onPressStart:n,...o}=E;return{...(0,d.dG)(o,e),ref:(0,i.l)(t,P)}}}}},10675:function(e,t,r){r.d(t,{S:function(){return u}});var a=r(81081),n=r(84291),o=r(75972),s=r(57437),l=(0,n.Gp)((e,t)=>{let{getMenuTriggerProps:r}=(0,a.t)(),{children:n,...l}=e;return(0,s.jsx)(o.b,{...r(l),children:n})});l.displayName="NextUI.DropdownTrigger";var u=l},6442:function(e,t,r){r.d(t,{F:function(){return i}});var a=r(81081),n=r(35646),o=r(2265),s=r(48150),l=r(57437),u=e=>{let{children:t,...r}=e,u=(0,n.x)(r),[i,c]=o.Children.toArray(t);return(0,l.jsx)(a.K,{value:u,children:(0,l.jsxs)(s.j,{...u.getPopoverProps(),children:[i,c]})})};u.displayName="NextUI.Dropdown";var i=u},87224:function(e,t,r){r.d(t,{a:function(){return c}});var a=r(81081),n=r(6346),o=r(38260),s=r(84291),l=r(69668),u=r(57437);function i(e,t){let{getMenuProps:r}=(0,a.t)();return(0,u.jsx)(n.g,{children:(0,u.jsx)(o.MT,{contain:!0,restoreFocus:!0,children:(0,u.jsx)(l.U,{...r(e,t)})})})}var c=(0,s.Gp)(i);i.displayName="NextUI.DropdownMenu"},81081:function(e,t,r){r.d(t,{K:function(){return a},t:function(){return n}});var[a,n]=(0,r(82901).k)({name:"DropdownContext",errorMessage:"useDropdownContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Dropdown />`"})},69668:function(e,t,r){r.d(t,{U:function(){return N}});var a=r(57437);function n(e){let{isSelected:t,disableAnimation:r,...n}=e;return(0,a.jsx)("svg",{"aria-hidden":"true","data-selected":t,role:"presentation",viewBox:"0 0 17 18",...n,children:(0,a.jsx)("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:t?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,style:r?{}:{transition:"stroke-dashoffset 200ms ease"}})})}var o=r(2265),s=r(62545),l=r(84291),u=r(38260),i=r(2126),c=r(5142),d=r(27896),f=r(34808),p=r(28847),v=r(67728),h=r(11246),b=r(88084),g=r(6646),m=(0,l.Gp)((e,t)=>{let{Component:r,slots:m,classNames:y,rendered:x,shortcut:w,description:j,isSelectable:N,isSelected:P,isDisabled:k,selectedIcon:_,startContent:S,endContent:C,disableAnimation:E,hideSelectedIcon:I,getItemProps:O,getLabelProps:R,getDescriptionProps:B,getKeyboardShortcutProps:M,getSelectedIconProps:G}=function(e){let[t,r]=(0,l.oe)(e,s.D9.variantKeys),{as:a,item:n,state:m,shortcut:y,description:x,startContent:w,endContent:j,isVirtualized:N,selectedIcon:P,className:k,classNames:_,onAction:S,autoFocus:C,onPress:E,onClick:I,hideSelectedIcon:O=!1,isReadOnly:R=!1,closeOnSelect:B,onClose:M,...G}=t,U=e.disableAnimation,W=(0,o.useRef)(null),D=a||((null==G?void 0:G.href)?"a":"li"),$="string"==typeof D,{rendered:A,key:L}=n,T=m.disabledKeys.has(L)||e.isDisabled,V="none"!==m.selectionManager.selectionMode,q=(0,g.d)(),{pressProps:F,isPressed:H}=(0,b.r)({ref:W,isDisabled:T,onPress:E}),{isHovered:z,hoverProps:K}=(0,h.XI)({isDisabled:T}),{isFocusVisible:X,focusProps:Y}=(0,u.Fx)({autoFocus:C}),{isFocused:Z,isSelected:J,menuItemProps:Q,labelProps:ee,descriptionProps:et,keyboardShortcutProps:er}=(0,p.iX)({key:L,onClose:M,isDisabled:T,"aria-label":t["aria-label"],closeOnSelect:B,isVirtualized:N,onAction:S},m,W),ea=Q,en=(0,o.useMemo)(()=>(0,s.D9)({...r,isDisabled:T,disableAnimation:U}),[...Object.values(r),T,U]),eo=(0,c.W)(null==_?void 0:_.base,k);R&&(ea=(0,d.Os)(ea));let es=(0,o.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"aria-hidden":(0,f.PB)(!0),"data-disabled":(0,f.PB)(T),className:en.selectedIcon({class:null==_?void 0:_.selectedIcon}),...e}},[T,en,_]);return{Component:D,domRef:W,slots:en,classNames:_,isSelectable:V,isSelected:J,isDisabled:T,rendered:A,shortcut:y,description:x,startContent:w,endContent:j,selectedIcon:P,disableAnimation:U,getItemProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:W,...(0,v.dG)(ea,R?{}:(0,v.dG)(Y,F),K,(0,i.z)(G,{enabled:$}),e),"data-focus":(0,f.PB)(Z),"data-selectable":(0,f.PB)(V),"data-hover":(0,f.PB)(q?z||H:z),"data-disabled":(0,f.PB)(T),"data-selected":(0,f.PB)(J),"data-pressed":(0,f.PB)(H),"data-focus-visible":(0,f.PB)(X),className:en.base({class:(0,c.W)(eo,e.className)}),onClick:(0,v.tS)(F.onClick,I)}},getLabelProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...(0,v.dG)(ee,e),className:en.title({class:null==_?void 0:_.title})}},hideSelectedIcon:O,getDescriptionProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...(0,v.dG)(et,e),className:en.description({class:null==_?void 0:_.description})}},getKeyboardShortcutProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...(0,v.dG)(er,e),className:en.shortcut({class:null==_?void 0:_.shortcut})}},getSelectedIconProps:es}}(e),U=(0,o.useMemo)(()=>{let e=(0,a.jsx)(n,{disableAnimation:E,isSelected:P});return"function"==typeof _?_({icon:e,isSelected:P,isDisabled:k}):_||e},[_,P,k,E]);return(0,a.jsxs)(r,{...O(),children:[S,j?(0,a.jsxs)("div",{className:m.wrapper({class:null==y?void 0:y.wrapper}),children:[(0,a.jsx)("span",{...R(),children:x}),(0,a.jsx)("span",{...B(),children:j})]}):(0,a.jsx)("span",{...R(),children:x}),w&&(0,a.jsx)("kbd",{...M(),children:w}),N&&!I&&(0,a.jsx)("span",{...G(),children:U}),C]})});m.displayName="NextUI.MenuItem";var y=r(5187),x=(0,l.Gp)((e,t)=>{let{item:r,state:n,as:l,variant:u,color:i,disableAnimation:d,onAction:f,closeOnSelect:h,className:b,classNames:g,showDivider:x=!1,hideSelectedIcon:w,dividerProps:j={},itemClasses:N,title:P,...k}=e,_=(0,o.useMemo)(()=>(0,s.Dk)(),[]),S=(0,c.W)(null==g?void 0:g.base,b),C=(0,c.W)(null==g?void 0:g.divider,null==j?void 0:j.className),{itemProps:E,headingProps:I,groupProps:O}=(0,p.x7)({heading:r.rendered,"aria-label":r["aria-label"]});return(0,a.jsxs)(l||"li",{"data-slot":"base",...(0,v.dG)(E,k),className:_.base({class:S}),children:[r.rendered&&(0,a.jsx)("span",{...I,className:_.heading({class:null==g?void 0:g.heading}),"data-slot":"heading",children:r.rendered}),(0,a.jsxs)("ul",{...O,className:_.group({class:null==g?void 0:g.group}),"data-has-title":!!r.rendered,"data-slot":"group",children:[[...r.childNodes].map(e=>{let{key:t,props:r}=e,o=(0,a.jsx)(m,{classNames:N,closeOnSelect:h,color:i,disableAnimation:d,hideSelectedIcon:w,item:e,state:n,variant:u,onAction:f,...r},t);return e.wrapper&&(o=e.wrapper(o)),o}),x&&(0,a.jsx)(y.j,{as:"li",className:_.divider({class:C}),...j})]})]})});x.displayName="NextUI.MenuSection";var w=r(17695);function j(e,t){let{Component:r,state:n,closeOnSelect:o,color:s,disableAnimation:l,hideSelectedIcon:u,hideEmptyContent:i,variant:c,onClose:d,onAction:f,topContent:p,bottomContent:v,itemClasses:h,getBaseProps:b,getListProps:g,getEmptyContentProps:y}=(0,w.H)({...e,ref:t}),j=(0,a.jsxs)(r,{...g(),children:[!n.collection.size&&!i&&(0,a.jsx)("li",{children:(0,a.jsx)("div",{...y()})}),[...n.collection].map(e=>{let t={closeOnSelect:o,color:s,disableAnimation:l,item:e,state:n,variant:c,onClose:d,onAction:f,hideSelectedIcon:u,...e.props};if("section"===e.type)return(0,a.jsx)(x,{...t,itemClasses:h},e.key);let r=(0,a.jsx)(m,{...t,classNames:h},e.key);return e.wrapper&&(r=e.wrapper(r)),r})]});return(0,a.jsxs)("div",{...b(),children:[p,j,v]})}var N=(0,l.Gp)(j);j.displayName="NextUI.Menu"},53700:function(e,t,r){r.d(t,{W:function(){return a}});var a=r(75834).ck},17695:function(e,t,r){r.d(t,{H:function(){return c}});var a=r(28847),n=r(62545),o=r(28266),s=r(73908),l=r(2126),u=r(2265),i=r(5142);function c(e){let{as:t,ref:r,variant:c,color:d,children:f,disableAnimation:p,onAction:v,closeOnSelect:h,itemClasses:b,className:g,state:m,topContent:y,bottomContent:x,hideEmptyContent:w=!1,hideSelectedIcon:j=!1,emptyContent:N="No items.",menuProps:P,onClose:k,classNames:_,...S}=e,C=t||"ul",E=(0,s.gy)(r),I="string"==typeof C,O=(0,o.D)({...S,children:f}),R=m||O,{menuProps:B}=(0,a.H9)(S,R,E),M=(0,u.useMemo)(()=>(0,n.GI)({className:g}),[g]),G=(0,i.W)(null==_?void 0:_.base,g);return{Component:C,state:R,variant:c,color:d,disableAnimation:p,onAction:v,onClose:k,topContent:y,bottomContent:x,closeOnSelect:h,className:g,itemClasses:b,getBaseProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:E,"data-slot":"base",className:M.base({class:G}),...(0,l.z)(S,{enabled:I}),...e}},getListProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-slot":"list",className:M.list({class:null==_?void 0:_.list}),...P,...B,...e}},hideEmptyContent:w,hideSelectedIcon:j,getEmptyContentProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{children:N,className:M.emptyContent({class:null==_?void 0:_.emptyContent}),...e}}}}},20944:function(e,t,r){r.d(t,{L:function(){return b}});var a=r(42080),n=r(67728),o=r(26411),s=r(84291),l=r(73908),u=r(5142),i=r(34808),c=r(15132),d=r(38260),f=r(11246),p=r(2265),v=r(57437),h=(0,s.Gp)((e,t)=>{var r;let{as:s,icon:h,className:b,onChange:g,autoFocus:m,srOnlyText:y,...x}=e,w=(0,l.gy)(t),{slots:j,classNames:N,isMenuOpen:P,setIsMenuOpen:k}=(0,a.q)(),_=(0,c.l)({...x,isSelected:P,onChange:e=>{null==g||g(e),k(e)}}),{buttonProps:S,isPressed:C}=function(e,t,r){let{isSelected:a}=t,{isPressed:s,buttonProps:l}=(0,o.j)({...e,onPress:(0,n.tS)(t.toggle,e.onPress)},r);return{isPressed:s,buttonProps:(0,n.dG)(l,{"aria-pressed":a})}}(e,_,w),{isFocusVisible:E,focusProps:I}=(0,d.Fx)({autoFocus:m}),{isHovered:O,hoverProps:R}=(0,f.XI)({}),B=(0,u.W)(null==N?void 0:N.toggle,b),M=(0,p.useMemo)(()=>"function"==typeof h?h(null!=P&&P):h||(0,v.jsx)("span",{className:j.toggleIcon({class:null==N?void 0:N.toggleIcon})}),[h,P,j.toggleIcon,null==N?void 0:N.toggleIcon]),G=(0,p.useMemo)(()=>y||(_.isSelected?"close navigation menu":"open navigation menu"),[y,P]);return(0,v.jsxs)(s||"button",{ref:w,className:null==(r=j.toggle)?void 0:r.call(j,{class:B}),"data-focus-visible":(0,i.PB)(E),"data-hover":(0,i.PB)(O),"data-open":(0,i.PB)(P),"data-pressed":(0,i.PB)(C),...(0,n.dG)(S,I,R,x),children:[(0,v.jsx)("span",{className:j.srOnly(),children:G}),M]})});h.displayName="NextUI.NavbarMenuToggle";var b=h},42080:function(e,t,r){r.d(t,{V:function(){return a},q:function(){return n}});var[a,n]=(0,r(82901).k)({name:"NavbarContext",strict:!0,errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"})},52828:function(e,t,r){r.d(t,{R:function(){return v}});var a=r(96726),n=r(60431),o={visible:{y:0,transition:{ease:n.Lj.easeOut}},hidden:{y:"-100%",transition:{ease:n.Lj.easeIn}}},s=r(31254),l=r(42080),u=r(84291),i=r(34353),c=r(1843),d=r(67728),f=r(57437),p=(0,u.Gp)((e,t)=>{let{children:r,...n}=e,u=(0,s.R)({...n,ref:t}),p=u.Component,[v,h]=(0,i.N)(r,a.$),b=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("header",{...u.getWrapperProps(),children:v}),h]});return(0,f.jsx)(l.V,{value:u,children:u.shouldHideOnScroll?(0,f.jsx)(c.E.nav,{animate:u.isHidden?"hidden":"visible",initial:!1,variants:o,...(0,d.dG)(u.getBaseProps(),u.motionProps),children:b}):(0,f.jsx)(p,{...u.getBaseProps(),children:b})})});p.displayName="NextUI.Navbar";var v=p},96726:function(e,t,r){r.d(t,{$:function(){return g}});var a=r(42080),n={enter:{height:"calc(100vh - var(--navbar-height) - 1px)",transition:{duration:.3,easings:"easeOut"}},exit:{height:0,transition:{duration:.25,easings:"easeIn"}}},o=r(84291),s=r(73908),l=r(5142),u=r(34808),i=r(23995),c=r(1843),d=r(67728),f=r(2265),p=r(47225),v=r(94772),h=r(57437),b=(0,o.Gp)((e,t)=>{var r,o;let{className:b,children:g,portalContainer:m,motionProps:y,style:x,...w}=e,j=(0,s.gy)(t),{slots:N,isMenuOpen:P,height:k,disableAnimation:_,classNames:S}=(0,a.q)(),C=(0,l.W)(null==S?void 0:S.menu,b),E=(0,f.useCallback)(e=>{let{children:t}=e;return(0,h.jsx)(p.Z,{forwardProps:!0,enabled:P,removeScrollBar:!1,children:t})},[P]),I=_?(0,h.jsx)(E,{children:(0,h.jsx)("ul",{ref:j,className:null==(r=N.menu)?void 0:r.call(N,{class:C}),"data-open":(0,u.PB)(P),style:{"--navbar-height":k},...w,children:g})}):(0,h.jsx)(i.M,{mode:"wait",children:P?(0,h.jsx)(E,{children:(0,h.jsx)(c.E.ul,{ref:j,layoutScroll:!0,animate:"enter",className:null==(o=N.menu)?void 0:o.call(N,{class:C}),"data-open":(0,u.PB)(P),exit:"exit",initial:"exit",style:{"--navbar-height":k,...x},variants:n,...(0,d.dG)(y,w),children:g})}):null});return(0,h.jsx)(v.aV,{portalContainer:m,children:I})});b.displayName="NextUI.NavbarMenu";var g=b},9227:function(e,t,r){r.d(t,{k:function(){return c}});var a=r(42080),n=r(84291),o=r(73908),s=r(5142),l=r(34808),u=r(57437),i=(0,n.Gp)((e,t)=>{var r;let{as:n,className:i,children:c,isActive:d,...f}=e,p=(0,o.gy)(t),{slots:v,classNames:h}=(0,a.q)(),b=(0,s.W)(null==h?void 0:h.item,i);return(0,u.jsx)(n||"li",{ref:p,className:null==(r=v.item)?void 0:r.call(v,{class:b}),"data-active":(0,l.PB)(d),...f,children:c})});i.displayName="NextUI.NavbarItem";var c=i},69681:function(e,t,r){r.d(t,{U:function(){return i}});var a=r(42080),n=r(84291),o=r(73908),s=r(5142),l=r(57437),u=(0,n.Gp)((e,t)=>{var r;let{as:n,className:u,children:i,justify:c="start",...d}=e,f=(0,o.gy)(t),{slots:p,classNames:v}=(0,a.q)(),h=(0,s.W)(null==v?void 0:v.content,u);return(0,l.jsx)(n||"ul",{ref:f,className:null==(r=p.content)?void 0:r.call(p,{class:h}),"data-justify":c,...d,children:i})});u.displayName="NextUI.NavbarContent";var i=u},5785:function(e,t,r){r.d(t,{h:function(){return c}});var a=r(42080),n=r(84291),o=r(73908),s=r(5142),l=r(34808),u=r(57437),i=(0,n.Gp)((e,t)=>{var r;let{className:n,children:i,isActive:c,...d}=e,f=(0,o.gy)(t),{slots:p,isMenuOpen:v,classNames:h}=(0,a.q)(),b=(0,s.W)(null==h?void 0:h.menuItem,n);return(0,u.jsx)("li",{ref:f,className:null==(r=p.menuItem)?void 0:r.call(p,{class:b}),"data-active":(0,l.PB)(c),"data-open":(0,l.PB)(v),...d,children:i})});i.displayName="NextUI.NavbarMenuItem";var c=i},58192:function(e,t,r){r.d(t,{H:function(){return i}});var a=r(42080),n=r(84291),o=r(73908),s=r(5142),l=r(57437),u=(0,n.Gp)((e,t)=>{var r;let{as:n,className:u,children:i,...c}=e,d=(0,o.gy)(t),{slots:f,classNames:p}=(0,a.q)(),v=(0,s.W)(null==p?void 0:p.brand,u);return(0,l.jsx)(n||"div",{ref:d,className:null==(r=f.brand)?void 0:r.call(f,{class:v}),...c,children:i})});u.displayName="NextUI.NavbarBrand";var i=u},31254:function(e,t,r){r.d(t,{R:function(){return b}});var a=r(84291),n=r(72044),o=r(41244),s=(0,n.tv)({slots:{base:["flex","z-40","w-full","h-auto","items-center","justify-center","data-[menu-open=true]:border-none"],wrapper:["z-40","flex","px-6","gap-4","w-full","flex-row","relative","flex-nowrap","items-center","justify-between","h-[var(--navbar-height)]"],toggle:["group","flex","items-center","justify-center","w-6","h-full","outline-none","rounded-small","tap-highlight-transparent",...o.Dh],srOnly:["sr-only"],toggleIcon:["w-full","h-full","pointer-events-none","flex","flex-col","items-center","justify-center","text-inherit","group-data-[pressed=true]:opacity-70","transition-opacity","before:content-['']","before:block","before:h-px","before:w-6","before:bg-current","before:transition-transform","before:duration-150","before:-translate-y-1","before:rotate-0","group-data-[open=true]:before:translate-y-px","group-data-[open=true]:before:rotate-45","after:content-['']","after:block","after:h-px","after:w-6","after:bg-current","after:transition-transform","after:duration-150","after:translate-y-1","after:rotate-0","group-data-[open=true]:after:translate-y-0","group-data-[open=true]:after:-rotate-45"],brand:["flex","basis-0","flex-row","flex-grow","flex-nowrap","justify-start","bg-transparent","items-center","no-underline","text-medium","whitespace-nowrap","box-border"],content:["flex","gap-4","h-full","flex-row","flex-nowrap","items-center","data-[justify=start]:justify-start","data-[justify=start]:flex-grow","data-[justify=start]:basis-0","data-[justify=center]:justify-center","data-[justify=end]:justify-end","data-[justify=end]:flex-grow","data-[justify=end]:basis-0"],item:["text-medium","whitespace-nowrap","box-border","list-none","data-[active=true]:font-semibold"],menu:["z-30","px-6","pt-2","fixed","flex","max-w-full","top-[var(--navbar-height)]","inset-x-0","bottom-0","w-screen","flex-col","gap-2","overflow-y-auto"],menuItem:["text-large","data-[active=true]:font-semibold"]},variants:{position:{static:{base:"static"},sticky:{base:"sticky top-0 inset-x-0"}},maxWidth:{sm:{wrapper:"max-w-[640px]"},md:{wrapper:"max-w-[768px]"},lg:{wrapper:"max-w-[1024px]"},xl:{wrapper:"max-w-[1280px]"},"2xl":{wrapper:"max-w-[1536px]"},full:{wrapper:"max-w-full"}},hideOnScroll:{true:{base:["sticky","top-0","inset-x-0"]}},isBordered:{true:{base:["border-b","border-divider"]}},isBlurred:{false:{base:"bg-background",menu:"bg-background"},true:{base:["backdrop-blur-lg","data-[menu-open=true]:backdrop-blur-xl","backdrop-saturate-150","bg-background/70"],menu:["backdrop-blur-xl","backdrop-saturate-150","bg-background/70"]}},disableAnimation:{true:{menu:["hidden","h-[calc(100dvh_-_var(--navbar-height)_-_1px)]","data-[open=true]:flex"]}}},defaultVariants:{maxWidth:"lg",position:"sticky",isBlurred:!0}}),l=r(73908),u=r(5142),i=r(34808),c=r(2265),d=r(67728),f="undefined"!=typeof window;function p(e){return f?e?{x:e.scrollLeft,y:e.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var v=e=>{let{elementRef:t,delay:r=30,callback:a,isEnabled:n}=e,o=(0,c.useRef)(n?p(null==t?void 0:t.current):{x:0,y:0}),s=null,l=()=>{let e=p(null==t?void 0:t.current);"function"==typeof a&&a({prevPos:o.current,currPos:e}),o.current=e,s=null};return(0,c.useEffect)(()=>{if(!n)return;let e=()=>{r?null===s&&(s=setTimeout(l,r)):l()},a=(null==t?void 0:t.current)||window;return a.addEventListener("scroll",e),()=>a.removeEventListener("scroll",e)},[null==t?void 0:t.current,r,n]),o.current},h=r(90365);function b(e){var t;let[r,n]=(0,a.oe)(e,s.variantKeys),{ref:o,as:f,parentRef:p,height:b="4rem",shouldHideOnScroll:g=!1,disableScrollHandler:m=!1,onScrollPositionChange:y,isMenuOpen:x,isMenuDefaultOpen:w,onMenuOpenChange:j=()=>{},motionProps:N,className:P,classNames:k,..._}=r,S=(0,l.gy)(o),C=(0,c.useRef)(0),E=(0,c.useRef)(0),[I,O]=(0,c.useState)(!1),R=(0,c.useCallback)(e=>{j(e||!1)},[j]),[B,M]=(0,h.zk)(x,w,R),G=()=>{if(S.current){let e=S.current.offsetWidth;e!==C.current&&(C.current=e)}};(0,d.yU)({ref:S,onResize:()=>{var e;(null==(e=S.current)?void 0:e.offsetWidth)!==C.current&&(G(),M(!1))}}),(0,c.useEffect)(()=>{var e;G(),E.current=(null==(e=S.current)?void 0:e.offsetHeight)||0},[]);let U=(0,c.useMemo)(()=>s({...n,hideOnScroll:g}),[...Object.values(n),g]),W=(0,u.W)(null==k?void 0:k.base,P);return v({elementRef:p,isEnabled:g||!m,callback:e=>{let{prevPos:t,currPos:r}=e;null==y||y(r.y),g&&O(e=>{let a=r.y>t.y&&r.y>E.current;return a!==e?a:e})}}),{Component:f||"nav",slots:U,domRef:S,height:b,isHidden:I,disableAnimation:null!=(t=e.disableAnimation)&&t,shouldHideOnScroll:g,isMenuOpen:B,classNames:k,setIsMenuOpen:M,motionProps:N,getBaseProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...(0,d.dG)(_,e),"data-hidden":(0,i.PB)(I),"data-menu-open":(0,i.PB)(B),ref:S,className:U.base({class:(0,u.W)(W,null==e?void 0:e.className)}),style:{"--navbar-height":b,...null==_?void 0:_.style,...null==e?void 0:e.style}}},getWrapperProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,"data-menu-open":(0,i.PB)(B),className:U.wrapper({class:(0,u.W)(null==k?void 0:k.wrapper,null==e?void 0:e.className)})}}}}},6346:function(e,t,r){r.d(t,{g:function(){return h}});var a=r(91633),n=r(2265),o=r(84291),s=r(94772),l=r(60431),u=r(1843),i=r(40710),c=r(67728),d=r(47225),f=r(10071),p=r(57437),v=(0,o.Gp)((e,t)=>{let{as:r,children:o,className:v,...h}=e,{Component:b,isOpen:g,placement:m,motionProps:y,backdrop:x,disableAnimation:w,shouldBlockScroll:j,getPopoverProps:N,getDialogProps:P,getBackdropProps:k,getContentProps:_,isNonModal:S,onClose:C}=(0,a.l)(),E=(0,n.useRef)(null),{dialogProps:I,titleProps:O}=(0,i.R)({},E);delete I.role;let R=(0,p.jsxs)(p.Fragment,{children:[!S&&(0,p.jsx)(s.U4,{onDismiss:C}),(0,p.jsx)(r||b||"div",{...P((0,c.dG)(I,h)),ref:E,children:(0,p.jsx)("div",{..._({className:v}),children:"function"==typeof o?o(O):o})}),(0,p.jsx)(s.U4,{onDismiss:C})]}),B=(0,n.useMemo)(()=>"transparent"===x?null:w?(0,p.jsx)("div",{...k()}):(0,p.jsx)(u.E.div,{animate:"enter",exit:"exit",initial:"exit",variants:l.y7.fade,...k()}),[x,w,k]);return(0,p.jsxs)("div",{...N(),children:[B,(0,p.jsx)(d.Z,{forwardProps:!0,enabled:j&&g,removeScrollBar:!1,children:w?R:(0,p.jsx)(u.E.div,{animate:"enter",exit:"exit",initial:"initial",style:{...(0,f.VS)("center"===m?"top":m)},variants:l.y7.scaleSpringOpacity,...y,children:R})})]})});v.displayName="NextUI.PopoverContent";var h=v},75972:function(e,t,r){r.d(t,{b:function(){return f}});var a=r(91633),n=r(2265),o=r(84291),s=r(34353),l=r(26411),u=r(62423),i=r(67728),c=r(57437),d=(0,o.Gp)((e,t)=>{let{triggerRef:r,getTriggerProps:o}=(0,a.l)(),{children:d,...f}=e,p=(0,n.useMemo)(()=>"string"==typeof d?(0,c.jsx)("p",{children:d}):n.Children.only(d),[d]),{onPress:v,...h}=(0,n.useMemo)(()=>o((0,i.dG)(p.props,f),p.ref),[o,p.props,f,p.ref]),[,b]=(0,s.N)(d,u.A),{buttonProps:g}=(0,l.j)({onPress:v},r),m=(0,n.useMemo)(()=>(null==b?void 0:b[0])!==void 0,[b]);return(0,n.cloneElement)(p,(0,i.dG)(h,m?{onPress:v}:g))});d.displayName="NextUI.PopoverTrigger";var f=d},48150:function(e,t,r){r.d(t,{j:function(){return d}});var a=r(91633),n=r(64533),o=r(2265),s=r(84291),l=r(94772),u=r(23995),i=r(57437),c=(0,s.Gp)((e,t)=>{let{children:r,...s}=e,c=(0,n.S)({...s,ref:t}),[d,f]=o.Children.toArray(r),p=(0,i.jsx)(l.aV,{portalContainer:c.portalContainer,children:f});return(0,i.jsxs)(a.H,{value:c,children:[d,c.disableAnimation&&c.isOpen?p:(0,i.jsx)(u.M,{children:c.isOpen?p:null})]})});c.displayName="NextUI.Popover";var d=c},91633:function(e,t,r){r.d(t,{H:function(){return a},l:function(){return n}});var[a,n]=(0,r(82901).k)({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"})},91330:function(e,t,r){r.d(t,{N:function(){return o}});var a=r(69772),n=(0,a.E)({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(e){var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator,p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||p}function g(){}function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var y=m.prototype=new g;y.constructor=m,v(y,b.prototype),y.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,a){var n,o={},s=null,l=null;if(null!=r)for(n in void 0!==r.ref&&(l=r.ref),void 0!==r.key&&(s=""+r.key),r)w.call(r,n)&&!N.hasOwnProperty(n)&&(o[n]=r[n]);var u=arguments.length-2;if(1===u)o.children=a;else if(1<u){for(var i=Array(u),c=0;c<u;c++)i[c]=arguments[c+2];o.children=i}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:t,type:e,key:s,ref:l,props:o,_owner:j.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var _=/\/+/g;function S(e,t){var r,a;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,a={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return a[e]})):t.toString(36)}function C(e,a,n){if(null==e)return e;var o=[],s=0;return!function e(a,n,o,s,l){var u,i,c,d=typeof a;("undefined"===d||"boolean"===d)&&(a=null);var p=!1;if(null===a)p=!0;else switch(d){case"string":case"number":p=!0;break;case"object":switch(a.$$typeof){case t:case r:p=!0}}if(p)return l=l(p=a),a=""===s?"."+S(p,0):s,x(l)?(o="",null!=a&&(o=a.replace(_,"$&/")+"/"),e(l,n,o,"",function(e){return e})):null!=l&&(k(l)&&(u=l,i=o+(!l.key||p&&p.key===l.key?"":(""+l.key).replace(_,"$&/")+"/")+a,l={$$typeof:t,type:u.type,key:i,ref:u.ref,props:u.props,_owner:u._owner}),n.push(l)),1;if(p=0,s=""===s?".":s+":",x(a))for(var v=0;v<a.length;v++){var h=s+S(d=a[v],v);p+=e(d,n,o,h,l)}else if("function"==typeof(h=null===(c=a)||"object"!=typeof c?null:"function"==typeof(c=f&&c[f]||c["@@iterator"])?c:null))for(a=h.call(a),v=0;!(d=a.next()).done;)h=s+S(d=d.value,v++),p+=e(d,n,o,h,l);else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(a))?"object with keys {"+Object.keys(a).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return p}(e,o,"","",function(e){return a.call(n,e,s++)}),o}function E(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},O={transition:null};e.Children={map:C,forEach:function(e,t,r){C(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return C(e,function(){t++}),t},toArray:function(e){return C(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},e.Component=b,e.Fragment=a,e.Profiler=o,e.PureComponent=m,e.StrictMode=n,e.Suspense=i,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:O,ReactCurrentOwner:j},e.cloneElement=function(e,r,a){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=v({},e.props),o=e.key,s=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,l=j.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in r)w.call(r,i)&&!N.hasOwnProperty(i)&&(n[i]=void 0===r[i]&&void 0!==u?u[i]:r[i])}var i=arguments.length-2;if(1===i)n.children=a;else if(1<i){u=Array(i);for(var c=0;c<i;c++)u[c]=arguments[c+2];n.children=u}return{$$typeof:t,type:e.type,key:o,ref:s,props:n,_owner:l}},e.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},e.createElement=P,e.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:u,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:E}},e.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},e.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(e,t){return I.current.useCallback(e,t)},e.useContext=function(e){return I.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return I.current.useDeferredValue(e)},e.useEffect=function(e,t){return I.current.useEffect(e,t)},e.useId=function(){return I.current.useId()},e.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},e.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return I.current.useMemo(e,t)},e.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},e.useRef=function(e){return I.current.useRef(e)},e.useState=function(e){return I.current.useState(e)},e.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},e.useTransition=function(){return I.current.useTransition()},e.version="18.2.0"}});(0,a.E)({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(e,t){}});var o=(0,a.E)({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(e,t){t.exports=n()}});/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */},69772:function(e,t,r){r.d(t,{E:function(){return i},v:function(){return d}});var a=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,i=(e,t)=>function(){return t||(0,e[s(e)[0]])((t={exports:{}}).exports,t),t.exports},c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of s(t))u.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},d=(e,t,r)=>(r=null!=e?a(l(e)):{},c(!t&&e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e))},34353:function(e,t,r){r.d(t,{N:function(){return s},W:function(){return o}});var a=r(91330),n=(0,r(69772).v)((0,a.N)());function o(e){return n.Children.toArray(e).filter(e=>(0,n.isValidElement)(e))}var s=(e,t)=>{var r;let a=[];return[null==(r=n.Children.map(e,e=>(0,n.isValidElement)(e)&&e.type===t?(a.push(e),null):e))?void 0:r.filter(Boolean),a.length>=0?a:void 0]}},7878:function(e,t,r){r.d(t,{l:function(){return n}});var a=r(34808);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach(t=>(function(e,t){if(null!=e){if((0,a.mf)(e)){e(t);return}try{e.current=t}catch(r){throw Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}})(t,e))}}},52799:function(e,t,r){r.d(t,{W:function(){return o}});var a=r(46203),n=r(2265);function o(e){let t=(0,a.d)(e),[r,o]=(0,n.useState)(null),[s,l]=(0,n.useState)([]),u=()=>{l([]),t.close()};return{focusStrategy:r,...t,open(e=null){o(e),t.open()},toggle(e=null){o(e),t.toggle()},close(){u()},UNSTABLE_expandedKeysStack:s,UNSTABLE_openSubmenu:(e,t)=>{l(r=>t>r.length?r:[...r.slice(0,t),e])},UNSTABLE_closeSubmenu:(e,t)=>{l(r=>r[t]===e?r.slice(0,t):r)}}}}}]);