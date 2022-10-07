const TreeElement = document.getElementsByClassName("tree")[0].children[0];

function create_Member_Node(text, code) {
    var Li = document.createElement("li");
    var aa = document.createElement("a");
    aa.href = "#";
    // var img = document.createElement("img");
    // img.src = "images/1.png";
    // aa.appendChild(img);
    var span1 = document.createElement("span");
    span1.innerHTML = text + "(" +code +")";
    aa.appendChild(span1);
    // span2 = document.createElement("span");
    // span2.id = "code";
    // span2.innerHTML = code;
    // aa.appendChild(span2);
    Li.appendChild(aa);
    return Li;
}

class Member {
    constructor(name, parent=null) {
        this.name = name;
        if (parent){
            this.code = parent.code + '.' + parent.childs.toString();
        } else {
            this.code = '1';
        }
        this.parent = parent;
        this.childs = 0;
        this.object = create_Member_Node(this.name, this.code);
        this.childsObjects = document.createElement("ul");
    }
    
    add_child(name){
        if (this.childs == 0){
            this.object.appendChild(this.childsObjects);
        } 
        this.childs += 1;
        var child = new Member(name, this);
        this.childsObjects.appendChild(child.object);
        return child;
    }
} 



Parent = new Member("Mustafa");

console.log(Parent.object.innerHTML)

console.log(TreeElement.innerHTML)

TreeElement.appendChild(Parent.object)

Ahmed = Parent.add_child("Ahmed")
Ali = Parent.add_child("Ali")


Ahmed.add_child("Omar")
Ahmed.add_child("Kareem")
Ahmed.add_child("Kareem")

Ali.add_child("Alaa")
Ali.add_child("Alaa")
Ali.add_child("Alaa")

Ali.add_child("Alaa")
Ali.add_child("Alaa")
Ali.add_child("Alaa")

Ali.add_child("Alaa")
Ali.add_child("Alaa")
Ali.add_child("Alaa")

Ali.add_child("Alaa")
Ali.add_child("Alaa")
Ali.add_child("Alaa")

Ali.add_child("Alaa")
Ali.add_child("Alaa")
Ali.add_child("Alaa")

Ali.add_child("Alaa")
Ali.add_child("Alaa")
Ali.add_child("Alaa")
