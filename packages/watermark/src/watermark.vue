<template>
    <div class="lj-watermark"></div>
</template>
<script>
    export default{
        name: 'LjWatermark',
        componentName: 'LjWatermark',
        props: {
            watermark_txt: {
                type: String,
                default: "水印",
            },
            watermark_x: {//水印起始位置x轴坐标
                type: Number,
                default: -400,
            },
            watermark_y: {//水印起始位置Y轴坐标
                type: Number,
                default: 40,
            },
            watermark_rows: {//水印行数
                type: Number,
                default: 30,
            },
            watermark_cols: {//水印列数
                type: Number,
                default: 30,
            },
            watermark_x_space: {//水印x轴间隔
                type: Number,
                default: 40,
            },
            watermark_y_space: {//水印y轴间隔
                type: Number,
                default: 50,
            },
            watermark_color: {//水印字体颜色
                type: String,
                default: '#ddd',
            },
            watermark_alpha: {//水印透明度
                type: Number,
                default: 0.4,
            },
            watermark_fontsize: {//水印字体大小
                type: String,
                default: '16px',
            },
            watermark_font: {//水印字体
                type: String,
                default: 'PingFang SC',
            },
            watermark_width: {
                type: Number,
                default: 80,//水印宽度
            },
            watermark_height: {
                type: Number,
                default: 20,//水印高度
            },
            watermark_angle: {
                type: Number,
                default: 30,//水印倾斜度数
            },
        },
        mounted(){
            let oTemp = document.createDocumentFragment();

            for (let i = 0; i < this.watermark_rows; i++) {
                let y = this.watermark_y + (this.watermark_y_space + this.watermark_height) * i;

                for (let j = 0; j < this.watermark_cols; j++) {
                    let x = this.watermark_x + (this.watermark_width + this.watermark_x_space) * j + 20 * i;
                    let mask_div = document.createElement('div');
                    mask_div.className = 'mask_div';
                    mask_div.appendChild(document.createTextNode(this.watermark_txt));
                    //设置水印div倾斜显示
                    mask_div.style.transform = "rotate(-" + this.watermark_angle + "deg)";
                    mask_div.style.visibility = "";
                    mask_div.style.position = "fixed";
                    mask_div.style.left = x + 'px';
                    mask_div.style.top = y + 'px';
                    mask_div.style.overflow = "hidden";
                    mask_div.style.zIndex = "8888";
                    mask_div.style.pointerEvents = 'none';//让水印不遮挡页面的点击事件
                    mask_div.style.opacity = this.watermark_alpha;
                    mask_div.style.fontSize = this.watermark_fontsize;
                    mask_div.style.fontFamily = this.watermark_font;
                    mask_div.style.color = this.watermark_color;
                    mask_div.style.textAlign = "center";
                    mask_div.style.width = this.watermark_width + 'px';
                    mask_div.style.height = this.watermark_height + 'px';
                    mask_div.style.display = "block";
                    oTemp.appendChild(mask_div);
                }
            }
            document.body.appendChild(oTemp);
        },
    }
</script>