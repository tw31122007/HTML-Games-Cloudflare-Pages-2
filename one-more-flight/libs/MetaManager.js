MetaManager=function(a){this.meta={data:{},highscore:0},this.defaultlb="default",this.trace=1==a?console.log:function(){}},MetaManager.prototype.sync=function(){"metadata"in gamezop.data&&("highscore"in gamezop.data.metadata&&(this.meta.highscore=gamezop.data.metadata.highscore),"data"in gamezop.data.metadata&&(this.meta.data=gamezop.data.metadata.data,this.trace("Syncing to : ",gamezop.data.metadata.data)))},MetaManager.prototype.updateHighScore=function(a){a>this.meta.highscore&&(this.meta.highscore=a)},MetaManager.prototype.setData=function(a){this.meta.data=a},MetaManager.prototype.dataExists=function(){return"metadata"in gamezop.data&&"data"in gamezop.data.metadata},MetaManager.prototype.localSetItem=function(a,t){this.trace("SETTING ITEM"),this.trace("KEY: ",a),this.trace("ITEM: ",t),this.meta.data[a]=t},MetaManager.prototype.localGetItem=function(a){return this.trace("GETTING ITEM"),this.trace("KEY: ",a),this.trace(this.meta.data[a]),this.meta.data[a]},MetaManager.prototype.localRemoveItem=function(a){delete this.meta.data[a]};var oMetaManager=null;oMetaManager=new MetaManager(!1);