<template>
    <div class="sudoku_row"  >
        <div class="sudoku_item " :class="curSelect==sudoku.id?'opacity':''" v-for="(sudoku,index) in sudokus" :key="index" @touchstart="touchstart(index)" @touchend="touchend">
            <img v-lazy="sudoku.img_src" width="40" height="40" >
            <span class="sudoku_title">{{sudoku.name}}</span>
        </div>
    </div> 
</template>
<script>
export default {
    name: 'Grid',
    props:['gridVal'],
    data () {
        return {
            sudokus:this.gridVal,
            curSelect:null
        }
    },
    methods:{
        touchstart:function(e){
            var that = this;
            var list = that.sudokus;
            for (var i = 0, len = list.length; i < len; ++i) {
                if (list[i].id == e) {
                    that.curSelect = i;
                }
            }
        },touchend:function(){
            var that = this;
            that.curSelect = null;
        }
    } 
}
</script>
<style>
    .sudoku_row{
        display: flex;
        align-items: center;
        width:100%;
        background: #ffffff;
        flex-wrap: wrap;
    }
    .sudoku_item{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:25%;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .opacity{
        opacity: 0.4;
        background: #e5e5e5;
    }
    .sudoku_item img{
        margin-bottom: 3px;
        display: block;
    }
    .sudoku_title{
        font-size: 10px;
        color: #999999;
    }
</style>
