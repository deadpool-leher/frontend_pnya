async function nama() {
    try {
    let response = await fetch("http://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
    } catch (error) {
    console.error("Error:", error);
    }
  }
  
  nama();