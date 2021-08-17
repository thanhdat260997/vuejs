<template>
  <div>
      <h1>Quản lý danh bạ</h1>
       <b-button variant="outline-primary" @click="goAdd">Tạo mới</b-button>
       <b-button variant="warning" @click="goEdit">Chỉnh sửa</b-button>
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
            lists: [
                {
                    name: 'Nguyễn Văn A',
                    phone: 123456,
                    email: 'nguyenvana@gmail.com'
                },
                  {
                    name: 'Nguyễn Văn B',
                    phone: 123456,
                    email: 'nguyenvanb@gmail.com'
                },
                  {
                    name: 'Nguyễn Văn C',
                    phone: 123456,
                    email: 'nguyenvanc@gmail.com'
                }
            ]
        }
    },
    methods: {
        goAdd(){
            this.$router.push('/add')
        },
        goEdit(){
            this.$router.push('/edit')
        }
    }
}
</script>

<style>
    table {
        border-collapse: collapse;
        width: 70%;
        border: 1px solid black;
        margin: 10px;
    }
    tr th {
        border: 1px solid black;
        
        padding: 8px;
        text-align: center;
        
    }
</style>