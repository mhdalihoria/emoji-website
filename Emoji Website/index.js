const myEmojis = ["👨‍💻", "🏃‍♂️", "🧘‍♂️"]
const emojiInput = document.getElementById("emoji-input")

function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){

    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    if (emojiInput.value === myEmojis[myEmojis.length - 1]) {
        emojiInput.value = ""
        myEmojis.pop()
        renderEmojis()
    }else{
        emojiInput.value = ""
    }
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    if (emojiInput.value === myEmojis[0]) {
        emojiInput.value = ""
        myEmojis.shift()
        renderEmojis()
    }else{
        emojiInput.value = ""
    }
})