<template>
  <div>
    <el-tabs v-model="selectedItem" stretch :tab-position="tabPosition">
      <el-tab-pane label="1. Adresse">
        <Adresse />
      </el-tab-pane>
      <el-tab-pane label="2. Mieträume">
        <Mietraum />
      </el-tab-pane>
      <el-tab-pane label="3. Vertragsdaten">Weitere Sachen ...</el-tab-pane>
      <el-tab-pane label="4. Generieren">Sehr gut klicken Sie auf generieren um Abzuschließen!!</el-tab-pane>
    </el-tabs>

    <el-button v-if="selectedItem != 0" @click="prevItem">Zurück</el-button>
    <el-button v-if="selectedItem!=3" type="primary" @click="nextItem">Weiter</el-button>
    <el-button v-if="selectedItem==3" type="primary" @click="onSubmit">Generieren</el-button>
  </div>
</template>

<script>
import Adresse from "@/components/Adresse";
import Mietraum from "@/components/Mieträume";
import axios from "axios";
export default {
  components: { Adresse, Mietraum },
  data() {
    return {
      tabPosition: "right",
      selectedItem: 0
    };
  },
  methods: {
    nextItem() {
      console.log(this.$store.state.mietvertrag.payload.data.name);
      console.log(this.$store.state.mietvertrag.payload.data.adresse);
      this.selectedItem = (parseInt(this.selectedItem) + 1).toString();
    },
    prevItem() {
      this.selectedItem = (parseInt(this.selectedItem) - 1).toString();
    },

    async onSubmit() {
      this.$message("Ihr vertrag wurde generiert!");

      fetch("http://0.0.0.0:8000/docx/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.$store.state.mietvertrag.payload)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.file) {
            console.log(data.file, data.status);
            let blob = new Blob(
              [new Uint8Array([...atob(data.file)].map(c => c.charCodeAt(0)))],
              { type: "application/octet-stream" }
            );

            let dl = document.createElement("a");
            dl.download = `hallo.pdf`;
            dl.href = URL.createObjectURL(blob);
            document.body.appendChild(dl);
            dl.click();
            dl.remove();
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};
</script>

