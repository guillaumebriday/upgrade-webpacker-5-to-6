<template>
  <div>
    <p>{{ message }}</p>
    <p>
      count: <span>{{ count }}</span>
    </p>

    <button @click.prevent="increment">Increment</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      count: 0,
      message: "I'm a vue component!"
    }
  },

  methods: {
    increment () {
      this.count += 1
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 1.5rem;
  color: #3B82F6;

  span {
    font-weight: bold;
  }
}
</style>
