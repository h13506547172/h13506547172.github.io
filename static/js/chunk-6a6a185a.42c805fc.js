(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a6a185a"],{"01de":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:[e.type,e.size],on:{click:function(t){return e.$emit("layclick")}}},[e._t("default")],2)},s=[],n={props:{type:{type:String,default:"default"},size:{type:String,default:"large"}},data:function(){return{}},created:function(){},methods:{}},o=n,c=(a("087d"),a("2877")),i=Object(c["a"])(o,r,s,!1,null,"29f54e94",null);t["a"]=i.exports},"087d":function(e,t,a){"use strict";a("d564")},"2cd4":function(e,t,a){},"2d56":function(e,t,a){"use strict";a("3f7e")},"3c11":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("div",{staticClass:"search"},[a("el-form",{staticClass:"demo-form-inline demo-form",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{label:"商品搜索:"}},[a("el-input",{attrs:{clearable:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.goodSearchFn(t)}},model:{value:e.form.searchName,callback:function(t){e.$set(e.form,"searchName","string"===typeof t?t.trim():t)},expression:"form.searchName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.goodSearchFn,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.goodSearchFn(t)}}},[e._v("搜索")])],1)],1)],1),a("div",{staticClass:"result"},[a("div",{staticClass:"operation"},[a("repeatButton",{attrs:{type:"success",size:"large"},on:{layclick:e.createFn}},[a("span",{staticClass:"el-icon-circle-plus-outline"}),e._v(" 新建")]),a("repeatButton",{attrs:{type:"taskMake",size:"large"},on:{layclick:function(t){e.taskMake=!0}}},[e._v(" 导入数据 ")]),a("el-dialog",{staticClass:"dialogVisible",staticStyle:{width:"630px height:484px"},attrs:{title:"导入数据",visible:e.taskMake,"before-close":e.taskMakeFn},on:{close:function(t){e.taskMake=!1}}},[a("uploadExcel",{on:{CancelBtn:function(t){e.taskMake=!1}}})],1)],1),a("TaskList",{attrs:{tableData:e.tableData}},[a("el-table-column",{attrs:{type:"index",index:e.indexMethod,prop:"",label:"序号"}}),a("el-table-column",{attrs:{prop:"skuName",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"skuImage",label:"商品图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticClass:"skuImage",attrs:{src:e.row.skuImage,alt:""}})]}}])}),a("el-table-column",{attrs:{prop:"brandName",label:"品牌"}}),a("el-table-column",{attrs:{prop:"unit",label:"规格"}}),a("el-table-column",{attrs:{label:"商品价格"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.price/100))])]}}])}),a("el-table-column",{attrs:{prop:"skuClass.className",label:"商品类型"}}),a("el-table-column",{attrs:{label:"创建日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createTime.replace(/T/gi," ")))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.reviseFn(t.row)}}},[e._v("修改")])]}}])})],1),a("el-dialog",{staticClass:"dialogVisible",staticStyle:{width:"630px height:484px"},attrs:{title:e.titleType,visible:e.GoodsDialog},on:{close:e.closeFn}},[a("el-form",{ref:"reviseGoodsForm",attrs:{"label-width":"120px",model:e.reviseGoodsForm}},[a("el-form-item",{attrs:{label:"商品名称",rules:{required:!0,trigger:"blur"}}},[a("el-input",{attrs:{type:"text",placeholder:"请输入内容"},model:{value:e.reviseGoodsForm.skuName,callback:function(t){e.$set(e.reviseGoodsForm,"skuName",t)},expression:"reviseGoodsForm.skuName"}})],1),a("el-form-item",{attrs:{label:"品牌",rules:{required:!0,trigger:"blur"}}},[a("el-input",{attrs:{type:"text",placeholder:"请输入内容"},model:{value:e.reviseGoodsForm.brandName,callback:function(t){e.$set(e.reviseGoodsForm,"brandName",t)},expression:"reviseGoodsForm.brandName"}})],1),a("el-form-item",{attrs:{label:"商品价格（元）",rules:{required:!0,trigger:"blur"}}},[a("el-input",{attrs:{type:"text",placeholder:"请输入内容"},model:{value:e.reviseGoodsForm.price,callback:function(t){e.$set(e.reviseGoodsForm,"price",t)},expression:"reviseGoodsForm.price"}})],1),a("el-form-item",{attrs:{label:"商品类型",rules:{required:!0,trigger:"blur"}}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.reviseGoodsForm.classId,callback:function(t){e.$set(e.reviseGoodsForm,"classId",t)},expression:"reviseGoodsForm.classId"}},e._l(e.TypeSearchList,(function(e){return a("el-option",{key:e.classId,attrs:{label:e.className,value:e.classId}})})),1)],1),a("el-form-item",{attrs:{label:"规格",rules:{required:!0,trigger:"blur"}}},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.reviseGoodsForm.unit,callback:function(t){e.$set(e.reviseGoodsForm,"unit",t)},expression:"reviseGoodsForm.unit"}})],1),a("el-form-item",{attrs:{label:"商品图片",rules:{required:!0,trigger:"blur"}}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,accept:"image/jpg,image/jpeg,image/png"}},[e.reviseGoodsForm.skuImage?a("img",{ref:"img",staticClass:"avatar",attrs:{src:e.reviseGoodsForm.skuImage}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("span",{staticClass:"dialog-footer operation",staticStyle:{"justify-content":"center"},attrs:{slot:"footer"},slot:"footer"},[a("repeatButton",{attrs:{type:"taskMake",size:"large"},on:{layclick:function(t){e.GoodsDialog=!1}}},[e._v("取消")]),a("repeatButton",{attrs:{type:"success",size:"large"},on:{layclick:e.create}},[e._v(" 确定")])],1)])],1),a("div",{staticClass:"pagination-container"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",[a("div",[e._v(" 共 "),a("span",[e._v(" "+e._s(e.results.totalCount))]),e._v(" 条记录 第"),a("span",[e._v(e._s(e.pageIndex)+"/"+e._s(e.results.totalPage))]),e._v("页 ")])]),a("el-col",{staticStyle:{width:"340px"}},[a("el-button",{staticStyle:{background:"#edf0f9",color:"#d8dde3"},on:{click:e.handleSizeChange}},[e._v("上一页")]),a("el-button",{staticStyle:{background:"#d5ddf8"},on:{click:e.handleCurrentChange}},[e._v("下一页")])],1)],1)],1)],1)])])},s=[],n=a("c7eb"),o=a("1da1"),c=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("ea3c")),i=a("b775");function l(e){return Object(i["a"])({url:"/vm-service/sku/search",method:"get",params:e})}function u(){return Object(i["a"])({url:"/vm-service/skuClass/search",method:"get"})}function d(e){return Object(i["a"])({url:"/vm-service/sku",method:"post",data:e})}function p(e){return Object(i["a"])({url:"/vm-service/sku/upload",method:"post",fileName:e})}function m(e,t){return Object(i["a"])({url:"/vm-service/sku/"+e,method:"PUT",data:t})}function f(e){return Object(i["a"])({url:"/vm-service/sku/fileUpload",method:"POST",data:e})}var b=a("01de"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"",limit:1,"show-file-list":!1,"before-upload":e.beforeAvatarUpload,accept:".xls, .xlsx","http-request":e.handlePictureCardPreview}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 只能上传xls/xlsx文件，且不超过1MB ")])],1),a("div",{staticClass:"addWorkBtn"},[a("repeatButton",{attrs:{type:"taskMake",size:"large"},on:{layclick:e.CancelBtn}},[e._v("取消")]),a("repeatButton",{attrs:{type:"success",size:"large"},on:{layclick:e.addFileList}},[e._v(" 确定")])],1)],1)},h=[],g={components:{repeatButton:b["a"]},data:function(){return{fileList:[],file:""}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{CancelBtn:function(){this.$emit("CancelBtn")},addFileList:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.file),t.prev=1,a=new FormData,a.append("fileName",e.file.file),t.next=6,f(a);case 6:e.$emit("CancelBtn"),e.$message.success("导入成功"),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},beforeAvatarUpload:function(e){console.log(e);var t=e.size/1024/1024<1;return t||this.$message.error("上传头像图片大小不能超过 1MB!"),t},handlePictureCardPreview:function(e){var t=this;return Object(o["a"])(Object(n["a"])().mark((function a(){return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.file=e;case 1:case"end":return a.stop()}}),a)})))()}}},k=g,x=(a("2d56"),a("2877")),y=Object(x["a"])(k,v,h,!1,null,"fd31b6c6",null),w=y.exports,F={name:"goodsManager",data:function(){return{tableData:[],results:{},pageIndex:1,dialogVisible:!1,GoodsDialog:!1,taskMake:!1,reviseGoodsDialog:!1,form:{searchName:""},Form:{deviceNum:"",type:"",people:"",desc:"",list:""},taskMakeContent:{cordon:""},currentPage:1,reviseGoodsForm:{skuName:"",skuImage:"",price:"",classId:"",unit:"",brandName:""},TypeSearchList:[],titleType:"新增商品",imageUrl:"",dialogImageUrl:!1,disabled:!1,fileExelList:[],limitNum:1}},components:{TaskList:c["a"],repeatButton:b["a"],uploadExcel:w},created:function(){this.getSkuSearchList(),this.getTypeSearch()},computed:{},methods:{indexMethod:function(e){return 10*(this.pageIndex-1)+e+1},taskMakeFn:function(e){e()},successFileExel:function(e,t,a){console.log(e,t,a)},getSkuSearchList:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:a=t.sent,e.tableData=a.data.currentPageRecords,e.results=a.data,e.pageIndex=e.results.pageIndex;case 6:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.pageIndex--,!(e.pageIndex<1)){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,l({pageIndex:e.pageIndex});case 5:a=t.sent,e.tableData=a.data.currentPageRecords;case 7:case"end":return t.stop()}}),t)})))()},handleCurrentChange:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.pageIndex++,t.next=3,l({pageIndex:e.pageIndex});case 3:a=t.sent,e.tableData=a.data.currentPageRecords;case 5:case"end":return t.stop()}}),t)})))()},goodSearchFn:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l({skuName:e.form.searchName?e.form.searchName:""});case 2:a=t.sent,e.tableData=a.data.currentPageRecords,e.results=a.data,e.pageIndex=e.results.pageIndex;case 6:case"end":return t.stop()}}),t)})))()},getTypeSearch:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:a=t.sent,e.TypeSearchList=a.data.currentPageRecords;case 4:case"end":return t.stop()}}),t)})))()},createFn:function(){this.GoodsDialog=!0,this.titleType="新增商品"},create:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.GoodsDialog=!1,console.log(e.reviseGoodsForm),e.scopeRowSkuId){t.next=9;break}return t.next=5,d(e.reviseGoodsForm);case 5:console.log(e.reviseGoodsForm),e.getSkuSearchList(),t.next=16;break;case 9:return e.reviseGoodsForm.skuId=e.scopeRowSkuId,t.next=12,m(e.scopeRowSkuId,e.reviseGoodsForm);case 12:a=t.sent,console.log(a),e.getSkuSearchList(),e.reviseGoodsForm={skuName:"",skuImage:"",price:"",classId:"",unit:"",brandName:""};case 16:case"end":return t.stop()}}),t)})))()},closeFn:function(){this.GoodsDialog=!1,this.reviseGoodsForm={skuName:"",skuImage:"",price:"",classId:"",unit:"",brandName:""}},reviseFn:function(e){this.GoodsDialog=!0,this.titleType="修改商品",console.log(e),this.reviseGoodsForm={skuName:e.skuName,skuImage:e.skuImage,price:e.price/100,classId:e.skuClass.classId,unit:e.unit,brandName:e.brandName},this.scopeRowSkuId=e.skuId},transformFn:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.taskMake=!1,t.next=3,p();case 3:case"end":return t.stop()}}),t)})))()},handleAvatarSuccess:function(e,t){var a=this;return Object(o["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.reviseGoodsForm.skuImage=URL.createObjectURL(t.raw);case 1:case"end":return e.stop()}}),e)})))()},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a}}},j=F,O=(a("c4b6"),Object(x["a"])(j,r,s,!1,null,"f06009dc",null));t["default"]=O.exports},"3f7e":function(e,t,a){},6075:function(e,t,a){},"96e1":function(e,t,a){"use strict";a("2cd4")},c4b6:function(e,t,a){"use strict";a("6075")},d564:function(e,t,a){},ea3c:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[e._t("default")],2)],1)},s=[],n={props:["tableData"],data:function(){return{}},created:function(){},computed:{},methods:{}},o=n,c=(a("96e1"),a("2877")),i=Object(c["a"])(o,r,s,!1,null,"0a65c260",null);t["a"]=i.exports}}]);