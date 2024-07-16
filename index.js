let datas;

// Fetch data from API
let url = "https://api.potterdb.com/v1/movies";
let res;
datas = async () => {
  await fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      res = data;
    })
    .catch((err) => {
      console.log(err);
    });
};
datas();
let flag = true;

if(flag){
setTimeout(() => {
  console.log(res.data);
  let content = document.getElementsByClassName('content');
  for (let item of res.data) {
    
  content[0].innerHTML += `<div class="w-[300px] rounded-md border m-2">
                    <img
                      src="${item.attributes.poster}"
                      alt="Laptop"
                      class="h-[auto] w-full rounded-t-md object-cover"
                    />
                    <div class="p-1">
                      <h1 class="inline-flex items-center text-lg font-semibold">
                        ${item.attributes.title}
                      </h1>
                      <p class="text-sm">
                        <ul role="list">
                            <li class="flex flex-col justify-between gap-x-6 py-5">
                              <div class="flex min-w-0 gap-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                  </svg>
                                <p class="text-sm font-semibold leading-6 text-white-900">${item.attributes.release_date}</p>
                              </div>
                              <div class="flex min-w-0 gap-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                  </svg>                                  
                                  <p class="text-sm font-semibold leading-6 text-white-900">${item.attributes.rating}</p>
                                
                              </div>
                              <div class="flex min-w-0 gap-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                  </svg>
                                  <p class="text-sm font-semibold leading-6 text-white-900">${item.attributes.running_time}</p>
                                
                              </div>
                            </li>
                            </ul>
                      </p>
                      <button
                        type="button"
                        class="mt-1 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick="renderFunc(event)" value="${JSON.stringify(item.attributes)}"
                      >
                      View Movies
                       
                      </button>
                    </div>
                  </div>`;
  }
}, 1200);
}
  function renderFunc(data){
    console.log(data);
  }