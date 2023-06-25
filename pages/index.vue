<script setup lang="ts">
onBeforeMount(() => {
  console.log('onBeforeMount');
});
onMounted(() => {
  console.log('onMounted');
});
onNuxtReady(() => console.log('onNuxtReady'));
onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});
onUpdated(() => {
  console.log('onUpdated');
});
onBeforeRouteUpdate(() => {
  console.log('onBeforeRouteUpdate');
});
onBeforeRouteLeave(() => {
  console.log('onBeforeRouteLeave');
});
onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});
onUnmounted(() => {
  console.log('onUnmounted');
});

const { pending, data: user } = await useFetch<any>(
  'https://api.github.com/users/vagnereix',
  {
    transform: (_data) => {
      return {
        name: _data.name,
        bio: _data.bio,
      };
    },
  }
);
</script>

<template>
  User: {{ pending ? 'Loading...' : user.name }}
  <NuxtLink to="/repos">Repos</NuxtLink>
</template>
