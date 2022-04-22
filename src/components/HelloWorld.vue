<template>
  <div >
    <telia-notification heading-tag="h3" :status=status>
    <span slot="heading">Hello</span>
    <telia-text-spacing slot="content">
    <telia-p >
    Yyoyo
    </telia-p>
    </telia-text-spacing>

    </telia-notification>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: () => {
    return {
      status: 'information'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
