var b=Object.defineProperty;var l=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var i=(e,r,o)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,d=(e,r)=>{for(var o in r||(r={}))c.call(r,o)&&i(e,o,r[o]);if(l)for(var o of l(r))p.call(r,o)&&i(e,o,r[o]);return e};var m=(e,r)=>{var o={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&l)for(var t of l(e))r.indexOf(t)<0&&p.call(e,t)&&(o[t]=e[t]);return o};import{j as u}from"./jsx-runtime.9b3a9e41.js";import"./index.89edf85d.js";const a=g=>{var s=g,{label:e="Label example",size:r="normal",capitalize:o=!1,color:t="default",textColor:y}=s,z=m(s,["label","size","capitalize","color","textColor"]);return u("span",{className:`label ${r} text-${t}`,style:{color:y},children:o?e.toUpperCase():e})};try{a.displayName="CustomLabel",a.__docgenInfo={description:"Primary UI component for user interaction",displayName:"CustomLabel",props:{label:{defaultValue:{value:"Label example"},description:"Is this the principal call to action on the page?bbb",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Is this the principal call to action on the page?bbb",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},capitalize:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?bbb",name:"capitalize",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"secondary"'},{value:'"tertiary"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CustomLabel.tsx#CustomLabel"]={docgenInfo:a.__docgenInfo,name:"CustomLabel",path:"src/components/CustomLabel.tsx#CustomLabel"})}catch{}var v={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { CustomLabel } from "../../components/CustomLabel";\r
\r
\r
export default {\r
  title: 'Example/CustomLabel',\r
  component: CustomLabel,\r
  argTypes: {\r
    label: { control: { type: 'text' } },\r
    size: {\r
      control: { type: 'select' },\r
      options: ['normal', 'h1', 'h2', 'h3'],\r
    },\r
    color: {\r
      control: { type: 'select' },\r
      options: ['default', 'primary', 'secondary', 'tertiary'],\r
    },\r
    textColor: {\r
      control: { type: 'color' }\r
    }\r
  }\r
} as ComponentMeta<typeof CustomLabel>;\r
\r
const Template: ComponentStory<typeof CustomLabel> = (args) => <CustomLabel {...args} />;\r
\r
\r
export const Basic = Template.bind({}); // Crea copia sin referencia del template original\r
Basic.args = {\r
  size: 'normal',\r
  capitalize: false,\r
};\r
\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
  size: 'normal',\r
  capitalize: true,\r
};\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
  size: 'normal',\r
  color: 'secondary',\r
};\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
  size: 'normal',\r
  color: 'tertiary',\r
};\r
\r
export const FontColor = Template.bind({});\r
FontColor.args = {\r
  size: 'h1',\r
  textColor: '#0012ff',\r
};`,locationsMap:{basic:{startLoc:{col:53,line:24},endLoc:{col:88,line:24},startBody:{col:53,line:24},endBody:{col:88,line:24}},"all-caps":{startLoc:{col:53,line:24},endLoc:{col:88,line:24},startBody:{col:53,line:24},endBody:{col:88,line:24}},secondary:{startLoc:{col:53,line:24},endLoc:{col:88,line:24},startBody:{col:53,line:24},endBody:{col:88,line:24}},tertiary:{startLoc:{col:53,line:24},endLoc:{col:88,line:24},startBody:{col:53,line:24},endBody:{col:88,line:24}},"font-color":{startLoc:{col:53,line:24},endLoc:{col:88,line:24},startBody:{col:53,line:24},endBody:{col:88,line:24}}}}},title:"Example/CustomLabel",component:a,argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},options:["normal","h1","h2","h3"]},color:{control:{type:"select"},options:["default","primary","secondary","tertiary"]},textColor:{control:{type:"color"}}}};const n=e=>u(a,d({},e)),f=n.bind({});f.args={size:"normal",capitalize:!1};const C=n.bind({});C.args={size:"normal",capitalize:!0};const L=n.bind({});L.args={size:"normal",color:"secondary"};const x=n.bind({});x.args={size:"normal",color:"tertiary"};const h=n.bind({});h.args={size:"h1",textColor:"#0012ff"};const B=["Basic","AllCaps","Secondary","Tertiary","FontColor"];export{C as AllCaps,f as Basic,h as FontColor,L as Secondary,x as Tertiary,B as __namedExportsOrder,v as default};
//# sourceMappingURL=CustomLabel.stories.d74ed91d.js.map
