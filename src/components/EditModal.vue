<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Thêm mới</b-button>
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
          <b-form-input v-model="list.name"></b-form-input>
        </b-form-group>
        <b-form-group label="Số điện thoại">
          <b-form-input v-model="list.phone"></b-form-input>
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input v-model="list.email"></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    edit: {
      type: Object,
      defalut: null,
    },
  },
  watch: {
    edit() {
      if (this.edit) {
        this.list = Object.assign({}, this.edit);
      } else {
        this.list = {};
      }
    },
  },

  data() {
    return {
      list: {
        id: Math.floor(Math.random()*10),
        name: "",
        phone: "",
        email: "",
      },
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
      this.$emit("save", this.list);
      this.list = {};
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
  },
};
</script>