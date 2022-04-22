<template>
  <nav>
    <telia-grid>
        <telia-row>
            <telia-col width={4}>
                <router-link to="/"><telia-link>home</telia-link></router-link>
            </telia-col>
            <telia-col width={4}>
                <router-link to="/about"><telia-link>about</telia-link></router-link>
            </telia-col>
        </telia-row>
    </telia-grid>
  </nav>
</template>

<script>

export default {
  name: 'NavigationBar',
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
