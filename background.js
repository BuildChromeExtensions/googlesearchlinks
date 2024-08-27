chrome.storage.onChanged.addListener((changes, area) => {
    // the area is == local, sync, session or managed
    // changes have the data of what was changed.
    // for example if links was changed
    console.log('Area', area);
    if (changes.links) {
        console.log('Old Links', changes.links.oldValue) // old json
        console.log('New Links', changes.links.newValue) // new json
    }
})