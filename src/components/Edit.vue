<template>
  <div>
    <b-button variant="secondary" @click="backHome">Quay lại</b-button>
     <EditModal :edit="student" @save="clickAdd"/>
    <table>
      <thead>
        <tr>
          <th>Tên</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, index) in lists" :key="index">
          <th>{{ list.name }}</th>
          <th>{{ list.phone }}</th>
          <th>{{ list.email }}</th>
          <th>
            <b-button v-b-modal.modal-prevent-closing variant="info" @click="onEdit(index)">Chỉnh sửa</b-button>
          </th>
          <th>
            <b-button variant="dark" @click="onDelete(index)">Xóa</b-button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EditModal from './EditModal'
export default {
  components: {
    EditModal
  },
  data() {
    return {
     
      student: {},
      lists: [
        {
          id: 1,
          name: "Nguyễn Văn A", 
          phone: 123456,
          email: "nguyenvana@gmail.com",
        },
        {
          id: 2,
          name: "Nguyễn Văn B",
          phone: 123456,
          email: "nguyenvanb@gmail.com",
        },
        {
          id: 3,
          name: "Nguyễn Văn C",
          phone: 123456,
          email: "nguyenvanc@gmail.com",
        },
      ]
      
    };
  },
  methods: {
    onDelete(index) {
      this.lists.splice(index, 1);
    
    },
    backHome() {
      this.$router.push("/");
    },
    clickAdd(item){
     
     let index = this.lists.findIndex((value)=> value.id === item.id) 
     if(index >= 0){
       this.lists.splice(index,1,item)
     }else {
       this.lists.push(item)  
     }
     return
    },
    onEdit(index){
      this.student=this.lists[index];
     
    }
    
    
  },
};
</script>

<style>
</style>