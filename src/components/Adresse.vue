<template>
  <div>
    <h1>Vertragsdaten</h1>

<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>





    <el-form label-position="top" size="small" ref="form" :model="form" label-width="auto">
      <el-row :gutter="20">
        <el-col :span="8">
          <div >
            <el-form-item label="Voller Name Mieter">
              <el-input v-model="form.name" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="16">
          <div >
            <el-form-item label="Adresse Mieter">
              <el-input v-model="form.adresse" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div >
            <el-form-item label="Voller Name">
              <el-input v-model="form.nameVermieter" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="16">
          <div >
         <el-form-item label="Adresse Vermieter">
          <el-input v-model="form.adresseVermieter" />
        </el-form-item>
          </div>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>


<script>
import Tabs from "@/components/Tabs";
export default {
  components: {
    Tabs
  },
  data() {
    return {
      form: this.$store.state.mietvertrag.payload.data
    };
  }
};
</script>
<style scoped>
.line {
  text-align: center;
}
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

