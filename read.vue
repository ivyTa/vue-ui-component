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
                        <lj-button type="common">一般按钮</lj-button>
                        <lj-button type="color">色块按钮</lj-button>
                        <lj-button type="grey">灰色按钮</lj-button>
                        <lj-button type="text">文本按钮</lj-button>
                        <p @click="showBtnCode= !showBtnCode" class="btn-word">{{word('showBtnCode')}}</p>
                        <div class="code" v-show="showBtnCode==true">
                            <span class="high-light"><<span>lj-button type="main"</span>></span>重要按钮<<span
                                class="high-light">/lj-button></span><br>
                            <span class="high-light"><<span>lj-button type="common"</span>></span>一般按钮<<span
                                class="high-light">/lj-button></span><br>
                            <span class="high-light"><<span>lj-button type="color"</span>></span>色块按钮<<span
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
                            <td>是否禁用状态	</td>
                            <td>Boolean</td>
                            <td>-</td>
                            <td>-</td>
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
                        <lj-checkbox v-for="checkItem in checkList" :value="checkItem">{{checkItem}}</lj-checkbox>
                        <p @click="showCheckboxCode= !showCheckboxCode" class="btn-word">
                            {{word('showCheckboxCode')}}</p>
                        <div class="code" v-show="showCheckboxCode==true">
                            <span class="high-light"><<span>lj-checkbox v-for="checkItem in checkList" :value="checkItem"</span>></span><span>{{</span>checkItem <span>}}</span></span>
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
                name: '',
                phone: '',
                radio1: '1',
                radio2: '2',
                checkList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                checkedOptions: [],
                checked: '',
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

    }
</script>