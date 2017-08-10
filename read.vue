<template>
    <div class="main">
        <div class="wrapper clearfix">
            <div class="side-nav">
                <ul>
                    <li class="nav-item">
                        <div class="group-title">Basic 基础</div>
                        <ul class="menu-list">
                            <li class="list-nav-item"><a href="#button">Button 按钮</a></li>
                            <li class="list-nav-item"><a href="#tag">Tag 标签</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <div class="group-title">Form 表单</div>
                        <ul class="menu-list">
                            <li class="list-nav-item"><a href="#input">Input 输入框</a></li>
                            <li class="list-nav-item"><a href="#radio">Radio 单选</a></li>
                            <li class="list-nav-item"><a href="#checkbox">Checkbox 多选</a></li>
                        </ul>
                        <div class="group-title">Notice 提示</div>
                        <ul class="menu-list">
                            <li class="list-nav-item"><a href="#dialog">Dialog 弹出框</a></li>
                            <li class="list-nav-item"><a href="#toast">Toast 提示</a></li>
                        </ul>
                        <div class="group-title">Navigation 导航</div>
                        <ul class="menu-list">
                            <li class="list-nav-item"><a href="#menu">Menu 菜单</a></li>
                        </ul>
                    </li>
                    <li></li>
                </ul>

            </div>
            <div class="content">
                <div class="button-content">
                    <h2 id="button">Button 按钮</h2>
                    <h3>基本用法</h3>
                    <div class="code-box">
                        <lj-button type="main">重要按钮</lj-button>
                        <lj-button type="main" :disabled="true">重要按钮</lj-button>
                        <br><br>
                        <lj-button type="common">一般按钮</lj-button>
                        <lj-button type="common" :disabled="true">一般按钮</lj-button>
                        <br><br>
                        <lj-button type="color">色块按钮</lj-button>
                        <lj-button type="color" :disabled="true">色块按钮</lj-button>
                        <br><br>
                        <lj-button type="grey">灰色按钮</lj-button>
                        <lj-button type="text">文本按钮</lj-button>
                        <p @click="showBtnCode= !showBtnCode" class="btn-word">{{word('showBtnCode')}}</p>
                        <div class="code" v-show="showBtnCode==true">
                            <span class="high-light"><<span>lj-button type="main"</span>></span>重要按钮<<span
                                class="high-light">/lj-button></span><br>
                            <span class="high-light"><<span>lj-button type="main" :disabled="true"</span>></span>重要按钮<<span
                                class="high-light">/lj-button></span><br>
                            <span class="high-light"><<span>lj-button type="common"</span>></span>一般按钮<<span
                                class="high-light">/lj-button></span><br>
                            <span class="high-light"><<span>lj-button type="common" :disabled="true"</span>></span>一般按钮<<span
                                class="high-light">/lj-button></span><br>
                            <span class="high-light"><<span>lj-button type="color"</span>></span>色块按钮<<span
                                class="high-light">/lj-button></span><br>
                            <span class="high-light"><<span>lj-button type="color" :disabled="true"</span>></span>色块按钮<<span
                                class="high-light">/lj-button></span><br>
                            <span class="high-light"><<span>lj-button type="grey"</span>></span>灰色按钮<<span
                                class="high-light">/lj-button></span><br>
                            <span class="high-light"><<span>lj-button type="text"</span>></span>文本按钮<<span
                                class="high-light">/lj-button></span><br>
                        </div>
                    </div>
                    <h3>Attributes</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>可选值</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>type</td>
                            <td>类型</td>
                            <td>String</td>
                            <td>main,common,color,grey,text</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用状态</td>
                            <td>Boolean</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>native-type</td>
                            <td>原生 type 属性</td>
                            <td>String</td>
                            <td>button,submit,reset</td>
                            <td>button</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tag-content">
                    <h2 id="tag">Tag 标签</h2>
                    <h3>基本用法</h3>
                    <div class="code-box">
                        <lj-tag type="blue">满五唯一</lj-tag>
                        <lj-tag type="orange">购房资质</lj-tag>
                        <lj-tag type="house">已停售</lj-tag>
                        <lj-tag type="price">涨</lj-tag>
                        <lj-tag type="buy">买入</lj-tag>
                        <p @click="showTagCode= !showTagCode" class="btn-word">{{word('showTagCode')}}</p>
                        <div class="code" v-show="showTagCode==true">
                            <span class="high-light"><<span>lj-tag type="blue"</span>></span>满五唯一<<span
                                class="high-light">/lj-tag></span><br>
                            <span class="high-light"><<span>lj-tag type="orange"</span>></span>购房资质<<span
                                class="high-light">/lj-tag></span><br>
                            <span class="high-light"><<span>lj-tag type="house"</span>></span>已停售<<span
                                class="high-light">/lj-tag></span><br>
                            <span class="high-light"><<span>lj-tag type="price"</span>></span>涨<<span
                                class="high-light">/lj-tag></span><br>
                            <span class="high-light"><<span>lj-tag type="buy"</span>></span>买入<<span class="high-light">/lj-tag></span><br>
                        </div>
                    </div>
                    <h3>Attributes</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>可选值</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>type</td>
                            <td>类型</td>
                            <td>String</td>
                            <td>blue,orange,house,price,buy</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="input-content">
                    <h2 id="input">Input 输入框</h2>
                    <h3>基本用法</h3>
                    <div class="code-box">
                        <lj-input :holder="'请输入姓名'" v-model="name">姓名</lj-input>
                        <lj-input :holder="'请输入手机号'" v-model="phone">手机号</lj-input>

                        <p @click="showInputCode= !showInputCode" class="btn-word">{{word('showInputCode')}}</p>
                        <div class="code" v-show="showInputCode==true">
                            <span class="high-light"><<span>lj-input :holder="'请输入姓名'" v-model="name"</span>></span>姓名<<span
                                class="high-light">/lj-input></span><br>
                            <span class="high-light"><<span>lj-input :holder="'请输入手机号'" v-model="phone"</span>></span>手机号<<span
                                class="high-light">/lj-input></span><br>
                            <span class="high-light"><<span class="high-light">script</span>></span><br>
                            <span class="high-light">export default{</span><br>
                            <span class="high-light" style="margin-left: 20px">data(){</span><br>
                            <span class="high-light" style="margin-left: 40px">return{</span><br>
                            <span class="high-light" style="margin-left: 60px">name:'',</span><br>
                            <span class="high-light" style="margin-left: 60px">phone:'',</span><br>
                            <span class="high-light" style="margin-left: 40px">}</span><br>
                            <span class="high-light" style="margin-left: 20px">}</span><br>
                            <span class="high-light">}</span><br>
                            <span class="high-light"><<span class="high-light">/script</span>></span>
                        </div>
                    </div>
                    <h3>Attributes</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>可选值</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>holder</td>
                            <td>占位符</td>
                            <td>String</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="radio-content">
                    <h2 id="radio">Radio 单选</h2>
                    <h3>基本用法</h3>
                    <div class="code-box">
                        <span style="margin-right: 20px">性别</span>
                        <lj-radio v-model="radio1" label="1">男</lj-radio>
                        <lj-radio v-model="radio1" label="0">女</lj-radio>
                        <br><br>
                        <span style="margin-right: 20px">是否</span>
                        <lj-radio v-model="radio2" type="square" label="2">是</lj-radio>
                        <lj-radio v-model="radio2" type="square" label="3">否</lj-radio>

                        <p @click="showRadioCode= !showRadioCode" class="btn-word">{{word('showRadioCode')}}</p>
                        <div class="code" v-show="showRadioCode==true">
                            <span class="high-light"><<span>lj-radio v-model="radio1" label="1"</span>></span>男<<span
                                class="high-light">/lj-radio></span><br>
                            <span class="high-light"><<span>lj-radio v-model="radio1" label="0"</span>></span>女<<span
                                class="high-light">/lj-radio></span><br>
                            <span class="high-light"><<span>lj-radio v-model="radio2" label="2" type="square"</span>></span>是<<span
                                class="high-light">/lj-radio></span><br>
                            <span class="high-light"><<span>lj-radio v-model="radio2" label="3" type="square"</span>></span>否<<span
                                class="high-light">/lj-radio></span><br>
                            <span class="high-light"><<span class="high-light">script</span>></span><br>
                            <span class="high-light">export default{</span><br>
                            <span class="high-light" style="margin-left: 20px">data(){</span><br>
                            <span class="high-light" style="margin-left: 40px">return{</span><br>
                            <span class="high-light" style="margin-left: 60px">radio1:'1',</span><br>
                            <span class="high-light" style="margin-left: 60px">radio2:'2',</span><br>
                            <span class="high-light" style="margin-left: 40px">}</span><br>
                            <span class="high-light" style="margin-left: 20px">}</span><br>
                            <span class="high-light">}</span><br>
                            <span class="high-light"><<span class="high-light">/script</span>></span>

                        </div>
                    </div>
                    <h3>Attributes</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>可选值</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>label</td>
                            <td>Radio 的 value</td>
                            <td>String,Number,Boolean</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>原生 name 属性</td>
                            <td>String</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>类型</td>
                            <td>String</td>
                            <td>circle，square</td>
                            <td>circle</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="checkbox-content">
                    <h2 id="checkbox">Checkbox 多选</h2>
                    <h3>基本用法</h3>
                    <h3>Attributes</h3>
                    <div class="code-box">
                        <lj-checkbox v-for="checkItem in checkList" :label="checkItem" :checks="list">{{checkItem}}</lj-checkbox>
                        <p @click="showCheckboxCode= !showCheckboxCode" class="btn-word">
                            {{word('showCheckboxCode')}}</p>
                        <div class="code" v-show="showCheckboxCode==true">
                            <span class="high-light"><<span>lj-checkbox v-for="checkItem in checkList"  :label="checkItem" :checks="list""</span>></span><span>{{</span>checkItem <span>}}</span></span>
                            <<span class="high-light">/lj-checkbox></span><br>
                            <span class="high-light"><<span class="high-light">script</span>></span><br>
                            <span class="high-light">export default{</span><br>
                            <span class="high-light" style="margin-left: 20px">data(){</span><br>
                            <span class="high-light" style="margin-left: 40px">return{</span><br>
                            <span class="high-light" style="margin-left: 60px">checkList:['周一','周二','周三','周四','周五','周六','周日'],</span><br>
                            <span class="high-light" style="margin-left: 40px">}</span><br>
                            <span class="high-light" style="margin-left: 20px">}</span><br>
                            <span class="high-light">}</span><br>
                            <span class="high-light"><<span class="high-light">/script</span>></span>

                        </div>
                    </div>
                    <h3>Attributes</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>可选值</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>label</td>
                            <td>Radio 的 value</td>
                            <td>String,Number,Boolean</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>原生 name 属性</td>
                            <td>String</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="dialog-content">
                    <h2 id="dialog">Dialog 弹出框</h2>
                    <h3>基本用法</h3>
                    <h3>Attributes</h3>
                    <div class="code-box">
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
                        <p @click="showDialogCode= !showDialogCode" class="btn-word">
                            {{word('showDialogCode')}}</p>
                        <div class="code" v-show="showDialogCode==true">
                            <span class="high-light"><<span>lj-button type="text" @click="dialogVisible = true"</span>></span>点击弹出对话框<<span class="high-light">/lj-button></span><br>
                            <span class="high-light"><<span>lj-dialog
                                title="获取语音验证码"
                                :visible.sync="dialogVisible"</span>></span><br>
                            <span class="high-light"><<span>span</span>></span>验证码以电话的形式通知到您，请注意接听<<span class="high-light">/span></span><br>
                            <span class="high-light"><<span>div slot="footer" class="dialog-footer"</span>></span><br>
                            <span class="high-light"><<span>span @click="dialogVisible = false"</span>></span>取消<<span class="high-light">/span></span><br>
                            <span class="high-light"><<span>span @click="dialogVisible = false"</span>></span>好的<<span class="high-light">/span></span><br>
                            <span class="high-light"><</span> <span class="high-light">/div</span> <span class="high-light">></span><br>
                            <span class="high-light"><<span class="high-light">script</span>></span><br>
                            <span class="high-light">export default{</span><br>
                            <span class="high-light" style="margin-left: 20px">data(){</span><br>
                            <span class="high-light" style="margin-left: 40px">return{</span><br>
                            <span class="high-light" style="margin-left: 60px">dialogVisible:false,</span><br>
                            <span class="high-light" style="margin-left: 40px">}</span><br>
                            <span class="high-light" style="margin-left: 20px">}</span><br>
                            <span class="high-light">}</span><br>
                            <span class="high-light"><<span class="high-light">/script</span>></span>

                        </div>
                    </div>
                    <h3>Attributes</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>可选值</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>visible</td>
                            <td>是否显示 Dialog，支持 .sync 修饰符</td>
                            <td>Boolean</td>
                            <td>-</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>Dialog 的标题，也可通过具名 slot传入</td>
                            <td>String</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>Dialog 的大小</td>
                            <td>String</td>
                            <td>small，large</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>close-on-click-modal</td>
                            <td>是否可以通过点击 modal 关闭 Dialog</td>
                            <td>Boolean</td>
                            <td>-</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>close-on-press-escape</td>
                            <td>是否可以通过按下 ESC 关闭 Dialog</td>
                            <td>Boolean</td>
                            <td>-</td>
                            <td>true</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="toast-content">
                    <h2 id="toast">Toast 提示</h2>
                    <h3>图文</h3>
                    <div class="code-box">
                        <lj-toast type="image-text">正在加载</lj-toast>

                        <p @click="showToast1Code= !showToast1Code" class="btn-word">
                            {{word('showToast1Code')}}</p>
                        <div class="code" v-show="showToast1Code==true">
                            <span class="high-light"><<span>j-toast type="image-text"</span>></span>正在加载<<span
                                class="high-light">/lj-toast></span><br>
                        </div>
                    </div>
                    <h3>纯文字</h3>
                    <div class="code-box">
                        <lj-toast type="text">贷款金额超出房屋售价</lj-toast>

                        <p @click="showToast2Code= !showToast2Code" class="btn-word">
                            {{word('showToast2Code')}}</p>
                        <div class="code" v-show="showToast2Code==true">
                            <span class="high-light"><<span>j-toast type="text"</span>></span>贷款金额超出房屋售价<<span
                                class="high-light">/lj-toast></span><br>
                        </div>
                    </div>
                    <h3>Attributes</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>可选值</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>type</td>
                            <td>类型</td>
                            <td>String</td>
                            <td>image-text,text</td>
                            <td>text</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="menu-content">
                    <h2 id="menu">Menu 菜单</h2>
                    <h3>基本用法-顶栏</h3>
                    <div class="code-box">
                        <lj-menu :default-active="'1'" class="lj-menu-demo1" mode="horizontal" @select="handleSelect">
                            <lj-menu-item index="1">二手房</lj-menu-item>
                            <lj-submenu index="2">
                                <template slot="title">新房</template>
                                <lj-menu-item index="2-1">选项1</lj-menu-item>
                                <lj-menu-item index="2-2">选项2</lj-menu-item>
                                <lj-menu-item index="2-3">选项3</lj-menu-item>
                            </lj-submenu>
                            <lj-menu-item index="3">租房</lj-menu-item>
                            <lj-menu-item index="4">业主</lj-menu-item>
                            <lj-menu-item index="5">百科</lj-menu-item>
                            <lj-menu-item index="6">海外</lj-menu-item>
                            <lj-menu-item index="7">旅居</lj-menu-item>
                        </lj-menu>

                        <p @click="showMenu1Code= !showMenu1Code" class="btn-word">
                            {{word('showMenu1Code')}}</p>
                        <div class="code" v-show="showMenu1Code==true">
                            <span class="high-light"><<span>lj-menu :default-active="'1'" class="lj-menu-demo1" mode="horizontal" @select="handleSelect"</span>></span><br>
                            <span class="high-light"><<span>lj-menu-item index="1"</span>></span>二手房<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-submenu index="2"</span>></span><br>
                            <span class="high-light"><<span>template slot="title"</span>></span>新房<<span class="high-light">/template></span><br>
                            <span class="high-light"><<span>lj-menu-item index="2-1"</span>></span>选项1<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-menu-item index="2-2"</span>></span>选项2<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-menu-item index="2-3"</span>></span>选项3<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>/lj-submenu</span>></span><br>
                            <span class="high-light"><<span>lj-menu-item index="3"</span>></span>租房<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-menu-item index="4"</span>></span>业主<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-menu-item index="5"</span>></span>百科<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-menu-item index="6"</span>></span>海外<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-menu-item index="7"</span>></span>旅居<<span class="high-light">/lj-menu-item></span><br>

                            <span class="high-light"><<span class="high-light">script</span>></span><br>
                            <span class="high-light">export default{</span><br>
                            <span class="high-light" style="margin-left: 20px">methods:{</span><br>
                            <span class="high-light" style="margin-left: 60px">handleSelect(key, keyPath) {</span><br>
                            <span class="high-light" style="margin-left: 80px"> console.log(key, keyPath);</span><br>
                            <span class="high-light" style="margin-left: 40px">}</span><br>
                            <span class="high-light" style="margin-left: 20px">}</span><br>
                            <span class="high-light">}</span><br>
                            <span class="high-light"><<span class="high-light">/script</span>></span>

                        </div>
                    </div>
                    <h3>基本用法-黑色主题</h3>
                    <div class="code-box">
                        <lj-menu :default-active="'2'" class="lj-menu-demo2" mode="horizontal" theme="dark" @select="handleSelect">
                            <lj-menu-item index="1">二手房</lj-menu-item>
                            <lj-menu-item index="2">新房</lj-menu-item>
                            <lj-menu-item index="3">租房</lj-menu-item>
                        </lj-menu>

                        <p @click="showMenu2Code= !showMenu2Code" class="btn-word">
                            {{word('showMenu2Code')}}</p>
                        <div class="code" v-show="showMenu2Code==true">
                            <span class="high-light"><<span>lj-menu :default-active="'2'" class="lj-menu-demo2" mode="horizontal" theme="dark" @select="handleSelect"</span>></span><br>
                            <span class="high-light"><<span>lj-menu-item index="1"</span>></span>二手房<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-menu-item index="2"</span>></span>新房<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-menu-item index="3"</span>></span>租房<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>/lj-menu</span>></span><br>

                            <span class="high-light"><<span class="high-light">script</span>></span><br>
                            <span class="high-light">export default{</span><br>
                            <span class="high-light" style="margin-left: 20px">methods:{</span><br>
                            <span class="high-light" style="margin-left: 60px">handleSelect(key, keyPath) {</span><br>
                            <span class="high-light" style="margin-left: 80px"> console.log(key, keyPath);</span><br>
                            <span class="high-light" style="margin-left: 40px">}</span><br>
                            <span class="high-light" style="margin-left: 20px">}</span><br>
                            <span class="high-light">}</span><br>
                            <span class="high-light"><<span class="high-light">/script</span>></span>

                        </div>
                    </div>
                    <h3>侧边栏</h3>
                    <div class="code-box">
                        <lj-menu default-active="2" class="lj-menu-demo3">
                            <lj-submenu index="1">
                                <template slot="title">导航一</template>
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
                            <lj-menu-item index="2">导航二</lj-menu-item>
                            <lj-menu-item index="3">导航三</lj-menu-item>
                        </lj-menu>

                        <p @click="showMenu3Code= !showMenu3Code" class="btn-word">
                            {{word('showMenu3Code')}}</p>
                        <div class="code" v-show="showMenu3Code==true">
                            <span class="high-light"><<span>lj-menu default-active="2" class="lj-menu-demo3"</span>></span><br>
                            <span class="high-light"><<span>lj-submenu index="1"</span>></span><br>
                            <span class="high-light"><<span>template slot="title"</span>></span>导航一<<span class="high-light">/template></span><br>
                            <span class="high-light"><<span>lj-menu-item-group</span>></span><br>
                            <span class="high-light"><<span>template slot="title"</span>></span>分组一<<span class="high-light">/template></span><br>
                            <span class="high-light"><<span>lj-menu-item index="1-1"</span>></span>选项1<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-menu-item index="1-2"</span>></span>选项2<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>／lj-menu-item-group</span>></span><br>
                            <span class="high-light"><<span>lj-menu-item-group title="分组2"</span>></span><br>
                            <span class="high-light"><<span>lj-menu-item index="1-3"</span>></span>选项3<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>／lj-menu-item-group</span>></span><br>
                            <span class="high-light"><<span>lj-submenu index="1-4"</span>></span><br>
                            <span class="high-light"><<span>template slot="title"</span>></span>选项4<<span class="high-light">/template></span><br>
                            <span class="high-light"><<span>lj-menu-item index="1-4-1"</span>></span>选项1<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>/lj-submenu</span>></span><br>
                            <span class="high-light"><<span>/lj-submenu</span>></span><br>
                            <span class="high-light"><<span>lj-menu-item index="2"</span>></span>导航二<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span>lj-menu-item index="3"</span>></span>导航三<<span class="high-light">/lj-menu-item></span><br>
                            <span class="high-light"><<span class="high-light">script</span>></span><br>
                            <span class="high-light">export default{</span><br>
                            <span class="high-light" style="margin-left: 20px">methods:{</span><br>
                            <span class="high-light" style="margin-left: 60px">handleSelect(key, keyPath) {</span><br>
                            <span class="high-light" style="margin-left: 80px"> console.log(key, keyPath);</span><br>
                            <span class="high-light" style="margin-left: 40px">}</span><br>
                            <span class="high-light" style="margin-left: 20px">}</span><br>
                            <span class="high-light">}</span><br>
                            <span class="high-light"><<span class="high-light">/script</span>></span>

                        </div>
                    </div>
                    <h3>Attributes</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>可选值</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>mode</td>
                            <td>模式</td>
                            <td>String</td>
                            <td>horizontal,vertical</td>
                            <td>vertical</td>
                        </tr>
                        <tr>
                            <td>theme</td>
                            <td>主题色</td>
                            <td>String</td>
                            <td>light,dark</td>
                            <td>light</td>
                        </tr>
                        <tr>
                            <td>default-active</td>
                            <td>当前激活菜单的 index</td>
                            <td>String</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                showBtnCode: false,
                showTagCode: false,
                showInputCode: false,
                showRadioCode: false,
                showCheckboxCode: false,
                showDialogCode: false,
                showMenu1Code: false,
                showMenu2Code: false,
                showMenu3Code: false,
                showToast1Code: false,
                showToast2Code: false,
                name: '',
                phone: '',
                radio1: '1',
                radio2: '2',
                checkList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                list: ['周一','周二',],
                dialogVisible:false,
            }
        },
        computed: {
            word(){
                return function (shouCode) {
                    if (this[shouCode]) {
                        return '隐藏代码';
                    } else {
                        return '显示代码';
                    }
                }
            },
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>