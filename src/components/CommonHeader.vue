<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right: 20px" @click="sendMsg" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item ></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown >
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/img/3.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="cancel">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import bus  from "./EventBus"
export default {
    data() {
        return {
            isCollapse: true,
        }
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        },
        sendMsg(){
            //将值取反发送给asid
            bus.$emit('share',this.isCollapse)
            this.isCollapse=!this.isCollapse
    },
}
}
</script>
<style lang="less" scoped>

.header-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    .l-content {
        display: flex;
        align-items: center;
        /deep/.el-breadcrumb__item {
            .el-breadcrumb__inner {
                font-weight: normal;
                &.is-link {
                    color: #666
                }
            }
            &:last-child {
                .el-breadcrumb__inner {
                    color: #fff
                }
            }
        }
    }
}
</style>