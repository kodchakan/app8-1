const express = require("express")
const app = express();
const post = 8000;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/aip/server-time', (request, response) => {
    let now = new Date()
    let time = {
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
    }
    response.json(time)
})

app.get('/aip/server-table', (request, response) => {
    let table = `
    <table border="1">
        <tr><td>ชื่อ</td><td>นามสกุล</td></tr>
        <tr><td>กชกานต์</td><td>เหล็กสิงห์</td></tr>
        <tr><td>kodchakan</td><td>leksing</td></tr>
    </table>
`
    response.send(table)
})


app.listen(post, () => {
    console.log('Sever listen on post' + post);
})