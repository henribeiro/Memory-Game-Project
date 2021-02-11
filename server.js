const http = require('http')
const url = require ('url')

const host = '127.0.0.1'
const door = 3000

const server = http.createServer((req,res) => {

    
    var html = ''

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
 

    res.write("<html><body><table>")

    res.write("<title> MEMOGAME </title>")

    var obj = url.parse(req.url, true).query
    var lines = parseInt(obj.lines)
    var column = parseInt(obj.column)

    for (i = 0; i < lines; i++) {
        res.write("<tr>");
        for (j = 0; j < column; j++) {
            res.write(`<td style='border: 1px solid black;'>${i},${j}<td>`)
        }

        res.write("</tr>")
    }


    res.write("</table></body></html>")
    const answer = []
    answer['/']= '<h1>HOME</h1>'
    answer['/contato']= '<h1>CONTACT</h1>'
    answer['noURL']= '<h1>URL IS NOT DEFINED</h1>' //JOSÉ HENRIQUE

    

    res.write( answer[req.url] || answer['noURL'])

    res.end()
})

server.listen(door, host, () => {
    console.log(`Servidor de pé em: http://${host}:${door}/`)
    console.log('To drop the server press: Ctrl + C')
})