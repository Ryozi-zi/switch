// dom削除のfunction
function _delete_element(id_name) {
  var dom_obj = document.getElementById(id_name);
  var dom_obj_parent = dom_obj.parentNode;
  dom_obj_parent.removeChild(dom_obj);
}
var light = document.getElementsByTagName('li');

document.getElementById('button').onclick = function() {
  // buttonstyleというidのstyleタグを後々作成して二度目のクリック時には消す作業のためにここで'buttonstyle'idを取得
  var buttonstyle = document.getElementById('buttonstyle');
  // 初めてのクリック時には'buttonstyle'idは存在しないのでnull
  if (buttonstyle == null) {
    // style ぶちこみ
    var style = document.createElement('style');
    style.setAttribute('id', 'buttonstyle');

    style.innerHTML = `a:before {
      transform: translateX(0px);
    }
    a:after {
      animation: move ease 0.2s;
      transform: translateX(78px);
      box-shadow: -4px 0 6px #ababab;
    }
    a {
      border: 6px solid #5af45a;
    }`;
    document.head.appendChild(style);
    for (var i = 0; i < light.length; i++) {
      light[i].style.animationName = "light";
      light[i].style.animationDuration = "3s";
      light[i].style.animationIterationCount = "infinite";
    }
    // light.style.animation = "light 4s linear infinite";

  } else {
    // オフにするときには'buttonstyle'idを削除
    _delete_element('buttonstyle');
    for (var i = 0; i < light.length; i++) {
      light[i].style.animationName = "";
      light[i].style.animationDuration = "";
      light[i].style.animationIterationCount = "";
    }
  }
}
