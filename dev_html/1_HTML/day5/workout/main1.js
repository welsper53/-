// filter활용예제

let items = [
    { id: 1, name: "벤치프레스", count: 0 },
    { id: 2, name: "랫풀다운", count: 0 },
    { id: 3, name: "스쿼트", count: 0 },
]

// 아이템 제목 추가 - ES6 (ECMAScript2016) -> arrow function
const handleAdd = (ss) => {
    const workouts = [...items, {id: items.length+1, name: ss, count:0}]
    console.log(workouts);
    console.log(items);
}
let ss = "test"
handleAdd(ss);


// 아이템 삭제
const handleDelete = (id) => {
    const workouts = items.filter((item) => item.id != id);
    console.log(workouts);
    items = [...workouts]
};

// handleDelete(2)
// console.log(items);

