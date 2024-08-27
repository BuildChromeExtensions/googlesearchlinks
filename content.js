// get all h3 under an a tag
const h3s = document.querySelectorAll('a h3');

// store {name, url}
const list = [];

// loop through elements
for(const h3 of h3s){
  const a = h3.parentElement;
  const url = a.href;
  const name = h3.textContent;
  list.push({
   name: name, 
   url: url
  });
}

// save to chrome storage
chrome.storage.local.set({ links : list }).then(() => {
  console.log('Saved Successfully');
});
