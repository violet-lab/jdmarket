<template >
  <!-- div.hello
    p {{ count }}
    button(@click="add") 增加 责怪
    button(@click="dec") 减小 责怪 -->

  <div class="hello">
dfdf
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'hellovue'
      }
    },
    components: {
      
    },
    computed: {
      ...mapState({
        count: state => state.count
      })
    },
    methods: {
      ...mapActions([
        'addNum', 'decNum'
      ]),
      add () {
        this.addNum(4)
      },
      dec () {
        this.decNum(4)
      }
    }
  }
</script>

<style scoped  lang="scss">



.hello{
  background-color: red;
  color:rgb(19, 0, 128) ;
}

</style>
