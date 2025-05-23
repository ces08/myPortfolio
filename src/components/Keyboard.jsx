


export default function Keyboard(){
    return(
        <div>
            <div id = 'keyboard' className = 'flex flex-col rounded-2xl items-center justify-center gap-5 w-250 h-100 border-4'>
                <div className = 'flex gap-5'>
                    <KeyCap imgPath = './src/assets/logos/java.png'/>
                    <KeyCap imgPath = './src/assets/logos/python.png'/>
                    <KeyCap imgPath = './src/assets/logos/js.png'/>
                    <KeyCap imgPath = './src/assets/logos/c.png'/>
                    <KeyCap imgPath = './src/assets/logos/html.png'/>
                    <KeyCap imgPath = './src/assets/logos/css.png'/>
                    <KeyCap imgPath = './src/assets/logos/r.png'/>
                </div>
                <div className = 'flex ml-1 gap-5'>
                    <KeyCap imgPath = './src/assets/logos/react.png'/>
                    <KeyCap imgPath = './src/assets/logos/git.png'/>
                    <KeyCap imgPath = './src/assets/logos/mongoDB.png'/>
                    <KeyCap imgPath = './src/assets/logos/scanpy.png'/>
                    <KeyCap imgPath = './src/assets/logos/nodejs.png'/>
                    <KeyCap imgPath = './src/assets/logos/express.svg'/>
                </div>
                <div className = 'flex w-145 h-20 border-4 bg-white rounded-xl justify-center items-center text-xl'>Languages and Frameworks</div>
            </div>

        </div>

    )
}

function KeyCap({imgPath}){
    return(
        <div className = 'keyCap flex w-20 h-20 p-4 border-4 bg-white rounded-xl justify-center items-center transition-shadow hover:shadow-[0_0_15px_var(--color-accent)]'>
            <img src = {imgPath} className = 'shadow-white w-13 '/>
        </div>
    )
}