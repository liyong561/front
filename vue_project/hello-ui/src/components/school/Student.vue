<template>
  <div id="student">
    <p>this is Student page</p>
    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
  </div>
</template>

<script>
export default {
  // 后台接口，都是在次部分代码中实现的

  name: "student",
  // data函数
  data() {
      // return语句也很怪
    return { checkedNames: [] };
  },
};
</script>