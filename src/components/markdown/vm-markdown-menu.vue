<template>
  <div class="vm-editor-menu"
       :style="{backgroundColor:bgMenu, color:menuColor, border:menuBorder}">
    <div class="command">
      <VmMarkdownButton icon="iconfont icon-heading">
        <VmMarkdownDropdown>
          <ul class="vm-editor-ul" :style="{color: filterColor}">
            <li @click="insertText('# ')">
              <h1>H1</h1>
            </li>
            <li @click="insertText('## ')">
              <h2>H2</h2>
            </li>
            <li @click="insertText('### ')">
              <h3>H3</h3>
            </li>
            <li @click="insertText('#### ')">
              <h4>H4</h4>
            </li>
            <li @click="insertText('##### ')">
              <h5>H5</h5>
            </li>
          </ul>
        </VmMarkdownDropdown>
      </VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-bold" title="Bold" @click.native="insertText('****')"></VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-italic" title="Italic" @click.native="insertText('**')"></VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-strikethrough"  title="Strikethrough" 
                        @click.native="insertText('~~~~')">                
      </VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-ol" title="Ordered List" @click.native="insertText('1.')"></VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-ul" title="Unordered List" @click.native="insertText('-')"></VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-quote"  title="Blockquote" @click.native="insertText('>')"></VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-code" title="Code" @click.native="insertText('```\n\n```\n')"></VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-table">
        <VmMarkdownTable :hoverColor="bgMenu" title="Table"
                         @textChange="uploadTable">
        </VmMarkdownTable>
      </VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-image" title="Image"
                        @click.native="insertText('![Logo](url)')">
      </VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-link" title="Link" @click.native="insertText('[JesseLuo](url)')"></VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-line" title="Line" @click.native="insertText('---\n')"></VmMarkdownButton>
    </div> 
    <div class="vm-markdown-layout">
      <VmMarkdownButton icon="iconfont icon-layout-default" title="实时预览" layout="default"></VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-layout-right" title="编辑模式" layout="right"></VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-layout-left" title="预览" layout="left"></VmMarkdownButton>
      <VmMarkdownButton icon="iconfont icon-layout-zoom" title="放大" layout="zoom"></VmMarkdownButton>
    </div>
  </div>
</template>
<style lang="scss">
  .vm-editor-menu{
    display: flex;
    height: 40px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-radius: 4px 4px 0px 0px;
    position: relative;
    
    .command, .vm-markdown-layout{
      display: flex;
    }
    .line{
      display: inline-block;
      width: 1px;
      height: 40px;
      margin: 0 10px;
      background-color: #eeeff1;
    }
  }
  ul.vm-editor-ul{
    padding: 0;
    margin: 0;
    li{
      margin: 0;
      padding: 5px 30px;
      display: flex;
      justify-content: center;
      &:hover{
        background: #f8f8f8;
      }
      h1{
        text-align: center;
      }
    }  
  }
</style>
<script>
import VmMarkdownButton from './vm-markdown-button.vue'
import VmMarkdownDropdown from './vm-markdown-dropdown.vue'
import VmMarkdownTable from './vm-markdown-table.vue'
import insertText from '@/assets/js/insertText.js'
import range from '../../../static/js/rangeFn.js'
export default {
  name: 'VmMarkdownMenu',
  components: {
    VmMarkdownButton,
    VmMarkdownDropdown,
    VmMarkdownTable
  },
  props: {
    bgMenu: {
      type: String,
      default:'#fafbfc'
    },
    menuBorder: {
      type: String,
      default:'1px solid #eeeff1'
    },
    menuColor: {
      type: String,
      default: '#858585'
    },
    hoverColor: {
      type: String,
      default:'#232323'
    }
  },
  data(){
    return {
      text:''
    }
  },
  computed: {
    filterColor: function(){
      if(this.bgMenu === '#fafbfc'){
        return '#232323'
      }else{
        return this.bgMenu
      }
    }
  },
  created(){
        const seft = this
          // 监听双击事件
          document.addEventListener("dblclick", doubleClick, true);
          // 监听释放鼠标按钮事件
          document.addEventListener("mouseup", mouseUp, true);
          // 双击处理函数
          function doubleClick() {
              var text = "";
              if (window.getSelection) {
                  text = window.getSelection().toString();
              } else if (document.selection && document.selection.type != "Control") {
                  text = document.selection.createRange().text;
              }
              if ("" != text) {
                  seft.text = text
              }
          }
          // 释放鼠标处理函数
          function mouseUp() {
              var text = "";
              if (window.getSelection) {
                  text = window.getSelection().toString();
              } else if (document.selection && document.selection.type != "Control") {
                  text = document.selection.createRange().text;
              }
              if ("" != text) {
                  seft.text = text
              }
          }
  },
  methods: {
    insertText(string){
      let selecter = window.getSelection();
      let content = document.querySelector('.vm-markdown-content')
      let value = content.value;
      let point = range.getCursortPosition(content);
      let lastChart = value.substring(point - 1, point);
      if(string == '****'   || string == '~~~~'){
        if(this.text == ''){
          insertText(content, string )
          if (lastChart != '\n' && value != '') {
              range.setCaretPosition(content, point + 3);
          } else {
              range.setCaretPosition(content, point + 2);
          }
        }else{
          if(string == '****'){
            insertText(content, '**'+this.text+'**\n'  )
          }else{
            insertText(content, '~~'+this.text+'~~\n')
          }
        }
        
      }else if(string == '**'){
        if(this.text == ''){
          insertText(content, string )
          if (lastChart != '\n' && value != '') {
              range.setCaretPosition(content, point + 3);
          } else {
              range.setCaretPosition(content, point + 1);
          }
        }else{
          insertText(content, '*'+this.text+'*\n'  )
        }
        
      }else if(string == '```\n\n```\n' ){
        if(this.text == ''){
           insertText(content, string )
            if (lastChart != '\n' && value != '') {
                range.setCaretPosition(content, point + 4);
            } else {
                  range.setCaretPosition(content, point + 3);
            }
        }else{
          insertText(content, '```\n'+this.text+'```\n'  )
        }
        
      }else{
        insertText(content, string)
      }
      this.$emit('textChange', content.value)
      this.text = ''
    },
    uploadTable(content){
      this.$emit('textChange', content)
    }
  },
  mounted () {
    let menu = document.querySelector('.vm-editor-menu')
    menu.addEventListener('mouseover', evt => {
      if (evt.target.tagName == 'I') {
        evt.target.style.color = this.hoverColor
      } 
    })
    menu.addEventListener('mouseout', function (evt) {
      if (evt.target.tagName == 'I') {
        evt.target.style.color = ''
      } 
    })
  }
}
</script>
