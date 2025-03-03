<template>
  <div>
    <div class="container text-center">
      <div class="row">
        <div class="col-6 text-center">
          <h2>소은</h2>
          <button class="btn">
            <img :src="soeunImage" class="col img-thumbnail rounded-circle" alt="...">
          </button>
        </div>
        <div class="col-6 text-center">
          <h2>나은</h2>
          <button class="btn">
            <img :src="naeunImage" class="col img-thumbnail rounded-circle" alt="...">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import soeunImage from '../../public/images/soeun.jpg'
import naeunImage from '../../public/images/naeun.jpg'

</script>

<style lang="css" scoped>
</style>
