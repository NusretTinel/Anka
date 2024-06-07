<template>
  <div>
    <div class="kap" v-for="(row, rowIndex) in rows" :key="rowIndex">
      <div class="row">
        <div class="col-lg-3" v-for="(box, boxIndex) in row" :key="boxIndex">
          <div class="squareBox">

            <div class=" resimkutu">
              <img alt="bilboard" src="../../../assets/images/imgAnka/Artboard_2.png"
                   style="width:100% ;height:100% ; margin-top: 20px"/>

            </div>

              <div class=" yazıkutu ">

              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reference from "@/assets/Data/referenceImg.json";
export default {
  name: 'referencePage',
  components: { },
  data() {
    return {

      items: Reference
    };
  },
  computed: {
    rows() {
      // İçerikleri 4'erli gruplara ayır
      return this.items.reduce((acc, item, index) => {
        const rowIndex = Math.floor(index / 4);
        if (!acc[rowIndex]) acc[rowIndex] = [];
        acc[rowIndex].push(item);
        return acc;
      }, []);
    }
  }
}
</script>

<style>
.yazıkutuS{

  height: 80px;
  padding-top: 15px;
  margin-top: 50px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  background-color: transparent;
  color: #0a197a;
  font-size: 25px;
  font-weight: 600
}
.squareBox {
  width: 300px;
  height: 200px;
  background-color: black;
  margin-top: 50px;
  margin-left: 20px;
}

.squareBox {
  margin-right: 10px;
  background-color: #e3e3f8;
  height: 240px;
  width: 300px;
  position: relative;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.squareBox::before,
.squareBox::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  background: transparent;
  transition: width 0.3s ease, height 0.3s ease;
}

.squareBox::before {
  top: 0;
  left: 0;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
}

.squareBox::after {
  bottom: 0;
  right: 0;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
}

.squareBox:hover {
  background-color: #d1d1f1;
  transform: scale(1.02);
}

.squareBox:hover::before {
  border-top: 3px solid darkblue;
  border-left: 3px solid darkblue;
  width: 100%;
  height: 100%;
}

.squareBox:hover::after {
  border-bottom: 3px solid darkblue;
  border-right: 3px solid darkblue;
  width: 100%;
  height: 100%;
}

</style>
