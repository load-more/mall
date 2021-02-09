<template>
  <div class="goodsInfo">
    <div class="rule">
      <span class="title">{{goodsParams.ruleKey}}</span>
      <table v-for="(table, index1) in goodsParams.ruleTables" :key="index1">
        <tr v-for="(tr, index2) in table" :key="index2">
          <td v-for="(td, index3) in tr" :key="index3">
            {{td}}
          </td>
        </tr>
      </table>
      <span>{{goodsParams.ruleDisclaimer}}</span>
    </div>
    <div class="info">
      <span class="title">{{goodsParams.infoKey}}</span>
      <table>
        <tr v-for="(tr, index1) in goodsParams.infoSet" :key="index1">
          <td>{{tr.key}}</td>
          <td>{{tr.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsInfo",
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }
  td {
    border: solid 1px black;
  }
  .rule, .info {
    margin: 10px 0;
    border-bottom: solid 2px gray;
    padding-bottom: 10px;
  }
  .rule table, .info table {
    margin: 10px 0;
  }
  .title {
    font-weight: bold;
  }
  .goodsInfo {
    border-top: solid 2px gray;
  }
</style>
