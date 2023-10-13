import { https } from "../../../service/service.js";
import { layThongtinTuForm } from "../v1/controller-v1.js";
import { renderFoodList } from "./controller-v2.js";
let fetchFoodList = () => {
  https
    .get("/food")
    .then((res) => {
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchFoodList();
function deleteFood(id) {
  https
    .delete(`/food/${id}`)
    .then((res) => {
      // sau khi xoá gọi lại api lấy data mới ~ fetchFoodList()
      fetchFoodList();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
window.deleteFood = deleteFood;

window.addFood = () => {
  let data = layThongtinTuForm();
  https
    .post("/food", food)
    .then((res) => {
      $("#myModal").modal("hide");
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};
