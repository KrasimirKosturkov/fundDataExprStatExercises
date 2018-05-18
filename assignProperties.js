function assign(input){
   function obj(){
       obj = new Object();
       this.add = function(key, value){
           obj["" + key + ""] = value;
       }
       this.obj = obj
   }
    my_obj = new obj()
    my_obj.add(input[0], input[1])
    my_obj.add(input[2], input[3])
    my_obj.add(input[4], input[5])

    console.log(my_obj.obj)
}

assign(['name', 'Pesho', 'age', '23', 'gender', 'male'])
assign(['ssid', '90127461', 'status', 'admin', 'expires', '600'])