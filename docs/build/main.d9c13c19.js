(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(t,r,e){"use strict";e.d(r,"b",(function(){return getSubProperties})),e.d(r,"a",(function(){return getCodeString}));var i=e(232);e(44);function getSubProperties(t,r){var e,n=r?r.id:void 0,s=null!==(e=null==r?void 0:r.depth)&&void 0!==e?e:0,a=t.filter((function(t){return t.parent===n})),o=[];return a.length<1?[]:(a.forEach((function(r){r.depth=s+1,o.push.apply(o,[r].concat(Object(i.a)(getSubProperties(t,r))))})),o)}function getObjectString(t,r,e,i){for(var n,s=r.parent?"".concat(r.name," : { \n"):" { \n",a=t.filter((function(t){return t.parent===r.id})),o=0;o<a.length;o++){var p,c=a[o];s+=getIndent(null!==(p=c.depth)&&void 0!==p?p:0);var j=o<a.length-1?", \n":"";"Array"!==c.type?"Object"!==c.type?s+="".concat(c.name," : ").concat(c.type.toLowerCase()," ").concat(j):s+=getObjectString(t,c,"",j):s+=getArrayString(t,c,"",j)}return"".concat(null!=e?e:"").concat(s," \n ").concat(getIndent(null!==(n=r.depth)&&void 0!==n?n:0)," }").concat(null!=i?i:"")}function getIndent(t){for(var r="",e=0;e<t;e++)r+="   ";return r}function getArrayString(t,r,e,i){var n=t.find((function(t){return t.parent===r.id})),s=r.parent?"".concat(r.name," :"):"";return"".concat(null!=e?e:"").concat(s," Array<").concat((null==n?void 0:n.type.toLowerCase())||"undefined","> ").concat(null!=i?i:"")}function getCodeString(t){var r=t[0],e="type ".concat(r.name," = ");return"Array"===r.type?getArrayString(t,r,e):"Object"===r.type?getObjectString(t,r,e):e+r.type.toLowerCase()}},1104:function(t,r,e){t.exports={doclets:{},displayName:"Code",description:"",methods:[],props:[{required:!0,tsType:{name:"Array",elements:[{name:"Property"}],raw:"Array<Property>"},description:"the list of properties",tags:{example:[{title:"example",description:"../../docs/examples/code.md"}]},name:"customType"}],examples:null}},1105:function(t,r,e){t.exports={doclets:{},displayName:"TailwindInput",description:"",methods:[],props:[{required:!0,tsType:{name:"OnChange"},description:"",tags:{},name:"onChange"},{required:!0,tsType:{name:"string"},description:"",tags:{},name:"type"},{required:!0,tsType:{name:"string"},description:"",tags:{},name:"value"},{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1},tags:{},name:"placeholder"}],examples:null}},1106:function(t,r,e){t.exports={doclets:{},displayName:"Property",description:"",methods:[],props:[{required:!0,tsType:{name:"AddProperty"},description:"",tags:{},name:"addProperty"},{required:!0,tsType:{name:"ChangeProperty"},description:"",tags:{},name:"changeProperty"},{required:!0,tsType:{name:"DeleteProperty"},description:"",tags:{},name:"deleteProperty"},{required:!0,tsType:{name:"Property"},description:"",tags:{},name:"property"}],examples:null}},1107:function(t,r,e){"use strict";e.r(r);e(0);var i=e(104),n=e(150),s=e(8);r.default=function CustomType(t){var r=t.customType,e=t.addProperty,a=t.changeProperty,o=t.deleteProperty;return Object(s.jsx)("div",{children:Object(i.b)(r).map((function(t,r){return Object(s.jsx)(n.default,{property:t,addProperty:e,deleteProperty:o,changeProperty:a},r)}))})}},1108:function(t,r,e){t.exports={doclets:{},displayName:"CustomType",description:"Get sorted property list and iterate them with Property component\n",methods:[],props:[{required:!0,tsType:{name:"AddProperty"},description:"",tags:{},name:"addProperty"},{required:!0,tsType:{name:"ChangeProperty"},description:"",tags:{},name:"changeProperty"},{required:!0,tsType:{name:"Array",elements:[{name:"Property"}],raw:"Array<Property>"},description:"",tags:{},name:"customType"},{required:!0,tsType:{name:"DeleteProperty"},description:"",tags:{},name:"deleteProperty"}],tags:{},examples:null}},150:function(t,r,e){"use strict";e.r(r);var i=e(44),n=(e(0),e(59)),s=e(8),a=["Boolean","String","Number","Array","Object"];r.default=function Property(t){var r=t.property,e=t.addProperty,o=t.changeProperty,p=t.deleteProperty;return Object(s.jsx)("div",{style:{paddingLeft:(r.depth?50*r.depth:0).toString()+"px"},children:Object(s.jsxs)("div",{className:"type-item",children:[Object(s.jsx)(n.TailwindInput,{type:"text",value:r.name,onChange:function handleNameChange(t){o(Object(i.a)(Object(i.a)({},r),{},{name:t.target.value}))},placeholder:"name..."})," :",Object(s.jsx)(n.TailwindSelect,{value:r.type,onChange:function handleTypeChange(t){o(Object(i.a)(Object(i.a)({},r),{},{type:t.target.value}))},options:a}),"Object"===r.type?Object(s.jsx)(n.AddButton,{onClick:function onClick(){return e(r.id)}}):"",void 0!==r.parent?Object(s.jsx)(n.DeleteButton,{onClick:function onClick(){return p(r.id)}}):""]})})}},235:function(t,r,e){t.exports=e(1109)},418:function(t,r,e){var i={"./Binary_Property/ASCII.js":419,"./Binary_Property/ASCII_Hex_Digit.js":420,"./Binary_Property/Alphabetic.js":421,"./Binary_Property/Any.js":422,"./Binary_Property/Assigned.js":423,"./Binary_Property/Bidi_Control.js":424,"./Binary_Property/Bidi_Mirrored.js":425,"./Binary_Property/Case_Ignorable.js":426,"./Binary_Property/Cased.js":427,"./Binary_Property/Changes_When_Casefolded.js":428,"./Binary_Property/Changes_When_Casemapped.js":429,"./Binary_Property/Changes_When_Lowercased.js":430,"./Binary_Property/Changes_When_NFKC_Casefolded.js":431,"./Binary_Property/Changes_When_Titlecased.js":432,"./Binary_Property/Changes_When_Uppercased.js":433,"./Binary_Property/Dash.js":434,"./Binary_Property/Default_Ignorable_Code_Point.js":435,"./Binary_Property/Deprecated.js":436,"./Binary_Property/Diacritic.js":437,"./Binary_Property/Emoji.js":438,"./Binary_Property/Emoji_Component.js":439,"./Binary_Property/Emoji_Modifier.js":440,"./Binary_Property/Emoji_Modifier_Base.js":441,"./Binary_Property/Emoji_Presentation.js":442,"./Binary_Property/Extended_Pictographic.js":443,"./Binary_Property/Extender.js":444,"./Binary_Property/Grapheme_Base.js":445,"./Binary_Property/Grapheme_Extend.js":446,"./Binary_Property/Hex_Digit.js":447,"./Binary_Property/IDS_Binary_Operator.js":448,"./Binary_Property/IDS_Trinary_Operator.js":449,"./Binary_Property/ID_Continue.js":450,"./Binary_Property/ID_Start.js":451,"./Binary_Property/Ideographic.js":452,"./Binary_Property/Join_Control.js":453,"./Binary_Property/Logical_Order_Exception.js":454,"./Binary_Property/Lowercase.js":455,"./Binary_Property/Math.js":456,"./Binary_Property/Noncharacter_Code_Point.js":457,"./Binary_Property/Pattern_Syntax.js":458,"./Binary_Property/Pattern_White_Space.js":459,"./Binary_Property/Quotation_Mark.js":460,"./Binary_Property/Radical.js":461,"./Binary_Property/Regional_Indicator.js":462,"./Binary_Property/Sentence_Terminal.js":463,"./Binary_Property/Soft_Dotted.js":464,"./Binary_Property/Terminal_Punctuation.js":465,"./Binary_Property/Unified_Ideograph.js":466,"./Binary_Property/Uppercase.js":467,"./Binary_Property/Variation_Selector.js":468,"./Binary_Property/White_Space.js":469,"./Binary_Property/XID_Continue.js":470,"./Binary_Property/XID_Start.js":471,"./General_Category/Cased_Letter.js":472,"./General_Category/Close_Punctuation.js":473,"./General_Category/Connector_Punctuation.js":474,"./General_Category/Control.js":475,"./General_Category/Currency_Symbol.js":476,"./General_Category/Dash_Punctuation.js":477,"./General_Category/Decimal_Number.js":478,"./General_Category/Enclosing_Mark.js":479,"./General_Category/Final_Punctuation.js":480,"./General_Category/Format.js":481,"./General_Category/Initial_Punctuation.js":482,"./General_Category/Letter.js":483,"./General_Category/Letter_Number.js":484,"./General_Category/Line_Separator.js":485,"./General_Category/Lowercase_Letter.js":486,"./General_Category/Mark.js":487,"./General_Category/Math_Symbol.js":488,"./General_Category/Modifier_Letter.js":489,"./General_Category/Modifier_Symbol.js":490,"./General_Category/Nonspacing_Mark.js":491,"./General_Category/Number.js":492,"./General_Category/Open_Punctuation.js":493,"./General_Category/Other.js":494,"./General_Category/Other_Letter.js":495,"./General_Category/Other_Number.js":496,"./General_Category/Other_Punctuation.js":497,"./General_Category/Other_Symbol.js":498,"./General_Category/Paragraph_Separator.js":499,"./General_Category/Private_Use.js":500,"./General_Category/Punctuation.js":501,"./General_Category/Separator.js":502,"./General_Category/Space_Separator.js":503,"./General_Category/Spacing_Mark.js":504,"./General_Category/Surrogate.js":505,"./General_Category/Symbol.js":506,"./General_Category/Titlecase_Letter.js":507,"./General_Category/Unassigned.js":508,"./General_Category/Uppercase_Letter.js":509,"./Script/Adlam.js":510,"./Script/Ahom.js":511,"./Script/Anatolian_Hieroglyphs.js":512,"./Script/Arabic.js":513,"./Script/Armenian.js":514,"./Script/Avestan.js":515,"./Script/Balinese.js":516,"./Script/Bamum.js":517,"./Script/Bassa_Vah.js":518,"./Script/Batak.js":519,"./Script/Bengali.js":520,"./Script/Bhaiksuki.js":521,"./Script/Bopomofo.js":522,"./Script/Brahmi.js":523,"./Script/Braille.js":524,"./Script/Buginese.js":525,"./Script/Buhid.js":526,"./Script/Canadian_Aboriginal.js":527,"./Script/Carian.js":528,"./Script/Caucasian_Albanian.js":529,"./Script/Chakma.js":530,"./Script/Cham.js":531,"./Script/Cherokee.js":532,"./Script/Chorasmian.js":533,"./Script/Common.js":534,"./Script/Coptic.js":535,"./Script/Cuneiform.js":536,"./Script/Cypriot.js":537,"./Script/Cyrillic.js":538,"./Script/Deseret.js":539,"./Script/Devanagari.js":540,"./Script/Dives_Akuru.js":541,"./Script/Dogra.js":542,"./Script/Duployan.js":543,"./Script/Egyptian_Hieroglyphs.js":544,"./Script/Elbasan.js":545,"./Script/Elymaic.js":546,"./Script/Ethiopic.js":547,"./Script/Georgian.js":548,"./Script/Glagolitic.js":549,"./Script/Gothic.js":550,"./Script/Grantha.js":551,"./Script/Greek.js":552,"./Script/Gujarati.js":553,"./Script/Gunjala_Gondi.js":554,"./Script/Gurmukhi.js":555,"./Script/Han.js":556,"./Script/Hangul.js":557,"./Script/Hanifi_Rohingya.js":558,"./Script/Hanunoo.js":559,"./Script/Hatran.js":560,"./Script/Hebrew.js":561,"./Script/Hiragana.js":562,"./Script/Imperial_Aramaic.js":563,"./Script/Inherited.js":564,"./Script/Inscriptional_Pahlavi.js":565,"./Script/Inscriptional_Parthian.js":566,"./Script/Javanese.js":567,"./Script/Kaithi.js":568,"./Script/Kannada.js":569,"./Script/Katakana.js":570,"./Script/Kayah_Li.js":571,"./Script/Kharoshthi.js":572,"./Script/Khitan_Small_Script.js":573,"./Script/Khmer.js":574,"./Script/Khojki.js":575,"./Script/Khudawadi.js":576,"./Script/Lao.js":577,"./Script/Latin.js":578,"./Script/Lepcha.js":579,"./Script/Limbu.js":580,"./Script/Linear_A.js":581,"./Script/Linear_B.js":582,"./Script/Lisu.js":583,"./Script/Lycian.js":584,"./Script/Lydian.js":585,"./Script/Mahajani.js":586,"./Script/Makasar.js":587,"./Script/Malayalam.js":588,"./Script/Mandaic.js":589,"./Script/Manichaean.js":590,"./Script/Marchen.js":591,"./Script/Masaram_Gondi.js":592,"./Script/Medefaidrin.js":593,"./Script/Meetei_Mayek.js":594,"./Script/Mende_Kikakui.js":595,"./Script/Meroitic_Cursive.js":596,"./Script/Meroitic_Hieroglyphs.js":597,"./Script/Miao.js":598,"./Script/Modi.js":599,"./Script/Mongolian.js":600,"./Script/Mro.js":601,"./Script/Multani.js":602,"./Script/Myanmar.js":603,"./Script/Nabataean.js":604,"./Script/Nandinagari.js":605,"./Script/New_Tai_Lue.js":606,"./Script/Newa.js":607,"./Script/Nko.js":608,"./Script/Nushu.js":609,"./Script/Nyiakeng_Puachue_Hmong.js":610,"./Script/Ogham.js":611,"./Script/Ol_Chiki.js":612,"./Script/Old_Hungarian.js":613,"./Script/Old_Italic.js":614,"./Script/Old_North_Arabian.js":615,"./Script/Old_Permic.js":616,"./Script/Old_Persian.js":617,"./Script/Old_Sogdian.js":618,"./Script/Old_South_Arabian.js":619,"./Script/Old_Turkic.js":620,"./Script/Oriya.js":621,"./Script/Osage.js":622,"./Script/Osmanya.js":623,"./Script/Pahawh_Hmong.js":624,"./Script/Palmyrene.js":625,"./Script/Pau_Cin_Hau.js":626,"./Script/Phags_Pa.js":627,"./Script/Phoenician.js":628,"./Script/Psalter_Pahlavi.js":629,"./Script/Rejang.js":630,"./Script/Runic.js":631,"./Script/Samaritan.js":632,"./Script/Saurashtra.js":633,"./Script/Sharada.js":634,"./Script/Shavian.js":635,"./Script/Siddham.js":636,"./Script/SignWriting.js":637,"./Script/Sinhala.js":638,"./Script/Sogdian.js":639,"./Script/Sora_Sompeng.js":640,"./Script/Soyombo.js":641,"./Script/Sundanese.js":642,"./Script/Syloti_Nagri.js":643,"./Script/Syriac.js":644,"./Script/Tagalog.js":645,"./Script/Tagbanwa.js":646,"./Script/Tai_Le.js":647,"./Script/Tai_Tham.js":648,"./Script/Tai_Viet.js":649,"./Script/Takri.js":650,"./Script/Tamil.js":651,"./Script/Tangut.js":652,"./Script/Telugu.js":653,"./Script/Thaana.js":654,"./Script/Thai.js":655,"./Script/Tibetan.js":656,"./Script/Tifinagh.js":657,"./Script/Tirhuta.js":658,"./Script/Ugaritic.js":659,"./Script/Vai.js":660,"./Script/Wancho.js":661,"./Script/Warang_Citi.js":662,"./Script/Yezidi.js":663,"./Script/Yi.js":664,"./Script/Zanabazar_Square.js":665,"./Script_Extensions/Adlam.js":666,"./Script_Extensions/Ahom.js":667,"./Script_Extensions/Anatolian_Hieroglyphs.js":668,"./Script_Extensions/Arabic.js":669,"./Script_Extensions/Armenian.js":670,"./Script_Extensions/Avestan.js":671,"./Script_Extensions/Balinese.js":672,"./Script_Extensions/Bamum.js":673,"./Script_Extensions/Bassa_Vah.js":674,"./Script_Extensions/Batak.js":675,"./Script_Extensions/Bengali.js":676,"./Script_Extensions/Bhaiksuki.js":677,"./Script_Extensions/Bopomofo.js":678,"./Script_Extensions/Brahmi.js":679,"./Script_Extensions/Braille.js":680,"./Script_Extensions/Buginese.js":681,"./Script_Extensions/Buhid.js":682,"./Script_Extensions/Canadian_Aboriginal.js":683,"./Script_Extensions/Carian.js":684,"./Script_Extensions/Caucasian_Albanian.js":685,"./Script_Extensions/Chakma.js":686,"./Script_Extensions/Cham.js":687,"./Script_Extensions/Cherokee.js":688,"./Script_Extensions/Chorasmian.js":689,"./Script_Extensions/Common.js":690,"./Script_Extensions/Coptic.js":691,"./Script_Extensions/Cuneiform.js":692,"./Script_Extensions/Cypriot.js":693,"./Script_Extensions/Cyrillic.js":694,"./Script_Extensions/Deseret.js":695,"./Script_Extensions/Devanagari.js":696,"./Script_Extensions/Dives_Akuru.js":697,"./Script_Extensions/Dogra.js":698,"./Script_Extensions/Duployan.js":699,"./Script_Extensions/Egyptian_Hieroglyphs.js":700,"./Script_Extensions/Elbasan.js":701,"./Script_Extensions/Elymaic.js":702,"./Script_Extensions/Ethiopic.js":703,"./Script_Extensions/Georgian.js":704,"./Script_Extensions/Glagolitic.js":705,"./Script_Extensions/Gothic.js":706,"./Script_Extensions/Grantha.js":707,"./Script_Extensions/Greek.js":708,"./Script_Extensions/Gujarati.js":709,"./Script_Extensions/Gunjala_Gondi.js":710,"./Script_Extensions/Gurmukhi.js":711,"./Script_Extensions/Han.js":712,"./Script_Extensions/Hangul.js":713,"./Script_Extensions/Hanifi_Rohingya.js":714,"./Script_Extensions/Hanunoo.js":715,"./Script_Extensions/Hatran.js":716,"./Script_Extensions/Hebrew.js":717,"./Script_Extensions/Hiragana.js":718,"./Script_Extensions/Imperial_Aramaic.js":719,"./Script_Extensions/Inherited.js":720,"./Script_Extensions/Inscriptional_Pahlavi.js":721,"./Script_Extensions/Inscriptional_Parthian.js":722,"./Script_Extensions/Javanese.js":723,"./Script_Extensions/Kaithi.js":724,"./Script_Extensions/Kannada.js":725,"./Script_Extensions/Katakana.js":726,"./Script_Extensions/Kayah_Li.js":727,"./Script_Extensions/Kharoshthi.js":728,"./Script_Extensions/Khitan_Small_Script.js":729,"./Script_Extensions/Khmer.js":730,"./Script_Extensions/Khojki.js":731,"./Script_Extensions/Khudawadi.js":732,"./Script_Extensions/Lao.js":733,"./Script_Extensions/Latin.js":734,"./Script_Extensions/Lepcha.js":735,"./Script_Extensions/Limbu.js":736,"./Script_Extensions/Linear_A.js":737,"./Script_Extensions/Linear_B.js":738,"./Script_Extensions/Lisu.js":739,"./Script_Extensions/Lycian.js":740,"./Script_Extensions/Lydian.js":741,"./Script_Extensions/Mahajani.js":742,"./Script_Extensions/Makasar.js":743,"./Script_Extensions/Malayalam.js":744,"./Script_Extensions/Mandaic.js":745,"./Script_Extensions/Manichaean.js":746,"./Script_Extensions/Marchen.js":747,"./Script_Extensions/Masaram_Gondi.js":748,"./Script_Extensions/Medefaidrin.js":749,"./Script_Extensions/Meetei_Mayek.js":750,"./Script_Extensions/Mende_Kikakui.js":751,"./Script_Extensions/Meroitic_Cursive.js":752,"./Script_Extensions/Meroitic_Hieroglyphs.js":753,"./Script_Extensions/Miao.js":754,"./Script_Extensions/Modi.js":755,"./Script_Extensions/Mongolian.js":756,"./Script_Extensions/Mro.js":757,"./Script_Extensions/Multani.js":758,"./Script_Extensions/Myanmar.js":759,"./Script_Extensions/Nabataean.js":760,"./Script_Extensions/Nandinagari.js":761,"./Script_Extensions/New_Tai_Lue.js":762,"./Script_Extensions/Newa.js":763,"./Script_Extensions/Nko.js":764,"./Script_Extensions/Nushu.js":765,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":766,"./Script_Extensions/Ogham.js":767,"./Script_Extensions/Ol_Chiki.js":768,"./Script_Extensions/Old_Hungarian.js":769,"./Script_Extensions/Old_Italic.js":770,"./Script_Extensions/Old_North_Arabian.js":771,"./Script_Extensions/Old_Permic.js":772,"./Script_Extensions/Old_Persian.js":773,"./Script_Extensions/Old_Sogdian.js":774,"./Script_Extensions/Old_South_Arabian.js":775,"./Script_Extensions/Old_Turkic.js":776,"./Script_Extensions/Oriya.js":777,"./Script_Extensions/Osage.js":778,"./Script_Extensions/Osmanya.js":779,"./Script_Extensions/Pahawh_Hmong.js":780,"./Script_Extensions/Palmyrene.js":781,"./Script_Extensions/Pau_Cin_Hau.js":782,"./Script_Extensions/Phags_Pa.js":783,"./Script_Extensions/Phoenician.js":784,"./Script_Extensions/Psalter_Pahlavi.js":785,"./Script_Extensions/Rejang.js":786,"./Script_Extensions/Runic.js":787,"./Script_Extensions/Samaritan.js":788,"./Script_Extensions/Saurashtra.js":789,"./Script_Extensions/Sharada.js":790,"./Script_Extensions/Shavian.js":791,"./Script_Extensions/Siddham.js":792,"./Script_Extensions/SignWriting.js":793,"./Script_Extensions/Sinhala.js":794,"./Script_Extensions/Sogdian.js":795,"./Script_Extensions/Sora_Sompeng.js":796,"./Script_Extensions/Soyombo.js":797,"./Script_Extensions/Sundanese.js":798,"./Script_Extensions/Syloti_Nagri.js":799,"./Script_Extensions/Syriac.js":800,"./Script_Extensions/Tagalog.js":801,"./Script_Extensions/Tagbanwa.js":802,"./Script_Extensions/Tai_Le.js":803,"./Script_Extensions/Tai_Tham.js":804,"./Script_Extensions/Tai_Viet.js":805,"./Script_Extensions/Takri.js":806,"./Script_Extensions/Tamil.js":807,"./Script_Extensions/Tangut.js":808,"./Script_Extensions/Telugu.js":809,"./Script_Extensions/Thaana.js":810,"./Script_Extensions/Thai.js":811,"./Script_Extensions/Tibetan.js":812,"./Script_Extensions/Tifinagh.js":813,"./Script_Extensions/Tirhuta.js":814,"./Script_Extensions/Ugaritic.js":815,"./Script_Extensions/Vai.js":816,"./Script_Extensions/Wancho.js":817,"./Script_Extensions/Warang_Citi.js":818,"./Script_Extensions/Yezidi.js":819,"./Script_Extensions/Yi.js":820,"./Script_Extensions/Zanabazar_Square.js":821,"./index.js":822,"./unicode-version.js":823};function webpackContext(t){var r=webpackContextResolve(t);return e(r)}function webpackContextResolve(t){if(!e.o(i,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return i[t]}webpackContext.keys=function webpackContextKeys(){return Object.keys(i)},webpackContext.resolve=webpackContextResolve,t.exports=webpackContext,webpackContext.id=418},59:function(t,r,e){"use strict";e.r(r),e.d(r,"TailwindInput",(function(){return s})),e.d(r,"TailwindSelect",(function(){return a})),e.d(r,"AddButton",(function(){return o})),e.d(r,"DeleteButton",(function(){return p}));e(0);var i=e(153),n=e(8),s=function TailwindInput(t){var r=t.type,e=t.value,i=t.onChange,s=t.placeholder,a=void 0===s?"":s;return Object(n.jsx)("input",{"aria-label":"input name",className:"text-blue-800",type:r,value:e,onChange:i,placeholder:a})},a=function TailwindSelect(t){var r=t.value,e=t.onChange,i=t.options;return Object(n.jsx)("select",{"aria-label":"select type",className:"text-green-600 cursor-pointer bg-none",value:r,onChange:e,children:i.map((function(t,r){return Object(n.jsx)("option",{value:t,children:t},r)}))})},o=function AddButton(t){var r=t.onClick;return Object(n.jsx)(i.b,{role:"button","aria-label":"add property",onClick:r,className:"btn btn-mini btn-green"})},p=function DeleteButton(t){var r=t.onClick;return Object(n.jsx)(i.a,{role:"button","aria-label":"add property",onClick:r,className:"btn btn-mini btn-red"})}},834:function(t,r,e){"use strict";e.r(r);e(0);var i=e(104),n=e(1111),s=e(1110),a=e(8);r.default=function Code(t){var r=t.customType,e=Object(i.a)(r);return Object(a.jsxs)("div",{role:"document","aria-label":"code",children:[" ",Object(a.jsx)(n.a,{language:"typescript",style:s.a,children:e})]})}}},[[235,1,2]]]);