const testimonials=[
    {
        "id":1,
        "name":"john",
        "testimonial":"I love this product, it's amazing.",
        "image":"https://th.bing.com/th/id/OIP.YQGwtpOGecZajkbh2HMMGAHaHa?w=201&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
        "id":2,
        "name":"alina",
        "testimonial":"So useful! Highly recommend.",
        "image":"https://th.bing.com/th/id/OIP.Xm1EXmPOVQQajFrYh3F_WAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        "id":3,
        "name":"mia",
        "testimonial":"Very easy to use and well designed.",
        "image":"https://th.bing.com/th/id/OIP.EAzMf4436BdR-LVn7u_TOAHaJ4?w=148&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
        "id":4,
        "name":"Jackson",
        "testimonial":"Helped me improve my workflow.",
        "image":"https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5fGVufDB8fDB8fHww"
    }
]

const imgE1=document.querySelector("img");
const textE1=document.querySelector(".text");
const usernameE1=document.querySelector(".username");

let idx=0;
updateTestimonial()
function updateTestimonial(){
const {id,name,testimonial,image}=testimonials[idx]
imgE1.src=image
textE1.innerHTML=testimonial
usernameE1.innerHTML=name
idx++;
if(idx === testimonials.length){
    idx=0;
}
setTimeout(()=>{
updateTestimonial()
},2000)
}