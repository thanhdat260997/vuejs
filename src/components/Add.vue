<template>
  <div>
    <div>
      <b-button v-b-modal.modal-prevent-closing>Tạo mới</b-button>

      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Submit Your Name"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group label="Tên">
            <b-form-input v-model="form.name"></b-form-input>
          </b-form-group>
          <b-form-group label="Số điện thoại">
            <b-form-input  v-model="form.phone"></b-form-input>
          </b-form-group>
          <b-form-group label="Email">
            <b-form-input  v-model="form.email"></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
    <b-button variant="secondary" @click="backHome">Quay lại</b-button>
    <table>
      <thead>
        <tr>
          <th>Tên</th>
          <th>Số điện thoại</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, index) in lists" :key="index">
          <th>{{ list.name }}</th>
          <th>{{ list.phone }}</th>
          <th>{{ list.email }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: ''
      },
      lists: [
         
      ],
      name: "",
      nameState: null,
      submittedNames: [],
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      this.lists.push(this.form);
      this.form = {};
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    backHome(){
        this.$router.push('/')
    }
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 70%;
}
tr th {
  border: 1px solid black;
  text-align: left;
  padding: 8px;
  text-align: center;
}
</style>




