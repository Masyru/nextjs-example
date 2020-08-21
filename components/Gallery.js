export default class Gallery extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
            this.fillTheImages()
    }

    fillTheImages(){
            const items = document.querySelector(".grid-layout").childNodes
            items.forEach((obj, i) => {
                    obj.style = `background-image: url('/images/lev/${i}.jpg'); background-size: cover; background-position: center center;`
                    if (i === 48){
                            obj.style = `background-image: url('/images/lev/${i}.jpg'); background-size: auto 100%; background-position: center center;`
                    } else if (i === 22) {
                            obj.style = `background-image: url('/images/lev/${i}.jpg'); background-size: auto 100%; background-position: center center; background-repeat: no-repeat; background-color: #fff`
                    }
            })
    }

    render(){
        const gallery =
            <div className="grid-layout">
                <div className="grid-item grid-item-1"></div>
                <div className="grid-item grid-item-2"></div>
                <div className="grid-item span-3 grid-item-3"></div>
                <div className="grid-item grid-item-4"></div>
                <div className="grid-item span-2 grid-item-5"></div>
                <div className="grid-item grid-item-6"></div>
                <div className="grid-item grid-item-7"></div>
                <div className="grid-item grid-item-8"></div>
                <div className="grid-item grid-item-9"></div>
                <div className="grid-item span-2 grid-item-10"></div>
                <div className="grid-item grid-item-11"></div>
                <div className="grid-item grid-item-12"></div>
                <div className="grid-item span-2 grid-item-13"></div>
                <div className="grid-item grid-item-14"></div>
                <div className="grid-item grid-item-15"></div>
                <div className="grid-item grid-item-16"></div>
                <div className="grid-item span-3 grid-item-17"></div>
                <div className="grid-item grid-item-18"></div>
                <div className="grid-item grid-item-19"></div>
                <div className="grid-item grid-item-20"></div>
                <div className="grid-item span-2 grid-item-21"></div>
                <div className="grid-item grid-item-22"></div>
                <div className="grid-item grid-item-23"></div>
                <div className="grid-item grid-item-24"></div>
                <div className="grid-item grid-item-25"></div>
                <div className="grid-item span-3 grid-item-26"></div>
                <div className="grid-item grid-item-27"></div>
                <div className="grid-item grid-item-28"></div>
                <div className="grid-item grid-item-29"></div>
                <div className="grid-item grid-item-30"></div>
                <div className="grid-item grid-item-31"></div>
                <div className="grid-item grid-item-32"></div>
                <div className="grid-item grid-item-33"></div>
                <div className="grid-item grid-item-34"></div>
                <div className="grid-item grid-item-35"></div>
                <div className="grid-item grid-item-36"></div>
                <div className="grid-item grid-item-37"></div>
                <div className="grid-item grid-item-38"></div>
                <div className="grid-item grid-item-39"></div>
                <div className="grid-item span-3 grid-item-40"></div>
                <div className="grid-item grid-item-41"></div>
                <div className="grid-item grid-item-42"></div>
                <div className="grid-item grid-item-43"></div>
                <div className="grid-item grid-item-44">i</div>
                <div className="grid-item span-3 grid-item-45"></div>
                <div className="grid-item grid-item-46"></div>
                <div className="grid-item grid-item-47"></div>
                <div className="grid-item grid-item-48"></div>
                <div className="grid-item grid-item-49"></div>
                <div className="grid-item grid-item-50"></div>
            </div>

        return(gallery)
    }
}