// Add Google Search to UI

chrome.storage.local.get('links').then(data => {
    if (data.links) {
        const ol = document.querySelector('ol');
        for (const link of data.links) {
            
            const name = link.name;
            const url = link.url;
            const a = document.createElement('a');
            
            a.textContent = name;
            a.href = url;
            
            const li = document.createElement('li');
            li.appendChild(a);
            ol.appendChild(li);
        }
    }
})