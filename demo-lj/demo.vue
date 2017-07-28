<template>
    <div>
        <div>
            <h2 style="font-size: 20px;margin-top: 20px">button 按钮</h2>
            <lj-button type="main">重要按钮</lj-button>
            <lj-button type="common">一般按钮</lj-button>
            <lj-button type="color">色块按钮</lj-button>
            <lj-button type="grey">灰色按钮</lj-button>
            <lj-button type="text">文本按钮</lj-button>
        </div>
        <div>
            <h2 style="font-size: 20px;margin-top: 20px">tag 标签</h2>
            <lj-tag type="blue">满五唯一</lj-tag>
            <lj-tag type="orange">购房资质</lj-tag>
            <lj-tag type="house">已停售</lj-tag>
            <lj-tag type="price">涨</lj-tag>
            <lj-tag type="buy">买入</lj-tag>
        </div>

        <div>
            <h2 style="font-size: 20px;margin-top: 20px">menu 菜单</h2>
            <lj-menu :default-active="'1'" class="lj-menu-demo1" mode="horizontal" @select="handleSelect">
                <lj-menu-item index="1">处理中心</lj-menu-item>
                <lj-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <lj-menu-item index="2-1">选项1</lj-menu-item>
                    <lj-menu-item index="2-2">选项2</lj-menu-item>
                    <lj-menu-item index="2-3">选项3</lj-menu-item>
                </lj-submenu>
                <lj-menu-item index="3">订单管理</lj-menu-item>
                <lj-menu-item index="4">我的房子</lj-menu-item>
            </lj-menu>

            <lj-menu :default-active="'2'" class="lj-menu-demo2" mode="horizontal" theme="dark" @select="handleSelect">
                <lj-menu-item index="1">二手房</lj-menu-item>
                <lj-menu-item index="2">新房</lj-menu-item>
                <lj-menu-item index="3">租房</lj-menu-item>
            </lj-menu>

            <lj-menu default-active="2" class="lj-menu-demo3">
                <lj-submenu index="1">
                    <template slot="title"><i class="lj-icon-message"></i>导航一</template>
                    <lj-menu-item-group>
                        <template slot="title">分组一</template>
                        <lj-menu-item index="1-1">选项1</lj-menu-item>
                        <lj-menu-item index="1-2">选项2</lj-menu-item>
                    </lj-menu-item-group>
                    <lj-menu-item-group title="分组2">
                        <lj-menu-item index="1-3">选项3</lj-menu-item>
                    </lj-menu-item-group>
                    <lj-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <lj-menu-item index="1-4-1">选项1</lj-menu-item>
                    </lj-submenu>
                </lj-submenu>
                <lj-menu-item index="2"><i class="lj-icon-menu"></i>导航二</lj-menu-item>
                <lj-menu-item index="3"><i class="lj-icon-setting"></i>导航三</lj-menu-item>
            </lj-menu>
        </div>

        <div>
            <h2 style="font-size: 20px;margin-top: 20px">dialog 对话框</h2>
            　
            <lj-button type="text" @click="dialogVisible = true">点击弹出对话框</lj-button>
            <lj-dialog
                    title="获取语音验证码"
                    :visible.sync="dialogVisible"
            >
                <span>验证码以电话的形式通知到您，请注意接听</span>
                <div slot="footer" class="dialog-footer">
                    <span @click="dialogVisible = false">取消</span>
                    <span @click="dialogVisible = false">好的</span>
                </div>
            </lj-dialog>
        </div>

        <div>
            <h2 style="font-size: 20px;margin-top: 20px">watermark 水印</h2>
            <lj-watermark :watermark_txt="'239310'"></lj-watermark>
        </div>
        <div>
            <h2 style="font-size: 20px;margin-top: 20px">input 表单</h2>
            <lj-input :holder="'请输入姓名'">姓名</lj-input>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible:false,
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
