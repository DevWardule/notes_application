const filesystem =require('fs')

filesystem.writeFileSync('notes.txt','My name is Elon Musk.')

filesystem.appendFileSync('notes.txt','I love physics.')