import { layThongtinTuForm } from "./controller-v1.js";

let themMon = () => {
  let data = layThongtinTuForm();
  //destructuring
  let { ma, ten, loai, gia, hinhAnh, tinhTrang, moTa } = data;
  //show data lên layout
  document.getElementById("spMa").innerText = ma;
  document.getElementById("spTenMon").innerText = ten;
  document.getElementById("spLoaiMon").innerText = loai;
  document.getElementById("spGia").innerText = gia;
  document.getElementById("spTT").innerText = tinhTrang == "0" ? "hết" : "còn";
  document.getElementById("imgMonAn").innerText = hinhAnh;
  document.getElementById("pMoTa").innerText = moTa;
  document.getElementById("spKM").innerText = khuyenMai + "%";
  document.getElementById("spGiaKM").innerText = data.tinhGKM();
};

window.themMon = themMon;

// có () => 1
