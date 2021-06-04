var images =[
"https://upload.wikimedia.org/wikipedia/en/1/1c/Griffin_family.png",
"https://upload.wikimedia.org/wikipedia/en/a/a5/Lois_Griffin.png",
"https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png",
"https://upload.wikimedia.org/wikipedia/en/f/f8/Bolek_and_Lolek.png"
];

var names=["My Family","Sejal Shah","Nikhil Shah","Mahir Shah"];

i=0;
function update(){
    i++;
    var no_of_family_members= 4;
    if(i>no_of_family_members){
       i=0;
    }
    var updated_img= images[i];
    var upddated_names= names[i];
    document.getElementById("family_member_img").src=updated_img;
    document.getElementById("family_member_name").innerHTML=upddated_names;
}