<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>购物商城</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="handle">
      <el-button plain size="mini" class="el-icon-plus">新增</el-button>
      <el-button plain size="mini" class="el-icon-check">全选</el-button>
      <el-button plain size="mini" class="el-icon-delete">删除</el-button>
      <el-input size="mini" style="width:200px;float:right" @keydown.enter.native="searchGoods" placeholder="请输入搜索内容" suffix-icon="el-icon-search" v-model="getGoodsList.searchvalue">
      </el-input>
    </div>
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" class="el-table">
      <el-table-column type="selection" width="58">
      </el-table-column>
      <el-table-column label="标题" width="500">
        <template slot-scope="scope">
          <router-link class="title" :to="{name:'goodsCtEdit',params:{id:scope.row.id}}">{{ scope.row.title }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="categoryname" label="所属类别" width="120">
      </el-table-column>
      <el-table-column prop="stock_quantity" label="库存" width="120">
      </el-table-column>
      <el-table-column prop="market_price" label="市场价" width="120">
      </el-table-column>
      <el-table-column prop="sell_price" label="销售价" width="120">
      </el-table-column>
      <el-table-column label="属性" width="120">
        <template slot-scope="scope">
          <i :class="['el-icon-picture', scope.row.is_slide == 1 ? 'active' :'']" @click="changeStatus(scope.row.id,'is_slide',scope.row.is_slide)"></i>
          <i :class="['el-icon-upload', scope.row.is_top == 1 ? 'active' :'']" @click="changeStatus(scope.row.id,'is_top',scope.row.is_top)"></i>
          <i :class="['el-icon-star-on', scope.row.is_hot == 1 ? 'active' :'']" @click="changeStatus(scope.row.id,'is_hot',scope.row.is_hot)"></i>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <router-link :to="{name:'goodsCtEdit',params:{id:scope.row.id}}" class="edit">修改</router-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page="getGoodsList.currentPage" :page-sizes="page.pageSizes" :page-size="getGoodsList.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="page.total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      multipleSelection: [],
      tableData: [],
      getGoodsList: {
        pageIndex: 1,
        pageSize: 10,
        searchvalue: ""
      },
      page:{
        pageSizes:[10, 20, 30, 40],
        total:100
      }
    };
  },
  methods: {
    searchGoods() {
      this.getGoods();
    },
    getGoods() {
      this.$http
        .get(this.$api.gsList, { params: this.getGoodsList })
        .then(res => {
          this.tableData = res.data.message;
          this.page.total = res.data.totalcount;
        });
    },
    changeStatus(id, type, status) {
      this.tableData.filter(item => item.id == id)[0][type] =
        status == 0 ? 1 : 0;
    },
    sizeChange(pageSize) {
      this.getGoodsList.pageSize = pageSize;
      this.getGoods();
    },
    currentChange(currentPage) {
      this.getGoodsList.pageIndex = currentPage;
      this.getGoods();
    }
  },
  created() {
    this.getGoods();
  }
};
</script>

<style scoped lang="less">
.handle {
  text-align: left;
  line-height: 100px;
}
.edit {
  text-decoration: none;
  color: #2a72c5;
}
.title {
  text-decoration: none;
  color: #2a72c5;
}
[class^="el-icon"] {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);
  &.active {
    color: rgba(0, 0, 0, 0.8);
  }
}
</style>