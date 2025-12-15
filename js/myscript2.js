// Conver JSON Object to JS object 
var new_data = JSON.parse(data);
function createFoodbox(){
    if(window.location.pathname === "/ex2_food/index1.html"){
        var foot_parent = document.querySelector("#main-foods"); 
//      console.log(foot_parent)
        for(let i = 0 ; i < new_data.product_groups.length; i++){
            // get img adress for JSon data
            let img_src = new_data.product_groups[i].group_image;
            // get group title from JSON object
            let current_group_title = new_data.product_groups[i].group_title;
            // create div with class foot-box
            let food_box = document.createElement("div")
            food_box.className = "food-box"
            // create img tag and add src iamge adrees from JSON data
            let img = document.createElement("img")
            img.setAttribute("src", `${img_src}`)
            // create div for catpion 
            let caption_box = document.createElement("div")
            caption_box.className = "caption";
            // create h5 with class title
            let title_box = document.createElement("h5")
            title_box.className = "title";
            // create tage a 
            let tag_a = document.createElement("a")
            tag_a.classList.add("link_white")
            tag_a.setAttribute("href", `menu.html?group=${i+1}`)
            // crete text for a
            let text = document.createTextNode(`${current_group_title}`)
            // add all tag
            tag_a.appendChild(text)
            title_box.appendChild(tag_a)
            caption_box.appendChild(title_box)
            food_box.appendChild(img)
            food_box.appendChild(caption_box)
            foot_parent.appendChild(food_box)
        }
    
    }
}
document.addEventListener("DOMContentLoaded", createFoodbox())
