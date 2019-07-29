(function () {

    var dnd = {
      // 初始化
      init: function () {
        var me = this;
        console.log(this);
        me.src = document.querySelector('#demo1-src');
        me.panelList = document.querySelector('.panel-list');

        // 为拖拽源监听dragstart,设置关联数据
        me.src.addEventListener('dragstart', me.onDragStart, false);

        // 拖拽鼠标移入元素,在拖放目标上设置视觉反馈
        me.panelList.addEventListener('dragenter', me.onDragEnter, false);

        // 取消元素dragover默认行为,使其可拖放
        me.panelList.addEventListener('dragover', me.onDragOver, false);

        // 拖拽移出元素,清除视觉反馈
        me.panelList.addEventListener('dragleave', me.onDragLeave, false);

        // 鼠标释放,在拖放目标上接收数据并处理
        me.panelList.addEventListener('drop', me.onDrop, false);

        me.src.addEventListener('drag', function(e) {
        	console.log(e.target + 'onDrag');
        },false);


        me.src.addEventListener('dragend', function(e) {
        	console.log(e.target + 'onDragEnd');
        },false);
      },
      onDragStart: function (e) {
        e.dataTransfer.setData('Text', 'demo1-src');
        console.log(e.target + ' onDragStart');
      },
      onDragEnter: function (e) {
      	console.log(e.target + ' onDragEnter');
        if (e.target.classList.contains('panel-item')) {
          e.target.classList.add('over');
        }
      },
      onDragLeave: function (e) {
      	console.log(e.target + ' onDragLeave');
        if (e.target.classList.contains('panel-item')) {
          e.target.classList.remove('over');
        }
      },
      onDragOver: function (e) {
      	console.log(e.target + ' onDragOver');
        e.preventDefault();
      },
      onDrop: function (e) {
      	console.log(e.target + 'onDrop');
        var id = e.dataTransfer.getData('Text');
        var src = document.getElementById(id);
        var target = e.target;
        if (target.classList.contains('panel-item')) {
          target.appendChild(src);
          target.classList.remove('over');
        }
      }

    };

    dnd.init();
  }());