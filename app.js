const app=Vue.createApp({
    
    data(){
        return{
            firstname:'Adarsh',
            lastname:'jadhav',
            email:'gmail',
            age:'23',
            stay:'mumbai',
            c:10,
            pic:"https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods:{
        getUser(){
            console.log("user")
            this.c+=1;
            this.pic="https://randomuser.me/api/portraits/men/"+this.c+".jpg"
        },
    },
})
app.mount('#app');