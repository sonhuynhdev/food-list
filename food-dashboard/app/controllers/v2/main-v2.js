import { https } from "../../../service/service.js";
import { layThongtinTuForm } from "../v1/controller-v1.js";
import { renderFoodList, showDataForm } from "./controller-v2.js";
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
      fetchFoodList();
      $("#myModal").modal("hide");
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};

window.editFood = (id) => {
  $("#exampleModal").modal("show");
  https
    .get(`/food/${id}`)
    .then((res) => {
      showDataForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.updateFood = () => {
  let food = layThongtinTuForm();
  https
    .put(`/food/${food.ma}`, food)
    .then((res) => {
      $("#exampleModal").modal("hide");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};
