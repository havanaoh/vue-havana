<template>
    <ContextBox>공지사항</ContextBox>
    <NoticeSearch />
    <NoticeMain />    
</template>

<script setup>
const provideValue = ref();

// 내가 선언한 부분에서는 자유롭게 가져와서 사용 가능함
provide('provideValue', provideValue);

</script>
