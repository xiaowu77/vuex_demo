<template>
    <div>
        <!--<h3>当前最新的count值为：{{count}}</h3>-->
        <h3>{{showNum}}</h3>
        <button @click="btnHandler1">-1</button>
        <button @click="btnHandler2">-N</button>
        <button @click="subAsync">-1 Async</button>
        <button @click="subAsyncN(3)">-1 AsyncN</button>
    </div>
</template>

<script>
    import { mapState } from "vuex"
    import { mapMutations } from "vuex"
    import { mapActions } from "vuex"
    import { mapGetters } from "vuex"
    export default {
        name: "addition",
        data(){
            return {};
        },
        computed:{
            ...mapState(["count"]),
            ...mapGetters(["showNum"])
        },
        methods:{
            ...mapMutations(["sub","subN"]),
            ...mapActions(["subAsync","subAsyncN"]),
            btnHandler1(){
                this.sub()
            },
            btnHandler2(){
                this.subN(3)
            }
        }
    }
</script>

<style scoped>

</style>