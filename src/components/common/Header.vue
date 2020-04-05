<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <!-- <i v-if="collapse" class="el-icon-s-fold"></i> -->
            <!-- <i v-else class="el-icon-s-unfold"></i> -->
            <i class="el-icon-pie-chart"></i>
        </div>
        <div class="logo">后台管理系统</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip effect="dark" content="操作日志" placement="bottom">
                        <router-link to="/changelog">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../../assets/img/img.jpg" />
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="hover" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-popover placement="left" width="150" trigger="hover">
                            <el-table :data="gridData" style="height:300px;overflow:auto">
                                <el-table-column prop="time" label="日期"></el-table-column>
                            </el-table>
                            <el-button slot="reference">登陆日志</el-button>
                        </el-popover>
                        <el-dropdown-item divided command="passmod">修改密码</el-dropdown-item>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <el-dialog title="修改密码" :visible.sync="dialogVisible" width="30%">
            <el-form
                :model="ruleForm"
                status-icon
                label-width="100px"
                class="demo-ruleForm container"
            >
                <el-form-item label="原密码" prop="oldpass">
                    <el-input v-model.number="ruleForm.oldpass"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpass">
                    <el-input type="password" v-model="ruleForm.newpass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="close">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            fullscreen: false,
            name: 'linxin',
            message: 2,
            gridData: [
            ],
            ruleForm: {
                newpass: '',
                checkPass: '',
                oldpass: ''
            },
            dialogVisible: false
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('username');
            return username ? username : this.name;
        }
    },
    created() {
        this.http.post(this.api.loginlog).then(res => {
            if (res.status == 200) {
                this.gridData=res.data
            }
        });
    },
    methods: {
        close() {
            this.dialogVisible = false;
            this.$message({
                // message: itemEl.getAttribute('value') + ':' + evt.from.id + '->' + evt.to.id,
                message: '密码修改成功',
                type: 'success'
            });
        },
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('username');
                this.$router.push('/login');
            } else {
                this.dialogVisible = true;
                console.log('passmod');
            }
        },
        // 侧边栏折叠
        collapseChage() {
            // this.collapse = !this.collapse;
            // bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
        this.collapseChage();
    }
};
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    /* cursor: pointer; */
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
/* .btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
} */
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
