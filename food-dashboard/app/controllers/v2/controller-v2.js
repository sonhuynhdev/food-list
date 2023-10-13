export let renderFoodList = (foodArr) => {
  let contentHTML = "";
  console.log("♣ ~ renderFoodList ~ renderFoodList:", foodArr);

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
                          </td>
                      </tr>`;
    contentHTML = contentHTML + trString;
  });

  document.getElementById("tbodyFood").innerHTML = contentHTML;
};
