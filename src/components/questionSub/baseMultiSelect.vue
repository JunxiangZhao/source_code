<template>
  <div id="base-multiSelect">
    <label class="base_multiSelect_one" for="check_one">{{"*"+temData.description}}</label>
    <div>
      <checkbox
        name="check_one"
        id="check_one"
        value="true"
        v-for="it in temData.content"
        :key="it"
        v-model="it.result"
      >{{it.label}}</checkbox>
    </div>
  </div>
</template>

<script>
export default {
  props: ["baseData"],
  components: {},
  data: function() {
    return {
      temData: this.baseData
    };
  },

  methods: {},
  computed: {}
};
</script>

<style scoped>
label {
  padding-left: 8px;
  height: 24pt;
  font-size: 13pt;
  margin: 8rpx 0rpx 8rpx 0rpx;
}
checkbox {
  margin: 0rpx 8rpx 0rpx 8rpx;
}
.base_multiSelect_one {
  height: 20pt;
  font-size: 14pt;
  margin: 8rpx 0rpx 8rpx 0rpx;
}
#base-multiSelect {
  margin: 0rpx;
  background-color: gainsboro;
  margin: 8rpx 0rpx 8rpx 0rpx;
  border-radius: 10rpx;
}
</style>
