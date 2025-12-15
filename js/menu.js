var new_data = JSON.parse(data)
var food_title_box = document.getElementById("food_title1")
var food_title2 = document.getElementById("food_title2")
var food_list_box= document.getElementById("food_list")
var clickgroupid = new URLSearchParams(location.search)
var groupid = clickgroupid.get("group")

var Json_new = new_data.product_groups[`${groupid - 1}`]
food_title_box.innerText = Json_new.group_title;
food_title2.innerText = Json_new.group_title;



function createHTMLtag(){
    Json_new.group_products.forEach(element => {
        let new_li = document.createElement("li")
        let food_info_box = document.createElement("div")
        food_info_box.className = "food-info";
        let product_name_box = document.createElement("span")
        let product_price_box = document.createElement("span")
        product_name_box.className = "food-title";
        product_price_box.className = "food-price";
        let food_content_box = document.createElement("div")
        food_content_box.className = "food-content";

        food_info_box.appendChild(product_name_box)
        food_info_box.appendChild(product_price_box)
        new_li.appendChild(food_info_box)
        new_li.appendChild(food_content_box)
        food_list_box.append(new_li)

        // setdata 
        product_name_box.innerText = element.product_name;
        product_price_box.innerText = element.product_price;
        food_content_box.innerText = element.product_content;

    });
}

document.addEventListener("DOMContentLoaded", createHTMLtag())