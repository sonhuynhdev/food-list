export let renderFoodList = (foodArr) => {
  let contentHTML = "";
  foodArr.forEach((foodArr) => {
    let { ma, ten, gia, khuyenMai, hinhAnh, moTa, loai, tinhTrang } = foodArr;
    let trString = `<tr>
                          <td>${ma}</td>
                          <td>${ten}</td>
                          <td>${loai}</td>
                          <td>${gia}</td>
                          <td>${khuyenMai}</td>
                          <td>0</td>
                          <td>${tinhTrang}</td>
                          <td>
                            <button class="btn btn-danger" onclick=deleteFood(${ma}) >Xoá</button>
                            <button class="btn btn-primary" onclick=editFood(${ma})>Edit</button>
                          </td>
                      </tr>`;
    contentHTML = contentHTML + trString;
  });

  document.getElementById("tbodyFood").innerHTML = contentHTML;
};

// tạo biến cho chay ,mặn
const monChay = "loai1";
const monMan = "loai2";
const chay = true;
const man = false;
const conMon = true;
const tinhTrangCon = "1";
const tinhTrangHet = "0";
export let showDataForm = (food) => {
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhAnh, moTa } = food;
  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai == chay ? monChay : monMan;
  document.getElementById("giaMon").value = gia;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("tinhTrang").value =
    tinhTrang == conMon ? tinhTrangCon : tinhTrangHet;
  document.getElementById("hinhMon").value = hinhAnh;
  document.getElementById("moTa").value = moTa;
};
