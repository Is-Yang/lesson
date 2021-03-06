(Date.prototype.format = function(e) {
  var t = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds()
  };
  for (var a in (/(y+)/.test(e) &&
    (e = e.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    )),
  t))
    new RegExp("(" + a + ")").test(e) &&
      (e = e.replace(
        RegExp.$1,
        1 == RegExp.$1.length ? t[a] : ("00" + t[a]).substr(("" + t[a]).length)
      ));
  return e;
}),
  (String.prototype.startWith = function(e) {
    return (
      !(null == e || "" == e || 0 == this.length || e.length > this.length) &&
      this.substr(0, e.length) == e
    );
  }),
  (String.prototype.replaceAll = function(e, t) {
    var a = new RegExp(e, "g");
    return this.replace(a, t);
  });
var keepworkHost = "http://10.27.26.21:8080",
  genEnNum = function(e) {
    if (isNaN(e)) return "0";
    var t = e % 10,
      a = e % 100;
    return 0 == e
      ? "0"
      : 11 == a || 12 == a || 13 == a
        ? e + "th"
        : 1 == t
          ? e + "st"
          : 2 == t
            ? e + "nd"
            : 3 == t
              ? e + "rd"
              : e + "th";
  },
  fmtDate = function(e, t) {
    var a = new Date(e),
      s = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ][a.getDay()],
      n = genEnNum(a.getDate()),
      l = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ][a.getMonth()],
      o = a.getFullYear();
    return t && "dd, MM, yyyy" == t
      ? n + ", " + l + ", " + o
      : s + " " + n + ", " + l + ", " + o;
  },
  openDialog = function(e, t) {
    (e.label = e.label ? e.label : ""),
      (e.message = e.message ? e.message : ""),
      (e.messageClass = e.messageClass ? e.messageClass : "");
    var a =
      '<div tabindex="-1" role="dialog" aria-modal="true" aria-label="' +
      e.label +
      '" class="open-dialog el-message-box__wrapper" style="z-index: 2081;"><div class="el-message-box el-message-box--center" style="height:' +
      e.height +
      ";width:" +
      e.width +
      '"><div class="el-message-box__header"><button type="button" aria-label="Close" class="close-icon el-message-box__headerbtn"><i class="el-message-box__close el-icon-close"></i></button></div><div class="el-message-box__content"><div class="el-message-box__message ' +
      e.messageClass +
      '"><p>' +
      e.message +
      "</p></div>";
    e.input &&
      (a +=
        '<div class="el-message-box__input"><div class="el-input"><input type="text" name="openInput" autocomplete="off" placeholder="" class="el-input__inner"></div><div class="el-message-box__errormsg" style="visibility: hidden;"></div></div>'),
      (a += '</div><div class="el-message-box__btns">'),
      e.cancelBtn &&
        (a +=
          '<button type="button" class="cancel-btn el-button el-button--default el-button--small"><span>Cancel</span></button>'),
      (a +=
        '<button type="button" class="ok-btn el-button el-button--default el-button--small el-button--primary "><span>OK</span></button></div> </div></div><div class="v-modal" tabindex="0" style="z-index: 2080;"></div>'),
      $(".main").append(a),
      $(".open-dialog .close-icon,.open-dialog .cancel-btn").on(
        "click",
        function() {
          $(".open-dialog,.v-modal").fadeOut(500);
        }
      ),
      $(".open-dialog .ok-btn").on("click", function() {
        $('.open-dialog input[name="openInput"]').val()
          ? t($('.open-dialog input[name="openInput"]').val())
          : (t && "function" === typeof t && t(),
            $(".open-dialog,.v-modal").fadeOut(500));
      });
  };
