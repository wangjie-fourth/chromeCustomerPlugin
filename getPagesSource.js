var CurrentPageContext = function () {
    this.allLinkAddressList = document.querySelectorAll('#content_left .c-container.new-pmd')
    this.selectIndex = -1
}


/**
 * 用户输入搜索条件后的页面对象
 */
CurrentPageContext.prototype = {
    /**
     * 搜索页面的所有查询结果链接List
     */
    allLinkAddressList: null,

    /**
     * 用户当前选中的链接下标，默认为-1，最低也是-1，最高是allLinkAddressList.length
     */
    selectIndex: null,

    /**
     * 选择上一条链接信息
     */
    selectLastIndex: function () {
        if (this.selectIndex === 0) {
            --this.selectIndex
            this.clearSelectLinkStyle(this.selectIndex + 1)
            return true
        } else if (this.selectIndex > 0) {
            --this.selectIndex
            this.setSelectLinkStyle(this.selectIndex)
            this.clearSelectLinkStyle(this.selectIndex + 1)
            return true
        }
        return false
    },

    /**
     * 选择下一条链接信息
     */
    selectNextIndex: function () {
        if (this.selectIndex === this.allLinkAddressList.length - 1) {
            ++this.selectIndex
            this.clearSelectLinkStyle(this.selectIndex - 1)
            return true
        } else if (this.selectIndex <= this.allLinkAddressList.length - 2) {
            ++this.selectIndex
            this.setSelectLinkStyle(this.selectIndex)
            this.clearSelectLinkStyle(this.selectIndex - 1)
            return true
        }
        return false
    },

    /**
     * 清除选中链接的样式
     */
    clearSelectLinkStyle: function (index) {
        if (index>=0 && index<this.allLinkAddressList.length) {
            this.allLinkAddressList[index].style.border = null
        }
    },

    /**
     * 设置选中链接的样式
     */
    setSelectLinkStyle: function (index) {
        this.allLinkAddressList[index].style.border = "1px solid red"
    },

    /**
     * 打开当前的链接
     */
    openTheCurrentLink: function () {
        let index = this.selectIndex
        if (index < 0 || index > (this.allLinkAddressList.length - 1)) {
            throw new Error('the incorrect index ' + index)
        }
        let newLinkAddress = this.allLinkAddressList[index].querySelector('h3.t a').href
        window.open(newLinkAddress)
    }
}


let target = new CurrentPageContext()
// 键盘事件监听
document.onkeydown = function (key) {
    if (key.keyCode === 87) {
        console.log('user press W ')
        if (target.selectLastIndex()) {

        }
    }
    if (key.keyCode === 83) {
        console.log('user press S ')
        if (target.selectNextIndex()) {

        }


    }
    if (key.keyCode === 13) {
        console.log('user press Enter')
        target.openTheCurrentLink()
    }

}
// function DOMtoString(document_root) {
//     let target = new CurrentPageContext()
//     // 键盘事件监听
//     document_root.onkeydown = function (key) {
//         if (key.keyCode === 87) {
//             console.log('user press W ')
//             if (target.selectLastIndex()) {
//
//             }
//         }
//         if (key.keyCode === 83) {
//             console.log('user press S ')
//             if (target.selectNextIndex()) {
//
//             }
//
//
//         }
//         if (key.keyCode === 13) {
//             console.log('user press Enter')
//             target.openTheCurrentLink()
//         }
//
//     }
//
//
//     return null;
// }

// chrome.runtime.sendMessage({
//     action: "getSource",
//     source: DOMtoString(document)
// });






































