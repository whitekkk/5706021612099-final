<template lang="html">
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2" style="font-size: 2em;">
          Grade processGrade<br>
        </div>
      </div>
      <div class="column">
        <div class="column">
            <div class="field">
              <label class="label">เกรตปัจจุบัน</label>
              <p class="control">
                <input class="input" type="text" placeholder="Gpa">
              </p>
            </div>
        </div>
        <div class="column">
          <a name="gpa" class="button is-info is-small" @click="getTable(subject)">ตกลง</a><br><br><br>
          <table v-if="showtb"  class="table is-striped is-narrow">
            <thead>
              <th>เทอมนี้</th><th>ชื่อวิชา</th><th>หน่วยกิต</th><th>เกรด</th>
            </thead>
            <tr>
              <td>1</td>
              <td><input class="input" type="text" v-model="name" ></td>
              <td><input class="input" type="text" v-model="unit[1]"></td>
              <td><input class="input" type="text"  v-model="grades[1]"></td>
            </tr>
            <tr>
              <td>2</td>
              <td><input class="input" type="text" v-model="name" ></td>
              <td><input class="input" type="text" v-model="unit[2]"></td>
              <td><input class="input" type="text"  v-model="grades[2]"></td>
            </tr>
            <tr>
              <td>3</td>
              <td><input class="input" type="text" v-model="name" ></td>
              <td><input class="input" type="text" v-model="unit[3]"></td>
              <td><input class="input" type="text"  v-model="grades[3]"></td>
            </tr>
            <tr>
              <td>4</td>
              <td><input class="input" type="text" v-model="name" ></td>
              <td><input class="input" type="text" v-model="unit[4]"></td>
              <td><input class="input" type="text"  v-model="grades[4]"></td>
            </tr>
            <tr>
              <td>5</td>
              <td><input class="input" type="text" v-model="name" ></td>
              <td><input class="input" type="text" v-model="unit[5]"></td>
              <td><input class="input" type="text"  v-model="grades[5]"></td>
            </tr>
            <tr>
              <td>6</td>
              <td><input class="input" type="text" v-model="name" ></td>
              <td><input class="input" type="text" v-model="unit[6]"></td>
              <td><input class="input" type="text"  v-model="grades[6]"></td>
            </tr>
            <tr>
              <td>7</td>
              <td><input class="input" type="text" v-model="name" ></td>
              <td><input class="input" type="text" v-model="unit[7]"></td>
              <td><input class="input" type="text"  v-model="grades[7]"></td>
            </tr>
            <tr>
              <td><a name="cal" class="button is-info is-small" @click="processGrade">คำนวณ</a></td>
            </tr>
          </table>
        </div>

      </div>
      <div class="columns">
        <div class="column is-offset-2">
            {{gpa}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      subject : '',
      showtb : false,
      unit: [],
      grades: [],
      gpa: ''
    }
  },
  methods : {
    getTable(data) {
      this.showtb = true
    },
    processGrade(data) {
      let vm = this
    }
  }
}
</script>

<style lang="css">
.home{
  margin-top: 40PX;
  font-family: RSU;
}
</style>
